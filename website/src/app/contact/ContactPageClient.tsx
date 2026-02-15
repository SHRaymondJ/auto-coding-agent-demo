"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  requirement: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

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
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      alert("感谢提交，我们会尽快与您联系！");
      setValues(initialValues);
    }
  }

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
          联系我们
        </motion.h1>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.form
            className="rounded-3xl border border-border-light bg-bg-white p-6 md:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="name">
                  姓名
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="w-full rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-brand-blue"
                />
                {errors.name ? <p className="mt-2 text-xs text-brand-orange">{errors.name}</p> : null}
              </div>

              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="email">
                  邮箱
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-brand-blue"
                />
                {errors.email ? <p className="mt-2 text-xs text-brand-orange">{errors.email}</p> : null}
              </div>

              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="phone">
                  电话
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="w-full rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-brand-blue"
                />
                {errors.phone ? <p className="mt-2 text-xs text-brand-orange">{errors.phone}</p> : null}
              </div>

              <div className="md:col-span-1">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="company">
                  公司名称
                </label>
                <input
                  id="company"
                  type="text"
                  value={values.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  className="w-full rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-brand-blue"
                />
                {errors.company ? <p className="mt-2 text-xs text-brand-orange">{errors.company}</p> : null}
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-text-heading" htmlFor="requirement">
                  需求描述
                </label>
                <textarea
                  id="requirement"
                  value={values.requirement}
                  onChange={(event) => updateField("requirement", event.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border-default bg-bg-white px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-brand-blue"
                />
                {errors.requirement ? <p className="mt-2 text-xs text-brand-orange">{errors.requirement}</p> : null}
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" size="lg">
                提交咨询
              </Button>
            </div>
          </motion.form>

          <motion.aside
            className="rounded-3xl border border-border-light bg-bg-white p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <h2 className="text-2xl font-semibold text-text-heading">联系信息</h2>
            <div className="mt-6 space-y-4 text-sm text-text-body">
              <p>地址：深圳市南山区科技园南区创新大厦 18F</p>
              <p>电话：+86 400-888-2026</p>
              <p>邮箱：hello@springfes.com</p>
            </div>

            <div className="mt-8 rounded-2xl border border-border-light bg-bg-gray p-8 text-center text-sm text-text-muted">
              地图占位区域（Map Placeholder）
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-heading">社交媒体</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="#" className="rounded-full border border-border-default px-4 py-2 text-sm text-text-body transition-colors hover:text-brand-blue">
                  WeChat
                </a>
                <a href="#" className="rounded-full border border-border-default px-4 py-2 text-sm text-text-body transition-colors hover:text-brand-blue">
                  LinkedIn
                </a>
                <a href="#" className="rounded-full border border-border-default px-4 py-2 text-sm text-text-body transition-colors hover:text-brand-blue">
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
