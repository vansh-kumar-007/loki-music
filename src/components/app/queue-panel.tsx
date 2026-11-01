"use client";

import { useEffect, useRef } from "react";
import { ListMusic, X } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";
import { useUiStore } from "@/store/ui-store";

export function QueuePanel() {
  const isOpen = useUiStore((state) => state.queueOpen);
  const setQueueOpen = useUiStore((state) => state.setQueueOpen);
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setQueueOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const candidates = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not(:disabled), a[href], input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex]:not([tabindex="-1"])',
      );
      const focusable = candidates ? Array.from(candidates) : [];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        event.preventDefault();
        panelRef.current?.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (previousFocus?.isConnected) {
        previousFocus.focus();
      }
    };
  }, [isOpen, setQueueOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="queue-layer">
      <button
        className="queue-backdrop"
        type="button"
        aria-label="Close queue panel"
        onClick={() => setQueueOpen(false)}
      />
      <section
        className="queue-panel"
        id="queue-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="queue-title"
        ref={panelRef}
        tabIndex={-1}
      >
        <div className="queue-panel-heading">
          <div>
            <p className="eyebrow">YOUR LISTENING SESSION</p>
            <h2 id="queue-title">The queue</h2>
          </div>
          <button ref={closeButtonRef} className="icon-button" type="button" onClick={() => setQueueOpen(false)} aria-label="Close queue">
            <X size={18} />
          </button>
        </div>
        <EmptyState
          icon={ListMusic}
          eyebrow="Nothing queued"
          title="Your next track goes here"
          description="A shared queue will be available when a playback provider and room controls are connected."
        />
      </section>
    </div>
  );
}
