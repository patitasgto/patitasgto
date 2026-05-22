'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, User, Search, Menu, X, Heart, MapPin, Bone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between gap-4">
        
        {/* 🐾 LOGO CONTAINER (Text removed, optimized size, sick animation injected) */}
        <Link href="/" className="flex items-center group shrink-0 relative select-none">
          <div className="relative w-28 h-24 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 filter group-hover:drop-shadow-[0_0_20px_rgba(14,165,233,0.35)]">
            {/* ⚠️ Pro-tip: If you saved your transparent version as a PNG, update the extension here to .png */}
            <Image 
              src="/cat and dog inside heart logo.png" 
              alt="PatitasGTO Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1 font-semibold text-slate-600">
          <Link href="/shop" className="px-4 py-2 rounded-full hover:bg-purple-50 hover:text-purple-600 transition flex items-center gap-1.5 group">
            <ShoppingBag className="w-4 h-4 group-hover:animate-bounce" />
            Tienda <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">¡Perrona!</span>
          </Link>
          
          <Link href="/services" className="px-4 py-2 rounded-full hover:bg-teal-50 hover:text-teal-600 transition flex items-center gap-1.5 group">
            <MapPin className="w-4 h-4 text-teal-500 group-hover:rotate-12 transition-transform" />
            Servicios Locales
          </Link>

          <Link href="/directory" className="px-4 py-2 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition flex items-center gap-1.5">
            <Bone className="w-4 h-4 text-emerald-500" />
            Directorio Vet
          </Link>

          <Link href="/tutorials" className="px-4 py-2 rounded-full hover:bg-amber-50 hover:text-amber-600 transition">
            Tutoriales & Tips
          </Link>

          <Link href="/community/lost-and-found" className="relative px-4 py-2 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition flex items-center gap-1.5">
            <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <Heart className="w-4 h-4 fill-rose-600" />
            Mascotas Perdidas
          </Link>
        </nav>

        {/* SEARCH BAR & ACTION BUTTONS */}
        <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 max-w-xs w-full group focus-within:ring-2 focus-within:ring-purple-500 transition">
          <Search className="w-4 h-4 text-slate-400 mr-2 group-focus-within:text-purple-600" />
          <input 
            type="text" 
            placeholder="Buscar premios, paseadores..." 
            className="bg-transparent text-sm w-full focus:outline-none text-slate-700"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* User Profile */}
          <Link href="/dashboard" className="p-2.5 rounded-full text-slate-600 hover:bg-slate-100 hover:text-purple-600 transition" title="Mi Cuenta">
            <User className="w-5 h-5" />
          </Link>
          
          {/* Dynamic Cart Status */}
          <Link href="/cart" className="p-2.5 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition shadow-sm flex items-center gap-1" title="Carrito">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-xs font-bold px-1.5 bg-purple-900/30 rounded-full">0</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 lg:hidden rounded-full text-slate-600 hover:bg-slate-100 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="bg-slate-100 rounded-full px-4 py-2.5 flex items-center mb-4">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input type="text" placeholder="¿Qué busca tu mejor amigo?" className="bg-transparent text-sm w-full focus:outline-none" />
          </div>
          <Link href="/shop" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-bold bg-purple-50 text-purple-700">🛒 Ir a la Tienda</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-semibold hover:bg-slate-50">🦮 Servicios en GTO</Link>
          <Link href="/directory" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-semibold hover:bg-slate-50">🩺 Directorio Veterinario</Link>
          <Link href="/tutorials" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-semibold hover:bg-slate-50">🦴 Guías de Entrenamiento</Link>
          <Link href="/community/lost-and-found" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-bold bg-rose-50 text-rose-600">🚨 Reportar Mascota Perdida</Link>
        </div>
      )}
    </header>
  );
}