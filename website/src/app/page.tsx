import { BottomCTA } from "@/components/home/BottomCTA";
import { CoreServices } from "@/components/home/CoreServices";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrustBar />
      <CoreServices />
      <StatsSection />
      <WhyChooseUs />
      <BottomCTA />
    </Layout>
  );
}
