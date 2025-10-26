import React from 'react'
import { Home, Building2, Users, LogIn } from 'lucide-react'

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Find Property', href: '#listings' },
    { label: 'List Property', href: '#list-your-property' },
    { label: 'Find Roommate', href: '#roommate' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-emerald-400 text-white shadow-sm">
            <Home size={18} />
          </span>
          <span className="text-lg tracking-tight">CampusStay</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-600 hover:text-slate-900 transition">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition">
            <LogIn size={16} /> Login
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 px-3 py-2 text-sm text-white shadow hover:opacity-95 active:opacity-90">
            <Building2 size={16} /> Sign up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
