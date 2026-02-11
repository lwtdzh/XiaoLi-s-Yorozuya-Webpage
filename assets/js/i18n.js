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
    'home.why.intro': '既不是传统"黄页中介"，也不是只做单一业务的小店。小李万事屋更像是你在云谷园区里的私人"万能小帮手"。',
    'home.why.feature1.title': '一人掌柜 · 多重专长',
    'home.why.feature1.text': '店主 Wentan Li 拥有长期在互联网行业与海外生活的经验，擅长语言教学、跨文化沟通与信息检索，同时保持对命理文化与茶文化的长期兴趣与学习。',
    'home.why.feature2.title': '价格透明 · 先报价再服务',
    'home.why.feature2.text': '所有服务均在沟通确认后提供明确报价，能线上解决的绝不多收"跑腿费"，复杂需求也可拆分为多个小模块，按阶段结算。',
    'home.why.feature3.title': '多语言沟通 · 面向国际客户',
    'home.why.feature3.text': '支持普通话、日语（N1）与英语沟通，方便云谷园区内外籍员工、日企/外企客户以及海外网购用户的各种需求对接。',
    'home.categories.title': '服务领域概览',
    'home.categories.intro': '超过 180+ 项细分服务，大致可分为以下几大类别。若你暂时不知道该归类到哪里，也可以直接发消息咨询。',
    'home.categories.cta1': '查看详细服务清单',
    'home.categories.cta2': '不确定该选哪项？直接问掌柜',
    'home.cat1.title': '占卜 · 命理 · 心理陪伴',
    'home.cat1.item1': '运势简易占卜与方向建议',
    'home.cat1.item2': '手相、面相基础解读',
    'home.cat1.item3': '人生规划头脑风暴',
    'home.cat1.item4': '焦虑倾诉与理性分析（非心理治疗）',
    'home.cat2.title': '学习 · 语言 · 职场能力',
    'home.cat2.item1': '日语入门 / JLPT 备考 / 口语纠音',
    'home.cat2.item2': '英语口语 / 邮件润色 / 简历指导',
    'home.cat2.item3': '学生学习规划与方法建议',
    'home.cat2.item4': '职场沟通与远程协作建议',
    'home.cat3.title': '生活 · 维修 · 代购跑腿',
    'home.cat3.item1': '自行车小修小补与保养建议',
    'home.cat3.item2': '高山茶选购与品饮建议',
    'home.cat3.item3': '日本 / 海外网站代购咨询与下单代办',
    'home.cat3.item4': '云谷园区周边跑腿、陪签收、代排队',
    'home.cat4.title': '信息 · 文书 · 法律常识',
    'home.cat4.item1': '合同、租房、网购纠纷基础判断',
    'home.cat4.item2': '常见消费维权渠道指引',
    'home.cat4.item3': '中文 / 日文 / 英文简单文书润色',
    'home.cat4.item4': '政策信息检索与解读（非官方）',
    'home.cat5.title': '远程服务',
    'home.cat5.item1': '线上视频/语音占卜',
    'home.cat5.item2': '远程语言辅导与作业伴读',
    'home.cat5.item3': '海外购买渠道推荐与比价',
    'home.cat5.item4': '时间管理与工具使用教学',
    'home.cat6.title': '定制与特殊需求',
    'home.cat6.item1': '一日个人助理（按小时计费）',
    'home.cat6.item2': '陪同办事 / 代查资料',
    'home.cat6.item3': '小规模活动翻译与协助',
    'home.cat6.item4': '其他：可先说明需求，再评估可行性',
    
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

    // Contact page
    'contact.hero.title': '联系小李万事屋',
    'contact.hero.subtitle': '你可以通过下方的表单，或直接添加微信 / 发送邮件与掌柜取得联系。一般会在工作日 24 小时内回复。',
    'contact.hero.breadcrumb': '联系与预约',
    'contact.form.title': '在线预约意向',
    'contact.form.intro': '以下表单不会自动发送到任何后台系统，仅用于帮你梳理思路并进行本地校验。提交后，请将生成的信息通过微信、邮件或其他方式发送给掌柜。',
    'contact.form.name.label': '你的称呼 *',
    'contact.form.name.placeholder': '例：小王 / Haru / Lily',
    'contact.form.time.label': '期望时间',
    'contact.form.time.placeholder': '例：本周三晚 8 点后 / 周末白天',
    'contact.form.contact.label': '联系方式（必填其一） *',
    'contact.form.contact.placeholder': '微信号 / 邮箱 / 手机号（三选一即可）',
    'contact.form.contact.help': '为了方便初次联系，请至少留下一个你常用的联系方式。',
    'contact.form.channel.label': '偏好沟通方式',
    'contact.form.channel.any': '不限，视情况安排',
    'contact.form.channel.wechat': '微信文字 / 语音',
    'contact.form.channel.video': '视频通话（微信 / Zoom / 其他）',
    'contact.form.channel.inperson': '线下面谈（云谷园区）',
    'contact.form.channel.email': '邮件往来为主',
    'contact.form.topic.label': '大致想咨询或预约的内容',
    'contact.form.topic.unsure': '暂不确定 / 需要一起梳理',
    'contact.form.topic.fortune': '运势占卜 / 手相解读',
    'contact.form.topic.language': '日语 / 英语学习与考试',
    'contact.form.topic.study': '学习规划 / 时间管理',
    'contact.form.topic.bike': '自行车维修与骑行相关',
    'contact.form.topic.errand': '跑腿 / 个人助理服务',
    'contact.form.topic.abroad': '海外代购 / 信息检索',
    'contact.form.topic.law': '基础法律常识咨询',
    'contact.form.topic.other': '其他 / 组合需求',
    'contact.form.message.label': '请简单介绍你的情况与需求 *',
    'contact.form.message.placeholder': '可以写下你目前的困惑、想解决的问题、相关背景信息，以及你最在意的一两个点。',
    'contact.form.message.help': '不需要写得很正式，只要让掌柜大致了解你在经历什么、期待得到怎样的帮助就好。',
    'contact.form.extra.label': '可选：预算与其他备注',
    'contact.form.extra.placeholder': '例如：大致预算范围、是否介意线上 / 线下、是否有时间或地点上的限制、是否有隐私顾虑等。',
    'contact.form.submit': '在本地整理信息',
    'contact.form.note': '提交后，系统会在本地校验必填项并清空表单。你可以将刚刚填写的内容复制下来，通过以下任一联系方式发送给小李万事屋。',
    'contact.sidebar.title': '快速联系方式',
    'contact.sidebar.intro': '如果你已经大致想好要咨询什么，可以跳过表单，直接添加微信或发送邮件。',
    'contact.sidebar.wechat.label': '微信',
    'contact.sidebar.wechat.note': '请添加时备注"网站预约"',
    'contact.sidebar.email.label': '邮箱',
    'contact.sidebar.location.label': '所在地',
    'contact.sidebar.hours.label': '营业时间',
    'contact.sidebar.hours.value': '工作日 10:00–20:00',
    'contact.sidebar.hours.note': '（节假日可提前预约）',
    'contact.sidebar.tips.title': '沟通小贴士',
    'contact.sidebar.tips.item1': '初次联系时，简单说明需求类别即可，不必完整描述细节。',
    'contact.sidebar.tips.item2': '价格会在需求明确后告知，复杂项目可拆分阶段报价。',
    'contact.sidebar.tips.item3': '如果不确定服务范围，可以先问"这个你能做吗？"',
    'contact.sidebar.direct.title': '直接联系方式',
    'contact.sidebar.direct.intro': '如需快速沟通，推荐通过微信或邮件联系。由于本站为静态展示站点，暂不提供在线聊天功能。',
    'contact.sidebar.hours.title': '营业时间与回复节奏',
    'contact.sidebar.hours.weekday.label': '工作日',
    'contact.sidebar.hours.weekday.value': '10:00 - 20:00（其余时间视情况回复）',
    'contact.sidebar.hours.weekend.label': '周末',
    'contact.sidebar.hours.weekend.value': '以预约为主，如有空档会安排补课与跑腿',
    'contact.sidebar.hours.reply.label': '回复',
    'contact.sidebar.hours.reply.value': '一般在 24 小时内回复，如遇特殊情况会提前说明',
    'contact.sidebar.visit.title': '到店与线上说明',
    'contact.sidebar.visit.p1': '若你在云谷园区或附近工作/生活，可在预约时注明"希望线下面谈"，掌柜会结合当天情况安排合适的见面地点与时间。',
    'contact.sidebar.visit.p2': '对于大多数咨询、占卜与语言课程，线上体验与线下差异不大，且时间安排更灵活；涉及维修与跑腿的项目，则以线下为主。',

    // Services page
    'services.hero.title': '服务项目总览',
    'services.hero.subtitle': '这里列出的是常见且相对"标准化"的服务内容，实际可提供的细分服务超过 180 项。若未在列表中找到，请直接联系掌柜沟通。',
    'services.hero.breadcrumb': '服务项目',
    'services.divination.title': '占卜 · 命理相关',
    'services.divination.intro': '以轻量、尊重与理性为前提的占卜服务，更偏向于"帮你看清当下"，而不是简单给出"好/不好"的结论。',
    'services.next.title': '下一步怎么做？',
    'services.next.cta': '前往联系页面',

    // About page
    'about.hero.title': '关于小李万事屋',
    'about.hero.breadcrumb': '关于我们',
    
    // FAQ page  
    'faq.hero.title': '价格与常见问题',
    'faq.hero.breadcrumb': '价格与常见问题',
    
     // 404 page
    '404.title': '页面未找到',
    '404.subtitle': '抱歉，你访问的页面不存在或已被移动。',
    '404.home': '返回首页',
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
      
    'home.location.title': '位置與到達方式',
    'home.location.intro': '小李萬事屋位於 <strong>杭州市西湖區三墩鎮，阿里巴巴雲谷園區一號樓 D 區</strong>。面向園區與周邊居民，主要採取預約制服務。',
    'home.location.way1.label': '園區內',
    'home.location.way1.value': '可步行或騎行前往 D 區指定會面點',
    'home.location.way2.label': '地鐵&公交',
    'home.location.way2.value': '可導航至"阿里巴巴雲谷園區"，再根據掌櫃指引步行前往',
    'home.location.way3.label': '線上服務',
    'home.location.way3.value': '支持微信、釘釘、飛書、Zoom 等視頻/語音方式',
    'home.payment.title': '支付方式與開票',
    'home.payment.intro': '為方便不同背景與地區的客戶，小李萬事屋支持多種支付方式與貨幣。',
    'home.payment.method1.label': '線下',
    'home.payment.method1.value': '現金（人民幣）、支付寶、微信支付',
    'home.payment.method2.label': '線上國際',
    'home.payment.method2.value': 'VISA / MasterCard 信用卡、PayPal',
    'home.payment.method3.label': '國內銀行卡',
    'home.payment.method3.value': '銀聯卡轉賬、雲閃付',
    'home.payment.invoice.label': '發票',
    'home.payment.invoice.value': '根據具體項目可提供相應收款憑證或簡易收據',
    'home.testimonials.title': '來自真實客戶的反饋',
    'home.testimonials.subtitle': '為保護隱私，以下評價均已做匿名與部分信息處理，僅保留核心內容與大致背景。',
    'home.testimonials.item1.text': '"本來只是想找人看看運勢，結果聊著聊著變成了職場梳理，很多糾結的點理順之後，反而不那麼在意\'好運不好運\'這件事了。"',
    'home.testimonials.item1.author': '— H 女士 · 互聯網運營',
    'home.testimonials.item2.text': '"日語課不是那種死板的語法填鴨，更像是圍繞著\'我真的想說的內容\'一點點搭積木，線上上課也能很有參與感。"',
    'home.testimonials.item2.author': '— Z 同學 · JLPT 備考',
    'home.testimonials.item3.text': '"幫我遠程看了幾款日本茶具和茶葉，給了非常實用的購買建議，還順帶普及了沖泡方式，避免了不少踩坑。"',
    'home.testimonials.item3.author': '— L 先生 · 茶愛好者',
    'home.cta.title': '有事，發個消息就好。',
    'home.cta.subtitle': '無論是需要一個安靜的傾聽者、一位懂你的語言老師，還是一個肯替你跑腿、幫你查資料的人——小李萬事屋都樂意先聽你講。',
    'home.cta.button': '添加聯繫方式 · 發起預約',
    'home.cta.note': '通常在工作日 24 小時內回復。',

    // Contact page
    'contact.hero.title': '聯繫小李萬事屋',
    'contact.hero.subtitle': '你可以通過下方的表單，或直接添加微信 / 發送郵件與掌櫃取得聯繫。一般會在工作日 24 小時內回復。',
    'contact.hero.breadcrumb': '聯繫與預約',
    'contact.form.title': '線上預約意向',
    'contact.form.intro': '以下表單不會自動發送到任何後台系統，僅用於幫你梳理思路並進行本地校驗。提交後，請將生成的信息通過微信、郵件或其他方式發送給掌櫃。',
    'contact.form.name.label': '你的稱呼 *',
    'contact.form.name.placeholder': '例：小王 / Haru / Lily',
    'contact.form.time.label': '期望時間',
    'contact.form.time.placeholder': '例：本週三晚 8 點後 / 週末白天',
    'contact.form.contact.label': '聯繫方式（必填其一） *',
    'contact.form.contact.placeholder': '微信號 / 郵箱 / 手機號（三選一即可）',
    'contact.form.contact.help': '為了方便初次聯繫，請至少留下一個你常用的聯繫方式。',
    'contact.form.channel.label': '偏好溝通方式',
    'contact.form.channel.any': '不限，視情況安排',
    'contact.form.channel.wechat': '微信文字 / 語音',
    'contact.form.channel.video': '視頻通話（微信 / Zoom / 其他）',
    'contact.form.channel.inperson': '線下面談（雲谷園區）',
    'contact.form.channel.email': '郵件往來為主',
    'contact.form.topic.label': '大致想諮詢或預約的內容',
    'contact.form.topic.unsure': '暫不確定 / 需要一起梳理',
    'contact.form.topic.fortune': '運勢占卜 / 手相解讀',
    'contact.form.topic.language': '日語 / 英語學習與考試',
    'contact.form.topic.study': '學習規劃 / 時間管理',
    'contact.form.topic.bike': '自行車維修與騎行相關',
    'contact.form.topic.errand': '跑腿 / 個人助理服務',
    'contact.form.topic.abroad': '海外代購 / 信息檢索',
    'contact.form.topic.law': '基礎法律常識諮詢',
    'contact.form.topic.other': '其他 / 組合需求',
    'contact.form.message.label': '請簡單介紹你的情況與需求 *',
    'contact.form.message.placeholder': '可以寫下你目前的困惑、想解決的問題、相關背景信息，以及你最在意的一兩個點。',
    'contact.form.message.help': '不需要寫得很正式，只要讓掌櫃大致了解你在經歷什麼、期待得到怎樣的幫助就好。',
    'contact.form.extra.label': '可選：預算與其他備註',
    'contact.form.extra.placeholder': '例如：大致預算範圍、是否介意線上 / 線下、是否有時間或地點上的限制、是否有隱私顧慮等。',
    'contact.form.submit': '在本地整理信息',
    'contact.form.note': '提交後，系統會在本地校驗必填項並清空表單。你可以將剛剛填寫的內容複製下來，通過以下任一聯繫方式發送給小李萬事屋。',
    'contact.sidebar.title': '快速聯繫方式',
    'contact.sidebar.intro': '如果你已經大致想好要諮詢什麼，可以跳過表單，直接添加微信或發送郵件。',
    'contact.sidebar.wechat.label': '微信',
    'contact.sidebar.wechat.note': '請添加時備註"網站預約"',
    'contact.sidebar.email.label': '郵箱',
    'contact.sidebar.location.label': '所在地',
    'contact.sidebar.hours.label': '營業時間',
    'contact.sidebar.hours.value': '工作日 10:00–20:00',
    'contact.sidebar.hours.note': '（節假日可提前預約）',
    'contact.sidebar.tips.title': '溝通小貼士',
    'contact.sidebar.tips.item1': '初次聯繫時，簡單說明需求類別即可，不必完整描述細節。',
    'contact.sidebar.tips.item2': '價格會在需求明確後告知，複雜項目可拆分階段報價。',
    'contact.sidebar.tips.item3': '如果不確定服務範圍，可以先問"這個你能做嗎？"',
    'contact.sidebar.direct.title': '直接聯繫方式',
    'contact.sidebar.direct.intro': '如需快速溝通，推薦通過微信或郵件聯繫。由於本站為靜態展示站點，暫不提供在線聊天功能。',
    'contact.sidebar.hours.title': '營業時間與回復節奏',
    'contact.sidebar.hours.weekday.label': '工作日',
    'contact.sidebar.hours.weekday.value': '10:00 - 20:00（其餘時間視情況回復）',
    'contact.sidebar.hours.weekend.label': '週末',
    'contact.sidebar.hours.weekend.value': '以預約為主，如有空檔會安排補課與跑腿',
    'contact.sidebar.hours.reply.label': '回復',
    'contact.sidebar.hours.reply.value': '一般在 24 小時內回復，如遇特殊情況會提前說明',
    'contact.sidebar.visit.title': '到店與線上說明',
    'contact.sidebar.visit.p1': '若你在雲谷園區或附近工作/生活，可在預約時註明“希望線下面談”，掌櫃會結合當天情況安排合適的見面地點與時間。',
    'contact.sidebar.visit.p2': '對於大多數諮詢、占卜與語言課程，線上體驗與線下差異不大，且時間安排更靈活；涉及維修與跑腿的項目，則以線下為主。',

    // Services page
    'services.hero.title': '服務項目總覽',
    'services.hero.subtitle': '這裡列出的是常見且相對「標準化」的服務內容，實際可提供的細分服務超過 180 項。若未在列表中找到，請直接聯絡掌櫃溝通。',
    'services.hero.breadcrumb': '服務項目',

    // About page
    'about.hero.title': '關於小李萬事屋',
    'about.hero.subtitle': '一個由個人發起的小型綜合服務工作室，從雲谷園區的一角出發，慢慢延伸到更多人的日常生活之中。',
    'about.hero.breadcrumb': '關於我們',

    // FAQ page
    'faq.hero.title': '價格與常見問題',
    'faq.hero.subtitle': '這裡列出的是部分服務的參考價格與常見問答。具體費用會根據你的實際情況與服務組合給出明確報價。',
    'faq.hero.breadcrumb': '價格與常見問題',

    // 404 page
    '404.title': '頁面未找到',
    '404.subtitle': '抱歉，你訪問的頁面不存在或已被移動。',
    '404.home': '返回首頁',
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


    // Contact page
    '404.subtitle': 'Sorry, the page you are looking for does not exist or has been moved.',
    '404.title': 'Page Not Found',
    'about.hero.subtitle': 'A small comprehensive services studio initiated by an individual, starting from a corner of Yungu Campus and gradually extending into more people\'s daily lives.',
    'contact.form.channel.any': 'No preference, arrange as suitable',
    'contact.form.channel.email': 'Primarily via email',
    'contact.form.channel.inperson': 'In-person meeting (Yungu Campus)',
    'contact.form.channel.label': 'Preferred Communication Method',
    'contact.form.channel.video': 'Video call (WeChat / Zoom / other)',
    'contact.form.channel.wechat': 'WeChat text / voice',
    'contact.form.contact.help': 'For initial contact convenience, please leave at least one contact method you use regularly.',
    'contact.form.contact.label': 'Contact Info (at least one) *',
    'contact.form.contact.placeholder': 'WeChat ID / Email / Phone (any one is fine)',
    'contact.form.extra.label': 'Optional: Budget and other notes',
    'contact.form.extra.placeholder': 'e.g.: Rough budget range, preference for online/offline, any time or location constraints, any privacy concerns, etc.',
    'contact.form.intro': 'This form does not automatically send to any backend system. It only helps you organize your thoughts and validate locally. After submission, please send the generated information to the owner via WeChat, email, or other methods.',
    'contact.form.message.help': 'No need to be formal, just let the owner roughly understand what you\'re experiencing and what kind of help you expect.',
    'contact.form.message.label': 'Please briefly describe your situation and needs *',
    'contact.form.message.placeholder': 'Feel free to write about your current confusion, problems you want to solve, relevant background, and the one or two points you care about most.',
    'contact.form.name.label': 'Your Name *',
    'contact.form.name.placeholder': 'e.g.: Wang / Haru / Lily',
    'contact.form.note': 'After submission, the system will validate required fields locally and clear the form. You can copy what you just filled in and send it to Xiao Li Yorozuya via any of the following contact methods.',
    'contact.form.submit': 'Organize Information Locally',
    'contact.form.time.label': 'Preferred Time',
    'contact.form.time.placeholder': 'e.g.: This Wednesday after 8 PM / Weekend daytime',
    'contact.form.title': 'Online Booking Intent',
    'contact.form.topic.abroad': 'Overseas shopping / Information retrieval',
    'contact.form.topic.bike': 'Bicycle repair and cycling related',
    'contact.form.topic.errand': 'Errands / Personal assistant services',
    'contact.form.topic.fortune': 'Fortune divination / Palm reading',
    'contact.form.topic.label': 'General Topic of Inquiry or Booking',
    'contact.form.topic.language': 'Japanese / English learning and exams',
    'contact.form.topic.law': 'Basic legal knowledge consultation',
    'contact.form.topic.other': 'Other / Combined needs',
    'contact.form.topic.study': 'Study planning / Time management',
    'contact.form.topic.unsure': 'Not sure yet / Need to discuss together',
    'contact.hero.breadcrumb': 'Contact & Booking',
    'contact.hero.subtitle': 'You can reach the owner via the form below, or directly via WeChat / email. Generally responds within 24 hours on weekdays.',
    'contact.hero.title': 'Contact Xiao Li Yorozuya',
    'contact.sidebar.direct.intro': 'For quick communication, WeChat or email is recommended. As this is a static website, online chat is not currently available.',
    'contact.sidebar.direct.title': 'Direct Contact',
    'contact.sidebar.email.label': 'Email',
    'contact.sidebar.hours.reply.label': 'Reply',
    'contact.sidebar.hours.reply.value': 'Usually within 24 hours, special circumstances will be communicated in advance',
    'contact.sidebar.hours.title': 'Business Hours & Response Time',
    'contact.sidebar.hours.weekday.label': 'Weekdays',
    'contact.sidebar.hours.weekday.value': '10:00 - 20:00 (other times as available)',
    'contact.sidebar.hours.weekend.label': 'Weekends',
    'contact.sidebar.hours.weekend.value': 'Primarily by appointment, catch-up lessons and errands arranged when available',
    'contact.sidebar.location.label': 'Location',
    'contact.sidebar.visit.p1': 'If you work/live in or near Yungu Campus, note "prefer in-person meeting" when booking, and the owner will arrange a suitable meeting location and time based on the day\'s schedule.',
    'contact.sidebar.visit.p2': 'For most consultations, divination, and language courses, online experience is comparable to in-person with more flexible scheduling; repair and errand services are mainly offline.',

    // Services, About, FAQ page hero keys
    'services.hero.title': 'Services Overview',
    'services.hero.breadcrumb': 'Services',
    'about.hero.title': 'About Xiao Li Yorozuya',
    'about.hero.breadcrumb': 'About Us',
    'faq.hero.title': 'FAQ & Pricing',
    'faq.hero.breadcrumb': 'FAQ & Pricing',
    'contact.sidebar.visit.title': 'In-Person & Online Info',
    'contact.sidebar.wechat.label': 'WeChat',
    'faq.hero.subtitle': 'This lists reference prices for some services and common questions. Specific fees will be quoted clearly based on your actual situation and service combination.',
    'services.hero.subtitle': 'This lists common and relatively "standardized" service content. The actual detailed services exceed 180 items. If not found in the list, please contact the owner directly.',

    // Additional missing home page keys
    '404.home': 'Return to Home',
    'home.cta.button': 'Add Contact · Book Now',
    'home.cta.note': 'Usually replies within 24 hours on weekdays.',
    'home.cta.subtitle': 'Whether you need a quiet listener, a language teacher who understands you, or someone willing to run errands and help with research—Xiao Li Yorozuya is happy to listen first.',
    'home.cta.title': 'Have something? Just send a message.',
    'home.location.intro': 'Xiao Li Yorozuya is located at <strong>Alibaba Yungu Campus Building 1, Area D, Sandun Town, Xihu District, Hangzhou</strong>. Serving campus and surrounding residents, primarily by appointment.',
    'home.location.title': 'Location & How to Get Here',
    'home.location.way1.label': 'Within Campus',
    'home.location.way1.value': 'Walk or cycle to the designated meeting point in Area D',
    'home.location.way2.label': 'Metro & Bus',
    'home.location.way2.value': 'Navigate to "Alibaba Yungu Campus", then follow owner\'s directions',
    'home.location.way3.label': 'Online Service',
    'home.location.way3.value': 'Supports WeChat, DingTalk, Feishu, Zoom and other video/audio methods',
    'home.payment.intro': 'To accommodate customers from different backgrounds and regions, Xiao Li Yorozuya supports multiple payment methods and currencies.',
    'home.payment.invoice.label': 'Invoicing',
    'home.payment.invoice.value': 'Appropriate payment receipts or simple invoices can be provided based on specific projects',
    'home.payment.method1.label': 'Offline',
    'home.payment.method1.value': 'Cash (RMB), Alipay, WeChat Pay',
    'home.payment.method2.label': 'Online International',
    'home.payment.method2.value': 'VISA / MasterCard credit cards, PayPal',
    'home.payment.method3.label': 'Domestic Bank Cards',
    'home.payment.method3.value': 'UnionPay card transfer, Quick Pass',
    'home.payment.title': 'Payment Methods & Invoicing',
    'home.testimonials.item1.author': '— Ms. H · Internet Operations',
    'home.testimonials.item1.text': '"I originally just wanted someone to read my fortune, but as we chatted it turned into a career sorting session. After clarifying many tangled points, I stopped caring so much about \'good or bad luck\'."',
    'home.testimonials.item2.author': '— Student Z · JLPT Prep',
    'home.testimonials.item2.text': '"The Japanese class isn\'t the rigid grammar cramming type, but more like building blocks around \'what I really want to say\'. Online classes can still be very engaging."',
    'home.testimonials.item3.author': '— Mr. L · Tea Enthusiast',
    'home.testimonials.item3.text': '"Helped me remotely review several Japanese tea sets and teas, gave very practical purchasing advice, and also explained brewing methods, avoiding many pitfalls."',
    'home.testimonials.subtitle': 'To protect privacy, the following reviews have been anonymized with partial information processing, retaining only core content and general background.',
    'home.testimonials.title': 'Feedback from Real Customers'
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


    // Contact page
    '404.subtitle': '申し訳ございません、お探しのページは存在しないか、移動されました。',

    // Additional home page keys
    'home.cta.button': '連絡先を追加 · 今すぐ予約',
    'home.cta.note': '通常、平日24時間以内に返信します。',
    'home.cta.subtitle': '静かな聞き手、あなたを理解する言語教師、またはお使いや調査を手伝ってくれる人が必要な場合でも、小李万事屋はまず聞くことを喜んでいます。',
    'home.cta.title': '何かあれば、メッセージを送るだけです。',
    'home.location.intro': '小李万事屋は<strong>杭州市西湖区三墩鎮、アリババ雲谷キャンパス1号棟Dエリア</strong>に位置しています。キャンパスと周辺住民にサービスを提供し、主に予約制です。',
    'home.location.title': '場所とアクセス方法',
    'home.location.way1.label': 'キャンパス内',
    'home.location.way1.value': 'Dエリアの指定会議場所まで徒歩または自転車',
    'home.location.way2.label': '地下鉄＆バス',
    'home.location.way2.value': '「アリババ雲谷キャンパス」にナビゲートし、オーナーの指示に従って歩く',
    'home.location.way3.label': 'オンラインサービス',
    'home.location.way3.value': 'WeChat、DingTalk、Feishu、Zoomなどのビデオ/音声方法をサポート',
    'home.payment.intro': '異なる背景や地域の顧客に対応するため、小李万事屋は複数の支払い方法と通貨をサポートしています。',
    'home.payment.invoice.label': '請求',
    'home.payment.invoice.value': '特定のプロジェクトに基づいて適切な支払い領収書または簡易請求書を提供できます',
    'home.payment.method1.label': 'オフライン',
    'home.payment.method1.value': '現金（人民元）、Alipay、WeChat Pay',
    'home.payment.method2.label': 'オンライン国際',
    'home.payment.method2.value': 'VISA / MasterCardクレジットカード、PayPal',
    'home.payment.method3.label': '国内銀行カード',
    'home.payment.method3.value': '銀聯カード送金、クイックパス',
    'home.payment.title': '支払い方法と請求',
    'home.testimonials.item1.author': '— H女史 · インターネット運営',
    'home.testimonials.item1.text': '「最初は運勢を見てもらいたかっただけなのに、話しているうちにキャリア整理セッションになり、多くの悩みのポイントが整理された後、\'運の良し悪し\'をそれほど気にしなくなりました。」',
    'home.testimonials.item2.author': '— Z学生 · JLPT対策',
    'home.testimonials.item2.text': '「日本語のクラスは硬直した文法詰め込み型ではなく、\'本当に言いたいこと\'を中心に少しずつ積み上げていく感じで、オンラインクラスでもとても参加しやすいです。」',
    'home.testimonials.item3.author': '— L氏 · 茶愛好家',
    'home.testimonials.item3.text': '「日本の茶器とお茶をいくつか遠隔でレビューしてもらい、非常に実用的な購入アドバイスをいただき、さらに淹れ方も教えてもらい、多くの落とし穴を避けることができました。」',
    'home.testimonials.subtitle': 'プライバシー保護のため、以下のレビューは匿名化され、部分的な情報処理が行われ、核となる内容と大まかな背景のみが保持されています。',
    'home.testimonials.title': '実際のお客様からのフィードバック',
    '404.title': 'ページが見つかりません',
    'about.hero.breadcrumb': '私たちについて',
    'about.hero.subtitle': '個人が始めた小規模な総合サービススタジオ、雲谷キャンパスの一角から始まり、徐々により多くの人々の日常生活に拡大しています。',
    'about.hero.title': '小李万事屋について',
    'contact.form.channel.any': '指定なし、状況に応じて調整',
    'contact.form.channel.email': '主にメールで',
    'contact.form.channel.inperson': '対面（雲谷キャンパス）',
    'contact.form.channel.label': '希望コミュニケーション方法',
    'contact.form.channel.video': 'ビデオ通話（WeChat / Zoom / その他）',
    'contact.form.channel.wechat': 'WeChatテキスト / 音声',
    'contact.form.contact.help': '初回連絡の便宜のため、定期的に使用している連絡方法を少なくとも1つ残してください。',
    'contact.form.contact.label': '連絡先（少なくとも1つ）*',
    'contact.form.contact.placeholder': 'WeChat ID / メール / 電話（いずれか1つで可）',
    'contact.form.extra.label': 'オプション：予算とその他の備考',
    'contact.form.extra.placeholder': '例：大まかな予算範囲、オンライン/オフラインの希望、時間や場所の制約、プライバシーの懸念など。',
    'contact.form.intro': 'このフォームは自動的にバックエンドシステムに送信されません。思考を整理しローカルで検証するためのものです。送信後、生成された情報をWeChat、メール、その他の方法でオーナーに送信してください。',
    'contact.form.message.help': '形式的である必要はありません。オーナーがあなたが何を経験しているか、どのような助けを期待しているかを大まかに理解できれば十分です。',
    'contact.form.message.label': '状況とニーズを簡単に説明してください *',
    'contact.form.message.placeholder': '現在の悩み、解決したい問題、関連する背景情報、最も気にしている1つか2つのポイントを自由に書いてください。',
    'contact.form.name.label': 'お名前 *',
    'contact.form.name.placeholder': '例：ワン / ハル / リリー',
    'contact.form.note': '送信後、システムはローカルで必須項目を検証しフォームをクリアします。記入した内容をコピーして、以下のいずれかの連絡方法で小李万事屋に送信できます。',
    'contact.form.submit': 'ローカルで情報を整理',
    'contact.form.time.label': '希望時間',
    'contact.form.time.placeholder': '例：今週水曜日の午後8時以降 / 週末の日中',
    'contact.form.title': 'オンライン予約意向',
    'contact.form.topic.abroad': '海外通販 / 情報検索',
    'contact.form.topic.bike': '自転車修理とサイクリング関連',
    'contact.form.topic.errand': 'お使い / パーソナルアシスタントサービス',
    'contact.form.topic.fortune': '運勢占い / 手相解読',
    'contact.form.topic.label': '相談または予約の大まかな内容',
    'contact.form.topic.language': '日本語 / 英語学習と試験',
    'contact.form.topic.law': '基礎的な法律知識相談',
    'contact.form.topic.other': 'その他 / 複合ニーズ',
    'contact.form.topic.study': '学習計画 / 時間管理',
    'contact.form.topic.unsure': 'まだ不明 / 一緒に整理が必要',
    'contact.hero.breadcrumb': 'お問い合わせ・予約',
    'contact.hero.subtitle': '下記のフォーム、またはWeChatまたはメールで直接オーナーに連絡できます。通常、平日24時間以内に返信します。',
    'contact.hero.title': '小李万事屋へのお問い合わせ',
    'contact.sidebar.direct.intro': '迅速なコミュニケーションには、WeChatまたはメールをお勧めします。これは静的ウェブサイトのため、オンラインチャットは現在利用できません。',
    'contact.sidebar.direct.title': '直接連絡',
    'contact.sidebar.email.label': 'メール',
    'contact.sidebar.hours.reply.label': '返信',
    'contact.sidebar.hours.reply.value': '通常24時間以内、特別な状況は事前に連絡',
    'contact.sidebar.hours.title': '営業時間と返信時間',
    'contact.sidebar.hours.weekday.label': '平日',
    'contact.sidebar.hours.weekday.value': '10:00 - 20:00（その他の時間は状況に応じて）',
    'contact.sidebar.hours.weekend.label': '週末',
    'contact.sidebar.hours.weekend.value': '主に予約制、空き時間がある場合は補講やお使いを手配',
    'contact.sidebar.location.label': '所在地',
    'contact.sidebar.visit.p1': '雲谷キャンパスまたは近隣で働いている/住んでいる場合は、予約時に「対面希望」と記載してください。オーナーがその日のスケジュルに基づいて適切な会議場所と時間を調整します。',
    'contact.sidebar.visit.p2': 'ほとんどの相談、占い、言語コースについては、オンライン体験は対面と同等で、スケジュールがより柔軟です。修理やお使いのサービスは主にオフラインです。',
    'contact.sidebar.visit.title': '対面とオンラインの説明',
    'contact.sidebar.wechat.label': 'WeChat',
    'faq.hero.breadcrumb': 'よくある質問と料金',
    'faq.hero.subtitle': 'これは一部のサービスの参考価格とよくある質問をリストしています。具体的な料金は、実際の状況とサービスの組み合わせに基づいて明確に見積もられます。',
    'faq.hero.title': 'よくある質問と料金',
    'services.hero.breadcrumb': 'サービス',
    'services.hero.subtitle': 'これは一般的で比較的「標準化された」サービス内容をリストしています。実際の詳細なサービスは180項目を超えます。リストに見つからない場合は、オーナーに直接お問い合わせください。',
    'services.hero.title': 'サービス概要',

    // Missing 404 key
    '404.home': 'ホームに戻る',
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
