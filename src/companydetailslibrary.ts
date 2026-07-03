import { SocialLink } from './types';

export interface CompanyDetail {
  id: string;
  address: string;
  socialLinks: SocialLink[];
  googleReviewsUrl?: string;
  googleMapsUrl?: string;
  websiteUrl?: string;
}

export const companydetailslibrary: Record<string, CompanyDetail> = {
  'onplan': {
    id: '1',
    address: 'Office A 202 - Sports Society Mall - First floor - Mirdif - Dubai',
    googleReviewsUrl: 'https://maps.app.goo.gl/G4XSxeJsioT3LSys7',
    googleMapsUrl: 'https://maps.app.goo.gl/G4XSxeJsioT3LSys7',
    websiteUrl: 'https://onplan.ae',
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com/onplan.construction', username: '@onplan.construction' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/onplan-construction', username: 'Onplan Construction Ltd' },
      { platform: 'x', url: 'https://x.com/onplan_build', username: '@onplan_build' },
      { platform: 'instagram', url: 'https://instagram.com/onplan.construction', username: '@onplan.construction' },
      { platform: 'youtube', url: 'https://youtube.com/c/onplanconstruction', username: '@onplan.construction' },
      { platform: 'tiktok', url: 'https://tiktok.com/@onplan.construction', username: '@onplan.construction' },
      { platform: 'snapchat', url: 'https://snapchat.com/add/onplan_build', username: 'onplan_build' }
    ]
  },
  'snagx': {
    id: '2',
    address: 'Office A 202 - Sports Society Mall - First floor - Mirdif - Dubai',
    googleReviewsUrl: 'https://www.google.com/search?q=Snagx+Office+A+202+Sports+Society+Mall+First+floor+Mirdif+Dubai+reviews',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Snagx+Office+A+202+Sports+Society+Mall+First+floor+Mirdif+Dubai',
    websiteUrl: 'https://snagx.ae',
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com/onplan.properties', username: '@onplan.properties' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/onplan-properties', username: 'Onplan Properties' },
      { platform: 'instagram', url: 'https://instagram.com/onplan.luxury', username: '@onplan.luxury' },
      { platform: 'youtube', url: 'https://youtube.com/c/onplanproperties', username: 'Onplan Properties TV' },
      { platform: 'x', url: 'https://x.com/onplan_luxury', username: '@onplan_luxury' },
      { platform: 'tiktok', url: 'https://tiktok.com/@onplan.properties', username: '@onplan.properties' }
    ]
  },
  'sufsaf': {
    id: '3',
    address: 'Office A 202 - Sports Society Mall - First floor - Mirdif - Dubai',
    googleReviewsUrl: 'https://www.google.com/search?q=Al+Sufsaf+Office+A+202+Sports+Society+Mall+First+floor+Mirdif+Dubai+reviews',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Al+Sufsaf+Office+A+202+Sports+Society+Mall+First+floor+Mirdif+Dubai',
    websiteUrl: '',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/onplan-logistics', username: 'Onplan Logistics Ltd' },
      { platform: 'x', url: 'https://x.com/onplan_cargo', username: '@onplan_cargo' },
      { platform: 'facebook', url: 'https://facebook.com/onplan.logistics', username: '@onplan.logistics' },
      { platform: 'tiktok', url: 'https://tiktok.com/@onplan.logistics', username: '@onplan.logistics' }
    ]
  },
  'onplangt': {
    id: '4',
    address: 'Office A 202 - Sports Society Mall - First floor - Mirdif - Dubai',
    googleReviewsUrl: 'https://www.google.com/search?q=Onplan+General+Trading+Office+A+202+Sports+Society+Mall+First+floor+Mirdif+Dubai+reviews',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Onplan+General+Trading+Office+A+202+Sports+Society+Mall+First+floor+Mirdif+Dubai',
    websiteUrl: '',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/onplan-energy', username: 'Onplan Energy Solutions' },
      { platform: 'x', url: 'https://x.com/onplan_green', username: '@onplan_green' },
      { platform: 'instagram', url: 'https://instagram.com/onplan.energy', username: '@onplan.energy' },
      { platform: 'snapchat', url: 'https://snapchat.com/add/onplan_energy', username: 'onplan_energy' }
    ]
  },
  'authentic': {
    id: '5',
    address: 'Office A 202 - Sports Society Mall - First floor - Mirdif - Dubai',
    googleReviewsUrl: 'https://maps.app.goo.gl/erUsPiuQ17bU61A38',
    googleMapsUrl: 'https://maps.app.goo.gl/erUsPiuQ17bU61A38',
    websiteUrl: 'https://authenticholidayhomes.ae',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/onplan-financial', username: 'Onplan Wealth & Financial' },
      { platform: 'x', url: 'https://x.com/onplan_advisor', username: '@onplan_advisor' },
      { platform: 'instagram', url: 'https://instagram.com/onplan.wealth', username: '@onplan.wealth' }
    ]
  },
  'touchup': {
    id: '6',
    address: 'Office A 202 - Sports Society Mall - First floor - Mirdif - Dubai',
    googleReviewsUrl: 'https://www.google.com/search?q=Touch+Up+Office+A+202+Sports+Society+Mall+First+floor+Mirdif+Dubai+reviews',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Touch+Up+Office+A+202+Sports+Society+Mall+First+floor+Mirdif+Dubai',
    websiteUrl: 'https://touchup.ae',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/company/onplan-digital', username: 'Onplan Digital Solutions' },
      { platform: 'github', url: 'https://github.com/onplan-digital', username: '@onplan-digital' },
      { platform: 'x', url: 'https://x.com/onplan_digital', username: '@onplan_digital' },
      { platform: 'tiktok', url: 'https://tiktok.com/@onplan.digital', username: '@onplan.digital' }
    ]
  }
};
