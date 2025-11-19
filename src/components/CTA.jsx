import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_40%,rgba(14,165,233,0.12),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/10 via-blue-500/10 to-fuchsia-400/10" />
          <div className="relative px-8 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Ready to elevate your finances?</h3>
              <p className="mt-2 text-blue-100/80">Join thousands switching to a faster, safer and more delightful money experience.</p>
            </div>
            <button className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-blue-50 transition font-medium">
              Create free account <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
