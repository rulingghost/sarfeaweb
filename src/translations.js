
import { 
  LayoutDashboard, Smartphone, BarChart3, CheckCircle2, ArrowRight, 
  Menu, X, Mail, Phone, Globe, Zap, 
  Database, Server, Rocket, Cpu, XCircle, CheckCircle,
  Code2, ShieldCheck, Users, MessageSquare, ChevronDown, Play,
  Layers, Monitor, Briefcase, Calculator, Search, ShoppingBag,
  Settings, FileText, Truck, Bell, CreditCard, ArrowUp,
  Sun, Moon, Send, ExternalLink, Lightbulb, Target, Award, Cloud, Star, TrendingUp, Clock,
  ChevronRight, Plus, Minus, Laptop, AlertCircle, Share2, PieChart, Activity,
  Boxes, GitBranch, Terminal, Wifi, Lock, Fingerprint, MousePointer2, ArrowLeft
} from 'lucide-react';

export const translations = {
  tr: {
    navbar: {
      home: "Anasayfa",
      solutions: "Teknolojiler",
      process: "Süreç",
      about: "Kurumsal",
      projects: "Neler Yaptık?",
      blog: "Blog & İçgörü",
      contact: "İletişim",
      startProject: "Proje Başlat",
      darkMode: "Karanlık Mod",
      lightMode: "Aydınlık Mod"
    },
    hero: {
      tag: "Sarfea Enterprise v5.0 Yayında",
      title_prefix: "Sınırsız",
      title_suffix: "Dijital Ekosistemler",
      description: "Web, Mobil, ERP, CRM, Yapay Zeka ve IoT entegrasyonları. İşletmenizin ihtiyaç duyduğu her şeyi tek bir çatı altında kodluyoruz.",
      btn_start: "Hemen Başlayalım",
      btn_scope: "Kapsam Belirle",
      references: "Kurumsal Referans"
    },
    crm_preview: {
      dashboard: "Dashboard",
      overview: "Genel Bakış",
      system_online: "Sistem Online",
      total_revenue: "Toplam Gelir",
      active_modules: "Aktif Modüller",
      sync: "Senkronize",
      employees: "Çalışan",
      recent_integrations: "Son Entegrasyonlar",
      all: "Tümü",
      data_flow: "Veri Akışı Açık",
      task_automation: "Task Otonomasyonu",
      automation_triggered: "Otomasyon Tetiklendi",
      new_order: "Yeni sipariş → Faturalandırıldı",
      system_status: "Sistem Durumu",
      uptime: "Uptime",
      integration: "Entegrasyon",
      api_ready: "API Ready"
    },
    stats_section: {
      title: "Entegre Çalıştığımız Devler",
      subtitle: "Global standartlarda altyapı ve servis sağlayıcılarla tam uyumlu çalışıyoruz.",
      main_title_prefix: "Sadece Kod Değil,",
      main_title_suffix: "Uçtan Uca Çözüm",
      description: "Sarfea olarak biz, bir yazılım şirketinden fazlasıyız. İş süreçlerinizi analiz eden, darboğazları tespit eden ve size özel dijital mimariyi kuran teknoloji ortağınızız. ERP'den CRM'e, IoT'den Yapay Zeka'ya kadar her noktada varız.",
      cards: [
        { value: "45+", label: "Modül & Entegrasyon", color: "blue" },
        { value: "120+", label: "Tamamlanan Sistem", color: "purple" },
        { value: "%99", label: "Sistem Uptime", color: "green" },
        { value: "24/7", label: "DevOps Destek", color: "orange" }
      ]
    },
    tech_stack: {
      title: "Teknoloji Yığınımız",
      subtitle: "Modern, güvenilir ve ölçeklenebilir altyapılar için kullandığımız teknolojiler.",
      items: [
        { name: "React & Next.js", desc: "Modern web arayüzleri" },
        { name: "Node.js & Python", desc: "Güçlü backend sistemleri" },
        { name: "AWS & Azure", desc: "Bulut altyapı çözümleri" },
        { name: "Docker & K8s", desc: "Container orkestrasyon" },
        { name: "PostgreSQL & MongoDB", desc: "Esnek veritabanı sistemleri" },
        { name: "CI/CD Pipeline", desc: "Otomatik deployment" },
        { name: "Microservices", desc: "Modüler mimari tasarım" },
        { name: "REST & GraphQL", desc: "API geliştirme" }
      ]
    },
    faq: {
      title: "Merak Edilenler",
      subtitle: "Teknik süreçler ve işleyiş hakkında sık sorulan sorular.",
      questions: [
        {
          question: "Özel bir modüle ihtiyacımız var, geliştirebilir misiniz?",
          answer: "Kesinlikle. Biz 'paket program' satıcısı değiliz, çözüm üreticisiyiz. İster özel bir raporlama aracı, ister fabrikanızdaki makineyle konuşan bir IoT yazılımı olsun; ihtiyacınız olan her türlü modülü sıfırdan sizin için kodluyoruz."
        },
        {
          question: "Mevcut kullandığımız yazılımlarla entegrasyon yapıyor musunuz?",
          answer: "Evet. SAP, Logo, Mikro, Netsis gibi ERP'lerden; Salesforce, Hubspot gibi CRM'lere kadar her türlü sistemle konuşabilen ara katman yazılımları geliştiriyoruz. Verileriniz izole kalmaz, sistemler arası akar."
        },
        {
          question: "Proje sonrası teknik destek süreciniz nasıl?",
          answer: "Yazılım canlıya alındıktan sonra işimiz bitmiyor. SLA (Hizmet Seviyesi Anlaşması) kapsamında 7/24 izleme, güvenlik güncellemeleri ve acil durum müdahaleleri sunuyoruz. Sisteminizin her daim ayakta kalmasını garanti ediyoruz."
        }
      ]
    },
    cta: {
      title: "Projenizi Hayata Geçirmeye Hazır mısınız?",
      description: "Fikrinizi dinleyelim, stratejinizi belirleyelim ve dijital dönüşümünüzü başlatalım. Geleceği bugünden kodlayın.",
      button: "Ücretsiz Analiz Toplantısı"
    },
    solutions_page: {
      title: "Geniş Hizmet Yelpazemiz",
      subtitle: "İhtiyacınız olan teknoloji ne olursa olsun, uzman ekibimizle yanınızdayız.",
      items: [
        { title: "Web Platformları", desc: "Kurumsal, hızlı ve ölçeklenebilir web uygulamaları.", tags: ["React", "Next.js", "PWA"] },
        { title: "Mobil Uygulama", desc: "iOS ve Android dünyasında yerinizi alın.", tags: ["React Native", "Flutter", "Swift"] },
        { title: "E-Ticaret & B2B", desc: "Satışlarınızı artıran güvenli altyapılar.", tags: ["Pazaryeri Entegrasyonu", "Ödeme"] },
        { title: "ERP & Stok", desc: "Depo, üretim ve stok süreçlerini optimize edin.", tags: ["Barkod", "Üretim Takip", "Lojistik"] },
        { title: "CRM Çözümleri", desc: "Müşteri ilişkilerinizi ve satış huninizi yönetin.", tags: ["Pipeline", "Teklif", "Aktivite"] },
        { title: "Entegrasyon (API)", desc: "Farklı sistemleri birbirine bağlayan köprüler.", tags: ["SAP", "Mikro", "Logo", "Nebim"] },
        { title: "Yapay Zeka (AI)", desc: "Verilerinizden anlamlı içgörüler çıkarın.", tags: ["ML", "Tahminleme", "Chatbot"] },
        { title: "IoT Sistemler", desc: "Cihazlarınızı internete bağlayıp yönetin.", tags: ["MQTT", "Sensör", "Otomasyon"] }
      ]
    },
    pricing: {
      title: "Esnek İş Modelleri",
      subtitle: "Projenizin büyüklüğüne göre en uygun çalışma modelini seçelim.",
      plans: [
        {
          name: "MVP / Startup",
          price: "Proje Bazlı",
          description: "Fikrini hızlıca hayata geçirmek isteyen girişimciler için.",
          features: ["Temel Özellik Seti", "Hızlı Pazara Çıkış", "Ölçeklenebilir Mimari", "Web & Mobil Uyum", "3 Ay Garanti"],
          button: "Detaylı Bilgi Al"
        },
        {
          name: "Kurumsal Dönüşüm",
          price: "Anahtar Teslim",
          description: "Şirket içi süreçleri dijitalleştirmek isteyen KOBİ'ler için.",
          tag: "En Çok Tercih Edilen",
          features: ["Detaylı Analiz & Planlama", "ERP/CRM Modülleri", "Eski Sistem Entegrasyonu", "Personel Eğitimi", "1 Yıl Bakım & Destek"],
          button: "Detaylı Bilgi Al"
        },
        {
          name: "Dedicated Team",
          price: "Aylık Kiralama",
          description: "Uzun soluklu projeler için size özel yazılım ekibi.",
          features: ["Size Özel Senior Geliştiriciler", "Esnek Sprint Planlaması", "Doğrudan Yönetim Hakkı", "Sürekli Geliştirme (CI/CD)", "7/24 DevOps Desteği"],
          button: "Detaylı Bilgi Al"
        }
      ]
    },
    process_page: {
      title: "Nasıl Çalışıyoruz?",
      subtitle: "Fikirden ürüne giden yolda şeffaf ve çevik bir süreç.",
      steps: [
        { step: "01", title: "Keşif ve Analiz", desc: "Sizi dinliyoruz. İş süreçlerinizi, hedeflerinizi ve acı noktalarınızı analiz edip teknik gereksinim dokümanını hazırlıyoruz." },
        { step: "02", title: "UX/UI Tasarım", desc: "Kullanıcı deneyimini merkeze alarak, modern, anlaşılır ve marka kimliğinize uygun arayüzler tasarlıyoruz." },
        { step: "03", title: "Çevik Geliştirme", desc: "Sprint'ler halinde ilerliyoruz. Her iki haftada bir size çalışan bir demo sunarak geri bildirimlerinizi alıyoruz." },
        { step: "04", title: "Test ve Entegrasyon", desc: "Otomatik test senaryoları, güvenlik taramaları ve performans testleri ile sistemin kusursuzluğunu doğruluyoruz." },
        { step: "05", title: "Canlıya Geçiş ve Destek", desc: "Sistemi devreye alıyor, eğitimleri veriyor ve sonrasında bakım/onarım hizmetlerimizle sistemin sağlığını koruyoruz." }
      ]
    },
    about_page: {
      title: "Biz Kimiz?",
      subtitle: "Teknolojiyi bir araç değil, bir sanat olarak gören tutkulu bir ekibiz.",
      office: {
        tag: "AR-GE MERKEZİ",
        location: "İstanbul, Maslak",
        desc: "Global projelerin kodlandığı, inovasyonun kalbinin attığı merkez ofisimiz."
      },
      vision: {
        title: "Vizyonumuz",
        p1: "Sarfea Yazılım, işletmelerin dijital potansiyelini en üst düzeye çıkarmak için kuruldu. Hedefimiz, karmaşık iş süreçlerini basit, yönetilebilir ve akıllı yazılımlara dönüştürmektir.",
        p2: "Sadece kod yazmıyoruz; geleceğin iş modellerini inşa ediyoruz. Sürdürülebilirlik, ölçeklenebilirlik ve güvenlik, geliştirdiğimiz her satır kodun DNA'sında bulunur."
      },
      values: [
        { title: "Sonuç Odaklılık", desc: "Ölçülebilir başarı kriterleri." },
        { title: "İnovasyon", desc: "En yeni teknolojiler." }
      ],
      timeline_title: "Yolculuğumuz",
      timeline_subtitle: "Küçük bir ofisten global bir teknoloji şirketine uzanan hikayemiz.",
      timeline_events: [
        { year: "2018", title: "Kuruluş", desc: "Ankara'da küçük bir ofiste 3 kişilik çekirdek ekiple yolculuğumuz başladı." },
        { year: "2019", title: "İlk Büyük Proje", desc: "Global bir lojistik firması için geliştirdiğimiz ERP sistemi ile sektöre adımızı duyurduk." },
        { year: "2021", title: "Ar-Ge Merkezi", desc: "Teknopark ofisimize geçiş yaptık ve resmi Ar-Ge merkezi unvanını aldık." },
        { year: "2023", title: "Global Açılım", desc: "Avrupa ve Orta Doğu pazarına açılarak ihracat odaklı büyümeye geçtik." },
        { year: "2024", title: "Yapay Zeka Yatırımı", desc: "Kendi AI laboratuvarımızı kurarak akıllı iş çözümleri üretmeye başladık." }
      ],
      solutions_area_title: "Çözüm Alanlarımız",
      solution_areas: [
        { title: "Kurumsal Yazılım", desc: "Şirket içi iş akışlarınızı dijitalleştiren, verimlilik artıran ERP ve CRM sistemleri.", items: ["İnsan Kaynakları", "Finans Modülleri", "Satış Yönetimi"] },
        { title: "E-Ticaret Çözümleri", desc: "Online satış kanallarınızı entegre eden, stok ve sipariş yönetimi sunan platformlar.", items: ["B2B & B2C", "Pazaryeri Sync", "Ödeme Entegrasyonu"] },
        { title: "Mobil Ekosistem", desc: "iOS ve Android için native ve cross-platform mobil uygulamalar.", items: ["React Native", "Flutter", "PWA"] },
        { title: "Yapay Zeka & ML", desc: "Verilerinizden öğrenen, tahmin yapan ve optimize eden akıllı sistemler.", items: ["Chatbot", "Tahminleme", "NLP"] },
        { title: "IoT & Otomasyon", desc: "Cihazlarınızı internete bağlayan, uzaktan kontrol ve izleme imkanı sunan çözümler.", items: ["Sensör Entegrasyonu", "MQTT", "Real-time Monitoring"] },
        { title: "Güvenlik & DevOps", desc: "Sisteminizin 7/24 ayakta kalmasını sağlayan altyapı ve güvenlik hizmetleri.", items: ["Penetrasyon Testi", "CI/CD", "Monitoring"] }
      ]
    },
    contact_page: {
      title: "Projeyi Başlatalım",
      subtitle: "Teknik ekibimizle görüşmek için formu doldurun veya bizi arayın.",
      form: {
          title: "Talep Formu",
          name: "Adınız Soyadınız",
          name_ph: "Ad Soyad",
          email: "E-posta Adresiniz",
          email_ph: "ornek@sirket.com",
          type: "Proje Türü",
          details: "Proje Detayları",
          details_ph: "Projenizden, hedeflerinizden ve ihtiyaç duyduğunuz özelliklerden bahsedin...",
          submit: "Teklif İste",
          submitting: "Gönderiliyor..."
      },
      info: {
          title: "İletişim Kanalları",
          email: "E-posta",
          phone: "Telefon",
          hq: "Merkez Ofis",
          address: "Ovacık, Yozgat Blv. No: 20, 06280 Keçiören/Ankara",
          hours_label: "Çalışma Saatleri",
          hours: "Pzt - Cum: 09:00 - 18:00",
          directions: "Yol Tarifi Al"
      }
    },
    calculator: {
      step1_title: "Proje Kapsam Belirleyici",
      step1_desc: "İhtiyacınız olan modülleri seçin.",
      step2_title: "Teklif Formu",
      step2_desc: "İletişim bilgilerinizi girin, teklifinizi iletelim.",
      options: [
        { label: 'Kurumsal Web Platformu', category: 'Platform' },
        { label: 'Native Mobil Uygulama', category: 'Platform' },
        { label: 'Özel CRM/Müşteri Yönetimi', category: 'Yazılım' },
        { label: 'ERP & Stok Yönetimi', category: 'Yazılım' },
        { label: '3. Parti Entegrasyonlar', category: 'Entegrasyon' },
        { label: 'Ödeme Sistemleri', category: 'Entegrasyon' },
        { label: 'Yapay Zeka & Analitik', category: 'İleri Teknoloji' },
        { label: 'IoT & Cihaz Haberleşmesi', category: 'İleri Teknoloji' },
        { label: 'Yüksek Güvenlik & Loglama', category: 'Altyapı' }
      ],
      selected_scope: "Seçilen Kapsam:",
      no_module: "Modül seçilmedi.",
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      notes: "Ek Notlar (Opsiyonel)",
      notes_ph: "Varsa eklemek istedikleriniz...",
      selected_count: "Seçilen Modül Sayısı:",
      pieces: "Adet",
      continue: "Teklif Oluşturmak İçin Devam Et",
      submit: "Kapsam Teklifini Gönder",
      submitting: "Gönderiliyor...",
      success: "Kapsam teklifiniz başarıyla alındı. Sizinle iletişime geçeceğiz.",
      error: "Bir hata oluştu."
    },
    cookie: {
      title: "Çerez Politikası",
      text: "Deneyiminizi iyileştirmek için çerezleri kullanıyoruz. Sitemizi kullanarak bunu kabul etmiş sayılırsınız.",
      accept: "Kabul Et",
      reject: "Reddet"
    },
    newsletter: {
      title: "Teknoloji Bültenimize Abone Olun",
      text: "En yeni teknoloji trendleri, yazılım dünyasından haberler ve Sarfea'dan güncellemeler için bültenimize katılın.",
      placeholder: "E-posta adresiniz",
      button: "Abone Ol"
    },
    footer: {
      slogan: "Geleceği kodluyoruz. İşletmenizi dijital dünyada bir adım öne taşıyacak yenilikçi ve sürdürülebilir yazılım çözümleri üretiyoruz.",
      sitemap: "Site Haritası",
      corporate: "Kurumsal",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları",
      kvkk: "KVKK Aydınlatma",
      careers: "Kariyer",
      rights: "© 2024 Sarfea Yazılım Teknolojileri A.Ş. Tüm hakları saklıdır."
    },
    toast: {
        title: "Talep Alındı!",
        success_contact: "Proje detaylarınız teknik ekibimize iletildi. En kısa sürede dönüş yapacağız.",
        error_connection: "Bağlantı hatası. Lütfen internetinizi kontrol ediniz."
    },
    whatsapp: {
      label: "WhatsApp Destek",
      message: "Merhaba, projeleriniz hakkında bilgi almak istiyorum."
    },
    projects_page: {
      title: "Başarı Hikayeleri",
      subtitle: "Fikirden gerçeğe dönüştürdüğümüz dijital deneyimler.",
      stat_revenue: "Ciro Artışı",
      stat_efficiency: "Verimlilik",
      stat_users: "Aktif Kullanıcı",
      btn_detail: "İncele"
    },
    blog_page: {
      title: "Teknoloji Günlüğü",
      subtitle: "Yazılım dünyasındaki son trendler, teknik analizler ve sektörel içgörüler.",
      read_more: "Devamını Oku",
      popular: "Popüler",
      categories: {
        all: "Tümü",
        dev: "Yazılım Geliştirme",
        ai: "Yapay Zeka",
        trend: "Trendler"
      }
    }
  },
  en: {
    navbar: {
        home: "Home",
        solutions: "Technologies",
        process: "Process",
        about: "Corporate",
        projects: "Case Studies",
        blog: "Blog & Insights",
        contact: "Contact",
        startProject: "Start Project",
        darkMode: "Dark Mode",
        lightMode: "Light Mode"
      },
      hero: {
        tag: "Sarfea Enterprise v5.0 Live",
        title_prefix: "Limitless",
        title_suffix: "Digital Ecosystems",
        description: "Web, Mobile, ERP, CRM, AI, and IoT integrations. We code everything your business needs under one roof.",
        btn_start: "Get Started",
        btn_scope: "Define Scope",
        references: "Corporate References"
      },
      crm_preview: {
        dashboard: "Dashboard",
        overview: "Overview",
        system_online: "System Online",
        total_revenue: "Total Revenue",
        active_modules: "Active Modules",
        sync: "Synchronized",
        employees: "Employees",
        recent_integrations: "Recent Integrations",
        all: "All",
        data_flow: "Data Flow On",
        task_automation: "Task Automation",
        automation_triggered: "Automation Triggered",
        new_order: "New Order → Invoiced",
        system_status: "System Status",
        uptime: "Uptime",
        integration: "Integration",
        api_ready: "API Ready"
      },
      stats_section: {
        title: "Giants We Integrate With",
        subtitle: "We work in full compliance with global standard infrastructure and service providers.",
        main_title_prefix: "Not Just Code,",
        main_title_suffix: "End-End Solution",
        description: "As Sarfea, we are more than a software company. We are your technology partner who analyzes your business processes, identifies bottlenecks, and builds your custom digital architecture. We are present at every point from ERP to CRM, IoT to AI.",
        cards: [
          { value: "45+", label: "Modules & Integrations", color: "blue" },
          { value: "120+", label: "Completed Systems", color: "purple" },
          { value: "%99", label: "System Uptime", color: "green" },
          { value: "24/7", label: "DevOps Support", color: "orange" }
        ]
      },
      tech_stack: {
        title: "Our Tech Stack",
        subtitle: "Technologies we use for modern, reliable, and scalable infrastructures.",
        items: [
          { name: "React & Next.js", desc: "Modern web interfaces" },
          { name: "Node.js & Python", desc: "Powerful backend systems" },
          { name: "AWS & Azure", desc: "Cloud infrastructure solutions" },
          { name: "Docker & K8s", desc: "Container orchestration" },
          { name: "PostgreSQL & MongoDB", desc: "Flexible database systems" },
          { name: "CI/CD Pipeline", desc: "Automated deployment" },
          { name: "Microservices", desc: "Modular architecture design" },
          { name: "REST & GraphQL", desc: "API development" }
        ]
      },
      faq: {
        title: "FAQ",
        subtitle: "Frequently asked questions about technical processes and operations.",
        questions: [
          {
            question: "We need a custom module, can you develop it?",
            answer: "Absolutely. We are not a 'package program' seller, we are solution producers. Whether it's a special reporting tool or IoT software that talks to the machine in your factory; we code every module you need from scratch for you."
          },
          {
            question: "Do you integrate with our existing software?",
            answer: "Yes. We develop middleware software that can talk to all kinds of systems from ERPs like SAP, Logo, Mikro, Netsis to CRMs like Salesforce, Hubspot. Your data does not remain isolated, it flows between systems."
          },
          {
            question: "How is your post-project technical support process?",
            answer: "Our job doesn't end after the software goes live. Within the scope of SLA (Service Level Agreement), we offer 24/7 monitoring, security updates, and emergency interventions. We guarantee your system stays up at all times."
          }
        ]
      },
      cta: {
        title: "Ready to Bring Your Project to Life?",
        description: "Let's listen to your idea, determine your strategy, and start your digital transformation. Code the future today.",
        button: "Free Analysis Meeting"
      },
      solutions_page: {
        title: "Our Wide Range of Services",
        subtitle: "Whatever technology you need, we are with you with our expert team.",
        items: [
          { title: "Web Platforms", desc: "Corporate, fast, and scalable web applications.", tags: ["React", "Next.js", "PWA"] },
          { title: "Mobile Application", desc: "Take your place in the iOS and Android world.", tags: ["React Native", "Flutter", "Swift"] },
          { title: "E-Commerce & B2B", desc: "Secure infrastructures that increase your sales.", tags: ["Marketplace Integration", "Payment"] },
          { title: "ERP & Stock", desc: "Optimize warehouse, production, and stock processes.", tags: ["Barcode", "Production Tracking", "Logistics"] },
          { title: "CRM Solutions", desc: "Manage your customer relations and sales funnel.", tags: ["Pipeline", "Offer", "Activity"] },
          { title: "Integration (API)", desc: "Bridges connecting different systems.", tags: ["SAP", "Mikro", "Logo", "Nebim"] },
          { title: "Artificial Intelligence (AI)", desc: "Extract meaningful insights from your data.", tags: ["ML", "Prediction", "Chatbot"] },
          { title: "IoT Systems", desc: "Connect your devices to the internet and manage them.", tags: ["MQTT", "Sensor", "Automation"] }
        ]
      },
      pricing: {
        title: "Flexible Business Models",
        subtitle: "Let's choose the most suitable working model for the size of your project.",
        plans: [
          {
            name: "MVP / Startup",
            price: "Project Based",
            description: "For entrepreneurs who want to bring their idea to life quickly.",
            features: ["Basic Feature Set", "Fast Time to Market", "Scalable Architecture", "Web & Mobile Compatible", "3 Months Warranty"],
            button: "Get Detailed Info"
          },
          {
            name: "Corporate Transformation",
            price: "Turnkey",
            description: "For SMEs wanting to digitize internal processes.",
            tag: "Most Preferred",
            features: ["Detailed Analysis & Planning", "ERP/CRM Modules", "Legacy System Integration", "Staff Training", "1 Year Maintenance & Support"],
            button: "Get Detailed Info"
          },
          {
            name: "Dedicated Team",
            price: "Monthly Retainer",
            description: "Your private software team for long-term projects.",
            features: ["Senior Developers for You", "Flexible Sprint Planning", "Direct Management Right", "Continuous Development (CI/CD)", "24/7 DevOps Support"],
            button: "Get Detailed Info"
          }
        ]
      },
      process_page: {
        title: "How We Work?",
        subtitle: "A transparent and agile process on the way from idea to product.",
        steps: [
          { step: "01", title: "Discovery and Analysis", desc: "We listen to you. We analyze your business processes, goals, and pain points and prepare the technical requirement document." },
          { step: "02", title: "UX/UI Design", desc: "Focusing on user experience, we design modern, understandable interfaces suitable for your brand identity." },
          { step: "03", title: "Agile Development", desc: "We proceed in sprints. We present you a working demo every two weeks and get your feedback." },
          { step: "04", title: "Testing and Integration", desc: "We verify the perfection of the system with automated test scenarios, security scans, and performance tests." },
          { step: "05", title: "Go Live and Support", desc: "We commission the system, provide training, and then protect the health of the system with our maintenance/repair services." }
        ]
      },
      about_page: {
        title: "Who Are We?",
        subtitle: "We are a passionate team seeing technology not as a tool, but as an art.",
        office: {
          tag: "R&D CENTER",
          location: "Istanbul, Maslak",
          desc: "Our headquarters where global projects are coded and the heart of innovation beats."
        },
        vision: {
          title: "Our Vision",
          p1: "Sarfea Software was established to maximize the digital potential of businesses. Our goal is to transform complex business processes into simple, manageable, and smart software.",
          p2: "We don't just write code; we build the business models of the future. Sustainability, scalability, and security are in the DNA of every line of code we develop."
        },
        values: [
          { title: "Result Oriented", desc: "Measurable success criteria." },
          { title: "Innovation", desc: "Latest technologies." }
        ],
        timeline_title: "Our Journey",
        timeline_subtitle: "Our story stretching from a small office to a global technology company.",
        timeline_events: [
          { year: "2018", title: "Establishment", desc: "Our journey started with a core team of 3 people in a small office in Ankara." },
          { year: "2019", title: "First Big Project", desc: "We made our name known in the sector with the ERP system we developed for a global logistics company." },
          { year: "2021", title: "R&D Center", desc: "We moved to our Technopark office and received the official R&D center title." },
          { year: "2023", title: "Global Expansion", desc: "We expanded to the European and Middle Eastern markets and switched to export-oriented growth." },
          { year: "2024", title: "AI Investment", desc: "We started producing smart business solutions by establishing our own AI laboratory." }
        ],
        solutions_area_title: "Solution Areas",
        solution_areas: [
          { title: "Corporate Software", desc: "ERP and CRM systems that digitize your internal business workflows and increase efficiency.", items: ["Human Resources", "Finance Modules", "Sales Management"] },
          { title: "E-Commerce Solutions", desc: "Platforms that integrate your online sales channels and offer stock and order management.", items: ["B2B & B2C", "Marketplace Sync", "Payment Integration"] },
          { title: "Mobile Ecosystem", desc: "Native and cross-platform mobile applications for iOS and Android.", items: ["React Native", "Flutter", "PWA"] },
          { title: "AI & ML", desc: "Smart systems that learn from your data, predict and optimize.", items: ["Chatbot", "Prediction", "NLP"] },
          { title: "IoT & Automation", desc: "Solutions that connect your devices to the internet and offer remote control and monitoring.", items: ["Sensor Integration", "MQTT", "Real-time Monitoring"] },
          { title: "Security & DevOps", desc: "Infrastructure and security services ensuring your system stays up 24/7.", items: ["Penetration Testing", "CI/CD", "Monitoring"] }
        ]
      },
      contact_page: {
        title: "Let's Start the Project",
        subtitle: "Fill out the form or call us to meet with our technical team.",
        form: {
            title: "Request Form",
            name: "Your Name",
            name_ph: "Name Surname",
            email: "Your E-mail Address",
            email_ph: "example@company.com",
            type: "Project Type",
            details: "Project Details",
            details_ph: "Talk about your project, goals, and the features you need...",
            submit: "Request Offer",
            submitting: "Sending..."
        },
        info: {
            title: "Contact Channels",
            email: "E-mail",
            phone: "Phone",
            hq: "Headquarters",
            address: "Ovacık, Yozgat Blv. No: 20, 06280 Keçiören/Ankara",
            hours_label: "Working Hours",
            hours: "Mon - Fri: 09:00 - 18:00",
            directions: "Get Directions"
        }
      },
      calculator: {
        step1_title: "Project Scope Definer",
        step1_desc: "Select the modules you need.",
        step2_title: "Offer Form",
        step2_desc: "Enter your contact details, let us send your offer.",
        options: [
          { label: 'Corporate Web Platform', category: 'Platform' },
          { label: 'Native Mobile App', category: 'Platform' },
          { label: 'Custom CRM/Customer Mgmt', category: 'Software' },
          { label: 'ERP & Stock Management', category: 'Software' },
          { label: '3rd Party Integrations', category: 'Integration' },
          { label: 'Payment Systems', category: 'Integration' },
          { label: 'AI & Analytics', category: 'Advanced Tech' },
          { label: 'IoT & Device Comm', category: 'Advanced Tech' },
          { label: 'High Security & Logging', category: 'Infrastructure' }
        ],
        selected_scope: "Selected Scope:",
        no_module: "No module selected.",
        name: "Name Surname",
        email: "E-mail",
        phone: "Phone",
        notes: "Additional Notes (Optional)",
        notes_ph: "If you have anything to add...",
        selected_count: "Selected Module Count:",
        pieces: "Pieces",
        continue: "Continue to Create Offer",
        submit: "Send Scope Offer",
        submitting: "Sending...",
        success: "Your scope offer has been successfully received. We will contact you.",
        error: "An error occurred."
      },
      cookie: {
        title: "Cookie Policy",
        text: "We use cookies to improve your experience. By using our site, you are deemed to have accepted this.",
        accept: "Accept",
        reject: "Reject"
      },
      newsletter: {
        title: "Subscribe to Our Tech Newsletter",
        text: "Join our newsletter for the latest tech trends, news from the software world, and updates from Sarfea.",
        placeholder: "Your e-mail address",
        button: "Subscribe"
      },
      footer: {
        slogan: "We code the future. We produce innovative and sustainable software solutions that will take your business one step ahead in the digital world.",
        sitemap: "Sitemap",
        corporate: "Corporate",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        kvkk: "KVKK Clarification",
        careers: "Careers",
        rights: "© 2024 Sarfea Software Technologies Inc. All rights reserved."
      },
      toast: {
          title: "Request Received!",
          success_contact: "Your project details have been forwarded to our technical team. We will get back to you as soon as possible.",
          error_connection: "Connection error. Please check your internet."
      },
      whatsapp: {
        label: "WhatsApp Support",
        message: "Hello, I would like to get information about your projects."
      },
      projects_page: {
        title: "Success Stories",
        subtitle: "Digital experiences we turned from idea to reality.",
        stat_revenue: "Revenue Growth",
        stat_efficiency: "Efficiency",
        stat_users: "Active Users",
        btn_detail: "View Detail"
      },
      blog_page: {
        title: "Tech Journal",
        subtitle: "Latest trends in the software world, technical analyses, and sectoral insights.",
        read_more: "Read More",
        popular: "Popular",
        categories: {
          all: "All",
          dev: "Development",
          ai: "Artificial Intelligence",
          trend: "Trends"
        }
      }
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      solutions: "التقنيات",
      process: "العملية",
      about: "الشركة",
      projects: "أعمالنا",
      blog: "المدونة",
      contact: "اتصل بنا",
      startProject: "ابدأ المشروع",
      darkMode: "الوضع الداكن",
      lightMode: "الوضع الفاتح"
    },
    hero: {
      tag: "Sarfea Enterprise v5.0 مباشر",
      title_prefix: "بلا حدود",
      title_suffix: "أنظمة بيئية رقمية",
      description: "تكاملات الويب، الجوال، ERP، CRM، الذكاء الاصطناعي و IoT. نحن نبرمج كل ما تحتاجه شركتك تحت سقف واحد.",
      btn_start: "لنبدأ الآن",
      btn_scope: "تحديد النطاق",
      references: "مراجع الشركات"
    },
    crm_preview: {
      dashboard: "لوحة التحكم",
      overview: "نظرة عامة",
      system_online: "النظام متصل",
      total_revenue: "إجمالي الإيرادات",
      active_modules: "الوحدات النشطة",
      sync: "متزامن",
      employees: "الموظفين",
      recent_integrations: "التكاملات الأخيرة",
      all: "الكل",
      data_flow: "تدفق البيانات قيد التشغيل",
      task_automation: "أتمتة المهام",
      automation_triggered: "تم تشغيل الأتمتة",
      new_order: "طلب جديد ← تمت الفوترة",
      system_status: "حالة النظام",
      uptime: "وقت التشغيل",
      integration: "التكامل",
      api_ready: "API جاهز"
    },
    stats_section: {
      title: "شركات عملاقة نعمل معها",
      subtitle: "نحن نعمل بتوافق كامل مع البنية التحتية ومقدمي الخدمات وفق المعايير العالمية.",
      main_title_prefix: "ليس مجرد كود،",
      main_title_suffix: "حل متكامل",
      description: "بصفتنا سارفيا، نحن أكثر من مجرد شركة برمجيات. نحن شريكك التكنولوجي الذي يحلل عمليات عملك، ويحدد نقاط الاختناق، ويبني بنيتك الرقمية الخاصة. نحن موجودون في كل نقطة من ERP إلى CRM، ومن IoT إلى الذكاء الاصطناعي.",
      cards: [
        { value: "45+", label: "وحدات وتكاملات", color: "blue" },
        { value: "120+", label: "نظام مكتمل", color: "purple" },
        { value: "%99", label: "وقت تشغيل النظام", color: "green" },
        { value: "24/7", label: "دعم DevOps", color: "orange" }
      ]
    },
    tech_stack: {
      title: "مكدس التكنولوجيا",
      subtitle: "التقنيات التي نستخدمها لبنية تحتية حديثة وموثوقة وقابلة للتوسع.",
      items: [
        { name: "React & Next.js", desc: "واجهات ويب حديثة" },
        { name: "Node.js & Python", desc: "أنظمة خلفية قوية" },
        { name: "AWS & Azure", desc: "حلول البنية التحتية السحابية" },
        { name: "Docker & K8s", desc: "تنسيق الحاويات" },
        { name: "PostgreSQL & MongoDB", desc: "أنظمة قواعد بيانات مرنة" },
        { name: "CI/CD Pipeline", desc: "نشر تلقائي" },
        { name: "Microservices", desc: "تصميم بنية معيارية" },
        { name: "REST & GraphQL", desc: "تطوير API" }
      ]
    },
    faq: {
      title: "أسئلة شائعة",
      subtitle: "الأسئلة المتكررة حول العمليات الفنية وتدفق العمل.",
      questions: [
        {
          question: "نحتاج إلى وحدة خاصة، هل يمكنكم تطويرها؟",
          answer: "بالتأكيد. نحن لسنا بائعي 'برامج جاهزة'، نحن منتجو حلول. سواء كانت أداة تقارير خاصة أو برنامج IoT يتحدث مع الماكينة في مصنعك؛ نحن نبرمج كل وحدة تحتاجها من الصفر لأجلك."
        },
        {
          question: "هل تقومون بالتكامل مع البرامج التي نستخدمها حاليًا؟",
          answer: "نعم. نقوم بتطوير برامج وسيطة يمكنها التحدث مع جميع أنواع الأنظمة من ERP مثل SAP، Logo، Mikro، Netsis إلى CRM مثل Salesforce، Hubspot. بياناتك لا تبقى معزولة، بل تتدفق بين الأنظمة."
        },
        {
          question: "كيف هي عملية الدعم الفني بعد المشروع؟",
          answer: "عملنا لا ينتهي بعد تشغيل البرنامج. ضمن نطاق اتفاقية مستوى الخدمة (SLA)، نقدم مراقبة على مدار 24/7، وتحديثات أمنية، وتدخلات طارئة. نضمن بقاء نظامك قيد التشغيل في جميع الأوقات."
        }
      ]
    },
    cta: {
      title: "هل أنت مستعد لإحياء مشروعك؟",
      description: "دعنا نستمع إلى فكرتك، ونحدد استراتيجيتك، ونبدأ تحولك الرقمي. برمج المستقبل اليوم.",
      button: "اجتماع تحليل مجاني"
    },
    solutions_page: {
      title: "مجموعة واسعة من خدماتنا",
      subtitle: "مهما كانت التكنولوجيا التي تحتاجها، نحن معك بفريقنا الخبير.",
      items: [
        { title: "منصات الويب", desc: "تطبيقات ويب مؤسسية وسريعة وقابلة للتوسع.", tags: ["React", "Next.js", "PWA"] },
        { title: "تطبيقات الجوال", desc: "خذ مكانك في عالم iOS و Android.", tags: ["React Native", "Flutter", "Swift"] },
        { title: "التجارة الإلكترونية و B2B", desc: "بنى تحتية آمنة تزيد من مبيعاتك.", tags: ["تكامل السوق", "الدفع"] },
        { title: "ERP والمخزون", desc: "تحسين عمليات المستودعات والإنتاج والمخزون.", tags: ["باركود", "متابعة الإنتاج", "اللوجستيات"] },
        { title: "حلول CRM", desc: "إدارة علاقات العملاء وقمع المبيعات.", tags: ["المسار", "العرض", "النشاط"] },
        { title: "التكامل (API)", desc: "جسور تربط أنظمة مختلفة.", tags: ["SAP", "Mikro", "Logo", "Nebim"] },
        { title: "الذكاء الاصطناعي (AI)", desc: "استخراج رؤى ذات مغزى من بياناتك.", tags: ["تعلم الآلة", "التنبؤ", "روبوت الدردشة"] },
        { title: "أنظمة IoT", desc: "ربط أجهزتك بالإنترنت وإدارتها.", tags: ["MQTT", "حساس", "أتمتة"] }
      ]
    },
    pricing: {
      title: "نماذج عمل مرنة",
      subtitle: "دعنا نختار نموذج العمل الأنسب لحجم مشروعك.",
      plans: [
        {
          name: "MVP / شركة ناشئة",
          price: "حسب المشروع",
          description: "لرواد الأعمال الذين يرغبون في تحقيق فكرتهم بسرعة.",
          features: ["مجموعة الميزات الأساسية", "وقت سريع للسوق", "بنية قابلة للتوسع", "متوافق مع الويب والجوال", "ضمان 3 أشهر"],
          button: "احصل على معلومات مفصلة"
        },
        {
          name: "التحول المؤسسي",
          price: "تسليم مفتاح",
          description: "للشركات الصغيرة والمتوسطة التي ترغب في رقمنة العمليات الداخلية.",
          tag: "الأكثر تفضيلاً",
          features: ["تحليل وتخطيط مفصل", "وحدات ERP/CRM", "تكامل النظام القديم", "تدريب الموظفين", "ضمان ودعم لمدة عام"],
          button: "احصل على معلومات مفصلة"
        },
        {
          name: "فريق مخصص",
          price: "إيجار شهري",
          description: "فريق برمجيات خاص بك للمشاريع طويلة الأجل.",
          features: ["مطوري كبار خاصين بك", "تخطيط Sprint مرن", "حق الإدارة المباشرة", "تطوير مستمر (CI/CD)", "دعم DevOps 24/7"],
          button: "احصل على معلومات مفصلة"
        }
      ]
    },
    process_page: {
      title: "كيف نعمل؟",
      subtitle: "عملية شفافة ورشيقة في الطريق من الفكرة إلى المنتج.",
      steps: [
        { step: "01", title: "الاكتشاف والتحليل", desc: "نحن نستمع إليك. نقوم بتحليل عمليات عملك وأهدافك ونقاط الألم ونعد وثيقة المتطلبات الفنية." },
        { step: "02", title: "تصميم UX/UI", desc: "بالتركيز على تجربة المستخدم، نصمم واجهات حديثة ومفهومة ومناسبة لهوية علامتك التجارية." },
        { step: "03", title: "التطوير الرشيق", desc: "نتقدم في دورات (Sprints). نقدم لك عرضًا توضيحيًا عاملاً كل أسبوعين ونحصل على ملاحظاتك." },
        { step: "04", title: "الاختبار والتكامل", desc: "نتحقق من كمال النظام من خلال سيناريوهات الاختبار الآلي ومسح الأمان واختبارات الأداء." },
        { step: "05", title: "الإطلاق والدعم", desc: "نقوم بتشغيل النظام، وتقديم التدريب، ثم نحمي صحة النظام من خلال خدمات الصيانة/الإصلاح الخاصة بنا." }
      ]
    },
    about_page: {
      title: "من نحن؟",
      subtitle: "نحن فريق شغوف يرى التكنولوجيا ليس كأداة، بل كفن.",
      office: {
        tag: "مركز البحث والتطوير",
        location: "إسطنبول، مسلك",
        desc: "مقرنا الرئيسي حيث يتم ترميز المشاريع العالمية وينبض قلب الابتكار."
      },
      vision: {
        title: "رؤيتنا",
        p1: "تأسست Sarfea Software لتعظيم الإمكانات الرقمية للشركات. هدفنا هو تحويل عمليات العمل المعقدة إلى برمجيات بسيطة وقابلة للإدارة وذكية.",
        p2: "نحن لا نكتب الكود فقط؛ نحن نبني نماذج أعمال المستقبل. الاستدامة والقابلية للتوسع والأمان موجودة في الحمض النووي لكل سطر كود نطوره."
      },
      values: [
        { title: "التركيز على النتائج", desc: "معايير نجاح قابلة للقياس." },
        { title: "الابتكار", desc: "أحدث التقنيات." }
      ],
      timeline_title: "رحلتنا",
      timeline_subtitle: "قصتنا الممتدة من مكتب صغير إلى شركة تكنولوجيا عالمية.",
      timeline_events: [
        { year: "2018", title: "تأسيس", desc: "بدأت رحلتنا في أنقرة في مكتب صغير مع فريق أساسي من 3 أشخاص." },
        { year: "2019", title: "أول مشروع كبير", desc: "جعلنا اسمنا معروفًا في القطاع من خلال نظام ERP الذي طورناه لشركة لوجستية عالمية." },
        { year: "2021", title: "مركز البحث والتطوير", desc: "انتقلنا إلى مكتب Teknopark وحصلنا على لقب مركز البحث والتطوير الرسمي." },
        { year: "2023", title: "التوسع العالمي", desc: "توسعنا إلى الأسواق الأوروبية والشرق الأوسط وانتقلنا إلى النمو الموجه للتصدير." },
        { year: "2024", title: "استثمار الذكاء الاصطناعي", desc: "بدأنا في إنتاج حلول أعمال ذكية من خلال إنشاء مختبر AI الخاص بنا." }
      ],
      solutions_area_title: "مجالات الحلول",
      solution_areas: [
        { title: "البرمجيات المؤسسية", desc: "أنظمة ERP و CRM التي ترقمن تدفقات العمل الداخلية وتزيد الكفاءة.", items: ["الموارد البشرية", "وحدات التمويل", "إدارة المبيعات"] },
        { title: "حلول التجارة الإلكترونية", desc: "المنصات التي تدمج قنوات البيع عبر الإنترنت وتقدم إدارة المخزون والطلبات.", items: ["B2B & B2C", "مزامنة السوق", "تكامل الدفع"] },
        { title: "نظام الجوال البيئي", desc: "تطبيقات جوال Native و Cross-platform لنظامي iOS و Android.", items: ["React Native", "Flutter", "PWA"] },
        { title: "الذكاء الاصطناعي وتعلم الآلة", desc: "أنظمة ذكية تتعلم من بياناتك وتتنبأ وتحسن.", items: ["روبوت الدردشة", "التنبؤ", "NLP"] },
        { title: "IoT والأتمتة", desc: "حلول تربط أجهزتك بالإنترنت وتوفر التحكم والمراقبة عن بعد.", items: ["تكامل المستشعر", "MQTT", "المراقبة الفورية"] },
        { title: "الأمان و DevOps", desc: "خدمات البنية التحتية والأمان التي تضمن بقاء نظامك قيد التشغيل 24/7.", items: ["اختبار الاختراق", "CI/CD", "المراقبة"] }
      ]
    },
    contact_page: {
      title: "لنبدأ المشروع",
      subtitle: "املأ النموذج أو اتصل بنا لمقابلة فريقنا الفني.",
      form: {
          title: "نموذج الطلب",
          name: "الاسم واللقب",
          name_ph: "الاسم واللقب",
          email: "عنوان بريدك الإلكتروني",
          email_ph: "example@company.com",
          type: "نوع المشروع",
          details: "تفاصيل المشروع",
          details_ph: "تحدث عن مشروعك وأهدافك والميزات التي تحتاجها...",
          submit: "طلب عرض",
          submitting: "جار الإرسال..."
      },
      info: {
          title: "قنوات الاتصال",
          email: "البريد الإلكتروني",
          phone: "الهاتف",
          hq: "المقر الرئيسي",
          address: "أوفاجيك، شارع يوزغات رقم: 20، 06280 كيتشي/أنقرة",
          hours_label: "ساعات العمل",
          hours: "الاثنين - الجمعة: 09:00 - 18:00",
          directions: "احصل على الاتجاهات"
      }
    },
    calculator: {
      step1_title: "محدد نطاق المشروع",
      step1_desc: "اختر الوحدات التي تحتاجها.",
      step2_title: "نموذج العرض",
      step2_desc: "أدخل تفاصيل الاتصال الخاصة بك، دعنا نرسل عرضك.",
      options: [
        { label: 'منصة ويب مؤسسية', category: 'منصة' },
        { label: 'تطبيق جوال أصلي', category: 'منصة' },
        { label: 'إدارة عملاء/CRM خاص', category: 'برمجيات' },
        { label: 'إدارة ERP والمخزون', category: 'برمجيات' },
        { label: 'تكاملات طرف ثالث', category: 'تكامل' },
        { label: 'أنظمة الدفع', category: 'تكامل' },
        { label: 'الذكاء الاصطناعي والتحليلات', category: 'تكنولوجيا متقدمة' },
        { label: 'اتصال IoT والأجهزة', category: 'تكنولوجيا متقدمة' },
        { label: 'أمان عالي وتسجيل', category: 'بنية تحتية' }
      ],
      selected_scope: "النطاق المحدد:",
      no_module: "لم يتم تحديد وحدة.",
      name: "الاسم واللقب",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      notes: "ملاحظات إضافية (اختياري)",
      notes_ph: "إذا كان لديك أي شيء لتضيفه...",
      selected_count: "عدد الوحدات المحددة:",
      pieces: "قطع",
      continue: "الاستمرار لإنشاء العرض",
      submit: "إرسال عرض النطاق",
      submitting: "جار الإرسال...",
      success: "تم استلام عرض النطاق الخاص بك بنجاح. سنتصل بك.",
      error: "حدث خطأ."
    },
    cookie: {
      title: "سياسة ملفات تعريف الارتباط",
      text: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. باستخدام موقعنا، تعتبر أنك قبلت ذلك.",
      accept: "قبول",
      reject: "رفض"
    },
    newsletter: {
      title: "اشترك في نشرتنا التقنية",
      text: "انضم إلى نشرتنا الإخبارية للحصول على أحدث اتجاهات التكنولوجيا، وأخبار من عالم البرمجيات، وتحديثات من Sarfea.",
      placeholder: "عنوان بريدك الإلكتروني",
      button: "اشترك"
    },
    footer: {
      slogan: "نحن نبرمج المستقبل. ننتج حلول برمجيات مبتكرة ومستدامة ستأخذ عملك خطوة للأمام في العالم الرقمي.",
      sitemap: "خريطة الموقع",
      corporate: "الشركة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      kvkk: "توضيح KVKK",
      careers: "وظائف",
      rights: "© 2024 Sarfea Software Technologies Inc. جميع الحقوق محفوظة."
    },
    toast: {
        title: "تم استلام الطلب!",
        success_contact: "تم إرسال تفاصيل مشروعك إلى فريقنا الفني. سنعود إليك في أقرب وقت ممكن.",
        error_connection: "خطأ في الاتصال. يرجى التحقق من الإنترنت."
    },
    whatsapp: {
      label: "دعم واتساب",
      message: "مرحباً، أريد الحصول على معلومات حول مشاريعكم."
    },
    projects_page: {
      title: "قصص النجاح",
      subtitle: "تجارب رقمية حولناها من فكرة إلى واقع.",
      stat_revenue: "نمو الإيرادات",
      stat_efficiency: "كفاءة",
      stat_users: "مستخدم نشط",
      btn_detail: "تفاصيل"
    },
    blog_page: {
      title: "مجلة التكنولوجيا",
      subtitle: "أحدث الاتجاهات في عالم البرمجيات، والتحليلات الفنية، ورؤى القطاع.",
      read_more: "اقرأ المزيد",
      popular: "شائع",
      categories: {
        all: "الكل",
        dev: "تطوير البرمجيات",
        ai: "الذكاء الاصطناعي",
        trend: "اتجاهات"
      }
    }
  },
  fr: {
    navbar: {
      home: "Accueil",
      solutions: "Technologies",
      process: "Processus",
      about: "Entreprise",
      contact: "Contact",
      startProject: "Lancer le Projet",
      darkMode: "Mode Sombre",
      lightMode: "Mode Clair"
    },
    hero: {
      tag: "Sarfea Enterprise v5.0 En Direct",
      title_prefix: "Sans Limites",
      title_suffix: "Écosystèmes Numériques",
      description: "Intégrations Web, Mobile, ERP, CRM, IA et IoT. Nous codons tout ce dont votre entreprise a besoin sous un même toit.",
      btn_start: "Commençons",
      btn_scope: "Définir le Périmètre",
      references: "Références Corporatives"
    },
    crm_preview: {
      dashboard: "Tableau de Bord",
      overview: "Aperçu",
      system_online: "Système En Ligne",
      total_revenue: "Revenu Total",
      active_modules: "Modules Actifs",
      sync: "Synchronisé",
      employees: "Employés",
      recent_integrations: "Intégrations Récentes",
      all: "Tout",
      data_flow: "Flux de Données Actif",
      task_automation: "Automatisation des Tâches",
      automation_triggered: "Automatisation Déclenchée",
      new_order: "Nouvelle Commande -> Facturée",
      system_status: "État du Système",
      uptime: "Disponibilité",
      integration: "Intégration",
      api_ready: "API Prête"
    },
    stats_section: {
      title: "Des Géants Avec Qui Nous Travaillons",
      subtitle: "Nous travaillons en totale conformité avec les fournisseurs d'infrastructure et de services aux normes mondiales.",
      main_title_prefix: "Pas Juste du Code,",
      main_title_suffix: "Une Solution Complète",
      description: "En tant que Sarfea, nous sommes plus qu'une simple entreprise de logiciels. Nous sommes votre partenaire technologique qui analyse vos processus métier, identifie les goulots d'étranglement et construit votre architecture numérique propriétaire. Nous sommes à chaque point, de l'ERP au CRM, de l'IoT à l'IA.",
      cards: [
        { value: "45+", label: "Modules & Intégrations", color: "blue" },
        { value: "120+", label: "Systèmes Terminés", color: "purple" },
        { value: "%99", label: "Disponibilité Système", color: "green" },
        { value: "24/7", label: "Support DevOps", color: "orange" }
      ]
    },
    tech_stack: {
      title: "Pile Technologique",
      subtitle: "Les technologies que nous utilisons pour une infrastructure moderne, fiable et évolutive.",
      items: [
        { name: "React & Next.js", desc: "Interfaces Web Modernes" },
        { name: "Node.js & Python", desc: "Backends Puissants" },
        { name: "AWS & Azure", desc: "Solutions Cloud" },
        { name: "Docker & K8s", desc: "Orchestration de Conteneurs" },
        { name: "PostgreSQL & MongoDB", desc: "Bases de Données Flexibles" },
        { name: "CI/CD Pipeline", desc: "Déploiement Automatisé" },
        { name: "Microservices", desc: "Architecture Modulaire" },
        { name: "REST & GraphQL", desc: "Développement d'API" }
      ]
    },
    faq: {
      title: "FAQ",
      subtitle: "Questions fréquemment posées sur les processus techniques et le flux de travail.",
      questions: [
        {
          question: "Nous avons besoin d'un module spécial, pouvez-vous le développer ?",
          answer: "Absolument. Nous ne sommes pas des vendeurs de 'logiciels emballés', nous sommes des producteurs de solutions. Que ce soit un outil de reporting spécial ou un logiciel IoT qui communique avec les machines de votre usine ; nous codons chaque module dont vous avez besoin à partir de zéro pour vous."
        },
        {
          question: "Vous intégrez-vous aux logiciels que nous utilisons actuellement ?",
          answer: "Oui. Nous développons des logiciels intermédiaires capables de communiquer avec toutes sortes de systèmes, des ERP comme SAP, Logo, Mikro, Netsis aux CRM comme Salesforce, Hubspot. Vos données ne restent pas cloisonnées, elles circulent entre les systèmes."
        },
        {
          question: "Comment se déroule le support technique après le projet ?",
          answer: "Notre travail ne se termine pas une fois le logiciel en ligne. Dans le cadre de notre contrat de niveau de service (SLA), nous offrons une surveillance 24/7, des mises à jour de sécurité et des interventions d'urgence. Nous garantissons que votre système reste opérationnel à tout moment."
        }
      ]
    },
    cta: {
      title: "Prêt à Donner Vie à Votre Projet ?",
      description: "Écoutons votre idée, déterminons votre stratégie et commençons votre transformation numérique. Codez l'avenir aujourd'hui.",
      button: "Réunion d'Analyse Gratuite"
    },
    solutions_page: {
      title: "Notre Large Gamme de Services",
      subtitle: "Quelle que soit la technologie dont vous avez besoin, nous sommes là avec notre équipe d'experts.",
      items: [
        { title: "Plateformes Web", desc: "Applications web d'entreprise, rapides et évolutives.", tags: ["React", "Next.js", "PWA"] },
        { title: "Applications Mobiles", desc: "Prenez votre place dans le monde iOS et Android.", tags: ["React Native", "Flutter", "Swift"] },
        { title: "E-Commerce & B2B", desc: "Infrastructures sécurisées qui augmentent vos ventes.", tags: ["Sync Marketplace", "Paiement"] },
        { title: "ERP & Inventaire", desc: "Optimisez les processus d'entrepôt, de production et de stock.", tags: ["Code-barres", "Suivi Prod", "Logistique"] },
        { title: "Solutions CRM", desc: "Gestion de la relation client et entonnoir de vente.", tags: ["Pipeline", "Offre", "Activité"] },
        { title: "Intégration (API)", desc: "Des ponts reliant différents systèmes.", tags: ["SAP", "Mikro", "Logo", "Nebim"] },
        { title: "IA & Machine Learning", desc: "Tirez des informations significatives de vos données.", tags: ["ML", "Prédiction", "Chatbot"] },
        { title: "Systèmes IoT", desc: "Connectez vos appareils à Internet et gérez-les.", tags: ["MQTT", "Capteur", "Automatisation"] }
      ]
    },
    pricing: {
      title: "Modèles Commerciaux Flexibles",
      subtitle: "Choisissons le modèle de travail le plus adapté à la taille de votre projet.",
      plans: [
        {
          name: "MVP / Startup",
          price: "Par Projet",
          description: "Pour les entrepreneurs qui veulent réaliser leur idée rapidement.",
          features: ["Ensemble de Fonctionnalités de Base", "Mise sur le Marché Rapide", "Architecture Évolutive", "Compatible Web & Mobile", "Garantie de 3 Mois"],
          button: "Obtenir des Détails"
        },
        {
          name: "Transformation Entreprise",
          price: "Clé en Main",
          description: "Pour les PME qui souhaitent numériser leurs processus internes.",
          tag: "Le Plus Préféré",
          features: ["Analyse & Planification Détaillées", "Modules ERP/CRM", "Intégration Système Hérité", "Formation du Personnel", "Garantie & Support d'1 an"],
          button: "Obtenir des Détails"
        },
        {
          name: "Équipe Dédiée",
          price: "Location Mensuelle",
          description: "Votre propre équipe logicielle pour les projets à long terme.",
          features: ["Développeurs Seniors Privés", "Planification Sprint Flexible", "Droit de Gestion Directe", "Dév Continu (CI/CD)", "Support DevOps 24/7"],
          button: "Obtenir des Détails"
        }
      ]
    },
    process_page: {
      title: "Comment Travaillons-Nous ?",
      subtitle: "Un processus transparent et agile de l'idée au produit.",
      steps: [
        { step: "01", title: "Découverte & Analyse", desc: "Nous vous écoutons. Nous analysons vos processus métier, vos objectifs et vos points faibles et préparons le document des exigences techniques." },
        { step: "02", title: "Conception UX/UI", desc: "En mettant l'expérience utilisateur au centre, nous concevons des interfaces modernes, compréhensibles et adaptées à votre identité de marque." },
        { step: "03", title: "Dév Agile", desc: "Nous avançons par sprints. Toutes les deux semaines, nous vous présentons une démo fonctionnelle et recueillons vos commentaires." },
        { step: "04", title: "Test & Intégration", desc: "Nous vérifions la perfection du système avec des scénarios de test automatisés, des analyses de sécurité et des tests de performance." },
        { step: "05", title: "Mise en Ligne & Support", desc: "Nous mettons le système en service, dispensons les formations, puis protégeons la santé du système avec nos services de maintenance." }
      ]
    },
    about_page: {
      title: "Qui Sommes-Nous ?",
      subtitle: "Nous sommes une équipe passionnée qui considère la technologie non pas comme un outil, mais comme un art.",
      office: {
        tag: "Centre R&D",
        location: "Istanbul, Maslak",
        desc: "Notre siège social où les projets mondiaux sont codés et où bat le cœur de l'innovation."
      },
      vision: {
        title: "Notre Vision",
        p1: "Sarfea Software a été fondée pour maximiser le potentiel numérique des entreprises. Notre objectif est de transformer des processus métier complexes en logiciels simples, gérables et intelligents.",
        p2: "Nous n'écrivons pas seulement du code ; nous construisons les modèles commerciaux du futur. La durabilité, l'évolutivité et la sécurité sont dans l'ADN de chaque ligne de code que nous développons."
      },
      values: [
        { title: "Orienté Résultats", desc: "Critères de réussite mesurables." },
        { title: "Innovation", desc: "Les toutes dernières technologies." }
      ],
      timeline_title: "Notre Parcours",
      timeline_subtitle: "Notre histoire, s'étendant d'un petit bureau à une entreprise technologique mondiale.",
      timeline_events: [
        { year: "2018", title: "Fondation", desc: "Notre voyage a commencé à Ankara dans un petit bureau avec une équipe de base de 3 personnes." },
        { year: "2019", title: "Premier Grand Projet", desc: "Nous nous sommes fait connaître dans le secteur avec le système ERP que nous avons développé pour une entreprise logistique mondiale." },
        { year: "2021", title: "Centre R&D", desc: "Nous avons déménagé au bureau Technoparc et avons reçu le titre de Centre R&D officiel." },
        { year: "2023", title: "Expansion Mondiale", desc: "Nous nous sommes étendus aux marchés européens et moyen-orientaux et sommes passés à une croissance axée sur l'exportation." },
        { year: "2024", title: "Investissement IA", desc: "Nous avons commencé à produire des solutions commerciales intelligentes en créant notre laboratoire d'IA." }
      ],
      solutions_area_title: "Domaines de Solution",
      solution_areas: [
        { title: "Logiciels d'Entreprise", desc: "Systèmes ERP et CRM qui numérisent les flux de travail internes et augmentent l'efficacité.", items: ["Ressources Humaines", "Modules Finance", "Gestion des Ventes"] },
        { title: "Solutions E-Commerce", desc: "Plateformes intégrant les canaux de vente en ligne et offrant une gestion des stocks et des commandes.", items: ["B2B & B2C", "Sync Marketplace", "Intégration Paiement"] },
        { title: "Écosystème Mobile", desc: "Applications mobiles natives et multiplateformes pour iOS et Android.", items: ["React Native", "Flutter", "PWA"] },
        { title: "IA & Machine Learning", desc: "Systèmes intelligents qui apprennent de vos données, prédisent et optimisent.", items: ["Chatbot", "Prédiction", "NLP"] },
        { title: "IoT & Automatisation", desc: "Solutions connectant vos appareils à Internet et offrant contrôle et surveillance à distance.", items: ["Intégration Capteurs", "MQTT", "Monitoring Temps Réel"] },
        { title: "Sécurité & DevOps", desc: "Services d'infrastructure et de sécurité garantissant que votre système reste opérationnel 24/7.", items: ["Tests d'Intrusion", "CI/CD", "Monitoring"] }
      ]
    },
    contact_page: {
      title: "Lançons le Projet",
      subtitle: "Remplissez le formulaire ou appelez-nous pour rencontrer notre équipe technique.",
      form: {
          title: "Formulaire de Demande",
          name: "Nom Prénom",
          name_ph: "Nom Prénom",
          email: "Votre Adresse E-mail",
          email_ph: "exemple@societe.com",
          type: "Type de Projet",
          details: "Détails du Projet",
          details_ph: "Parlez de votre projet, de vos objectifs et des fonctionnalités dont vous avez besoin...",
          submit: "Demander une Offre",
          submitting: "Envoi en cours..."
      },
      info: {
          title: "Canaux de Communication",
          email: "E-mail",
          phone: "Téléphone",
          hq: "Siège Social",
          address: "Ovacik, Yozgat Blv. No: 20, 06280 Kecioren/Ankara",
          hours_label: "Heures de Travail",
          hours: "Lun - Ven: 09:00 - 18:00",
          directions: "Obtenir l'Itinéraire"
      }
    },
    calculator: {
      step1_title: "Délimiteur de Périmètre",
      step1_desc: "Choisissez les modules dont vous avez besoin.",
      step2_title: "Formulaire d'Offre",
      step2_desc: "Entrez vos coordonnées, laissez-nous vous envoyer votre offre.",
      options: [
        { label: 'Plateforme Web Entreprise', category: 'Plateforme' },
        { label: 'App Mobile Native', category: 'Plateforme' },
        { label: 'CRM / Gestion Client', category: 'Logiciel' },
        { label: 'ERP & Gestion Stock', category: 'Logiciel' },
        { label: 'Intégrations Tiers', category: 'Intégration' },
        { label: 'Systèmes de Paiement', category: 'Intégration' },
        { label: 'IA & Analytique', category: 'Technologie Avancée' },
        { label: 'IoT & Connexion Appareil', category: 'Technologie Avancée' },
        { label: 'Haute Sécurité & Log', category: 'Infrastructure' }
      ],
      selected_scope: "Périmètre Sélectionné :",
      no_module: "Aucun module sélectionné.",
      name: "Nom Prénom",
      email: "E-mail",
      phone: "Téléphone",
      notes: "Notes Supplémentaires (Optionnel)",
      notes_ph: "Si vous avez quelque chose à ajouter...",
      selected_count: "Nombre de modules sélectionnés :",
      pieces: "pièces",
      continue: "Continuer pour Créer l'Offre",
      submit: "Envoyer l'Offre de Périmètre",
      submitting: "Envoi en cours...",
      success: "Votre offre de périmètre a été reçue avec succès. Nous vous contacterons.",
      error: "Une erreur est survenue."
    },
    cookie: {
      title: "Politique de Cookies",
      text: "Nous utilisons des cookies pour améliorer votre expérience. En utilisant notre site, vous acceptez cela.",
      accept: "Accepter",
      reject: "Refuser"
    },
    newsletter: {
      title: "Abonnez-vous à Notre Bulletin Tech",
      text: "Rejoignez notre newsletter pour les dernières tendances technologiques, les nouvelles du monde logiciel et les mises à jour de Sarfea.",
      placeholder: "Votre adresse e-mail",
      button: "S'abonner"
    },
    footer: {
      slogan: "Nous codons l'avenir. Nous produisons des solutions logicielles innovantes et durables qui feront avancer votre entreprise dans le monde numérique.",
      sitemap: "Plan du Site",
      corporate: "Entreprise",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      kvkk: "Clarification KVKK",
      careers: "Carrières",
      rights: "© 2024 Sarfea Software Technologies Inc. Tous droits réservés."
    },
    toast: {
        title: "Demande Reçue !",
        success_contact: "Les détails de votre projet ont été transmis à notre équipe technique. Nous vous répondrons dès que possible.",
        error_connection: "Erreur de connexion. Veuillez vérifier votre internet."
    }
  },
  ku: {
    navbar: {
      home: "Mal",
      solutions: "Teknolojî",
      process: "Pêvajo",
      about: "Pargîdanî",
      contact: "Têkilî",
      startProject: "Projeyê Destpêke",
      darkMode: "Moda Tarî",
      lightMode: "Moda Ronahî"
    },
    hero: {
      tag: "Sarfea Enterprise v5.0 Zindî ye",
      title_prefix: "Bê Sînor",
      title_suffix: "Ekosîstemên Dîjîtal",
      description: "Entîgrasyonên Web, Mobîl, ERP, CRM, AI û IoT. Em her tiştê ku pargîdaniya we hewce dike di bin yek banî de kod dikin.",
      btn_start: "Werin dest pê bikin",
      btn_scope: "Kapsamê Diyar Bike",
      references: "Referansên Pargîdanî"
    },
    crm_preview: {
      dashboard: "Panela Kontrolê",
      overview: "Pêşdîtin",
      system_online: "Sîstem Serhêl e",
      total_revenue: "Dahata Giştî",
      active_modules: "Modûlên Çalak",
      sync: "Senkronîze",
      employees: "Karmend",
      recent_integrations: "Entîgrasyonên Dawî",
      all: "Hemû",
      data_flow: "Herikîna Daneyan Çalak e",
      task_automation: "Otomasyona Peywiran",
      automation_triggered: "Otomasyon Tetiklendi",
      new_order: "Siparîşa Nû -> Fatûre Hat Birîn",
      system_status: "Rewşa Sîstemê",
      uptime: "Demê Xebatê",
      integration: "Entîgrasyon",
      api_ready: "API Amade ye"
    },
    stats_section: {
      title: "Devên Ku Em Bi Wan Re Dixebitin",
      subtitle: "Em li gorî standardên cîhanî bi peydakerên binesazî û karûbaran re bi tevahî lihevhatî dixebitin.",
      main_title_prefix: "Ne Tenê Kod,",
      main_title_suffix: "Çareseriyek Temam",
      description: "Wekî Sarfea, em ji pargîdaniyek nermalavê wêdetir in. Em şirîkê we yê teknolojiyê ne ku pêvajoyên karsaziya we analîz dike, tengasiyan diyar dike û mîmariya weya dîjîtal a taybet ava dike. Em li her nuqteyê ne, ji ERP heya CRM, ji IoT heya AI.",
      cards: [
        { value: "45+", label: "Modûl & Entîgrasyon", color: "blue" },
        { value: "120+", label: "Sîstema Temamkirî", color: "purple" },
        { value: "%99", label: "Demê Xebata Sîstemê", color: "green" },
        { value: "24/7", label: "Piştgiriya DevOps", color: "orange" }
      ]
    },
    tech_stack: {
      title: "Staka Teknolojiyê",
      subtitle: "Teknolojiyên ku em ji bo binesaziyek nûjen, pêbawer û berfirehkirî bikar tînin.",
      items: [
        { name: "React & Next.js", desc: "Navrûyên Webê Yên Nûjen" },
        { name: "Node.js & Python", desc: "Backendên Hêzdar" },
        { name: "AWS & Azure", desc: "Çareseriyên Ewrê" },
        { name: "Docker & K8s", desc: "Orkestrasyona Konteyneran" },
        { name: "PostgreSQL & MongoDB", desc: "Daneyên Daneyan ên Dijwar" },
        { name: "CI/CD Pipeline", desc: "Belavkirina Xweser" },
        { name: "Microservices", desc: "Mîmariya Moduler" },
        { name: "REST & GraphQL", desc: "Pêşkeftina API" }
      ]
    },
    faq: {
      title: "Pirsên Pir Tên Pirsîn",
      subtitle: "Pirsên ku li ser pêvajoyên teknîkî û herikîna kar têne pirsîn.",
      questions: [
        {
          question: "Pêdiviya me bi modûlek taybet heye, hûn dikarin pêş bixin?",
          answer: "Bêguman. Em ne firoşkarên 'nermalava pakêt' in, em hilberînerên çareseriyê ne. Çi amûrek raporê ya taybet be an nermalava IoT ya ku bi makîneya kargeha we re diaxive; em her modûla ku hûn hewce ne ji bo we ji sifirê kod dikin."
        },
        {
          question: "Hûn bi nermalava ku em niha bikar tînin re entegre dibin?",
          answer: "Erê. Em nermalava navbeynkar pêş dixin ku dikare bi her cûre sîsteman re biaxive, ji ERP-yên mîna SAP, Logo, Mikro, Netsis bigire heya CRM-yên mîna Salesforce, Hubspot. Daneyên we nayên veqetandin, ew di navbera sîsteman de diherikin."
        },
        {
          question: "Piştgiriya teknîkî piştî projeyê çawa ye?",
          answer: "Karê me piştî ku nermalav zindî bûna bi dawî nabe. Di çarçoveya peymana asta karûbarê (SLA) de, em çavdêriya 24/7, nûvekirinên ewlehiyê û destwerdanên lezgîn pêşkêş dikin. Em garantî dikin ku sîstema we her dem çalak bimîne."
        }
      ]
    },
    cta: {
      title: "Hûn Amade ne Ku Projeya Xwe Zindî Bikin?",
      description: "Werin em guh bidin ramana we, stratejiya we diyar bikin û veguherîna weya dîjîtal bidin destpêkirin. Pêşerojê îro kod bikin.",
      button: "Civîna Analîzê ya Belaş"
    },
    solutions_page: {
      title: "Rêjeya Berfireh a Karûbarên Me",
      subtitle: "Teknolojiya ku hûn hewce ne çi dibe bila bibe, em bi tîmê xwe yê pispor re bi we re ne.",
      items: [
        { title: "Platformên Web", desc: "Serîlêdanên webê yên pargîdanî, bilez û berfirehkirî.", tags: ["React", "Next.js", "PWA"] },
        { title: "Serîlêdanên Mobîl", desc: "Di cîhana iOS û Android-ê de cihê xwe bigirin.", tags: ["React Native", "Flutter", "Swift"] },
        { title: "E-Bazirganî & B2B", desc: "Binesaziyên ewledar ku firotanên we zêde dikin.", tags: ["Marketplace Sync", "Dayîn"] },
        { title: "ERP & Envanter", desc: "Pêvajoyên depo, hilberîn û stokê xweşbîn bikin.", tags: ["Barkod", "Şopandina Hilberînê", "Lojîstîk"] },
        { title: "Çareseriyên CRM", desc: "Birêvebirina têkiliyên xerîdar û kovika firotanê.", tags: ["Pipeline", "Pêşniyar", "Çalakî"] },
        { title: "Entîgrasyon (API)", desc: "Pireyên ku sîstemên cûda girêdidin.", tags: ["SAP", "Mikro", "Logo", "Nebim"] },
        { title: "AI & Fêrbûna Makîne", desc: "Ji daneyên xwe têgihiştinên watedar derxînin.", tags: ["ML", "Pêşbînî", "Chatbot"] },
        { title: "Sîstemên IoT", desc: "Amûrên xwe bi înternetê ve girêbidin û birêve bibin.", tags: ["MQTT", "Sensor", "Otomasyon"] }
      ]
    },
    pricing: {
      title: "Modelên Karsaziya Guherbar",
      subtitle: "Werin em modela xebatê ya herî guncaw ji bo mezinahiya projeya we hilbijêrin.",
      plans: [
        {
          name: "MVP / Startup",
          price: "Li Gorî Projeyê",
          description: "Ji bo karsazên ku dixwazin ramana xwe zû pêk bînin.",
          features: ["Koma Taybetmendiyên Bingehîn", "Demê Bazarê Zû", "Mîmariya Berfirehkirî", "Lihevhatî bi Web & Mobîl", "Garantîya 3 Mehan"],
          button: "Agahiyên Berfireh Bistînin"
        },
        {
          name: "Veguherîna Pargîdanî",
          price: "Mifte Teslîm",
          description: "Ji bo PME-yên ku dixwazin pêvajoyên navxweyî dîjîtal bikin.",
          tag: "Ya Herî Bijartî",
          features: ["Analîz & Plankirina Berfireh", "Modûlên ERP/CRM", "Entîgrasyona Sîstema Kev", "Perwerdehiya Karmendan", "Garantî & Piştgiriya 1 Sal"],
          button: "Agahiyên Berfireh Bistînin"
        },
        {
          name: "Tîma Taybet",
          price: "Kirêya Mehane",
          description: "Tîma weya nermalavê ya taybet ji bo projeyên demdirêj.",
          features: ["Pêşdebirên Senior ên Taybet", "Plankirina Sprint a Guherbar", "Mafê Birêvebirina Rasterast", "Pêşveçûna Berdewam (CI/CD)", "Piştgiriya DevOps 24/7"],
          button: "Agahiyên Berfireh Bistînin"
        }
      ]
    },
    process_page: {
      title: "Em Çawa Dixebitin?",
      subtitle: "Pêvajoyek şefaf û çeleng ji ramanê heya hilberê.",
      steps: [
        { step: "01", title: "Vedîtin & Analîz", desc: "Em guh didin we. Em pêvajoyên karsaziya we, armanc û xalên êşê analîz dikin û belgeya hewcedariyên teknîkî amade dikin." },
        { step: "02", title: "Sêwirana UX/UI", desc: "Bi balkişandina li ser ezmûna bikarhêner, em navrûyên nûjen, têgihiştî û li gora nasnameya marqeya we sêwiran dikin." },
        { step: "03", title: "Pêşdebirina Çeleng", desc: "Em di dewreyan de (Sprints) pêşve diçin. Her du hefteyan carekê, em demoyek xebitandinê pêşkêşî we dikin û nerînên we distînin." },
        { step: "04", title: "Test & Entîgrasyon", desc: "Em bi senaryoyên testê yên xweser, lêgerînên ewlehiyê û testên performansê ve kamilbûna sîstemê piştrast dikin." },
        { step: "05", title: "Zindîbûn & Piştgirî", desc: "Em sîstemê dixin meriyetê, perwerdehiyê didin û dûv re bi karûbarên lênihêrîn/tamîrkirinê tenduristiya sîstemê diparêzin." }
      ]
    },
    about_page: {
      title: "Em Kî Ne?",
      subtitle: "Em tîmek dilxwaz in ku teknolojiyê ne wekî amûrek, lê wekî hunerek dibînin.",
      office: {
        tag: "Navenda Ar-Ge",
        location: "Stenbol, Maslak",
        desc: "Navenda me ya sereke ku projeyên gerdûnî têne kodkirin û dilê nûbûnê lê lê dide."
      },
      vision: {
        title: "Dîtina Me",
        p1: "Sarfea Software ji bo zêdekirina potansiyela dîjîtal a karsaziyan hate damezrandin. Armanca me ew e ku em pêvajoyên karsaziya tevlihev veguherînin nermalava hêsan, birêvebirin û jîr.",
        p2: "Em ne tenê kod dinivîsin; em modelên karsaziya pêşerojê ava dikin. Berdewamî, berfirehbûn û ewlehî di DNA-ya her rêzika kodê ya ku em pêş dixin de heye."
      },
      values: [
        { title: "Balkişandina li ser Encamê", desc: "Pîvanên serkeftinê yên pîvandî." },
        { title: "Nûbûn", desc: "Teknolojiyên herî nû." }
      ],
      timeline_title: "Rêwîtiya Me",
      timeline_subtitle: "Çîroka me ya ku ji ofîsek piçûk berbi pargîdaniyek teknolojiyê ya gerdûnî ve dirêj dibe.",
      timeline_events: [
        { year: "2018", title: "Damezrandin", desc: "Rêwîtiya me li Enqereyê di ofîsek piçûk de bi tîmek bingehîn a 3 kesan dest pê kir." },
        { year: "2019", title: "Yekem Projeya Mezin", desc: "Me bi pergala ERP ya ku ji bo pargîdaniyek lojîstîk a cîhanî pêşxist, navê xwe di sektorê de da bihîstin." },
        { year: "2021", title: "Navenda Ar-Ge", desc: "Em derbasî ofîsa Teknoparkê bûn û me sernavê Navenda Ar-Ge ya fermî wergirt." },
        { year: "2023", title: "Berfirehbûna Gerdûnî", desc: "Em li bazarên Ewropa û Rojhilata Navîn belav bûn û derbasî mezinbûna hinardekirinê bûn." },
        { year: "2024", title: "Veberhênana AI", desc: "Bi avakirina laboratuwara xweya AI-yê, me dest bi hilberandina çareseriyên karsaziya jîr kir." }
      ],
      solutions_area_title: "Qadên Çareseriyê",
      solution_areas: [
        { title: "Nermalava Pargîdanî", desc: "Pergalên ERP û CRM ku herikîna karê navxweyî dîjîtal dikin û karîgeriyê zêde dikin.", items: ["Çavkaniyên Mirovan", "Modûlên Fînansê", "Rêveberiya Firotanê"] },
        { title: "Çareseriyên E-Bazirganî", desc: "Platformên ku kanalên firotana serhêl entegre dikin û rêveberiya stok û siparîşê pêşkêş dikin.", items: ["B2B & B2C", "Marketplace Sync", "Entîgrasyona Dayînê"] },
        { title: "Ekosîstema Mobîl", desc: "Serîlêdanên mobîl ên Native û Cross-platform ji bo iOS û Android.", items: ["React Native", "Flutter", "PWA"] },
        { title: "AI & Fêrbûna Makîne", desc: "Pergalên jîr ku ji daneyên we fêr dibin, pêşbînî dikin û xweşbîn dikin.", items: ["Chatbot", "Pêşbînî", "NLP"] },
        { title: "IoT & Otomasyon", desc: "Çareseriyên ku amûrên we bi înternetê ve girêdidin û kontrol û çavdêriya ji dûr ve pêşkêş dikin.", items: ["Entîgrasyona Sensor", "MQTT", "Çavdêriya Demê Rastîn"] },
        { title: "Ewlehî & DevOps", desc: "Karûbarên binesazî û ewlehiyê yên ku piştrast dikin ku pergala we 24/7 çalak bimîne.", items: ["Testa Penetrasyonê", "CI/CD", "Çavdêrî"] }
      ]
    },
    contact_page: {
      title: "Projeyê Destpêke",
      subtitle: "Formê tije bikin an ji bo hevdîtina bi tîmê me yê teknîkî re telefonî me bikin.",
      form: {
          title: "Forma Daxwazê",
          name: "Nav Paşnav",
          name_ph: "Nav Paşnav",
          email: "Navnîşana E-nameya We",
          email_ph: "mînak@pargîdanî.com",
          type: "Cûreyê Projeyê",
          details: "Agahiyên Projeyê",
          details_ph: "Li ser projeya xwe, armancên xwe û taybetmendiyên ku hûn hewce ne biaxivin...",
          submit: "Pêşniyar Bixwaze",
          submitting: "Tê şandin..."
      },
      info: {
          title: "Kanalên Têkiliyê",
          email: "E-name",
          phone: "Telefon",
          hq: "Navenda Sereke",
          address: "Ovacik, Yozgat Blv. No: 20, 06280 Kecioren/Ankara",
          hours_label: "Saetên Xebatê",
          hours: "Duşem - În: 09:00 - 18:00",
          directions: "Rê tarîf bike"
      }
    },
    calculator: {
      step1_title: "Diyarkerê Kapsamê",
      step1_desc: "Modûlên ku hûn hewce ne hilbijêrin.",
      step2_title: "Forma Pêşniyarê",
      step2_desc: "Agahiyên têkiliya xwe binivîsin, em pêşniyara we bişînin.",
      options: [
        { label: 'Platforma Webê ya Pargîdanî', category: 'Platform' },
        { label: 'Serîlêdana Mobîl a Native', category: 'Platform' },
        { label: 'Birêvebirina Xerîdar / CRM', category: 'Nermalav' },
        { label: 'Birêvebirina ERP & Stok', category: 'Nermalav' },
        { label: 'Entîgrasyonên Aliyê Sêyemîn', category: 'Entîgrasyon' },
        { label: 'Pergalên Dayînê', category: 'Entîgrasyon' },
        { label: 'AI & Analîtîk', category: 'Teknolojiya Pêşkeftî' },
        { label: 'IoT & Girêdana Amûrê', category: 'Teknolojiya Pêşkeftî' },
        { label: 'Ewlehiya Bilind & Log', category: 'Binesazî' }
      ],
      selected_scope: "Kapsama Hilbijartî:",
      no_module: "Tu modûl nehat hilbijartin.",
      name: "Nav Paşnav",
      email: "E-name",
      phone: "Telefon",
      notes: "Nîşeyên Zêde (Bijarî)",
      notes_ph: "Heke tiştek ku hûn dixwazin lê zêde bikin hebe...",
      selected_count: "Hejmara Modûlên Hilbijartî:",
      pieces: "perçe",
      continue: "Ji bo Afirandina Pêşniyarê Berdewam Bike",
      submit: "Pêşniyara Kapsamê Bişîne",
      submitting: "Tê şandin...",
      success: "Pêşniyara kapsama we bi serfirazî hat wergirtin. Em ê li we vegerin.",
      error: "Çewtiyek çêbû."
    },
    cookie: {
      title: "Polîtîkaya Çerezan",
      text: "Em çerezan bikar tînin da ku ezmûna we baştir bikin. Bi karanîna malpera me, hûn vê yekê qebûl dikin.",
      accept: "Qebûl Bike",
      reject: "Red Bike"
    },
    newsletter: {
      title: "Aboneyê Bultena Me ya Teknolojiyê Bibin",
      text: "Ji bo מגmeylên teknolojiyê yên herî dawî, nûçeyên ji cîhana nermalavê û nûvekirinên ji Sarfea, beşdarî bultena me bibin.",
      placeholder: "Navnîşana e-nameya we",
      button: "Abone Bibe"
    },
    footer: {
      slogan: "Em pêşerojê kod dikin. Em çareseriyên nermalavê yên nûjen û domdar hilberînin ku dê karsaziya we di cîhana dîjîtal de gavek pêşde bibin.",
      sitemap: "Nexşeya Malperê",
      corporate: "Pargîdanî",
      privacy: "Polîtîkaya Nepenîtiyê",
      terms: "Mercên Bikaranînê",
      kvkk: "Ronahîkirina KVKK",
      careers: "Kariyer",
      rights: "© 2024 Sarfea Software Technologies Inc. Hemû maf parastî ne."
    },
    toast: {
        title: "Daxwaz Hat Girtin!",
        success_contact: "Agahiyên projeya we ji tîmê me yê teknîkî re hatine şandin. Em ê di zûtirîn dem de li we vegerin.",
        error_connection: "Çewtiya girêdanê. Ji kerema xwe înterneta xwe kontrol bikin."
    }
  },
  de: {
    navbar: {
      home: "Startseite",
      solutions: "Technologien",
      process: "Prozess",
      about: "Unternehmen",
      contact: "Kontakt",
      startProject: "Projekt Starten",
      darkMode: "Dunkelmodus",
      lightMode: "Hellmodus"
    },
    hero: {
      tag: "Sarfea Enterprise v5.0 Live",
      title_prefix: "Grenzenlose",
      title_suffix: "Digitale Ökosysteme",
      description: "Web, Mobile, ERP, CRM, KI und IoT Integrationen. Wir kodieren alles, was Ihr Unternehmen benötigt, unter einem Dach.",
      btn_start: "Lass uns anfangen",
      btn_scope: "Umfang definieren",
      references: "Unternehmensreferenzen"
    },
    crm_preview: {
      dashboard: "Dashboard",
      overview: "Übersicht",
      system_online: "System Online",
      total_revenue: "Gesamtumsatz",
      active_modules: "Aktive Module",
      sync: "Synchronisiert",
      employees: "Mitarbeiter",
      recent_integrations: "Letzte Integrationen",
      all: "Alle",
      data_flow: "Datenfluss Aktiv",
      task_automation: "Aufgabenautomatisierung",
      automation_triggered: "Automatisierung Ausgelöst",
      new_order: "Neue Bestellung -> In Rechnung gestellt",
      system_status: "Systemstatus",
      uptime: "Betriebszeit",
      integration: "Integration",
      api_ready: "API Bereit"
    },
    stats_section: {
      title: "Giganten, mit denen wir arbeiten",
      subtitle: "Wir arbeiten voll kompatibel mit Infrastruktur- und Dienstanbietern nach globalen Standards.",
      main_title_prefix: "Nicht nur Code,",
      main_title_suffix: "Eine Komplettlösung",
      description: "Als Sarfea sind wir mehr als nur ein Softwareunternehmen. Wir sind Ihr Technologiepartner, der Ihre Geschäftsprozesse analysiert, Engpässe identifiziert und Ihre proprietäre digitale Architektur aufbaut. Wir sind an jedem Punkt präsent, von ERP bis CRM, von IoT bis KI.",
      cards: [
        { value: "45+", label: "Module & Integrationen", color: "blue" },
        { value: "120+", label: "Abgeschlossene Systeme", color: "purple" },
        { value: "%99", label: "Systembetriebszeit", color: "green" },
        { value: "24/7", label: "DevOps Support", color: "orange" }
      ]
    },
    tech_stack: {
      title: "Technologie-Stack",
      subtitle: "Die Technologien, die wir für eine moderne, zuverlässige und skalierbare Infrastruktur verwenden.",
      items: [
        { name: "React & Next.js", desc: "Moderne Web-Interfaces" },
        { name: "Node.js & Python", desc: "Leistungsstarke Backends" },
        { name: "AWS & Azure", desc: "Cloud-Infrastrukturlösungen" },
        { name: "Docker & K8s", desc: "Container-Orchestrierung" },
        { name: "PostgreSQL & MongoDB", desc: "Flexible Datenbanksysteme" },
        { name: "CI/CD Pipeline", desc: "Automatisierte Bereitstellung" },
        { name: "Microservices", desc: "Modulare Architektur" },
        { name: "REST & GraphQL", desc: "API-Entwicklung" }
      ]
    },
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Häufig gestellte Fragen zu technischen Prozessen und Arbeitsabläufen.",
      questions: [
        {
          question: "Wir benötigen ein spezielles Modul, können Sie es entwickeln?",
          answer: "Absolut. Wir sind keine Verkäufer von 'Paketsoftware', wir sind Lösungshersteller. Ob es sich um ein spezielles Berichtstool oder eine IoT-Software handelt, die mit der Maschine in Ihrer Fabrik kommuniziert; wir kodieren jedes Modul, das Sie benötigen, von Grund auf für Sie."
        },
        {
          question: "Integrieren Sie sich in die Software, die wir derzeit verwenden?",
          answer: "Ja. Wir entwickeln Middleware, die mit allen Arten von Systemen kommunizieren kann, von ERPs wie SAP, Logo, Mikro, Netsis bis hin zu CRMs wie Salesforce, Hubspot. Ihre Daten bleiben nicht isoliert, sie fließen zwischen den Systemen."
        },
        {
          question: "Wie ist der technische Support nach dem Projekt?",
          answer: "Unsere Arbeit endet nicht, nachdem die Software live gegangen ist. Im Rahmen des Service Level Agreement (SLA) bieten wir 24/7 Überwachung, Sicherheitsupdates und Notfalleingriffe. Wir garantieren, dass Ihr System jederzeit betriebsbereit bleibt."
        }
      ]
    },
    cta: {
      title: "Bereit, Ihr Projekt zum Leben zu erwecken?",
      description: "Lassen Sie uns Ihre Idee hören, Ihre Strategie festlegen und Ihre digitale Transformation starten. Kodieren Sie die Zukunft heute.",
      button: "Kostenloses Analysegespräch"
    },
    solutions_page: {
      title: "Unser breites Dienstleistungsspektrum",
      subtitle: "Egal welche Technologie Sie benötigen, wir sind mit unserem Expertenteam für Sie da.",
      items: [
        { title: "Web-Plattformen", desc: "Unternehmens-, schnelle und skalierbare Webanwendungen.", tags: ["React", "Next.js", "PWA"] },
        { title: "Mobile Anwendungen", desc: "Nehmen Sie Ihren Platz in der iOS- und Android-Welt ein.", tags: ["React Native", "Flutter", "Swift"] },
        { title: "E-Commerce & B2B", desc: "Sichere Infrastrukturen, die Ihre Verkäufe steigern.", tags: ["Marktplatz-Sync", "Zahlung"] },
        { title: "ERP & Inventar", desc: "Optimieren Sie Lager-, Produktions- und Bestandsprozesse.", tags: ["Barcode", "Prod-Verfolgung", "Logistik"] },
        { title: "CRM-Lösungen", desc: "Kundenbeziehungsmanagement und Verkaufstrichter.", tags: ["Pipeline", "Angebot", "Aktivität"] },
        { title: "Integration (API)", desc: "Brücken, die verschiedene Systeme verbinden.", tags: ["SAP", "Mikro", "Logo", "Nebim"] },
        { title: "KI & Maschinelles Lernen", desc: "Gewinnen Sie aussagekräftige Erkenntnisse aus Ihren Daten.", tags: ["ML", "Vorhersage", "Chatbot"] },
        { title: "IoT-Systeme", desc: "Verbinden Sie Ihre Geräte mit dem Internet und verwalten Sie sie.", tags: ["MQTT", "Sensor", "Automatisierung"] }
      ]
    },
    pricing: {
      title: "Flexible Geschäftsmodelle",
      subtitle: "Lassen Sie uns das am besten geeignete Arbeitsmodell für Ihre Projektgröße auswählen.",
      plans: [
        {
          name: "MVP / Startup",
          price: "Pro Projekt",
          description: "Für Unternehmer, die ihre Idee schnell verwirklichen wollen.",
          features: ["Grundlegendes Feature-Set", "Schnelle Markteinführung", "Skalierbare Architektur", "Web & Mobile kompatibel", "3 Monate Garantie"],
          button: "Details erhalten"
        },
        {
          name: "Unternehmens-Transformation",
          price: "Schlüsselfertig",
          description: "Für KMUs, die interne Prozesse digitalisieren möchten.",
          tag: "Am beliebtesten",
          features: ["Detaillierte Analyse & Planung", "ERP/CRM Module", "Legacy-System-Integration", "Mitarbeiterschulung", "1 Jahr Garantie & Support"],
          button: "Details erhalten"
        },
        {
          name: "Dediziertes Team",
          price: "Monatliche Miete",
          description: "Ihr eigenes Softwareteam für langfristige Projekte.",
          features: ["Ihre privaten Senior-Entwickler", "Flexible Sprint-Planung", "Direktes Managementrecht", "Kontinuierliche Entwicklung (CI/CD)", "24/7 DevOps Support"],
          button: "Details erhalten"
        }
      ]
    },
    process_page: {
      title: "Wie wir arbeiten?",
      subtitle: "Ein transparenter und agiler Prozess von der Idee bis zum Produkt.",
      steps: [
        { step: "01", title: "Entdeckung & Analyse", desc: "Wir hören Ihnen zu. Wir analysieren Ihre Geschäftsprozesse, Ziele und Schmerzpunkte und bereiten das Dokument für technische Anforderungen vor." },
        { step: "02", title: "UX/UI Design", desc: "Indem wir die Benutzererfahrung in den Mittelpunkt stellen, entwerfen wir moderne, verständliche Schnittstellen, die zu Ihrer Markenidentität passen." },
        { step: "03", title: "Agile Entwicklung", desc: "Wir gehen in Zyklen (Sprints) vor. Alle zwei Wochen präsentieren wir Ihnen eine funktionierende Demo und holen Ihr Feedback ein." },
        { step: "04", title: "Test & Integration", desc: "Wir überprüfen die Perfektion des Systems mit automatisierten Testszenarien, Sicherheitsscans und Leistungstests." },
        { step: "05", title: "Live & Support", desc: "Wir nehmen das System in Betrieb, führen Schulungen durch und schützen dann die Gesundheit des Systems mit unseren Wartungs-/Reparaturdiensten." }
      ]
    },
    about_page: {
      title: "Wer sind wir?",
      subtitle: "Wir sind ein leidenschaftliches Team, das Technologie nicht als Werkzeug, sondern als Kunst betrachtet.",
      office: {
        tag: "F&E Zentrum",
        location: "Istanbul, Maslak",
        desc: "Unser Hauptsitz, wo globale Projekte programmiert werden und das Herz der Innovation schlägt."
      },
      vision: {
        title: "Unsere Vision",
        p1: "Sarfea Software wurde gegründet, um das digitale Potenzial von Unternehmen zu maximieren. Unser Ziel ist es, komplexe Geschäftsprozesse in einfache, verwaltbare und intelligente Software umzuwandeln.",
        p2: "Wir schreiben nicht nur Code; wir bauen die Geschäftsmodelle der Zukunft. Nachhaltigkeit, Skalierbarkeit und Sicherheit liegen in der DNA jeder Zeile Code, die wir entwickeln."
      },
      values: [
        { title: "Ergebnisorientiert", desc: "Messbare Erfolgskriterien." },
        { title: "Innovation", desc: "Die neuesten Technologien." }
      ],
      timeline_title: "Unsere Reise",
      timeline_subtitle: "Unsere Geschichte, die von einem kleinen Büro zu einem globalen Technologieunternehmen reicht.",
      timeline_events: [
        { year: "2018", title: "Gründung", desc: "Unsere Reise begann in Ankara in einem kleinen Büro mit einem Kernteam von 3 Personen." },
        { year: "2019", title: "Erstes großes Projekt", desc: "Mit dem ERP-System, das wir für ein globales Logistikunternehmen entwickelt haben, haben wir uns in der Branche einen Namen gemacht." },
        { year: "2021", title: "F&E Zentrum", desc: "Wir sind in das Technopark-Büro umgezogen und haben den Titel offizielles F&E-Zentrum erhalten." },
        { year: "2023", title: "Globale Expansion", desc: "Wir haben uns auf die Märkte in Europa und im Nahen Osten ausgeweitet und sind zu exportorientiertem Wachstum übergegangen." },
        { year: "2024", title: "KI-Investition", desc: "Mit der Gründung unseres eigenen KI-Labors haben wir begonnen, intelligente Geschäftslösungen zu produzieren." }
      ],
      solutions_area_title: "Lösungsbereiche",
      solution_areas: [
        { title: "Unternehmenssoftware", desc: "ERP- und CRM-Systeme, die interne Arbeitsabläufe digitalisieren und die Effizienz steigern.", items: ["Personalwesen", "Finanzmodule", "Verkaufsmanagement"] },
        { title: "E-Commerce-Lösungen", desc: "Plattformen, die Online-Verkaufskanäle integrieren und Bestands- und Auftragsmanagement bieten.", items: ["B2B & B2C", "Marktplatz-Sync", "Zahlungsintegration"] },
        { title: "Mobiles Ökosystem", desc: "Native und plattformübergreifende mobile Anwendungen für iOS und Android.", items: ["React Native", "Flutter", "PWA"] },
        { title: "KI & Maschinelles Lernen", desc: "Intelligente Systeme, die aus Ihren Daten lernen, vorhersagen und optimieren.", items: ["Chatbot", "Vorhersage", "NLP"] },
        { title: "IoT & Automatisierung", desc: "Lösungen, die Ihre Geräte mit dem Internet verbinden und Fernsteuerung und -überwachung bieten.", items: ["Sensorintegration", "MQTT", "Echtzeitüberwachung"] },
        { title: "Sicherheit & DevOps", desc: "Infrastruktur- und Sicherheitsdienste, die sicherstellen, dass Ihr System 24/7 betriebsbereit bleibt.", items: ["Penetrationstest", "CI/CD", "Überwachung"] }
      ]
    },
    contact_page: {
      title: "Projekt Starten",
      subtitle: "Füllen Sie das Formular aus oder rufen Sie uns an, um unser technisches Team zu treffen.",
      form: {
          title: "Anfrageformular",
          name: "Vorname Nachname",
          name_ph: "Vorname Nachname",
          email: "Ihre E-Mail-Adresse",
          email_ph: "beispiel@firma.com",
          type: "Projekttyp",
          details: "Projektdetails",
          details_ph: "Erzählen Sie uns von Ihrem Projekt, Ihren Zielen und den Funktionen, die Sie benötigen...",
          submit: "Angebot anfordern",
          submitting: "Wird gesendet..."
      },
      info: {
          title: "Kommunikationskanäle",
          email: "E-Mail",
          phone: "Telefon",
          hq: "Hauptsitz",
          address: "Ovacik, Yozgat Blv. Nr: 20, 06280 Kecioren/Ankara",
          hours_label: "Arbeitszeiten",
          hours: "Mo - Fr: 09:00 - 18:00",
          directions: "Wegbeschreibung erhalten"
      }
    },
    calculator: {
      step1_title: "Umfangsbestimmer",
      step1_desc: "Wählen Sie die Module aus, die Sie benötigen.",
      step2_title: "Angebotsformular",
      step2_desc: "Geben Sie Ihre Kontaktdaten ein, damit wir Ihnen Ihr Angebot zusenden können.",
      options: [
        { label: 'Unternehmens-Webplattform', category: 'Plattform' },
        { label: 'Native Mobile App', category: 'Plattform' },
        { label: 'Kundenmanagement / CRM', category: 'Software' },
        { label: 'ERP & Bestandsverwaltung', category: 'Software' },
        { label: 'Drittanbieter-Integrationen', category: 'Integration' },
        { label: 'Zahlungssysteme', category: 'Integration' },
        { label: 'KI & Analytik', category: 'Fortgeschrittene Technologie' },
        { label: 'IoT & Geräteverbindung', category: 'Fortgeschrittene Technologie' },
        { label: 'Hohe Sicherheit & Protokollierung', category: 'Infrastruktur' }
      ],
      selected_scope: "Ausgewählter Umfang:",
      no_module: "Kein Modul ausgewählt.",
      name: "Vorname Nachname",
      email: "E-Mail",
      phone: "Telefon",
      notes: "Zusätzliche Hinweise (Optional)",
      notes_ph: "Wenn Sie etwas hinzufügen möchten...",
      selected_count: "Anzahl der ausgewählten Module:",
      pieces: "Stück",
      continue: "Weiter zur Angebotserstellung",
      submit: "Umfangsangebot senden",
      submitting: "Wird gesendet...",
      success: "Ihr Umfangsangebot wurde erfolgreich empfangen. Wir werden uns bei Ihnen melden.",
      error: "Ein Fehler ist aufgetreten."
    },
    cookie: {
      title: "Cookie-Richtlinie",
      text: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie dem zu.",
      accept: "Akzeptieren",
      reject: "Ablehnen"
    },
    newsletter: {
      title: "Abonnieren Sie unseren Tech-Newsletter",
      text: "Melden Sie sich für unseren Newsletter an, um die neuesten Technologietrends, Neuigkeiten aus der Softwarewelt und Updates von Sarfea zu erhalten.",
      placeholder: "Ihre E-Mail-Adresse",
      button: "Abonnieren"
    },
    footer: {
      slogan: "Wir kodieren die Zukunft. Wir produzieren innovative und nachhaltige Softwarelösungen, die Ihr Unternehmen in der digitalen Welt einen Schritt voranbringen.",
      sitemap: "Sitemap",
      corporate: "Unternehmen",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      kvkk: "KVKK-Klärung",
      careers: "Karriere",
      rights: "© 2024 Sarfea Software Technologies Inc. Alle Rechte vorbehalten."
    },
    toast: {
        title: "Anfrage erhalten!",
        success_contact: "Ihre Projektdetails wurden an unser technisches Team weitergeleitet. Wir werden uns so schnell wie möglich bei Ihnen melden.",
        error_connection: "Verbindungsfehler. Bitte überprüfen Sie Ihr Internet."
    }
  },
  ru: {
    navbar: {
      home: "Главная",
      solutions: "Технологии",
      process: "Процесс",
      about: "Компания",
      contact: "Контакты",
      startProject: "Начать проект",
      darkMode: "Темный режим",
      lightMode: "Светлый режим"
    },
    hero: {
      tag: "Sarfea Enterprise v5.0 Live",
      title_prefix: "Безграничные",
      title_suffix: "Цифровые Экосистемы",
      description: "Веб, Мобильные, ERP, CRM, ИИ и IoT интеграции. Мы кодируем все, что нужно вашему бизнесу, под одной крышей.",
      btn_start: "Давайте начнем",
      btn_scope: "Определить объем",
      references: "Корпоративные ссылки"
    },
    crm_preview: {
      dashboard: "Панель управления",
      overview: "Обзор",
      system_online: "Система онлайн",
      total_revenue: "Общий доход",
      active_modules: "Активные модули",
      sync: "Синхронизировано",
      employees: "Сотрудники",
      recent_integrations: "Недавние интеграции",
      all: "Все",
      data_flow: "Поток данных активен",
      task_automation: "Автоматизация задач",
      automation_triggered: "Автоматизация запущена",
      new_order: "Новый заказ -> Выставлен счет",
      system_status: "Статус системы",
      uptime: "Время работы",
      integration: "Интеграция",
      api_ready: "API готов"
    },
    stats_section: {
      title: "Гиганты, с которыми мы работаем",
      subtitle: "Мы работаем в полном соответствии с поставщиками инфраструктуры и услуг по мировым стандартам.",
      main_title_prefix: "Не просто код,",
      main_title_suffix: "Комплексное решение",
      description: "Как Sarfea, мы больше, чем просто софтверная компания. Мы ваш технологический партнер, который анализирует ваши бизнес-процессы, выявляет узкие места и строит вашу собственную цифровую архитектуру. Мы присутствуем на каждом этапе, от ERP до CRM, от IoT до ИИ.",
      cards: [
        { value: "45+", label: "Модули и Интеграции", color: "blue" },
        { value: "120+", label: "Завершенные системы", color: "purple" },
        { value: "%99", label: "Время работы системы", color: "green" },
        { value: "24/7", label: "Поддержка DevOps", color: "orange" }
      ]
    },
    tech_stack: {
      title: "Технологический стек",
      subtitle: "Технологии, которые мы используем для современной, надежной и масштабируемой инфраструктуры.",
      items: [
        { name: "React & Next.js", desc: "Современные веб-интерфейсы" },
        { name: "Node.js & Python", desc: "Мощные бэкенды" },
        { name: "AWS & Azure", desc: "Облачные решения" },
        { name: "Docker & K8s", desc: "Оркестрация контейнеров" },
        { name: "PostgreSQL & MongoDB", desc: "Гибкие базы данных" },
        { name: "CI/CD Pipeline", desc: "Автоматическое развертывание" },
        { name: "Microservices", desc: "Модульная архитектура" },
        { name: "REST & GraphQL", desc: "Разработка API" }
      ]
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Часто задаваемые вопросы о технических процессах и рабочих процессах.",
      questions: [
        {
          question: "Нам нужен специальный модуль, можете ли вы его разработать?",
          answer: "Абсолютно. Мы не продавцы «коробочного софта», мы создатели решений. Будь то специальный инструмент отчетности или программное обеспечение IoT, которое общается с оборудованием на вашем заводе; мы кодируем любой модуль, который вам нужен, с нуля."
        },
        {
          question: "Интегрируетесь ли вы с программным обеспечением, которое мы сейчас используем?",
          answer: "Да. Мы разрабатываем промежуточное ПО, которое может общаться со всеми видами систем, от ERP, таких как SAP, Logo, Mikro, Netsis, до CRM, таких как Salesforce, Hubspot. Ваши данные не остаются изолированными, они циркулируют между системами."
        },
        {
          question: "Как осуществляется техническая поддержка после проекта?",
          answer: "Наша работа не заканчивается после запуска программного обеспечения. В рамках Соглашения об уровне обслуживания (SLA) мы предлагаем круглосуточный мониторинг, обновления безопасности и экстренное вмешательство. Мы гарантируем, что ваша система будет работать в любое время."
        }
      ]
    },
    cta: {
      title: "Готовы воплотить ваш проект в жизнь?",
      description: "Давайте выслушаем вашу идею, определим стратегию и начнем вашу цифровую трансформацию. Закодируйте будущее сегодня.",
      button: "Бесплатная аналитическая встреча"
    },
    solutions_page: {
      title: "Наш широкий спектр услуг",
      subtitle: "Независимо от того, какая технология вам нужна, мы здесь с нашей командой экспертов.",
      items: [
        { title: "Веб-платформы", desc: "Корпоративные, быстрые и масштабируемые веб-приложения.", tags: ["React", "Next.js", "PWA"] },
        { title: "Мобильные приложения", desc: "Займите свое место в мире iOS и Android.", tags: ["React Native", "Flutter", "Swift"] },
        { title: "E-Commerce и B2B", desc: "Безопасные инфраструктуры, увеличивающие ваши продажи.", tags: ["Синхронизация маркетплейса", "Оплата"] },
        { title: "ERP и Инвентарь", desc: "Оптимизируйте процессы склада, производства и запасов.", tags: ["Штрих-код", "Отслеживание производства", "Логистика"] },
        { title: "CRM Решения", desc: "Управление взаимоотношениями с клиентами и воронка продаж.", tags: ["Воронка", "Предложение", "Активность"] },
        { title: "Интеграция (API)", desc: "Мосты, соединяющие разные системы.", tags: ["SAP", "Mikro", "Logo", "Nebim"] },
        { title: "ИИ и Машинное обучение", desc: "Извлекайте значимую информацию из ваших данных.", tags: ["ML", "Прогнозирование", "Чат-бот"] },
        { title: "IoT Системы", desc: "Подключайте ваши устройства к Интернету и управляйте ими.", tags: ["MQTT", "Датчик", "Автоматизация"] }
      ]
    },
    pricing: {
      title: "Гибкие бизнес-модели",
      subtitle: "Давайте выберем наиболее подходящую модель работы для размера вашего проекта.",
      plans: [
        {
          name: "MVP / Стартап",
          price: "За проект",
          description: "Для предпринимателей, которые хотят быстро реализовать свою идею.",
          features: ["Базовый набор функций", "Быстрый выход на рынок", "Масштабируемая архитектура", "Совместимость с Web и Mobile", "Гарантия 3 месяца"],
          button: "Получить детали"
        },
        {
          name: "Корпоративная трансформация",
          price: "Под ключ",
          description: "Для МСБ, желающих оцифровать внутренние процессы.",
          tag: "Самый популярный",
          features: ["Подробный анализ и планирование", "Модули ERP/CRM", "Интеграция унаследованных систем", "Обучение персонала", "Гарантия и поддержка 1 год"],
          button: "Получить детали"
        },
        {
          name: "Выделенная команда",
          price: "Ежемесячная аренда",
          description: "Ваша собственная команда разработчиков для долгосрочных проектов.",
          features: ["Ваши личные сеньор-разработчики", "Гибкое планирование спринтов", "Право прямого управления", "Непрерывная разработка (CI/CD)", "Поддержка DevOps 24/7"],
          button: "Получить детали"
        }
      ]
    },
    process_page: {
      title: "Как мы работаем?",
      subtitle: "Прозрачный и гибкий процесс от идеи до продукта.",
      steps: [
        { step: "01", title: "Открытие и Анализ", desc: "Мы слушаем вас. Мы анализируем ваши бизнес-процессы, цели и болевые точки и готовим документ технических требований." },
        { step: "02", title: "UX/UI Дизайн", desc: "Ставя пользовательский опыт в центр, мы разрабатываем современные, понятные интерфейсы, соответствующие вашему бренду." },
        { step: "03", title: "Agile Разработка", desc: "Мы продвигаемся циклами (спринтами). Каждые две недели мы представляем вам работающую демо-версию и получаем ваши отзывы." },
        { step: "04", title: "Тестирование и Интеграция", desc: "Мы проверяем совершенство системы с помощью автоматизированных сценариев тестирования, сканирования безопасности и тестов производительности." },
        { step: "05", title: "Запуск и Поддержка", desc: "Мы запускаем систему, проводим обучение, а затем защищаем здоровье системы с помощью наших услуг по обслуживанию." }
      ]
    },
    about_page: {
      title: "Кто мы?",
      subtitle: "Мы увлеченная команда, которая рассматривает технологии не как инструмент, а как искусство.",
      office: {
        tag: "R&D Центр",
        location: "Стамбул, Маслак",
        desc: "Наша штаб-квартира, где кодируются глобальные проекты и бьется сердце инноваций."
      },
      vision: {
        title: "Наше видение",
        p1: "Sarfea Software была основана для максимизации цифрового потенциала бизнеса. Наша цель — превратить сложные бизнес-процессы в простое, управляемое и интеллектуальное программное обеспечение.",
        p2: "Мы не просто пишем код; мы строим бизнес-модели будущего. Устойчивость, масштабируемость и безопасность заложены в ДНК каждой строки кода, которую мы разрабатываем."
      },
      values: [
        { title: "Ориентированность на результат", desc: "Измеримые критерии успеха." },
        { title: "Инновации", desc: "Новейшие технологии." }
      ],
      timeline_title: "Наш путь",
      timeline_subtitle: "Наша история, простирающаяся от небольшого офиса до глобальной технологической компании.",
      timeline_events: [
        { year: "2018", title: "Основание", desc: "Наше путешествие началось в Анкаре в небольшом офисе с основной командой из 3 человек." },
        { year: "2019", title: "Первый крупный проект", desc: "Мы заявили о себе в секторе с системой ERP, которую мы разработали для глобальной логистической компании." },
        { year: "2021", title: "R&D Центр", desc: "Мы переехали в офис Технопарка и получили статус официального R&D центра." },
        { year: "2023", title: "Глобальное расширение", desc: "Мы вышли на рынки Европы и Ближнего Востока и перешли к экспортоориентированному росту." },
        { year: "2024", title: "Инвестиции в ИИ", desc: "Создав нашу собственную ИИ-лабораторию, мы начали производить интеллектуальные бизнес-решения." }
      ],
      solutions_area_title: "Области решений",
      solution_areas: [
        { title: "Корпоративное ПО", desc: "ERP и CRM системы, которые оцифровывают внутренние рабочие процессы и повышают эффективность.", items: ["Человеческие ресурсы", "Финансовые модули", "Управление продажами"] },
        { title: "E-Commerce Решения", desc: "Платформы, интегрирующие каналы онлайн-продаж и предлагающие управление запасами и заказами.", items: ["B2B & B2C", "Синхронизация маркетплейса", "Интеграция оплаты"] },
        { title: "Мобильная экосистема", desc: "Нативные и кроссплатформенные мобильные приложения для iOS и Android.", items: ["React Native", "Flutter", "PWA"] },
        { title: "ИИ и Машинное обучение", desc: "Интеллектуальные системы, которые учатся на ваших данных, прогнозируют и оптимизируют.", items: ["Чат-бот", "Прогнозирование", "NLP"] },
        { title: "IoT и Автоматизация", desc: "Решения, подключающие ваши устройства к Интернету и обеспечивающие удаленное управление и мониторинг.", items: ["Интеграция датчиков", "MQTT", "Мониторинг в реальном времени"] },
        { title: "Безопасность и DevOps", desc: "Инфраструктурные и защитные услуги, гарантирующие, что ваша система будет работать круглосуточно.", items: ["Тест на проникновение", "CI/CD", "Мониторинг"] }
      ]
    },
    contact_page: {
      title: "Начать проект",
      subtitle: "Заполните форму или позвоните нам, чтобы встретиться с нашей технической командой.",
      form: {
          title: "Форма запроса",
          name: "Имя Фамилия",
          name_ph: "Имя Фамилия",
          email: "Ваш E-mail адрес",
          email_ph: "example@company.com",
          type: "Тип проекта",
          details: "Детали проекта",
          details_ph: "Расскажите нам о вашем проекте, целях и функциях, которые вам нужны...",
          submit: "Запросить предложение",
          submitting: "Отправка..."
      },
      info: {
          title: "Каналы связи",
          email: "E-mail",
          phone: "Телефон",
          hq: "Штаб-квартира",
          address: "Ovacik, Yozgat Blv. No: 20, 06280 Kecioren/Ankara",
          hours_label: "Рабочие часы",
          hours: "Пн - Пт: 09:00 - 18:00",
          directions: "Получить маршрут"
      }
    },
    calculator: {
      step1_title: "Определитель объема",
      step1_desc: "Выберите модули, которые вам нужны.",
      step2_title: "Форма предложения",
      step2_desc: "Введите свои контактные данные, чтобы мы могли отправить вам предложение.",
      options: [
        { label: 'Корпоративная веб-платформа', category: 'Платформа' },
        { label: 'Нативное мобильное приложение', category: 'Платформа' },
        { label: 'Управление клиентами / CRM', category: 'ПО' },
        { label: 'ERP и Управление запасами', category: 'ПО' },
        { label: 'Сторонние интеграции', category: 'Интеграция' },
        { label: 'Платежные системы', category: 'Интеграция' },
        { label: 'ИИ и Аналитика', category: 'Передовые технологии' },
        { label: 'IoT и Подключение устройств', category: 'Передовые технологии' },
        { label: 'Высокая безопасность и Логирование', category: 'Инфраструктура' }
      ],
      selected_scope: "Выбранный объем:",
      no_module: "Модуль не выбран.",
      name: "Имя Фамилия",
      email: "E-mail",
      phone: "Телефон",
      notes: "Дополнительные примечания (Необязательно)",
      notes_ph: "Если вы хотите что-то добавить...",
      selected_count: "Количество выбранных модулей:",
      pieces: "шт.",
      continue: "Продолжить для создания предложения",
      submit: "Отправить предложение по объему",
      submitting: "Отправка...",
      success: "Ваше предложение по объему успешно получено. Мы свяжемся с вами.",
      error: "Произошла ошибка."
    },
    cookie: {
      title: "Политика использования файлов cookie",
      text: "Мы используем файлы cookie для улучшения вашего опыта. Пользуясь нашим сайтом, вы соглашаетесь с этим.",
      accept: "Принять",
      reject: "Отклонить"
    },
    newsletter: {
      title: "Подпишитесь на наш технический бюллетень",
      text: "Присоединяйтесь к нашей рассылке, чтобы получать последние технологические тренды, новости из мира ПО и обновления от Sarfea.",
      placeholder: "Ваш адрес электронной почты",
      button: "Подписаться"
    },
    footer: {
      slogan: "Мы кодируем будущее. Мы создаем инновационные и устойчивые программные решения, которые продвинут ваш бизнес вперед в цифровом мире.",
      sitemap: "Карта сайта",
      corporate: "Компания",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      kvkk: "Разъяснение KVKK",
      careers: "Карьера",
      rights: "© 2024 Sarfea Software Technologies Inc. Все права защищены."
    },
    toast: {
        title: "Запрос получен!",
        success_contact: "Детали вашего проекта переданы нашей технической команде. Мы свяжемся с вами как можно скорее.",
        error_connection: "Ошибка подключения. Пожалуйста, проверьте ваш интернет."
    }
  },
  ckb: {
    navbar: {
      home: "سەرەکی",
      solutions: "تەکنۆلۆژیاکان",
      process: "پڕۆسە",
      about: "کۆمپانیا",
      contact: "پەیوەندی",
      startProject: "دەستپێکردنی پڕۆژە",
      darkMode: "دۆخی تاریک",
      lightMode: "دۆخی ڕوون"
    },
    hero: {
      tag: "Sarfea Enterprise v5.0 Live",
      title_prefix: "بێ سنوور",
      title_suffix: "ئیکۆسیستەمی دیجیتاڵی",
      description: "وێب، مۆبایل، ERP، CRM، زیرەکی دەستکرد و IoT. ئێمە هەموو ئەو شتانە کۆد دەکەین کە بازرگانیەکەت پێویستیەتی، لە ژێر یەک سەقفدا.",
      btn_start: "با دەست پێ بکەین",
      btn_scope: "دیاریکردنی مەودا",
      references: "سەرچاوەکانی کۆمپانیا"
    },
    crm_preview: {
      dashboard: "داشبۆرد",
      overview: "پوختە",
      system_online: "سیستەم ئۆنلاینە",
      total_revenue: "کۆی داهات",
      active_modules: "مۆدیوڵە چالاکەکان",
      sync: "هاوکان کراوە",
      employees: "کارمەندان",
      recent_integrations: "نوێترین یەکخستنەکان",
      all: "هەموو",
      data_flow: "لێشاوی داتا چالاکە",
      task_automation: "ئۆتۆماتیککردنی ئەرک",
      automation_triggered: "ئۆتۆماتیک کارا کرا",
      new_order: "داواکاری نوێ -> پسوڵە دەرکرا",
      system_status: "دۆخی سیستەم",
      uptime: "کاتی کارکردن",
      integration: "یەکخستن",
      api_ready: "API ئامادەیە"
    },
    stats_section: {
      title: "ئەو زەبەلاحانەی کاریان لەگەڵ دەکەین",
      subtitle: "ئێمە بە تەواوی لەگەڵ دابینکەرانی ژێرخان و خزمەتگوزاری بەپێی ستانداردە جیهانیەکان کار دەکەین.",
      main_title_prefix: "تەنها کۆد نا،",
      main_title_suffix: "چارسەرێکی تەواو",
      description: "وەک Sarfea، ئێمە زیاترین لە تەنها کۆمپانیایەکی سۆفتوێر. ئێمە هاوبەشی تەکنۆلۆژی تۆین کە پرۆسەکانی کارەکەت شی دەکەینەوە، کێشەکان دەستنیشان دەکەین و تەلارسازيی دیجیتاڵی تایبەت بە خۆت بنیات دەنێین. ئێمە لە هەموو خاڵێکدا ئامادەین، لە ERP بۆ CRM، لە IoT بۆ AI.",
      cards: [
        { value: "45+", label: "مۆدیوڵ و یەکخستنەکان", color: "blue" },
        { value: "120+", label: "سیستەمە تەواوکراوەکان", color: "purple" },
        { value: "%99", label: "کاتی کارکردنی سیستەم", color: "green" },
        { value: "24/7", label: "پشتیوانی DevOps", color: "orange" }
      ]
    },
    tech_stack: {
      title: "تەکنۆلۆژیاکان",
      subtitle: "ئەو تەکنۆلۆژیایانەی بەکاری دەهێنین بۆ ژێرخانێکی مۆدێرن، باوەڕپێکراو و قابل‌ گەورەکردن.",
      items: [
        { name: "React & Next.js", desc: "ڕووکاری وێبی مۆدێرن" },
        { name: "Node.js & Python", desc: "باکێندی بە‌هێز" },
        { name: "AWS & Azure", desc: "چارسەری ژێرخانی هەوری" },
        { name: "Docker & K8s", desc: "ڕێکخستنی کۆنتێنەر" },
        { name: "PostgreSQL & MongoDB", desc: "سیستەمی داتابەیسی نەرم" },
        { name: "CI/CD Pipeline", desc: "بڵاوکردنەوەی ئۆتۆماتیکی" },
        { name: "Microservices", desc: "تەلارسازی مۆدیولار" },
        { name: "REST & GraphQL", desc: "گەشەپێدانی API" }
      ]
    },
    faq: {
      title: "پرسیارە باوەکان",
      subtitle: "پرسیارە دووبارەکان دەربارەی پرۆسەی تەکنیکی و شێوازی کارکردن.",
      questions: [
        {
          question: "ئێمە پێویستیمان بە مۆدیوڵێکی تایبەتە، دەتوانن گەشەی پێ بدەن؟",
          answer: "بە دڵنیاییەوە. ئێمە فرۆشیاری 'پاکێجی سۆفتوێر' نین، ئێمە دروستکەری چارەسەرین. جا ئامرازێکی ڕاپۆرتی تایبەت بێت یان سۆفتوێرێکی IoT کە پەیوەندی بە ئامێرەکەی ناو کارگەکەتەوە دەکات؛ ئێمە هەر مۆدیوڵێک کە پێویستت بێت لە سەرەتاوە بۆت کۆد دەکەین."
        },
        {
          question: "ئایا لەگەڵ ئەو سۆفتوێرەی ئێستا بەکاری دەهێنین یەک دەگرن؟",
          answer: "بەڵێ. ئێمە سۆفتوێری نێوانگر (Middleware) گەشە پێ دەدەین کە دەتوانێت پەیوەندی لەگەڵ هەموو جۆرە سیستەمێک بکات، لە ERPـەکانی وەک SAP, Logo, Mikro, Netsis تا CRMـەکانی وەک Salesforce, Hubspot. داتاکانتان دابڕاو نامێننەوە، لە نێوان سیستەمەکاندا دەسوڕێنەوە."
        },
        {
          question: "پشتیوانی تەکنیکی دوای پڕۆژەکە چۆنە؟",
          answer: "کاری ئێمە دوای کەوتنەکاری سۆفتوێرەکە کۆتایی نایەت. لە چوارچێوەی ڕێککەوتنی ئاستی خزمەتگوزاری (SLA)، ئێمە چاودێری 24/7، نوێکاری ئاسایش و دەستێوەردانی خێرا پێشکەش دەکەین. ئێمە دڵنیایی دەدەین کە سیستەمەکەتان هەمیشە کار دەکات."
        }
      ]
    },
    cta: {
      title: "ئامادەیت پڕۆژەکەت بەدی بهێنیت؟",
      description: "با گوێ لە بیرۆکەکەت بگرین، ستراتیژیەکەت دیاری بکەین و گۆڕانی دیجیتاڵیت دەست پێ بکەین. داهاتوو ئەمڕۆ کۆد بکە.",
      button: "دیداری شیکاری بێبەرامبەر"
    },
    solutions_page: {
      title: "خزمەتگوزاریە فراوانەکانمان",
      subtitle: "هەر تەکنۆلۆژیایەک پێویستت بێت، ئێمە لێرەین لەگەڵ تیمی پسپۆڕمان.",
      items: [
        { title: "پلاتفۆرمی وێب", desc: "ئەپڵیکەیشنی وێبی کۆمپانیا، خێرا و قابل‌ گەورەکردن.", tags: ["React", "Next.js", "PWA"] },
        { title: "ئەپڵیکەیشنی مۆبایل", desc: "جێگای خۆت لە جیهانی iOS و Android بگرە.", tags: ["React Native", "Flutter", "Swift"] },
        { title: "E-Commerce & B2B", desc: "ژێرخانی پارێزراو کە فرۆشتنەکانت زیاد دەکات.", tags: ["Marketplace Sync", "Payment"] },
        { title: "ERP & کۆگا", desc: "پرۆسەکانی کۆگا، بەرهەمهێنان و مارکێتین باشتر بکە.", tags: ["Barcode", "Prod Tracking", "Logistics"] },
        { title: "چارسەری CRM", desc: "بەڕێوەبردنی پەیوەندی کریاران و ڕێڕەوی فرۆشتن.", tags: ["Pipeline", "Proposal", "Activity"] },
        { title: "یەکخستن (API)", desc: "ئەو پردانەی سیستەمە جیاوازەکان بەیەک دەگەیەنن.", tags: ["SAP", "Mikro", "Logo", "Nebim"] },
        { title: "AI & فێربوونی ئامێر", desc: "زانیاری بەسوود لە داتاکانت دەربهێنە.", tags: ["ML", "Prediction", "Chatbot"] },
        { title: "سیستەمی IoT", desc: "ئامێرەکانت بە ئینتەرنێتەوە ببەستە و بەڕێوەیان ببە.", tags: ["MQTT", "Sensor", "Automation"] }
      ]
    },
    pricing: {
      title: "مۆدێلی کارکردنی نەرم",
      subtitle: "با گونجاوترین مۆدێلی کارکردن بۆ قەبارەی پڕۆژەکەت هەڵبژێرین.",
      plans: [
        {
          name: "MVP / سەرەتایی",
          price: "بۆ هەر پڕۆژە",
          description: "بۆ خاوەنکاران کە دەخوازن بیرۆکەکەیان بە خێرایی جێبەجێ بکەن.",
          features: ["سێتی تایبەتمەندی سەرەکی", "خستنەبازاڕی خێرا", "تەلارسازی قابل‌ گەورەکردن", "گونجاو بۆ وێب و مۆبایل", "3 مانگ گەرەنتی"],
          button: "وردەکاری وەربگرە"
        },
        {
          name: "گۆڕینی کۆمپانیا",
          price: "تەواوکاری",
          description: "بۆ PKBs کە دەخوازن پرۆسە ناوخۆییەکان بە دیجیتاڵی بکەن.",
          tag: "بەناوبانگترین",
          features: ["شیکاری ورد و پلان", "مۆدیوڵی ERP/CRM", "یەکخستنی سیستەمی کۆن", "ڕاهێنانی کارمەندان", "1 ساڵ گەرەنتی و پشتیوانی"],
          button: "وردەکاری وەربگرە"
        },
        {
          name: "تیمی تایبەتمەند",
          price: "کرێی مانگانە",
          description: "تیمی سۆفتوێری تایبەت بە خۆت بۆ پڕۆژە دێژخایەنەکان.",
          features: ["پەرەپێدەری باڵای تایبەت بە تۆ", "پلاندانانی سپرێنتی نەرم", "مافی بەڕێوەبردنی ڕاستەوخۆ", "گەشەپێدانی بەردەوام (CI/CD)", "24/7 پشتیوانی DevOps"],
          button: "وردەکاری وەربگرە"
        }
      ]
    },
    process_page: {
      title: "چۆن کار دەکەین؟",
      subtitle: "پرۆسەیەکی شەفاف و چالاک لە بیرۆکەوە بۆ بەرهەم.",
      steps: [
        { step: "01", title: "دۆزینەوە و شیکاری", desc: "بوێ لێ دەگرین. پرۆسەکانی کارەکەت، ئامانجەکان و کێشەکانت شی دەکەینەوە و دۆکیۆمێنتی داواکاری تەکنیکی ئامادە دەکەین." },
        { step: "02", title: "دیکزاینی UX/UI", desc: "بە دانانی ئەزموونی بەکارهێنەر لە ناوەند، ڕووکاری مۆدێرن و تێگەیشتوو دیزاین دەکەین کە لەگەڵ ناسنامەی براندەکەت بگونجێت." },
        { step: "03", title: "گەشەپێدانی چالاک", desc: "بە خول (Sprints) پێش دەچین. هەموو دوو هەفتە جارێک دیمۆیەکی کارا پێشکەشتان دەکەین و ڕای ئێوە وەردەگرین." },
        { step: "04", title: "تێست و یەکخستن", desc: "کامڵبوونی سیستەمەکە بە سیناریۆی تێستی ئۆتۆماتیکی، سکانی ئاسایش و تێستی کارایی دەپشکنین." },
        { step: "05", title: "خستنەکار و پشتیوانی", desc: "سیستەمەکە دەخەینە کار، ڕاهێنان ئەنجام دەدەین و پاشان تەندروستی سیستەمەکە دەپارێزین بە خزمەتگوزاریەکانمان." }
      ]
    },
    about_page: {
      title: "ئێمە کێین؟",
      subtitle: "ئێمە تیمێکی بەشەوقین کە تەکنۆلۆژیا وەک ئامراز نا، بەڵکو وەک هونەر دەبینین.",
      office: {
        tag: "سەنتەری R&D",
        location: "ئیستانبوڵ، مەسڵەک",
        desc: "ناوەندی سەرەکیمان، کە پڕۆژە جیهانیەکان کۆد دەکرێن و دڵی داهێنان لێ دەدات."
      },
      vision: {
        title: "دیدگای ئێمە",
        p1: "سارفیا سۆفتوێر دامەزرا بۆ ئەوەی توانای دیجیتاڵی کۆمپانیاکان بگەیەنێتە ئەوپەڕی. ئامانجمان ئەوەیە پرۆسە ئاڵۆزەکانی کار بگۆڕین بۆ سۆفتوێری سادە، بەڕێوەبراو و زیرەک.",
        p2: "ئێمە تەنها کۆد نانووسین؛ ئێمە مۆدێلی کاری داهاتوو بنیات دەنێین. بەردەوامی، قابل‌ گەورەکردن و ئاسایش لە DNA هەموو دێڕە کۆدێکدایە کە گەشەی پێ دەدەین."
      },
      values: [
        { title: "ئەنجام-تەوەر", desc: "پێوەری سەرکەوتنی پێوانەکراو." },
        { title: "داهێنان", desc: "نوێترین تەکنۆلۆژیاکان." }
      ],
      timeline_title: "گەشتی ئێمە",
      timeline_subtitle: "چیرۆکی ئێمە، کە لە ئۆفیسێکی بچووکەوە دەگاتە کۆمپانیایەکی تەکنۆلۆژی جیهانی.",
      timeline_events: [
        { year: "2018", title: "دامەزراندن", desc: "گەشتەکەمان لە ئەنقەرە لە ئۆفیسێکی بچووک بە تیمێکی سەرەکی 3 کەسی دەستی پێکرد." },
        { year: "2019", title: "یەکەم پڕۆژەی گەورە", desc: "بە سیستەمی ERP کە بۆ کۆمپانیایەکی لۆجیستیکی جیهانی گەشەمان پێدا، ناومان لە کەرتەکەدا دەرکرد." },
        { year: "2021", title: "سەنتەری R&D", desc: "گوێزراینەوە بۆ ئۆفیسی تەکنۆپارک و نازناوی سەنتەری فەرمی R&D مان وەرگرت." },
        { year: "2023", title: "بەرفراوانبوونی جیهانی", desc: "بەرفراوان بووین بۆ بازاڕەکانی ئەوروپا و ڕۆژهەڵاتی ناوەڕاست و بەرو گەشەی هەناردەکردن ڕۆیشتین." },
        { year: "2024", title: "وەبەرهێنانی AI", desc: "بە دامەزراندنی تاقیگەی AI تایبەت بە خۆمان، دەستمان کرد بە بەرهەمهێنانی چارەسەری کاری زیرەک." }
      ],
      solutions_area_title: "بوارەکانی چارەسەر",
      solution_areas: [
        { title: "سۆفتوێری کۆمپانیا", desc: "سیستەمی ERP و CRM کە لێشاوی کاری ناوخۆیی دیجیتاڵ دەکەن و کارایی زیاد دەکەن.", items: ["سەرچاوە مرۆییەکان", "مۆدیوڵی دارایی", "بەڕێوەبردنی فرۆشتن"] },
        { title: "چارسەری E-Commerce", desc: "پلاتفۆڕمەکان کە کەناڵەکانی فرۆشتنی ئۆنلاین یەک دەخەن و بەڕێوەبردنی کۆگا و داواکاری پێشکەش دەکەن.", items: ["B2B & B2C", "Marketplace Sync", "Payment Integration"] },
        { title: "ئیکۆسیستەمی مۆبایل", desc: "ئەپڵیکەیشنی مۆبایلی Native و Cross-platform بۆ iOS و Android.", items: ["React Native", "Flutter", "PWA"] },
        { title: "AI & فێربوونی ئامێر", desc: "سیستەمی زیرەک کە لە داتاکانت فێر دەبێت، پێشبینی دەکات و باشتر دەکات.", items: ["Chatbot", "Prediction", "NLP"] },
        { title: "IoT & ئۆتۆماتیک", desc: "چارسەرەکان کە ئامێرەکانت بە ئینتەرنێتەوە دەبەستن و کۆنترۆڵ و چاودێری لە دوورەوە دابین دەکەن.", items: ["Sensor Integration", "MQTT", "Real-time Monitoring"] },
        { title: "ئاسایش & DevOps", desc: "خزمەتگوزاری ژێرخان و ئاسایش کە دڵنیایی دەدەن سیستەمەکەت 24/7 کار دەکات.", items: ["Penetration Test", "CI/CD", "Monitoring"] }
      ]
    },
    contact_page: {
      title: "پڕۆژە دەست پێ بکە",
      subtitle: "فۆڕمەکە پڕ بکەرەوە یان پەیوەندیمان پێوە بکە بۆ دیتنی تیمی تەکنیکیمان.",
      form: {
          title: "فۆڕمی داواکاری",
          name: "ناو پاشناو",
          name_ph: "ناو پاشناو",
          email: "ناونیشانی ئیمەیڵ",
          email_ph: "example@company.com",
          type: "جۆری پڕۆژە",
          details: "وردەکاری پڕۆژە",
          details_ph: "باس لە پڕۆژەکەت، ئامانجەکان و ئەو تایبەتمەندیانە بکە کە پێویستتە...",
          submit: "داوای ئۆفەر بکە",
          submitting: "دەنێردرێت..."
      },
      info: {
          title: "کەناڵەکانی پەیوەندی",
          email: "ئیمەیڵ",
          phone: "تەلەفۆن",
          hq: "ناوەندی سەرەکی",
          address: "ئۆڤاجک، یۆزگات بۆلیڤارد ژمارە: 20، 06280 کەچیۆرێن/ئەنقەرە",
          hours_label: "کاتی کارکردن",
          hours: "دووشەممە - هەینی: 09:00 - 18:00",
          directions: "ناونیشان وەربگرە"
      }
    },
    calculator: {
      step1_title: "دیاریکەری مەودا",
      step1_desc: "ئەو مۆدیوڵانە هەڵبژێرە کە پێویستتە.",
      step2_title: "فۆڕمی ئۆفەر",
      step2_desc: "زانیاری پەیوەندی خۆت بنووسە بۆ ئەوەی بتوانین ئۆفەرەکەت بۆ بنێرین.",
      options: [
        { label: 'پلاتفۆرمی وێبی کۆمپانیا', category: 'پلاتفۆرم' },
        { label: 'ئەپڵیکەیشنی مۆبایلی Native', category: 'پلاتفۆرم' },
        { label: 'بەڕێوەبردنی کریار / CRM', category: 'سۆفتوێر' },
        { label: 'ERP & بەڕێوەبردنی کۆگا', category: 'سۆفتوێر' },
        { label: 'یەکخستنی لایەنی سێیەم', category: 'یەکخستن' },
        { label: 'سیستەمی پارەدان', category: 'یەکخستن' },
        { label: 'AI & شیکاری', category: 'تەکنۆلۆژیای پێشکەوتوو' },
        { label: 'IoT & بەستنەوەی ئامێر', category: 'تەکنۆلۆژیای پێشکەوتوو' },
        { label: 'ئاسایشی بەرز & تۆمارکردن', category: 'ژێرخان' }
      ],
      selected_scope: "مەودای هەڵبژێردراو:",
      no_module: "هیچ مۆدیوڵێک هەڵنەبژێردراوە.",
      name: "ناو پاشناو",
      email: "ئیمەیڵ",
      phone: "تەلەفۆن",
      notes: "تێبینی زیادە (ئارەزوومەندانە)",
      notes_ph: "ئەگەر دەتەوێت شتێک زیاد بکەیت...",
      selected_count: "ژمارەی مۆدیوڵە هەڵبژێردراوەکان:",
      pieces: "دانە",
      continue: "بەردەوام بە بۆ دروستکردنی ئۆفەر",
      submit: "ئۆفەری مەودا بنێرە",
      submitting: "دەنێردرێت...",
      success: "ئۆفەری مەودای تۆ بە سەرکەوتوویی وەرگیرا. پەیوەندیت پێوە دەکەینەوە.",
      error: "هەڵەیەک ڕوویدا."
    },
    cookie: {
      title: "سیاسەتی شەکرە (Cookies)",
      text: "ئێمە Cookies بەکاردەهێنین بۆ باشترکردنی ئەزموونی تۆ. بە بەکارهێنانی ماڵپەڕەکەمان، ئەمە قبوڵ دەکەیت.",
      accept: "قبوڵ بکە",
      reject: "ڕەت بکەوە"
    },
    newsletter: {
      title: "بەشدار بە لە بڵاوکراوەی تەکنۆلۆژیمان",
      text: "بەشدار بە لە بڵاوکراوەکەمان بۆ وەرگرتنی نوێترین ڕەوتەکانی تەکنۆلۆژیا، هەواڵەکانی جیهانی سۆفتوێر و نوێکاریەکانی سارفیا.",
      placeholder: "ناونیشانی ئیمەیڵەکەت",
      button: "بەشدار بە"
    },
    footer: {
      slogan: "ئێمە داهاتوو کۆد دەکەین. ئێمە چارەسەری سۆفتوێری داهێنەرانە و بەردەوام بەرهەم دەهێنین کە کارەکەت لە جیهانی دیجیتاڵدا هەنگاوێک پێش دەخات.",
      sitemap: "نەخشەی ماڵپەڕ",
      corporate: "کۆمپانیا",
      privacy: "سیاسەتی تایبەتمەندێتی",
      terms: "مەرجەکانی بەکارهێنان",
      kvkk: "ڕوونکردنەوەی KVKK",
      careers: "کاریەر",
      rights: "© 2024 Sarfea Software Technologies Inc. هەموو مافەکان پارێزراون."
    },
    toast: {
        title: "داواکاری وەرگیرا!",
        success_contact: "وردەکاری پڕۆژەکەت نێردرا بۆ تیمی تەکنیکیمان. لە زووترین کاتدا پەیوەندیت پێوە دەکەینەوە.",
        error_connection: "هەڵەی پەیوەندی. تکایە ئینتەرنێتەکەت بپشکنە."
    }
  }
};
