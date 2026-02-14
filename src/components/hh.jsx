
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    id: "crm",
    name: "Sales & CRM",
    category: "Customer Management",
    description:
      "Manage leads, customers, pipelines, invoices, and revenue in one unified CRM platform.",
    url: "https://crm.tibostech.in",
    status: "LIVE",
    icon: LayoutDashboard,
    accent: "border-blue-500 text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: "hrms",
    name: "HRMS & Payroll",
    category: "People Operations",
    description:
      "Handle employee onboarding, payroll, attendance, leave, and performance reviews securely.",
    url: "https://hrms.yourdomain.com",
    status: "Not in LIVE",
    icon: Users,
    accent: "border-emerald-500 text-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
];

const ProductGateway = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl space-y-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-slate-900">
            Company Workspace
          </h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Select a product to continue. Each product runs independently with
            enterprise-grade security and scalability.
          </p>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
              
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl border ${product.accent} flex items-center justify-center`}
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {product.category}
                      </p>
                      <h2 className="text-xl font-semibold text-slate-900">
                        {product.name}
                      </h2>
                    </div>
                  </div>

                  {/* STATUS */}
                  <span className={`flex items-center gap-1 text-xs font-medium ${product.status==="LIVE" ? 'text-emerald-400' : 'text-red-600 bg-red-100'} bg-emerald-50 px-2 py-1 rounded-full`}>
                    <CheckCircle2 size={14} />
                    {product.status}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-slate-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* ACTIONS */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => window.open(product.url, "_blank")}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition ${product.button}`}
                  >
                    Open Workspace
                    <ArrowRight size={16} />
                  </button>

                  <span className="text-xs text-slate-400">
                    Opens in new tab
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ProductGateway;
