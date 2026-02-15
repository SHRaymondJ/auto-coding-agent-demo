import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProcess } from "@/components/service/ServiceProcess";

const features = [
  { icon: "BS", title: "品牌策略", description: "围绕目标市场建立品牌定位、价值主张与差异化叙事，夯实增长基础。" },
  { icon: "DM", title: "数字营销", description: "整合搜索、社媒与广告投放渠道，构建可衡量、可迭代的增长模型。" },
  { icon: "K", title: "KOL/KOC合作", description: "联动垂类创作者矩阵，提升品牌声量、内容可信度与交易转化。" },
  { icon: "SM", title: "社媒运营", description: "通过长期内容运营沉淀品牌资产，提升用户互动与社区活跃度。" },
];

const steps = [
  { number: "1", title: "品牌诊断", description: "评估品牌现状、用户认知与渠道表现，识别增长瓶颈和机会点。" },
  { number: "2", title: "策略制定", description: "设定阶段目标与增长路径，形成覆盖品牌、内容与投放的一体化策略。" },
  { number: "3", title: "营销执行", description: "多渠道协同落地营销动作，提升触达效率、转化表现和品牌影响力。" },
  { number: "4", title: "增长复盘", description: "以数据反馈迭代策略与预算配置，确保增长持续、稳健、可复制。" },
];

export const metadata: Metadata = {
  title: "品牌增长 | Spring FES",
  description: "Spring FES 品牌增长服务覆盖品牌策略、数字营销、KOL/KOC 合作与社媒运营，驱动品牌全球化增长。",
};

export default function BrandGrowthPage() {
  return (
    <Layout>
      <ServiceHero
        title="品牌增长"
        subtitle="Brand Growth"
        description="将品牌战略、内容与投放打通为统一增长系统，帮助品牌在全球市场持续放大影响力与商业成果。"
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={steps} />
      <ServiceCTA title="想系统化提升品牌全球增长能力？" buttonText="预约品牌增长咨询" buttonHref="/contact" />
    </Layout>
  );
}
