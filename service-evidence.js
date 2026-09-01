export const serviceAuthorityLibrary = {
  "aba-1-1": {
    citation:
      "American Bar Association. (n.d.). Rule 1.1: Competence. Model Rules of Professional Conduct.",
    url:
      "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/"
  },
  "aba-1-2": {
    citation:
      "American Bar Association. (n.d.). Rule 1.2: Scope of representation and allocation of authority between client and lawyer. Model Rules of Professional Conduct.",
    url:
      "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_2_scope_of_representation_allocation_of_authority_between_client_lawyer/"
  },
  "aba-1-18": {
    citation:
      "American Bar Association. (n.d.). Rule 1.18: Duties to prospective client. Model Rules of Professional Conduct.",
    url:
      "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_18_duties_of_prospective_client/"
  },
  "uncitral-model-law": {
    citation:
      "United Nations Commission on International Trade Law. (2008). UNCITRAL Model Law on International Commercial Arbitration 1985, with amendments as adopted in 2006.",
    url:
      "https://uncitral.un.org/en/texts/arbitration/modellaw/commercial_arbitration"
  },
  "uncitral-rules": {
    citation:
      "United Nations Commission on International Trade Law. (2021). UNCITRAL Arbitration Rules.",
    url:
      "https://uncitral.un.org/en/texts/arbitration/contractualtexts/arbitration"
  },
  "icsid-rules": {
    citation:
      "International Centre for Settlement of Investment Disputes. (2022). ICSID Convention, Regulations and Rules.",
    url:
      "https://icsid.worldbank.org/rules-regulations/convention/arbitration-rules"
  },
  "hcch-choice-law": {
    citation:
      "Hague Conference on Private International Law. (2015). Principles on Choice of Law in International Commercial Contracts.",
    url:
      "https://www.hcch.net/en/instruments/conventions/full-text/?cid=135"
  },
  "unidroit-principles": {
    citation:
      "International Institute for the Unification of Private Law. (2016). UNIDROIT Principles of International Commercial Contracts 2016.",
    url:
      "https://www.unidroit.org/instruments/commercial-contracts/unidroit-principles-2016/"
  },
  "afcfta-agreement": {
    citation:
      "African Union. (2018). Agreement establishing the African Continental Free Trade Area.",
    url:
      "https://au.int/en/treaties/agreement-establishing-african-continental-free-trade-area"
  },
  "un-guiding-principles": {
    citation:
      "Office of the United Nations High Commissioner for Human Rights. (2011). Guiding principles on business and human rights: Implementing the United Nations “Protect, Respect and Remedy” framework.",
    url:
      "https://www.ohchr.org/documents/publications/guidingprinciplesbusinesshr_en.pdf"
  },
  "oecd-guidelines": {
    citation:
      "Organisation for Economic Co-operation and Development. (2023). OECD Guidelines for Multinational Enterprises on Responsible Business Conduct.",
    url:
      "https://doi.org/10.1787/81f92357-en"
  },
  "ifc-performance-standards": {
    citation:
      "International Finance Corporation. (2012). Performance standards on environmental and social sustainability.",
    url:
      "https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards"
  },
  "eiti-standard": {
    citation:
      "Extractive Industries Transparency Initiative. (2023). EITI Standard 2023.",
    url: "https://eiti.org/eiti-standard"
  },
  "unep-montevideo": {
    citation:
      "United Nations Environment Programme. (2019). Fifth Programme for the Development and Periodic Review of Environmental Law (Montevideo Programme V).",
    url:
      "https://www.unep.org/explore-topics/environmental-rights-and-governance/what-we-do/promoting-environmental-rule-law-1"
  },
  "uk-cpr-35": {
    citation:
      "Ministry of Justice. (n.d.). Civil Procedure Rules: Part 35—Experts and assessors.",
    url: "https://www.justice.gov.uk/courts/procedure-rules/civil/rules/part35"
  }
};

const localeStatus = {
  en:
    "Evidence-informed development copy. Service availability, professional authority, jurisdiction, conflicts, engagement terms, and publication approval remain subject to review.",
  fr:
    "Texte de développement fondé sur des sources. La disponibilité du service, l’autorisation professionnelle, la juridiction, les conflits, les conditions d’engagement et l’autorisation de publication restent à examiner.",
  zh:
    "本开发稿以公开来源为依据。服务可用性、执业授权、司法管辖区、利益冲突、委托条款及发布批准仍须审查。",
  "zh-Hant":
    "本開發稿以公開來源為依據。服務可用性、執業授權、司法管轄區、利益衝突、委託條款及發布批准仍須審查。"
};

const serviceEvidence = {
  "service-orientation": {
    sourceIds: ["aba-1-18", "aba-1-2"],
    jurisdiction: {
      en:
        "Prospective-client and engagement rules vary by jurisdiction. The cited ABA rules are a U.S. model-rule example, not a universal rule.",
      fr:
        "Les règles relatives aux clients potentiels et à l’engagement varient selon la juridiction. Les règles modèles de l’ABA citées constituent un exemple américain, et non une règle universelle.",
      zh:
        "潜在客户与委托规则因司法管辖区而异。所引 ABA 示范规则仅为美国范例，并非普遍规则。",
      "zh-Hant":
        "潛在客戶與委託規則因司法管轄區而異。所引 ABA 示範規則僅為美國範例，並非普遍規則。"
    },
    copy: {
      en: {
        audience:
          "Individuals or organizations that need an initial, limited discussion to identify the subject, jurisdiction, urgency, conflicts, and an appropriate next route (American Bar Association, n.d., Rules 1.18 and 1.2).",
        included:
          "A structured intake, an explanation of whether the enquiry appears within an approved service path, and identification of information or local counsel that may still be required.",
        excluded:
          "No legal opinion, acceptance of representation, attorney-client relationship, confidentiality promise beyond applicable law, deadline monitoring, filing, negotiation, or outcome assurance."
      },
      fr: {
        audience:
          "Personnes ou organisations ayant besoin d’un échange initial et limité pour identifier la matière, la juridiction, l’urgence, les conflits et une orientation appropriée (American Bar Association, s. d., règles 1.18 et 1.2).",
        included:
          "Une admission structurée, une explication indiquant si la demande semble relever d’un parcours approuvé et l’identification des informations ou du conseil local encore nécessaires.",
        excluded:
          "Aucun avis juridique, aucune acceptation de représentation, aucune relation avocat-client, aucune promesse de confidentialité au-delà du droit applicable, aucun suivi de délai, dépôt, négociation ou résultat assuré."
      },
      zh: {
        audience:
          "需要通过有限的初步沟通识别事项、司法管辖区、紧急程度、利益冲突及适当后续路径的个人或机构（American Bar Association，无日期，规则 1.18 与 1.2）。",
        included:
          "结构化信息收集、说明咨询是否可能属于已批准服务路径，以及识别仍需补充的资料或当地法律顾问。",
        excluded:
          "不提供法律意见，不接受代理，不建立律师与客户关系，不作超出适用法律的保密承诺，也不负责期限监控、提交、谈判或结果保证。"
      },
      "zh-Hant": {
        audience:
          "需要透過有限的初步溝通識別事項、司法管轄區、緊急程度、利益衝突及適當後續途徑的個人或機構（American Bar Association，無日期，規則 1.18 與 1.2）。",
        included:
          "結構化資料收集、說明查詢是否可能屬於已核准服務途徑，以及識別仍需補充的資料或當地法律顧問。",
        excluded:
          "不提供法律意見，不接受代理，不建立律師與客戶關係，不作超出適用法律的保密承諾，也不負責期限監控、提交、談判或結果保證。"
      }
    }
  },
  "service-document-review": {
    sourceIds: ["aba-1-1", "aba-1-2", "unidroit-principles"],
    jurisdiction: {
      en:
        "The governing law, document type, language, purpose, and reviewer’s authorization must be confirmed before any substantive review.",
      fr:
        "Le droit applicable, le type de document, la langue, l’objectif et l’autorisation de la personne chargée de la revue doivent être confirmés avant tout examen substantiel.",
      zh:
        "在任何实质审阅前，必须确认准据法、文件类型、语言、用途及审阅者的授权。",
      "zh-Hant":
        "在任何實質審閱前，必須確認準據法、文件類型、語言、用途及審閱者的授權。"
    },
    copy: {
      en: {
        audience:
          "Clients or legal teams with an identified document, purpose, governing-law question, and agreed review depth; competent review depends on the relevant subject matter and preparation (American Bar Association, n.d., Rule 1.1).",
        included:
          "An agreed issue list, source-based review of specified clauses or provisions, assumptions, identified ambiguities or risks, and a defined written deliverable.",
        excluded:
          "No certification that a document is valid, enforceable, complete, translated accurately, suitable in every jurisdiction, executed correctly, filed, or accepted by a counterparty or authority."
      },
      fr: {
        audience:
          "Clients ou équipes juridiques disposant d’un document identifié, d’un objectif, d’une question de droit applicable et d’un niveau de revue convenu ; une revue compétente dépend de la matière et de la préparation pertinentes (American Bar Association, s. d., règle 1.1).",
        included:
          "Une liste de questions convenue, une revue fondée sur les sources de clauses ou dispositions déterminées, les hypothèses, les ambiguïtés ou risques identifiés et un livrable écrit défini.",
        excluded:
          "Aucune certification de validité, d’opposabilité, d’exhaustivité, d’exactitude de traduction, d’adéquation dans toute juridiction, de bonne signature, de dépôt ou d’acceptation par une partie ou une autorité."
      },
      zh: {
        audience:
          "已明确文件、用途、准据法问题及审阅深度的客户或法律团队；胜任审阅取决于相关专业领域与准备程度（American Bar Association，无日期，规则 1.1）。",
        included:
          "约定的问题清单、针对指定条款或规定的来源型审阅、适用假设、已识别的歧义或风险，以及明确的书面交付物。",
        excluded:
          "不证明文件有效、可执行、完整、翻译准确、适用于所有司法管辖区、签署无误、已经提交或会获相对方或主管机关接受。"
      },
      "zh-Hant": {
        audience:
          "已明確文件、用途、準據法問題及審閱深度的客戶或法律團隊；勝任審閱取決於相關專業領域與準備程度（American Bar Association，無日期，規則 1.1）。",
        included:
          "約定的問題清單、針對指定條款或規定的來源型審閱、適用假設、已識別的歧義或風險，以及明確的書面交付物。",
        excluded:
          "不證明文件有效、可執行、完整、翻譯準確、適用於所有司法管轄區、簽署無誤、已經提交或會獲相對方或主管機關接受。"
      }
    }
  },
  "service-international-arbitration": {
    sourceIds: ["uncitral-model-law", "uncitral-rules"],
    jurisdiction: {
      en:
        "Arbitration law, institutional rules, seat, governing law, agreement wording, and enforcement forum can materially change the analysis.",
      fr:
        "La loi sur l’arbitrage, le règlement institutionnel, le siège, le droit applicable, la rédaction de la convention et le lieu d’exécution peuvent modifier sensiblement l’analyse.",
      zh:
        "仲裁法、机构规则、仲裁地、准据法、仲裁协议措辞及执行法院均可能实质影响分析。",
      "zh-Hant":
        "仲裁法、機構規則、仲裁地、準據法、仲裁協議措辭及執行法院均可能實質影響分析。"
    },
    copy: {
      en: {
        audience:
          "Businesses, investors, counsel, or institutions assessing a cross-border dispute, arbitration agreement, procedure, or enforcement question under an identified legal and institutional framework (UNCITRAL, 2008, 2021).",
        included:
          "Scoped research on the arbitration agreement, seat, governing law, applicable rules, tribunal procedure, evidence questions, written-submission support, and issues for qualified local or lead counsel.",
        excluded:
          "No automatic appointment as counsel, filing, advocacy, deadline protection, privilege determination, enforcement opinion, settlement authority, or prediction of jurisdiction, admissibility, liability, quantum, or outcome."
      },
      fr: {
        audience:
          "Entreprises, investisseurs, conseils ou institutions évaluant un différend transfrontalier, une convention d’arbitrage, une procédure ou une question d’exécution dans un cadre juridique et institutionnel identifié (CNUDCI, 2008, 2021).",
        included:
          "Recherche définie sur la convention d’arbitrage, le siège, le droit applicable, le règlement, la procédure du tribunal, les questions de preuve, l’appui aux écritures et les points à soumettre au conseil local ou principal qualifié.",
        excluded:
          "Aucune désignation automatique comme conseil, aucun dépôt, plaidoyer, suivi de délai, détermination du secret professionnel, avis d’exécution, pouvoir de transaction ou pronostic sur la compétence, la recevabilité, la responsabilité, le montant ou l’issue."
      },
      zh: {
        audience:
          "依据已确定的法律及机构框架，评估跨境争议、仲裁协议、程序或执行问题的企业、投资者、律师或机构（联合国国际贸易法委员会，2008，2021）。",
        included:
          "在约定范围内研究仲裁协议、仲裁地、准据法、适用规则、仲裁庭程序、证据问题、书面陈述支持及需交由合资格当地或主办律师处理的事项。",
        excluded:
          "不自动担任代理律师，不负责提交、出庭、期限保护、特权认定、执行意见或和解授权，也不预测管辖权、可受理性、责任、赔偿数额或结果。"
      },
      "zh-Hant": {
        audience:
          "依據已確定的法律及機構框架，評估跨境爭議、仲裁協議、程序或執行問題的企業、投資者、律師或機構（聯合國國際貿易法委員會，2008，2021）。",
        included:
          "在約定範圍內研究仲裁協議、仲裁地、準據法、適用規則、仲裁庭程序、證據問題、書面陳述支援及需交由合資格當地或主辦律師處理的事項。",
        excluded:
          "不自動擔任代理律師，不負責提交、出庭、期限保護、特權認定、執行意見或和解授權，也不預測管轄權、可受理性、責任、賠償數額或結果。"
      }
    }
  },
  "service-investment-law": {
    sourceIds: ["icsid-rules", "afcfta-agreement"],
    jurisdiction: {
      en:
        "Treaty text, consent, nationality, covered investment, dates, State measures, applicable law, and forum-specific rules require matter-specific verification.",
      fr:
        "Le texte du traité, le consentement, la nationalité, l’investissement couvert, les dates, les mesures étatiques, le droit applicable et les règles du forum exigent une vérification propre au dossier.",
      zh:
        "条约文本、同意、国籍、受保护投资、日期、国家措施、适用法律及特定论坛规则均须针对具体事项核实。",
      "zh-Hant":
        "條約文本、同意、國籍、受保護投資、日期、國家措施、適用法律及特定論壇規則均須針對具體事項核實。"
    },
    copy: {
      en: {
        audience:
          "Investors, States, businesses, counsel, or institutions examining treaty protection, investment regulation, dispute prevention, or investor-State procedure under identified instruments (ICSID, 2022; African Union, 2018).",
        included:
          "Instrument and source research, chronology and threshold-issue mapping, analysis of identified State measures and treaty provisions, and a memorandum of questions requiring local, treaty, tax, sanctions, or sector advice.",
        excluded:
          "No confirmation that jurisdiction, consent, protected-investment status, treaty coverage, breach, damages, admissibility, funding, enforcement, or a viable claim exists."
      },
      fr: {
        audience:
          "Investisseurs, États, entreprises, conseils ou institutions examinant la protection conventionnelle, la réglementation des investissements, la prévention des différends ou la procédure investisseur-État au titre d’instruments identifiés (CIRDI, 2022 ; Union africaine, 2018).",
        included:
          "Recherche sur les instruments et sources, cartographie de la chronologie et des questions préalables, analyse de mesures étatiques et dispositions identifiées, et note recensant les questions nécessitant un conseil local, conventionnel, fiscal, de sanctions ou sectoriel.",
        excluded:
          "Aucune confirmation de compétence, consentement, statut d’investissement protégé, couverture conventionnelle, violation, dommages, recevabilité, financement, exécution ou existence d’une demande viable."
      },
      zh: {
        audience:
          "依据已确定文书研究条约保护、投资监管、争议预防或投资者与国家程序的投资者、国家、企业、律师或机构（ICSID，2022；非洲联盟，2018）。",
        included:
          "文书与来源研究、时间线及门槛问题梳理、对已识别国家措施和条约条款的分析，以及列明需当地、条约、税务、制裁或行业顾问处理问题的备忘录。",
        excluded:
          "不确认管辖权、同意、受保护投资地位、条约覆盖、违约、损害、可受理性、资金安排、执行或可行请求的存在。"
      },
      "zh-Hant": {
        audience:
          "依據已確定文書研究條約保護、投資監管、爭議預防或投資者與國家程序的投資者、國家、企業、律師或機構（ICSID，2022；非洲聯盟，2018）。",
        included:
          "文書與來源研究、時間線及門檻問題梳理、對已識別國家措施和條約條款的分析，以及列明需當地、條約、稅務、制裁或行業顧問處理問題的備忘錄。",
        excluded:
          "不確認管轄權、同意、受保護投資地位、條約涵蓋、違約、損害、可受理性、資金安排、執行或可行請求的存在。"
      }
    }
  },
  "service-cross-border-business": {
    sourceIds: ["hcch-choice-law", "unidroit-principles"],
    jurisdiction: {
      en:
        "Choice of law does not resolve every mandatory rule, licensing, tax, sanctions, competition, employment, data, consumer, or enforcement issue.",
      fr:
        "Le choix de loi ne règle pas toutes les questions de règles impératives, licences, fiscalité, sanctions, concurrence, emploi, données, consommation ou exécution.",
      zh:
        "法律选择不能解决所有强制性规则、许可、税务、制裁、竞争、劳动、数据、消费者或执行问题。",
      "zh-Hant":
        "法律選擇不能解決所有強制性規則、許可、稅務、制裁、競爭、勞動、資料、消費者或執行問題。"
    },
    copy: {
      en: {
        audience:
          "Businesses, investors, institutions, or legal teams planning or reviewing a defined cross-border transaction involving identified countries, parties, documents, and commercial objectives (HCCH, 2015; UNIDROIT, 2016).",
        included:
          "Issue mapping for governing law, jurisdiction or dispute clauses, contractual structure, counterparties, regional instruments, and a coordinated list of local-law and specialist workstreams.",
        excluded:
          "No company formation, licensing, tax or sanctions clearance, due-diligence certification, negotiation authority, execution, filing, market-entry approval, transaction completion, or commercial-success assurance."
      },
      fr: {
        audience:
          "Entreprises, investisseurs, institutions ou équipes juridiques préparant ou examinant une opération transfrontalière définie impliquant des pays, parties, documents et objectifs commerciaux identifiés (HCCH, 2015 ; UNIDROIT, 2016).",
        included:
          "Cartographie des questions de droit applicable, compétence ou règlement des différends, structure contractuelle, contreparties, instruments régionaux et liste coordonnée des travaux de droit local et spécialisés.",
        excluded:
          "Aucune constitution de société, autorisation, validation fiscale ou de sanctions, certification de diligence, autorité de négociation, signature, dépôt, approbation d’accès au marché, réalisation de l’opération ou garantie de succès commercial."
      },
      zh: {
        audience:
          "筹划或审查涉及已确定国家、当事方、文件及商业目标之跨境交易的企业、投资者、机构或法律团队（HCCH，2015；UNIDROIT，2016）。",
        included:
          "梳理准据法、管辖或争议解决条款、合同结构、交易对手、区域文书，并协调列出当地法律及专业工作事项。",
        excluded:
          "不负责设立公司、许可、税务或制裁核准、尽职调查认证、谈判授权、签署、提交、市场准入批准、交易完成或商业成功保证。"
      },
      "zh-Hant": {
        audience:
          "籌劃或審查涉及已確定國家、當事方、文件及商業目標之跨境交易的企業、投資者、機構或法律團隊（HCCH，2015；UNIDROIT，2016）。",
        included:
          "梳理準據法、管轄或爭議解決條款、合約結構、交易對手、區域文書，並協調列出當地法律及專業工作事項。",
        excluded:
          "不負責設立公司、許可、稅務或制裁核准、盡職調查認證、談判授權、簽署、提交、市場准入批准、交易完成或商業成功保證。"
      }
    }
  },
  "service-extractive-industries": {
    sourceIds: ["eiti-standard", "ifc-performance-standards", "un-guiding-principles"],
    jurisdiction: {
      en:
        "Mining, petroleum, land, community, environmental, tax, disclosure, and licensing rules are country- and project-specific.",
      fr:
        "Les règles minières, pétrolières, foncières, communautaires, environnementales, fiscales, de divulgation et de licence dépendent du pays et du projet.",
      zh:
        "采矿、石油、土地、社区、环境、税务、披露及许可规则取决于具体国家与项目。",
      "zh-Hant":
        "採礦、石油、土地、社區、環境、稅務、披露及許可規則取決於具體國家與專案。"
    },
    copy: {
      en: {
        audience:
          "Governments, investors, operators, affected organizations, or legal teams examining a defined extractive or natural-resource project and its legal, contractual, transparency, environmental, social, or human-rights context (EITI, 2023; IFC, 2012; OHCHR, 2011).",
        included:
          "Source-based mapping of identified licences, contracts, disclosure frameworks, environmental and social standards, community and human-rights questions, dispute provisions, and local-specialist dependencies.",
        excluded:
          "No reserve or technical assessment, title confirmation, permit or tax opinion, environmental or social impact assessment, community consent finding, compliance certification, financing advice, regulatory approval, or project-outcome assurance."
      },
      fr: {
        audience:
          "Gouvernements, investisseurs, opérateurs, organisations concernées ou équipes juridiques examinant un projet extractif ou de ressources naturelles défini et son contexte juridique, contractuel, de transparence, environnemental, social ou de droits humains (ITIE, 2023 ; IFC, 2012 ; HCDH, 2011).",
        included:
          "Cartographie fondée sur les sources des licences, contrats, cadres de divulgation, normes environnementales et sociales, questions communautaires et de droits humains, clauses de différend et besoins de spécialistes locaux identifiés.",
        excluded:
          "Aucune évaluation technique ou des réserves, confirmation de titre, avis de permis ou fiscal, étude d’impact, constat de consentement communautaire, certification de conformité, conseil financier, approbation réglementaire ou garantie de résultat du projet."
      },
      zh: {
        audience:
          "审查特定采掘或自然资源项目及其法律、合同、透明度、环境、社会或人权背景的政府、投资者、运营方、受影响机构或法律团队（EITI，2023；IFC，2012；OHCHR，2011）。",
        included:
          "依据来源梳理已识别的许可证、合同、披露框架、环境与社会标准、社区及人权问题、争议条款和当地专业依赖事项。",
        excluded:
          "不进行储量或技术评估、权属确认、许可或税务意见、环境或社会影响评估、社区同意认定、合规认证、融资建议、监管批准或项目结果保证。"
      },
      "zh-Hant": {
        audience:
          "審查特定採掘或自然資源專案及其法律、合約、透明度、環境、社會或人權背景的政府、投資者、營運方、受影響機構或法律團隊（EITI，2023；IFC，2012；OHCHR，2011）。",
        included:
          "依據來源梳理已識別的許可證、合約、揭露框架、環境與社會標準、社區及人權問題、爭議條款和當地專業依賴事項。",
        excluded:
          "不進行儲量或技術評估、權屬確認、許可或稅務意見、環境或社會影響評估、社區同意認定、合規認證、融資建議、監管批准或專案結果保證。"
      }
    }
  },
  "service-business-human-rights": {
    sourceIds: ["un-guiding-principles", "oecd-guidelines"],
    jurisdiction: {
      en:
        "International frameworks may be supplemented or displaced by binding national, regional, sector, disclosure, due-diligence, labour, environmental, or remedies rules.",
      fr:
        "Les cadres internationaux peuvent être complétés ou remplacés par des règles contraignantes nationales, régionales, sectorielles, de divulgation, de diligence, de travail, d’environnement ou de recours.",
      zh:
        "国际框架可能受到具有约束力的国家、区域、行业、披露、尽责管理、劳动、环境或救济规则的补充或取代。",
      "zh-Hant":
        "國際框架可能受到具有約束力的國家、區域、行業、揭露、盡責管理、勞動、環境或救濟規則的補充或取代。"
    },
    copy: {
      en: {
        audience:
          "Businesses, investors, public bodies, civil-society organizations, or legal teams assessing human-rights risks, responsible-business expectations, due-diligence processes, or remedy questions in a defined operation or value chain (OHCHR, 2011; OECD, 2023).",
        included:
          "Framework mapping, issue and stakeholder identification, source review, policy or process gap analysis, and identification of local-law, labour, environmental, community-engagement, disclosure, and remedy workstreams.",
        excluded:
          "No human-rights impact assessment certification, factual investigation finding, stakeholder-consent determination, compliance assurance, grievance adjudication, remedy guarantee, or conclusion that every legal duty has been identified."
      },
      fr: {
        audience:
          "Entreprises, investisseurs, organismes publics, organisations de la société civile ou équipes juridiques évaluant les risques liés aux droits humains, les attentes de conduite responsable, les processus de diligence ou les questions de recours dans une opération ou chaîne de valeur définie (HCDH, 2011 ; OCDE, 2023).",
        included:
          "Cartographie des cadres, identification des questions et parties prenantes, examen des sources, analyse des écarts de politiques ou processus et identification des travaux de droit local, travail, environnement, dialogue communautaire, divulgation et recours.",
        excluded:
          "Aucune certification d’étude d’impact sur les droits humains, conclusion d’enquête factuelle, détermination du consentement, assurance de conformité, décision sur un grief, garantie de réparation ou conclusion que toutes les obligations ont été identifiées."
      },
      zh: {
        audience:
          "评估特定运营或价值链中的人权风险、负责任商业预期、尽责管理流程或救济问题的企业、投资者、公共机构、社会组织或法律团队（OHCHR，2011；OECD，2023）。",
        included:
          "梳理框架、问题及利益相关方，审阅来源，分析政策或流程差距，并识别当地法律、劳动、环境、社区参与、披露及救济工作事项。",
        excluded:
          "不提供人权影响评估认证、事实调查结论、利益相关方同意认定、合规保证、申诉裁决或救济保证，也不确认已识别全部法律义务。"
      },
      "zh-Hant": {
        audience:
          "評估特定營運或價值鏈中的人權風險、負責任商業預期、盡責管理流程或救濟問題的企業、投資者、公共機構、社會組織或法律團隊（OHCHR，2011；OECD，2023）。",
        included:
          "梳理框架、問題及利害關係人，審閱來源，分析政策或流程差距，並識別當地法律、勞動、環境、社區參與、揭露及救濟工作事項。",
        excluded:
          "不提供人權影響評估認證、事實調查結論、利害關係人同意認定、合規保證、申訴裁決或救濟保證，也不確認已識別全部法律義務。"
      }
    }
  },
  "service-afcfta-trade": {
    sourceIds: ["afcfta-agreement"],
    jurisdiction: {
      en:
        "AfCFTA obligations operate alongside protocols, schedules, rules of origin, customs measures, domestic implementation, regional-community rules, and other international commitments.",
      fr:
        "Les obligations de la ZLECAf s’appliquent avec les protocoles, listes, règles d’origine, mesures douanières, textes nationaux, règles des communautés régionales et autres engagements internationaux.",
      zh:
        "AfCFTA 义务须与议定书、减让表、原产地规则、海关措施、国内实施、区域共同体规则及其他国际承诺一并考虑。",
      "zh-Hant":
        "AfCFTA 義務須與議定書、減讓表、原產地規則、海關措施、國內實施、區域共同體規則及其他國際承諾一併考慮。"
    },
    copy: {
      en: {
        audience:
          "Businesses, investors, public institutions, associations, or legal teams examining a defined African trade, services, investment, market-access, or dispute question connected with the AfCFTA framework (African Union, 2018).",
        included:
          "Research on identified AfCFTA provisions and related instruments, issue mapping for market access, rules of origin, services, investment, customs, or dispute settlement, and identification of domestic and regional implementation questions.",
        excluded:
          "No customs classification, origin certification, tariff ruling, licence, border clearance, market-access approval, State-to-State representation, or assurance that a route, preference, or remedy is available."
      },
      fr: {
        audience:
          "Entreprises, investisseurs, institutions publiques, associations ou équipes juridiques examinant une question définie de commerce africain, services, investissement, accès au marché ou différend liée au cadre de la ZLECAf (Union africaine, 2018).",
        included:
          "Recherche sur les dispositions et instruments identifiés de la ZLECAf, cartographie des questions d’accès au marché, origine, services, investissement, douanes ou règlement des différends et identification des questions de mise en œuvre nationale et régionale.",
        excluded:
          "Aucun classement douanier, certificat d’origine, décision tarifaire, licence, dédouanement, approbation d’accès au marché, représentation interétatique ou assurance qu’une voie, préférence ou réparation soit disponible."
      },
      zh: {
        audience:
          "研究与 AfCFTA 框架相关的特定非洲贸易、服务、投资、市场准入或争议问题的企业、投资者、公共机构、协会或法律团队（非洲联盟，2018）。",
        included:
          "研究已识别的 AfCFTA 条款及相关文书，梳理市场准入、原产地、服务、投资、海关或争议解决问题，并识别国内及区域实施事项。",
        excluded:
          "不提供海关归类、原产地认证、税则裁定、许可、边境清关、市场准入批准、国家间代理，也不保证某一途径、优惠或救济可用。"
      },
      "zh-Hant": {
        audience:
          "研究與 AfCFTA 框架相關的特定非洲貿易、服務、投資、市場准入或爭議問題的企業、投資者、公共機構、協會或法律團隊（非洲聯盟，2018）。",
        included:
          "研究已識別的 AfCFTA 條款及相關文書，梳理市場准入、原產地、服務、投資、海關或爭議解決問題，並識別國內及區域實施事項。",
        excluded:
          "不提供海關歸類、原產地認證、稅則裁定、許可、邊境清關、市場准入批准、國家間代理，也不保證某一途徑、優惠或救濟可用。"
      }
    }
  },
  "service-international-research": {
    sourceIds: ["aba-1-1", "hcch-choice-law", "unidroit-principles"],
    jurisdiction: {
      en:
        "Research completeness and currency depend on the defined question, jurisdictions, languages, databases, access rights, cut-off date, and local-source verification.",
      fr:
        "L’exhaustivité et l’actualité de la recherche dépendent de la question, des juridictions, langues, bases, droits d’accès, date d’arrêt et vérifications locales définis.",
      zh:
        "研究的完整性与时效性取决于已确定的问题、司法管辖区、语言、数据库、访问权限、截止日期及当地来源核实。",
      "zh-Hant":
        "研究的完整性與時效性取決於已確定的問題、司法管轄區、語言、資料庫、存取權限、截止日期及當地來源核實。"
    },
    copy: {
      en: {
        audience:
          "Law firms, businesses, academics, institutions, or organizations with a defined international or comparative-law question, intended use, jurisdictions, source expectations, and delivery format (American Bar Association, n.d., Rule 1.1).",
        included:
          "A research plan, source hierarchy, jurisdiction and date boundaries, documented assumptions, analysis of identified authorities, citation-supported memorandum, and an explicit list of unresolved or locally verified questions.",
        excluded:
          "No assurance that all sources are accessible, translated, current, authoritative, or exhaustive; no local-law opinion, academic peer review, litigation strategy, filing, representation, or guaranteed conclusion."
      },
      fr: {
        audience:
          "Cabinets, entreprises, universitaires, institutions ou organisations ayant une question définie de droit international ou comparé, un usage prévu, des juridictions, des attentes de sources et un format de livraison (American Bar Association, s. d., règle 1.1).",
        included:
          "Un plan de recherche, une hiérarchie des sources, des limites de juridiction et de date, les hypothèses documentées, l’analyse des autorités identifiées, une note référencée et une liste explicite des questions non résolues ou à vérifier localement.",
        excluded:
          "Aucune assurance que toutes les sources soient accessibles, traduites, actuelles, faisant autorité ou exhaustives ; aucun avis de droit local, évaluation scientifique, stratégie contentieuse, dépôt, représentation ou conclusion garantie."
      },
      zh: {
        audience:
          "已明确国际法或比较法问题、预期用途、司法管辖区、来源要求及交付形式的律师事务所、企业、学者、机构或组织（American Bar Association，无日期，规则 1.1）。",
        included:
          "研究计划、来源层级、司法管辖区与日期边界、记录的假设、对已识别权威资料的分析、附引证备忘录，以及未解决或需当地核实问题的明确清单。",
        excluded:
          "不保证所有来源均可获取、已翻译、最新、具有权威性或完整；不提供当地法律意见、学术同行评审、诉讼策略、提交、代理或保证结论。"
      },
      "zh-Hant": {
        audience:
          "已明確國際法或比較法問題、預期用途、司法管轄區、來源要求及交付形式的律師事務所、企業、學者、機構或組織（American Bar Association，無日期，規則 1.1）。",
        included:
          "研究計畫、來源層級、司法管轄區與日期邊界、記錄的假設、對已識別權威資料的分析、附引證備忘錄，以及未解決或需當地核實問題的明確清單。",
        excluded:
          "不保證所有來源均可取得、已翻譯、最新、具有權威性或完整；不提供當地法律意見、學術同儕評審、訴訟策略、提交、代理或保證結論。"
      }
    }
  },
  "service-expert-witness": {
    sourceIds: ["uk-cpr-35", "aba-1-1"],
    jurisdiction: {
      en:
        "Expert duties, admissibility, independence, qualifications, reports, conferences, testimony, and disclosure are controlled by the applicable forum. The cited English rule is a jurisdiction-specific example.",
      fr:
        "Les devoirs, l’admissibilité, l’indépendance, les qualifications, rapports, réunions, témoignages et divulgations de l’expert relèvent du forum applicable. La règle anglaise citée est un exemple propre à une juridiction.",
      zh:
        "专家职责、可采性、独立性、资格、报告、会议、作证及披露由适用论坛规则决定。所引英格兰规则仅为特定司法管辖区范例。",
      "zh-Hant":
        "專家職責、可採性、獨立性、資格、報告、會議、作證及揭露由適用審理機關規則決定。所引英格蘭規則僅為特定司法管轄區範例。"
    },
    copy: {
      en: {
        audience:
          "Counsel, tribunals, institutions, or organizations considering whether a clearly defined legal or international-law issue may require an appropriately qualified and independent expert under the forum’s rules (Ministry of Justice, n.d., Part 35).",
        included:
          "A preliminary conflict and qualification review, proposed instructions and issue scope, source methodology, and potential written or oral work only after appointment terms, duties, jurisdiction, timetable, and permitted role are approved.",
        excluded:
          "No claim of appointment, qualification for a particular issue, independence finding, admissibility, report acceptance, permission to testify, advocacy role, fact determination, deadline protection, fee recovery, or case outcome."
      },
      fr: {
        audience:
          "Conseils, tribunaux, institutions ou organisations examinant si une question juridique ou de droit international clairement définie peut nécessiter un expert qualifié et indépendant au regard des règles du forum (Ministry of Justice, s. d., partie 35).",
        included:
          "Examen préliminaire des conflits et qualifications, projet d’instructions et de périmètre, méthode des sources et éventuels travaux écrits ou oraux uniquement après approbation de la mission, des devoirs, de la juridiction, du calendrier et du rôle permis.",
        excluded:
          "Aucune affirmation de nomination ou de qualification pour une question, aucun constat d’indépendance, d’admissibilité, d’acceptation du rapport ou d’autorisation de témoigner, aucun rôle de plaidoyer, constat factuel, suivi de délai, remboursement d’honoraires ou résultat."
      },
      zh: {
        audience:
          "评估某一明确法律或国际法问题是否需要依论坛规则委任适当合资格且独立专家的律师、审理机构、机构或组织（Ministry of Justice，无日期，第 35 部分）。",
        included:
          "初步利益冲突与资格审查、拟定指示和问题范围、来源方法；仅在委任条款、职责、司法管辖区、时间表及允许角色获批后，才可能开展书面或口头工作。",
        excluded:
          "不声称已获委任或具备特定问题资格，不认定独立性、可采性、报告接受或作证许可，不承担代理、事实认定、期限保护、费用追偿，也不保证案件结果。"
      },
      "zh-Hant": {
        audience:
          "評估某一明確法律或國際法問題是否需要依審理機關規則委任適當合資格且獨立專家的律師、審理機關、機構或組織（Ministry of Justice，無日期，第 35 部分）。",
        included:
          "初步利益衝突與資格審查、擬定指示和問題範圍、來源方法；僅在委任條款、職責、司法管轄區、時間表及允許角色獲批後，才可能開展書面或口頭工作。",
        excluded:
          "不聲稱已獲委任或具備特定問題資格，不認定獨立性、可採性、報告接受或作證許可，不承擔代理、事實認定、期限保護、費用追償，也不保證案件結果。"
      }
    }
  },
  "service-legal-representation": {
    sourceIds: ["aba-1-18", "aba-1-2", "aba-1-1"],
    jurisdiction: {
      en:
        "Authorization to practise, permitted title, court or tribunal admission, conflicts, client-care duties, fee rules, and engagement formation are jurisdiction- and forum-specific. ABA rules are cited only as a model-rule example.",
      fr:
        "L’autorisation d’exercer, le titre permis, l’admission devant une juridiction, les conflits, les obligations envers le client, les honoraires et la formation de la mission dépendent de la juridiction et du forum. Les règles ABA ne sont qu’un exemple.",
      zh:
        "执业授权、可使用头衔、法院或仲裁庭准入、利益冲突、客户照护义务、收费规则及委托成立均因司法管辖区与论坛而异。ABA 规则仅作示范。",
      "zh-Hant":
        "執業授權、可使用頭銜、法院或仲裁庭准入、利益衝突、客戶照護義務、收費規則及委託成立均因司法管轄區與審理機關而異。ABA 規則僅作示範。"
    },
    copy: {
      en: {
        audience:
          "Prospective clients seeking to determine whether representation might be legally and professionally available for an identified matter after jurisdiction, authorization, competence, conflicts, capacity, urgency, and terms are checked (American Bar Association, n.d., Rules 1.18, 1.2, and 1.1).",
        included:
          "Pre-engagement eligibility and scope discussion only. Representation begins solely through a separately approved and accepted engagement that identifies client, matter, jurisdiction, role, fees, responsibilities, communications, and exclusions.",
        excluded:
          "This page, contact, intake, document upload, payment step, or consultation request does not create representation, an attorney-client relationship, confidentiality beyond applicable duties, deadline protection, filing, appearance, negotiation, case management, settlement authority, or outcome assurance."
      },
      fr: {
        audience:
          "Clients potentiels souhaitant déterminer si une représentation pourrait être légalement et professionnellement disponible pour un dossier identifié après vérification de la juridiction, de l’autorisation, de la compétence, des conflits, de la capacité, de l’urgence et des conditions (American Bar Association, s. d., règles 1.18, 1.2 et 1.1).",
        included:
          "Uniquement une discussion préalable sur l’éligibilité et le périmètre. La représentation ne commence qu’au moyen d’une mission distincte approuvée et acceptée identifiant client, dossier, juridiction, rôle, honoraires, responsabilités, communications et exclusions.",
        excluded:
          "Cette page, un contact, une admission, un téléversement, un paiement ou une demande de consultation ne crée aucune représentation, relation avocat-client, confidentialité au-delà des devoirs applicables, protection de délai, dépôt, comparution, négociation, gestion de dossier, pouvoir de transaction ou résultat assuré."
      },
      zh: {
        audience:
          "在核查司法管辖区、执业授权、胜任能力、利益冲突、承办能力、紧急程度及条款后，寻求判断是否可就明确事项依法且合规获得代理的潜在客户（American Bar Association，无日期，规则 1.18、1.2 与 1.1）。",
        included:
          "仅进行委托前资格与范围讨论。只有另行批准并接受的委托文件明确客户、事项、司法管辖区、角色、费用、责任、沟通及排除事项后，代理方可开始。",
        excluded:
          "本页面、联系、信息收集、文件上传、付款步骤或咨询请求均不建立代理或律师与客户关系，不产生超出适用义务的保密、期限保护、提交、出庭、谈判、案件管理、和解授权或结果保证。"
      },
      "zh-Hant": {
        audience:
          "在核查司法管轄區、執業授權、勝任能力、利益衝突、承辦能力、緊急程度及條款後，尋求判斷是否可就明確事項依法且合規獲得代理的潛在客戶（American Bar Association，無日期，規則 1.18、1.2 與 1.1）。",
        included:
          "僅進行委託前資格與範圍討論。只有另行核准並接受的委託文件明確客戶、事項、司法管轄區、角色、費用、責任、溝通及排除事項後，代理方可開始。",
        excluded:
          "本頁面、聯絡、資料收集、文件上傳、付款步驟或諮詢請求均不建立代理或律師與客戶關係，不產生超出適用義務的保密、期限保護、提交、出庭、談判、案件管理、和解授權或結果保證。"
      }
    }
  },
  "service-legal-consultancy": {
    sourceIds: ["aba-1-1", "aba-1-2", "hcch-choice-law"],
    jurisdiction: {
      en:
        "The line between legal information, legal advice, reserved activity, foreign-law practice, and representation depends on the jurisdiction, provider status, audience, facts, and engagement.",
      fr:
        "La distinction entre information juridique, conseil juridique, activité réservée, pratique du droit étranger et représentation dépend de la juridiction, du statut du prestataire, du public, des faits et de la mission.",
      zh:
        "法律信息、法律建议、保留业务、外国法执业与代理之间的界限取决于司法管辖区、服务者身份、受众、事实及委托。",
      "zh-Hant":
        "法律資訊、法律建議、保留業務、外國法執業與代理之間的界限取決於司法管轄區、服務者身分、受眾、事實及委託。"
    },
    copy: {
      en: {
        audience:
          "Organizations, businesses, institutions, or legal teams with a defined international, investment, commercial, or cross-border question and an approved jurisdiction, role, audience, and intended use (American Bar Association, n.d., Rules 1.1 and 1.2).",
        included:
          "Issue framing, agreed assumptions, source-based and comparative research, options and risk analysis, a defined written deliverable, and clear referrals for local, regulated, technical, tax, sanctions, or other specialist advice.",
        excluded:
          "No universal or informal legal opinion, reserved local-law service, representation, filing, transaction execution, regulatory clearance, compliance certification, investment recommendation, decision-making authority, or guaranteed result."
      },
      fr: {
        audience:
          "Organisations, entreprises, institutions ou équipes juridiques ayant une question définie de droit international, d’investissement, commercial ou transfrontalier et une juridiction, un rôle, un public et un usage approuvés (American Bar Association, s. d., règles 1.1 et 1.2).",
        included:
          "Définition de la question, hypothèses convenues, recherche fondée sur les sources et comparative, analyse des options et risques, livrable écrit défini et orientations claires vers des conseils locaux, réglementés, techniques, fiscaux, de sanctions ou spécialisés.",
        excluded:
          "Aucun avis juridique universel ou informel, service de droit local réservé, représentation, dépôt, exécution d’opération, agrément réglementaire, certification de conformité, recommandation d’investissement, pouvoir décisionnel ou résultat garanti."
      },
      zh: {
        audience:
          "就明确的国际法、投资、商业或跨境问题寻求分析，且司法管辖区、角色、受众及预期用途已获批准的组织、企业、机构或法律团队（American Bar Association，无日期，规则 1.1 与 1.2）。",
        included:
          "界定问题与约定假设，开展来源型和比较研究，分析选项与风险，提供明确书面交付物，并清楚转介当地、受监管、技术、税务、制裁或其他专业建议。",
        excluded:
          "不提供普遍或非正式法律意见、受保留的当地法律服务、代理、提交、交易执行、监管核准、合规认证、投资建议、决策权限或保证结果。"
      },
      "zh-Hant": {
        audience:
          "就明確的國際法、投資、商業或跨境問題尋求分析，且司法管轄區、角色、受眾及預期用途已獲核准的組織、企業、機構或法律團隊（American Bar Association，無日期，規則 1.1 與 1.2）。",
        included:
          "界定問題與約定假設，開展來源型和比較研究，分析選項與風險，提供明確書面交付物，並清楚轉介當地、受監管、技術、稅務、制裁或其他專業建議。",
        excluded:
          "不提供普遍或非正式法律意見、受保留的當地法律服務、代理、提交、交易執行、監管核准、合規認證、投資建議、決策權限或保證結果。"
      }
    }
  },
  "service-environmental-law": {
    sourceIds: ["unep-montevideo", "ifc-performance-standards"],
    jurisdiction: {
      en:
        "Environmental duties, permits, assessment procedures, participation rights, liability, disclosure, enforcement, and remedies are jurisdiction-, sector-, project-, and fact-specific.",
      fr:
        "Les obligations environnementales, permis, procédures d’évaluation, droits de participation, responsabilités, divulgations, contrôles et recours dépendent de la juridiction, du secteur, du projet et des faits.",
      zh:
        "环境义务、许可、评估程序、参与权、责任、披露、执法及救济取决于司法管辖区、行业、项目与事实。",
      "zh-Hant":
        "環境義務、許可、評估程序、參與權、責任、揭露、執法及救濟取決於司法管轄區、行業、專案與事實。"
    },
    copy: {
      en: {
        audience:
          "Organizations, public bodies, investors, communities, or legal teams examining a defined environmental-law question connected with natural resources, investment, infrastructure, operations, or cross-border activity (UNEP, 2019; IFC, 2012).",
        included:
          "Identification and comparison of relevant instruments, approval pathways, assessment and participation questions, environmental and social standards, liability or dispute issues, and matters requiring local counsel or technical experts.",
        excluded:
          "No environmental impact assessment, scientific or engineering opinion, permit application, regulator communication, compliance audit or certification, remediation plan, authorization, litigation representation, or prediction of regulatory or project outcome."
      },
      fr: {
        audience:
          "Organisations, organismes publics, investisseurs, communautés ou équipes juridiques examinant une question définie de droit de l’environnement liée aux ressources naturelles, à l’investissement, aux infrastructures, aux opérations ou à une activité transfrontalière (PNUE, 2019 ; IFC, 2012).",
        included:
          "Identification et comparaison des instruments, parcours d’autorisation, questions d’évaluation et de participation, normes environnementales et sociales, responsabilités ou différends et matières nécessitant un conseil local ou des experts techniques.",
        excluded:
          "Aucune étude d’impact, opinion scientifique ou d’ingénierie, demande de permis, communication avec un régulateur, audit ou certification de conformité, plan de réhabilitation, autorisation, représentation contentieuse ou pronostic réglementaire ou de projet."
      },
      zh: {
        audience:
          "审查与自然资源、投资、基础设施、运营或跨境活动有关之特定环境法问题的组织、公共机构、投资者、社区或法律团队（UNEP，2019；IFC，2012）。",
        included:
          "识别并比较相关文书、审批路径、评估与参与问题、环境及社会标准、责任或争议问题，以及需当地律师或技术专家处理的事项。",
        excluded:
          "不进行环境影响评估、科学或工程意见、许可申请、监管沟通、合规审计或认证、修复计划、授权、诉讼代理，也不预测监管或项目结果。"
      },
      "zh-Hant": {
        audience:
          "審查與自然資源、投資、基礎設施、營運或跨境活動有關之特定環境法問題的組織、公共機構、投資者、社區或法律團隊（UNEP，2019；IFC，2012）。",
        included:
          "識別並比較相關文書、審批途徑、評估與參與問題、環境及社會標準、責任或爭議問題，以及需當地律師或技術專家處理的事項。",
        excluded:
          "不進行環境影響評估、科學或工程意見、許可申請、監管溝通、合規審計或認證、修復計畫、授權、訴訟代理，也不預測監管或專案結果。"
      }
    }
  },
  "service-esg-advisory": {
    sourceIds: ["oecd-guidelines", "un-guiding-principles", "ifc-performance-standards"],
    jurisdiction: {
      en:
        "“ESG” is not one legal regime. Applicable corporate, securities, disclosure, due-diligence, environmental, labour, human-rights, anti-corruption, and sector rules must be identified separately.",
      fr:
        "L’« ESG » n’est pas un régime juridique unique. Les règles applicables de société, valeurs mobilières, divulgation, diligence, environnement, travail, droits humains, anticorruption et secteur doivent être identifiées séparément.",
      zh:
        "“ESG”并非单一法律制度。适用的公司、证券、披露、尽责管理、环境、劳动、人权、反腐败及行业规则须分别识别。",
      "zh-Hant":
        "「ESG」並非單一法律制度。適用的公司、證券、揭露、盡責管理、環境、勞動、人權、反貪腐及行業規則須分別識別。"
    },
    copy: {
      en: {
        audience:
          "Boards, businesses, investors, public bodies, or legal and sustainability teams evaluating a defined responsible-business, governance, disclosure, due-diligence, human-rights, environmental, or social question (OECD, 2023; OHCHR, 2011; IFC, 2012).",
        included:
          "Framework and obligation mapping, scope and stakeholder definition, policy or process gap analysis, source-based risk questions, and identification of matters requiring local legal, accounting, assurance, scientific, engineering, labour, or investment expertise.",
        excluded:
          "No ESG rating, assurance, audit, certification, investment or financial recommendation, sustainability claim verification, disclosure approval, regulatory clearance, impact measurement, implementation management, or outcome guarantee."
      },
      fr: {
        audience:
          "Conseils d’administration, entreprises, investisseurs, organismes publics ou équipes juridiques et de durabilité évaluant une question définie de conduite responsable, gouvernance, divulgation, diligence, droits humains, environnement ou société (OCDE, 2023 ; HCDH, 2011 ; IFC, 2012).",
        included:
          "Cartographie des cadres et obligations, définition du périmètre et des parties prenantes, analyse des écarts de politique ou processus, questions de risque fondées sur les sources et identification des besoins juridiques locaux, comptables, d’assurance, scientifiques, techniques, sociaux ou financiers.",
        excluded:
          "Aucune notation ESG, assurance, audit, certification, recommandation financière ou d’investissement, vérification d’allégation de durabilité, approbation de divulgation, agrément réglementaire, mesure d’impact, gestion de mise en œuvre ou garantie de résultat."
      },
      zh: {
        audience:
          "评估特定负责任商业、治理、披露、尽责管理、人权、环境或社会问题的董事会、企业、投资者、公共机构或法律与可持续发展团队（OECD，2023；OHCHR，2011；IFC，2012）。",
        included:
          "梳理框架与义务，界定范围和利益相关方，分析政策或流程差距，提出来源型风险问题，并识别需当地法律、会计、鉴证、科学、工程、劳动或投资专业处理的事项。",
        excluded:
          "不提供 ESG 评级、鉴证、审计、认证、投资或财务建议、可持续性声明核验、披露批准、监管核准、影响衡量、实施管理或结果保证。"
      },
      "zh-Hant": {
        audience:
          "評估特定負責任商業、治理、揭露、盡責管理、人權、環境或社會問題的董事會、企業、投資者、公共機構或法律與永續發展團隊（OECD，2023；OHCHR，2011；IFC，2012）。",
        included:
          "梳理框架與義務，界定範圍和利害關係人，分析政策或流程差距，提出來源型風險問題，並識別需當地法律、會計、確信、科學、工程、勞動或投資專業處理的事項。",
        excluded:
          "不提供 ESG 評級、確信、審計、認證、投資或財務建議、永續性聲明核驗、揭露核准、監管核准、影響衡量、實施管理或結果保證。"
      }
    }
  }
};

export function applyServiceEvidence(services) {
  for (const service of services) {
    const evidence = serviceEvidence[service.id];
    if (!evidence) continue;
    service.evidenceStatus = "pending";
    service.evidence = {
      sourceIds: evidence.sourceIds,
      references: evidence.sourceIds.map((sourceId) => ({
        sourceId,
        ...serviceAuthorityLibrary[sourceId]
      })),
      jurisdiction: evidence.jurisdiction,
      reviewStatus: localeStatus
    };
    for (const locale of ["en", "fr", "zh", "zh-Hant"]) {
      Object.assign(service.translations[locale], evidence.copy[locale]);
    }
  }
  return services;
}
