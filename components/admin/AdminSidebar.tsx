"use client";

import Link from "next/link";
import { Crown, Heart, Menu, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { adminNavItems } from "./admin-data";

export function AdminSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  return (
    <>
      {open && <button aria-label="Close navigation" className="fixed inset-0 z-30 bg-ink/20 lg:hidden" onClick={onClose} />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-border bg-white transition-transform duration-200 lg:sticky lg:top-0 lg:z-20 lg:h-screen lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-20 items-center justify-between border-b border-border px-7">
          <Link href="/admin" className="flex items-center gap-3" onClick={onClose}>
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-light-purple text-primary"><Sparkles size={22} /></span>
            <span><span className="block text-lg font-bold tracking-tight">InviteStudio</span><span className="block text-xs text-muted">by AstroCodeMir</span></span>
          </Link>
          <button className="rounded-lg p-2 text-muted hover:bg-canvas lg:hidden" onClick={onClose} aria-label="Close navigation"><X size={20} /></button>
        </div>
        <nav className="flex-1 space-y-1 px-4 py-6" aria-label="Admin navigation">
          {adminNavItems.map(({ label, href, icon: Icon, badge }) => {
            const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={href} onClick={onClose} className={`flex min-h-11 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-colors ${active ? "bg-light-purple text-primary" : "text-ink hover:bg-canvas"}`}><Icon size={19} strokeWidth={active ? 2.4 : 2} /><span className="flex-1">{label}</span>{badge && <span className="rounded-full bg-light-purple px-2 py-0.5 text-xs font-semibold text-primary">{badge}</span>}</Link>;
          })}
        </nav>
        <div className="m-4 rounded-2xl bg-gradient-to-br from-light-purple to-pink-100 p-5 text-center"><Crown className="mx-auto mb-2 text-primary" size={25} /><p className="font-semibold">Create Custom Invitations</p><p className="mt-1 text-xs text-muted">Birthday · Baptism · Wedding and more!</p></div>
        <div className="px-6 pb-5 text-center text-xs text-muted"><Heart className="mr-1 inline fill-pink-200 text-pink-400" size={12} /> Made with care</div>
      </aside>
    </>
  );
}

export function MobileMenuButton({ onClick }: { onClick: () => void }) { return <button onClick={onClick} className="rounded-xl p-2 text-muted hover:bg-canvas lg:hidden" aria-label="Open navigation"><Menu size={22} /></button>; }
