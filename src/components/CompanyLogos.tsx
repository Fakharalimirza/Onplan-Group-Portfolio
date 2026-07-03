import * as Icons from 'lucide-react';
import { Company } from '../types';
import { motion } from 'motion/react';

interface CompanyLogosProps {
  companies: Company[];
  activeCompanyId: string | null;
  onSelectCompany: (id: string) => void;
}

// Helper to render lucide icon dynamically
export function CompanyIcon({ name, className = "w-8 h-8 text-white" }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Briefcase className={className} />;
  return <IconComponent className={className} />;
}

export default function CompanyLogos({ companies, activeCompanyId, onSelectCompany }: CompanyLogosProps) {
  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-neutral-800 tracking-tight">
          Select an Onplan Group Subsidiary
        </h2>
        <p className="text-neutral-500 text-sm mt-2 max-w-lg mx-auto">
          Click any company logo to unlock official corporate channels, integrated satellite coordinates, and professional performance reviews.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {companies.map((company, index) => {
          const isActive = activeCompanyId === company.id;
          
          return (
            <motion.button
              key={company.id}
              onClick={() => onSelectCompany(company.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all duration-300 overflow-hidden cursor-pointer ${
                isActive
                  ? 'border-neutral-900 bg-white shadow-xl ring-4 ring-neutral-950/5'
                  : 'border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 hover:shadow-lg'
              }`}
            >
              {/* Colored subtle radial aura behind active logo */}
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-br ${company.logoColor} opacity-5 blur-xl -z-10`} />
              )}

              {/* Company Logo Badge */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.logoColor} flex items-center justify-center shadow-lg mb-4 transform transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                <CompanyIcon name={company.iconName} className="w-8 h-8 text-white" />
              </div>

              {/* Mini tag */}
              <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-400 font-medium mb-1.5">
                {company.sector.split(' ')[0]}
              </span>

              {/* Subsidiary name */}
              <h3 className="font-display font-bold text-neutral-800 text-sm md:text-base text-center leading-tight">
                {company.name}
              </h3>

              {/* Status indicator */}
              <div className="mt-4 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-300'}`} />
                <span className={`text-[11px] font-mono tracking-wider ${isActive ? 'text-emerald-600 font-semibold' : 'text-neutral-400'}`}>
                  {isActive ? 'SELECTED' : 'VIEW CHANNELS'}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
