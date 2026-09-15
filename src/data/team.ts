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
      ar: 'الوكيل',
      en: 'Agency Principal',
      ru: 'Агент агентства',
      ro: 'Agentul agenției',
      fr: 'Agent principal',
      it: 'Agente principale'
    },
    name: 'Abdullah',
    url: 'https://snapchat.com/t/MiNqTpwc',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'supervisor-2',
    role: {
      ar: 'مشرف الوكالة',
      en: 'Agency Supervisor',
      ru: 'Супервайзер агентства',
      ro: 'Supervizor agenție',
      fr: 'Superviseur de l\'agence',
      it: 'Supervisore dell\'agenzia'
    },
    name: 'Jumali',
    url: 'https://snapchat.com/t/YbLkKH5S',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'admin-black',
    role: {
      ar: 'مشرف الوكالة',
      en: 'Agency Supervisor',
      ru: 'Супервайзер агентства',
      ro: 'Supervizor agenție',
      fr: 'Superviseur de l\'agence',
      it: 'Supervisore dell\'agenzia'
    },
    name: 'Black',
    url: 'https://snapchat.com/t/WRnsRYu7',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  }
];
