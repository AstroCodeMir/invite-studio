import type { DesignCategory, DesignType, InvitationDesign, InvitationStatus } from "@/types";

const STORAGE_KEY = "invite-studio-designs";
const seed: InvitationDesign[] = [
  { id: "design-princess", title: "Princess Birthday", slug: "princess-birthday", category: "Birthday", description: "A whimsical digital invitation for a magical first birthday celebration.", previewImage: "/images/design-references/admin/admin-dashboard.png", galleryImages: [], regularPrice: 950, designType: "ready-made", status: "published", isFeatured: true, createdAt: "2026-01-10", updatedAt: "2026-02-15" },
  { id: "design-baptism", title: "Baptism Classic", slug: "baptism-classic", category: "Baptism", description: "A gentle, elegant invitation for a meaningful baptism celebration.", previewImage: "/images/design-references/admin/admin-design-gallery.png", galleryImages: [], regularPrice: 750, salePrice: 650, designType: "customizable", status: "published", isFeatured: true, createdAt: "2026-01-12", updatedAt: "2026-02-18" },
  { id: "design-wedding", title: "Minimalist Wedding", slug: "minimalist-wedding", category: "Wedding", description: "A refined invitation with a clean, modern romantic feel.", previewImage: "/images/design-references/admin/admin-orders.png", galleryImages: [], regularPrice: 1250, designType: "customizable", status: "published", isFeatured: false, createdAt: "2026-01-20", updatedAt: "2026-02-20" },
  { id: "design-space", title: "Space Adventure", slug: "space-adventure", category: "Birthday", description: "An adventurous invitation for little explorers and starry celebrations.", previewImage: "/images/design-references/admin/admin-custom-requests.png", galleryImages: [], regularPrice: 850, designType: "ready-made", status: "draft", isFeatured: false, createdAt: "2026-02-24", updatedAt: "2026-02-24" },
];

export const designRepository = {
  load(): InvitationDesign[] { if (typeof window === "undefined") return seed; try { const raw = window.localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) as InvitationDesign[] : seed; } catch { return seed; } },
  save(designs: InvitationDesign[]) { try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(designs)); } catch { /* Local persistence is best effort. */ } },
  create(input: DesignInput): InvitationDesign { const now = new Date().toISOString(); return { ...input, id: `design-${Date.now()}`, createdAt: now, updatedAt: now }; },
};

export type DesignInput = Omit<InvitationDesign, "id" | "createdAt" | "updatedAt">;
export const emptyDesign = (): DesignInput => ({ title: "", slug: "", category: "Other", description: "", previewImage: "", galleryImages: [], regularPrice: 0, designType: "ready-made", status: "draft", isFeatured: false });
export function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
export function effectivePrice(design: InvitationDesign) { return design.salePrice && design.salePrice < design.regularPrice ? design.salePrice : design.regularPrice; }
export type { DesignCategory, DesignType, InvitationStatus };
