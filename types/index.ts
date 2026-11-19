export type InvitationStatus = "draft" | "published" | "archived";

export type InvitationDesign = {
  id: string;
  title: string;
  status: InvitationStatus;
};
