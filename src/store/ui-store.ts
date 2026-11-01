"use client";

import { create } from "zustand";

type UiState = {
  sidebarCollapsed: boolean;
  mobileNavigationOpen: boolean;
  queueOpen: boolean;
  toggleSidebar: () => void;
  setMobileNavigationOpen: (open: boolean) => void;
  setQueueOpen: (open: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  sidebarCollapsed: false,
  mobileNavigationOpen: false,
  queueOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setMobileNavigationOpen: (open) => set({ mobileNavigationOpen: open }),
  setQueueOpen: (open) => set({ queueOpen: open }),
}));
