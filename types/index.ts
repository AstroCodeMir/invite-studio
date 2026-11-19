export type InvitationStatus = "draft" | "published" | "archived";
export type DesignType = "ready-made" | "customizable";
export type DesignCategory = "Wedding" | "Birthday" | "Baptism" | "Christening" | "Debut" | "Anniversary" | "Baby Shower" | "Bridal Shower" | "Graduation" | "Other";

export const DESIGN_CATEGORIES: DesignCategory[] = ["Wedding", "Birthday", "Baptism", "Christening", "Debut", "Anniversary", "Baby Shower", "Bridal Shower", "Graduation", "Other"];

export type InvitationDesign = {
  id: string;
  title: string;
  slug: string;
  category: DesignCategory;
  description: string;
  previewImage: string;
  galleryImages: string[];
  regularPrice: number;
  salePrice?: number;
  designType: DesignType;
  status: InvitationStatus;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};
