export const platformConfig = {
  environment: "development",
  fixtureMode: true,
  operator: {
    name: "[Professional identity pending verification]",
    verified: false,
    jurisdictions: []
  },
  localization: {
    authoritativeLocale: "en",
    translations: {
      fr: { status: "in_review", qualifiedReviewerApproved: false },
      zh: {
        status: "in_review",
        qualifiedReviewerApproved: false,
        scriptAndRegionsApproved: false
      }
    }
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
      },
      fr: {
        title: "Arbitrage international",
        summary: "Soutien stratégique pour les différends commerciaux transfrontaliers complexes, les procédures arbitrales et les questions de règlement des différends.",
        audience: "Entreprises internationales, investisseurs, cabinets d’avocats et organisations impliqués dans des différends transfrontaliers.",
        included: "Stratégie et évaluation de l’arbitrage, recherche juridique, examen des clauses, analyse procédurale et soutien aux mémoires écrits.",
        excluded: "Aucune promesse de représentation, de confidentialité au-delà des termes approuvés, de protection des délais ou de résultat."
      },
      zh: {
        title: "国际仲裁",
        summary: "为复杂的跨境商事争议、仲裁程序和争议解决事项提供战略支持。",
        audience: "涉及跨境争议的国际企业、投资者、律师事务所和组织。",
        included: "仲裁策略与案件评估、法律研究、条款审查、程序分析及书面提交支持。",
        excluded: "不承诺代理、超出已批准措辞的保密性、期限保护或结果。"
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
      },
      fr: {
        title: "Droit international des investissements",
        summary: "Soutien de recherche et de conseil concernant les investissements internationaux, les traités d’investissement, la protection des investisseurs et les différends investisseur-État.",
        audience: "Investisseurs étrangers, entreprises multinationales, entreprises africaines et équipes juridiques conseillant sur les investissements internationaux.",
        included: "Recherche sur les traités d’investissement, interprétation des traités, analyse des protections et évaluation des mesures étatiques affectant les investissements étrangers.",
        excluded: "Aucune promesse de demande, de recours, de représentation ou de résultat d’investissement."
      },
      zh: {
        title: "国际投资法",
        summary: "围绕国际投资、投资条约、投资者保护以及投资者与国家争议提供研究和咨询支持。",
        audience: "外国投资者、跨国公司、非洲企业以及就国际投资提供建议的法律团队。",
        included: "投资条约研究、条约解释、投资保护分析，以及影响外国投资的国家措施评估。",
        excluded: "不承诺提出请求、获得救济、提供代理或取得投资结果。"
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
      },
      fr: {
        title: "Activités commerciales transfrontalières axées sur l’Afrique",
        summary: "Analyse juridique pratique pour les entreprises entrant sur les marchés africains, gérant des opérations internationales et évaluant les risques juridiques transfrontaliers.",
        audience: "Entreprises, investisseurs et équipes juridiques évaluant ou exerçant des activités sur plusieurs marchés africains.",
        included: "Recherche sur les opérations transfrontalières, examen des contrats internationaux, analyse du choix de la loi et de la compétence, et contexte de l’intégration régionale.",
        excluded: "Aucune assurance qu’une opération soit autorisée, complète ou commercialement réussie."
      },
      zh: {
        title: "以非洲为重点的跨境业务",
        summary: "为进入非洲市场、管理国际交易和应对跨境法律风险的企业提供实务法律分析。",
        audience: "评估或开展非洲跨境业务的企业、投资者和法律团队。",
        included: "跨境交易研究、国际合同审查、法律选择和管辖权分析，以及区域一体化背景研究。",
        excluded: "不保证交易获准、完整或取得商业成功。"
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
      },
      fr: {
        title: "Industries extractives et ressources naturelles",
        summary: "Recherche spécialisée concernant l’exploitation minière, les ressources naturelles, les différends d’investissement, la responsabilité environnementale et les entreprises et droits humains.",
        audience: "Investisseurs, entreprises minières et extractives, équipes juridiques et organisations évaluant les marchés africains des ressources naturelles.",
        included: "Recherche et analyse des aspects contractuels, réglementaires, d’investissement, environnementaux et de responsabilité.",
        excluded: "Aucune certification, autorisation réglementaire, approbation environnementale ou garantie de résultat."
      },
      zh: {
        title: "采掘业与自然资源",
        summary: "围绕采矿、自然资源、投资争议、环境责任以及企业与人权开展专业研究。",
        audience: "投资者、采矿和采掘企业、法律团队，以及评估非洲自然资源市场的组织。",
        included: "对合同、监管、投资、环境和责任事项进行研究与分析。",
        excluded: "不提供认证、监管批准、环境许可或结果保证。"
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
      },
      fr: {
        title: "Entreprises et droits humains",
        summary: "Recherche et analyse juridique sur l’activité internationale des entreprises, les cadres relatifs aux droits humains et la conduite responsable des affaires.",
        audience: "Organisations et équipes juridiques examinant les enjeux liés aux droits humains dans les activités internationales.",
        included: "Analyse de la responsabilité des entreprises, des impacts des industries extractives, de la responsabilité environnementale et sociale et des normes internationales applicables.",
        excluded: "Aucune certification de conformité ni assurance qu’une pratique respecte toutes les exigences applicables."
      },
      zh: {
        title: "企业与人权",
        summary: "围绕国际商业活动、人权框架和负责任商业行为开展研究与法律分析。",
        audience: "处理国际业务中人权问题的组织和法律团队。",
        included: "分析企业责任、采掘业影响、环境与社会责任，以及适用的国际标准。",
        excluded: "不提供合规认证，也不保证某项商业实践满足所有适用要求。"
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
      },
      fr: {
        title: "AfCFTA et droit commercial africain",
        summary: "Recherche et conseil concernant le commerce africain, l’investissement, l’intégration économique et les cadres juridiques émergents de la ZLECAf.",
        audience: "Entreprises, investisseurs, institutions et équipes juridiques intervenant dans le commerce transfrontalier en Afrique.",
        included: "Recherche sur les évolutions liées à la ZLECAf, les mécanismes régionaux de règlement des différends et le droit économique international.",
        excluded: "Aucune promesse qu’une entrée sur un marché, une voie commerciale ou une position réglementaire soit disponible ou approuvée."
      },
      zh: {
        title: "非洲大陆自由贸易区与非洲贸易法",
        summary: "围绕非洲贸易、投资、经济一体化和新兴非洲大陆自由贸易区法律框架提供研究和咨询。",
        audience: "在非洲开展跨境商业活动的企业、投资者、机构和法律团队。",
        included: "研究非洲大陆自由贸易区相关发展、区域争议解决机制和国际经济法。",
        excluded: "不承诺市场进入、贸易路径或监管立场可行或已获批准。"
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
      },
      fr: {
        title: "Recherche juridique et conseil en droit international",
        summary: "Recherche juridique de haut niveau, analyse comparative, mémoires et soutien spécialisé pour les questions complexes de droit international.",
        audience: "Cabinets d’avocats, entreprises, universitaires, institutions et organisations recherchant une expertise spécialisée en droit international.",
        included: "Recherche en droit international et comparé, mémoires, analyse spécialisée et soutien à la recherche en contentieux ou en arbitrage.",
        excluded: "Aucune garantie que la recherche soit exhaustive, à jour pour chaque juridiction ou qu’elle remplace un conseil local qualifié."
      },
      zh: {
        title: "法律研究与国际法咨询",
        summary: "为复杂的国际法事项提供高层次法律研究、比较分析、法律备忘录和专业支持。",
        audience: "需要国际法专业知识的律师事务所、企业、学者、机构和组织。",
        included: "国际法和比较法研究、法律备忘录、专业分析，以及诉讼或仲裁研究支持。",
        excluded: "不保证研究穷尽、适用于每个司法管辖区的最新情况，或可替代合格的当地法律意见。"
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
