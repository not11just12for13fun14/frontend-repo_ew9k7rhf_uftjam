import { Menu, X, CreditCard, Shield, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300 ring-1 ring-white/20 shadow-lg shadow-blue-500/30 flex items-center justify-center">
            <Sparkles className="size-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Glasso</p>
            <p className="text-[11px] text-blue-200/70 -mt-1">Fintech UI Kit</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-100/80 hover:text-white transition">Features</a>
          <a href="#security" className="text-blue-100/80 hover:text-white transition">Security</a>
          <a href="#pricing" className="text-blue-100/80 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-blue-100/80 hover:text-white transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm rounded-xl text-blue-100 hover:text-white transition">Sign in</button>
          <button className="px-4 py-2 text-sm rounded-xl bg-white text-slate-900 hover:bg-blue-50 transition inline-flex items-center gap-2">
            <CreditCard className="size-4" /> Get Card
          </button>
        </div>

        <button className="md:hidden text-blue-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
          <div className="p-4 space-y-2">
            <a href="#features" className="block px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/5">Features</a>
            <a href="#security" className="block px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/5">Security</a>
            <a href="#pricing" className="block px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/5">Pricing</a>
            <a href="#faq" className="block px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/5">FAQ</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 text-sm rounded-xl text-blue-100 hover:text-white transition">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm rounded-xl bg-white text-slate-900 hover:bg-blue-50 transition inline-flex items-center gap-2 justify-center">
                <Shield className="size-4" /> Get Card
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
