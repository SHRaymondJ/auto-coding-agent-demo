import type { LocalizedNewsArticle, Milestone, NewsCategory, TeamMember, Locale } from "@/lib/i18n/types";
import { zh } from "@/lib/i18n/zh";
import { en } from "@/lib/i18n/en";

export type { LocalizedNewsArticle as NewsArticle, Milestone, NewsCategory, TeamMember };

const dicts = { zh, en } as const;

export function getNewsArticles(locale: Locale): LocalizedNewsArticle[] {
  return dicts[locale].data.newsArticles;
}

export function getTeamMembers(locale: Locale): TeamMember[] {
  return dicts[locale].data.teamMembers;
}

export function getMilestones(locale: Locale): Milestone[] {
  return dicts[locale].data.milestones;
}
