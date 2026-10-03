import React from 'react';
import { BrandIcons } from '../components/BrandIcons';
import { Language } from '../i18n/LanguageContext';

export interface LinkItem {
  id: string;
  title: Record<Language, string>;
  url: string;
  icon: React.ElementType;
  primary?: boolean;
  brandColor: string;
  badge?: Record<Language, string>;
}

export const XENA_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.xparty.androidapp';
export const XENA_APP_STORE_URL = 'https://apps.apple.com/app/xena-group-voice-chat-party/id6471887375';
export const XENA_UNION_JOIN_URL = 'https://m-hw.bisf.me/202405/union-join/index.html?fullPage=true&unionId=52039&inviteUid=32900140&t=1787250298&euid=345842baaed4fec8af8867544ecd3bfe';

export function getXenaStoreUrl(): { url: string; platform: 'ios' | 'android' | 'other' } {
  if (typeof window === 'undefined') {
    return { url: XENA_PLAY_STORE_URL, platform: 'other' };
  }
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
    return { url: XENA_APP_STORE_URL, platform: 'ios' };
  }
  if (/android/i.test(ua)) {
    return { url: XENA_PLAY_STORE_URL, platform: 'android' };
  }
  return { url: XENA_PLAY_STORE_URL, platform: 'other' };
}

export const AGENCY_LINKS: LinkItem[] = [
  {
    id: 'xena-join',
    title: {
      ar: 'انضم للوكالة من هنا',
      en: 'Join Agency Union Here',
      ru: 'Вступить в агентство здесь',
      ro: 'Alătură-te agenției de aici',
      fr: 'Rejoindre l\'agence ici',
      it: 'Unisciti all\'agenzia qui'
    },
    url: XENA_UNION_JOIN_URL,
    icon: BrandIcons.Xena,
    primary: true,
    brandColor: '#00F3FF',
  },
  {
    id: 'whatsapp',
    title: {
      ar: 'تواصل معنا على واتساب',
      en: 'WhatsApp Support',
      ru: 'Поддержка WhatsApp',
      ro: 'Suport WhatsApp',
      fr: 'Support WhatsApp',
      it: 'Supporto WhatsApp'
    },
    url: 'https://wa.me/447460018974',
    icon: BrandIcons.WhatsApp,
    brandColor: '#25D366',
  },
  {
    id: 'instagram',
    title: {
      ar: 'انستجرام',
      en: 'Instagram',
      ru: 'Instagram',
      ro: 'Instagram',
      fr: 'Instagram',
      it: 'Instagram'
    },
    url: 'https://www.instagram.com/legends_agenccy/',
    icon: BrandIcons.Instagram,
    brandColor: '#E1306C',
  },
  {
    id: 'tiktok',
    title: {
      ar: 'تيك توك',
      en: 'TikTok',
      ru: 'TikTok',
      ro: 'TikTok',
      fr: 'TikTok',
      it: 'TikTok'
    },
    url: 'https://www.tiktok.com/@legends.1.agency',
    icon: BrandIcons.TikTok,
    brandColor: '#00F2FE',
  },
  {
    id: 'snapchat',
    title: {
      ar: 'سناب شات',
      en: 'Snapchat',
      ru: 'Snapchat',
      ro: 'Snapchat',
      fr: 'Snapchat',
      it: 'Snapchat'
    },
    url: 'https://www.snapchat.com/@legeendsagency?locale=ar_OM&sid=7d0e9b4004a840f8a3621e7d64bc2ed6&share_id=DFZAt4TKTYSB_Ardk9GSug&invite_id=Os8h6A2y',
    icon: BrandIcons.Snapchat,
    brandColor: '#FFFC00',
  },
  {
    id: 'facebook',
    title: {
      ar: 'فيسبوك',
      en: 'Facebook',
      ru: 'Facebook',
      ro: 'Facebook',
      fr: 'Facebook',
      it: 'Facebook'
    },
    url: 'https://www.facebook.com/share/18K86fqxqd/?mibextid=wwXIfr',
    icon: BrandIcons.Facebook,
    brandColor: '#1877F2',
  },
];
