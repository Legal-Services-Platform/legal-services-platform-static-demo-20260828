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
      },
      "zh-Hant": {
        status: "in_review",
        qualifiedReviewerApproved: false,
        scriptAndRegionsApproved: false,
        targetRegionsApproved: false
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
    title: "Approve French, Simplified Chinese, and Traditional Chinese meaning-sensitive content",
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

const traditionalChineseServiceTranslations = {
  "service-orientation": {
    title: "[預留內容] 初步法律服務導向",
    summary: "透過結構化的初步諮詢，協助識別可能合適的服務途徑。",
    audience: "希望進行初步溝通的個人或機構。",
    included: "預約的初步溝通及後續步驟說明。",
    excluded: "不承諾代理、期限保障或任何結果。"
  },
  "service-document-review": {
    title: "[預留內容] 文件審閱服務",
    summary: "用於展示服務範圍、排除事項及資料收集流程的可設定服務記錄。",
    audience: "持有可能需要專業審閱文件的使用者。",
    included: "發布前必須批准具體範圍及交付內容。",
    excluded: "此開發測試內容不構成法律服務要約。"
  },
  "service-international-arbitration": {
    title: "國際仲裁",
    summary: "為複雜的跨境商事爭議、仲裁程序及爭議解決事項提供策略支援。",
    audience: "涉及跨境爭議的國際企業、投資者、律師事務所及組織。",
    included: "仲裁策略與案件評估、法律研究、條款審閱、程序分析及書面陳述支援。",
    excluded: "不承諾代理、超出獲批文字的保密安排、期限保障或任何結果。"
  },
  "service-investment-law": {
    title: "國際投資法",
    summary: "就國際投資、投資條約、投資者保障及投資者與國家爭議提供研究與諮詢支援。",
    audience: "外國投資者、跨國公司、非洲企業，以及就國際投資提供建議的法律團隊。",
    included: "投資條約研究、條約解釋、投資保障分析，以及影響外國投資的國家措施評估。",
    excluded: "不承諾提出申索、取得救濟、提供代理或達成投資結果。"
  },
  "service-cross-border-business": {
    title: "以非洲為重點的跨境業務",
    summary: "為進入非洲市場、管理國際交易及應對跨境法律風險的企業提供實務法律分析。",
    audience: "評估或經營非洲跨境業務的企業、投資者及法律團隊。",
    included: "跨境交易研究、國際合約審閱、法律選擇與司法管轄權分析，以及區域整合背景研究。",
    excluded: "不保證交易獲准、完整或取得商業成功。"
  },
  "service-extractive-industries": {
    title: "採掘業與自然資源",
    summary: "就採礦、自然資源、投資爭議、環境責任，以及企業與人權議題進行專業研究。",
    audience: "投資者、採礦及採掘企業、法律團隊，以及評估非洲自然資源市場的組織。",
    included: "研究與分析合約、監管、投資、環境及責任相關考量。",
    excluded: "不提供認證、監管批准、環境許可或結果保證。"
  },
  "service-business-human-rights": {
    title: "企業與人權",
    summary: "就國際商業活動、人權框架及負責任商業行為進行研究與法律分析。",
    audience: "處理國際業務中人權議題的組織及法律團隊。",
    included: "分析企業責任、採掘業影響、環境與社會責任，以及適用的國際標準。",
    excluded: "不提供合規認證，亦不保證任何商業做法符合所有適用要求。"
  },
  "service-afcfta-trade": {
    title: "非洲大陸自由貿易區與非洲貿易法",
    summary: "就非洲貿易、投資、經濟整合及新興非洲大陸自由貿易區法律框架提供研究與諮詢。",
    audience: "在非洲進行跨境商業活動的企業、投資者、機構及法律團隊。",
    included: "研究非洲大陸自由貿易區相關發展、區域爭議解決機制及國際經濟法。",
    excluded: "不承諾市場准入、貿易途徑或監管立場可行或已獲批准。"
  },
  "service-international-research": {
    title: "法律研究與國際法諮詢",
    summary: "為複雜的國際法事項提供高層次法律研究、比較分析、法律備忘錄及專業支援。",
    audience: "需要國際法專業知識的律師事務所、企業、學者、機構及組織。",
    included: "國際法及比較法研究、法律備忘錄、專業分析，以及訴訟或仲裁研究支援。",
    excluded: "不保證研究涵蓋所有事項、反映每個司法管轄區的最新情況，亦不能取代合資格的當地法律意見。"
  }
};

for (const service of services) {
  service.translations["zh-Hant"] = traditionalChineseServiceTranslations[service.id];
}

const requestedServiceCategories = [
  {
    id: "service-expert-witness",
    category: "expert-witness",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: { title: "Expert Witness Services", summary: "Development-stage research and analytical support for matters that may require an independent legal or international-law perspective.", audience: "Counsel, institutions, or organizations assessing whether expert analysis may be appropriate.", included: "Potential scope, source review, comparative legal analysis, and written or oral analysis only after role, jurisdiction, conflicts, and instructions are approved.", excluded: "No assurance of appointment, admissibility, independence determination, testimony, or case outcome." },
      fr: { title: "Services d’expertise juridique", summary: "Soutien de recherche et d’analyse en développement pour les dossiers pouvant nécessiter une perspective juridique ou de droit international indépendante.", audience: "Conseils, institutions ou organisations évaluant la pertinence d’une analyse experte.", included: "Définition éventuelle du périmètre, examen des sources et analyse juridique comparative, uniquement après approbation du rôle, de la juridiction, des conflits et des instructions.", excluded: "Aucune garantie de nomination, d’admissibilité, d’indépendance, de témoignage ou de résultat." },
      zh: { title: "专家证人服务", summary: "面向可能需要独立法律或国际法视角的事项，提供处于开发阶段的研究与分析支持。", audience: "评估是否适合采用专家分析的律师、机构或组织。", included: "潜在范围界定、来源审查和比较法律分析；任何书面或口头分析均须先批准角色、司法管辖区、利益冲突和具体指示。", excluded: "不保证获聘、证据可采性、独立性认定、作证或案件结果。" },
      "zh-Hant": { title: "專家證人服務", summary: "為可能需要獨立法律或國際法觀點的事項提供處於開發階段的研究及分析支援。", audience: "評估是否適合採用專家分析的律師、機構或組織。", included: "潛在範圍界定、來源審查及比較法律分析；任何書面或口頭分析均須先批准角色、司法管轄區、利益衝突及具體指示。", excluded: "不保證獲聘、證據可採性、獨立性認定、作證或案件結果。" }
    }
  },
  {
    id: "service-legal-representation",
    category: "representation",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: { title: "Legal Representation", summary: "A gated service category for possible representation-related enquiries, subject to verified authorization, jurisdiction, conflicts, and engagement terms.", audience: "Users seeking to understand whether a representation pathway may be available.", included: "Initial scope and eligibility discussion only; any representation requires a separate accepted engagement.", excluded: "No representation, attorney-client relationship, deadline protection, or outcome is created by this page or a consultation request." },
      fr: { title: "Représentation juridique", summary: "Catégorie de service soumise à validation pour les demandes pouvant concerner une représentation, sous réserve de l’autorisation, de la juridiction, des conflits et des conditions d’engagement.", audience: "Utilisateurs souhaitant vérifier si un parcours de représentation pourrait être disponible.", included: "Échange initial sur le périmètre et l’éligibilité uniquement ; toute représentation nécessite une mission distincte acceptée.", excluded: "Cette page ou une demande de consultation ne crée aucune représentation, relation avocat-client, protection des délais ni garantie de résultat." },
      zh: { title: "法律代理", summary: "针对可能涉及代理的咨询，提供受控的服务类别；须先核实授权、司法管辖区、利益冲突和委托条款。", audience: "希望了解是否可能存在代理路径的用户。", included: "仅进行初步范围和资格讨论；任何代理均须另行接受委托。", excluded: "本页面或咨询请求不会建立代理关系、律师与客户关系、期限保护或结果保证。" },
      "zh-Hant": { title: "法律代理", summary: "針對可能涉及代理的查詢提供受控服務類別；須先核實授權、司法管轄區、利益衝突及委託條款。", audience: "希望了解是否可能存在代理途徑的使用者。", included: "僅進行初步範圍及資格討論；任何代理均須另行接受委託。", excluded: "本頁面或諮詢請求不會建立代理關係、律師與客戶關係、期限保障或結果保證。" }
    }
  },
  {
    id: "service-legal-consultancy",
    category: "consultancy",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: { title: "Legal Consultancy", summary: "Gated research and advisory support for international-law, investment, commercial, and cross-border questions.", audience: "Organizations, businesses, institutions, or legal teams seeking scoped analysis.", included: "Issue framing, source-based research, comparative analysis, and written guidance where the jurisdiction, role, and deliverable are approved.", excluded: "No universal legal advice, local-law opinion, regulatory clearance, representation, or guaranteed result." },
      fr: { title: "Conseil juridique", summary: "Soutien de recherche et d’appui consultatif soumis à validation pour des questions de droit international, d’investissement, commerciales et transfrontalières.", audience: "Organisations, entreprises, institutions ou équipes juridiques recherchant une analyse définie.", included: "Définition de la question, recherche fondée sur les sources, analyse comparative et orientations écrites lorsque la juridiction, le rôle et le livrable sont approuvés.", excluded: "Aucun conseil juridique universel, avis de droit local, agrément réglementaire, représentation ni garantie de résultat." },
      zh: { title: "法律咨询", summary: "围绕国际法、投资、商业及跨境问题提供受控的研究与咨询支持。", audience: "需要明确范围分析的组织、企业、机构或法律团队。", included: "问题界定、基于来源的研究、比较分析，以及在批准司法管辖区、角色和交付内容后提供书面指导。", excluded: "不提供普遍适用的法律意见、当地法意见、监管许可、代理或结果保证。" },
      "zh-Hant": { title: "法律諮詢", summary: "圍繞國際法、投資、商業及跨境問題提供受控的研究及諮詢支援。", audience: "需要明確範圍分析的組織、企業、機構或法律團隊。", included: "問題界定、基於來源的研究、比較分析，以及在批准司法管轄區、角色及交付內容後提供書面指導。", excluded: "不提供普遍適用的法律意見、當地法意見、監管許可、代理或結果保證。" }
    }
  },
  {
    id: "service-environmental-law",
    category: "environmental-law",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: { title: "Environmental Law", summary: "Gated research and advisory support on environmental and international-law questions connected with natural resources, investment, and cross-border activity.", audience: "Organizations assessing environmental-law issues within an approved jurisdiction and scope.", included: "Source review and comparative analysis of environmental, natural-resource, and international-law considerations.", excluded: "No environmental permit, regulatory approval, compliance certification, or outcome guarantee." },
      fr: { title: "Droit de l’environnement", summary: "Soutien de recherche et d’appui consultatif soumis à validation sur des questions de droit de l’environnement et de droit international liées aux ressources naturelles, à l’investissement et aux activités transfrontalières.", audience: "Organisations examinant des questions de droit de l’environnement dans une juridiction et un périmètre approuvés.", included: "Examen des sources et analyse comparative des considérations environnementales, relatives aux ressources naturelles et au droit international.", excluded: "Aucun permis environnemental, agrément réglementaire, certification de conformité ni garantie de résultat." },
      zh: { title: "环境法", summary: "围绕与自然资源、投资和跨境活动相关的环境法及国际法问题，提供受控的研究与咨询支持。", audience: "在获批司法管辖区和范围内评估环境法问题的组织。", included: "审查来源，并比较分析环境、自然资源及国际法相关事项。", excluded: "不提供环境许可、监管批准、合规认证或结果保证。" },
      "zh-Hant": { title: "環境法", summary: "圍繞與自然資源、投資及跨境活動相關的環境法及國際法問題，提供受控的研究及諮詢支援。", audience: "在獲批司法管轄區及範圍內評估環境法問題的組織。", included: "審查來源，並比較分析環境、自然資源及國際法相關事項。", excluded: "不提供環境許可、監管批准、合規認證或結果保證。" }
    }
  },
  {
    id: "service-esg-advisory",
    category: "esg-advisory",
    fixture: true,
    bookingEnabled: false,
    translations: {
      en: { title: "Environmental, Social and Governance (ESG) Advisory", summary: "Gated research and advisory support on ESG and international-law frameworks, responsible business conduct, human rights, and natural-resource activity.", audience: "Organizations reviewing ESG-related legal and policy questions within an approved scope.", included: "Framework mapping, source-based analysis, and identification of questions requiring local or specialist review.", excluded: "No ESG certification, compliance assurance, investment recommendation, regulatory approval, or outcome guarantee." },
      fr: { title: "Conseil en matière environnementale, sociale et de gouvernance (ESG)", summary: "Soutien de recherche et d’appui consultatif soumis à validation sur les cadres ESG et de droit international, la conduite responsable des affaires, les droits humains et les activités liées aux ressources naturelles.", audience: "Organisations examinant des questions juridiques et stratégiques liées à l’ESG dans un périmètre approuvé.", included: "Cartographie des cadres, analyse fondée sur les sources et identification des questions nécessitant un examen local ou spécialisé.", excluded: "Aucune certification ESG, assurance de conformité, recommandation d’investissement, autorisation réglementaire ni garantie de résultat." },
      zh: { title: "环境、社会与治理（ESG）咨询", summary: "围绕 ESG 与国际法框架、负责任商业行为、人权和自然资源活动，提供受控的研究与咨询支持。", audience: "在获批范围内审查 ESG 相关法律与政策问题的组织。", included: "框架梳理、基于来源的分析，以及识别需要当地或专业审查的问题。", excluded: "不提供 ESG 认证、合规保证、投资建议、监管批准或结果保证。" },
      "zh-Hant": { title: "環境、社會及管治（ESG）諮詢", summary: "圍繞 ESG 與國際法框架、負責任商業行為、人權及自然資源活動，提供受控的研究及諮詢支援。", audience: "在獲批範圍內審查 ESG 相關法律及政策問題的組織。", included: "框架梳理、基於來源的分析，以及識別需要當地或專業審查的問題。", excluded: "不提供 ESG 認證、合規保證、投資建議、監管批准或結果保證。" }
    }
  }
];

for (const service of requestedServiceCategories) {
  service.evidenceStatus = "pending";
  services.push(service);
}

export const products = [
  {
    id: "product-guide",
    category: "legal-research",
    topic: "Legal Research",
    resourceType: "Research Guide",
    language: "English",
    fixture: true,
    price: null,
    translations: {
      en: {
        title: "International Commercial Arbitration in Africa",
        summary: "A concise overview of key concepts, legal frameworks, and developments.",
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
    category: "international-arbitration",
    topic: "International Arbitration",
    resourceType: "Practical Guide",
    language: "English",
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

products.push({
  id: "resource-african-trade",
  category: "african-trade",
  topic: "African Trade & AfCFTA",
  resourceType: "Research Guide",
  language: "English",
  fixture: true,
  price: null,
  translations: {
    en: {
      title: "African Trade and AfCFTA Research Guide",
      summary: "A development resource covering selected concepts and legal developments in African trade.",
      format: "Digital research guide",
      limitation: "Content, currency, jurisdictional coverage, license, and update policy are pending approval."
    },
    fr: {
      title: "Guide de recherche sur le commerce africain et la ZLECAf",
      summary: "Une ressource de développement présentant certains concepts et évolutions juridiques du commerce africain.",
      format: "Guide de recherche numérique",
      limitation: "Le contenu, l’actualité, la couverture juridictionnelle, la licence et la politique de mise à jour restent à approuver."
    },
    zh: {
      title: "非洲贸易与非洲大陆自由贸易区研究指南",
      summary: "介绍非洲贸易部分概念和法律发展的开发资源。",
      format: "数字研究指南",
      limitation: "内容、时效性、司法管辖区覆盖、许可和更新政策尚待批准。"
    },
    "zh-Hant": {
      title: "非洲貿易與非洲大陸自由貿易區研究指南",
      summary: "介紹非洲貿易部分概念及法律發展的開發資源。",
      format: "數碼研究指南",
      limitation: "內容、時效性、司法管轄區覆蓋、授權及更新政策尚待批准。"
    }
  }
});

const additionalLibraryResources = [
  ["resource-investment-law", "investment-law", "Investment Law", "International Investment Law Research Brief", "Research brief on selected investment-treaty concepts and investor-State dispute developments."],
  ["resource-business-human-rights", "business-human-rights", "Business & Human Rights", "Business & Human Rights Research Guide", "A development guide to selected human-rights frameworks and responsible business considerations."],
  ["resource-extractive-industries", "extractive-industries", "Extractive Industries", "Extractive Industries and Natural Resources Guide", "A development resource on selected legal and policy considerations for extractive projects."],
  ["resource-international-economic-law", "international-economic-law", "International Economic Law", "International Economic Law Research Guide", "A concise development guide to selected trade, investment, and economic-law concepts."],
  ["resource-legal-research", "legal-research", "Legal Research", "International Legal Research Methods", "A development guide to structured comparative and international legal research."]
];

for (const [id, category, topic, title, summary] of additionalLibraryResources) {
  products.push({
    id,
    category,
    topic,
    resourceType: "Research Guide",
    language: "English",
    fixture: true,
    price: null,
    translations: {
      en: { title, summary, format: "Digital research guide", limitation: "Content, currency, jurisdictional coverage, license, and update policy are pending approval." },
      fr: { title: `[Espace réservé] ${title}`, summary: `Ressource de développement : ${summary}`, format: "Guide de recherche numérique", limitation: "Le contenu, l’actualité, la couverture juridictionnelle, la licence et la politique de mise à jour restent à approuver." },
      zh: { title: `[占位内容] ${title}`, summary: `开发资源：${summary}`, format: "数字研究指南", limitation: "内容、时效性、司法管辖区覆盖、许可和更新政策尚待批准。" },
      "zh-Hant": { title: `[預留內容] ${title}`, summary: `開發資源：${summary}`, format: "數碼研究指南", limitation: "內容、時效性、司法管轄區覆蓋、授權及更新政策尚待批准。" }
    }
  });
}

for (const product of products) {
  if (!product.translations["zh-Hant"]) {
    product.translations["zh-Hant"] = product.translations.zh
      ? { ...product.translations.zh }
      : { ...product.translations.en };
  }
}

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
