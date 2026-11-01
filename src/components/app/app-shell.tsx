"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "@/components/app/mobile-navigation";
import { PlayerDock } from "@/components/app/player-dock";
import { QueuePanel } from "@/components/app/queue-panel";
import { Sidebar } from "@/components/app/sidebar";
import { TopBar } from "@/components/app/top-bar";
import { useUiStore } from "@/store/ui-store";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const mobileNavigationOpen = useUiStore((state) => state.mobileNavigationOpen);
  const setMobileNavigationOpen = useUiStore((state) => state.setMobileNavigationOpen);

  useEffect(() => {
    setMobileNavigationOpen(false);
  }, [pathname, setMobileNavigationOpen]);

  useEffect(() => {
    if (!mobileNavigationOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileNavigationOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileNavigationOpen, setMobileNavigationOpen]);

  return (
    <div className="app-frame">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar />
      {mobileNavigationOpen ? (
        <button
          className="mobile-sidebar-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMobileNavigationOpen(false)}
        />
      ) : null}
      <div className="app-main-column">
        <TopBar />
        <div className="app-content-scroll">
          <div className="preview-banner" role="note">
            <span className="preview-banner-dot" aria-hidden="true" />
            <span><strong>Interface preview</strong> — sample catalog only. Accounts, playback, rooms and integrations are not connected.</span>
          </div>
          <main className="app-main-content" id="main-content">
            {children}
          </main>
        </div>
      </div>
      <MobileNavigation />
      <PlayerDock />
      <QueuePanel />
    </div>
  );
}
