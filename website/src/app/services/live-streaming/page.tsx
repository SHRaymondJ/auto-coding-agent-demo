import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServicePageClient } from "@/components/service/ServicePageClient";

export const metadata: Metadata = {
  title: "内容直播 | Spring FES",
  description: "Spring FES 内容直播服务覆盖直播运营、内容策划、达人合作与数据分析，帮助品牌在内容场景中实现增长突破。",
};

export default function LiveStreamingPage() {
  return (
    <Layout>
      <ServicePageClient serviceKey="liveStreaming" />
    </Layout>
  );
}
