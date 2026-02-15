import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";

import { DesignHubClient } from "./DesignHubClient";

export const metadata: Metadata = {
  title: "DESIGN Hub | Spring FES",
  description: "Spring FES DESIGN Hub - 品牌视觉设计、创意内容制作、设计系统构建",
};

export default function DesignHubPage() {
  return (
    <Layout>
      <DesignHubClient />
    </Layout>
  );
}
