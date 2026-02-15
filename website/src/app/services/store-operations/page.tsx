import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServicePageClient } from "@/components/service/ServicePageClient";

export const metadata: Metadata = {
  title: "店铺运营 | Spring FES",
  description: "Spring FES 提供多渠道店铺运营服务，覆盖 Amazon、TikTok Shop、Shopify 及多平台整合，助力品牌高效出海增长。",
};

export default function StoreOperationsPage() {
  return (
    <Layout>
      <ServicePageClient serviceKey="storeOperations" />
    </Layout>
  );
}
