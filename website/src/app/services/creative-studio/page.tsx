import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServicePageClient } from "@/components/service/ServicePageClient";

export const metadata: Metadata = {
  title: "创意工作室 | Spring FES",
  description: "Spring FES 创意工作室提供品牌视觉设计、产品摄影、视频制作与包装设计，帮助品牌持续输出高质量内容资产。",
};

export default function CreativeStudioPage() {
  return (
    <Layout>
      <ServicePageClient serviceKey="creativeStudio" />
    </Layout>
  );
}
