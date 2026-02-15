import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProcess } from "@/components/service/ServiceProcess";

const features = [
  { icon: "BV", title: "品牌视觉设计", description: "从品牌主视觉到电商场景延展，打造统一且高辨识度的视觉表达。" },
  { icon: "PS", title: "产品摄影", description: "围绕渠道需求产出主图、场景图与详情素材，强化产品吸引力与信任感。" },
  { icon: "VM", title: "视频制作", description: "制作适配广告投流和社媒传播的短视频内容，提升触达效率与内容表现。" },
  { icon: "PK", title: "包装设计", description: "兼顾品牌感与落地执行，输出兼具美感与商业转化力的包装方案。" },
];

const steps = [
  { number: "1", title: "创意策划", description: "梳理品牌定位与用户心智，制定创意方向和内容表达策略。" },
  { number: "2", title: "设计执行", description: "完成视觉设计、影像拍摄与视频制作，确保多渠道素材一致性。" },
  { number: "3", title: "审核修改", description: "结合品牌方反馈进行多轮打磨，确保品质、调性与商业目标对齐。" },
  { number: "4", title: "交付上线", description: "按渠道规范完成交付并协助上线，保障素材使用效率与效果。" },
];

export const metadata: Metadata = {
  title: "创意工作室 | Spring FES",
  description: "Spring FES 创意工作室提供品牌视觉设计、产品摄影、视频制作与包装设计，帮助品牌持续输出高质量内容资产。",
};

export default function CreativeStudioPage() {
  return (
    <Layout>
      <ServiceHero
        title="创意工作室"
        subtitle="Creative Studio"
        description="我们用统一的品牌审美和强执行力，把创意资产转化为可持续复用的增长内容。"
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={steps} />
      <ServiceCTA title="想打造更有辨识度的品牌视觉系统？" buttonText="预约创意服务沟通" buttonHref="/contact" />
    </Layout>
  );
}
