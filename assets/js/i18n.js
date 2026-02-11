// Multi-language support for Xiao Li Yorozuya
const translations = {
  'zh-CN': {
    // Site title and meta
    'site.name': '小李万事屋',
    'site.tagline': 'Xiao Li Yorozuya',
    'site.description': '杭州西湖区综合生活服务工作室',
    
    // Navigation
    'nav.home': '首页',
    'nav.services': '服务项目',
    'nav.about': '关于我们',
    'nav.faq': '价格与常见问题',
    'nav.contact': '联系与预约',
    
    // Language selector
    'lang.select': '语言',
    'lang.zh-CN': '简体中文',
    'lang.zh-TW': '繁體中文',
    'lang.en': 'English',
    'lang.ja': '日本語',
    
    // Common
    'common.location': '杭州 · 西湖区 · 三墩镇 · 云谷园区',
    'common.operator': 'Wentan Li',
    'common.backToTop': '回到顶部',
    'common.breadcrumb.home': '首页',
    
    // Footer
    'footer.quickLinks': '快速链接',
    'footer.contact': '联系方式',
    'footer.email': '邮箱',
    'footer.wechat': '微信',
    'footer.location': '所在地',
    'footer.notice': '温馨提示',
    'footer.noticeText': '占卜与命理相关服务仅为个人兴趣研究分享，不构成对未来结果的保证；法律相关内容仅为常识性信息与个人观点，不构成正式法律意见或律师服务。',
    'footer.copyright': '小李万事屋 Xiao Li Yorozuya. All rights reserved.',
    'footer.subtitle': 'Independent personal studio operated by Wentan Li in Hangzhou, China.',
    'footer.desc': '由 Wentan Li 个人经营的综合生活服务工作室，位于杭州市西湖区三墩镇阿里巴巴云谷园区一号楼 D 区。',
    
    // Home page
    'home.hero.kicker': '杭州 · 西湖区 · 三墩镇 · 云谷园区',
    'home.hero.title': '从算命到修车，<br />生活大小事，一家搞定。',
    'home.hero.subtitle': '小李万事屋是由 <strong>Wentan Li</strong> 个人经营的小型综合服务工作室，已为周边上千位客户解决各类生活琐事与个性化需求。超过 <strong>180+</strong> 项服务，灵活收费，透明沟通。',
    'home.hero.cta.book': '立即预约 / 咨询',
    'home.hero.cta.services': '查看全部服务项目',
    'home.hero.hours.label': '营业时间',
    'home.hero.hours.value': '工作日 10:00–20:00（节假日可预约）',
    'home.hero.address.label': '到店地址',
    'home.hero.address.value': '杭州市西湖区三墩镇，阿里巴巴云谷园区一号楼 D 区',
    'home.hero.payment.label': '支持支付',
    'home.hero.payment.value': 'VISA · PayPal · 银联 · 微信 · 支付宝',
    'home.hero.services.title': '热门服务一览',
    'home.hero.services.more': '查看更多 180+ 项服务',
    'home.hero.note': '所有服务均由 Wentan Li 本人亲自对接或协调，事前说明、事后跟进，提供普通话、日语、英语三语沟通。',
    'home.why.title': '为什么选择小李万事屋？',
    'home.why.intro': '既不是传统“黄页中介”，也不是只做单一业务的小店。小李万事屋更像是你在云谷园区里的私人“万能小帮手”。',
    'home.categories.title': '服务领域概览',
    'home.categories.intro': '超过 180+ 项细分服务，大致可分为以下几大类别。若你暂时不知道该归类到哪里，也可以直接发消息咨询。',
    'home.categories.cta1': '查看详细服务清单',
    'home.categories.cta2': '不确定该选哪项？直接问掌柜',
    
    'home.location.title': '位置与到达方式',
    'home.location.intro': '小李万事屋位于 <strong>杭州市西湖区三墩镇，阿里巴巴云谷园区一号楼 D 区</strong>。面向园区与周边居民，主要采取预约制服务。',
    'home.location.way1.label': '园区内',
    'home.location.way1.value': '可步行或骑行前往 D 区指定会面点',
    'home.location.way2.label': '地铁&公交',
    'home.location.way2.value': '可导航至"阿里巴巴云谷园区"，再根据掌柜指引步行前往',
    'home.location.way3.label': '线上服务',
    'home.location.way3.value': '支持微信、钉钉、飞书、Zoom 等视频/语音方式',
    
    'home.payment.title': '支付方式与开票',
    'home.payment.intro': '为方便不同背景与地区的客户，小李万事屋支持多种支付方式与货币。',
    'home.payment.method1.label': '线下',
    'home.payment.method1.value': '现金（人民币）、支付宝、微信支付',
    'home.payment.method2.label': '线上国际',
    'home.payment.method2.value': 'VISA / MasterCard 信用卡、PayPal',
    'home.payment.method3.label': '国内银行卡',
    'home.payment.method3.value': '银联卡转账、云闪付',
    'home.payment.invoice.label': '发票',
    'home.payment.invoice.value': '根据具体项目可提供相应收款凭证或简易收据',
    
    'home.testimonials.title': '来自真实客户的反馈',
    'home.testimonials.subtitle': '为保护隐私，以下评价均已做匿名与部分信息处理，仅保留核心内容与大致背景。',
    'home.testimonials.item1.text': '"本来只是想找人看看运势，结果聊着聊着变成了职场梳理，很多纠结的点理顺之后，反而不那么在意\'好运不好运\'这件事了。"',
    'home.testimonials.item1.author': '— H 女士 · 互联网运营',
    'home.testimonials.item2.text': '"日语课不是那种死板的语法填鸭，更像是围绕着\'我真的想说的内容\'一点点搭积木，线上上课也能很有参与感。"',
    'home.testimonials.item2.author': '— Z 同学 · JLPT 备考',
    'home.testimonials.item3.text': '"帮我远程看了几款日本茶具和茶叶，给了非常实用的购买建议，还顺带普及了冲泡方式，避免了不少踩坑。"',
    'home.testimonials.item3.author': '— L 先生 · 茶爱好者',
    
    'home.cta.title': '有事，发个消息就好。',
    'home.cta.subtitle': '无论是需要一个安静的倾听者、一位懂你的语言老师，还是一个肯替你跑腿、帮你查资料的人——小李万事屋都乐意先听你讲。',
    'home.cta.button': '添加联系方式 · 发起预约',
    'home.cta.note': '通常在工作日 24 小时内回复。',
  },
  
  'zh-TW': {
    'site.name': '小李萬事屋',
    'site.tagline': 'Xiao Li Yorozuya',
    'site.description': '杭州西湖區綜合生活服務工作室',
    
    'nav.home': '首頁',
    'nav.services': '服務項目',
    'nav.about': '關於我們',
    'nav.faq': '價格與常見問題',
    'nav.contact': '聯繫與預約',
    
    'lang.select': '語言',
    'lang.zh-CN': '简体中文',
    'lang.zh-TW': '繁體中文',
    'lang.en': 'English',
    'lang.ja': '日本語',
    
    'common.location': '杭州 · 西湖區 · 三墩鎮 · 雲谷園區',
    'common.operator': 'Wentan Li',
    'common.backToTop': '回到頂部',
    'common.breadcrumb.home': '首頁',
    
    'footer.quickLinks': '快速連結',
    'footer.contact': '聯繫方式',
    'footer.email': '郵箱',
    'footer.wechat': '微信',
    'footer.location': '所在地',
    'footer.notice': '溫馨提示',
    'footer.noticeText': '占卜與命理相關服務僅為個人興趣研究分享，不構成對未來結果的保證；法律相關內容僅為常識性信息與個人觀點，不構成正式法律意見或律師服務。',
    'footer.copyright': '小李萬事屋 Xiao Li Yorozuya. All rights reserved.',
    'footer.subtitle': 'Independent personal studio operated by Wentan Li in Hangzhou, China.',
    'footer.desc': '由 Wentan Li 個人經營的綜合生活服務工作室，位於杭州市西湖區三墩鎮阿里巴巴雲谷園區一號樓 D 區。',
    
    'home.hero.kicker': '杭州 · 西湖區 · 三墩鎮 · 雲谷園區',
    'home.hero.title': '從算命到修車，<br />生活大小事，一家搞定。',
    'home.hero.subtitle.1': '小李萬事屋是由',
    'home.hero.subtitle.2': '個人經營的小型綜合服務工作室，已為周邊上千位客戶解決各類生活瑣事與個性化需求。超過',
    'home.hero.subtitle.3': '項服務，靈活收費，透明溝通。',
    'home.hero.cta.book': '立即預約 / 諮詢',
    'home.hero.cta.services': '查看全部服務項目',
    'home.hero.hours.label': '營業時間',
    'home.hero.hours.value': '工作日 10:00–20:00（節假日可預約）',
    'home.hero.address.label': '到店地址',
    'home.hero.address.value': '杭州市西湖區三墩鎮，阿里巴巴雲谷園區一號樓 D 區',
    'home.hero.payment.label': '支持支付',
    'home.hero.payment.value': 'VISA · PayPal · 銀聯 · 微信 · 支付寶',
    'home.hero.services.title': '熱門服務一覽',
    'home.hero.services.more': '查看更多 180+ 項服務',
    'home.hero.note': '所有服務均由 Wentan Li 本人親自對接或協調，事前說明、事後跟進，提供普通話、日語、英語三語溝通。',
    'home.hero.subtitle': '小李萬事屋是由 <strong>Wentan Li</strong> 個人經營的小型綜合服務工作室，已為周邊上千位客戶解決各類生活瑣事與個性化需求。超過 <strong>180+</strong> 項服務，靈活收費，透明溝通。',
    'home.why.title': '為什麼選擇小李萬事屋？',
    'home.why.intro': '既不是傳統「黃頁中介」，也不是只做單一業務的小店。小李萬事屋更像是你在雲谷園區裡的私人「萬能小幫手」。',
    'home.why.feature1.title': '一人掌櫃 · 多重專長',
    'home.why.feature1.text': '店主 Wentan Li 擁有長期在互聯網行業與海外生活的經驗，擅長語言教學、跨文化溝通與信息檢索，同時保持對命理文化與茶文化的長期興趣與學習。',
    'home.why.feature2.title': '價格透明 · 先報價再服務',
    'home.why.feature2.text': '所有服務均在溝通確認後提供明確報價，能線上解決的絕不多收「跑腿費」，複雜需求也可拆分為多個小模塊，按階段結算。',
    'home.why.feature3.title': '多語言溝通 · 面向國際客戶',
    'home.why.feature3.text': '支持普通話、日語（N1）與英語溝通，方便雲谷園區內外籍員工、日企/外企客戶以及海外網購用戶的各種需求對接。',
    'home.categories.title': '服務領域概覽',
    'home.categories.intro': '超過 180+ 項細分服務，大致可分為以下幾大類別。若你暫時不知道該歸類到哪裡，也可以直接發消息諮詢。',
    'home.categories.cta1': '查看詳細服務清單',
    'home.categories.cta2': '不確定該選哪項？直接問掌櫃',
    'home.cat1.title': '占卜 · 命理 · 心理陪伴',
    'home.cat1.item1': '運勢簡易占卜與方向建議',
    'home.cat1.item2': '手相、面相基礎解讀',
    'home.cat1.item3': '人生規劃頭腦風暴',
    'home.cat1.item4': '焦慮傾訴與理性分析（非心理治療）',
    'home.cat2.title': '學習 · 語言 · 職場能力',
    'home.cat2.item1': '日語入門 / JLPT 備考 / 口語糾音',
    'home.cat2.item2': '英語口語 / 郵件潤色 / 簡歷指導',
    'home.cat2.item3': '學生學習規劃與方法建議',
    'home.cat2.item4': '職場溝通與遠程協作建議',
    'home.cat3.title': '生活 · 維修 · 代購跑腿',
    'home.cat3.item1': '自行車小修小補與保養建議',
    'home.cat3.item2': '高山茶選購與品飲建議',
    'home.cat3.item3': '日本 / 海外網站代購諮詢與下單代辦',
    'home.cat3.item4': '雲谷園區周邊跑腿、陪簽收、代排隊',
    'home.cat4.title': '信息 · 文書 · 法律常識',
    'home.cat4.item1': '合同、租房、網購糾紛基礎判斷',
    'home.cat4.item2': '常見消費維權渠道指引',
    'home.cat4.item3': '中文 / 日文 / 英文簡單文書潤色',
    'home.cat4.item4': '政策信息檢索與解讀（非官方）',
    'home.cat5.title': '遠程服務',
    'home.cat5.item1': '線上視頻/語音占卜',
    'home.cat5.item2': '遠程語言輔導與作業伴讀',
    'home.cat5.item3': '海外購買渠道推薦與比價',
    'home.cat5.item4': '時間管理與工具使用教學',
    'home.cat6.title': '定制與特殊需求',
    'home.cat6.item1': '一日個人助理（按小時計費）',
    'home.cat6.item2': '陪同辦事 / 代查資料',
    'home.cat6.item3': '小規模活動翻譯與協助',
    'home.cat6.item4': '其他：可先說明需求，再評估可行性',
  },
  
  'en': {
    'site.name': 'Xiao Li Yorozuya',
    'site.tagline': 'General Services Studio',
    'site.description': 'Comprehensive Life Services Studio in Hangzhou Xihu District',
    
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.faq': 'FAQ & Pricing',
    'nav.contact': 'Contact',
    
    'lang.select': 'Language',
    'lang.zh-CN': '简体中文',
    'lang.zh-TW': '繁體中文',
    'lang.en': 'English',
    'lang.ja': '日本語',
    
    'common.location': 'Hangzhou · Xihu · Sandun · Yungu Campus',
    'common.operator': 'Wentan Li',
    'common.backToTop': 'Back to Top',
    'common.breadcrumb.home': 'Home',
    
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.wechat': 'WeChat',
    'footer.location': 'Location',
    'footer.notice': 'Notice',
    'footer.noticeText': 'Fortune-telling and divination services are personal interest sharing only and do not guarantee future results; legal content is informational only and does not constitute formal legal advice or attorney services.',
    'footer.copyright': 'Xiao Li Yorozuya. All rights reserved.',
    'footer.subtitle': 'Independent personal studio operated by Wentan Li in Hangzhou, China.',
    'footer.desc': 'A comprehensive life services studio personally operated by Wentan Li, located at Alibaba Yungu Campus Building 1, Area D, Sandun Town, Xihu District, Hangzhou.',
    
    'home.hero.kicker': 'Hangzhou · Xihu · Sandun · Yungu Campus',
    'home.hero.title': 'From Fortune-Telling to Bike Repairs,<br />All Life Matters, One Place.',
    'home.hero.subtitle.1': 'Xiao Li Yorozuya is a small comprehensive services studio personally operated by',
    'home.hero.subtitle.2': ', having helped thousands of customers solve daily life matters and personalized needs. Over',
    'home.hero.subtitle.3': 'services, flexible pricing, transparent communication.',
    'home.hero.cta.book': 'Book Now / Inquire',
    'home.hero.cta.services': 'View All Services',
    'home.hero.hours.label': 'Hours',
    'home.hero.hours.value': 'Weekdays 10:00–20:00 (Holidays by appointment)',
    'home.hero.address.label': 'Address',
    'home.hero.address.value': 'Alibaba Yungu Campus, Building 1, Area D, Sandun Town, Xihu District, Hangzhou',
    'home.hero.payment.label': 'Payment',
    'home.hero.payment.value': 'VISA · PayPal · UnionPay · WeChat · Alipay',
    'home.hero.subtitle': 'Xiao Li Yorozuya is a small comprehensive services studio personally operated by <strong>Wentan Li</strong>, having helped thousands of customers solve daily life matters and personalized needs. Over <strong>180+</strong> services, flexible pricing, transparent communication.',
    'home.hero.services.title': 'Popular Services',
    'home.hero.services.more': 'View 180+ More Services',
    'home.hero.note': 'All services are personally handled or coordinated by Wentan Li, with pre-service explanations and post-service follow-ups, providing communication in Mandarin, Japanese, and English.',
    'home.why.title': 'Why Choose Xiao Li Yorozuya?',
    'home.why.intro': 'Neither a traditional "yellow pages" nor a single-service shop. Xiao Li Yorozuya is more like your personal "all-around assistant" in Yungu Campus.',
    'home.why.feature1.title': 'One-Person Shop · Multiple Expertise',
    'home.why.feature1.text': 'Owner Wentan Li has extensive experience in the internet industry and overseas living, skilled in language teaching, cross-cultural communication, and information retrieval, while maintaining long-term interest and study in fortune-telling and tea culture.',
    'home.why.feature2.title': 'Transparent Pricing · Quote First, Serve Later',
    'home.why.feature2.text': 'All services provide clear quotes after communication confirmation. Online solutions never charge extra "errand fees", and complex needs can be split into small modules with phased payment.',
    'home.why.feature3.title': 'Multilingual Communication · International Clients',
    'home.why.feature3.text': 'Supporting Mandarin, Japanese (N1), and English communication, convenient for foreign employees, Japanese/foreign companies, and overseas shopping users in Yungu Campus.',
    'home.categories.title': 'Service Categories Overview',
    'home.categories.intro': 'Over 180+ detailed services, roughly divided into the following major categories. If unsure which category, feel free to message for consultation.',
    'home.categories.cta1': 'View Detailed Service List',
    'home.categories.cta2': 'Not sure which to choose? Ask directly',
    'home.cat1.title': 'Fortune-Telling · Divination · Counseling',
    'home.cat1.item1': 'Fortune direction divination and advice',
    'home.cat1.item2': 'Palm and face reading basics',
    'home.cat1.item3': 'Life planning brainstorming',
    'home.cat1.item4': 'Anxiety listening and rational analysis (not therapy)',
    'home.cat2.title': 'Learning · Language · Career Skills',
    'home.cat2.item1': 'Japanese basics / JLPT prep / pronunciation',
    'home.cat2.item2': 'English speaking / email polish / resume guidance',
    'home.cat2.item3': 'Student study planning and method advice',
    'home.cat2.item4': 'Workplace communication and remote collaboration',
    'home.cat3.title': 'Life · Repair · Shopping & Errands',
    'home.cat3.item1': 'Bicycle minor repairs and maintenance',
    'home.cat3.item2': 'High mountain tea selection and tasting',
    'home.cat3.item3': 'Japan/overseas shopping consultation and ordering',
    'home.cat3.item4': 'Yungu Campus errands, package pickup, queuing',
    'home.cat4.title': 'Information · Documents · Legal Basics',
    'home.cat4.item1': 'Contract, rental, shopping dispute basic judgment',
    'home.cat4.item2': 'Common consumer rights channels guidance',
    'home.cat4.item3': 'Chinese/Japanese/English document polishing',
    'home.cat4.item4': 'Policy information search and interpretation (unofficial)',
    'home.cat5.title': 'Remote Services',
    'home.cat5.item1': 'Online video/voice divination',
    'home.cat5.item2': 'Remote language tutoring and homework companion',
    'home.cat5.item3': 'Overseas purchase channel recommendation and comparison',
    'home.cat5.item4': 'Time management and tool usage teaching',
    'home.cat6.title': 'Custom & Special Needs',
    'home.cat6.item1': 'One-day personal assistant (hourly rate)',
    'home.cat6.item2': 'Accompany for errands / data search',
    'home.cat6.item3': 'Small-scale event translation and assistance',
    'home.cat6.item4': 'Other: Explain needs first, then assess feasibility',
  },
  
  'ja': {
    'site.name': '小李万事屋',
    'site.tagline': 'Xiao Li Yorozuya',
    'site.description': '杭州西湖区総合生活サービススタジオ',
    
    'nav.home': 'ホーム',
    'nav.services': 'サービス',
    'nav.about': '私たちについて',
    'nav.faq': '料金とよくある質問',
    'nav.contact': 'お問い合わせ',
    
    'lang.select': '言語',
    'lang.zh-CN': '简体中文',
    'lang.zh-TW': '繁體中文',
    'lang.en': 'English',
    'lang.ja': '日本語',
    
    'common.location': '杭州 · 西湖区 · 三墩鎮 · 雲谷キャンパス',
    'common.operator': 'Wentan Li',
    'common.backToTop': 'トップへ',
    'common.breadcrumb.home': 'ホーム',
    
    'footer.quickLinks': 'クイックリンク',
    'footer.contact': 'お問い合わせ',
    'footer.email': 'メール',
    'footer.wechat': 'WeChat',
    'footer.location': '所在地',
    'footer.notice': 'ご注意',
    'footer.noticeText': '占いや命理に関するサービスは個人的な興味研究の共有であり、将来の結果を保証するものではありません。法律関連の内容は常識的な情報と個人的な意見であり、正式な法的助言や弁護士サービスを構成するものではありません。',
    'footer.copyright': '小李万事屋 Xiao Li Yorozuya. All rights reserved.',
    'footer.subtitle': 'Independent personal studio operated by Wentan Li in Hangzhou, China.',
    'footer.desc': 'Wentan Liが個人運営する総合生活サービススタジオ、杭州市西湖区三墩鎮アリババ雲谷キャンパス1号棟Dエリアに所在。',
    
    'home.hero.kicker': '杭州 · 西湖区 · 三墩鎮 · 雲谷キャンパス',
    'home.hero.title': '占いから自転車修理まで、<br />生活のあらゆること、ここで解決。',
    'home.hero.subtitle.1': '小李万事屋は',
    'home.hero.subtitle.2': 'が個人運営する小規模総合サービススタジオで、周辺の何千人ものお客様の日常の雑事や個性的なニーズを解決してきました。',
    'home.hero.subtitle.3': '以上のサービス、柔軟な料金設定、透明なコミュニケーション。',
    'home.hero.cta.book': 'ご予約 / お問い合わせ',
    'home.hero.cta.services': '全サービスを見る',
    'home.hero.hours.label': '営業時間',
    'home.hero.hours.value': '平日 10:00–20:00（祝日は予約制）',
    'home.hero.address.label': '所在地',
    'home.hero.address.value': '杭州市西湖区三墩鎮、アリババ雲谷キャンパス1号棟Dエリア',
    'home.hero.payment.label': 'お支払い',
    'home.hero.payment.value': 'VISA · PayPal · 銀聯 · WeChat · Alipay',
    'home.hero.subtitle': '小李万事屋は<strong>Wentan Li</strong>が個人運営する小規模総合サービススタジオで、周辺の何千人ものお客様の日常の雑事や個性的なニーズを解決してきました。<strong>180+</strong>以上のサービス、柔軟な料金設定、透明なコミュニケーション。',
    'home.hero.services.title': '人気サービス一覧',
    'home.hero.services.more': '180+以上のサービスを見る',
    'home.hero.note': 'すべてのサービスはWentan Li本人が直接対応または調整し、サービス前の説明、サービス後のフォローアップを行い、中国語、日本語、英語の3ヶ国語でコミュニケーションを提供します。',
    'home.why.title': '小李万事屋を選ぶ理由？',
    'home.why.intro': '伝統的な「イエローページ」でも、単一サービスのみの小さな店でもありません。小李万事屋は雲谷キャンパスでのあなたの個人的な「万能アシスタント」のような存在です。',
    'home.why.feature1.title': '一人運営 · 多重の専門知識',
    'home.why.feature1.text': 'オーナーWentan Liはインターネット業界と海外生活の豊富な経験を持ち、言語教育、異文化コミュニケーション、情報検索に長け、同時に命理文化と茶文化に対する長期的な興味と学習を維持しています。',
    'home.why.feature2.title': '透明な価格 · 見積もり先行',
    'home.why.feature2.text': 'すべてのサービスはコミュニケーション確認後に明確な見積もりを提供します。オンラインで解決できる場合は余分な「お使い料」を請求せず、複雑なニーズも複数の小さなモジュールに分割して段階的に済算できます。',
    'home.why.feature3.title': '多言語コミュニケーション · 国際客向け',
    'home.why.feature3.text': '中国語、日本語（N1）、英語でのコミュニケーションに対応し、雲谷キャンパス内の外国人社員、日系/外資企業の顧客、海外通販ユーザーの様々なニーズに便利です。',
    'home.categories.title': 'サービス分野概要',
    'home.categories.intro': '180+以上の詳細なサービス、大きく以下の主要カテゴリーに分かれます。どのカテゴリーかわからない場合は、気軽に相談メッセージをお送りください。',
    'home.categories.cta1': '詳細サービスリストを見る',
    'home.categories.cta2': 'どれを選ぶか迷ったら？直接お問い合わせ',
    'home.cat1.title': '占い · 命理 · カウンセリング',
    'home.cat1.item1': '運勢占いと方向性のアドバイス',
    'home.cat1.item2': '手相、人相の基礎解説',
    'home.cat1.item3': '人生計画ブレーンストーミング',
    'home.cat1.item4': '不安の傍聴と理性的分析（療法ではありません）',
    'home.cat2.title': '学習 · 言語 · キャリアスキル',
    'home.cat2.item1': '日本語基礎 / JLPT対策 / 発音',
    'home.cat2.item2': '英語会話 / メール添削 / 履歴書指導',
    'home.cat2.item3': '学生の学習計画と方法アドバイス',
    'home.cat2.item4': '職場コミュニケーションとリモート協業',
    'home.cat3.title': '生活 · 修理 · 購入代行&お使い',
    'home.cat3.item1': '自転車の軽修理とメンテナンス',
    'home.cat3.item2': '高山茶の選定と試飲',
    'home.cat3.item3': '日本/海外通販相談と注文代行',
    'home.cat3.item4': '雲谷キャンパス周辺のお使い、荷物受け取り、並び代行',
    'home.cat4.title': '情報 · 文書 · 法律基礎知識',
    'home.cat4.item1': '契約、賃貸、通販トラブルの基礎判断',
    'home.cat4.item2': '一般的な消費者権利チャネルガイダンス',
    'home.cat4.item3': '中国語/日本語/英語文書の添削',
    'home.cat4.item4': '政策情報検索と解釈（非公式）',
    'home.cat5.title': 'リモートサービス',
    'home.cat5.item1': 'オンラインビデオ/音声占い',
    'home.cat5.item2': 'リモート言語指導と宿題付き添い',
    'home.cat5.item3': '海外購入チャネル推薦と価格比較',
    'home.cat5.item4': '時間管理とツール使用教育',
    'home.cat6.title': 'カスタム&特別ニーズ',
    'home.cat6.item1': '一日パーソナルアシスタント（時間制）',
    'home.cat6.item2': '同行お使い / 資料検索',
    'home.cat6.item3': '小規模イベント通訳とサポート',
    'home.cat6.item4': 'その他：まずニーズを説明し、実行可能性を評価',
  }
};

// Language manager
class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.loadLanguage(this.currentLang);
  }
  
  detectLanguage() {
    // Check localStorage first
    const saved = localStorage.getItem('yorozuya-lang');
    if (saved && translations[saved]) {
      return saved;
    }
    
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
      if (browserLang.includes('TW') || browserLang.includes('HK')) {
        return 'zh-TW';
      }
      return 'zh-CN';
    } else if (browserLang.startsWith('ja')) {
      return 'ja';
    } else if (browserLang.startsWith('en')) {
      return 'en';
    }
    
    // Default to Simplified Chinese
    return 'zh-CN';
  }
  
  loadLanguage(lang) {
    if (!translations[lang]) {
      lang = 'zh-CN';
    }
    
    this.currentLang = lang;
    localStorage.setItem('yorozuya-lang', lang);
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    
    // Translate all elements with data-i18n attribute
    this.translatePage();
    
    // Update language selector
    this.updateLanguageSelector();
  }
  
  translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (translation) {
        // Check if element should use innerHTML (for HTML content like <br>)
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation) {
        el.placeholder = translation;
      }
    });
    
    // Update aria-labels
    const ariaLabels = document.querySelectorAll('[data-i18n-aria]');
    ariaLabels.forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const translation = this.t(key);
      if (translation) {
        el.setAttribute('aria-label', translation);
      }
    });
  }
  
  t(key) {
    return translations[this.currentLang]?.[key] || translations['zh-CN']?.[key] || key;
  }
  
  switchLanguage(lang) {
    this.loadLanguage(lang);
  }
  
  updateLanguageSelector() {
    const selector = document.querySelector('.lang-selector');
    if (selector) {
      const buttons = selector.querySelectorAll('[data-lang]');
      buttons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === this.currentLang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }
}

// Initialize when DOM is ready
let i18n;
document.addEventListener('DOMContentLoaded', () => {
  i18n = new I18n();
  
  // Set up language selector event listeners
  const langButtons = document.querySelectorAll('[data-lang]');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      i18n.switchLanguage(lang);
    });
  });
});
