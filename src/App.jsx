import React, { useState, useEffect, useRef } from 'react';
import logoImage from './assets/logo.png';
import { 
  LayoutDashboard, Smartphone, BarChart3, CheckCircle2, ArrowRight, 
  Menu, X, Mail, Phone, Globe, Zap, 
  Database, Server, Rocket, Cpu, XCircle, CheckCircle,
  Code2, ShieldCheck, Users, MessageSquare, ChevronDown, Play,
  Layers, Monitor, Briefcase, Calculator, Search, ShoppingBag as ShoppingBagIcon,
  Settings, FileText, Truck, Bell, CreditCard, ArrowUp,
  Sun, Moon, Send, ExternalLink, Lightbulb, Target, Award, Cloud, Star, TrendingUp, Clock,
  ChevronRight, Plus, Minus, Laptop, AlertCircle, Share2, PieChart, Activity,
  Boxes, GitBranch, Terminal, Wifi, Lock, Fingerprint, MousePointer2, ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

// --- YENİ ETKİLEŞİMLİ BİLEŞENLER ---

// 1. Spotlight Card
const SpotlightCard = ({ children, className = "", color = "blue" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const colorMap = {
    blue: "59, 130, 246",
    purple: "168, 85, 247",
    green: "34, 197, 94",
    orange: "249, 115, 22",
    pink: "236, 72, 153",
    cyan: "6, 182, 212",
    indigo: "99, 102, 241",
    teal: "20, 184, 166"
  };

  const rgb = colorMap[color] || "59, 130, 246";

  return (
    <div
      className={`group relative border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(${rgb}, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// 2. 3D Tilt Container
const TiltContainer = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(yPct * -10);
    y.set(xPct * 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className="relative w-full h-full"
    >
      {children}
    </motion.div>
  );
};

// --- YARDIMCI BİLEŞENLER ---

const Toast = ({ message, onClose }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, x: '50%' }}
    animate={{ opacity: 1, y: 0, x: '50%' }}
    exit={{ opacity: 0, y: 20, x: '50%' }}
    className="fixed bottom-8 right-1/2 translate-x-1/2 md:right-8 md:translate-x-0 z-[100] bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-xl shadow-2xl shadow-indigo-500/20 flex items-center gap-3 min-w-[300px] border border-white/10 dark:border-slate-200/20"
  >
    <CheckCircle className="text-green-500" size={24} />
    <div>
      <h4 className="font-bold text-sm">Talep Alındı!</h4>
      <p className="text-sm opacity-90">{message}</p>
    </div>
    <button onClick={onClose} className="ml-auto opacity-50 hover:opacity-100 transition-opacity">
      <X size={18} />
    </button>
  </motion.div>
);

// GÜNCELLENMİŞ PROJECT CALCULATOR (FORMSPREE ENTEGRASYONLU)
const ProjectCalculator = ({ isOpen, onClose, onShowToast }) => {
  const [selections, setSelections] = useState([]);
  const [step, setStep] = useState(1); // 1: Seçim, 2: İletişim Formu
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options = [
    { id: 'web', label: 'Kurumsal Web Platformu', score: 10, icon: Laptop, color: 'blue', category: 'Platform' },
    { id: 'mobile', label: 'Native Mobil Uygulama', score: 25, icon: Smartphone, color: 'purple', category: 'Platform' },
    { id: 'crm', label: 'Özel CRM/Müşteri Yönetimi', score: 15, icon: Users, color: 'green', category: 'Yazılım' },
    { id: 'erp', label: 'ERP & Stok Yönetimi', score: 20, icon: Boxes, color: 'orange', category: 'Yazılım' },
    { id: 'api', label: '3. Parti Entegrasyonlar', score: 8, icon: GitBranch, color: 'cyan', category: 'Entegrasyon' },
    { id: 'payment', label: 'Ödeme Sistemleri', score: 5, icon: CreditCard, color: 'red', category: 'Entegrasyon' },
    { id: 'ai', label: 'Yapay Zeka & Analitik', score: 30, icon: Cpu, color: 'indigo', category: 'İleri Teknoloji' },
    { id: 'iot', label: 'IoT & Cihaz Haberleşmesi', score: 25, icon: Wifi, color: 'teal', category: 'İleri Teknoloji' },
    { id: 'sec', label: 'Yüksek Güvenlik & Loglama', score: 10, icon: ShieldCheck, color: 'slate', category: 'Altyapı' },
  ];

  const toggleSelection = (option) => {
    if (selections.find(s => s.id === option.id)) {
      setSelections(selections.filter(s => s.id !== option.id));
    } else {
      setSelections([...selections, option]);
    }
  };

  const handleCalculatorSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData.entries());
    
    // Seçilen modülleri string formatına çevir
    const selectedModulesList = selections.map(s => s.label).join(", ");
    
    // Gönderilecek veriyi hazırla
    const payload = {
        ...contactData,
        projectType: "Kapsam Belirleyici Teklifi",
        message: `Kullanıcının Seçtiği Modüller: ${selectedModulesList} --- Not: ${contactData.note || "Yok"}`
    };

    try {
      const response = await fetch("https://formspree.io/f/mvgnzank", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        if (onShowToast) onShowToast("Kapsam teklifiniz başarıyla alındı. Sizinle iletişime geçeceğiz.");
        onClose();
        // Reset states after close
        setTimeout(() => {
            setStep(1);
            setSelections([]);
        }, 500);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Bir hata oluştu.");
      }
    } catch (error) {
      alert("Bağlantı hatası.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50 shrink-0">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="text-blue-600 dark:text-blue-400" /> 
              {step === 1 ? "Proje Kapsam Belirleyici" : "Teklif Formu"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {step === 1 ? "İhtiyacınız olan modülleri seçin." : "İletişim bilgilerinizi girin, teklifinizi iletelim."}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            {step === 1 ? (
                <div className="grid md:grid-cols-2 gap-3">
                    {options.map((option) => {
                    const isSelected = selections.find(s => s.id === option.id);
                    return (
                        <div 
                        key={option.id}
                        onClick={() => toggleSelection(option)}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isSelected ? `border-${option.color}-500 bg-${option.color}-50 dark:bg-${option.color}-900/20` : 'border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700'}`}
                        >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isSelected ? `bg-${option.color}-500 text-white` : `bg-slate-100 dark:bg-slate-800 text-slate-500`}`}>
                            <option.icon size={18} />
                            </div>
                            <div>
                            <p className="font-bold text-slate-900 dark:text-white text-sm">{option.label}</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{option.category}</p>
                            </div>
                        </div>
                        {isSelected && <CheckCircle2 size={18} className={`text-${option.color}-600 dark:text-${option.color}-400`} />}
                        </div>
                    )
                    })}
                </div>
            ) : (
                <form id="calculator-form" onSubmit={handleCalculatorSubmit} className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4">
                        <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-2">Seçilen Kapsam:</h4>
                        <div className="flex flex-wrap gap-2">
                            {selections.map((s, i) => (
                                <span key={i} className="text-[11px] px-2 py-1 bg-white dark:bg-slate-800 rounded border border-blue-200 dark:border-blue-800 text-slate-600 dark:text-slate-300 font-medium">
                                    {s.label}
                                </span>
                            ))}
                            {selections.length === 0 && <span className="text-xs text-slate-500 italic">Modül seçilmedi.</span>}
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Ad Soyad</label>
                        <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder="Adınız Soyadınız" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">E-posta</label>
                            <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder="mail@ornek.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Telefon</label>
                            <input name="phone" type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder="0555..." />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Ek Notlar (Opsiyonel)</label>
                        <textarea name="note" rows="2" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none resize-none" placeholder="Varsa eklemek istedikleriniz..."></textarea>
                    </div>
                </form>
            )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50/80 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-800 backdrop-blur-sm shrink-0">
          {step === 1 ? (
             <>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">Seçilen Modül Sayısı:</span>
                    <div className="flex items-center gap-2">
                        <motion.div 
                            key={selections.length}
                            initial={{ scale: 1.5, color: '#3b82f6' }}
                            animate={{ scale: 1, color: 'inherit' }}
                            className="font-bold text-slate-900 dark:text-white"
                        >
                            {selections.length} Adet
                        </motion.div>
                    </div>
                </div>
                <button 
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    Teklif Oluşturmak İçin Devam Et <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
             </>
          ) : (
             <div className="flex gap-3">
                 <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                 >
                    <ArrowLeft size={20} />
                 </button>
                 <button 
                    type="submit"
                    form="calculator-form"
                    disabled={isSubmitting}
                    className="flex-1 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                           Gönderiliyor...
                        </>
                    ) : (
                        <>
                           Kapsam Teklifini Gönder <Send size={18} />
                        </>
                    )}
                </button>
             </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">{title}</h2>
      <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mb-6 rounded-full opacity-80"></div>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    </motion.div>
  </div>
);

const AdvancedCRMPreview = () => {
  return (
    <div className="w-full h-full bg-[#0f172a] p-2 flex gap-0 overflow-hidden select-none cursor-default font-sans text-xs shadow-2xl relative">
       {/* Glass Effect Overlay for depth */}
       <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-50 mix-blend-overlay"></div>
       
      {/* Sidebar - Sol Menü */}
      <div className="w-16 flex flex-col items-center py-4 border-r border-slate-800 gap-6 bg-[#0f172a] relative z-20">
         <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">S</div>
         <div className="flex flex-col gap-4 mt-2">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><LayoutDashboard size={18}/></div>
            <div className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors cursor-pointer"><Users size={18}/></div>
            <div className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors cursor-pointer"><ShoppingBagIcon size={18}/></div>
            <div className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors cursor-pointer"><PieChart size={18}/></div>
            <div className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors cursor-pointer"><GitBranch size={18}/></div>
         </div>
         <div className="mt-auto p-2 rounded-lg hover:bg-slate-800 text-slate-400 cursor-pointer"><Settings size={18}/></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-[#0b1120] relative z-10">
        {/* Top Bar */}
        <div className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-[#0f172a]">
           <div className="flex items-center gap-3 text-slate-400">
             <span className="font-semibold text-white">Dashboard</span>
             <ChevronRight size={14}/>
             <span>Genel Bakış</span>
           </div>
           <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full border border-slate-700">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-slate-300">Sistem Online</span>
             </div>
             <Bell size={16} className="text-slate-400 hover:text-white transition-colors cursor-pointer"/>
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 border border-white/20"></div>
           </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="p-6 grid grid-cols-3 gap-4 overflow-hidden relative">
           {/* Card 1: Revenue */}
           <div className="col-span-2 bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <h5 className="text-slate-400 mb-1">Toplam Gelir</h5>
                    <span className="text-2xl font-bold text-white">₺842,500</span>
                 </div>
                 <div className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-[10px] font-bold">+12.5%</div>
              </div>
              {/* Mock Chart Line */}
              <div className="h-24 w-full flex items-end justify-between gap-1">
                 {[40, 65, 45, 80, 55, 90, 70, 95, 85].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }} 
                      animate={{ height: `${h}%` }} 
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className="w-full bg-blue-500/20 hover:bg-blue-500 rounded-t-sm transition-colors cursor-pointer relative group/bar"
                    >
                       <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-0.5 rounded text-[10px] opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10 border border-slate-700">
                          Veri: {h}
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* Card 2: Active Modules */}
           <div className="col-span-1 bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 flex flex-col gap-3">
              <h5 className="text-slate-400 font-semibold mb-1">Aktif Modüller</h5>
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-purple-500/50 transition-colors">
                 <div className="p-1.5 bg-purple-500/20 text-purple-400 rounded"><Boxes size={14}/></div>
                 <div className="flex-1">
                    <div className="text-white font-medium">ERP Stok</div>
                    <div className="text-[10px] text-slate-500">Senkronize</div>
                 </div>
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-orange-500/50 transition-colors">
                 <div className="p-1.5 bg-orange-500/20 text-orange-400 rounded"><Users size={14}/></div>
                 <div className="flex-1">
                    <div className="text-white font-medium">İK Portalı</div>
                    <div className="text-[10px] text-slate-500">32 Çalışan</div>
                 </div>
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-auto pt-2 border-t border-slate-700/50 flex justify-between items-center text-[10px] text-slate-400">
                 <span>CPU: %12</span>
                 <span>RAM: 4.2GB</span>
              </div>
           </div>

           {/* Card 3: Recent Integrations */}
           <div className="col-span-3 bg-[#1e293b] rounded-xl p-4 border border-slate-700/50">
              <div className="flex justify-between items-center mb-3">
                 <h5 className="text-slate-400 font-semibold">Son Entegrasyonlar</h5>
                 <button className="text-blue-400 hover:text-blue-300">Tümü</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <div className="flex items-center gap-3 group/item cursor-pointer">
                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center group-hover/item:scale-110 transition-transform"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="w-5" alt="G"/></div>
                    <div>
                       <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">Google Ads</div>
                       <div className="text-[10px] text-slate-500">Veri Akışı Açık</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 group/item cursor-pointer">
                    <div className="w-8 h-8 rounded bg-[#0052cc] flex items-center justify-center text-white font-bold text-[10px] group-hover/item:scale-110 transition-transform">Jira</div>
                    <div>
                       <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">Atlassian Jira</div>
                       <div className="text-[10px] text-slate-500">Task Otonomasyonu</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Floating Alert Animation */}
           <motion.div 
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 2, duration: 0.5 }}
             className="absolute bottom-4 right-4 bg-slate-800 border border-green-500/30 text-white p-3 rounded-lg shadow-xl flex items-center gap-3 z-20"
           >
              <div className="p-1.5 bg-green-500/20 text-green-400 rounded-full"><Zap size={14}/></div>
              <div>
                 <div className="font-bold text-xs">Otomasyon Tetiklendi</div>
                 <div className="text-[10px] text-slate-400">Yeni sipariş → Faturalandırıldı</div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ plan, isPopular, onSelect }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col overflow-hidden ${isPopular ? 'bg-slate-900 text-white border-transparent shadow-2xl shadow-blue-900/30' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700 group'}`}
  >
    {isPopular && (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20 z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 animate-pulse"></div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg z-20">
          En Çok Tercih Edilen
        </div>
      </>
    )}
    <div className="relative z-10 flex flex-col h-full">
      <h3 className={`text-3xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h3>
      <p className={`text-sm mb-8 font-medium ${isPopular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{plan.description}</p>
      <div className="mb-8 flex items-baseline">
        <span className="text-5xl font-black tracking-tight">{plan.price}</span>
        {plan.price !== "Özel Teklif" && <span className={`text-sm font-medium ml-2 ${isPopular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>/başlangıç</span>}
      </div>
      <ul className="space-y-5 mb-10 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3.5 text-[15px]">
            <div className={`p-1 rounded-full ${isPopular ? 'bg-blue-500/20' : 'bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-500/10 transition-colors'}`}>
              <CheckCircle2 size={18} className={isPopular ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'} />
            </div>
            <span className={`font-medium ${isPopular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={onSelect}
        className={`w-full py-4 rounded-2xl font-bold transition-all mt-auto shadow-md hover:shadow-lg active:scale-[0.98] ${isPopular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/30' : 'bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600/80 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border border-transparent hover:border-blue-200 dark:hover:border-blue-900/50'}`}
      >
        Detaylı Bilgi Al
      </button>
    </div>
  </motion.div>
);

const LogoMarquee = () => (
  <div className="w-full overflow-hidden opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-700 py-6">
    <div className="flex justify-between items-center gap-16 md:gap-32 animate-pulse flex-wrap justify-center">
       <div className="text-2xl font-black text-slate-400 hover:text-[#4285F4] transition-colors flex items-center gap-2 filter drop-shadow-sm hover:scale-110 duration-300 cursor-pointer"><Globe size={24}/> GLOBAL TECH</div>
       <div className="text-2xl font-black text-slate-400 hover:text-[#00A4EF] transition-colors flex items-center gap-2 filter drop-shadow-sm hover:scale-110 duration-300 cursor-pointer"><Database size={24}/> DATA SYSTEMS</div>
       <div className="text-2xl font-black text-slate-400 hover:text-[#FF9900] transition-colors flex items-center gap-2 filter drop-shadow-sm hover:scale-110 duration-300 cursor-pointer"><Cloud size={24}/> CLOUD CORP</div>
       <div className="text-2xl font-black text-slate-400 hover:text-[#1DB954] transition-colors flex items-center gap-2 filter drop-shadow-sm hover:scale-110 duration-300 cursor-pointer"><ShieldCheck size={24}/> SECURE NET</div>
    </div>
  </div>
);

const TechStackMarquee = ({ technologies }) => (
  <div className="flex flex-wrap justify-center gap-8 opacity-90">
     {technologies.map((tech, i) => (
       <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-16 h-16 bg-white dark:bg-slate-800/80 rounded-2xl shadow-md flex items-center justify-center p-3 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 border border-slate-100/50 dark:border-slate-700/50 group-hover:border-blue-200 dark:group-hover:border-blue-900 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain relative z-10 filter grayscale-[20%] group-hover:grayscale-0 transition-all" />
          </div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{tech.name}</span>
       </div>
     ))}
  </div>
);

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800 shadow-md' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm'}`}>
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 dark:text-white transition-colors"
          >
            <span className={`text-lg ${openIndex === i ? 'text-blue-700 dark:text-blue-300' : ''}`}>{faq.question}</span>
            <div className={`p-2 rounded-full transition-all ${openIndex === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30'}`}>
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-blue-100/50 dark:border-blue-900/20 mt-2 text-[15px]">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const TestimonialSlider = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-16 shadow-2xl dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 overflow-hidden group hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-500">
       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
       <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
       <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>

       <AnimatePresence mode='wait'>
         <motion.div 
           key={current}
           initial={{ opacity: 0, x: 40 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -40 }}
           transition={{ duration: 0.4, ease: "easeInOut" }}
           className="text-center relative z-10"
         >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-[6px] border-blue-50 dark:border-slate-700 shadow-xl group-hover:border-blue-200 dark:group-hover:border-blue-900 transition-all">
               <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-full h-full object-cover transform scale-110" />
            </div>
            <div className="flex justify-center gap-1.5 mb-8">
               {[1,2,3,4,5].map(s => <Star key={s} size={22} className="fill-amber-400 text-amber-400 drop-shadow-sm" />)}
            </div>
            <p className="text-xl md:text-3xl font-medium text-slate-900 dark:text-white mb-10 leading-relaxed italic tracking-tight">"{testimonials[current].text}"</p>
            <div>
               <h4 className="font-extrabold text-xl text-slate-900 dark:text-white mb-2">{testimonials[current].name}</h4>
               <p className="text-blue-600 dark:text-blue-400 font-semibold">{testimonials[current].role}</p>
            </div>
         </motion.div>
       </AnimatePresence>
       
       <div className="flex justify-center gap-3 mt-12 relative z-10">
         {testimonials.map((_, i) => (
           <button 
             key={i} 
             onClick={() => setCurrent(i)}
             className={`h-3 rounded-full transition-all duration-300 ${current === i ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-10 shadow-md shadow-blue-500/30' : 'bg-slate-300 dark:bg-slate-600 w-3 hover:bg-blue-400 dark:hover:bg-blue-500 hover:scale-125'}`}
           />
         ))}
       </div>
    </div>
  );
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[120] bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Çerez Politikası</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Deneyiminizi iyileştirmek için çerezleri kullanıyoruz. Sitemizi kullanarak bunu kabul etmiş sayılırsınız.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIsVisible(false)} className="flex-1 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
              Reddet
            </button>
            <button onClick={handleAccept} className="flex-1 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-500/20">
              Kabul Et
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Timeline = () => {
  const events = [
    { year: "2018", title: "Kuruluş", desc: "Ankara'da küçük bir ofiste 3 kişilik çekirdek ekiple yolculuğumuz başladı." },
    { year: "2019", title: "İlk Büyük Proje", desc: "Global bir lojistik firması için geliştirdiğimiz ERP sistemi ile sektöre adımızı duyurduk." },
    { year: "2021", title: "Ar-Ge Merkezi", desc: "Teknopark ofisimize geçiş yaptık ve resmi Ar-Ge merkezi unvanını aldık." },
    { year: "2023", title: "Global Açılım", desc: "Avrupa ve Orta Doğu pazarına açılarak ihracat odaklı büyümeye geçtik." },
    { year: "2024", title: "Yapay Zeka Yatırımı", desc: "Kendi AI laboratuvarımızı kurarak akıllı iş çözümleri üretmeye başladık." }
  ];

  return (
    <div className="relative py-10">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2"></div>
      <div className="space-y-12">
        {events.map((event, i) => (
          <Reveal key={i}>
            <div className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full md:w-auto pl-12 md:pl-0 md:text-right">
                {i % 2 === 0 && (
                  <div className="hidden md:block">
                    <span className="text-5xl font-black text-slate-200 dark:text-slate-800">{event.year}</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{event.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">{event.desc}</p>
                  </div>
                )}
                <div className="md:hidden">
                    <span className="text-4xl font-black text-blue-600 dark:text-blue-400">{event.year}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{event.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{event.desc}</p>
                </div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 transform -translate-x-1/2 z-10 shadow-lg"></div>
              
              <div className="flex-1 w-full md:w-auto pl-12 md:pl-0 md:text-left">
                {i % 2 !== 0 && (
                  <div className="hidden md:block">
                    <span className="text-5xl font-black text-slate-200 dark:text-slate-800">{event.year}</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{event.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">{event.desc}</p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-900/20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Teknoloji Bültenimize Abone Olun</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">En yeni teknoloji trendleri, yazılım dünyasından haberler ve Sarfea'dan güncellemeler için bültenimize katılın.</p>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="E-posta adresiniz" 
            className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 transition-colors backdrop-blur-sm"
          />
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
            Abone Ol
          </button>
        </form>
      </div>
    </section>
  );
};

function useInView(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
    
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = ({ activePage, setActivePage, isScrolled, darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-indigo-500/5 py-3 border-b border-slate-200/50 dark:border-slate-800/50 supports-[backdrop-filter]:bg-white/60' : 'bg-transparent py-6'}`}>
      {isScrolled && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => handleNavClick('home')}>
          <img src={logoImage} alt="SARFEA Logo" className="h-11 w-auto object-contain group-hover:scale-105 group-active:scale-95 transition-all duration-300" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['home', 'solutions', 'process', 'about', 'contact'].map((page) => (
            <button 
              key={page}
              onClick={() => handleNavClick(page)}
              className={`text-[13px] font-bold uppercase tracking-widest transition-all relative group py-2 ${activePage === page ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              {page === 'home' ? 'Anasayfa' : 
               page === 'solutions' ? 'Teknolojiler' : 
               page === 'process' ? 'Süreç' :
               page === 'about' ? 'Kurumsal' : 'İletişim'}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${activePage === page ? 'scale-x-100' : ''}`}></span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="w-11 h-11 rounded-full border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-yellow-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700">
            {darkMode ? <Sun size={20} className="hover:rotate-90 transition-transform" /> : <Moon size={20} className="hover:-rotate-12 transition-transform" />}
          </button>
          <button onClick={() => handleNavClick('contact')} className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 text-white dark:text-slate-900 px-7 py-3 rounded-full font-bold transition-all shadow-lg shadow-slate-900/10 dark:shadow-white/5 hover:shadow-blue-500/30 flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]">
            <Zap size={18} className="group-hover:fill-current transition-colors"/> Proje Başlat
          </button>
        </div>

        <button className="md:hidden p-2.5 text-slate-700 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 border-t border-slate-100 dark:border-slate-800 shadow-2xl md:hidden overflow-hidden backdrop-blur-xl"
          >
            <div className="p-4 space-y-2">
              {['home', 'solutions', 'process', 'about', 'contact'].map((page) => (
                <button 
                  key={page} 
                  onClick={() => handleNavClick(page)} 
                  className={`block w-full text-left p-4 rounded-2xl font-bold transition-all ${activePage === page ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 pl-6 border-l-4 border-blue-600' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:pl-6'}`}
                >
                  <span className="capitalize flex items-center justify-between">
                    {page === 'home' ? 'Anasayfa' : 
                     page === 'solutions' ? 'Teknolojiler' : 
                     page === 'process' ? 'Süreç' :
                     page === 'about' ? 'Kurumsal' : 'İletişim'}
                    {activePage === page && <ChevronRight size={18} />}
                  </span>
                </button>
              ))}
              <div className="flex items-center justify-between px-4 py-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mt-2">
                  <span className="text-slate-700 dark:text-slate-300 font-bold flex items-center gap-2">{darkMode ? <Moon size={18}/> : <Sun size={18}/>} Karanlık Mod</span>
                  <button onClick={() => setDarkMode(!darkMode)} className={`w-14 h-8 rounded-full relative transition-colors ${darkMode ? 'bg-blue-600' : 'bg-slate-300'}`}>
                     <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all shadow-sm flex items-center justify-center ${darkMode ? 'translate-x-6' : ''}`}>
                        {darkMode ? <Moon size={14} className="text-blue-600"/> : <Sun size={14} className="text-yellow-500"/>}
                     </div>
                  </button>
              </div>
              <button onClick={() => handleNavClick('contact')} className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <Zap size={18} fill="currentColor"/> Proje Başlat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = ({ navigateTo, onOpenCalculator }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-80 h-80 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-soft-light" />
        <motion.div style={{ y: y2 }} className="absolute top-40 right-10 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-soft-light" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-[100px] animate-pulse animation-delay-4000 mix-blend-multiply dark:mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] mask-image-radial-gradient"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card text-blue-700 dark:text-blue-300 text-sm font-bold shadow-sm bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-md border border-blue-100 dark:border-blue-800 hover:bg-blue-100/80 dark:hover:bg-blue-900/50 transition-colors cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-500 to-indigo-500"></span>
              </span>
              Sarfea Enterprise v5.0 Yayında
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Sınırsız <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-gradient-x">
                Dijital Ekosistemler
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
              Web, Mobil, ERP, CRM, Yapay Zeka ve IoT entegrasyonları. İşletmenizin ihtiyaç duyduğu her şeyi tek bir çatı altında kodluyoruz.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button onClick={() => navigateTo('contact')} className="px-10 py-4 bg-gradient-to-r from-slate-900 to-indigo-900 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 flex items-center gap-3 group">
                Hemen Başlayalım <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={onOpenCalculator} className="px-10 py-4 bg-white/80 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-2xl font-bold transition-all hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 backdrop-blur-sm flex items-center gap-3 group active:scale-95">
                <Calculator size={20} className="text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform"/> Kapsam Belirle
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
              <div className="flex -space-x-5 pl-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white dark:border-slate-900 bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm hover:z-10 hover:scale-110 transition-all relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 drop-shadow-sm">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-bold mt-1"><span className="text-slate-900 dark:text-white">100+</span> Kurumsal Referans</p>
              </div>
            </div>
          </motion.div>

          {/* SAĞ TARAF - GELİŞMİŞ CRM MOCKUP (Artık Tilt Efektli!) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block perspective-1000"
          >
            {/* 3D Tilt Wrapper Ekledim */}
            <TiltContainer>
                <div className="relative z-10 bg-[#0f172a] rounded-[1.5rem] p-0 shadow-2xl shadow-blue-900/40 border-4 border-slate-800 transition-all duration-300 group overflow-hidden">
                    <AdvancedCRMPreview />
                </div>
            </TiltContainer>
            
            {/* Background Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 bg-white/90 dark:bg-slate-800/90 p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white/20 dark:border-slate-700/30 z-20 backdrop-blur-md group hover:border-green-200 dark:hover:border-green-900/50 transition-colors pointer-events-none"
            >
              <div className="absolute inset-0 bg-green-500/5 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sistem Durumu</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-1">%99.9 <span className="text-green-500 text-xs">Uptime</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 -left-12 bg-white/90 dark:bg-slate-800/90 p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white/20 dark:border-slate-700/30 z-20 backdrop-blur-md group hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors pointer-events-none"
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Share2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Entegrasyon</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">API Ready</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
    
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mvgnzank", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setToast("Proje detaylarınız teknik ekibimize iletildi. En kısa sürede dönüş yapacağız.");
        e.target.reset();
      } else {
        const errorData = await response.json();
        setToast(errorData.error || "Bir hata oluştu. Lütfen tekrar deneyiniz.");
      }
    } catch (error) {
      setToast("Bağlantı hatası. Lütfen internetinizi kontrol ediniz.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContent = () => {
    switch(activePage) {
      case 'home':
        return (
          <>
            <HeroSection navigateTo={setActivePage} onOpenCalculator={() => setIsCalculatorOpen(true)} />
            
            <section className="py-24 bg-white dark:bg-slate-900 relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                  title="Entegre Çalıştığımız Devler" 
                  subtitle="Global standartlarda altyapı ve servis sağlayıcılarla tam uyumlu çalışıyoruz." 
                />
                <LogoMarquee />
              </div>
            </section>

            <section className="py-32 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <Reveal>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                      Sadece Kod Değil, <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Uçtan Uca Çözüm</span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
                      Sarfea olarak biz, bir yazılım şirketinden fazlasıyız. İş süreçlerinizi analiz eden, darboğazları tespit eden ve size özel dijital mimariyi kuran teknoloji ortağınızız. ERP'den CRM'e, IoT'den Yapay Zeka'ya kadar her noktada varız.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8">
                      <SpotlightCard className="p-6 rounded-3xl" color="blue">
                        <div className="text-4xl font-black text-blue-600 dark:text-blue-500 mb-2"><CountUp end={45} />+</div>
                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Modül & Entegrasyon</div>
                      </SpotlightCard>
                      
                      <SpotlightCard className="p-6 rounded-3xl" color="purple">
                        <div className="text-4xl font-black text-purple-600 dark:text-purple-500 mb-2"><CountUp end={120} />+</div>
                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tamamlanan Sistem</div>
                      </SpotlightCard>
                      
                      <SpotlightCard className="p-6 rounded-3xl" color="green">
                        <div className="text-4xl font-black text-green-600 dark:text-green-500 mb-2"><CountUp end={99} />%</div>
                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sistem Uptime</div>
                      </SpotlightCard>
                      
                      <SpotlightCard className="p-6 rounded-3xl" color="orange">
                        <div className="text-4xl font-black text-orange-600 dark:text-orange-500 mb-2"><CountUp end={24} />/7</div>
                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">DevOps Destek</div>
                      </SpotlightCard>
                    </div>
                  </Reveal>
                  
                  <Reveal delay={200}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] transform rotate-3 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Team" 
                        className="relative rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-800 z-10 transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            <section className="py-32 bg-white dark:bg-slate-900 relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                  title="Teknoloji Yığınımız" 
                  subtitle="Modern, güvenilir ve ölçeklenebilir altyapılar için kullandığımız teknolojiler." 
                />
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {[
                    { name: "React & Next.js", icon: Code2, desc: "Modern web arayüzleri", color: "blue" },
                    { name: "Node.js & Python", icon: Server, desc: "Güçlü backend sistemleri", color: "green" },
                    { name: "AWS & Azure", icon: Cloud, desc: "Bulut altyapı çözümleri", color: "orange" },
                    { name: "Docker & K8s", icon: Boxes, desc: "Container orkestrasyon", color: "cyan" },
                    { name: "PostgreSQL & MongoDB", icon: Database, desc: "Esnek veritabanı sistemleri", color: "purple" },
                    { name: "CI/CD Pipeline", icon: GitBranch, desc: "Otomatik deployment", color: "pink" },
                    { name: "Microservices", icon: Layers, desc: "Modüler mimari tasarım", color: "indigo" },
                    { name: "REST & GraphQL", icon: Terminal, desc: "API geliştirme", color: "teal" }
                  ].map((tech, i) => (
                    <Reveal key={i} delay={i * 50}>
                      <SpotlightCard className={`p-6 rounded-2xl h-full flex flex-col items-center text-center group cursor-default`} color={tech.color}>
                        <div className={`w-16 h-16 bg-${tech.color}-100 dark:bg-${tech.color}-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-${tech.color}-500/20`}>
                          <tech.icon size={32} className={`text-${tech.color}-600 dark:text-${tech.color}-400`} />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{tech.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{tech.desc}</p>
                      </SpotlightCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-32 bg-slate-50 dark:bg-slate-950/50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                  title="Merak Edilenler" 
                  subtitle="Teknik süreçler ve işleyiş hakkında sık sorulan sorular." 
                />
                <FAQAccordion faqs={[
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
                ]} />
              </div>
            </section>

            <section className="py-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-transparent"></div>
              <motion.div 
                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] bg-blue-400/20 rounded-full blur-[150px]"
              />
              <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[100%] bg-purple-400/20 rounded-full blur-[150px]"
              />

              <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-sm">
                  Projenizi Hayata Geçirmeye Hazır mısınız?
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
                  Fikrinizi dinleyelim, stratejinizi belirleyelim ve dijital dönüşümünüzü başlatalım. Geleceği bugünden kodlayın.
                </p>
                <button 
                  onClick={() => setActivePage('contact')}
                  className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 hover:-translate-y-1 active:scale-[0.98] flex items-center gap-3 mx-auto group"
                >
                  Ücretsiz Analiz Toplantısı <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </section>
          </>
        );

      case 'solutions':
        return (
          <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <SectionHeader 
                title="Geniş Hizmet Yelpazemiz" 
                subtitle="İhtiyacınız olan teknoloji ne olursa olsun, uzman ekibimizle yanınızdayız." 
              />
              
              <div className="mb-24">
                <TechStackMarquee technologies={[
                  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
                  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
                  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
                  { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
                  { name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" }
                ]} />
              </div>

              {/* Spotlight Efekti Eklenmiş Çözüm Kartları */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32">
                {[
                  {
                    icon: LayoutDashboard,
                    title: "Web Platformları",
                    desc: "Kurumsal, hızlı ve ölçeklenebilir web uygulamaları.",
                    tags: ["React", "Next.js", "PWA"],
                    color: "blue"
                  },
                  {
                    icon: Smartphone,
                    title: "Mobil Uygulama",
                    desc: "iOS ve Android dünyasında yerinizi alın.",
                    tags: ["React Native", "Flutter", "Swift"],
                    color: "purple"
                  },
                  {
                    icon: ShoppingBagIcon,
                    title: "E-Ticaret & B2B",
                    desc: "Satışlarınızı artıran güvenli altyapılar.",
                    tags: ["Pazaryeri Entegrasyonu", "Ödeme"],
                    color: "green"
                  },
                  {
                    icon: Boxes,
                    title: "ERP & Stok",
                    desc: "Depo, üretim ve stok süreçlerini optimize edin.",
                    tags: ["Barkod", "Üretim Takip", "Lojistik"],
                    color: "orange"
                  },
                  {
                    icon: Users,
                    title: "CRM Çözümleri",
                    desc: "Müşteri ilişkilerinizi ve satış huninizi yönetin.",
                    tags: ["Pipeline", "Teklif", "Aktivite"],
                    color: "pink"
                  },
                  {
                    icon: GitBranch,
                    title: "Entegrasyon (API)",
                    desc: "Farklı sistemleri birbirine bağlayan köprüler.",
                    tags: ["SAP", "Mikro", "Logo", "Nebim"],
                    color: "cyan"
                  },
                  {
                    icon: Cpu,
                    title: "Yapay Zeka (AI)",
                    desc: "Verilerinizden anlamlı içgörüler çıkarın.",
                    tags: ["ML", "Tahminleme", "Chatbot"],
                    color: "indigo"
                  },
                  {
                    icon: Wifi,
                    title: "IoT Sistemler",
                    desc: "Cihazlarınızı internete bağlayıp yönetin.",
                    tags: ["MQTT", "Sensör", "Otomasyon"],
                    color: "teal"
                  }
                ].map((solution, i) => (
                  <Reveal key={i} delay={i * 50}>
                     {/* Spotlight Card Wrapper Kullanıldı */}
                    <SpotlightCard className="rounded-[2rem] p-6 h-full flex flex-col" color={solution.color}>
                      <div className={`w-14 h-14 rounded-2xl bg-${solution.color}-100 dark:bg-${solution.color}-900/30 flex items-center justify-center text-${solution.color}-600 dark:text-${solution.color}-400 mb-6 group-hover:scale-110 transition-transform shadow-md shadow-${solution.color}-500/10 relative z-10`}>
                        <solution.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{solution.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 relative z-10 leading-relaxed flex-1">{solution.desc}</p>
                      <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                        {solution.tags.map((tag, idx) => (
                          <span key={idx} className={`text-[10px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>

              <div className="mb-24">
                <SectionHeader 
                  title="Esnek İş Modelleri" 
                  subtitle="Projenizin büyüklüğüne göre en uygun çalışma modelini seçelim." 
                />
                <div className="grid md:grid-cols-3 gap-10 items-start">
                  <PricingCard 
                    onSelect={() => setActivePage('contact')}
                    plan={{
                      name: "MVP / Startup",
                      price: "Proje Bazlı",
                      description: "Fikrini hızlıca hayata geçirmek isteyen girişimciler için.",
                      features: ["Temel Özellik Seti", "Hızlı Pazara Çıkış", "Ölçeklenebilir Mimari", "Web & Mobil Uyum", "3 Ay Garanti"]
                    }} 
                  />
                  <PricingCard 
                    isPopular={true}
                    onSelect={() => setActivePage('contact')}
                    plan={{
                      name: "Kurumsal Dönüşüm",
                      price: "Anahtar Teslim",
                      description: "Şirket içi süreçleri dijitalleştirmek isteyen KOBİ'ler için.",
                      features: ["Detaylı Analiz & Planlama", "ERP/CRM Modülleri", "Eski Sistem Entegrasyonu", "Personel Eğitimi", "1 Yıl Bakım & Destek"]
                    }} 
                  />
                  <PricingCard 
                    onSelect={() => setActivePage('contact')}
                    plan={{
                      name: "Dedicated Team",
                      price: "Aylık Kiralama",
                      description: "Uzun soluklu projeler için size özel yazılım ekibi.",
                      features: ["Size Özel Senior Geliştiriciler", "Esnek Sprint Planlaması", "Doğrudan Yönetim Hakkı", "Sürekli Geliştirme (CI/CD)", "7/24 DevOps Desteği"]
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <SectionHeader 
                title="Nasıl Çalışıyoruz?" 
                subtitle="Fikirden ürüne giden yolda şeffaf ve çevik bir süreç." 
              />
              
              <div className="relative mt-24">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20 hidden md:block rounded-full"></div>
                
                {[
                  {
                    step: "01",
                    title: "Keşif ve Analiz",
                    desc: "Sizi dinliyoruz. İş süreçlerinizi, hedeflerinizi ve acı noktalarınızı analiz edip teknik gereksinim dokümanını hazırlıyoruz.",
                    icon: Search,
                    color: "blue"
                  },
                  {
                    step: "02",
                    title: "UX/UI Tasarım",
                    desc: "Kullanıcı deneyimini merkeze alarak, modern, anlaşılır ve marka kimliğinize uygun arayüzler tasarlıyoruz.",
                    icon: LayoutDashboard,
                    color: "purple"
                  },
                  {
                    step: "03",
                    title: "Çevik Geliştirme",
                    desc: "Sprint'ler halinde ilerliyoruz. Her iki haftada bir size çalışan bir demo sunarak geri bildirimlerinizi alıyoruz.",
                    icon: Code2,
                    color: "pink"
                  },
                  {
                    step: "04",
                    title: "Test ve Entegrasyon",
                    desc: "Otomatik test senaryoları, güvenlik taramaları ve performans testleri ile sistemin kusursuzluğunu doğruluyoruz.",
                    icon: ShieldCheck,
                    color: "orange"
                  },
                  {
                    step: "05",
                    title: "Canlıya Geçiş ve Destek",
                    desc: "Sistemi devreye alıyor, eğitimleri veriyor ve sonrasında bakım/onarım hizmetlerimizle sistemin sağlığını koruyoruz.",
                    icon: Rocket,
                    color: "green"
                  }
                ].map((item, i) => (
                  <Reveal key={i}>
                    <div className={`flex items-center justify-between mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0`}>
                      <div className="w-full md:w-5/12 relative">
                         {/* Card Hover Effect Enhanced */}
                        <SpotlightCard className={`p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border-2 border-slate-100 dark:border-slate-800 relative overflow-hidden transition-all duration-500 hover:border-${item.color}-300 dark:hover:border-${item.color}-800/50`} color={item.color}>
                          <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-${item.color}-600 dark:text-${item.color}-400 transform group-hover:scale-110 duration-500`}>
                            <item.icon size={120} />
                          </div>
                          <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-100/0 dark:from-slate-800 dark:to-slate-900/0 absolute bottom-4 right-6 z-0 opacity-50 select-none">{item.step}</span>
                          <div className="relative z-10">
                            <div className={`w-14 h-14 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-2xl flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 mb-6 shadow-md shadow-${item.color}-500/10 group-hover:scale-110 transition-transform`}>
                              <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                          </div>
                        </SpotlightCard>
                        {i !== 4 && <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full h-24 w-1 bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800"></div>}
                      </div>
                      
                      <div className="hidden md:flex w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full items-center justify-center text-white font-black z-10 border-4 border-white dark:border-slate-950 shadow-lg shadow-blue-500/20 transform hover:scale-125 transition-transform">
                        {i + 1}
                      </div>
                      
                      <div className="w-full md:w-5/12"></div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <SectionHeader 
                title="Biz Kimiz?" 
                subtitle="Teknolojiyi bir araç değil, bir sanat olarak gören tutkulu bir ekibiz." 
              />

              <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                <Reveal>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 group">
                    <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Modern Office" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-10 z-20">
                      <div className="text-white">
                        <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-bold mb-3 shadow-sm">AR-GE MERKEZİ</div>
                        <h3 className="text-3xl font-bold mb-3">İstanbul, Maslak</h3>
                        <p className="text-slate-200 font-medium leading-relaxed max-w-md">Global projelerin kodlandığı, inovasyonun kalbinin attığı merkez ofisimiz.</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
                
                <Reveal delay={200}>
                  <div className="space-y-10">
                    <div>
                       <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                         <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm"><Rocket size={22}/></span>
                         Vizyonumuz
                       </h3>
                       <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                         <p>
                           Sarfea Yazılım, işletmelerin dijital potansiyelini en üst düzeye çıkarmak için kuruldu. Hedefimiz, karmaşık iş süreçlerini basit, yönetilebilir ve akıllı yazılımlara dönüştürmektir.
                         </p>
                         <p>
                           Sadece kod yazmıyoruz; geleceğin iş modellerini inşa ediyoruz. Sürdürülebilirlik, ölçeklenebilirlik ve güvenlik, geliştirdiğimiz her satır kodun DNA'sında bulunur.
                         </p>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <SpotlightCard className="p-6 rounded-3xl" color="blue">
                        <Target className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={36} />
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Sonuç Odaklılık</h4>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">Ölçülebilir başarı kriterleri.</p>
                      </SpotlightCard>
                      <SpotlightCard className="p-6 rounded-3xl" color="orange">
                        <Lightbulb className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform" size={36} />
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">İnovasyon</h4>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">En yeni teknolojiler.</p>
                      </SpotlightCard>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="mb-32">
                 <SectionHeader 
                    title="Yolculuğumuz" 
                    subtitle="Küçük bir ofisten global bir teknoloji şirketine uzanan hikayemiz." 
                 />
                 <Timeline />
              </div>

              <div className="mb-24">
                <h3 className="text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-16 tracking-tight">Çözüm Alanlarımız</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { 
                      icon: Briefcase, 
                      title: "Kurumsal Yazılım", 
                      desc: "Şirket içi iş akışlarınızı dijitalleştiren, verimlilik artıran ERP ve CRM sistemleri.",
                      items: ["İnsan Kaynakları", "Finans Modülleri", "Satış Yönetimi"],
                      color: "blue" 
                    },
                    { 
                      icon: ShoppingBagIcon, 
                      title: "E-Ticaret Çözümleri", 
                      desc: "Online satış kanallarınızı entegre eden, stok ve sipariş yönetimi sunan platformlar.",
                      items: ["B2B & B2C", "Pazaryeri Sync", "Ödeme Entegrasyonu"],
                      color: "green" 
                    },
                    { 
                      icon: Smartphone, 
                      title: "Mobil Ekosistem", 
                      desc: "iOS ve Android için native ve cross-platform mobil uygulamalar.",
                      items: ["React Native", "Flutter", "PWA"],
                      color: "purple" 
                    },
                    { 
                      icon: Cpu, 
                      title: "Yapay Zeka & ML", 
                      desc: "Verilerinizden öğrenen, tahmin yapan ve optimize eden akıllı sistemler.",
                      items: ["Chatbot", "Tahminleme", "NLP"],
                      color: "indigo" 
                    },
                    { 
                      icon: Wifi, 
                      title: "IoT & Otomasyon", 
                      desc: "Cihazlarınızı internete bağlayan, uzaktan kontrol ve izleme imkanı sunan çözümler.",
                      items: ["Sensör Entegrasyonu", "MQTT", "Real-time Monitoring"],
                      color: "orange" 
                    },
                    { 
                      icon: ShieldCheck, 
                      title: "Güvenlik & DevOps", 
                      desc: "Sisteminizin 7/24 ayakta kalmasını sağlayan altyapı ve güvenlik hizmetleri.",
                      items: ["Penetrasyon Testi", "CI/CD", "Monitoring"],
                      color: "red" 
                    }
                  ].map((solution, i) => (
                    <Reveal key={i} delay={i * 80}>
                      <SpotlightCard className="p-8 rounded-[2rem] h-full flex flex-col" color={solution.color}>
                        <div className={`w-16 h-16 bg-${solution.color}-100 dark:bg-${solution.color}-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-${solution.color}-500/20`}>
                          <solution.icon size={32} className={`text-${solution.color}-600 dark:text-${solution.color}-400`} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{solution.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1 font-medium">{solution.desc}</p>
                        <div className="space-y-2">
                          {solution.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${solution.color}-500`}></div>
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </SpotlightCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <SectionHeader 
                title="Projeyi Başlatalım" 
                subtitle="Teknik ekibimizle görüşmek için formu doldurun veya bizi arayın." 
              />

              <div className="grid lg:grid-cols-5 gap-12 items-start">
                <Reveal className="lg:col-span-3">
                  <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none"></div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm"><MessageSquare size={22}/></span>
                        Talep Formu
                    </h3>
                    <form className="space-y-6" onSubmit={handleContactSubmit}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Adınız Soyadınız</label>
                          <input required name="name" type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" placeholder="Ad Soyad" />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">E-posta Adresiniz</label>
                          <input required name="email" type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" placeholder="ornek@sirket.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Proje Türü</label>
                        <div className="relative">
                           <select name="projectType" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium appearance-none cursor-pointer">
                             <option value="Özel Yazılım / CRM / ERP">Özel Yazılım / CRM / ERP</option>
                             <option value="Mobil Uygulama Geliştirme">Mobil Uygulama Geliştirme</option>
                             <option value="Web Sitesi / E-Ticaret">Web Sitesi / E-Ticaret</option>
                             <option value="Sistem Entegrasyonu">Sistem Entegrasyonu</option>
                             <option value="Yapay Zeka / IoT">Yapay Zeka / IoT</option>
                             <option value="Diğer">Diğer</option>
                           </select>
                           <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Proje Detayları</label>
                        <textarea required name="message" rows="5" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium resize-none" placeholder="Projenizden, hedeflerinizden ve ihtiyaç duyduğunuz özelliklerden bahsedin..."></textarea>
                      </div>
                      <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white py-5 rounded-xl font-bold transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-3 active:scale-[0.98]">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <Send size={22} /> Teklif İste
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </Reveal>

                <div className="lg:col-span-2 space-y-8">
                  <Reveal delay={200}>
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-blue-900/30 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/30 transition-colors duration-500"></div>
                      <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                          <AlertCircle size={24} className="text-blue-200"/> İletişim Kanalları
                      </h3>
                      <div className="space-y-8 relative z-10">
                        <div className="flex items-start gap-5 group/item">
                          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/20 transition-colors shadow-inner-white">
                            <Mail size={24} className="text-blue-100"/>
                          </div>
                          <div>
                            <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">E-posta</p>
                            <p className="font-bold text-xl">gebcay@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-5 group/item">
                          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/20 transition-colors shadow-inner-white">
                            <Phone size={24} className="text-blue-100"/>
                          </div>
                          <div>
                            <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Telefon</p>
                            <p className="font-bold text-xl">+90 544 572 26 34</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-5 group/item">
                          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/20 transition-colors shadow-inner-white">
                            <Globe size={24} className="text-blue-100"/>
                          </div>
                          <div>
                            <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Merkez Ofis</p>
                            <p className="font-bold text-lg leading-tight">Ovacık, Yozgat Blv. No: 20, 06280 Keçiören/Ankara</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-5 group/item">
                          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/20 transition-colors shadow-inner-white">
                            <Clock size={24} className="text-blue-100"/>
                          </div>
                          <div>
                            <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Çalışma Saatleri</p>
                            <p className="font-bold text-lg leading-tight">Pzt - Cum: 09:00 - 18:00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={300}>
                    <div className="bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] h-96 w-full border-4 border-white dark:border-slate-900 shadow-xl relative overflow-hidden group">
                      <iframe 
                        src="https://maps.google.com/maps?q=40.0026993,32.8235635&hl=tr&z=17&output=embed" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                      ></iframe>
                      <div className="absolute bottom-4 right-4 z-10">
                        <a 
                          href="https://www.google.com/maps/place/Gamador+Meydan/@40.0021238,32.821621,17z/data=!4m6!3m5!1s0x14d34df67a613f7d:0x3848390771d795a6!8m2!3d40.0026993!4d32.8235635" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                          <ExternalLink size={16} /> Yol Tarifi Al
                        </a>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans selection:bg-purple-500/30 dark:selection:bg-blue-500/30">
      <CookieConsent />
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-[100] shadow-[0_1px_8px_rgba(59,130,246,0.5)]" style={{ scaleX }} />
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-40 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
            >
                <ArrowUp size={24} />
            </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {isCalculatorOpen && <ProjectCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} onShowToast={(msg) => setToast(msg)} />}
      </AnimatePresence>

      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isScrolled={isScrolled} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={activePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>

      <Newsletter />
      <footer className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-blue-900/50 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-900/50">S</div>
                <span className="text-2xl font-black tracking-tighter">SARFEA<span className="text-blue-500">.</span></span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed font-medium">
                Geleceği kodluyoruz. İşletmenizi dijital dünyada bir adım öne taşıyacak yenilikçi ve sürdürülebilir yazılım çözümleri üretiyoruz.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2"><ChevronRight size={18} className="text-blue-500"/> Site Haritası</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><button onClick={() => setActivePage('home')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Anasayfa</button></li>
                <li><button onClick={() => setActivePage('solutions')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Teknolojiler</button></li>
                <li><button onClick={() => setActivePage('process')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Süreç</button></li>
                <li><button onClick={() => setActivePage('about')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Kurumsal</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2"><ChevronRight size={18} className="text-blue-500"/> Kurumsal</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><button className="hover:text-blue-400 transition-colors">Gizlilik Politikası</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Kullanım Şartları</button></li>
                <li><button className="hover:text-blue-400 transition-colors">KVKK Aydınlatma</button></li>
                <li><button className="hover:text-blue-400 transition-colors">Kariyer</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
            <p>&copy; 2024 Sarfea Yazılım Teknolojileri A.Ş. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group"><span className="font-bold">In</span></button>
              <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all group"><span className="font-bold">Tw</span></button>
              <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all group"><span className="font-bold">Ig</span></button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;