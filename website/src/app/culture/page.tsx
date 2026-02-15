import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";

import { CulturePageClient } from "./CulturePageClient";

export const metadata: Metadata = {
  title: "企业文化 - Spring FES",
  description: "了解 Spring FES 的企业文化、团队风采与发展历程。",
};

export default function CulturePage() {
  return (
    <Layout>
      <CulturePageClient />
    </Layout>
  );
}
