export type Locale = "zh" | "en";

export type NewsCategory = "industry" | "company" | "insights";

export type ServiceKey =
  | "storeOperations"
  | "logistics"
  | "customerService"
  | "itSolutions"
  | "liveStreaming"
  | "creativeStudio"
  | "brandGrowth";

export interface LocalizedNewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Dictionary {
  common: {
    localeLabel: { zh: string; en: string };
    contactUs: string;
  };
  header: {
    services: string;
    navItems: { label: string; href: string }[];
    serviceItems: { label: string; slug: string }[];
    menuToggleAria: string;
    menuCloseAria: string;
  };
  footer: {
    tagline: string;
    quickNav: string;
    contact: string;
    social: string;
    quickLinks: { label: string; href: string }[];
    phone: string;
    email: string;
    address: string;
    icp: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
    };
    coreServices: {
      title: string;
      services: { title: string; description: string }[];
    };
    stats: { value: number; suffix: string; label: string }[];
    whyChooseUs: { title: string; items: { title: string; description: string }[] };
    bottomCta: { title: string; button: string };
  };
  serviceShared: {
    featuresTitle: string;
    processTitle: string;
  };
  services: Record<
    ServiceKey,
    {
      title: string;
      subtitle: string;
      description: string;
      features: { icon: string; title: string; description: string }[];
      steps: { number: string; title: string; description: string }[];
      cta: { title: string; buttonText: string; buttonHref: string };
    }
  >;
  about: {
    title: string;
    intro: string;
    paragraphs: string[];
    teamTitle: string;
    milestonesTitle: string;
    partnersTitle: string;
    partners: string[];
  };
  culture: {
    title: string;
    values: { title: string; content: string }[];
    teamTitle: string;
    galleryMembers: { name: string; title: string }[];
    milestonesTitle: string;
  };
  contact: {
    title: string;
    labels: {
      name: string;
      email: string;
      phone: string;
      company: string;
      requirement: string;
    };
    placeholders: { map: string };
    submit: string;
    infoTitle: string;
    socialTitle: string;
    info: { address: string; phone: string; email: string };
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      companyRequired: string;
      requirementRequired: string;
    };
    submitSuccess: string;
  };
  news: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: { all: string; industry: string; company: string; insights: string };
    backToList: string;
    relatedArticles: string;
    articleNotFound: { title: string; description: string; back: string };
  };
  loading: { text: string };
  notFound: {
    title: string;
    description: string;
    backHome: string;
    orGoTo: string;
    insights: string;
  };
  backToTopAria: string;
  data: {
    newsArticles: LocalizedNewsArticle[];
    teamMembers: TeamMember[];
    milestones: Milestone[];
  };
}
