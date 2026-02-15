import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServicePageClient } from "@/components/service/ServicePageClient";

export const metadata: Metadata = {
  title: "客户服务 | Spring FES",
  description: "Spring FES 全球客户服务支持多语言客服、售后管理与关系维护，帮助品牌持续提升满意度和用户忠诚度。",
};

export default function CustomerServicePage() {
  return (
    <Layout>
      <ServicePageClient serviceKey="customerService" />
    </Layout>
  );
}
