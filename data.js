export const platformConfig = {
  environment: "development",
  fixtureMode: true,
  operator: {
    name: "[Professional identity pending verification]",
    verified: false,
    jurisdictions: []
  },
  features: {
    booking: true,
    commerce: false,
    accounts: false,
    aiGuidance: true
  },
  providers: {
    booking: { enabled: true, mode: "development" },
    payment: { enabled: false, mode: "disabled" },
    model: { enabled: true, mode: "development" },
    analytics: { enabled: false, mode: "disabled" }
  }
};

export const launchGates = [
  {
    id: "identity",
    title: "Verify operating entity and professional identity",
    owner: "Founder + qualified counsel",
    status: "open",
    blocking: true
  },
  {
    id: "jurisdictions",
    title: "Approve service and user jurisdictions",
    owner: "Founder + qualified counsel",
    status: "open",
    blocking: true
  },
  {
    id: "privacy",
    title: "Approve data map, retention schedule, notices, and rights workflows",
    owner: "Privacy + product + security",
    status: "open",
    blocking: true
  },
  {
    id: "security",
    title: "Approve production threat model and security controls",
    owner: "Security + engineering",
    status: "open",
    blocking: true
  },
  {
    id: "ai",
    title: "Approve AI topics, jurisdictions, sources, provider, evaluation, and retention",
    owner: "AI governance + counsel + product",
    status: "open",
    blocking: true
  },
  {
    id: "commerce",
    title: "Approve products, prices, taxes, licenses, refunds, and payment provider",
    owner: "Operations + counsel",
    status: "open",
    blocking: true
  },
  {
    id: "localization",
    title: "Approve French and Chinese meaning-sensitive content",
    owner: "Qualified reviewers",
    status: "open",
    blocking: true
  }
];

export const services = [
  {
    id: "service-orientation",
    category: "advisory",
    fixture: true,
    bookingEnabled: true,
    translations: {
      en: {
        title: "[Placeholder] Initial legal orientation",
        summary: "A structured introductory consultation to identify the relevant service path.",
        audience: "Individuals or organizations seeking an initial discussion.",
        included: "A scheduled introductory conversation and next-step explanation.",
        excluded: "No promise of representation, deadline protection, or legal outcome."
      },
      fr: {
        title: "[Espace réservé] Orientation juridique initiale",
        summary: "Une consultation introductive structurée pour identifier le parcours de service pertinent.",
        audience: "Particuliers ou organisations recherchant un premier échange.",
        included: "Un échange planifié et une explication des prochaines étapes.",
        excluded: "Aucune promesse de représentation, de protection des délais ou de résultat."
      },
      zh: {
        title: "[占位内容] 初步法律服务导向",
        summary: "通过结构化的初步咨询，帮助识别可能适合的服务路径。",
        audience: "希望进行初步沟通的个人或机构。",
        included: "预约的初步沟通及后续步骤说明。",
        excluded: "不承诺代理、期限保护或案件结果。"
      }
    }
  },
  {
    id: "service-document-review",
    category: "documents",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: {
        title: "[Placeholder] Document review service",
        summary: "A configurable service record demonstrating scope, exclusions, and intake.",
        audience: "Users with a document that may require professional review.",
        included: "Scope and deliverables must be approved before publication.",
        excluded: "This fixture is not an offer of legal services."
      },
      fr: {
        title: "[Espace réservé] Service de revue de document",
        summary: "Une fiche de service configurable illustrant le périmètre, les exclusions et l’admission.",
        audience: "Utilisateurs disposant d’un document pouvant nécessiter une revue professionnelle.",
        included: "Le périmètre et les livrables doivent être approuvés avant publication.",
        excluded: "Cette fiche de démonstration ne constitue pas une offre de services juridiques."
      },
      zh: {
        title: "[占位内容] 文件审阅服务",
        summary: "用于展示服务范围、排除事项和信息收集流程的可配置服务记录。",
        audience: "持有可能需要专业审阅文件的用户。",
        included: "发布前必须批准具体范围和交付内容。",
        excluded: "此演示内容不构成法律服务要约。"
      }
    }
  },
  {
    id: "service-international-arbitration",
    category: "international-law",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: {
        title: "International Arbitration",
        summary: "Strategic support for complex cross-border commercial disputes, arbitration proceedings, and dispute-resolution matters.",
        audience: "International businesses, investors, law firms, and organizations involved in cross-border disputes.",
        included: "Arbitration strategy and case assessment, legal research, clause review, procedural analysis, and written submissions support.",
        excluded: "No promise of representation, confidentiality beyond approved wording, deadline protection, or outcome."
      }
    }
  },
  {
    id: "service-investment-law",
    category: "international-law",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: {
        title: "International Investment Law",
        summary: "Research and advisory support concerning international investments, investment treaties, investor protection, and investor-State disputes.",
        audience: "Foreign investors, multinational companies, African businesses, and legal teams advising on international investments.",
        included: "Investment treaty research, treaty interpretation, investment-protection analysis, and assessment of State measures affecting foreign investments.",
        excluded: "No promise of a claim, remedy, representation, or investment outcome."
      }
    }
  },
  {
    id: "service-cross-border-business",
    category: "international-law",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: {
        title: "Africa-Focused Cross-Border Business",
        summary: "Practical legal analysis for companies entering African markets, managing international transactions, and navigating cross-border legal risks.",
        audience: "Businesses, investors, and legal teams evaluating or operating across African markets.",
        included: "Cross-border transaction research, international contract review, choice-of-law and jurisdiction analysis, and regional integration context.",
        excluded: "No assurance that a transaction is permitted, complete, or commercially successful."
      }
    }
  },
  {
    id: "service-extractive-industries",
    category: "international-law",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: {
        title: "Extractive Industries & Natural Resources",
        summary: "Specialized research concerning mining, natural resources, investment disputes, environmental responsibility, and business and human rights.",
        audience: "Investors, mining and extractive companies, legal teams, and organizations evaluating African natural-resource markets.",
        included: "Research and analysis of contractual, regulatory, investment, environmental, and responsibility considerations.",
        excluded: "No certification, regulatory approval, environmental clearance, or outcome guarantee."
      }
    }
  },
  {
    id: "service-business-human-rights",
    category: "international-law",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: {
        title: "Business & Human Rights",
        summary: "Research and legal analysis concerning international business activity, human-rights frameworks, and responsible business conduct.",
        audience: "Organizations and legal teams navigating human-rights considerations in international business.",
        included: "Analysis of corporate responsibility, extractive-industry impacts, environmental and social responsibility, and applicable international standards.",
        excluded: "No certification of compliance or assurance that a business practice meets every applicable requirement."
      }
    }
  },
  {
    id: "service-afcfta-trade",
    category: "international-law",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: {
        title: "AfCFTA & African Trade Law",
        summary: "Research and advisory services concerning African trade, investment, economic integration, and emerging AfCFTA legal frameworks.",
        audience: "Businesses, investors, institutions, and legal teams navigating cross-border commerce in Africa.",
        included: "Research on AfCFTA-related developments, regional dispute-resolution mechanisms, and international economic law.",
        excluded: "No promise that a market entry, trade route, or regulatory position is available or approved."
      }
    }
  },
  {
    id: "service-international-research",
    category: "research",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: {
        title: "Legal Research & International Law Consultancy",
        summary: "High-level legal research, comparative analysis, memoranda, and specialist support for complex international-law matters.",
        audience: "Law firms, businesses, academics, institutions, and organizations requiring specialized international-law expertise.",
        included: "International and comparative legal research, memoranda, expert analysis, and litigation or arbitration research support.",
        excluded: "No guarantee that research is exhaustive, current for every jurisdiction, or a substitute for qualified local advice."
      }
    }
  }
];

export const products = [
  {
    id: "product-guide",
    category: "guides",
    fixture: true,
    price: null,
    translations: {
      en: {
        title: "[Placeholder] Practical legal information guide",
        summary: "Demonstrates a multilingual digital resource page with controlled publication states.",
        format: "Digital document",
        limitation: "Content, price, license, and update policy are pending approval."
      },
      fr: {
        title: "[Espace réservé] Guide pratique d’information juridique",
        summary: "Démontre une page de ressource numérique multilingue avec publication contrôlée.",
        format: "Document numérique",
        limitation: "Le contenu, le prix, la licence et la politique de mise à jour restent à approuver."
      },
      zh: {
        title: "[占位内容] 实用法律信息指南",
        summary: "演示具有受控发布状态的多语言数字资源页面。",
        format: "数字文件",
        limitation: "内容、价格、许可和更新政策尚待批准。"
      }
    }
  },
  {
    id: "product-checklist",
    category: "checklists",
    fixture: true,
    price: null,
    translations: {
      en: {
        title: "[Placeholder] Preparation checklist",
        summary: "A sample catalog item showing category filters and transparent limitations.",
        format: "Downloadable checklist",
        limitation: "Not available for purchase until content and commercial terms are approved."
      },
      fr: {
        title: "[Espace réservé] Liste de préparation",
        summary: "Un exemple d’article illustrant les filtres de catégorie et les limites transparentes.",
        format: "Liste téléchargeable",
        limitation: "Aucun achat avant approbation du contenu et des conditions commerciales."
      },
      zh: {
        title: "[占位内容] 准备清单",
        summary: "用于展示分类筛选和透明限制说明的示例目录项目。",
        format: "可下载清单",
        limitation: "内容和商业条款获批前不可购买。"
      }
    }
  }
];

export const knowledgeSources = [
  {
    id: "source-demo-orientation",
    title: "Development-only approved orientation source",
    version: "0.1-dev",
    effectiveDate: "2026-08-27",
    reviewDue: "2026-09-27",
    status: "approved",
    expired: false,
    developmentOnly: true,
    jurisdictions: ["DEMO"],
    topics: ["orientation"],
    languages: ["en", "fr", "zh"]
  }
];

export const fixtures = [
  ...services.map((item) => ({
    id: item.id,
    label: item.translations.en.title,
    productionPublished: false
  })),
  ...products.map((item) => ({
    id: item.id,
    label: item.translations.en.title,
    productionPublished: false
  }))
];
