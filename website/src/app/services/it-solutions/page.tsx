import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProcess } from "@/components/service/ServiceProcess";

const features = [
  { icon: "SI", title: "系统集成", description: "打通电商平台、ERP、CRM 与营销系统，减少数据孤岛并提升协同效率。" },
  { icon: "DA", title: "数据分析平台", description: "构建可视化数据中台，实时追踪销售、投放、库存与用户行为指标。" },
  { icon: "AT", title: "自动化工具", description: "通过自动化流程替代重复性操作，提升团队效率并降低人工错误率。" },
  { icon: "SC", title: "安全合规", description: "围绕数据安全、权限管控与合规要求搭建稳定可靠的技术底座。" },
];

const steps = [
  { number: "1", title: "需求调研", description: "结合业务目标梳理系统现状、痛点与关键流程，明确技术改造优先级。" },
  { number: "2", title: "方案设计", description: "输出系统架构、数据模型与集成方式，平衡可扩展性与实施成本。" },
  { number: "3", title: "开发实施", description: "分阶段推进开发、联调与上线，保障业务连续性与交付质量。" },
  { number: "4", title: "运维支持", description: "提供监控预警、性能优化与迭代升级，确保系统长期稳定运行。" },
];

export const metadata: Metadata = {
  title: "IT解决方案 | Spring FES",
  description: "Spring FES IT 解决方案覆盖系统集成、数据平台、自动化工具与安全合规，帮助品牌建立可持续的数字化能力。",
};

export default function ItSolutionsPage() {
  return (
    <Layout>
      <ServiceHero
        title="IT 解决方案"
        subtitle="IT Solutions"
        description="将业务流程与技术能力深度结合，构建支持品牌全球化增长的数字基础设施。"
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={steps} />
      <ServiceCTA title="准备升级您的跨境业务技术底盘？" buttonText="咨询 IT 解决方案" buttonHref="/contact" />
    </Layout>
  );
}
