import { Shield, Zap, Globe, Smartphone, BarChart3, Sparkles } from "lucide-react";

const features = [
  { icon: Shield, title: "Bank‑grade security", desc: "End‑to‑end encryption, biometric login, and real‑time fraud monitoring keep your funds safe." },
  { icon: Zap, title: "Instant transfers", desc: "Send and receive money across borders in seconds with ultra‑low fees and live rates." },
  { icon: BarChart3, title: "Smart insights", desc: "Automatic categorization and weekly reports help you understand and optimize spending." },
  { icon: Smartphone, title: "Everywhere you are", desc: "Beautiful apps across web, iOS and Android — your money, always within reach." },
  { icon: Globe, title: "Global by default", desc: "Multi‑currency accounts with seamless conversion and powerful international support." },
  { icon: Sparkles, title: "Rewards that delight", desc: "Earn cashback, perks and exclusive benefits with every purchase." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">All the tools you need</h2>
          <p className="mt-3 text-blue-100/80">Everything designed for clarity, speed and security — wrapped in a clean, modern interface.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:bg-white/[0.06] transition">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-300/0 via-blue-500/0 to-fuchsia-400/0 group-hover:from-cyan-300/20 group-hover:via-blue-500/10 group-hover:to-fuchsia-400/10 transition pointer-events-none" />
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow-lg shadow-blue-500/30 flex items-center justify-center">
                <Icon className="size-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-1.5 text-sm text-blue-100/80 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
