import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CategoriesStrip from './components/CategoriesStrip'
import PopularListings from './components/PopularListings'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesStrip />
        <PopularListings />
      </main>
      <footer className="mt-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} CampusStay. Built for students.</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-800 transition">Privacy</a>
            <a href="#" className="hover:text-slate-800 transition">Terms</a>
            <a href="#" className="hover:text-slate-800 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
