"use client";

import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";
import { getPageTitle } from "@/lib/navigation";
import { useUiStore } from "@/store/ui-store";
import { usePathname } from "next/navigation";

export function TopBar() {
  const pathname = usePathname();
  const setMobileNavigationOpen = useUiStore((state) => state.setMobileNavigationOpen);

  return (
    <header className="top-bar">
      <div className="top-bar-title">
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setMobileNavigationOpen(true)}
        >
          <Menu size={19} aria-hidden="true" />
        </button>
        <div>
          <p className="top-bar-kicker">LOKI / YOUR SPACE</p>
          <h1>{getPageTitle(pathname)}</h1>
        </div>
      </div>
      <div className="top-bar-actions">
        <Link className="top-search-link" href="/search">
          <Search size={16} aria-hidden="true" />
          <span>Search music</span>
          <kbd>/</kbd>
        </Link>
        <button
          className="icon-button notification-button"
          type="button"
          disabled
          aria-label="Notifications are not available in Phase 1"
          title="Notifications arrive in a later phase"
        >
          <Bell size={18} aria-hidden="true" />
        </button>
        <span className="top-avatar" aria-label="Guest preview profile">G</span>
      </div>
    </header>
  );
}
