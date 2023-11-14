import { NavigationItem } from "./types";

export const NavigationData: NavigationItem[] = [
  { name: "Dashboard", href: "/", current: false },
  { name: "Fixtures", href: "/fixtures", current: false },
  { name: "Login", href: "/login", current: false },
  { name: "Join", href: "/join", current: false },
];

// Function to get the href of a navigation item by its name
export function getNavigationItemByName(name: string): string | null {
  const item = NavigationData.find((item: NavigationItem) => item.name === name);
  return item ? item.href : null; // Return the href if found, otherwise null
}