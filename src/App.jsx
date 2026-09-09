function App() {
  const navItems = ['Home', 'Features', 'Pricing', 'Contact']

  const features = [
    {
      icon: '⚡',
      title: 'Fast Performance',
      desc: 'Optimized for speed, smooth interactions, and a clean user experience.',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      desc: 'Looks great on mobile, tablet, and desktop with fluid layouts.',
    },
    {
      icon: '🚀',
      title: 'Modern Stack',
      desc: 'Built with React and Tailwind CSS for a professional front-end workflow.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 font-bold text-lg text-white shadow-lg shadow-blue-500/30">
              N
            </div>
            <span className="text-xl font-bold tracking-tight">Vario Studio</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm text-slate-300 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400">
            Get Started
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_40%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
                Build smarter digital experiences
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
                Turn ideas into <span className="text-blue-400">beautiful products</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                We help brands and startups launch stunning websites, products, and digital experiences that convert.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400">
                  Book a Call
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Learn More
                </button>
              </div>

              <div className="mt-10 flex items-center gap-8 text-sm text-slate-300">
                <div>
                  <div className="text-2xl font-bold text-white">8k+</div>
                  <div>Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div>Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div>Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
                <div className="rounded-2xl bg-slate-900 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-slate-400">dashboard.app</span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 p-4">
                      <p className="text-sm text-blue-50/80">Monthly Growth</p>
                      <div className="mt-2 flex items-end justify-between">
                        <span className="text-3xl font-black">+184%</span>
                        <span className="rounded-full bg-white/20 px-2 py-1 text-xs">+24.8%</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-slate-800 p-4">
                        <p className="text-sm text-slate-400">Revenue</p>
                        <p className="mt-2 text-2xl font-bold">$48.2K</p>
                      </div>
                      <div className="rounded-2xl bg-slate-800 p-4">
                        <p className="text-sm text-slate-400">Leads</p>
                        <p className="mt-2 text-2xl font-bold">1.3K</p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-800 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm text-slate-400">Performance</span>
                        <span className="text-sm text-emerald-400">Excellent</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Why choose us</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Built for growth and clarity</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl shadow-lg shadow-blue-500/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Ready to grow?</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Let’s build something amazing together.</h2>
            <button className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App