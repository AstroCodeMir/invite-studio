"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { MobileMenuButton } from "./AdminSidebar";

export function AdminHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return <header className="sticky top-0 z-10 flex h-20 items-center gap-4 border-b border-border bg-white/95 px-4 backdrop-blur sm:px-8"><MobileMenuButton onClick={onMenuClick} /><div className="min-w-0 flex-1"><p className="hidden text-lg font-semibold sm:block">Dashboard</p></div><label className="hidden max-w-xl flex-1 items-center gap-3 rounded-full border border-border bg-canvas px-4 py-2.5 text-muted md:flex"><Search size={18} /><input aria-label="Search designs, requests, or customers" className="w-full bg-transparent text-sm outline-none placeholder:text-muted" placeholder="Search designs, requests, or customers..." /></label><button aria-label="Notifications" className="relative rounded-xl p-2.5 text-ink hover:bg-canvas"><Bell size={21} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-pink-400" /></button><div className="hidden h-8 w-px bg-border sm:block" /><button className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-canvas" aria-label="Open profile menu"><span className="grid h-9 w-9 place-items-center rounded-full bg-purple-200 font-semibold text-primary">F</span><span className="hidden text-left sm:block"><span className="block text-sm font-semibold">Francine</span><span className="block text-xs text-muted">Admin</span></span><ChevronDown className="hidden text-muted sm:block" size={16} /></button></header>;
}
