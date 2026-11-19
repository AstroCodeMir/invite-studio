import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas px-6 py-16 text-ink sm:px-10">
      <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-light-purple px-4 py-2 text-sm font-medium text-primary">
            <Sparkles size={16} aria-hidden="true" /> InviteStudio foundation
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Beautiful invitations, thoughtfully managed.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">The application foundation is ready for the Admin Studio and public customer experience.</p>
          <Link href="/admin" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white shadow-soft">Open Admin Studio <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
