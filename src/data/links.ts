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

export const AGENCY_LINKS: LinkItem[] = [
  {
    id: 'tango-join',
    title: {
      ar: 'انضم لوكالتنا على تانجو',
      en: 'Join our Tango Agency',
      ru: 'Присоединяйтесь к нашему агентству Tango',
      ro: 'Alătură-te agenției noastre Tango',
      fr: 'Rejoignez notre agence Tango',
      it: 'Unisciti alla nostra agenzia Tango'
    },
    url: 'https://links.tango.me/vsAXHv67kf73hRvY7',
    icon: BrandIcons.Tango,
    primary: true,
    brandColor: '#FF2A54',
  },
  {
    id: 'zena-join',
    title: {
      ar: 'سجل في برنامج زينا لايف',
      en: 'Join Zena Live Program',
      ru: 'Зарегистрируйтесь в программе Zena Live',
      ro: 'Înscrie-te în programul Zena Live',
      fr: 'Rejoignez le programme Zena Live',
      it: 'Iscriviti al programma Zena Live'
    },
    url: 'https://m-hw.bisf.me/202405/union-join/index.html?fullPage=true&unionId=52039&inviteUid=32900140&t=1787250298&euid=345842baaed4fec8af8867544ecd3bfe',
    icon: BrandIcons.Zeena,
    primary: true,
    brandColor: '#00F3FF',
  },
  {
    id: 'exclusive-rewards',
    title: {
      ar: 'قدم للحصول على مكافآت حصرية',
      en: 'Apply for Exclusive Rewards',
      ru: 'Подать заявку на эксклюзивные награды',
      ro: 'Aplică pentru recompense exclusive',
      fr: 'Postulez pour des récompenses exclusives',
      it: 'Richiedi premi esclusivi'
    },
    url: '#rewards',
    icon: BrandIcons.Crown,
    primary: true,
    brandColor: '#FFD700',
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
    url: 'https://wa.me/+905058167844',
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
    url: 'https://www.instagram.com/legends56272?igsh=MW83NWRxbjkzcXRmdA==',
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
    url: 'https://www.tiktok.com/@legends_agency_tango?_r=1&_t=ZS-9699UYIVxLg',
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
    url: 'https://snapchat.com/t/R8jCQWh1',
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
