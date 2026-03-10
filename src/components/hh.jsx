import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";
import BuggersImg from "../assets/buggers.png"
import DeBLogoImg from "../assets/delogo.png"
import DebFullLogoImg from "../assets/debfulllogo.png"

const products = [
  {
    id: "crm",
    name: "Sales & CRM",
    category: "Customer Management",
    description: "Manage leads, customers, pipelines, and revenue in one unified CRM platform.",
    url: "https://crm.tibostech.in",
    status: "LIVE",
    icon: LayoutDashboard,
    color: "from-blue-600 to-indigo-600",
    lightColor: "from-blue-50 to-indigo-50",
    accentColor: "bg-blue-600",
    shadow: "shadow-blue-500/20",
  },
  {
    id: "hrms",
    name: "HRMS & Payroll",
    category: "People Operations",
    description: "Handle employee onboarding, payroll, and performance reviews securely.",
    url: "https://hrm.tibostech.in",
    status: "LIVE",
    icon: Users,
    color: "from-emerald-600 to-teal-600",
    lightColor: "from-emerald-50 to-teal-50",
    accentColor: "bg-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.96 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  },
};

const ProductGateway = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden font-sans selection:bg-blue-200/50">
      {/* 1. MODERN BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-200/40 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center py-16">
        
        {/* 2. HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Security Badge */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-lg shadow-blue-500/10 text-slate-700 text-xs font-semibold mb-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-blue-600" />
              <span className="text-blue-600">Enterprise Security</span>
            </div>
            <div className="w-px h-4 bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-emerald-600" />
              <span className="text-emerald-600">SSO Enabled</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 tracking-tight leading-tight"
          >
            Tibos Workspace
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
          >
            One secure gateway for all your business operations. 
            <br className="hidden md:block" />
            Seamlessly switch between tools with{" "}
            <span className="text-blue-600 font-semibold">enterprise-grade security</span>.
          </motion.p>
        </motion.div>

        {/* 3. PRODUCT GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-16"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* 5. FOOTER WITH LOGO */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-6 text-slate-500"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          
          {/* Powered By Section */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Powered By</p>
            <div className="flex items-center">
              {/* Logo Icon */}
              <img 
                src={DebFullLogoImg} 
                alt="Buggers Logo" 
                className="h-12 w-auto object-contain"
              />
              
            </div>
          </div>
          
          <p className="text-sm font-medium mt-2">
            © {new Date().getFullYear()} Tibos Solutions PVT Limited • All Rights Reserved
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const Icon = product.icon;
  const isLive = product.status === "LIVE";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${product.color} rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500`} />
      
      {/* Main Card */}
      <div className="relative h-full bg-white/70 backdrop-blur-2xl border-2 border-slate-200 rounded-3xl p-8 flex flex-col shadow-xl shadow-slate-200/50 group-hover:border-slate-300 group-hover:shadow-2xl group-hover:shadow-slate-300/50 transition-all duration-300">
        
        {/* Header: Icon + Status */}
        <div className="flex justify-between items-start mb-8">
          {/* Icon with Gradient Background */}
          <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${product.color} shadow-lg ${product.shadow} group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={28} strokeWidth={2} className="text-white" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Status Badge */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm ${
            isLive 
              ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200' 
              : 'bg-red-50 text-red-700 border-2 border-red-200'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
            {product.status}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
            {product.category}
          </h3>
          <h2 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all">
            {product.name}
          </h2>
          <p className="text-slate-600 leading-relaxed text-[15px] font-medium">
            {product.description}
          </p>
        </div>

        {/* Footer: CTA + Security Icon */}
        <div className="mt-10 flex items-center justify-between">
          <button
            disabled={!isLive}
            onClick={() => window.open(product.url, "_blank")}
            className={`group/btn relative overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg ${
              isLive 
                ? `${product.accentColor} text-white hover:shadow-xl hover:scale-105 active:scale-100` 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            {isLive ? (
              <>
                <span>Launch System</span>
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </>
            ) : (
              <>
                <Lock size={16} />
                <span>Coming Soon</span>
              </>
            )}
          </button>
          
          {/* Security Badge */}
          <div className="flex flex-col items-end opacity-50 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider mb-1">Secured</span>
            <div className="flex items-center gap-1">
              <Shield size={14} className="text-emerald-600" />
              <CheckCircle2 size={14} className="text-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductGateway;