/* 選機顧問 — 機型資料（五品牌）
   價格來源：appLE 香港／美國官網 2026 年 11 月，與 apple-lineup 四地區頁面一致。
   匯率：1 HKD ≈ 1.03 MOP ≈ 4.05 TWD ≈ 0.128 USD（與 finance-calc 同基準）。
   規格僅列有依據者，未取得官方數值者填 null，介面顯示「依官網」。 */

window.ADVISOR = {
  updated: '2026-11',
  rate: { MOP: 1.03, TWD: 4.05, USD: 0.128 },

  categories: [
    { id: 'phone',   name: '手機',    sub: 'Apple・三星・小米・Google・OnePlus', icon: 'phone'  },
    { id: 'tablet',  name: '平板',    sub: 'Apple・三星・小米・OnePlus',        icon: 'tablet' },
    { id: 'watch',   name: '手錶',    sub: 'Apple・三星・小米・Google・OnePlus', icon: 'watch'  },
    { id: 'earbuds', name: '耳機',    sub: 'Apple・三星・小米・Google・OnePlus', icon: 'buds'   },
    { id: 'mac',     name: '筆電',    sub: 'Mac（Apple 專區）',                 icon: 'laptop' },
    { id: 'vision',  name: '空間運算', sub: 'Vision Pro（Apple 專區）',          icon: 'vision' },
    { id: 'home',    name: '電視盒',   sub: 'Apple TV 與 HomePod',              icon: 'tv'     }
  ],

  /* ── 問題：每個品類一組，用 tags 打分 ── */
  questions: {
    mac: [
      { id: 'use', text: '主要用途？', multi: false, opts: [
        { label: '上網、文書、上課', tags: ['office', 'student'] },
        { label: '寫程式、跑多個容器', tags: ['dev'] },
        { label: '修圖、剪片、設計', tags: ['creative'] },
        { label: '3D、影片輸出、本地 AI 模型', tags: ['pro', 'ml'] }
      ]},
      { id: 'budget', text: '預算大約？', multi: false, opts: [
        { label: 'HK$6,000 以內', max: 6000 },
        { label: 'HK$6,000–12,000', max: 12000 },
        { label: 'HK$12,000–20,000', max: 20000 },
        { label: 'HK$20,000 以上', max: 99999 }
      ]},
      { id: 'move', text: '需要常帶出門嗎？', multi: false, opts: [
        { label: '每天背著走，越輕越好', tags: ['portable'] },
        { label: '偶爾帶，重量無所謂', tags: [] },
        { label: '固定放桌上，不用帶', tags: ['desktop'] }
      ]}
    ],
    phone: [
      { id: 'care', text: '最在意？', multi: false, opts: [
        { label: '拍照與錄影', tags: ['camera'] },
        { label: '螢幕大、看片爽', tags: ['bigscreen'] },
        { label: '一手好握、口袋放得下', tags: ['compact'] },
        { label: '預算優先', tags: ['budget'] }
      ]},
      { id: 'budget', text: '預算大約？', multi: false, opts: [
        { label: 'HK$6,000 以內', max: 6000 },
        { label: 'HK$6,000–11,000', max: 11000 },
        { label: 'HK$11,000–18,000', max: 18000 },
        { label: 'HK$18,000 以上', max: 99999 }
      ]}
    ],
    tablet: [
      { id: 'use', text: '買來做什麼？', multi: false, opts: [
        { label: '追劇、上網、家人共用', tags: ['media', 'budget'] },
        { label: '做筆記、上課、看 PDF', tags: ['study', 'portable'] },
        { label: '畫畫、修圖、剪片', tags: ['creative'] },
        { label: '當筆電用、外接鍵盤', tags: ['work'] }
      ]},
      { id: 'budget', text: '預算大約？', multi: false, opts: [
        { label: 'HK$4,000 以內', max: 4000 },
        { label: 'HK$4,000–8,000', max: 8000 },
        { label: 'HK$8,000–12,000', max: 12000 },
        { label: 'HK$12,000 以上', max: 99999 }
      ]}
    ],
    watch: [
      { id: 'use', text: '主要用途？', multi: false, opts: [
        { label: '看通知、記運動、健康', tags: ['daily'] },
        { label: '跑步、游泳、行山等訓練', tags: ['sport'] },
        { label: '要戴去正式場合、在意材質', tags: ['premium'] },
        { label: '長輩用、只要基本功能', tags: ['simple', 'budget'] }
      ]},
      { id: 'budget', text: '預算大約？', multi: false, opts: [
        { label: 'HK$2,500 以內', max: 2500 },
        { label: 'HK$2,500–4,500', max: 4500 },
        { label: 'HK$4,500 以上', max: 99999 }
      ]}
    ],
    earbuds: [
      { id: 'use', text: '在哪聽？', multi: false, opts: [
        { label: '通勤、想要通透清楚', tags: ['light'] },
        { label: '健身、要防水牢固', tags: ['sport'] },
        { label: '办公室、要最強降噪', tags: ['anc'] },
        { label: '長時間戴、要最舒服', tags: ['comfort', 'premium'] }
      ]},
      { id: 'budget', text: '預算大約？', multi: false, opts: [
        { label: 'HK$1,300 以內', max: 1300 },
        { label: 'HK$1,300–2,000', max: 2000 },
        { label: 'HK$2,000 以上', max: 99999 }
      ]}
    ],
    vision: [
      { id: 'use', text: '你想用它做什麼？', multi: false, opts: [
        { label: '看電影、沉浸式娛樂', tags: ['media'] },
        { label: '當超大工作螢幕', tags: ['work'] },
        { label: '想先體驗空間運算', tags: ['explore'] }
      ]}
    ],
    home: [
      { id: 'use', text: '客廳缺什麼？', multi: false, opts: [
        { label: '電視盒，看串流', tags: ['tv'] },
        { label: '智慧音箱、聽音樂', tags: ['audio'] },
        { label: '兩者都要，做成劇院', tags: ['theater'] }
      ]}
    ]
  },

  /* ── 機型 ──
     priceHK / priceUS 為官方價格，null 表示尚未公布（介面顯示依官網）
     est 為排序用的港幣估算（null 時以 US 換算） */
  models: [
    /* ===== Mac ===== */
    { id:'mac-neo', cat:'mac', name:'MacBook Neo', sub:'13 吋 · 無風扇',
      chip:'A18 Pro', cpu:'6 核 CPU', gpu:null, ram:'8GB（不可升級）', storage:'256GB（512GB 版本才有 Touch ID）',
      screen:'13 吋 IPS', battery:'影片播放最長 16 小時', weight:'1.23 kg',
      priceHK:5499, priceUS:699, tags:['budget','student','office','portable'],
      best:'學生、輕度文書、第二台電腦',
      why:'手機級 A18 Pro 放進筆電，13 吋只 1.23kg，無風扇全靜音——預算有限又只要上網打報告，這台每塊錢買到的體驗最高。',
      caveat:'8GB 記憶體焊死不可升級，256GB 儲存、兩個 USB-C 其中一個只有 USB 2 速度。' },

    { id:'mba13', cat:'mac', name:'MacBook Air 13″', sub:'M5 · 無風扇',
      chip:'M5', cpu:'8 核 CPU', gpu:'10 核 GPU', ram:'16GB 起（可選 24GB）', storage:'512GB 起',
      screen:'13.6 吋 Liquid Retina', battery:'最長 18 小時', weight:'1.24 kg',
      priceHK:10499, priceUS:1349, tags:['office','student','portable','value','creative-light'],
      best:'幾乎所有人——沒有特殊需求就從這裡開始',
      why:'安靜、輕、續航 18 小時，16GB／512GB 起。沒有特殊需求就從這裡開始，把預算留給記憶體而不是晶片型號。',
      caveat:'記憶體上限 32GB；要更大記憶體就得往上走 M5 Pro／Max。' },

    { id:'mba15', cat:'mac', name:'MacBook Air 15″', sub:'M5 · 無風扇',
      chip:'M5', cpu:'8 核 CPU', gpu:'10 核 GPU', ram:'16GB 起', storage:'512GB 起',
      screen:'15.3 吋 Liquid Retina', battery:'最長 18 小時', weight:'1.51 kg',
      priceHK:11999, priceUS:1549, tags:['office','student','bigscreen','value'],
      best:'要大螢幕的輕使用者',
      why:'跟 13 吋同晶片、同續航，只多 1,500 元就換到 15.3 吋——常看表格、寫稿、剪短片的，大螢幕比多兩核有用。',
      caveat:'1.51kg，每天背著走會比 13 吋有感覺。' },

    { id:'mbp14-m6', cat:'mac', name:'14″ MacBook Pro（M6）', sub:'2026 年 10 月新機',
      chip:'M6', cpu:'12 核 CPU', gpu:null, ram:'標準配置（可選更高）', storage:'1TB 起',
      screen:'14.2 吋 Liquid Retina XDR 120Hz', battery:'最長 24 小時', weight:null,
      priceHK:null, priceUS:1999, tags:['dev','creative','office','portable'],
      best:'創作者、開發者',
      why:'12 核 CPU、標配 1TB、續航 24 小時，有風扇所以撐得住長時間滿載。單核反應比 M5 Pro 還快，日常最有感。',
      caveat:'香港售價依官網；GPU 核心數未公布，重度 3D 仍建議 Pro／Max。' },

    { id:'mbp14-pro', cat:'mac', name:'14″ MacBook Pro（M5 Pro）', sub:'專業級',
      chip:'M5 Pro', cpu:'Pro 級（核心數依配置）', gpu:'Pro 級 GPU', ram:'最高 128GB', storage:'1TB 起',
      screen:'14.2 吋 Liquid Retina XDR 120Hz', battery:'最長 22 小時', weight:null,
      priceHK:19999, priceUS:2549, tags:['pro','dev','creative','ml'],
      best:'重度專業',
      why:'GPU 核心數、記憶體頻寬與 128GB 上限是另一個等級——長時間滿載的影片輸出、3D 渲染、本地大型模型靠它。',
      caveat:'價格比 M6 版高 5,000，除非你天天滿載，否則 M6 更划算。' },

    { id:'mbp16-max', cat:'mac', name:'16″ MacBook Pro（M5 Max）', sub:'最高階行動工作站',
      chip:'M5 Max', cpu:'Max 級（核心數依配置）', gpu:'Max 級 GPU', ram:'最高 128GB', storage:'1TB 起',
      screen:'16.2 吋 Liquid Retina XDR 120Hz', battery:'最長 24 小時', weight:null,
      priceHK:32499, priceUS:4149, tags:['pro','ml','creative'],
      best:'最高階行動工作站',
      why:'16 吋大螢幕加 Max 級 GPU，能取代桌上型的工作站——8K 剪輯、多機位、本地大模型都在這裡。',
      caveat:'HK$32,499 起，重量與價格都是筆電裡的頂點。' },

    { id:'mac-mini', cat:'mac', name:'Mac mini（M6）', sub:'自備螢幕',
      chip:'M6', cpu:'12 核 CPU', gpu:null, ram:'16GB 起', storage:'512GB 起',
      screen:'需自備', battery:'—', weight:'約 0.7 kg',
      priceHK:7299, priceUS:949, tags:['desktop','value','dev','office'],
      best:'自備螢幕的最佳性價比',
      why:'同樣 M6 晶片，價格只有 14 吋 MacBook Pro 的三分之一——已有螢幕鍵盤的話，這是進 M6 最便宜的路。',
      caveat:'要自己準備螢幕、鍵盤、滑鼠；不能帶出門。' },

    { id:'imac24', cat:'mac', name:'iMac 24″（M6）', sub:'一體成型',
      chip:'M6', cpu:'12 核 CPU', gpu:null, ram:'16GB 起', storage:'512GB 起',
      screen:'24 吋 4.5K Retina', battery:'—', weight:null,
      priceHK:null, priceUS:1499, tags:['desktop','office','home','creative-light'],
      best:'一體成型家用／櫃檯',
      why:'開箱就一台機器，24 吋 4.5K 螢幕加 M6，桌面最乾淨的選擇——櫃檯、家用、輕度創作都合適。',
      caveat:'香港售價依官網；螢幕不能單獨更換，壞了整台送修。' },

    { id:'mac-studio', cat:'mac', name:'Mac Studio', sub:'M5 Max / Ultra',
      chip:'M5 Max 或 M5 Ultra', cpu:'Max／Ultra 級', gpu:'Max／Ultra 級 GPU', ram:'最高 128GB 以上', storage:'1TB 起',
      screen:'需自備', battery:'—', weight:null,
      priceHK:19999, priceUS:2549, tags:['desktop','pro','ml','creative'],
      best:'影片、3D、ML',
      why:'不帶螢幕的桌上工作站，散熱與持續負載能力比筆電強得多——工作室裡跑渲染、訓練模型的首選。',
      caveat:'不能帶走，且要另外準備高階螢幕才配得上它。' },

    /* ===== iPhone ===== */
    { id:'iphone18', cat:'phone', name:'iPhone 18', sub:'尚未發表',
      chip:'A20（2nm）', cpu:null, gpu:null, ram:'9／12GB', storage:'256／512GB',
      screen:'6.3 吋 OLED 120Hz', battery:'約 4,000mAh', weight:null,
      priceHK:null, priceUS:null, tags:['budget','compact'], unreleased:true,
      best:'等得到就等——標準版',
      why:'標準版把 120Hz 與 2nm 的 A20 下放，價格通常比 Pro 少三到四成。',
      caveat:'尚未發表，規格為傳聞，售價未定。' },

    { id:'iphone18pro', cat:'phone', name:'iPhone 18 Pro', sub:'6.3 吋',
      chip:'A20 Pro（2nm）', cpu:null, gpu:null, ram:'12GB', storage:'256GB–2TB',
      screen:'6.3 吋 OLED 120Hz · 3,000 尼特', battery:'影片播放最長 34 小時', weight:'211 g',
      priceHK:10499, priceUS:1349, tags:['camera','premium','work'],
      best:'要最強相機又不想拿大手機',
      why:'48MP 三鏡加 LiDAR、4×／8× 光學品質、可變光圈四段——單手拿得住的前提下，這是拍照最好的尺寸。',
      caveat:'HK$10,499 起，比 Pro Max 便宜 1,000 但螢幕小 0.6 吋。' },

    { id:'iphone18promax', cat:'phone', name:'iPhone 18 Pro Max', sub:'6.9 吋',
      chip:'A20 Pro（2nm）', cpu:null, gpu:null, ram:'12GB', storage:'256GB–2TB',
      screen:'6.9 吋 OLED 120Hz · 3,000 尼特', battery:'影片播放最長 43 小時', weight:'249 g',
      priceHK:11499, priceUS:1449, tags:['camera','bigscreen','premium'],
      best:'看片、拍照、續航全都要',
      why:'6.9 吋加 43 小時影片播放，一天半不充電；跟 Pro 同鏡頭，只貴 1,000。',
      caveat:'249g，口袋裡很有存在感，一支手操作吃力。' },

    { id:'iphone-duo', cat:'phone', name:'iPhone Duo', sub:'折疊 · 5.4″ 外 + 7.6″ 內',
      chip:'A20 Pro（2nm）', cpu:null, gpu:null, ram:'12GB', storage:'256GB–2TB',
      screen:'5.4 吋外螢幕 ＋ 7.6 吋內螢幕 雙 120Hz', battery:'內 31／外 44 小時', weight:'254 g',
      priceHK:17499, priceUS:2249, tags:['bigscreen','premium','explore'],
      best:'要平板大螢幕又想只帶一台裝置',
      why:'折起來是 5.4 吋單手手機，打開是 7.6 吋平板——同時取代手機與 iPad mini 的人最划算。',
      caveat:'5 級鈦金屬、eSIM-only、HK$17,499 起；折疊結構長期耐用度仍需觀察。' },

    /* ===== iPad ===== */
    { id:'ipad-a16', cat:'tablet', name:'iPad（A16）', sub:'11 吋',
      chip:'A16', cpu:null, gpu:null, ram:null, storage:'128GB 起',
      screen:'11 吋 LCD', battery:'約 10 小時', weight:null,
      priceHK:3599, priceUS:null, tags:['media','budget','home'],
      best:'追劇、上網、家庭共用',
      why:'HK$3,599 就能有一台 11 吋 iPad，看片、上網、給小孩用都不心疼。',
      caveat:'螢幕非全貼合、只支援 USB-C 版 Apple Pencil，畫畫不合適。' },

    { id:'ipad-mini', cat:'tablet', name:'iPad mini（A20 Pro）', sub:'8.5 吋 OLED',
      chip:'A20 Pro', cpu:null, gpu:null, ram:null, storage:'128GB 起',
      screen:'8.5 吋 OLED', battery:'約 10 小時', weight:null,
      priceHK:5299, priceUS:null, tags:['portable','study','media'],
      best:'閱讀、隨身筆記、單手用',
      why:'8.5 吋 OLED 單手拿得住，塞進外套口袋——通勤看書、開會記筆記最順手。',
      caveat:'螢幕小，分割畫面做事會擠；不適合當主力工作機。' },

    { id:'ipad-air', cat:'tablet', name:'iPad Air（M4）', sub:'11″／13″',
      chip:'M4', cpu:null, gpu:null, ram:null, storage:'128GB 起',
      screen:'11 吋／13 吋 LCD 60Hz', battery:'約 10 小時', weight:null,
      priceHK:5999, priceUS:null, tags:['study','work','creative-light','value'],
      best:'學生、上班族、繪圖入門',
      why:'M4 加 Apple Pencil Pro 支援，做筆記、畫圖、外接鍵盤當筆電都夠——性價比最好的一台。',
      caveat:'螢幕是 60Hz LCD，寫字滑動不如 Pro 順。' },

    { id:'ipad-pro', cat:'tablet', name:'iPad Pro（M5）', sub:'11″／13″ OLED',
      chip:'M5', cpu:null, gpu:null, ram:null, storage:'256GB 起',
      screen:'11 吋／13 吋 OLED 120Hz', battery:'約 10 小時', weight:null,
      priceHK:9499, priceUS:null, tags:['creative','work','pro','premium'],
      best:'專業繪圖、剪輯、設計',
      why:'OLED 120Hz 加 M5，是唯一能跑桌面級剪輯與繪圖的 iPad——靠它吃飯的人值得。',
      caveat:'HK$9,499 起，加鍵盤與筆很容易破 15,000。' },

    /* ===== Apple Watch ===== */
    { id:'watch-se3', cat:'watch', name:'Apple Watch SE 3', sub:'GPS',
      chip:'S 系列', cpu:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'約 18 小時', weight:null,
      priceHK:1999, priceUS:null, tags:['simple','budget','daily'],
      best:'長輩用、只要基本功能',
      why:'通知、心率、跌倒偵測、運動記錄都有，HK$1,999 是進 Apple Watch 最省的路。',
      caveat:'沒有隨顯螢幕與心電圖，材質為鋁金屬。' },

    { id:'watch-s12', cat:'watch', name:'Apple Watch Series 12', sub:'42／46mm',
      chip:'S 系列', cpu:null, gpu:null, ram:null, storage:null,
      screen:'隨顯 Retina', battery:'約 18 小時', weight:null,
      priceHK:3199, priceUS:null, tags:['daily','sport','premium'],
      best:'大多數人',
      why:'鋁金屬 HK$3,199 起就有隨顯螢幕與完整健康功能，GPS 或行動網路版本同價。',
      caveat:'鈦金屬 HK$5,799、陶瓷 HK$7,599，材質加價幅度大。' },

    { id:'watch-ultra4', cat:'watch', name:'Apple Watch Ultra 4', sub:'49mm 鈦金屬',
      chip:'S 系列', cpu:null, gpu:null, ram:null, storage:null,
      screen:'49mm 大螢幕', battery:'約 36 小時', weight:null,
      priceHK:6199, priceUS:null, tags:['sport','premium','outdoor'],
      best:'跑步、游泳、行山等訓練',
      why:'49mm 鈦金屬、雙頻 GPS、最深 100 公尺防水，續航是標準版兩倍——鐵人三項、行山用得上。',
      caveat:'49mm 很大，手腕細的人戴起來突兀。' },

    /* ===== AirPods ===== */
    { id:'airpods5', cat:'earbuds', name:'AirPods 5', sub:'標準充電盒',
      chip:'H 系列', cpu:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'ANC 單次 4 小時', weight:null,
      priceHK:1099, priceUS:null, tags:['light','daily','budget'],
      best:'通勤、想要通透清楚',
      why:'HK$1,099 就有主動降噪與通透模式，日常通勤夠用。',
      caveat:'續航 4 小時偏短，充電盒不支援無線充電。' },

    { id:'airpods5-wireless', cat:'earbuds', name:'AirPods 5（無線充電盒）', sub:'Qi 充電',
      chip:'H 系列', cpu:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'ANC 單次 5 小時 · 配盒 22 小時', weight:null,
      priceHK:1249, priceUS:null, tags:['light','daily','value'],
      best:'通勤、想要通透清楚',
      why:'多 150 元換到多一小時續航、無線充電、滑動調音量與充電盒揚聲器——這 150 元值得。',
      caveat:'外型與 AirPods 5 相同，僅充電盒升級。' },

    { id:'airpods-pro3', cat:'earbuds', name:'AirPods Pro 3', sub:'入耳式 · 降噪',
      chip:'H 系列', cpu:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'ANC 單次約 6 小時', weight:null,
      priceHK:null, priceUS:null, tags:['anc','sport','daily'],
      best:'辦公室、要最強降噪',
      why:'入耳式矽膠塞的隔音加自適應降噪，地鐵與開放辦公室裡最能安靜下來；支援防水，運動也能戴。',
      caveat:'售價依官網；矽膠塞長時間戴有些人會脹。' },

    { id:'airpods-max', cat:'earbuds', name:'AirPods Max', sub:'頭戴式',
      chip:'H 系列', cpu:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'約 20 小時', weight:null,
      priceHK:null, priceUS:null, tags:['comfort','premium','anc'],
      best:'長時間戴、要最舒服',
      why:'頭戴式的耳罩包覆，戴四小時也不夾耳；續航 20 小時，一天不用充。',
      caveat:'重且不能折疊收納，夏天悶熱。' },

    /* ===== Vision ===== */
    { id:'vision-pro-m5', cat:'vision', name:'Apple Vision Pro（M5）', sub:'256GB 起',
      chip:'M5 ＋ R2', cpu:null, gpu:null, ram:null, storage:'256GB／512GB／1TB',
      screen:'micro-OLED 雙 4K', battery:'外接電池約 2–3 小時', weight:null,
      priceHK:29999, priceUS:3699, tags:['media','work','explore','premium'],
      best:'看電影、當超大工作螢幕',
      why:'戴上就是一間私人影院與無限大的桌面——多視窗同時開、4K 影片的沉浸感沒有替代品。',
      caveat:'HK$29,999 起，加上 ZEISS 鏡片另計；重量與續航仍是一整天的障礙。' },

    /* ===== TV & Home ===== */
    { id:'appletv4k', cat:'home', name:'Apple TV 4K', sub:'電視盒',
      chip:'A 系列', cpu:null, gpu:null, ram:null, storage:'64／128GB',
      screen:null, battery:'—', weight:null,
      priceHK:2399, priceUS:299, tags:['tv','media'],
      best:'電視盒，看串流',
      why:'把任何電視變成 Apple 介面：串流、AirPlay、HomeKit 中樞都在這一盒。',
      caveat:'香港 HK$2,399，比同類電視盒貴不少；電視本身要夠好才看得出差異。' },

    { id:'homepod-mini2', cat:'home', name:'HomePod mini 2', sub:'智慧音箱',
      chip:'S10', cpu:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'—', weight:null,
      priceHK:1099, priceUS:149, tags:['audio','home','value'],
      best:'智慧音箱、聽音樂',
      why:'HK$1,099 就有 Siri、HomeKit 中樞與立體聲配對，兩顆就能組左右聲道。',
      caveat:'低音量感有限，大空間或重低音需求要上 HomePod。' },

    { id:'homepod', cat:'home', name:'HomePod', sub:'大顆智慧音箱',
      chip:'S 系列', cpu:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'—', weight:null,
      priceHK:2699, priceUS:null, tags:['audio','theater','premium'],
      best:'兩者都要，做成劇院',
      why:'低音與空間感明顯強過 mini，兩顆配 Apple TV 4K 就是一套客廳劇院。',
      caveat:'HK$2,699 一顆，整套下來不便宜。' }
  ]
};
