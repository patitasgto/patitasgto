import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-purple-950 text-slate-300 pt-16 pb-8 border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        
        {/* BRAND COLUMN */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white rounded-full p-1">
              <Image 
                src="/logo.png" 
                alt="PatitasGTO" 
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="text-white text-xl font-black tracking-wider">PATITAS <span className="text-emerald-400">GTO</span></span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm">
            La plataforma definitiva para dueños de mascotas en Guanajuato. Conectando amor local con soluciones modernas de e-commerce y cuidado animal.
          </p>
          <div className="flex gap-4 pt-2">
            {/* Social Icons */}
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition text-lg">🇲🇽</a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition font-bold text-sm">FB</a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition font-bold text-sm">IG</a>
          </div>
        </div>

        {/* VERTICAL 1: SHOP */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 border-l-2 border-purple-500 pl-2">La Tiendita</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/shop?category=pod" className="hover:text-emerald-400 transition">👕 Diseños Exclusivos (POD)</Link></li>
            <li><Link href="/shop?category=local" className="hover:text-emerald-400 transition">🌿 Premios Locales GTO</Link></li>
            <li><Link href="/shop?category=dropship" className="hover:text-emerald-400 transition">📦 Accesorios de Viaje</Link></li>
            <li><Link href="/shop?category=mercadolibre" className="hover:text-emerald-400 transition">💛 Favoritos Mercado Libre</Link></li>
          </ul>
        </div>

        {/* VERTICAL 2: SERVICES */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 border-l-2 border-teal-500 pl-2">Servicios GTO</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services/walking" className="hover:text-teal-400 transition">🦮 Paseos Programados</Link></li>
            <li><Link href="/services/sitting" className="hover:text-teal-400 transition">🏡 Cuidado en Casa</Link></li>
            <li><Link href="/services/poop" className="hover:text-teal-400 transition">💩 Recolección de Desechos</Link></li>
            <li><Link href="/services/subscriptions" className="hover:text-teal-400 transition">🎟️ Club Patitas (Suscripción)</Link></li>
          </ul>
        </div>

        {/* VERTICAL 3: RESOURCES */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-2">Comunidad</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/directory" className="hover:text-emerald-400 transition">🩺 Directorio Vet 24/7</Link></li>
            <li><Link href="/community/lost-and-found" className="hover:text-emerald-400 transition">🚨 Alerta de Extraviados</Link></li>
            <li><Link href="/tutorials" className="hover:text-emerald-400 transition">🎓 Clases de Entrenamiento</Link></li>
            <li><Link href="/blog" className="hover:text-emerald-400 transition">📰 Tips de Nutrición</Link></li>
          </ul>
        </div>

      </div>

      {/* FOOTER BAR */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} PatitasGTO. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1">
          Hecho con 🐾 y mucha pasión en <span className="text-slate-400 font-semibold">Guanajuato, GTO</span>
        </p>
        <div className="flex gap-4">
          <Link href="/legal/privacy" className="hover:underline">Privacidad</Link>
          <Link href="/legal/terms" className="hover:underline">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  );
}