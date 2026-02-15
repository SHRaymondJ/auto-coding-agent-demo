import { type Metadata } from "next";

import { Layout } from "@/components/layout/Layout";
import { ServiceCTA } from "@/components/service/ServiceCTA";
import { ServiceFeatures } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceProcess } from "@/components/service/ServiceProcess";

const features = [
  { icon: "W", title: "海外仓储", description: "建立多区域仓配网络，优化前置库存布局，缩短履约时效并降低运输成本。" },
  { icon: "L", title: "跨境物流", description: "整合空运、海运与末端配送资源，按品类和时效需求匹配最优物流方案。" },
  { icon: "C", title: "清关报检", description: "提供合规申报、单证管理与政策咨询，降低通关风险并提升放行效率。" },
  { icon: "I", title: "库存管理", description: "通过动态补货与库存预警机制，实现库存周转与销售需求之间的平衡。" },
];

const steps = [
  { number: "1", title: "入库质检", description: "完成商品收货、批次核验与质量检测，确保库存质量稳定可追溯。" },
  { number: "2", title: "智能仓储", description: "基于 SKU 与销量结构进行库位优化，实现更高效的拣配与盘点管理。" },
  { number: "3", title: "高效配送", description: "对接优质承运商网络，执行多渠道发货与物流跟踪，保障妥投体验。" },
  { number: "4", title: "售后支持", description: "完善退换货与逆向物流流程，减少履约损耗并提升客户满意度。" },
];

export const metadata: Metadata = {
  title: "仓储物流 | Spring FES",
  description: "Spring FES 全球仓储物流服务涵盖海外仓储、跨境物流、清关报检与库存管理，为品牌建立稳定高效的履约体系。",
};

export default function LogisticsPage() {
  return (
    <Layout>
      <ServiceHero
        title="全球仓储物流"
        subtitle="Global Warehouse & Logistics"
        description="以数字化供应链能力连接全球仓配节点，让品牌在不同市场都能保持稳定履约与服务体验。"
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={steps} />
      <ServiceCTA title="需要更稳定、更高效的跨境履约体系？" buttonText="获取物流解决方案" buttonHref="/contact" />
    </Layout>
  );
}
