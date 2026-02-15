import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServicePageClient } from "@/components/service/ServicePageClient";

export const metadata: Metadata = {
  title: "品牌增长 | Spring FES",
  description: "Spring FES 品牌增长服务覆盖品牌策略、数字营销、KOL/KOC 合作与社媒运营，驱动品牌全球化增长。",
};

export default function BrandGrowthPage() {
  return (
    <Layout>
      <ServicePageClient serviceKey="brandGrowth" />
    </Layout>
  );
}
