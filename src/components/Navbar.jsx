import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Product", href: "#product" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Clients", href: "#clients" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white font-semibold">V</div>
            <span className="text-xl font-semibold tracking-tight">Vibeit</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[15px] text-slate-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black transition-colors">
              Get started
            </a>
          </nav>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block rounded-lg bg-slate-900 px-3 py-2 text-white text-center">
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
