import React, { useState, useEffect, useRef } from 'react';
import logoImage from './assets/logo.png';
import logoDarkImage from './assets/logo-dark.png';
import { 
  LayoutDashboard, Smartphone, BarChart3, CheckCircle2, ArrowRight, 
  Menu, X, Mail, Phone, Globe, Zap, 
  Database, Server, Rocket, Cpu, XCircle, CheckCircle,
  Code2, ShieldCheck, Users, MessageSquare, ChevronDown, Play,
  Layers, Monitor, Briefcase, Calculator, Search, ShoppingBag as ShoppingBagIcon,
  Settings, FileText, Truck, Bell, CreditCard, ArrowUp,
  Sun, Moon, Send, ExternalLink, Lightbulb, Target, Award, Cloud, Star, TrendingUp, Clock,
  ChevronRight, Plus, Minus, Laptop, AlertCircle, Share2, PieChart, Activity,
  Boxes, GitBranch, Terminal, Wifi, Lock, Fingerprint, MousePointer2, ArrowLeft, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { translations } from './translations';

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

const Toast = ({ message, onClose, t }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, x: '50%' }}
    animate={{ opacity: 1, y: 0, x: '50%' }}
    exit={{ opacity: 0, y: 20, x: '50%' }}
    className="fixed bottom-8 right-1/2 translate-x-1/2 md:right-8 md:translate-x-0 z-[100] bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-xl shadow-2xl shadow-indigo-500/20 flex items-center gap-3 min-w-[300px] border border-white/10 dark:border-slate-200/20"
  >
    <CheckCircle className="text-green-500" size={24} />
    <div>
      <h4 className="font-bold text-sm">{t?.toast?.title || "Talep Alındı!"}</h4>
      <p className="text-sm opacity-90">{message}</p>
    </div>
    <button onClick={onClose} className="ml-auto opacity-50 hover:opacity-100 transition-opacity">
      <X size={18} />
    </button>
  </motion.div>
);

// GÜNCELLENMİŞ PROJECT CALCULATOR (FORMSPREE ENTEGRASYONLU)
const ProjectCalculator = ({ isOpen, onClose, onShowToast, t }) => {
  const [selections, setSelections] = useState([]);
  const [step, setStep] = useState(1); // 1: Seçim, 2: İletişim Formu
  const [isSubmitting, setIsSubmitting] = useState(false);

  const staticOptions = [
    { id: 'web', icon: Laptop, color: 'blue' },
    { id: 'mobile', icon: Smartphone, color: 'purple' },
    { id: 'crm', icon: Users, color: 'green' },
    { id: 'erp', icon: Boxes, color: 'orange' },
    { id: 'api', icon: GitBranch, color: 'cyan' },
    { id: 'payment', icon: CreditCard, color: 'red' },
    { id: 'ai', icon: Cpu, color: 'indigo' },
    { id: 'iot', icon: Wifi, color: 'teal' },
    { id: 'sec', icon: ShieldCheck, color: 'slate' },
  ];

  const options = staticOptions.map((opt, i) => ({
      ...opt,
      label: t.calculator.options[i].label,
      category: t.calculator.options[i].category
  }));

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
        if (onShowToast) onShowToast(t.calculator.success);
        onClose();
        // Reset states after close
        setTimeout(() => {
            setStep(1);
            setSelections([]);
        }, 500);
      } else {
        const errorData = await response.json();
        alert(errorData.error || t.calculator.error);
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
              {step === 1 ? t.calculator.step1_title : t.calculator.step2_title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {step === 1 ? t.calculator.step1_desc : t.calculator.step2_desc}
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
                        <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-2">{t.calculator.selected_scope}</h4>
                        <div className="flex flex-wrap gap-2">
                            {selections.map((s, i) => (
                                <span key={i} className="text-[11px] px-2 py-1 bg-white dark:bg-slate-800 rounded border border-blue-200 dark:border-blue-800 text-slate-600 dark:text-slate-300 font-medium">
                                    {s.label}
                                </span>
                            ))}
                            {selections.length === 0 && <span className="text-xs text-slate-500 italic">{t.calculator.no_module}</span>}
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.calculator.name}</label>
                        <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder={t.calculator.name} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.calculator.email}</label>
                            <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder="mail@ornek.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.calculator.phone}</label>
                            <input name="phone" type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder="0555..." />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.calculator.notes}</label>
                        <textarea name="note" rows="2" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none resize-none" placeholder={t.calculator.notes_ph}></textarea>
                    </div>
                </form>
            )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50/80 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-800 backdrop-blur-sm shrink-0">
          {step === 1 ? (
             <>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">{t.calculator.selected_count}</span>
                    <div className="flex items-center gap-2">
                        <motion.div 
                            key={selections.length}
                            initial={{ scale: 1.5, color: '#3b82f6' }}
                            animate={{ scale: 1, color: 'inherit' }}
                            className="font-bold text-slate-900 dark:text-white"
                        >
                            {selections.length} {t.calculator.pieces}
                        </motion.div>
                    </div>
                </div>
                <button 
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    {t.calculator.continue} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
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
                           {t.calculator.submitting}
                        </>
                    ) : (
                        <>
                           {t.calculator.submit} <Send size={18} />
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

const AdvancedCRMPreview = ({ t }) => {
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
             <span className="font-semibold text-white">{t.crm_preview.dashboard}</span>
             <ChevronRight size={14}/>
             <span>{t.crm_preview.overview}</span>
           </div>
           <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full border border-slate-700">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-slate-300">{t.crm_preview.system_online}</span>
             </div>
             <Bell size={16} className="text-slate-400 hover:text-white transition-colors cursor-pointer"/>
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 border border-white/20"></div>
           </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden relative">
           {/* Card 1: Revenue */}
           <div className="col-span-1 md:col-span-2 bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <h5 className="text-slate-400 mb-1">{t.crm_preview.total_revenue}</h5>
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
              <h5 className="text-slate-400 font-semibold mb-1">{t.crm_preview.active_modules}</h5>
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-purple-500/50 transition-colors">
                 <div className="p-1.5 bg-purple-500/20 text-purple-400 rounded"><Boxes size={14}/></div>
                 <div className="flex-1">
                    <div className="text-white font-medium">ERP Stok</div>
                    <div className="text-[10px] text-slate-500">{t.crm_preview.sync}</div>
                 </div>
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-orange-500/50 transition-colors">
                 <div className="p-1.5 bg-orange-500/20 text-orange-400 rounded"><Users size={14}/></div>
                 <div className="flex-1">
                    <div className="text-white font-medium">İK Portalı</div>
                    <div className="text-[10px] text-slate-500">32 {t.crm_preview.employees}</div>
                 </div>
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-auto pt-2 border-t border-slate-700/50 flex justify-between items-center text-[10px] text-slate-400">
                 <span>CPU: %12</span>
                 <span>RAM: 4.2GB</span>
              </div>
           </div>

           {/* Card 3: Recent Integrations */}
           <div className="col-span-1 md:col-span-3 bg-[#1e293b] rounded-xl p-4 border border-slate-700/50">
              <div className="flex justify-between items-center mb-3">
                 <h5 className="text-slate-400 font-semibold">{t.crm_preview.recent_integrations}</h5>
                 <button className="text-blue-400 hover:text-blue-300">{t.crm_preview.all}</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <div className="flex items-center gap-3 group/item cursor-pointer">
                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center group-hover/item:scale-110 transition-transform"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="w-5" alt="G"/></div>
                    <div>
                       <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">Google Ads</div>
                       <div className="text-[10px] text-slate-500">{t.crm_preview.data_flow}</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 group/item cursor-pointer">
                    <div className="w-8 h-8 rounded bg-[#0052cc] flex items-center justify-center text-white font-bold text-[10px] group-hover/item:scale-110 transition-transform">Jira</div>
                    <div>
                       <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">Atlassian Jira</div>
                       <div className="text-[10px] text-slate-500">{t.crm_preview.task_automation}</div>
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
                 <div className="font-bold text-xs">{t.crm_preview.automation_triggered}</div>
                 <div className="text-[10px] text-slate-400">{t.crm_preview.new_order}</div>
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

const CookieConsent = ({ t }) => {
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
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t?.cookie?.title || "Çerez Politikası"}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t?.cookie?.text || "Deneyiminizi iyileştirmek için çerezleri kullanıyoruz."}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIsVisible(false)} className="flex-1 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
              {t?.cookie?.reject || "Reddet"}
            </button>
            <button onClick={handleAccept} className="flex-1 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-500/20">
              {t?.cookie?.accept || "Kabul Et"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Timeline = ({ t }) => {
  const events = t.about_page.timeline_events;

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

const Newsletter = ({ t }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-900/20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t?.newsletter?.title || "Teknoloji Bültenimize Abone Olun"}</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{t?.newsletter?.text || "En yeni teknoloji trendleri, yazılım dünyasından haberler ve Sarfea'dan güncellemeler için bültenimize katılın."}</p>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder={t?.newsletter?.placeholder || "E-posta adresiniz"} 
            className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 transition-colors backdrop-blur-sm"
          />
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
            {t?.newsletter?.button || "Abone Ol"}
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

const Navbar = ({ activePage, setActivePage, isScrolled, darkMode, setDarkMode, language, setLanguage, t }) => {
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
          <img src={darkMode ? logoDarkImage : logoImage} alt="SARFEA Logo" className={`${darkMode ? 'h-14 scale-[2.4] translate-x-16' : 'h-11'} w-auto object-contain transition-all duration-300`} />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['home', 'solutions', 'process', 'about', 'projects', 'blog', 'contact'].map((page) => (
            <button 
              key={page}
              onClick={() => handleNavClick(page)}
              className={`relative font-medium text-sm tracking-wide transition-colors duration-300 group ${activePage === page ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              {page === 'home' ? t.navbar.home : 
               page === 'solutions' ? t.navbar.solutions : 
               page === 'process' ? t.navbar.process :
               page === 'about' ? t.navbar.about : 
               page === 'projects' ? t.navbar.projects : 
               page === 'blog' ? t.navbar.blog : t.navbar.contact}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${activePage === page ? 'scale-x-100' : ''}`}></span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="w-11 h-11 rounded-full border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-yellow-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700">
            {darkMode ? <Sun size={20} className="hover:rotate-90 transition-transform" /> : <Moon size={20} className="hover:-rotate-12 transition-transform" />}
          </button>
          
          <div className="relative group/lang">
            <button 
               className="w-11 h-11 rounded-full border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700 font-bold text-sm"
            >
               {language.toUpperCase()}
            </button>
            <div className="absolute top-full right-0 pt-2 w-32 hidden group-hover/lang:block animate-in fade-in slide-in-from-top-2">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                {[
                  { code: 'tr', label: 'Türkçe' },
                  { code: 'en', label: 'English' },
                  { code: 'ar', label: 'العربية' },
                  { code: 'fr', label: 'Français' },
                  { code: 'ku', label: 'Kurdî' },
                  { code: 'de', label: 'Deutsch' },
                  { code: 'ru', label: 'Русский' },
                  { code: 'ckb', label: 'Soranî' }
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 ${language === lang.code ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10' : 'text-slate-600 dark:text-slate-300'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${language === lang.code ? 'bg-blue-600' : 'bg-transparent'}`}></span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => handleNavClick('contact')} className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 text-white dark:text-slate-900 px-7 py-3 rounded-full font-bold transition-all shadow-lg shadow-slate-900/10 dark:shadow-white/5 hover:shadow-blue-500/30 flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]">
            <Zap size={18} className="group-hover:fill-current transition-colors"/> {t.navbar.startProject}
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
              {['home', 'solutions', 'process', 'about', 'projects', 'blog', 'contact'].map((page) => (
                <button 
                  key={page} 
                  onClick={() => handleNavClick(page)} 
                  className={`block w-full text-left p-4 rounded-2xl font-bold transition-all ${activePage === page ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 pl-6 border-l-4 border-blue-600' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:pl-6'}`}
                >
                  <span className="capitalize flex items-center justify-between">
                    {page === 'home' ? t.navbar.home : 
                     page === 'solutions' ? t.navbar.solutions : 
                     page === 'process' ? t.navbar.process :
                     page === 'about' ? t.navbar.about : 
                     page === 'projects' ? t.navbar.projects : 
                     page === 'blog' ? t.navbar.blog : t.navbar.contact}
                    {activePage === page && <ChevronRight size={18} />}
                  </span>
                </button>
              ))}
              <div className="flex items-center justify-between px-4 py-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mt-2">
                  <span className="text-slate-700 dark:text-slate-300 font-bold flex items-center gap-2">{darkMode ? <Moon size={18}/> : <Sun size={18}/>} {darkMode ? t.navbar.darkMode : t.navbar.lightMode}</span>
                  <button onClick={() => setDarkMode(!darkMode)} className={`w-14 h-8 rounded-full relative transition-colors ${darkMode ? 'bg-blue-600' : 'bg-slate-300'}`}>
                     <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all shadow-sm flex items-center justify-center ${darkMode ? 'translate-x-6' : ''}`}>
                        {darkMode ? <Moon size={14} className="text-blue-600"/> : <Sun size={14} className="text-yellow-500"/>}
                     </div>
                  </button>
              </div>

              {/* Mobile Language Selector */}
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl mt-2 p-4">
                  <span className="text-slate-700 dark:text-slate-300 font-bold flex items-center gap-2 mb-3 text-sm">
                    <Globe size={18}/> Dil Seçimi / Language
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { code: 'tr', label: 'TR' },
                      { code: 'en', label: 'EN' },
                      { code: 'ar', label: 'AR' },
                      { code: 'fr', label: 'FR' },
                      { code: 'ku', label: 'KU' },
                      { code: 'de', label: 'DE' },
                      { code: 'ru', label: 'RU' },
                      { code: 'ckb', label: 'CKB' }
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                        className={`py-2 rounded-lg text-xs font-bold transition-colors ${language === lang.code ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
              </div>

              <button onClick={() => handleNavClick('contact')} className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <Zap size={18} fill="currentColor"/> {t.navbar.startProject}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Hero = ({ navigateTo, onOpenCalculator, t }) => {
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
              {t.hero.tag}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              {t.hero.title_prefix} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-gradient-x">
                {t.hero.title_suffix}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button onClick={() => navigateTo('contact')} className="px-10 py-4 bg-gradient-to-r from-slate-900 to-indigo-900 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 flex items-center gap-3 group">
                {t.hero.btn_start} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={onOpenCalculator} className="px-10 py-4 bg-white/80 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-2xl font-bold transition-all hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 backdrop-blur-sm flex items-center gap-3 group active:scale-95">
                <Calculator size={20} className="text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform"/> {t.hero.btn_scope}
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
              <div className="flex -space-x-5 pl-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white dark:border-slate-900 bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm hover:z-10 hover:scale-110 transition-all relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`Sarfea Software Müşteri Referansı ${i}`} className="w-full h-full object-cover"/>
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
                <p className="text-sm text-slate-600 dark:text-slate-400 font-bold mt-1"><span className="text-slate-900 dark:text-white">100+</span> {t.hero.references}</p>
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
                    <AdvancedCRMPreview t={t} />
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
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.crm_preview.system_status}</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-1">%99.9 <span className="text-green-500 text-xs">{t.crm_preview.uptime}</span></p>
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
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.crm_preview.integration}</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">{t.crm_preview.api_ready}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Dummy components for refactored renderContent

const StatsSection = ({ t }) => (
  <section className="py-24 bg-white dark:bg-slate-900 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title={t.stats_section.title} 
        subtitle={t.stats_section.subtitle} 
      />
      <LogoMarquee />
    </div>
    <div className="py-32 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
              {t.stats_section.main_title_prefix} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{t.stats_section.main_title_suffix}</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
              {t.stats_section.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <SpotlightCard className="p-6 rounded-3xl" color="blue">
                <div className="text-4xl font-black text-blue-600 dark:text-blue-500 mb-2"><CountUp end={45} />+</div>
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.stats_section.cards[0].label}</div>
              </SpotlightCard>
              
              <SpotlightCard className="p-6 rounded-3xl" color="purple">
                <div className="text-4xl font-black text-purple-600 dark:text-purple-500 mb-2"><CountUp end={120} />+</div>
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.stats_section.cards[1].label}</div>
              </SpotlightCard>
              
              <SpotlightCard className="p-6 rounded-3xl" color="green">
                <div className="text-4xl font-black text-green-600 dark:text-green-500 mb-2"><CountUp end={99} />%</div>
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.stats_section.cards[2].label}</div>
              </SpotlightCard>
              
              <SpotlightCard className="p-6 rounded-3xl" color="orange">
                <div className="text-4xl font-black text-orange-600 dark:text-orange-500 mb-2"><CountUp end={24} />/7</div>
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.stats_section.cards[3].label}</div>
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
    </div>
  </section>
);
const CRMPreview = ({ t }) => (
  <section className="py-32 bg-white dark:bg-slate-900 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Gelişmiş CRM Çözümleri" 
        subtitle="İşletmenizi bir üst seviyeye taşıyın" 
      />
      <div className="relative hidden lg:block perspective-1000">
        <TiltContainer>
          <div className="relative z-10 bg-[#0f172a] rounded-[1.5rem] p-0 shadow-2xl shadow-blue-900/40 border-4 border-slate-800 transition-all duration-300 group overflow-hidden">
            <AdvancedCRMPreview t={t} />
          </div>
        </TiltContainer>
      </div>
    </div>
  </section>
);
const TechStack = ({ t }) => (
  <section className="py-32 bg-white dark:bg-slate-900 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title={t.tech_stack.title} 
        subtitle={t.tech_stack.subtitle} 
      />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          { name: "React & Next.js", icon: Code2, desc: t.tech_stack.items[0].desc, color: "blue" },
          { name: "Node.js & Python", icon: Server, desc: t.tech_stack.items[1].desc, color: "green" },
          { name: "AWS & Azure", icon: Cloud, desc: t.tech_stack.items[2].desc, color: "orange" },
          { name: "Docker & K8s", icon: Boxes, desc: t.tech_stack.items[3].desc, color: "cyan" },
          { name: "PostgreSQL & MongoDB", icon: Database, desc: t.tech_stack.items[4].desc, color: "purple" },
          { name: "CI/CD Pipeline", icon: GitBranch, desc: t.tech_stack.items[5].desc, color: "pink" },
          { name: "Microservices", icon: Layers, desc: t.tech_stack.items[6].desc, color: "indigo" },
          { name: "REST & GraphQL", icon: Terminal, desc: t.tech_stack.items[7].desc, color: "teal" }
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
);
const FAQ = ({ t }) => (
  <section className="py-32 bg-slate-50 dark:bg-slate-950/50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title={t.faq.title} 
        subtitle={t.faq.subtitle} 
      />
      <FAQAccordion faqs={t.faq.questions} />
    </div>
  </section>
);
const CTA = ({ setActivePage, t }) => (
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
        {t.cta.title}
      </h2>
      <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
        {t.cta.description}
      </p>
      <button 
        onClick={() => setActivePage('contact')}
        className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 hover:-translate-y-1 active:scale-[0.98] flex items-center gap-3 mx-auto group"
      >
        {t.cta.button} <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform"/>
      </button>
    </div>
  </section>
);


// --- PROJECTS SHOWCASE & MODAL ---
const projectsData = [
  {
    id: 1,
    title: "Global Lojistik ERP",
    category: "ERP & Otomasyon",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: { revenue: "%150", efficiency: "%300", users: "5K+" },
    description: "Uluslararası bir lojistik firması için geliştirdiğimiz, gümrük süreçlerini, araç takibini ve depo yönetimini tek merkezden yöneten yapay zeka destekli ERP sistemi.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    title: "B2B E-Ticaret Pazaryeri",
    category: "E-Ticaret",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: { revenue: "%85", efficiency: "%45", users: "12K+" },
    description: "Endüstriyel ekipman tedarikçileri için kurduğumuz, bayi yönetiminin, özel fiyatlandırmanın ve stok entegrasyonlarının olduğu devasa B2B platformu.",
    technologies: ["Next.js", "MongoDB", "Redis", "AWS"]
  },
  {
    id: 3,
    title: "Akıllı Fabrika IoT Sistemi",
    category: "IoT & AI",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: { revenue: "%40", efficiency: "%95", users: "50+" },
    description: "Üretim bandındaki makinelerden veri toplayarak arıza tahminlemesi yapan ve üretim verimliliğini optimize eden endüstriyel IoT çözümü.",
    technologies: ["Python", "MQTT", "TensorFlow", "React Native"]
  }
];

const ProjectModal = ({ project, onClose, t }) => {
  if (!project) return null;
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-slate-900 rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors z-10">
          <X size={24} />
        </button>
        <div className="relative h-64 md:h-96">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
             <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">{project.category}</span>
             <h2 className="text-3xl md:text-4xl font-black">{project.title}</h2>
          </div>
        </div>
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
             <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">{project.stats.revenue}</div>
                <div className="text-sm font-bold text-slate-500 uppercase">{t.projects_page.stat_revenue}</div>
             </div>
             <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center">
                <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-1">{project.stats.efficiency}</div>
                <div className="text-sm font-bold text-slate-500 uppercase">{t.projects_page.stat_efficiency}</div>
             </div>
             <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl text-center">
                <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-1">{project.stats.users}</div>
                <div className="text-sm font-bold text-slate-500 uppercase">{t.projects_page.stat_users}</div>
             </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t.projects_page.subtitle}</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map(tech => (
              <span key={tech} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                {tech}
              </span>
            ))}
          </div>
          <button onClick={onClose} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
            {t.cta.button}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsShowcase = ({ onSelectProject, t }) => {
  return (
    <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader 
            title={t.projects_page.title} 
            subtitle={t.projects_page.subtitle} 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projectsData.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <div 
                  onClick={() => onSelectProject(project)}
                  className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 transition-all cursor-pointer border border-slate-100 dark:border-slate-800"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/0 transition-colors z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 z-20">
                       <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                         {project.category}
                       </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6">
                       <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.projects_page.stat_revenue}</span>
                          <span className="text-lg font-black text-green-500">{project.stats.revenue}</span>
                       </div>
                       <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform"/>
                       </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
    </div>
  );
};

// --- SEO COMPONENT ---
const SEO = ({ title, description, lang = 'tr', type = 'website', image = 'https://sarfea.com/og-image.jpg', article = null }) => {
  const siteName = "Sarfea Software | Özel Yazılım, ERP, CRM ve Mobil Uygulama Çözümleri";
  const fullTitle = `${title} | ${siteName}`;
  const canonical = `https://sarfea.tr/${lang === 'tr' ? '' : lang}`;

  // --- DYNAMIC SEO FUEL ENGINE ---
  // Bu motor, haftalık olarak trend anahtar kelimeleri rotasyona sokarak Google botlarını "taze içerik" ile besler.
  const getDynamicFuel = () => {
    const weekOfYear = Math.ceil(new Date().getUTCDate() / 7);
    const pools = [
      ["özel yazılım geliştirme", "ERP yazılımı", "CRM çözümleri", "mobil uygulama geliştirme"],
      ["yapay zeka entegrasyonu", "dijital dönüşüm danışmanlığı", "bulut tabanlı yazılımlar", "saas çözümleri"],
      ["ios ve android uygulama", "e-ticaret sistemleri", "endüstri 4.0 yazılımları", "blockchain çözümleri"],
      ["fintech yazılımı", "lojiştik sistemleri", "otomasyon yazılımları", "büyük veri analizi"]
    ];
    return pools[weekOfYear % pools.length].join(", ");
  };

  const keywords = getDynamicFuel();

  const schemaData = type === 'article' && article ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title[lang],
    "description": article.excerpt[lang],
    "image": article.image,
    "datePublished": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    },
    "author": {
      "@type": "Organization",
      "name": "Sarfea Software"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sarfea Software",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sarfea.com/logo.png"
      }
    }
  } : {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sarfea Software",
    "url": "https://sarfea.com",
    "logo": "https://sarfea.com/logo.png",
    "description": description,
    "sameAs": [
      "https://linkedin.com/company/sarfea",
      "https://twitter.com/sarfea",
      "https://instagram.com/sarfea"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-544-572-26-34",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["Turkish", "English", "Arabic"]
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={`${description} | ${keywords}`} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO Control */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#0f172a" />
      
      <html lang={lang} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

// --- BLOG SHOWCASE ---
const blogData = [
  {
    id: 1,
    title: {
      tr: "Yapay Zeka Destekli ERP Sistemleri: Geleceğin İş Modeli",
      en: "AI-Powered ERP Systems: The Business Model of the Future",
      ar: "أنظمة تخطيط موارد المؤسسات المدعومة بالذكاء الاصطناعي: نموذج عمل المستقبل"
    },
    category: "ai",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: {
      tr: "Geleneksel ERP sistemleri yerini, tahmine dayalı analiz yapabilen ve kararlar önerebilen AI tabanlı yapılara bırakıyor.",
      en: "Traditional ERP systems are being replaced by AI-based structures capable of predictive analysis and decision suggestions.",
      ar: "يتم استبدال أنظمة تخطيط موارد المؤسسات التقليدية بهياكل قائمة على الذكاء الاصطناعي قادرة على التحليل التنبؤي واقتراحات القرار."
    },
    content: {
      tr: `
        <p>İş dünyası hızla değişiyor ve bu değişimin merkezinde Yapay Zeka (AI) ve Kurumsal Kaynak Planlama (ERP) sistemlerinin entegrasyonu yer alıyor. Geleneksel ERP sistemleri, veri kaydı ve raporlama konusunda mükemmel olsa da, günümüzün rekabetçi piyasasında artık yeterli değil.</p>
        
        <h3>Neden AI Destekli ERP?</h3>
        <p>Yapay zeka, ERP sistemlerine "düşünme" yeteneği kazandırıyor. Sadece geçmiş verileri raporlamakla kalmıyor, geleceği tahmin ediyor. Stok optimizasyonu, talep tahmini ve müşteri davranış analizi gibi konularda %95'e varan doğruluk oranları sunuyor.</p>
        
        <h3>Temel Avantajlar</h3>
        <ul>
          <li><strong>Otomatik Veri Girişi:</strong> Manuel hataları ortadan kaldırır.</li>
          <li><strong>Tahmine Dayalı Bakım:</strong> Üretim bandındaki arızaları önceden tespit eder.</li>
          <li><strong>Akıllı Finans:</strong> Nakit akışını optimize eder ve riskleri analiz eder.</li>
        </ul>
        
        <p>Sarfea Software olarak, geliştirdiğimiz ERP çözümlerinde en son AI teknolojilerini kullanarak müşterilerimize rekabet avantajı sağlıyoruz.</p>
      `,
      en: `
        <p>The business world is changing rapidly, and at the center of this change is the integration of Artificial Intelligence (AI) and Enterprise Resource Planning (ERP) systems. While traditional ERP systems excel at data recording and reporting, they are no longer sufficient in today's competitive market.</p>
        
        <h3>Why AI-Powered ERP?</h3>
        <p>Artificial intelligence gives ERP systems the ability to "think". It not only reports past data but predicts the future. It offers accuracy rates of up to 95% in areas such as inventory optimization, demand forecasting, and customer behavior analysis.</p>
        
        <h3>Key Advantages</h3>
        <ul>
          <li><strong>Automated Data Entry:</strong> Eliminates manual errors.</li>
          <li><strong>Predictive Maintenance:</strong> Detects faults on the production line in advance.</li>
          <li><strong>Smart Finance:</strong> Optimizes cash flow and analyzes risks.</li>
        </ul>
        
        <p>At Sarfea Software, we provide our customers with a competitive advantage by using the latest AI technologies in the ERP solutions we develop.</p>
      `,
      ar: `
        <p>يتغير عالم الأعمال بسرعة، وفي مركز هذا التغيير تكامل الذكاء الاصطناعي (AI) وأنظمة تخطيط موارد المؤسسات (ERP). بينما تتفوق أنظمة ERP التقليدية في تسجيل البيانات وإعداد التقارير، إلا أنها لم تعد كافية في السوق التنافسي اليوم.</p>
        
        <h3>لماذا ERP المدعوم بالذكاء الاصطناعي؟</h3>
        <p>يمنح الذكاء الاصطناعي أنظمة ERP القدرة على "التفكير". فهو لا يبلغ عن البيانات السابقة فحسب بل يتنبأ بالمستقبل. يقدم معدلات دقة تصل إلى 95٪ في مجالات مثل تحسين المخزون وتوقع الطلب وتحليل سلوك العملاء.</p>
        
        <h3>المزايا الرئيسية</h3>
        <ul>
          <li><strong>إدخال البيانات الآلي:</strong> يزيل الأخطاء اليدوية.</li>
          <li><strong>الصيانة التنبؤية:</strong> يكتشف الأعطال في خط الإنتاج مسبقًا.</li>
          <li><strong>التمويل الذكي:</strong> يحسن التدفق النقدي ويحلل المخاطر.</li>
        </ul>
        
        <p>في Sarfea Software، نقدم لعملائنا ميزة تنافسية باستخدام أحدث تقنيات الذكاء الاصطناعي في حلول ERP التي نطورها.</p>
      `
    },
    date: "14.01.2024",
    readTime: "5 min"
  },
  {
    id: 3,
    title: {
      tr: "2026 Dijital Dönüşüm Trendleri: İşinizi Nasıl Etkileyecek?",
      en: "2026 Digital Transformation Trends: How Will It Affect Your Business?",
      ar: "اتجاهات التحول الرقمي لعام 2026: كيف ستؤثر على عملك؟"
    },
    category: "trends",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: {
      tr: "Gelecek yılın en etkili teknolojileri: Hiper-otomasyon, sürdürülebilir yazılım ve kuantum hazırlık süreci.",
      en: "Next year's most influential technologies: Hyper-automation, sustainable software, and quantum readiness process.",
      ar: "التقنيات الأكثر نفوذاً في العام المقبل: الأتمتة المفرطة، والبرمجيات المستدامة، وعملية الاستعداد الكمي."
    },
    content: {
      tr: `
        <p>2026 yılına girerken dijital dünya büyük bir kırılma yaşıyor. Artık sadece "çevrimiçi olmak" yeterli değil. İşletmelerin daha akıllı, daha hızlı ve daha yeşil olması gerekiyor.</p>
        
        <h3>1. Hiper-Otomasyon</h3>
        <p>Sadece basit görevler değil, karmaşık karar mekanizmaları da otomatize ediliyor. Sarfea olarak geliştirdiğimiz ERP sistemleri, insan müdahalesine gerek kalmadan stok ve finans yönetimini optimize edebiliyor.</p>
        
        <h3>2. Sürdürülebilir (Yeşil) Yazılım</h3>
        <p>Karbon ayak izini düşüren, verimli kod mimarileri artık bir tercih değil zorunluluk. Bulut altyapılarında minimum kaynak tüketen sistemler inşa ediyoruz.</p>
        
        <h3>3. Low-Code ve No-Code'un Yükselişi</h3>
        <p>Hızlı prototipleme ve esnek geliştirme süreçleri için bu araçlar profesyonel yazılımların içine daha fazla entegre oluyor.</p>
      `,
      en: `
        <p>As we enter 2026, the digital world is experiencing a major breakthrough. It's no longer enough just to be "online". Businesses need to be smarter, faster, and greener.</p>
        
        <h3>1. Hyper-Automation</h3>
        <p>Not only simple tasks but also complex decision mechanisms are being automated. The ERP systems we develop as Sarfea can optimize stock and finance management without the need for human intervention.</p>
        
        <h3>2. Sustainable (Green) Software</h3>
        <p>Efficient code architectures that reduce carbon footprint are no longer an option but a necessity. We build systems that consume minimum resources in cloud infrastructures.</p>
      `,
      ar: `
        <p>مع دخولنا عام 2026، يشهد العالم الرقمي طفرة كبرى. لم يعد كافيًا أن تكون "متصلاً بالإنترنت". يجب أن تكون الشركات أذكى وأسرع وأكثر صداقة للبيئة.</p>
        
        <h3>1. الأتمتة المفرطة</h3>
        <p>لا يتم أتمتة المهام البسيطة فحسب، بل يتم أيضًا أتمتة آليات القرار المعقدة. يمكن لأنظمة ERP التي نطورها في Sarfea تحسين إدارة المخزون والتمويل دون الحاجة إلى تدخل بشري.</p>
      `
    },
    date: "24.03.2024",
    readTime: "7 min"
  },
  {
    id: 2,
    title: {
      tr: "Mikroservis Mimarisine Geçiş Rehberi",
      en: "Microservices Architecture Migration Guide",
      ar: "دليل الانتقال إلى هندسة الخدمات المصغرة"
    },
    category: "dev",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: {
      tr: "Monolitik yapıdan mikroservislere geçerken dikkat edilmesi gerekenler, avantajlar ve karşılaşılabilecek zorluklar.",
      en: "Things to consider, advantages, and challenges when moving from monolithic structure to microservices.",
      ar: "الأشياء التي يجب مراعاتها والمزايا والتحديات عند الانتقال من الهيكل الموحد إلى الخدمات المصغرة."
    },
    content: {
      tr: `
        <p>Yazılım dünyasında ölçeklenebilirlik denince akla ilk gelen çözüm mikroservis mimarisidir. Ancak monolitik bir uygulamayı parçalara ayırmak, dikkatli planlama gerektiren zorlu bir süreçtir.</p>
        
        <h3>Ne Zaman Geçilmeli?</h3>
        <p>Eğer uygulamanız çok büyüdüyse, ekipler birbirini beklemek zorunda kalıyorsa ve küçük bir değişiklik için tüm sistemi deploy etmeniz gerekiyorsa, değişim zamanı gelmiş demektir.</p>
        
        <h3>Geçiş Stratejileri</h3>
        <ol>
          <li><strong>Strangler Fig Pattern:</strong> Sistemi parça parça yenileyin.</li>
          <li><strong>Domain Driven Design (DDD):</strong> Servis sınırlarını iş alanlarına göre belirleyin.</li>
          <li><strong>DevOps Kültürü:</strong> Otomasyon olmadan mikroservis yönetilemez.</li>
        </ol>
        
        <p>Doğru uygulandığında, mikroservisler geliştirme hızınızı 10 kata kadar artırabilir.</p>
      `,
      en: `
        <p>When it comes to scalability in the software world, the first solution that comes to mind is microservices architecture. However, breaking down a monolithic application fits parts is a challenging process that requires careful planning.</p>
        
        <h3>When to Switch?</h3>
        <p>If your application has grown too large, teams have to wait for each other, and you have to deploy the entire system for a small change, it's time for a change.</p>
        
        <h3>Migration Strategies</h3>
        <ol>
          <li><strong>Strangler Fig Pattern:</strong> Renew the system piece by piece.</li>
          <li><strong>Domain Driven Design (DDD):</strong> Determine service boundaries based on business domains.</li>
          <li><strong>DevOps Culture:</strong> Microservices cannot be managed without automation.</li>
        </ol>
        
        <p>When implemented correctly, microservices can increase your development speed up to 10 times.</p>
      `,
      ar: `
        <p>عندما يتعلق الأمر بقابلية التوسع في عالم البرمجيات، فإن الحل الأول الذي يتبادر إلى الذهن هو هندسة الخدمات المصغرة. ومع ذلك، فإن تقسيم تطبيق موحد إلى أجزاء هو عملية صعبة تتطلب تخطيطًا دقيقًا.</p>
        
        <h3>متى يجب التبديل؟</h3>
        <p>إذا نما تطبيقك بشكل كبير جدًا، وتضطر الفرق لانتظار بعضها البعض، ويتعين عليك نشر النظام بأكمله لإجراء تغيير صغير، فقد حان وقت التغيير.</p>
        
        <h3>استراتيجيات الانتقال</h3>
        <ol>
          <li><strong>Strangler Fig Pattern:</strong> جدد النظام قطعة قطعة.</li>
          <li><strong>Domain Driven Design (DDD):</strong> حدد حدود الخدمة بناءً على مجالات العمل.</li>
          <li><strong>ثقافة DevOps:</strong> لا يمكن إدارة الخدمات المصغرة بدون الأتمتة.</li>
        </ol>
        
        <p>عند تنفيذها بشكل صحيح، يمكن للخدمات المصغرة زيادة سرعة التطوير لديك حتى 10 مرات.</p>
      `
    },
    date: "02.02.2024",
    readTime: "8 min"
  },
  {
    id: 3,
    title: {
      tr: "2024 Web Geliştirme Trendleri",
      en: "2024 Web Development Trends",
      ar: "اتجاهات تطوير الويب لعام 2024"
    },
    category: "trend",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: {
      tr: "Server Components, AI kodlama asistanları ve WebAssembly'nin yükselişi. Bu yıl bizi neler bekliyor?",
      en: "Rise of Server Components, AI coding assistants, and WebAssembly. What awaits us this year?",
      ar: "ظهور مكونات الخادم، ومساعدي البرمجة بالذكاء الاصطناعي، و WebAssembly. ماذا ينتظرنا هذا العام؟"
    },
    content: {
      tr: `
        <p>Web teknolojileri baş döndürücü bir hızla gelişiyor. 2024 yılında, frontend ve backend arasındaki çizgilerin daha da bulanıklaştığını görüyoruz.</p>
        
        <h3>Öne Çıkan Trendler</h3>
        <ul>
          <li><strong>React Server Components:</strong> İstemci tarafındaki JavaScript yükünü azaltarak performansı artırıyor.</li>
          <li><strong>AI Destekli Geliştirme:</strong> Copilot ve benzeri araçlar artık lüks değil, standart haline geliyor.</li>
          <li><strong>WebAssembly (Wasm):</strong> Tarayıcıda yüksek performanslı uygulamalar için yeni standart.</li>
        </ul>
        
        <p>Geliştiricilerin bu teknolojilere adapte olması, rekabette geride kalmamaları için kritik öneme sahip.</p>
      `,
      en: `
        <p>Web technologies are developing at a dizzying pace. In 2024, we see the lines between frontend and backend blurring even more.</p>
        
        <h3>Emerging Trends</h3>
        <ul>
          <li><strong>React Server Components:</strong> Increases performance by reducing client-side JavaScript load.</li>
          <li><strong>AI-Powered Development:</strong> Copilot and similar tools are no longer a luxury but becoming standard.</li>
          <li><strong>WebAssembly (Wasm):</strong> The new standard for high-performance applications in the browser.</li>
        </ul>
        
        <p>Adapting to these technologies is critical for developers not to fall behind in the competition.</p>
      `,
      ar: `
        <p>تتطور تقنيات الويب بسرعة مذهلة. في عام 2024، نرى الخطوط بين الواجهة الأمامية والخلفية غير واضحة أكثر.</p>
        
        <h3>الاتجاهات الناشئة</h3>
        <ul>
          <li><strong>مكونات خادم React:</strong> يزيد الأداء عن طريق تقليل حمل JavaScript من جانب العميل.</li>
          <li><strong>التطوير المدعوم بالذكاء الاصطناعي:</strong> لم تعد Copilot والأدوات المماثلة رفاهية بل أصبحت معيارًا.</li>
          <li><strong>WebAssembly (Wasm):</strong> المعيار الجديد للتطبيقات عالية الأداء في المتصفح.</li>
        </ul>
        
        <p>يعد التكيف مع هذه التقنيات أمرًا بالغ الأهمية للمطورين حتى لا يتخلفوا عن المنافسة.</p>
      `
    },
    date: "28.02.2024",
    readTime: "4 min"
  }
];

const BlogPostDetail = ({ post, onBack, t, language }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-28 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors mb-8 font-bold"
        >
          <ArrowLeft size={20} /> {language === 'en' ? 'Back to Blog' : language === 'ar' ? 'العودة إلى المدونة' : 'Bloga Dön'}
        </button>

        <article>
          <div className="relative h-[400px] mb-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src={post.image} alt={post.title[language]} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <span className="bg-blue-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                {t.blog_page.categories[post.category]}
              </span>
              <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
                {post.title[language]}
              </h1>
              <div className="flex items-center gap-6 text-sm font-bold text-slate-300">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-li:text-slate-600 dark:prose-li:text-slate-300"
            dangerouslySetInnerHTML={{ __html: post.content[language] }}
          ></div>
        </article>
      </div>
    </motion.div>
  );
};

const BlogShowcase = ({ t, language, onSelectPost }) => {
  return (
    <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHeader 
            title={t.blog_page.title} 
            subtitle={t.blog_page.subtitle} 
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {blogData.map((post, i) => (
              <Reveal key={post.id} delay={i * 100}>
                <article className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col h-full border border-slate-100 dark:border-slate-800">
                    <div className="h-48 overflow-hidden relative">
                       <img src={post.image} alt={post.title[language]} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                         {t.blog_page.categories[post.category]}
                       </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                       <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                         {post.title[language]}
                       </h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                         {post.excerpt[language]}
                       </p>
                       <button 
                         onClick={() => onSelectPost(post)}
                         className="text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                       >
                          {t.blog_page.read_more} <ArrowRight size={16} />
                       </button>
                    </div>
                </article>
              </Reveal> 
            ))}
          </div>
       </div>
    </div>
  );
};

// --- WHATSAPP BUTTON ---
const WhatsAppButton = ({ t }) => {
  return (
    <motion.a
      href="https://wa.me/905445722634"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-green-500/30 transition-shadow flex items-center gap-3 border-2 border-white dark:border-slate-900 group"
    >
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
        className="text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
        {t.whatsapp.label}
      </span>
    </motion.a>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Project Modal State
  const [selectedBlogPost, setSelectedBlogPost] = useState(null); // Blog Detail State
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Language State
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'tr');
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);
    
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

  // --- RENDER CONTENT ---
  const renderContent = () => {
    switch(activePage) {
      case 'home':
        return (
          <>
            <SEO 
              title={t.navbar.home} 
              description={t.hero.description}
              lang={language}
            />
            <Hero navigateTo={setActivePage} onOpenCalculator={() => setIsCalculatorOpen(true)} t={t} />
            <StatsSection t={t} />
            <CRMPreview t={t} />
            <TechStack t={t} />
            <FAQ t={t} />
            <CTA setActivePage={setActivePage} t={t} />
          </>
        );

      case 'solutions':
        return (
          <>
            <SEO 
              title={t.navbar.solutions} 
              description={t.solutions_page.subtitle}
              lang={language}
            />
            <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <SectionHeader 
                   title={t.solutions_page.title} 
                   subtitle={t.solutions_page.subtitle} 
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
                     { icon: LayoutDashboard, color: "blue" },
                     { icon: Smartphone, color: "purple" },
                     { icon: ShoppingBagIcon, color: "green" },
                     { icon: Boxes, color: "orange" },
                     { icon: Users, color: "pink" },
                     { icon: GitBranch, color: "cyan" },
                     { icon: Cpu, color: "indigo" },
                     { icon: Wifi, color: "teal" }
                   ].map((config, i) => {
                     const item = t.solutions_page.items[i];
                     return (
                     <Reveal key={i} delay={i * 50}>
                        {/* Spotlight Card Wrapper Kullanıldı */}
                       <SpotlightCard className="rounded-[2rem] p-6 h-full flex flex-col" color={config.color}>
                         <div className={`w-14 h-14 rounded-2xl bg-${config.color}-100 dark:bg-${config.color}-900/30 flex items-center justify-center text-${config.color}-600 dark:text-${config.color}-400 mb-6 group-hover:scale-110 transition-transform shadow-md shadow-${config.color}-500/10 relative z-10`}>
                           <config.icon size={28} />
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{item.title}</h3>
                         <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 relative z-10 leading-relaxed flex-1">{item.desc}</p>
                         <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                           {item.tags.map((tag, idx) => (
                             <span key={idx} className={`text-[10px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700`}>
                               {tag}
                             </span>
                           ))}
                         </div>
                       </SpotlightCard>
                     </Reveal>
                   )})}
                 </div>

                 <div className="mb-24">
                   <SectionHeader 
                     title={t.pricing.title} 
                     subtitle={t.pricing.subtitle} 
                   />
                   <div className="grid md:grid-cols-3 gap-10 items-start">
                     <PricingCard 
                       onSelect={() => setActivePage('contact')}
                       plan={t.pricing.plans[0]} 
                     />
                     <PricingCard 
                       isPopular={true}
                       onSelect={() => setActivePage('contact')}
                       plan={t.pricing.plans[1]} 
                     />
                     <PricingCard 
                       onSelect={() => setActivePage('contact')}
                       plan={t.pricing.plans[2]} 
                     />
                   </div>
                 </div>
               </div>
            </div>
            <CTA setActivePage={setActivePage} t={t} />
          </>
        );

      case 'projects':
        return (
          <>
            <SEO 
              title={t.navbar.projects} 
              description={t.projects_page.subtitle}
              lang={language}
            />
            <ProjectsShowcase onSelectProject={setSelectedProject} t={t} />
          </>
        );

      case 'blog':
        return (
          <>
            <SEO 
              title={selectedBlogPost ? selectedBlogPost.title[language] : t.navbar.blog} 
              description={selectedBlogPost ? selectedBlogPost.excerpt[language] : t.blog_page.subtitle}
              lang={language}
              type={selectedBlogPost ? 'article' : 'website'}
              image={selectedBlogPost ? selectedBlogPost.image : undefined}
              article={selectedBlogPost}
            />
            {selectedBlogPost ? (
              <BlogPostDetail 
                post={selectedBlogPost} 
                onBack={() => setSelectedBlogPost(null)} 
                t={t} 
                language={language}
              />
            ) : (
              <BlogShowcase t={t} language={language} onSelectPost={setSelectedBlogPost} />
            )}
          </>
        );

      case 'process':
        return (
          <>
            <SEO 
              title={t.navbar.process} 
              description={t.process_page.subtitle}
              lang={language}
            />
            <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <SectionHeader 
                  title={t.process_page.title} 
                  subtitle={t.process_page.subtitle} 
                />
                
                <div className="relative mt-24">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20 hidden md:block rounded-full"></div>
                  
                  {[
                    { icon: Search, color: "blue" },
                    { icon: LayoutDashboard, color: "purple" },
                    { icon: Code2, color: "pink" },
                    { icon: ShieldCheck, color: "orange" },
                    { icon: Rocket, color: "green" }
                  ].map((config, i) => {
                    const step = t.process_page.steps[i];
                    return (
                    <Reveal key={i}>
                      <div className={`flex items-center justify-between mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0`}>
                        <div className="w-full md:w-5/12 relative">
                           {/* Card Hover Effect Enhanced */}
                          <SpotlightCard className={`p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border-2 border-slate-100 dark:border-slate-800 relative overflow-hidden transition-all duration-500 hover:border-${config.color}-300 dark:hover:border-${config.color}-800/50`} color={config.color}>
                            <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-${config.color}-600 dark:text-${config.color}-400 transform group-hover:scale-110 duration-500`}>
                              <config.icon size={120} />
                            </div>
                            <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-100/0 dark:from-slate-800 dark:to-slate-900/0 absolute bottom-4 right-6 z-0 opacity-50 select-none">{step.step}</span>
                            <div className="relative z-10">
                              <div className={`w-14 h-14 bg-${config.color}-100 dark:bg-${config.color}-900/30 rounded-2xl flex items-center justify-center text-${config.color}-600 dark:text-${config.color}-400 mb-6 shadow-md shadow-${config.color}-500/10 group-hover:scale-110 transition-transform`}>
                                <config.icon size={28} />
                              </div>
                              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
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
                  )})}
                </div>
              </div>
            </div>
            <CTA setActivePage={setActivePage} t={t} />
          </>
        );

      case 'about':
        return (
          <>
            <SEO 
              title={t.navbar.about} 
              description={t.about_page.subtitle}
              lang={language}
            />
            <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <SectionHeader 
                  title={t.about_page.title} 
                  subtitle={t.about_page.subtitle} 
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
                          <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-bold mb-3 shadow-sm">{t.about_page.office.tag}</div>
                          <h3 className="text-3xl font-bold mb-3">{t.about_page.office.location}</h3>
                          <p className="text-slate-200 font-medium leading-relaxed max-w-md">{t.about_page.office.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                  
                  <Reveal delay={200}>
                    <div className="space-y-10">
                      <div>
                         <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                           <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm"><Rocket size={22}/></span>
                           {t.about_page.vision.title}
                         </h3>
                         <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                           <p>
                             {t.about_page.vision.p1}
                           </p>
                           <p>
                             {t.about_page.vision.p2}
                           </p>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <SpotlightCard className="p-6 rounded-3xl" color="blue">
                          <Target className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={36} />
                          <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{t.about_page.values[0].title}</h4>
                          <p className="text-slate-600 dark:text-slate-400 font-medium">{t.about_page.values[0].desc}</p>
                        </SpotlightCard>
                        <SpotlightCard className="p-6 rounded-3xl" color="orange">
                          <Lightbulb className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform" size={36} />
                          <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{t.about_page.values[1].title}</h4>
                          <p className="text-slate-600 dark:text-slate-400 font-medium">{t.about_page.values[1].desc}</p>
                        </SpotlightCard>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="mb-32">
                   <SectionHeader 
                      title={t.about_page.timeline_title} 
                      subtitle={t.about_page.timeline_subtitle} 
                   />
                   <Timeline t={t}/>
                </div>

                <div className="mb-24">
                  <h3 className="text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-16 tracking-tight">{t.about_page.solutions_area_title}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { icon: Briefcase, color: "blue" },
                      { icon: ShoppingBagIcon, color: "green" },
                      { icon: Smartphone, color: "purple" },
                      { icon: Cpu, color: "indigo" },
                      { icon: Wifi, color: "orange" },
                      { icon: ShieldCheck, color: "red" }
                    ].map((config, i) => {
                      const solution = t.about_page.solution_areas[i];
                      return (
                      <Reveal key={i} delay={i * 80}>
                        <SpotlightCard className="p-8 rounded-[2rem] h-full flex flex-col" color={config.color}>
                          <div className={`w-16 h-16 bg-${config.color}-100 dark:bg-${config.color}-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-${config.color}-500/20`}>
                            <config.icon size={32} className={`text-${config.color}-600 dark:text-${config.color}-400`} />
                          </div>
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{solution.title}</h4>
                          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1 font-medium">{solution.desc}</p>
                          <div className="space-y-2">
                            {solution.items.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <div className={`w-1.5 h-1.5 rounded-full bg-${config.color}-500`}></div>
                                <span className="font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        </SpotlightCard>
                      </Reveal>
                    )})}
                  </div>
                </div>
              </div>
            </div>
            <CTA setActivePage={setActivePage} t={t} />
          </>
        );

      case 'contact':
        return (
          <>
            <SEO 
              title={t.navbar.contact} 
              description={t.contact_page.subtitle}
              lang={language}
            />
            <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <SectionHeader 
                  title={t.contact_page.title} 
                  subtitle={t.contact_page.subtitle} 
                />

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                  <Reveal className="lg:col-span-3">
                    <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none"></div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                          <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm"><MessageSquare size={22}/></span>
                          {t.contact_page.form.title}
                      </h3>
                      <form className="space-y-6" onSubmit={handleContactSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact_page.form.name}</label>
                            <input required name="name" type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" placeholder={t.contact_page.form.name_ph} />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact_page.form.email}</label>
                            <input required name="email" type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" placeholder={t.contact_page.form.email_ph} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact_page.form.type}</label>
                          <div className="relative">
                             <select name="projectType" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium appearance-none cursor-pointer">
                               {[
                                 { tr: "Özel Yazılım / CRM / ERP", en: "Custom Software / CRM / ERP" },
                                 { tr: "Mobil Uygulama Geliştirme", en: "Mobile App Development" },
                                 { tr: "Web Sitesi / E-Ticaret", en: "Website / E-Commerce" },
                                 { tr: "Sistem Entegrasyonu", en: "System Integration" },
                                 { tr: "Yapay Zeka / IoT", en: "AI / IoT" },
                                 { tr: "Diğer", en: "Other" }
                               ].map((opt, i) => (
                                 <option key={i} value={opt[language]}>{opt[language]}</option>
                               ))}
                             </select>
                             <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact_page.form.details}</label>
                          <textarea required name="message" rows="5" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium resize-none" placeholder={t.contact_page.form.details_ph}></textarea>
                        </div>
                        <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white py-5 rounded-xl font-bold transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-3 active:scale-[0.98]">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              {t.contact_page.form.submitting}
                            </>
                          ) : (
                            <>
                              <Send size={22} /> {t.contact_page.form.submit}
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
                            <AlertCircle size={24} className="text-blue-200"/> {t.contact_page.info.title}
                        </h3>
                        <div className="space-y-8 relative z-10">
                          <div className="flex items-start gap-5 group/item">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/20 transition-colors shadow-inner-white">
                              <Mail size={24} className="text-blue-100"/>
                            </div>
                            <div>
                              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">{t.contact_page.info.email}</p>
                              <p className="font-bold text-xl">gebcay@gmail.com</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-5 group/item">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/20 transition-colors shadow-inner-white">
                              <Phone size={24} className="text-blue-100"/>
                            </div>
                            <div>
                              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">{t.contact_page.info.phone}</p>
                              <p className="font-bold text-xl">+90 544 572 26 34</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-5 group/item">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/20 transition-colors shadow-inner-white">
                              <Globe size={24} className="text-blue-100"/>
                            </div>
                            <div>
                              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">{t.contact_page.info.hq}</p>
                              <p className="font-bold text-lg leading-tight">{t.contact_page.info.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-5 group/item">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white/20 transition-colors shadow-inner-white">
                              <Clock size={24} className="text-blue-100"/>
                            </div>
                            <div>
                              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">{t.contact_page.info.hours_label}</p>
                              <p className="font-bold text-lg leading-tight">{t.contact_page.info.hours}</p>
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
                            <ExternalLink size={16} /> {t.contact_page.info.directions}
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
            <CTA setActivePage={setActivePage} t={t} />
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <HelmetProvider>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
        {/* Scroll Progress Bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 origin-left z-[100]" style={{ scaleX }} />

        <Navbar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          t={t}
          language={language}
          setLanguage={setLanguage}
        />

        <AnimatePresence mode="wait">
          <motion.main
            key={activePage}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>

      <Newsletter t={t} />
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
                {t.footer.slogan}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2"><ChevronRight size={18} className="text-blue-500"/> {t.footer.sitemap}</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><button onClick={() => setActivePage('home')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.navbar.home}</button></li>
                <li><button onClick={() => setActivePage('solutions')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.navbar.solutions}</button></li>
                <li><button onClick={() => setActivePage('projects')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.navbar.projects}</button></li>
                 <li><button onClick={() => setActivePage('blog')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.navbar.blog}</button></li>
                <li><button onClick={() => setActivePage('process')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.navbar.process}</button></li>
                <li><button onClick={() => setActivePage('about')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.navbar.about}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2"><ChevronRight size={18} className="text-blue-500"/> {t.footer.corporate}</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><button className="hover:text-blue-400 transition-colors">{t.footer.privacy}</button></li>
                <li><button className="hover:text-blue-400 transition-colors">{t.footer.terms}</button></li>
                <li><button className="hover:text-blue-400 transition-colors">{t.footer.kvkk}</button></li>
                <li><button className="hover:text-blue-400 transition-colors">{t.footer.careers}</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
            <p>{t.footer.rights}</p>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group"><span className="font-bold">In</span></button>
              <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all group"><span className="font-bold">Tw</span></button>
              <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all group"><span className="font-bold">Ig</span></button>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Components */}
      
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
      >
        <ArrowUp size={24} />
      </motion.button>

      <AnimatePresence>
        {toast && <Toast message={toast} onClose={() => setToast(null)} t={t} />}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            t={t}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCalculatorOpen && (
          <ProjectCalculator 
            isOpen={isCalculatorOpen} 
            onClose={() => setIsCalculatorOpen(false)} 
            onShowToast={(msg) => setToast(msg)}
            t={t} 
          />
        )}
      </AnimatePresence>

      <WhatsAppButton t={t} />

    </div>
    </HelmetProvider>
  );
}

export default App;
