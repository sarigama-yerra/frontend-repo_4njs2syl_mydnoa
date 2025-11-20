import { Store, WalletCards, Palette, Truck, Boxes, Rocket } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Store className="h-5 w-5" />, 
      title: 'Online shops, end-to-end',
      desc: 'From storefront to checkout, we set up modern, conversion-optimized shops tailored to your brand.'
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: 'Design & product development',
      desc: 'Collaborate on product design, materials, and packaging that align with your audience and values.'
    },
    {
      icon: <Boxes className="h-5 w-5" />,
      title: 'On-demand & batch production',
      desc: 'Flexible production models for drops, limited runs, or continuous inventory.'
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: 'Global fulfillment',
      desc: 'Worldwide shipping, warehousing, and returns operations handled for you.'
    },
    {
      icon: <WalletCards className="h-5 w-5" />,
      title: 'Payments & tax compliance',
      desc: 'Secure payments, VAT, and tax handling across regions — fully managed.'
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: 'Launch strategy & growth',
      desc: 'Go-to-market planning, drop calendars, and community engagement playbooks.'
    }
  ]

  return (
    <section id="product" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to ship merch right</h2>
          <p className="mt-3 text-lg text-slate-600">We combine infrastructure, creative support, and operations so you can focus on your brand and community.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
