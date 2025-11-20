import { CheckCircle2 } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      title: 'Discovery & planning',
      points: ['Goals & audience', 'Product lineup', 'Commercial model']
    },
    {
      title: 'Design & prototyping',
      points: ['Brand direction', 'Samples & sizing', 'Packaging concepts']
    },
    {
      title: 'Store setup',
      points: ['Theme & UX', 'Payments & tax', 'Analytics & CRM']
    },
    {
      title: 'Production & launch',
      points: ['Manufacturing', 'Fulfillment & shipping', 'Launch calendar']
    }
  ]

  return (
    <section id="process" className="relative py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">A clear, collaborative process</h2>
          <p className="mt-3 text-lg text-slate-600">From first call to first drop, we work alongside your team to make sure every detail hits the mark.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
