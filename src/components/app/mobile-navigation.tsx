"use client";

import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { mobileNavigation } from "@/lib/navigation";
import { useUiStore } from "@/store/ui-store";
import { usePathname } from "next/navigation";

export function MobileNavigation() {
  const pathname = usePathname();
  const setMobileNavigationOpen = useUiStore((state) => state.setMobileNavigationOpen);

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {mobileNavigation.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            className={"mobile-nav-link" + (active ? " mobile-nav-link--active" : "")}
            href={item.href}
            aria-current={active ? "page" : undefined}
          >
            <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
      <button className="mobile-nav-link" type="button" onClick={() => setMobileNavigationOpen(true)}>
        <MoreHorizontal size={19} strokeWidth={1.8} aria-hidden="true" />
        <span>More</span>
      </button>
    </nav>
  );
}
