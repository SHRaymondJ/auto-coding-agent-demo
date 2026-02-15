import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServicePageClient } from "@/components/service/ServicePageClient";

export const metadata: Metadata = {
  title: "仓储物流 | Spring FES",
  description: "Spring FES 全球仓储物流服务涵盖海外仓储、跨境物流、清关报检与库存管理，为品牌建立稳定高效的履约体系。",
};

export default function LogisticsPage() {
  return (
    <Layout>
      <ServicePageClient serviceKey="logistics" />
    </Layout>
  );
}
