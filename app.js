import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  calculateReadiness,
  evaluateGuidance,
  filterCatalog,
  getRoute,
  localized,
  normalizeLocale
} from "./platform-core.js";
import {
  fixtures,
  knowledgeSources,
  launchGates,
  platformConfig,
  products,
  services
} from "./data.js";
import { copy } from "./i18n.js";

const app = document.querySelector("#app");
const staticDemo = document.documentElement.dataset.staticDemo === "true";
const thoughtLeadershipEvidence = {
  publications: [
    "https://www.omicsonline.org/open-access/when-confidentiality-in-international-commercial-arbitration-ica-is-not-salutary-african-perspectives-on-transparency-2169-0170-1000313.php",
    "https://www.omicsonline.org/open-access/reinforcing-the-definition-of-ecocide-proposed-by-the-independent-expert-panel-iep-in-light-of-the-niger-delta-case-opportunities-and-challenges-2169-0170-1000312.php"
  ],
  engagements: [
    "https://viennaarbitrationdays.com/2022/"
  ]
};
const thoughtLeadershipFieldLabels = {
  en: { sourceTitle: "Source title", sourceType: "Source type", identityMatch: "Identity match", publicationPermission: "Publication permission", pending: "Pending review" },
  fr: { sourceTitle: "Titre de la source", sourceType: "Type de source", identityMatch: "Correspondance d’identité", publicationPermission: "Autorisation de publication", pending: "Revue en attente" },
  zh: { sourceTitle: "来源标题", sourceType: "来源类型", identityMatch: "身份匹配", publicationPermission: "发布许可", pending: "待审查" },
  "zh-Hant": { sourceTitle: "來源標題", sourceType: "來源類型", identityMatch: "身分匹配", publicationPermission: "發布許可", pending: "待審查" }
};
const thoughtLeadershipMeta = {
  credentials: [
    ["About Tezzeta Mbuya N'Gungwa.docx", "Supplied biography", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Public web references reviewed Aug. 29, 2026", "Public legal publication / secondary directory lead", "No identity-matched current official record located", "Not yet approved"]
  ],
  publications: [
    ["Publications, Conferences & Recognition.docx; OMICS article page", "Supplied document + publisher page", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx; OMICS article page", "Supplied document + publisher page", "Not independently matched", "Not yet approved"]
  ],
  engagements: [
    ["Publications, Conferences & Recognition.docx; Vienna Arbitration Days 2022", "Supplied document + event page", "Participation not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Speaker identity not independently matched", "Not yet approved"]
  ],
  development: [
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"],
    ["Publications, Conferences & Recognition.docx", "Supplied recognition document", "Not independently matched", "Not yet approved"]
  ]
};
const safeBarDetail = {
  en: "Public references were reviewed, but no current official or authenticated record matching the full name was located. Identity and current status remain unverified.",
  fr: "Des références publiques ont été examinées, mais aucun document officiel ou authentifié actuel correspondant au nom complet n’a été trouvé. L’identité et le statut actuel restent non vérifiés.",
  zh: "已审阅公开资料，但尚未找到与全名匹配的现行官方或经认证记录。身份和当前状态仍待核实。",
  "zh-Hant": "已審閱公開資料，但尚未找到與全名相符的現行官方或經認證記錄。身分及目前狀態仍待核實。"
};
const STORAGE = {
  locale: "lsp-locale",
  gates: "lsp-gates"
};

const state = {
  locale: normalizeLocale(localStorage.getItem(STORAGE.locale) || DEFAULT_LOCALE),
  route: getRoute(window.location.hash),
  serviceSearch: "",
  serviceCategory: "all",
  productSearch: "",
  productCategory: "all",
  gateStatuses: loadGateStatuses(),
  catalogServices: services,
  adminUser: null,
  auditEvents: [],
  questionnaire: null,
  availabilityRules: [],
  adminBookings: [],
  authConfig: { developmentLoginEnabled: !staticDemo },
  adminFlash: ""
};

function loadGateStatuses() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.gates) || "{}");
  } catch {
    return {};
  }
}

function t() {
  return copy[state.locale];
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name) {
  const icons = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z"/><path d="M8 7h8M8 11h8"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    alert: '<path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${icons[name] || icons.arrow}</svg>`;
}

function routeHref(route, id = "") {
  return `#/${route}${id ? `/${id}` : ""}`;
}

function navLink(route, label) {
  const active = state.route.route === route;
  return `<a href="${routeHref(route)}" ${active ? 'aria-current="page"' : ""}>${escapeHtml(label)}</a>`;
}

function layout(content) {
  const c = t();
  document.documentElement.lang =
    state.locale === "zh" ? "zh-Hans" : state.locale === "zh-Hant" ? "zh-Hant" : state.locale;
  document.title = `${routeTitle()} | Legal Services Platform`;
  return `
    <div class="preview-banner">${escapeHtml(c.banner)}</div>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#/home" aria-label="${escapeHtml(c.nav.home)}">
          <span class="brand-mark">${icon("shield")}</span>
          <span>
            <strong>Legal Services Platform</strong>
            <small>${escapeHtml(c.common.placeholder)}</small>
          </span>
        </a>
        <button class="icon-button mobile-menu" type="button" aria-expanded="false" aria-controls="primary-nav" title="Menu">
          ${icon("menu")}
        </button>
        <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">
          ${navLink("home", c.nav.home)}
          ${navLink("services", c.nav.services)}
          ${navLink("library", c.nav.library)}
          ${navLink("guidance", c.nav.guidance)}
          ${navLink("about", c.nav.about)}
          ${navLink("contact", c.nav.contact)}
          ${navLink("admin", c.nav.admin)}
        </nav>
        <label class="locale-picker">
          <span class="sr-only">Language</span>
          ${icon("globe")}
          <select id="locale-select" aria-label="Language">
            ${SUPPORTED_LOCALES.map(
              (locale) =>
                `<option value="${locale}" ${locale === state.locale ? "selected" : ""}>${escapeHtml(copy[locale].localeName)}</option>`
            ).join("")}
          </select>
        </label>
      </div>
    </header>
    <main id="main" tabindex="-1">${content}</main>
    <footer class="site-footer">
      <div class="footer-inner">
        <p>${escapeHtml(c.footer.notice)}</p>
        <div>
          <span>${escapeHtml(c.footer.privacy)}</span>
          <span>${escapeHtml(c.footer.accessibility)}</span>
        </div>
      </div>
    </footer>
  `;
}

function routeTitle() {
  const c = t();
  return {
    home: c.nav.home,
    services: c.nav.services,
    service: c.nav.services,
    library: c.nav.library,
    product: c.nav.library,
    guidance: c.nav.guidance,
    about: c.nav.about,
    contact: c.nav.contact,
    admin: c.nav.admin
  }[state.route.route];
}

function fixtureBadge() {
  return `<span class="badge badge-warning">${escapeHtml(t().common.placeholder)}</span>`;
}

function homeView() {
  const c = t();
  return `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(c.home.eyebrow)}</p>
        <h1>${escapeHtml(c.home.title)}</h1>
        <p class="hero-copy">${escapeHtml(c.home.intro)}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/services">${icon("calendar")}${escapeHtml(c.home.book)}</a>
          <a class="button button-secondary" href="#/services">${icon("book")}${escapeHtml(c.home.explore)}</a>
          <a class="text-link" href="#/guidance">${escapeHtml(c.home.guide)}${icon("arrow")}</a>
        </div>
        <div class="trust-row">
          <span>${icon("shield")} Source-governed</span>
          <span>${icon("globe")} EN / FR / 简体中文 / 繁體中文</span>
          <span>${icon("lock")} Privacy by design</span>
        </div>
      </div>
      <div class="hero-panel" aria-label="Platform status">
        <div class="status-header">
          <span>${escapeHtml(c.admin.readiness)}</span>
          <strong class="status-red">${escapeHtml(c.admin.blocked)}</strong>
        </div>
        <ol>
          <li><span>01</span>${escapeHtml(c.home.servicesTitle)}</li>
          <li><span>02</span>${escapeHtml(c.home.libraryTitle)}</li>
          <li><span>03</span>${escapeHtml(c.home.guidanceTitle)}</li>
        </ol>
        <a href="#/admin">${escapeHtml(c.nav.admin)}${icon("arrow")}</a>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(c.home.sectionTitle)}</p>
        <h2>${escapeHtml(c.home.sectionTitle)}</h2>
      </div>
      <div class="path-grid">
        ${pathCard("calendar", c.home.servicesTitle, c.home.servicesText, "services")}
        ${pathCard("book", c.home.libraryTitle, c.home.libraryText, "library")}
        ${pathCard("compass", c.home.guidanceTitle, c.home.guidanceText, "guidance")}
      </div>
    </section>
    <section class="section profile-band">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(c.about.profileTitle)}</p>
        <h2>${escapeHtml(c.about.profileTitle)}</h2>
      </div>
      <p class="profile-copy">${escapeHtml(c.about.profileText)}</p>
      <a class="text-link" href="#/about">${escapeHtml(c.about.profileCta)}${icon("arrow")}</a>
    </section>
    <section class="process-band">
      <div class="section-heading">
        <p class="eyebrow">01 — 04</p>
        <h2>${escapeHtml(c.home.processTitle)}</h2>
      </div>
      <ol class="process-list">
        ${c.home.process.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(item)}</p></li>`).join("")}
      </ol>
    </section>
  `;
}

function pathCard(iconName, title, text, route) {
  return `
    <article class="path-card">
      <span class="card-icon">${icon(iconName)}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
      <a class="text-link" href="${routeHref(route)}">${escapeHtml(t().common.learnMore)}${icon("arrow")}</a>
    </article>
  `;
}

function servicesView() {
  const c = t();
  const filtered = filterCatalog(
    state.catalogServices,
    state.locale,
    state.serviceSearch,
    state.serviceCategory
  );
  return pageIntro(
    c.services.title,
    c.services.intro,
    `
      <section class="section compact-top">
        ${catalogControls("service", state.serviceSearch, state.serviceCategory, ["advisory", "documents", "international-law", "research"])}
        <div class="catalog-grid" id="service-results" aria-live="polite">
          ${
            filtered.length
              ? filtered.map(serviceCard).join("")
              : `<p class="empty-state">${escapeHtml(c.common.noResults)}</p>`
          }
        </div>
      </section>
    `
  );
}

function serviceCard(service) {
  return `
    <article class="catalog-card">
      <div class="catalog-meta">${fixtureBadge()}<span>${escapeHtml(service.category)}</span></div>
      <h2>${escapeHtml(localized(service, state.locale))}</h2>
      <p>${escapeHtml(localized(service, state.locale, "summary"))}</p>
      <a class="button button-secondary button-small" href="${routeHref("service", service.id)}">
        ${escapeHtml(t().common.learnMore)}${icon("arrow")}
      </a>
    </article>
  `;
}

function serviceDetailView(id) {
  const service = state.catalogServices.find((item) => item.id === id);
  if (!service) return notFoundView();
  const c = t();
  const tr = service.translations[state.locale] ?? service.translations.en;
  return `
    <section class="detail-header">
      <a class="text-link back-link" href="#/services">${icon("arrow")}${escapeHtml(c.common.back)}</a>
      <div class="catalog-meta">${fixtureBadge()}<span>${escapeHtml(service.category)}</span></div>
      <h1>${escapeHtml(tr.title)}</h1>
      <p>${escapeHtml(tr.summary)}</p>
    </section>
    <section class="detail-layout">
      <div class="detail-content">
        ${detailBlock(c.services.audience, tr.audience)}
        ${detailBlock(c.services.included, tr.included)}
        ${detailBlock(c.services.excluded, tr.excluded)}
      </div>
      <aside class="action-panel">
        <h2>${escapeHtml(c.nav.services)}</h2>
        <p>${escapeHtml(c.contact.notice)}</p>
        <button class="button button-primary" type="button" data-booking="${service.id}" ${service.bookingEnabled ? "" : "disabled"}>
          ${icon("calendar")}${escapeHtml(service.bookingEnabled ? c.services.booking : c.services.disabled)}
        </button>
        <div id="booking-result" class="inline-result" aria-live="polite"></div>
      </aside>
    </section>
  `;
}

function detailBlock(title, text) {
  return `<article class="detail-block"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></article>`;
}

function libraryView() {
  const c = t();
  const filtered = products.filter((item) => {
    const query = state.productSearch.trim().toLocaleLowerCase(state.locale);
    const localizedText = [
      localized(item, state.locale, "title"),
      localized(item, state.locale, "summary"),
      item.category,
      item.resourceType,
      item.language
    ].join(" ").toLocaleLowerCase(state.locale);
    return (!query || localizedText.includes(query)) &&
      (state.productCategory === "all" || item.category === state.productCategory);
  });
  return pageIntro(
    c.library.title,
    c.library.intro,
    `
      <section class="section compact-top">
        ${libraryControls()}
        <div class="catalog-grid" id="product-results" aria-live="polite">
          ${
            filtered.length
              ? filtered.map(productCard).join("")
              : `<p class="empty-state">${escapeHtml(c.common.noResults)}</p>`
          }
        </div>
      </section>
    `
  );
}

function productCard(product) {
  const tr = product.translations[state.locale] ?? product.translations.en;
  return `
    <article class="catalog-card">
      <div class="catalog-meta">${fixtureBadge()}<span>${escapeHtml(product.resourceType ?? "Legal resource")} · ${escapeHtml(product.language ?? "English")}</span></div>
      <h2>${escapeHtml(tr.title)}</h2>
      <p>${escapeHtml(tr.summary)}</p>
      <div class="price-line">${escapeHtml(product.topic ?? product.category)}</div>
      <a class="button button-secondary button-small" href="${routeHref("product", product.id)}">
        ${escapeHtml(t().library.readResource)}${icon("arrow")}
      </a>
    </article>
  `;
}

function productDetailView(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return notFoundView();
  const c = t();
  const tr = product.translations[state.locale] ?? product.translations.en;
  return `
    <section class="detail-header">
      <a class="text-link back-link" href="#/library">${icon("arrow")}${escapeHtml(c.common.back)}</a>
      <div class="catalog-meta">${fixtureBadge()}<span>${escapeHtml(product.category)}</span></div>
      <h1>${escapeHtml(tr.title)}</h1>
      <p>${escapeHtml(tr.summary)}</p>
    </section>
    <section class="detail-layout">
      <div class="detail-content">
        ${detailBlock(c.library.format, tr.format)}
        ${detailBlock(c.library.limitation, tr.limitation)}
      </div>
      <aside class="action-panel">
        <h2>${escapeHtml(c.common.unavailable)}</h2>
        <p>${escapeHtml(tr.limitation)}</p>
        <button class="button button-primary" type="button" disabled>${icon("lock")}${escapeHtml(c.library.purchase)}</button>
      </aside>
    </section>
  `;
}

function catalogControls(prefix, search, category, categories) {
  const c = t();
  return `
    <form class="catalog-controls" id="${prefix}-filters">
      <label class="search-field">
        <span class="sr-only">${escapeHtml(c.common.search)}</span>
        ${icon("search")}
        <input type="search" name="query" value="${escapeHtml(search)}" placeholder="${escapeHtml(c.common.search)}" />
      </label>
      <label>
        <span class="sr-only">${escapeHtml(c.common.all)}</span>
        <select name="category">
          <option value="all">${escapeHtml(c.common.all)}</option>
          ${categories.map((item) => `<option value="${item}" ${item === category ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}
        </select>
      </label>
    </form>
  `;
}

function libraryControls() {
  const c = t();
  const values = ["international-arbitration", "investment-law", "african-trade", "business-human-rights", "extractive-industries", "international-economic-law", "legal-research"];
  const labelsByLocale = {
    en: ["International Arbitration", "Investment Law", "African Trade & AfCFTA", "Business & Human Rights", "Extractive Industries", "International Economic Law", "Legal Research"],
    fr: ["Arbitrage international", "Droit des investissements", "Commerce africain et ZLECAf", "Entreprises et droits humains", "Industries extractives", "Droit économique international", "Recherche juridique"],
    zh: ["国际仲裁", "投资法", "非洲贸易与非洲大陆自贸区", "企业与人权", "采掘业", "国际经济法", "法律研究"],
    "zh-Hant": ["國際仲裁", "投資法", "非洲貿易與非洲大陸自由貿易區", "企業與人權", "採掘業", "國際經濟法", "法律研究"]
  };
  const topics = values.map((value, index) => [value, (labelsByLocale[state.locale] || labelsByLocale.en)[index]]);
  return `
    <form class="catalog-controls library-controls" id="product-filters">
      <label class="search-field">
        <span class="sr-only">${escapeHtml(c.common.search)}</span>
        ${icon("search")}
        <input type="search" name="query" value="${escapeHtml(state.productSearch)}" placeholder="${escapeHtml(c.library.searchPlaceholder)}" />
      </label>
      <label>
        <span>${escapeHtml(c.library.topicFilter)}</span>
        <select name="category">
          <option value="all">${escapeHtml(c.common.all)}</option>
          ${topics.map(([value, label]) => `<option value="${value}" ${value === state.productCategory ? "selected" : ""}>${escapeHtml(label)}</option>`).join("")}
        </select>
      </label>
    </form>
    <p class="filter-note">${escapeHtml(c.library.filterBy)}: ${escapeHtml(({ en: "🇬🇧 English · 🇫🇷 Français · 🇨🇳 中文 (Simplified / Traditional)", fr: "🇬🇧 English · 🇫🇷 Français · 🇨🇳 中文 (chinois simplifié / traditionnel)", zh: "🇬🇧 English · 🇫🇷 Français · 🇨🇳 中文（简体中文 / 繁體中文）", "zh-Hant": "🇬🇧 English · 🇫🇷 Français · 🇨🇳 中文（簡體中文 / 繁體中文）" }[state.locale] || "🇬🇧 English · 🇫🇷 Français · 🇨🇳 中文"))} · ${escapeHtml(c.library.resourceType)}: ${escapeHtml(c.library.readResource)}</p>
  `;
}

function guidanceView() {
  const c = t().guidance;
  return pageIntro(
    c.title,
    c.intro,
    `
      <section class="guidance-layout section compact-top">
        <form id="guidance-form" class="form-panel" novalidate>
          <label>
            <span>${escapeHtml(c.jurisdiction)} <em>${escapeHtml(t().common.required)}</em></span>
            <select name="jurisdiction" required>
              <option value="">${escapeHtml(c.select)}</option>
              <option value="DEMO">${escapeHtml(c.demoJurisdiction)}</option>
              <option value="UNSUPPORTED">Other / unsupported</option>
            </select>
          </label>
          <label>
            <span>${escapeHtml(c.topic)} <em>${escapeHtml(t().common.required)}</em></span>
            <select name="topic" required>
              <option value="">${escapeHtml(c.select)}</option>
              <option value="orientation">${escapeHtml(c.demoTopic)}</option>
              <option value="unsupported">Other / unsupported</option>
            </select>
          </label>
          <label>
            <span>${escapeHtml(c.situation)}</span>
            <textarea name="situation" rows="6" maxlength="1200"></textarea>
          </label>
          <label class="checkbox-row">
            <input type="checkbox" name="urgency" />
            <span>${escapeHtml(c.urgent)}</span>
          </label>
          <button class="button button-primary" type="submit">${icon("compass")}${escapeHtml(t().common.submit)}</button>
        </form>
        <section class="result-panel" aria-live="polite" aria-labelledby="guidance-result-title">
          <span class="card-icon">${icon("shield")}</span>
          <h2 id="guidance-result-title">${escapeHtml(c.result)}</h2>
          <div id="guidance-result">
            <p>${escapeHtml(c.missingText)}</p>
          </div>
        </section>
      </section>
    `
  );
}

function guidanceResult(result) {
  const c = t().guidance;
  const content = {
    needs_input: [c.missingTitle, c.missingText, "alert"],
    unsupported: [c.unsupportedTitle, c.unsupportedText, "alert"],
    escalate: [c.urgentTitle, c.urgentText, "alert"],
    supported: [c.supportedTitle, c.supportedText, "check"]
  }[result.status];
  return `
    <div class="result-status result-${result.status}">${icon(content[2])}<strong>${escapeHtml(content[0])}</strong></div>
    <p>${escapeHtml(content[1])}</p>
    ${
      result.status === "supported"
        ? `
          <ol class="guidance-structure">
            ${c.structure.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
          <div class="source-box">
            <strong>${escapeHtml(c.result)}</strong>
            ${result.sources.map((source) => `<p>${escapeHtml(source.title)} · ${escapeHtml(source.version)} · ${escapeHtml(source.effectiveDate)}</p>`).join("")}
          </div>
        `
        : ""
    }
    <p class="fine-print">${escapeHtml(c.disclaimer)}</p>
  `;
}

function aboutView() {
  const c = t().about;
  const labels = thoughtLeadershipFieldLabels[state.locale] || thoughtLeadershipFieldLabels.en;
  const fields = (meta = []) =>
    `<dl class="evidence-fields"><div><dt>${escapeHtml(labels.sourceTitle)}</dt><dd>${escapeHtml(meta[0] || "Not supplied")}</dd></div><div><dt>${escapeHtml(labels.sourceType)}</dt><dd>${escapeHtml(meta[1] || "Not supplied")}</dd></div><div><dt>${escapeHtml(labels.identityMatch)}</dt><dd>${escapeHtml(meta[2] || labels.pending)}</dd></div><div><dt>${escapeHtml(labels.publicationPermission)}</dt><dd>${escapeHtml(meta[3] || labels.pending)}</dd></div></dl>`;
  return pageIntro(
    c.title,
    c.text,
    `
      <section class="section compact-top">
        <div class="profile-highlight">
          <p class="eyebrow">${escapeHtml(c.profileTitle)}</p>
          <h2>${escapeHtml(c.profileTitle)}</h2>
          <p class="profile-tagline">${escapeHtml(c.profileTagline)}</p>
          ${c.profileParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
        <div class="expertise-strip">
          <p class="eyebrow">${escapeHtml(c.expertiseTitle)}</p>
          <h2>${escapeHtml(c.expertiseTitle)}</h2>
          <div class="expertise-list">
            ${c.expertise.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>
        <div class="credentials-section">
          <div>
            <p class="eyebrow">${escapeHtml(c.credentialsTitle)}</p>
            <h2>${escapeHtml(c.credentialsTitle)}</h2>
            <p>${escapeHtml(c.credentialsIntro)}</p>
          </div>
          <ul class="credentials-list">
            ${c.credentials
              .map(
                (item, index) =>
                  `<li><div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(index === 5 ? safeBarDetail[state.locale] : item.detail)}</p>${fields(thoughtLeadershipMeta.credentials[index])}</div><span class="badge badge-warning">${escapeHtml(c.credentialsPending)}</span></li>`
              )
              .join("")}
          </ul>
        </div>
        <div class="thought-leadership-section">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(c.thoughtLeadershipTitle)}</p>
            <h2>${escapeHtml(c.thoughtLeadershipTitle)}</h2>
            <p>${escapeHtml(c.thoughtLeadershipText)}</p>
          </div>
          <div class="thought-leadership-grid">
            <article>
              <h3>${escapeHtml(c.publicationsTitle)}</h3>
              <ul>${c.publications
                .map(
                  (item, index) =>
                    `<li><div>${escapeHtml(item)}${thoughtLeadershipEvidence.publications[index] ? ` <a href="${thoughtLeadershipEvidence.publications[index]}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.evidenceLinkLabel || "Evidence link")}</a>` : ""}</div>${fields(thoughtLeadershipMeta.publications[index])}</li>`
                )
                .join("")}</ul>
            </article>
            <article>
              <h3>${escapeHtml(c.engagementTitle)}</h3>
              <ul>${c.engagements
                .map(
                  (item, index) =>
                    `<li><div>${escapeHtml(item)}${thoughtLeadershipEvidence.engagements[index] ? ` <a href="${thoughtLeadershipEvidence.engagements[index]}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.evidenceLinkLabel || "Evidence link")}</a>` : ""}</div>${fields(thoughtLeadershipMeta.engagements[index])}</li>`
                )
                .join("")}</ul>
            </article>
            <article>
              <h3>${escapeHtml(c.developmentTitle)}</h3>
              <ul>${c.development.map((item, index) => `<li><div>${escapeHtml(item)}</div>${fields(thoughtLeadershipMeta.development[index])}</li>`).join("")}</ul>
            </article>
          </div>
        </div>
        <div class="principles">
          <div>
            <p class="eyebrow">${escapeHtml(c.principlesTitle)}</p>
            <h2>${escapeHtml(c.principlesTitle)}</h2>
          </div>
          <ul>
            ${c.principles.map((item) => `<li>${icon("check")}<span>${escapeHtml(item)}</span></li>`).join("")}
          </ul>
        </div>
      </section>
    `
  );
}

function contactView() {
  const c = t().contact;
  return pageIntro(
    c.title,
    c.intro,
    `
      <section class="section compact-top contact-layout">
        <form id="contact-form" class="form-panel" novalidate>
          <label><span>${escapeHtml(c.name)} <em>${escapeHtml(t().common.required)}</em></span><input name="name" required maxlength="100" /></label>
          <label><span>${escapeHtml(c.email)} <em>${escapeHtml(t().common.required)}</em></span><input name="email" type="email" required maxlength="200" /></label>
          <label><span>${escapeHtml(c.message)} <em>${escapeHtml(t().common.required)}</em></span><textarea name="message" required minlength="20" maxlength="2000" rows="7"></textarea></label>
          <div class="notice-box">${icon("alert")}<p>${escapeHtml(c.notice)}</p></div>
          <button class="button button-primary" type="submit">${escapeHtml(t().common.submit)}${icon("arrow")}</button>
          <div id="contact-result" class="inline-result" aria-live="polite"></div>
        </form>
        <aside class="contact-aside">
          <span class="card-icon">${icon("lock")}</span>
          <h2>Development adapter</h2>
          <p>No information leaves this browser. The production notification provider remains disabled until privacy, security, retention, and vendor review are complete.</p>
        </aside>
      </section>
    `
  );
}

function adminView() {
  const c = t().admin;
  const effectiveGates = launchGates.map((gate) => ({
    ...gate,
    status: state.gateStatuses[gate.id] || gate.status
  }));
  const readiness = calculateReadiness({
    gates: effectiveGates,
    fixtures,
    providers: platformConfig.providers,
    aiSources: knowledgeSources
  });
  return pageIntro(
    c.title,
    c.intro,
    `
      <section class="section compact-top admin-grid">
        <div class="admin-auth">
          <div class="admin-heading">
            <div>
              <p class="eyebrow">Server boundary</p>
              <h2>Development administrator</h2>
            </div>
            ${
              state.adminUser
                ? `<button class="button button-secondary button-small" type="button" id="admin-logout">Log out</button>`
                : ""
            }
          </div>
          ${
            state.adminUser
              ? `<p class="success-message">${icon("check")}<span>Authenticated as ${escapeHtml(state.adminUser.name)}. Server-side versioning and audit events are enabled.</span></p>`
              : staticDemo
                ? `<div class="notice-box">${icon("lock")}<p>This temporary static demo has no authentication, server-side administration, persistence, booking provider, or payment provider. Launch-gate selections below remain in this browser only and are not approvals.</p></div>`
              : !state.authConfig.developmentLoginEnabled
                ? `<div class="notice-box">${icon("lock")}<p>Local development login is disabled. <a href="${escapeHtml(state.authConfig.signInUrl || "/api/auth/signin")}">Sign in with the approved identity provider</a>.</p></div>`
              : `
                <form id="admin-login-form" class="admin-login-form">
                  <label><span>Development key</span><input name="key" type="password" value="development-only-admin" autocomplete="off" /></label>
                  <button class="button button-primary button-small" type="submit">Authenticate</button>
                  <p class="fine-print">Development adapter only. Replace with approved identity infrastructure before production.</p>
                  <div id="admin-login-result" class="inline-result" aria-live="polite"></div>
                </form>
              `
          }
        </div>
        <div class="admin-main">
          <div class="admin-heading">
            <div>
              <p class="eyebrow">${escapeHtml(c.localOnly)}</p>
              <h2>${escapeHtml(c.gates)}</h2>
            </div>
            <button class="button button-secondary button-small" type="button" id="reset-gates">${escapeHtml(c.reset)}</button>
          </div>
          <div class="gate-list">
            ${effectiveGates.map(gateRow).join("")}
          </div>
          ${
            state.adminUser
              ? `
                <div class="version-panel">
                  <div class="admin-heading">
                    <div>
                      <p class="eyebrow">Versioned services</p>
                      <h2>Publish a server-side revision</h2>
                    </div>
                  </div>
                  <form id="service-version-form" class="version-form">
                    <label><span>Service</span><select name="serviceId">${state.catalogServices.map((service) => `<option value="${service.id}">${escapeHtml(localized(service, state.locale))}</option>`).join("")}</select></label>
                    <label><span>English title</span><input name="title" required value="${escapeHtml(localized(state.catalogServices[0] || {}, "en"))}" /></label>
                    <label><span>English summary</span><textarea name="summary" rows="3" required>${escapeHtml(localized(state.catalogServices[0] || {}, "en", "summary"))}</textarea></label>
                    <label class="checkbox-row"><input name="publish" type="checkbox" /><span>Publish locally (still subject to production launch gates)</span></label>
                    <button class="button button-secondary button-small" type="submit">Create version</button>
                    <div id="version-result" class="inline-result" aria-live="polite">${
                      state.adminFlash
                        ? `<div class="success-message">${icon("check")}<span>${escapeHtml(state.adminFlash)}</span></div>`
                        : ""
                    }</div>
                  </form>
                </div>
                <div class="version-panel admin-management-grid">
                  <section>
                    <p class="eyebrow">Versioned questionnaires</p>
                    <h2>Orientation intake</h2>
                    <p>Current version: <strong>${escapeHtml(state.questionnaire?.currentVersion ?? "not loaded")}</strong></p>
                    <form id="questionnaire-version-form" class="stacked-admin-form">
                      <label><span>English jurisdiction label</span><input name="jurisdictionLabel" required value="Country or jurisdiction" /></label>
                      <label class="checkbox-row"><input name="publish" type="checkbox" /><span>Publish this version</span></label>
                      <button class="button button-secondary button-small" type="submit">Create questionnaire version</button>
                      <div id="questionnaire-result" class="inline-result" aria-live="polite"></div>
                    </form>
                  </section>
                  <section>
                    <p class="eyebrow">Availability rules</p>
                    <h2>Booking schedule</h2>
                    <form id="availability-form" class="stacked-admin-form">
                      <label><span>Time zone</span><input name="timezone" required value="America/New_York" /></label>
                      <div class="compact-fields">
                        <label><span>Weekday (0-6)</span><input name="weekday" type="number" min="0" max="6" required value="2" /></label>
                        <label><span>Start minute</span><input name="startMinute" type="number" min="0" max="1439" required value="540" /></label>
                        <label><span>End minute</span><input name="endMinute" type="number" min="1" max="1440" required value="1020" /></label>
                      </div>
                      <button class="button button-secondary button-small" type="submit">Add availability rule</button>
                      <div id="availability-result" class="inline-result" aria-live="polite"></div>
                    </form>
                    <div class="data-table compact-data">
                      ${state.availabilityRules.map((rule) => `<div><strong>${escapeHtml(rule.timezone)} · day ${escapeHtml(rule.weekday)}</strong><span>${escapeHtml(rule.startMinute)}-${escapeHtml(rule.endMinute)} · ${rule.active ? "active" : "inactive"}</span></div>`).join("") || `<div><strong>No rules</strong><span>Add a schedule rule</span></div>`}
                    </div>
                  </section>
                </div>
                <div class="version-panel">
                  <p class="eyebrow">Booking operations</p>
                  <h2>Status and payment reconciliation</h2>
                  <div class="data-table admin-booking-list">
                    ${
                      state.adminBookings.length
                        ? state.adminBookings.map((booking) => `
                          <div>
                            <span class="booking-summary"><strong>${escapeHtml(booking.id)}</strong><small>${escapeHtml(booking.status)} · ${escapeHtml(booking.clientTimezone)}</small></span>
                            <span class="admin-row-actions">
                              <select data-booking-status="${escapeHtml(booking.id)}" aria-label="Booking status">
                                ${["pending_payment", "confirmed", "cancelled", "expired", "failed"].map((status) => `<option value="${status}" ${booking.status === status ? "selected" : ""}>${status}</option>`).join("")}
                              </select>
                              <button class="button button-secondary button-small" type="button" data-reconcile-booking="${escapeHtml(booking.id)}">Reconcile success</button>
                            </span>
                          </div>
                        `).join("")
                        : `<div><strong>No bookings</strong><span>Public booking activity will appear here</span></div>`
                    }
                  </div>
                  <div id="booking-admin-result" class="inline-result" aria-live="polite"></div>
                </div>
              `
              : ""
          }
        </div>
        <aside class="readiness-panel">
          <span class="card-icon">${icon(readiness.ready ? "check" : "alert")}</span>
          <p class="eyebrow">${escapeHtml(c.readiness)}</p>
          <h2 class="${readiness.ready ? "status-green" : "status-red"}">${escapeHtml(readiness.ready ? c.ready : c.blocked)}</h2>
          <p>${readiness.blockers.length} blocker(s) detected by the local readiness evaluator.</p>
          <ul>
            ${readiness.blockers.slice(0, 7).map((blocker) => `<li>${escapeHtml(blocker.message)}</li>`).join("")}
          </ul>
        </aside>
      </section>
      <section class="section split-table-section">
        <div>
          <p class="eyebrow">${escapeHtml(c.providerTitle)}</p>
          <h2>${escapeHtml(c.providerTitle)}</h2>
          <div class="data-table">
            ${Object.entries(platformConfig.providers).map(([name, provider]) => `<div><strong>${escapeHtml(name)}</strong><span>${escapeHtml(provider.mode)}</span></div>`).join("")}
          </div>
        </div>
        <div>
          <p class="eyebrow">${escapeHtml(c.sourceTitle)}</p>
          <h2>${escapeHtml(c.sourceTitle)}</h2>
          <div class="data-table">
            ${knowledgeSources.map((source) => `<div><strong>${escapeHtml(source.title)}</strong><span>${escapeHtml(source.version)} · ${escapeHtml(source.status)}</span></div>`).join("")}
          </div>
        </div>
        ${
          state.adminUser
            ? `
              <div>
                <p class="eyebrow">Audit events</p>
                <h2>Filtered server activity</h2>
                <form id="audit-filter-form" class="audit-filter-form">
                  <label><span>Action contains</span><input name="action" placeholder="booking or questionnaire" /></label>
                  <label><span>Target type</span><input name="targetType" placeholder="Booking" /></label>
                  <button class="button button-secondary button-small" type="submit">Apply filters</button>
                </form>
                <div class="data-table">
                  ${
                    state.auditEvents.length
                      ? state.auditEvents.slice(0, 12).map((event) => `<div><strong>${escapeHtml(event.action)}</strong><span>${escapeHtml(event.targetType ?? "")} ${escapeHtml(event.targetId ?? "")}<br />${escapeHtml(event.createdAt ?? event.at ?? "")}</span></div>`).join("")
                      : `<div><strong>No events yet</strong><span>Authenticate or create a version</span></div>`
                  }
                </div>
              </div>
            `
            : ""
        }
      </section>
    `
  );
}

function gateRow(gate) {
  return `
    <article class="gate-row">
      <div>
        <span class="gate-id">${escapeHtml(gate.id)}</span>
        <h3>${escapeHtml(gate.title)}</h3>
        <p>${escapeHtml(gate.owner)}</p>
      </div>
      <label>
        <span class="sr-only">${escapeHtml(t().common.status)}</span>
        <select data-gate="${escapeHtml(gate.id)}">
          <option value="open" ${gate.status === "open" ? "selected" : ""}>Open</option>
          <option value="in_review" ${gate.status === "in_review" ? "selected" : ""}>In review</option>
          <option value="approved" ${gate.status === "approved" ? "selected" : ""}>Approved locally</option>
        </select>
      </label>
    </article>
  `;
}

function pageIntro(title, intro, body) {
  return `
    <section class="page-intro">
      <p class="eyebrow">Legal Services Platform</p>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(intro)}</p>
    </section>
    ${body}
  `;
}

function notFoundView() {
  return pageIntro("Not found", "The requested development route does not exist.", "");
}

function render() {
  const view = {
    home: homeView,
    services: servicesView,
    service: () => serviceDetailView(state.route.id),
    book: () => bookingView(state.route.id),
    library: libraryView,
    product: () => productDetailView(state.route.id),
    guidance: guidanceView,
    about: aboutView,
    contact: contactView,
    admin: adminView
  }[state.route.route]();

  app.innerHTML = layout(view);
  bindEvents();
}

function bookingView(serviceId = "service-orientation") {
  const c = t();
  const service = state.catalogServices.find((item) => item.id === serviceId) ?? state.catalogServices[0];
  return pageIntro(
    c.services.title,
    c.services.intro,
    `
      <section class="section compact-top booking-layout">
        <form id="booking-form" class="form-panel" novalidate>
          <input type="hidden" name="serviceId" value="${escapeHtml(service?.id || "service-orientation")}" />
          <label>
            <span>1. ${escapeHtml(c.services.title)}</span>
            <select name="serviceId" id="booking-service">
              ${state.catalogServices.map((item) => `<option value="${item.id}" ${item.id === service?.id ? "selected" : ""}>${escapeHtml(localized(item, state.locale))}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>2. ${escapeHtml(t().guidance.jurisdiction)} <em>${escapeHtml(t().common.required)}</em></span>
            <input name="jurisdiction" required placeholder="${escapeHtml(t().guidance.demoJurisdiction)}" />
          </label>
          <label>
            <span>3. ${escapeHtml(t().contact.name)} <em>${escapeHtml(t().common.required)}</em></span>
            <input name="name" required maxlength="100" />
          </label>
          <label>
            <span>4. ${escapeHtml(t().contact.email)} <em>${escapeHtml(t().common.required)}</em></span>
            <input name="email" type="email" required maxlength="200" />
          </label>
          <label>
            <span>5. Time zone</span>
            <input name="clientTimezone" value="${escapeHtml(Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC")}" />
          </label>
          <label>
            <span>6. Available slot <em>${escapeHtml(t().common.required)}</em></span>
            <select name="slotId" id="slot-select" required>
              <option value="">Loading slots…</option>
            </select>
          </label>
          <div class="notice-box">${icon("alert")}<p>${escapeHtml(t().contact.notice)}</p></div>
          <button class="button button-primary" type="submit">${icon("calendar")}Create development booking hold</button>
          <div id="booking-form-result" class="inline-result" aria-live="polite"></div>
        </form>
        <aside class="result-panel">
          <span class="card-icon">${icon("calendar")}</span>
          <h2>Booking and payment state</h2>
          <div id="booking-state" class="booking-state">
            <p>Slots are loaded from the development booking adapter. No live calendar or payment provider is connected.</p>
          </div>
        </aside>
      </section>
    `
  );
}

function bindEvents() {
  document.querySelector("#locale-select")?.addEventListener("change", (event) => {
    state.locale = normalizeLocale(event.target.value);
    localStorage.setItem(STORAGE.locale, state.locale);
    render();
  });

  const menuButton = document.querySelector(".mobile-menu");
  const nav = document.querySelector("#primary-nav");
  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.innerHTML = icon(expanded ? "menu" : "close");
    nav.classList.toggle("open", !expanded);
  });

  bindCatalogForm("service", (query, category) => {
    state.serviceSearch = query;
    state.serviceCategory = category;
  });
  bindCatalogForm("product", (query, category) => {
    state.productSearch = query;
    state.productCategory = category;
  });

  document.querySelector("#guidance-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = evaluateGuidance(
      {
        jurisdiction: formData.get("jurisdiction"),
        topic: formData.get("topic"),
        situation: formData.get("situation"),
        urgency: formData.get("urgency") === "on",
        language: state.locale
      },
      knowledgeSources
    );
    document.querySelector("#guidance-result").innerHTML = guidanceResult(result);
  });

  document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const result = document.querySelector("#contact-result");
    if (!form.checkValidity()) {
      form.reportValidity();
      result.textContent = "";
      return;
    }
    result.innerHTML = `<div class="success-message">${icon("check")}<span>${escapeHtml(t().contact.success)}</span></div>`;
    form.reset();
  });

  document.querySelector("[data-booking]")?.addEventListener("click", () => {
    window.location.hash = `#/book/${document.querySelector("[data-booking]").dataset.booking}`;
  });

  const bookingForm = document.querySelector("#booking-form");
  if (bookingForm) {
    loadBookingSlots();
    bookingForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const result = document.querySelector("#booking-form-result");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (staticDemo) {
        result.innerHTML = `<div class="notice-box">${icon("lock")}<p>Static demo only: no booking was created and no information was transmitted. Live booking requires approved providers, policies, security controls, and server-side persistence.</p></div>`;
        return;
      }
      const data = new FormData(form);
      const idempotencyKey = `dev-${crypto.randomUUID()}`;
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: data.get("serviceId"),
          slotId: data.get("slotId"),
          locale: state.locale,
          clientTimezone: data.get("clientTimezone"),
          idempotencyKey
        })
      });
      const payload = await response.json();
      if (!response.ok) {
        result.textContent = payload.error || "Booking could not be created.";
        return;
      }
      result.innerHTML = `<div class="success-message">${icon("check")}<span>Development booking hold created. Payment reconciliation is still required.</span></div>`;
      document.querySelector("#booking-state").innerHTML = `
        <div class="state-stack">
          <p><strong>Booking ID</strong><br />${escapeHtml(payload.id)}</p>
          <p><strong>Status</strong><br /><span class="status-red">${escapeHtml(payload.status)}</span></p>
          <button class="button button-secondary button-small" type="button" id="reconcile-payment">Mark development payment succeeded</button>
          <div id="payment-result" class="inline-result" aria-live="polite"></div>
        </div>
      `;
      document.querySelector("#reconcile-payment")?.addEventListener("click", async () => {
        const payment = await fetch(`/api/booking/${encodeURIComponent(payload.id)}/payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            status: "succeeded",
            provider: "development",
            amountMinor: 0,
            currency: "USD",
            idempotencyKey: `payment-${payload.id}`
          })
        });
        const paymentPayload = await payment.json();
        document.querySelector("#payment-result").innerHTML = payment.ok
          ? `<div class="success-message">${icon("check")}<span>Payment reconciled; booking is now confirmed in the development adapter.</span></div>`
          : `<div class="notice-box">${icon("alert")}<p>${escapeHtml(paymentPayload.error || "Payment reconciliation failed.")}</p></div>`;
      });
    });
  }

  document.querySelectorAll("[data-gate]").forEach((select) => {
    select.addEventListener("change", (event) => {
      state.gateStatuses[event.target.dataset.gate] = event.target.value;
      localStorage.setItem(STORAGE.gates, JSON.stringify(state.gateStatuses));
      render();
    });
  });

  document.querySelector("#reset-gates")?.addEventListener("click", () => {
    state.gateStatuses = {};
    localStorage.removeItem(STORAGE.gates);
    render();
  });

  document.querySelector("#admin-login-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = document.querySelector("#admin-login-result");
    const response = await fetch("/api/auth/dev-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: formData.get("key") })
    });
    if (!response.ok) {
      result.textContent = "Authentication failed.";
      return;
    }
    const payload = await response.json();
    state.adminUser = payload.user;
    await refreshServerState();
    render();
  });

  document.querySelector("#admin-logout")?.addEventListener("click", async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    state.adminUser = null;
    state.auditEvents = [];
    render();
  });

  document.querySelector("#service-version-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const service = state.catalogServices.find((item) => item.id === formData.get("serviceId"));
    const result = document.querySelector("#version-result");
    const translations = structuredClone(service.translations);
    translations.en = {
      ...translations.en,
      title: String(formData.get("title")),
      summary: String(formData.get("summary"))
    };
    const response = await fetch(`/api/admin/services/${encodeURIComponent(service.id)}/versions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: formData.get("publish") === "on" ? "published" : "draft",
        translations
      })
    });
    if (!response.ok) {
      result.textContent = "Version could not be created.";
      return;
    }
    state.adminFlash = "Server-side version created and audit event recorded.";
    await refreshServerState();
    render();
  });

  document.querySelector("#questionnaire-version-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/questionnaires/orientation/versions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: formData.get("publish") === "on" ? "published" : "draft",
        questions: [
          {
            key: "matterType",
            type: "select",
            required: true,
            order: 1,
            translations: {
              en: "What type of matter are you exploring?",
              fr: "Quel type de question explorez-vous ?",
              zh: "您正在了解哪类事项？"
            }
          },
          {
            key: "jurisdiction",
            type: "text",
            required: true,
            order: 2,
            translations: {
              en: String(formData.get("jurisdictionLabel")),
              fr: "Pays ou juridiction",
              zh: "国家或司法管辖区"
            }
          }
        ]
      })
    });
    const result = document.querySelector("#questionnaire-result");
    if (!response.ok) {
      result.textContent = "Questionnaire version could not be created.";
      return;
    }
    state.adminFlash = "Questionnaire version created and audited.";
    await refreshServerState();
    render();
  });

  document.querySelector("#availability-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serviceId: "service-orientation",
        timezone: formData.get("timezone"),
        weekday: Number(formData.get("weekday")),
        startMinute: Number(formData.get("startMinute")),
        endMinute: Number(formData.get("endMinute")),
        active: true
      })
    });
    const payload = await response.json();
    if (!response.ok) {
      document.querySelector("#availability-result").textContent =
        payload.error || "Availability rule could not be created.";
      return;
    }
    state.adminFlash = "Availability rule created and audited.";
    await refreshServerState();
    render();
  });

  document.querySelectorAll("[data-booking-status]").forEach((select) => {
    select.addEventListener("change", async (event) => {
      const response = await fetch(
        `/api/admin/bookings/${encodeURIComponent(event.target.dataset.bookingStatus)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            status: event.target.value,
            reason: "Updated from the development administration interface"
          })
        }
      );
      if (!response.ok) {
        document.querySelector("#booking-admin-result").textContent = "Booking status update failed.";
        return;
      }
      state.adminFlash = "Booking status updated and audited.";
      await refreshServerState();
      render();
    });
  });

  document.querySelectorAll("[data-reconcile-booking]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const bookingId = event.currentTarget.dataset.reconcileBooking;
      const response = await fetch(
        `/api/admin/bookings/${encodeURIComponent(bookingId)}/payment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            status: "succeeded",
            provider: "development-admin",
            amountMinor: 0,
            currency: "USD",
            idempotencyKey: `admin-payment-${bookingId}`
          })
        }
      );
      const payload = await response.json();
      if (!response.ok) {
        document.querySelector("#booking-admin-result").textContent =
          payload.error || "Payment reconciliation failed.";
        return;
      }
      state.adminFlash = "Payment reconciled and booking state refreshed.";
      await refreshServerState();
      render();
    });
  });

  document.querySelector("#audit-filter-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();
    for (const name of ["action", "targetType"]) {
      const value = String(formData.get(name) || "").trim();
      if (value) params.set(name, value);
    }
    const response = await fetch(`/api/admin/audit?${params}`);
    if (response.ok) {
      state.auditEvents = (await response.json()).events;
      render();
    }
  });
}

async function loadBookingSlots() {
  const select = document.querySelector("#slot-select");
  if (!select) return;
  if (staticDemo) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const startsAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    startsAt.setUTCHours(14, 0, 0, 0);
    select.innerHTML = `<option value="static-demo-slot">${escapeHtml(
      startsAt.toLocaleString(state.locale, {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: timezone
      })
    )} (${escapeHtml(timezone)}) - sample only</option>`;
    return;
  }
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const response = await fetch(`/api/booking/slots?timezone=${encodeURIComponent(timezone)}`);
    const payload = await response.json();
    select.innerHTML = payload.slots
      .map(
        (slot) =>
          `<option value="${escapeHtml(slot.id)}">${escapeHtml(new Date(slot.startsAt).toLocaleString(state.locale, { dateStyle: "medium", timeStyle: "short", timeZone: timezone }))} (${escapeHtml(timezone)})</option>`
      )
      .join("");
  } catch {
    select.innerHTML = `<option value="">Slots unavailable</option>`;
  }
}

function bindCatalogForm(prefix, update) {
  const form = document.querySelector(`#${prefix}-filters`);
  if (!form) return;
  const refresh = () => {
    const formData = new FormData(form);
    update(String(formData.get("query") || ""), String(formData.get("category") || "all"));
    render();
    document.querySelector(`#${prefix}-filters input`)?.focus();
  };
  form.querySelector("input")?.addEventListener("input", refresh);
  form.querySelector("select")?.addEventListener("change", refresh);
  form.addEventListener("submit", (event) => event.preventDefault());
}

window.addEventListener("hashchange", () => {
  state.route = getRoute(window.location.hash);
  render();
  document.querySelector("#main")?.focus();
});

async function refreshServerState() {
  if (staticDemo) return;
  try {
    const authConfigResponse = await fetch("/api/auth/config");
    if (authConfigResponse.ok) state.authConfig = await authConfigResponse.json();
    const serviceResponse = await fetch("/api/services");
    if (serviceResponse.ok) {
      const payload = await serviceResponse.json();
      state.catalogServices = payload.services;
    }
    const sessionResponse = await fetch("/api/admin/session");
    if (sessionResponse.ok) {
      const payload = await sessionResponse.json();
      state.adminUser = payload.user;
    }
    if (state.adminUser) {
      const [auditResponse, questionnaireResponse, availabilityResponse, bookingsResponse] =
        await Promise.all([
          fetch("/api/admin/audit"),
          fetch("/api/admin/questionnaires/orientation"),
          fetch("/api/admin/availability?serviceId=service-orientation"),
          fetch("/api/admin/bookings")
        ]);
      if (auditResponse.ok) state.auditEvents = (await auditResponse.json()).events;
      if (questionnaireResponse.ok) state.questionnaire = await questionnaireResponse.json();
      if (availabilityResponse.ok) {
        state.availabilityRules = (await availabilityResponse.json()).rules;
      }
      if (bookingsResponse.ok) state.adminBookings = (await bookingsResponse.json()).bookings;
    }
  } catch {
    // The static preview remains usable when the server boundary is unavailable.
  }
}

if (!window.location.hash) window.location.hash = "#/home";
render();
refreshServerState().then(render);
