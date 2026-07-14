export interface CompanyBasic {
  id: string;
  name: string;
  iconName: string; // Lucide icon name
  logoColor: string; // Tailwind bg gradient e.g. 'from-amber-500 to-orange-600'
  logoUrl?: string; // Custom logo image path
}

export const companylibrary: CompanyBasic[] = [
  {
    id: 'onplan',
    name: 'Onplan Real Estate',
    iconName: 'Building2',
    logoColor: 'from-amber-500 to-orange-600',
    logoUrl: '/onplan.png'
  },
  /*{
    id: 'snagx',
    name: 'Snagx',
    iconName: 'Home',
    logoColor: 'from-blue-500 to-indigo-600',
    logoUrl: '/snagx.png'
  },
  {
    id: 'sufsaf',
    name: 'Al Sufsaf',
    iconName: 'Truck',
    logoColor: 'from-emerald-500 to-teal-600',
    logoUrl: '/alsufsaf.png'
  },
  {
    id: 'onplangt',
    name: 'Onplan General Trading',
    iconName: 'Zap',
    logoColor: 'from-cyan-500 to-blue-600',
    logoUrl: '/onplan-gt.png'
  },*/
  {
    id: 'authentic',
    name: 'Authentic Holiday Homes',
    iconName: 'TrendingUp',
    logoColor: 'from-purple-500 to-pink-600',
    logoUrl: '/authentic.png'
  },
  {
    id: 'touchup',
    name: 'Touch Up',
    iconName: 'Cpu',
    logoColor: 'from-violet-500 to-fuchsia-600',
    logoUrl: '/touchup.png'
  }
];
