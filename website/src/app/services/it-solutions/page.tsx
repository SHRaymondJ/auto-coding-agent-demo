import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServicePageClient } from "@/components/service/ServicePageClient";

export const metadata: Metadata = {
  title: "IT解决方案 | Spring FES",
  description: "Spring FES IT 解决方案覆盖系统集成、数据平台、自动化工具与安全合规，帮助品牌建立可持续的数字化能力。",
};

export default function ItSolutionsPage() {
  return (
    <Layout>
      <ServicePageClient serviceKey="itSolutions" />
    </Layout>
  );
}
