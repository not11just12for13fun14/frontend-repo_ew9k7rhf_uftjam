import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Global background aesthetics */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_90%_20%,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_100%,rgba(6,182,212,0.12),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none" style={{maskImage:'linear-gradient(to bottom, black 60%, transparent)'}}>
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <CTA />

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-100/70 text-sm">Made for modern finance • Glassmorphic + 3D</p>
            <div className="flex items-center gap-4 text-sm">
              <a className="text-blue-100/70 hover:text-white transition" href="#">Privacy</a>
              <a className="text-blue-100/70 hover:text-white transition" href="#">Terms</a>
              <a className="text-blue-100/70 hover:text-white transition" href="#">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
