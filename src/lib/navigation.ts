import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Clock3,
  Compass,
  Headphones,
  House,
  Library,
  Search,
  Settings2,
  UsersRound,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/dashboard", icon: House },
  { label: "Discover", href: "/discover", icon: Compass },
  { label: "Search", href: "/search", icon: Search },
];

export const communityNavigation: readonly NavigationItem[] = [
  { label: "My Library", href: "/library", icon: Library },
  { label: "Listening Rooms", href: "/rooms", icon: Headphones },
  { label: "Friends", href: "/friends", icon: UsersRound },
  { label: "Activity", href: "/activity", icon: Activity },
  { label: "Recently Played", href: "/history", icon: Clock3 },
];

export const settingsNavigation: readonly NavigationItem[] = [
  { label: "Settings", href: "/settings", icon: Settings2 },
];

export const mobileNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/dashboard", icon: House },
  { label: "Search", href: "/search", icon: Search },
  { label: "Rooms", href: "/rooms", icon: Headphones },
  { label: "Library", href: "/library", icon: Library },
];

export function getPageTitle(pathname: string): string {
  const allItems = [...primaryNavigation, ...communityNavigation, ...settingsNavigation];
  const matchedItem = allItems.find((item) => item.href === pathname);

  if (matchedItem) {
    return matchedItem.label;
  }

  if (pathname.startsWith("/settings/integrations")) {
    return "Integrations";
  }

  if (pathname.startsWith("/room/create")) {
    return "Create a room";
  }

  if (pathname.startsWith("/room/")) {
    return "Listening room";
  }

  if (pathname.startsWith("/profile/")) {
    return "Profile";
  }

  return "Your listening space";
}
