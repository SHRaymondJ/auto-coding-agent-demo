import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";

import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "联系我们 - Spring FES",
  description: "联系 Spring FES 获取跨境电商品牌增长解决方案。",
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactPageClient />
    </Layout>
  );
}
