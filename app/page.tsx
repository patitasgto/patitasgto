import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Calendar, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Bad Ass Split Layout with Glowing Dynamic Logo */}
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white py-16 px-4 md:py-24 lg:py-32 overflow-hidden">
        
        {/* SICK ANIMATION EFFECTS: Ambient background glow & floating particles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-[120px] opacity-20 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Sparkles (Matches the mockup dots) */}
        <div className="absolute top-12 right-12 w-2 h-2 bg-cyan-200 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-amber-200 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* LEFT SIDE: High-Converting Copy & Dual CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-amber-400 text-orange-950 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              ¡Hola, Guanajuato! 🐾
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
              Todo lo que tu <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-100">Milaneso</span> necesita, <br />
              en un solo lugar.
            </h1>
            
            <p className="text-lg md:text-xl text-orange-50 font-medium max-w-2xl mx-auto lg:mx-0">
              Servicios locales de confianza en GTO y una tienda curada con lo mejor para el rey de la casa.
            </p>
            
            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 max-w-md mx-auto lg:max-w-none">
              <Link 
                href="/services" 
                className="flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-orange-50 transition transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5 text-orange-500" />
                Reservar Servicio Local
              </Link>
              <Link 
                href="/shop" 
                className="flex items-center justify-center gap-2 bg-orange-950/30 backdrop-blur-md border-2 border-white/40 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-950/50 hover:border-white transition transform hover:-translate-y-1"
              >
                <ShoppingBag className="w-5 h-5" />
                Explorar la Tienda
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: The Giant Dynamic Centerpiece Logo */}
          <div className="lg:col-span-5 flex justify-center items-center relative group">
            {/* Pulsing Aura Rings behind the logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full filter blur-3xl opacity-30 group-hover:opacity-50 transition duration-700 scale-90 group-hover:scale-105"></div>
            
            {/* Main Animated Logo Container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 transition-all duration-700 ease-out transform group-hover:scale-105 group-hover:rotate-2 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_20px_50px_rgba(34,211,238,0.4)]">
              <Image 
                src="/cat and dog inside heart logo.jpg" 
                alt="PatitasGTO Icono Principal" 
                fill
                className="object-contain animate-[float_6s_ease-in-out_infinite]"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST ANCHORS */}
      <section className="bg-white py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-semibold text-slate-500">
          <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-500 w-5 h-5" /> Paseadores Verificados</div>
          <div className="flex items-center gap-2"><MapPin className="text-teal-500 w-5 h-5" /> Cobertura Local en Guanajuato</div>
          <div className="flex items-center gap-2"><Sparkles className="text-purple-500 w-5 h-5" /> Envíos Seguros a Todo México</div>
        </div>
      </section>

      {/* 3. SERVICES FEATURED */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Servicios Locales en GTO</h2>
            <p className="text-slate-500 mt-2 text-base md:text-lg">Cuidado premium sin salir de la ciudad. Tu mascota en manos de expertos del vecindario.</p>
          </div>
          <Link href="/services" className="text-orange-600 font-bold hover:text-orange-700 hover:underline mt-4 md:mt-0 inline-flex items-center gap-1">
            Ver todos los servicios &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <span className="text-4xl">🦮</span>
            <h3 className="text-xl font-bold mt-4 mb-2 text-slate-800">Paseos Activos</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">Rutas personalizadas por callejones o parques de GTO, reportes por WhatsApp en tiempo real y rastreo seguro.</p>
            <Link href="/services/book?service=walking" className="text-sm font-bold text-teal-600 hover:text-teal-700 bg-teal-50 px-4 py-2 rounded-xl inline-block transition">
              Agendar Paseo
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <span className="text-4xl">🏡</span>
            <h3 className="text-xl font-bold mt-4 mb-2 text-slate-800">Cuidado en Casa</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">¿Sales de viaje? Nos quedamos con ellos o los visitamos para alimentarlos y jugar para que no extrañen.</p>
            <Link href="/services/book?service=sitting" className="text-sm font-bold text-purple-600 hover:text-purple-700 bg-purple-50 px-4 py-2 rounded-xl inline-block transition">
              Cotizar Estadía
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <span className="text-4xl">💩</span>
            <h3 className="text-xl font-bold mt-4 mb-2 text-slate-800">Recolección de Desechos</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">Suscripción mensual limpia de patios. Olvídate de limpiar la suciedad, nuestro equipo se encarga de manera higiénica.</p>
            <Link href="/services/book?service=poop" className="text-sm font-bold text-amber-600 hover:text-amber-700 bg-amber-50 px-4 py-2 rounded-xl inline-block transition">
              Ver Planes Mensuales
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT HIGHLIGHTS */}
      <section className="bg-slate-100 py-20 px-4 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Los Imperdibles de la Tienda</h2>
              <p className="text-slate-500 mt-2 text-base md:text-lg">Productos locales, personalizados de nuestra marca y joyas recomendadas.</p>
            </div>
            <Link href="/shop" className="text-orange-600 font-bold hover:text-orange-700 hover:underline mt-4 md:mt-0 inline-flex items-center gap-1">
              Ir a la tienda completa &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Local */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between border border-slate-200/60">
              <div className="p-4">
                <div className="bg-slate-100 aspect-square rounded-xl mb-4 flex items-center justify-center text-slate-400 font-medium text-sm">[Imagen Local GTO]</div>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-md font-bold">Local GTO</span>
                <h3 className="font-bold text-slate-800 mt-2 text-base">Premios Orgánicos de Hígado</h3>
                <p className="text-slate-600 text-sm font-semibold mt-1">$120 MXN</p>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition">Agregar al Carrito</button>
              </div>
            </div>

            {/* Mercado Libre */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between border border-slate-200/60">
              <div className="p-4">
                <div className="bg-slate-100 aspect-square rounded-xl mb-4 flex items-center justify-center text-slate-400 font-medium text-sm">[Imagen Producto]</div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded-md font-bold">Recomendado ML</span>
                <h3 className="font-bold text-slate-800 mt-2 text-base">Cama Ortopédica Antiestrés</h3>
                <p className="text-slate-500 text-xs mt-1">El más vendido de la semana</p>
              </div>
              <div className="p-4 pt-0">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-full bg-yellow-400 text-slate-900 py-2.5 rounded-xl text-sm font-black text-center block hover:bg-yellow-500 transition">Comprar en ML</a>
              </div>
            </div>

            {/* Print on Demand */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between border border-slate-200/60">
              <div className="p-4">
                <div className="bg-slate-100 aspect-square rounded-xl mb-4 flex items-center justify-center text-slate-400 font-medium text-sm">[Imagen Ropa]</div>
                <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-md font-bold">Diseño Exclusivo</span>
                <h3 className="font-bold text-slate-800 mt-2 text-base">Sudadera "Dog Parent"</h3>
                <p className="text-slate-600 text-sm font-semibold mt-1">$450 MXN</p>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-purple-600 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-purple-700 transition">Personalizar</button>
              </div>
            </div>

            {/* Dropshipping */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between border border-slate-200/60">
              <div className="p-4">
                <div className="bg-slate-100 aspect-square rounded-xl mb-4 flex items-center justify-center text-slate-400 font-medium text-sm">[Imagen Accesorio]</div>
                <span className="bg-sky-100 text-sky-800 text-xs px-2.5 py-1 rounded-md font-bold">Importado</span>
                <h3 className="font-bold text-slate-800 mt-2 text-base">Bebedero Portátil de Viaje</h3>
                <p className="text-slate-600 text-sm font-semibold mt-1">$210 MXN</p>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY INTEGRATION */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8 flex flex-col justify-between items-start">
          <div>
            <span className="text-3xl">🚨</span>
            <h3 className="text-2xl font-black text-rose-950 mt-2 mb-2">Red de Mascotas Perdidas GTO</h3>
            <p className="text-rose-800/90 text-sm leading-relaxed mb-6">Si perdiste o encontraste un perrito o gatito en Guanajuato capital, repórtalo gratis de inmediato. Activamos alertas instantáneas en la comunidad.</p>
          </div>
          <Link href="/community/lost-and-found" className="bg-rose-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-rose-700 transition shadow-sm">
            Ver Tablero de Reportes
          </Link>
        </div>
        
        <div className="bg-slate-950 text-white rounded-3xl p-8 flex flex-col justify-between items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-2xl"></div>
          <div>
            <span className="text-3xl">🩺</span>
            <h3 className="text-2xl font-black text-white mt-2 mb-2">Directorio de Veterinarias de Confianza</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">Encuentra de inmediato clínicas abiertas 24 horas, especialistas médicos calificados y estéticas caninas recomendadas por dueños locales.</p>
          </div>
          <Link href="/directory" className="bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl text-sm font-black hover:bg-emerald-400 transition shadow-sm">
            Buscar Veterinaria Cercana
          </Link>
        </div>
      </section>

    </div>
  );
}