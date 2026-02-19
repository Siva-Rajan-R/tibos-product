import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
} from "lucide-react";

const products = [
  {
    id: "crm",
    name: "Sales & CRM",
    category: "Customer Management",
    description: "Manage leads, customers, pipelines, and revenue in one unified CRM platform.",
    url: "https://crm.tibostech.in",
    status: "LIVE",
    icon: LayoutDashboard,
    color: "from-blue-600 to-cyan-500",
    shadow: "shadow-blue-500/20",
  },
  {
    id: "hrms",
    name: "HRMS & Payroll",
    category: "People Operations",
    description: "Handle employee onboarding, payroll, and performance reviews securely.",
    url: "https://hrms.yourdomain.com",
    status: "MAINTENANCE",
    icon: Users,
    color: "from-emerald-600 to-teal-500",
    shadow: "shadow-emerald-500/20",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

const ProductGateway = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-hidden font-sans selection:bg-blue-500/30">
      {/* 1. ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center py-10">
        
        {/* 2. HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium mb-6 backdrop-blur-md"
          >
            <Zap size={14} className="fill-current" />
            <span>Enterprise Ecosystem v2.0</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tight">
            Tibos Workspace
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            One secure gateway for all your business operations. 
            Seamlessly switch between tools with SSO integration.
          </p>
        </motion.div>

        {/* 3. PRODUCT GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* 4. FOOTER */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-col items-center gap-4 text-slate-500"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <p className="text-sm">
            © {new Date().getFullYear()} Tibos Solutions PVT Limited
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
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500`} />
      
      <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col">
        
        <div className="flex justify-between items-start mb-10">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.color} ${product.shadow} text-white`}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
          
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
            isLive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
            {product.status}
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-sm font-medium text-blue-400 mb-1 uppercase tracking-wider">
            {product.category}
          </h3>
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
            {product.name}
          </h2>
          <p className="text-slate-400 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <button
            disabled={!isLive}
            onClick={() => window.open(product.url, "_blank")}
            className={`group/btn relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              isLive 
                ? `bg-white text-black hover:pr-8` 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isLive ? (
              <>
                Launch System
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </>
            ) : (
              <>
                <Lock size={16} />
                Locked
              </>
            )}
          </button>
          
          <div className="flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Security</span>
            <CheckCircle2 size={16} className="text-emerald-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductGateway;