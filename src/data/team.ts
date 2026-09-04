import { Language } from '../i18n/LanguageContext';

export interface TeamMember {
  id: string;
  role: Record<Language, string>;
  name: string;
  url: string;
  avatar: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'owner',
    role: {
      ar: 'مالك الوكالة',
      en: 'Agency Founder',
      ru: 'Основатель агентства',
      ro: 'Fondatorul agenției',
      fr: 'Fondateur de l\'agence',
      it: 'Fondatore dell\'agenzia'
    },
    name: 'Abdullah',
    url: 'https://www.tango.me/scHzDs-g7kXh_YS3L63g5Q',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'admin-1',
    role: {
      ar: 'إداري الوكالة',
      en: 'Agency Admin',
      ru: 'Администратор агентства',
      ro: 'Administrator agenție',
      fr: 'Administrateur de l\'agence',
      it: 'Amministratore dell\'agenzia'
    },
    name: 'Khaled',
    url: 'https://www.tango.me/6jQJbsYPNaQvCRmp6Ik0_w',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'admin-2',
    role: {
      ar: 'إداري الوكالة',
      en: 'Agency Admin',
      ru: 'Администратор агентства',
      ro: 'Administrator agenție',
      fr: 'Administrateur de l\'agence',
      it: 'Amministratore dell\'agenzia'
    },
    name: 'Hussam',
    url: 'https://www.tango.me/dDkE4h56QAn1T1rqzzgYKQ',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'admin-3',
    role: {
      ar: 'إداري الوكالة',
      en: 'Agency Admin',
      ru: 'Администратор агентства',
      ro: 'Administrator agenție',
      fr: 'Administrateur de l\'agence',
      it: 'Amministratore dell\'agenzia'
    },
    name: 'Jumali',
    url: 'https://www.tango.me/_ggOwoDaW_PfYPkU8V9ZIw',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'admin-4',
    role: {
      ar: 'إداري الوكالة',
      en: 'Agency Admin',
      ru: 'Администратор агентства',
      ro: 'Administrator agenție',
      fr: 'Administrateur de l\'agence',
      it: 'Amministratore dell\'agenzia'
    },
    name: 'Black',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  }
];
