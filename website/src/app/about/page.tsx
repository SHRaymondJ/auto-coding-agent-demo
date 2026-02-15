import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";

import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "关于我们 - Spring FES",
  description: "了解 Spring FES 的团队、发展历程与合作生态。",
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutPageClient />
    </Layout>
  );
}
