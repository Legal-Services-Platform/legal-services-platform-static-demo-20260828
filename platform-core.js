export const SUPPORTED_LOCALES = Object.freeze(["en", "fr", "zh", "zh-Hant"]);
export const DEFAULT_LOCALE = "en";

export function normalizeLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

export function localized(record, locale, field = "title") {
  const safeLocale = normalizeLocale(locale);
  return (
    record?.translations?.[safeLocale]?.[field] ??
    record?.translations?.[DEFAULT_LOCALE]?.[field] ??
    ""
  );
}

export function filterCatalog(items, locale, query = "", category = "all") {
  const normalizedQuery = query.trim().toLocaleLowerCase(locale);
  return items.filter((item) => {
    const categoryMatch = category === "all" || item.category === category;
    const searchable = [
      localized(item, locale, "title"),
      localized(item, locale, "summary"),
      item.category
    ]
      .join(" ")
      .toLocaleLowerCase(locale);
    return categoryMatch && (!normalizedQuery || searchable.includes(normalizedQuery));
  });
}

export function getRoute(hash) {
  const cleaned = (hash || "#/home").replace(/^#\/?/, "");
  const [route = "home", id = ""] = cleaned.split("/");
  const allowed = new Set([
    "home",
    "services",
    "service",
    "library",
    "product",
    "book",
    "guidance",
    "assessment",
    "about",
    "contact",
    "admin"
  ]);
  return {
    route: allowed.has(route) ? route : "home",
    id
  };
}

export function evaluateGuidance(input, sources) {
  const jurisdiction = input.jurisdiction?.trim();
  const topic = input.topic?.trim();
  const language = normalizeLocale(input.language);
  const situation = input.situation?.trim() ?? "";
  const urgency = input.urgency === true;

  if (!jurisdiction || !topic) {
    return {
      status: "needs_input",
      code: "MISSING_SCOPE",
      language,
      sources: []
    };
  }

  if (urgency || /\b(today|tomorrow|deadline|arrest|hearing|eviction|emergency)\b/i.test(situation)) {
    return {
      status: "escalate",
      code: "URGENT_REVIEW",
      language,
      sources: []
    };
  }

  const eligible = sources.filter(
    (source) =>
      source.status === "approved" &&
      !source.expired &&
      source.jurisdictions.includes(jurisdiction) &&
      source.topics.includes(topic) &&
      source.languages.includes(language)
  );

  if (!eligible.length) {
    return {
      status: "unsupported",
      code: "NO_APPROVED_SOURCE",
      language,
      sources: []
    };
  }

  return {
    status: "supported",
    code: "APPROVED_ORIENTATION",
    language,
    sources: eligible.map((source) => ({
      id: source.id,
      title: source.title,
      version: source.version,
      effectiveDate: source.effectiveDate
    }))
  };
}

export function calculateReadiness({ gates, fixtures, providers, aiSources }) {
  const blockers = [];

  for (const gate of gates) {
    if (gate.blocking && gate.status !== "approved") {
      blockers.push({
        type: "launch_gate",
        id: gate.id,
        message: gate.title
      });
    }
  }

  for (const fixture of fixtures) {
    if (fixture.productionPublished) {
      blockers.push({
        type: "fixture",
        id: fixture.id,
        message: `Fixture content is published: ${fixture.label}`
      });
    }
  }

  for (const [name, provider] of Object.entries(providers)) {
    if (provider.enabled && (provider.mode === "development" || provider.mode === "disabled")) {
      blockers.push({
        type: "provider",
        id: name,
        message: `${name} uses a non-production provider`
      });
    }
  }

  for (const source of aiSources) {
    if (source.status === "approved" && source.expired) {
      blockers.push({
        type: "ai_source",
        id: source.id,
        message: `Approved AI source is expired: ${source.title}`
      });
    }
  }

  return {
    ready: blockers.length === 0,
    blockers
  };
}
