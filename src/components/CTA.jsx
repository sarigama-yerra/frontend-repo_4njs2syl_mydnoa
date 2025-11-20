export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_10%,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-10 sm:p-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s build your merch engine</h2>
            <p className="mt-3 text-lg text-slate-300">Tell us about your goals and we’ll propose the right setup, timeline, and commercial model.</p>
            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300/60 outline-none focus:ring-2 focus:ring-white/30" />
              <input required type="email" placeholder="Work email" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300/60 outline-none focus:ring-2 focus:ring-white/30" />
              <input placeholder="Company / brand" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300/60 outline-none focus:ring-2 focus:ring-white/30 sm:col-span-2" />
              <textarea rows={4} placeholder="What are you planning?" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300/60 outline-none focus:ring-2 focus:ring-white/30 sm:col-span-2" />
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center rounded-lg bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-100">Request a consultation</button>
                <p className="mt-3 text-sm text-slate-300/80">We’ll get back within 1 business day.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
