"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { communityNavigation, primaryNavigation, settingsNavigation } from "@/lib/navigation";
import { useUiStore } from "@/store/ui-store";

function isCurrentRoute(pathname: string, href: string): boolean {
  return pathname === href || (href !== "/dashboard" && pathname.startsWith(href + "/"));
}

export function Sidebar() {
  const pathname = usePathname();
  const collapsed = useUiStore((state) => state.sidebarCollapsed);
  const mobileOpen = useUiStore((state) => state.mobileNavigationOpen);
  const toggleSidebar = useUiStore((state) => state.toggleSidebar);
  const setMobileNavigationOpen = useUiStore((state) => state.setMobileNavigationOpen);

  return (
    <aside
      className={
        "sidebar" +
        (collapsed ? " sidebar--collapsed" : "") +
        (mobileOpen ? " sidebar--mobile-open" : "")
      }
      aria-label="Application navigation"
    >
      <div className="sidebar-top">
        <Link className="sidebar-brand" href="/" aria-label="LOKI home">
          <BrandMark compact={collapsed} />
        </Link>
        <button
          className="icon-button sidebar-collapse"
          type="button"
          onClick={toggleSidebar}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </div>

      <nav className="sidebar-nav" aria-label="Primary">
        <p className="sidebar-caption">Your space</p>
        {primaryNavigation.map((item) => {
          const active = isCurrentRoute(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              className={"nav-link" + (active ? " nav-link--active" : "")}
              href={item.href}
              aria-current={active ? "page" : undefined}
              aria-label={collapsed ? item.label : undefined}
              title={collapsed ? item.label : undefined}
              onClick={() => setMobileNavigationOpen(false)}
            >
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              <span className="nav-link-label">{item.label}</span>
              {active ? <span className="nav-active-mark" aria-hidden="true" /> : null}
            </Link>
          );
        })}

        <p className="sidebar-caption sidebar-caption--spaced">Together</p>
        {communityNavigation.map((item) => {
          const active = isCurrentRoute(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              className={"nav-link" + (active ? " nav-link--active" : "")}
              href={item.href}
              aria-current={active ? "page" : undefined}
              aria-label={collapsed ? item.label : undefined}
              title={collapsed ? item.label : undefined}
              onClick={() => setMobileNavigationOpen(false)}
            >
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              <span className="nav-link-label">{item.label}</span>
              {active ? <span className="nav-active-mark" aria-hidden="true" /> : null}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        {settingsNavigation.map((item) => {
          const active = isCurrentRoute(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              className={"nav-link" + (active ? " nav-link--active" : "")}
              href={item.href}
              aria-current={active ? "page" : undefined}
              aria-label={collapsed ? item.label : undefined}
              title={collapsed ? item.label : undefined}
              onClick={() => setMobileNavigationOpen(false)}
            >
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              <span className="nav-link-label">{item.label}</span>
            </Link>
          );
        })}
        <div className="sidebar-account">
          <span className="account-avatar" aria-hidden="true">G</span>
          <span className="account-details">
            <strong>Guest preview</strong>
            <span><i className="status-dot" /> Last.fm not connected</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
