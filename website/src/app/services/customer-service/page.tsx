import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProcess } from "@/components/service/ServiceProcess";

const features = [
  { icon: "ML", title: "多语言客服", description: "覆盖英语、德语、法语等主流市场语言，打造更自然的跨文化沟通体验。" },
  { icon: "A", title: "售后管理", description: "建立标准化售后 SOP，快速处理退款、换货、投诉与争议订单。" },
  { icon: "CRM", title: "客户关系维护", description: "通过客户分层与触达策略维护长期关系，提升品牌口碑与复购表现。" },
  { icon: "CS", title: "满意度提升", description: "追踪响应时效与问题解决率，持续优化服务流程和客户体验。" },
];

const steps = [
  { number: "1", title: "需求分析", description: "梳理渠道特点、咨询场景与服务标准，明确团队规模与响应策略。" },
  { number: "2", title: "团队组建", description: "按市场语言与时区配置客服团队，建立统一培训与质检机制。" },
  { number: "3", title: "服务执行", description: "开展全天候客户沟通与售后处理，保障咨询响应与问题闭环。" },
  { number: "4", title: "持续优化", description: "根据用户反馈和数据表现迭代话术、流程与考核指标。" },
];

export const metadata: Metadata = {
  title: "客户服务 | Spring FES",
  description: "Spring FES 全球客户服务支持多语言客服、售后管理与关系维护，帮助品牌持续提升满意度和用户忠诚度。",
};

export default function CustomerServicePage() {
  return (
    <Layout>
      <ServiceHero
        title="全球客户服务"
        subtitle="Global Customer Service"
        description="以本土化语言能力和标准化服务流程，为品牌建立高质量、可规模化的全球客户服务体系。"
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={steps} />
      <ServiceCTA title="想把客服体验变成品牌增长资产？" buttonText="预约客户服务规划" buttonHref="/contact" />
    </Layout>
  );
}
