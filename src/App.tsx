import { useState, useEffect, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  MapPin,
  Globe,
  Star
} from 'lucide-react';

import { companylibrary } from './companylibrary';
import { companydetailslibrary } from './companydetailslibrary';
import { CompanyIcon } from './components/CompanyLogos';

// Official solid SVG logo components for maximum professional authenticity
const FacebookLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const YoutubeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const GithubLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const TiktokLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.19 1.11 1.24 2.63 2.03 4.25 2.24v3.83c-1.39-.17-2.75-.76-3.84-1.66-.54-.44-1-.97-1.38-1.58-.04 2.11-.02 4.22-.03 6.33-.04 2.45-.8 4.96-2.5 6.75-1.74 1.89-4.39 2.83-6.94 2.53-2.66-.2-5.17-1.89-6.32-4.33-1.32-2.65-1.02-6.1 1.05-8.43 1.67-1.93 4.25-2.84 6.79-2.45v3.85c-1.12-.22-2.34.1-3.14.92-.85.83-1.11 2.14-.64 3.22.42 1.09 1.61 1.83 2.78 1.76 1.19-.01 2.25-.89 2.52-2.05.11-1.32.05-2.64.06-3.96V.02z"/>
  </svg>
);

const SnapchatLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .047c-3.124 0-5.466 1.954-5.466 4.673 0 .762.247 1.64.67 2.404-.308.204-.635.454-.925.753-.564.58-1.053 1.344-.944 2.452.057.585.394 1.01.884 1.168.173.056.366.082.573.082.264 0 .548-.044.823-.122.062.333.159.626.29.873.35.656 1.017 1.171 1.921 1.503.111.04.226.079.345.115-.461.328-.992.832-1.309 1.488-.175.362-.258.749-.247 1.144.026.96.862 1.625 2.138 1.71 1.233.082 2.392-.472 2.607-1.57.013-.07.02-.138.02-.206.002-.107-.01-.21-.037-.308.156.035.314.053.473.053.152 0 .304-.016.452-.047-.024.103-.035.21-.035.32 0 .074.006.147.02.219.215 1.091 1.369 1.643 2.599 1.56 1.272-.086 2.106-.752 2.132-1.712.01-.395-.072-.782-.248-1.144-.316-.656-.847-1.16-1.309-1.488.119-.036.234-.075.345-.115.904-.332 1.571-.847 1.921-1.503.13-.247.228-.54.29-.873.275.078.559.122.823.122.207 0 .4-.026.573-.082.49-.158.827-.583.884-1.168.109-1.108-.38-1.872-.944-2.452-.29-.299-.617-.55-.925-.753.423-.764.67-1.642.67-2.404 0-2.72-2.342-4.673-5.466-4.673z"/>
  </svg>
);

const PinterestLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.017 0C5.385 0 0 5.384 0 12.017c0 5.087 3.16 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24 18.65 24 24 18.65 24 12.017 24 5.385 18.65 0 12.017 0z"/>
  </svg>
);

// Official logo icons library
const OFFICIAL_LOGOS: Record<string, ComponentType<{ className?: string }>> = {
  facebook: FacebookLogo,
  linkedin: LinkedinLogo,
  twitter: XLogo,
  x: XLogo,
  instagram: InstagramLogo,
  youtube: YoutubeLogo,
  github: GithubLogo,
  tiktok: TiktokLogo,
  snapchat: SnapchatLogo,
  pinterest: PinterestLogo,
  website: Globe
};

// Premium brand configurations
const BRAND_COLORS: Record<string, { text: string; bg: string; hoverBg: string }> = {
  facebook: { text: 'text-[#1877F2]', bg: 'bg-[#1877F2]/10', hoverBg: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]' },
  linkedin: { text: 'text-[#0A66C2]', bg: 'bg-[#0A66C2]/10', hoverBg: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]' },
  twitter: { text: 'text-neutral-900', bg: 'bg-neutral-900/10', hoverBg: 'hover:bg-neutral-950 hover:text-white hover:border-neutral-950' },
  x: { text: 'text-neutral-900', bg: 'bg-neutral-900/10', hoverBg: 'hover:bg-neutral-950 hover:text-white hover:border-neutral-950' },
  instagram: { text: 'text-[#E1306C]', bg: 'bg-[#E1306C]/10', hoverBg: 'hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]' },
  youtube: { text: 'text-[#FF0000]', bg: 'bg-[#FF0000]/10', hoverBg: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]' },
  github: { text: 'text-[#24292F]', bg: 'bg-[#24292F]/10', hoverBg: 'hover:bg-[#24292F] hover:text-white hover:border-[#24292F]' },
  tiktok: { text: 'text-[#010101]', bg: 'bg-[#010101]/10', hoverBg: 'hover:bg-black hover:text-white hover:border-black' },
  snapchat: { text: 'text-neutral-900', bg: 'bg-[#FFFC00]/10', hoverBg: 'hover:bg-[#FFFC00] hover:text-black hover:border-[#FFFC00]' },
  website: { text: 'text-neutral-700', bg: 'bg-neutral-100', hoverBg: 'hover:bg-neutral-900 hover:text-white hover:border-neutral-900' }
};

export default function App() {
  // Helper to parse path to company ID
  const getCompanyIdFromPath = () => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '').trim().toLowerCase();
    if (!path) return null;
    
    // First, find exact match in companylibrary
    const exactMatch = companylibrary.find(c => c.id.toLowerCase() === path);
    if (exactMatch) return exactMatch.id;
    
    // Fallback: match without trailing dashes
    const normalizedPath = path.replace(/-+$/, '');
    const matched = companylibrary.find(
      (c) => c.id.toLowerCase().replace(/-+$/, '') === normalizedPath
    );
    return matched ? matched.id : null;
  };

  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(getCompanyIdFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedCompanyId(getCompanyIdFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Fetch basic info from companylibrary
  const activeCompanyBasic = companylibrary.find((c) => c.id === selectedCompanyId);
  
  // Fetch detailed info from companydetailslibrary
  // Using robust matching so that keys like 'snagx-' and 'snagx' match correctly!
  const activeCompanyDetail = (() => {
    if (!selectedCompanyId) return null;
    if (companydetailslibrary[selectedCompanyId]) {
      return companydetailslibrary[selectedCompanyId];
    }
    // Try normalized match (without trailing dashes)
    const normalizedId = selectedCompanyId.replace(/-+$/, '').toLowerCase();
    const foundKey = Object.keys(companydetailslibrary).find(
      (key) => key.replace(/-+$/, '').toLowerCase() === normalizedId
    );
    return foundKey ? companydetailslibrary[foundKey] : null;
  })();

  const handleSelectCompany = (id: string) => {
    setSelectedCompanyId(id);
    window.history.pushState(null, '', `/${id}`);
  };

  const handleBackToCompanies = () => {
    setSelectedCompanyId(null);
    window.history.pushState(null, '', '/');
  };

  // Filter social links to only show if a valid URL is present and the platform is supported in our logo library
  const visibleLinks = activeCompanyDetail?.socialLinks.filter((social) => {
    const hasUrl = social.url && social.url.trim() !== '';
    const hasLogo = social.platform in OFFICIAL_LOGOS;
    return hasUrl && hasLogo;
  }) || [];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans flex flex-col selection:bg-neutral-900 selection:text-white">
      
      {/* Main Body */}
      <div className="flex-1 flex flex-col justify-start md:justify-center py-6 md:py-12">
        <AnimatePresence mode="wait">
          {!selectedCompanyId || !activeCompanyBasic || !activeCompanyDetail ? (
            
            /* =========================================================
               SCREEN 1: THE COMPANY LOGOS HUB (Generated from companylibrary)
               ========================================================= */
            <motion.div
              key="logo-hub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-start md:justify-center py-4 md:py-8"
            >
              {/* Header Branding */}
              <div className="text-center mb-8 md:mb-12 space-y-2">
                <h1 className="font-display text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 uppercase">
                  ONPLAN <span className="text-neutral-400 font-light">GROUP</span>
                </h1>
                <div className="h-1 w-10 bg-neutral-900 mx-auto rounded-full mt-3 opacity-80" />
              </div>

              {/* Minimal Logos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {companylibrary.map((company, index) => (
                  <motion.button
                    key={company.id}
                    onClick={() => {
                      handleSelectCompany(company.id);
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex flex-col items-center justify-center p-8 bg-white border border-neutral-200/80 rounded-3xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:border-neutral-900/40 text-center"
                  >
                    {/* Rounded Logo Box */}
                    <div className="w-full h-24 rounded-2xl bg-white border border-neutral-200/80 flex items-center justify-center p-0 shadow-sm mb-4 transform transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                      {company.logoUrl ? (
                        <img 
                          src={company.logoUrl} 
                          alt={`${company.name} Logo`} 
                          className="w-full h-full object-fill"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className={`w-full h-full rounded-xl bg-gradient-to-br ${company.logoColor} flex items-center justify-center`}>
                          <CompanyIcon name={company.iconName} className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-neutral-800 text-base leading-snug">
                      {company.name}
                    </h3>
                  </motion.button>
                ))}
              </div>
            </motion.div>

          ) : (

            /* =========================================================
               SCREEN 2: SUBSIDIARY BUTTONS PORTAL (Always same layout, fetches from companydetailslibrary)
               ========================================================= */
             <motion.div
              key="company-portal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto px-4 sm:px-6 py-3 md:py-6 space-y-4 w-full"
            >
              {/* Header Bar (Back button & Company H2 title on same line) */}
              <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                <button
                  onClick={handleBackToCompanies}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-widest font-bold text-neutral-600 hover:text-neutral-950 px-4 py-2 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-900/30 hover:shadow-sm active:scale-95 transition-all duration-300 group cursor-pointer shrink-0 relative overflow-hidden"
                >
                  {/* Elegant micro-texture overlay */}
                  <span className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:6px_6px] opacity-40 pointer-events-none" />
                  
                  <ArrowLeft className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:-translate-x-1 text-neutral-500 group-hover:text-neutral-950" />
                  <span className="relative z-10">BACK</span>
                </button>
                <h2 className="font-display text-base sm:text-lg md:text-xl font-black text-neutral-900 tracking-tight text-right truncate">
                  {activeCompanyBasic.name}
                </h2>
              </div>

              {/* Company Mini Hero */}
              <div className="bg-white border border-neutral-200/80 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden flex flex-col items-center gap-4 text-center">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${activeCompanyBasic.logoColor}`} />
                
                <div className="w-full max-w-[320px] h-32 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center p-0 shadow-sm overflow-hidden">
                  {activeCompanyBasic.logoUrl ? (
                    <img 
                      src={activeCompanyBasic.logoUrl} 
                      alt={`${activeCompanyBasic.name} Logo`} 
                      className="w-full h-full object-fill"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br ${activeCompanyBasic.logoColor} flex items-center justify-center`}>
                      <CompanyIcon name={activeCompanyBasic.iconName} className="w-10 h-10 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* OFFICIAL SERVICE CHANNELS */}
              {(activeCompanyDetail.googleReviewsUrl || activeCompanyDetail.websiteUrl) && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase text-center sm:text-left">
                    GOOGLE SERVICE CHANNELS
                  </h3>

                  <div className={`grid ${activeCompanyDetail.googleReviewsUrl && activeCompanyDetail.websiteUrl ? 'grid-cols-2' : 'grid-cols-1'} gap-2 sm:gap-4`}>
                    
                    {/* DIRECT GOOGLE REVIEWS BUTTON */}
                    {activeCompanyDetail.googleReviewsUrl && (
                      <a
                        href={activeCompanyDetail.googleReviewsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2.5 sm:p-4 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-900/60 hover:shadow-lg hover:bg-neutral-50/20 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500" />
                          </div>
                          <div className="text-left min-w-0">
                            <span className="font-display font-bold text-xs sm:text-sm text-neutral-800 block truncate whitespace-nowrap">Google Review</span>
                          </div>
                        </div>
                      </a>
                    )}

                    {/* Official Website Link */}
                      {activeCompanyDetail?.websiteUrl && (
                        <a
                          href={activeCompanyDetail.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-2.5 sm:p-4 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-900/60 hover:shadow-lg hover:bg-neutral-50/20 transition-all group cursor-pointer"
                        >
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-neutral-50 flex items-center justify-center shrink-0 group-hover:bg-neutral-100 transition-colors">
                              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 group-hover:text-neutral-950 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div className="text-left min-w-0">
                              <span className="font-display font-bold text-xs sm:text-sm text-neutral-800 block truncate whitespace-nowrap lowercase">
                                {activeCompanyDetail.websiteUrl.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '')}
                              </span>
                            </div>
                          </div>
                        </a>
                      )}
                  </div>
                </div>
              )}

 
            {/* ALWAYS VISIBLE SOCIAL MEDIA & PUBLIC CHANNELS (Commented Out)
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase text-center">
                  SOCIAL MEDIA
                </h3>

                <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 shadow-sm flex flex-wrap items-center justify-center gap-4">
                  {visibleLinks.map((social) => {
                    const IconComponent = OFFICIAL_LOGOS[social.platform];
                    const brandStyle = BRAND_COLORS[social.platform] || {
                      text: 'text-neutral-600',
                      bg: 'bg-neutral-100',
                      hoverBg: 'hover:bg-neutral-900 hover:text-white'
                    };

                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-2xl border border-neutral-150 bg-white ${brandStyle.text} ${brandStyle.bg} ${brandStyle.hoverBg} flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 relative group`}
                        title={social.username || social.platform}
                      >
                        <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                        <span className="absolute -top-10 scale-0 group-hover:scale-100 bg-neutral-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-md font-mono tracking-wider z-10">
                          {social.platform.toUpperCase()}
                        </span>
                      </a>
                    );
                  })}

                  Official Website Link
                  {activeCompanyDetail?.websiteUrl && (
                    <a
                      href={activeCompanyDetail.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl border border-neutral-150 bg-white text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 relative group"
                      title="Official Website"
                    >
                      <Globe className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      <span className="absolute -top-10 scale-0 group-hover:scale-100 bg-neutral-900 text-white text-[10px] px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-md font-mono tracking-wider z-10">
                        WEBSITE
                      </span>
                    </a>
                  )}
                </div>
              </div>
            */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
