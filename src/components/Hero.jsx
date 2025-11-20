import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-14 sm:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Launch online merch shops that convert
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              Build, launch, and grow your brand's merch hub
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              Vibeit creates revenue-ready online stores and provides hands-on brand support services — from design and production to logistics and community drops.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium hover:bg-black transition-colors">Talk to our team</a>
              <a href="#product" className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 font-medium hover:bg-slate-50 transition-colors">See how it works</a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Quick setup • Flexible models • Global fulfillment</p>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
