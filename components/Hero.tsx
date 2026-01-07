
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPresupuesto = () => {
    window.dispatchEvent(new CustomEvent('selectService', { detail: '' }));
    const el = document.getElementById('solicitud-presupuesto');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.location.hash = 'solicitud-presupuesto';
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden hero-canvas bg-[#0d1b2a]">
      {/* IMAGEN DE FONDO - LA NOCHE ESTRELLADA (CON OPACIDAD PARA MEJORAR LEGIBILIDAD) */}
      <div className="absolute inset-0 z-0 select-none">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ 
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg')",
          }}
        ></div>
        
        {/* Capas de contraste ajustadas para que las letras resalten al máximo */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0d1b2a]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-3xl text-white text-[9px] font-black uppercase tracking-[0.4em] mb-12 border border-white/20 shadow-2xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffcc33] animate-pulse"></span>
            <span>Doble Erre | Studio de Diseño & Impresión</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.9] text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] uppercase italic">
            DISEÑO E <br className="hidden md:block" />
            IMPRESIÓN <br />
            <span className="gradient-text-palette">DE ÉLITE</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-sm md:text-xl text-white font-bold mb-14 leading-relaxed tracking-widest italic uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Transformamos marcas en <span className="text-brand-accent">Zona 10</span>. <br className="hidden sm:block"/>
            Expertos en <span className="text-brand-orange">Rótulos 3D</span>, <span className="text-brand-magenta">Invitaciones</span> y <span className="text-brand-steelblue">Promocionales</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={scrollToPresupuesto}
              className="group w-full sm:w-auto flex items-center justify-center gap-4 px-14 py-6 bg-brand-deepblue text-brand-accent rounded-full font-black uppercase tracking-tighter hover:bg-brand-magenta transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 border-b-4 border-brand-orange outline-none"
            >
              Iniciar Proyecto <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/30 transition-all duration-300 active:scale-95 outline-none"
            >
              <Sparkles className="w-4 h-4 text-brand-orange group-hover:rotate-12 transition-transform" /> Ver Portafolio
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <span className="text-[8px] text-white font-black uppercase tracking-[0.5em]">Deslizar</span>
      </div>
    </section>
  );
};

export default Hero;
