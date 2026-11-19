import { Construction } from "lucide-react";
import { EmptyState, PageHeading } from "./AdminPrimitives";

export function AdminPlaceholder({ title, description }: { title: string; description: string }) { return <><PageHeading eyebrow="Admin Studio" title={title} description={description} /><EmptyState title="Coming in a future phase" description="The shared layout is ready. This area currently contains no connected business functionality." /><div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted"><Construction size={14} /> Demo shell only · Authentication is not configured</div></>; }
