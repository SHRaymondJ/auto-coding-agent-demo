import Link from "next/link";

import { Container } from "./Container";

const quickLinks = [
  { label: "首页", href: "/" },
  { label: "服务方案", href: "/services" },
  { label: "成功案例", href: "/cases" },
  { label: "品牌洞察", href: "/insights" },
  { label: "关于我们", href: "/about" },
];

const socialLinks = ["WeChat", "LinkedIn", "Instagram", "Facebook"];

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-bg-light py-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold tracking-tight text-brand-navy">Spring FES</p>
            <p className="mt-4 text-sm leading-relaxed text-text-body">以全球视野与本土执行，成为中国品牌出海增长的长期伙伴。</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-heading">快速导航</p>
            <div className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-text-body transition-colors hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-heading">联系我们</p>
            <div className="mt-4 space-y-2 text-sm text-text-body">
              <p>电话：+86 400-888-8888</p>
              <p>邮箱：hello@springfes.com</p>
              <p>地址：深圳市南山区科技园南区 18 号</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-heading">社交媒体</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {socialLinks.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center justify-center rounded-lg border border-border-default bg-bg-white px-3 py-2 text-xs font-medium text-text-body"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border-light pt-6 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Spring FES. All rights reserved. 粤 ICP 备 00000000 号-0</p>
        </div>
      </Container>
    </footer>
  );
}
