import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProcess } from "@/components/service/ServiceProcess";

const features = [
  { icon: "A", title: "Amazon运营", description: "覆盖选品策略、Listing优化、广告投放与利润模型管理，提升平台转化与复购。" },
  { icon: "T", title: "TikTok Shop运营", description: "围绕短视频与直播场景打造内容化交易链路，实现流量放大与成交转化。" },
  { icon: "S", title: "Shopify独立站", description: "构建品牌私域阵地，优化站点体验、支付流程与再营销机制，沉淀长期用户资产。" },
  { icon: "M", title: "多平台整合", description: "统一渠道运营节奏、库存与数据口径，形成跨平台协同增长闭环。" },
];

const steps = [
  { number: "1", title: "市场分析", description: "识别目标国家消费习惯、竞品结构与机会品类，明确优先切入路径。" },
  { number: "2", title: "店铺搭建", description: "完成店铺定位、视觉体系、商品结构与关键页面配置，快速建立运营底盘。" },
  { number: "3", title: "运营优化", description: "持续优化内容、投放与活动节奏，强化转化效率与广告回报。" },
  { number: "4", title: "数据复盘", description: "围绕核心指标进行周期复盘，校准策略并迭代下一阶段增长动作。" },
];

export const metadata: Metadata = {
  title: "店铺运营 | Spring FES",
  description: "Spring FES 提供多渠道店铺运营服务，覆盖 Amazon、TikTok Shop、Shopify 及多平台整合，助力品牌高效出海增长。",
};

export default function StoreOperationsPage() {
  return (
    <Layout>
      <ServiceHero
        title="多渠道店铺运营"
        subtitle="Multi-channel Store Operations"
        description="从平台开店到增长提效，我们为品牌打造可复制、可扩展、可持续的全球电商运营体系。"
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={steps} />
      <ServiceCTA title="想让多平台运营变成稳定增长引擎？" buttonText="预约店铺运营咨询" buttonHref="/contact" />
    </Layout>
  );
}
