import type { LucideIcon } from "lucide-react";
import { BarChart3, Bell, BookOpen, Boxes, ClipboardList, FileHeart, Gauge, LayoutGrid, MessageCircle, Settings, ShoppingBag, Sparkles, Users } from "lucide-react";

export type AdminNavItem = { label: string; href: string; icon: LucideIcon; badge?: string };

export const adminNavItems: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", icon: Gauge },
  { label: "Design Gallery", href: "/admin/designs", icon: LayoutGrid },
  { label: "Custom Requests", href: "/admin/requests", icon: ClipboardList, badge: "3" },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Messages", href: "/admin/messages", icon: MessageCircle, badge: "5" },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export const dashboardMetrics = [
  { label: "Total Revenue", value: "₱42,850", change: "+12.8%", tone: "purple", icon: Sparkles },
  { label: "Total Orders", value: "128", change: "+8.2%", tone: "pink", icon: ShoppingBag },
  { label: "Custom Requests", value: "18", change: "3 new", tone: "blue", icon: FileHeart },
  { label: "Total Customers", value: "246", change: "+14.4%", tone: "green", icon: Users },
] as const;

export const recentOrders = [
  { id: "#INV-1048", customer: "Mia Santos", design: "Princess Birthday", status: "Paid", amount: "₱950" },
  { id: "#INV-1047", customer: "Daniel Cruz", design: "Minimalist Wedding", status: "Pending", amount: "₱1,250" },
  { id: "#INV-1046", customer: "Ava Reyes", design: "Baptism Classic", status: "Delivered", amount: "₱750" },
];

export const recentRequests = [
  { name: "Sofia Garcia", event: "First Birthday", received: "10 min ago", status: "New" },
  { name: "Liam Tan", event: "Wedding", received: "2 hours ago", status: "Reviewing" },
  { name: "Ella Lim", event: "Baby Shower", received: "Yesterday", status: "Quoted" },
];

export const recentActivity = [
  { icon: ShoppingBag, title: "New order received", detail: "Mia Santos placed an order", time: "10 min ago", color: "purple" },
  { icon: MessageCircle, title: "New message", detail: "Sofia Garcia sent a message", time: "42 min ago", color: "pink" },
  { icon: Boxes, title: "Design published", detail: "Garden Celebration is now live", time: "Yesterday", color: "green" },
];

export const quickActions = ["Add New Design", "View Requests", "Manage Orders", "Reply to Messages"];

export const referenceHints = { BookOpen, Bell };
