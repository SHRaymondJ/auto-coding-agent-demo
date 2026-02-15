"use client";

import { motion } from "framer-motion";
import { useState, type ComponentProps } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  requirement: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormSubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  requirement: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "请输入姓名";
  }

  if (!values.email.trim()) {
    errors.email = "请输入邮箱";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "请输入有效的邮箱地址";
  }

  if (!values.phone.trim()) {
    errors.phone = "请输入电话";
  }

  if (!values.company.trim()) {
    errors.company = "请输入公司名称";
  }

  if (!values.requirement.trim()) {
    errors.requirement = "请填写需求描述";
  }

  return errors;
}

export function ContactPageClient() {
  const { locale, t } = useLanguage();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const heroSubtitle =
    locale === "zh"
      ? "告诉我们您的出海目标，我们会在 24 小时内提供初步方案建议。"
      : "Tell us your global growth goals and we will respond with an initial plan within 24 hours.";

  const mapSoonText = locale === "zh" ? "即将上线" : "Launching Soon";

  function localizeErrors(rawErrors: FormErrors): FormErrors {
    return {
      name: rawErrors.name ? t.contact.errors.nameRequired : undefined,
      email: rawErrors.email
        ? values.email.trim()
          ? t.contact.errors.emailInvalid
          : t.contact.errors.emailRequired
        : undefined,
      phone: rawErrors.phone ? t.contact.errors.phoneRequired : undefined,
      company: rawErrors.company ? t.contact.errors.companyRequired : undefined,
      requirement: rawErrors.requirement ? t.contact.errors.requirementRequired : undefined,
    };
  }

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const handleSubmit: FormSubmitHandler = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(localizeErrors(nextErrors));

    if (Object.keys(nextErrors).length === 0) {
      alert(t.contact.submitSuccess);
      setValues(initialValues);
    }
  };

  return (
    <Section className="relative overflow-hidden pt-36 md:pt-40" background="light">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,_rgba(0,123,255,0.14),transparent_42%),radial-gradient(circle_at_84%_84%,_rgba(255,107,0,0.12),transparent_40%)]" />
      <Container className="relative">
        <motion.h1
          className="text-4xl font-bold text-text-heading sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          {t.contact.title}
        </motion.h1>
        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-text-body sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {heroSubtitle}
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-10">
          <motion.form
            className="relative overflow-hidden rounded-3xl border border-border-light/80 bg-bg-white p-6 shadow-[0_30px_70px_-36px_rgba(0,51,102,0.35)] md:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="name">
                  {t.contact.labels.name}
                  <span className="ml-1 text-brand-orange">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="w-full rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                />
                {errors.name ? <p className="mt-2 text-xs text-brand-orange">{errors.name}</p> : null}
              </div>

              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="email">
                  {t.contact.labels.email}
                  <span className="ml-1 text-brand-orange">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                />
                {errors.email ? <p className="mt-2 text-xs text-brand-orange">{errors.email}</p> : null}
              </div>

              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="phone">
                  {t.contact.labels.phone}
                  <span className="ml-1 text-brand-orange">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="w-full rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                />
                {errors.phone ? <p className="mt-2 text-xs text-brand-orange">{errors.phone}</p> : null}
              </div>

              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="company">
                  {t.contact.labels.company}
                  <span className="ml-1 text-brand-orange">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  value={values.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  className="w-full rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                />
                {errors.company ? <p className="mt-2 text-xs text-brand-orange">{errors.company}</p> : null}
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="requirement">
                  {t.contact.labels.requirement}
                  <span className="ml-1 text-brand-orange">*</span>
                </label>
                <textarea
                  id="requirement"
                  value={values.requirement}
                  onChange={(event) => updateField("requirement", event.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-all duration-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                />
                {errors.requirement ? <p className="mt-2 text-xs text-brand-orange">{errors.requirement}</p> : null}
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                size="lg"
                className="h-14 w-full bg-brand-orange text-text-white shadow-[0_18px_35px_-18px_rgba(255,107,0,0.7)] hover:bg-[#e66000] active:bg-[#cc5500] md:w-auto md:min-w-[220px]"
              >
                {t.contact.submit}
              </Button>
            </div>
          </motion.form>

          <motion.aside
            className="rounded-3xl border border-border-light/80 bg-bg-white p-6 shadow-[0_30px_70px_-36px_rgba(0,51,102,0.35)] md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <h2 className="text-2xl font-semibold text-text-heading">{t.contact.infoTitle}</h2>
            <div className="mt-6 space-y-4 text-sm text-text-body">
              <p className="flex items-start gap-3 rounded-2xl border border-border-light/70 bg-bg-gray px-4 py-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/12 text-brand-blue">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M12 21s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12Zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>{t.contact.info.address}</span>
              </p>
              <p className="flex items-start gap-3 rounded-2xl border border-border-light/70 bg-bg-gray px-4 py-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/12 text-brand-blue">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M6.6 3h3.6L12 7.4l-2.3 2.2a15.1 15.1 0 0 0 4.7 4.7L16.6 12 21 13.8v3.6A2.6 2.6 0 0 1 18.4 20 15.4 15.4 0 0 1 4 5.6 2.6 2.6 0 0 1 6.6 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>{t.contact.info.phone}</span>
              </p>
              <p className="flex items-start gap-3 rounded-2xl border border-border-light/70 bg-bg-gray px-4 py-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/12 text-brand-blue">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M3 6.8A2.8 2.8 0 0 1 5.8 4h12.4A2.8 2.8 0 0 1 21 6.8v10.4a2.8 2.8 0 0 1-2.8 2.8H5.8A2.8 2.8 0 0 1 3 17.2V6.8Zm2.7.2 6.3 4.9 6.3-4.9H5.7Zm12.5 10.2V8.9l-5.3 4.1a1.5 1.5 0 0 1-1.8 0L5.8 8.9v8.3h12.4Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>{t.contact.info.email}</span>
              </p>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-brand-blue/20 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan p-8 text-center text-text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-12 left-6 h-28 w-28 rounded-full bg-brand-orange/25 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(255,255,255,0.35),transparent_36%),radial-gradient(circle_at_18%_82%,rgba(0,51,102,0.35),transparent_48%)]" />
              <div className="pointer-events-none absolute left-8 right-8 top-[52%] h-px bg-white/35" />
              <div className="pointer-events-none absolute bottom-8 left-[45%] top-8 w-px bg-white/30" />
              <div className="relative flex flex-col items-center gap-3">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-white/15 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M12 21s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12Zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-white/80" aria-hidden="true" />
                <p className="text-sm font-medium text-white/90">{t.contact.placeholders.map}</p>
                <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                  {mapSoonText}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-heading">{t.contact.socialTitle}</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full border border-border-default px-4 py-2 text-sm text-text-body transition-all duration-200 hover:border-brand-blue hover:bg-brand-blue hover:text-text-white"
                >
                  WeChat
                </a>
                <a
                  href="#"
                  className="rounded-full border border-border-default px-4 py-2 text-sm text-text-body transition-all duration-200 hover:border-brand-blue hover:bg-brand-blue hover:text-text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="rounded-full border border-border-default px-4 py-2 text-sm text-text-body transition-all duration-200 hover:border-brand-blue hover:bg-brand-blue hover:text-text-white"
                >
                  Xiaohongshu
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </Section>
  );
}
