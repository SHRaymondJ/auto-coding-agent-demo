import { type ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { BackToTop } from "../ui/BackToTop";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-bg-white text-text-body">
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
