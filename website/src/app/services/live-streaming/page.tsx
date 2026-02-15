import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProcess } from "@/components/service/ServiceProcess";

const features = [
  { icon: "LS", title: "直播运营", description: "搭建直播间运营体系，覆盖排期规划、脚本执行与实时互动转化管理。" },
  { icon: "CP", title: "内容策划", description: "围绕产品卖点和用户场景制定内容栏目，提升品牌表达与观看停留。" },
  { icon: "K", title: "达人合作", description: "匹配垂类达人资源并制定联动机制，放大品牌触达与信任转化。" },
  { icon: "DA", title: "数据分析", description: "追踪观看、互动、转化等关键指标，持续优化内容与投放策略。" },
];

const steps = [
  { number: "1", title: "策略制定", description: "明确直播目标、目标人群与内容方向，形成阶段性增长计划。" },
  { number: "2", title: "内容创作", description: "完成选题、脚本、视觉与素材准备，确保品牌调性与商业目标统一。" },
  { number: "3", title: "直播执行", description: "从预热到开播再到复盘执行全流程运营，提升转化效率和用户参与度。" },
  { number: "4", title: "效果复盘", description: "结合数据反馈迭代直播模型，沉淀可复用的增长方法论。" },
];

export const metadata: Metadata = {
  title: "内容直播 | Spring FES",
  description: "Spring FES 内容直播服务覆盖直播运营、内容策划、达人合作与数据分析，帮助品牌在内容场景中实现增长突破。",
};

export default function LiveStreamingPage() {
  return (
    <Layout>
      <ServiceHero
        title="内容直播"
        subtitle="Content & Live Streaming"
        description="把品牌内容力与交易转化力整合到同一链路，让每一场直播都成为增长的放大器。"
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={steps} />
      <ServiceCTA title="想让直播成为稳定增长渠道？" buttonText="预约直播策略咨询" buttonHref="/contact" />
    </Layout>
  );
}
