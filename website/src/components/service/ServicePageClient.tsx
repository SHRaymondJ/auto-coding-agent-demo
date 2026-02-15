"use client";

import { useLanguage, type ServiceKey } from "@/lib/i18n";

import { ServiceCTA } from "./ServiceCTA";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceHero } from "./ServiceHero";
import { ServiceProcess } from "./ServiceProcess";

export function ServicePageClient({ serviceKey }: { serviceKey: ServiceKey }) {
  const { t } = useLanguage();
  const service = t.services[serviceKey];

  return (
    <>
      <ServiceHero title={service.title} subtitle={service.subtitle} description={service.description} />
      <ServiceFeatures features={service.features} />
      <ServiceProcess steps={service.steps} />
      <ServiceCTA title={service.cta.title} buttonText={service.cta.buttonText} buttonHref={service.cta.buttonHref} />
    </>
  );
}
