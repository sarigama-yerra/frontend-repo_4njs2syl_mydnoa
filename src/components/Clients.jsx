import { Star } from 'lucide-react'

export default function Clients() {
  const logos = [
    'AURORA', 'NOVA', 'KINETIC', 'SPECTRA', 'ORBIT', 'LUMINA'
  ]

  return (
    <section id="clients" className="relative py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-600">Trusted by creators and brands</p>
          <div className="hidden sm:flex items-center gap-1 text-amber-500"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-6 text-slate-400 text-sm tracking-widest">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
