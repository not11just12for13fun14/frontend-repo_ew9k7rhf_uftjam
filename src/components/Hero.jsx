import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-8 md:pt-16 pb-16 md:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-slate-900/0 to-slate-900/60 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-blue-100 text-xs mb-5">
            <span className="size-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Introducing Glassmorphic Fintech UI
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            The modern way to manage your money
          </h1>
          <p className="mt-5 text-blue-100/80 text-lg leading-relaxed">
            A minimalist, 3D-enhanced experience with real‑time insights,
            instant transfers, and premium security — beautifully designed for
            the next generation of finance.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-blue-50 transition font-medium shadow-sm">
              Get your card
            </button>
            <button className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition">
              View pricing
            </button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-blue-200/80">
            <div className="text-sm"><span className="text-white font-semibold">No fees</span> on basic plan</div>
            <div className="text-sm"><span className="text-white font-semibold">2% back</span> on purchases</div>
            <div className="text-sm"><span className="text-white font-semibold">FDIC‑insured</span> accounts</div>
          </div>
        </div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px] sm:h-[520px] md:h-[600px] lg:h-[640px]"
        >
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-cyan-300/15 via-blue-500/10 to-fuchsia-400/10 blur-2xl pointer-events-none" />
          <div className="absolute inset-0 rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.25)]" />
          <div className="absolute inset-0 rounded-[24px] overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
