import { BottomCTA } from "@/components/home/BottomCTA";
import { CoreServices } from "@/components/home/CoreServices";
import { GlobalNetwork } from "@/components/home/GlobalNetwork";
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
      <GlobalNetwork />
      <WhyChooseUs />
      <BottomCTA />
    </Layout>
  );
}
