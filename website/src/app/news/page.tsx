import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";

import { NewsListClient } from "./NewsListClient";

export const metadata: Metadata = {
  title: "品牌洞察 - Spring FES",
  description: "Spring FES 品牌洞察频道，聚焦行业动态、公司新闻与跨境增长干货。",
};

export default function NewsPage() {
  return (
    <Layout>
      <NewsListClient />
    </Layout>
  );
}
