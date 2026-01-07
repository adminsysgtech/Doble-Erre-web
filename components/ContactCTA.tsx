
import React from 'react';
import { MessageCircle, MapPin, ArrowRight, Zap, Sparkles } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-deepblue relative overflow-hidden border-t-4 border-brand-orange">
      {/* Fondo con degradados de paleta vibrante */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[120%] bg-brand-magenta rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[120%] bg-brand-orange rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest mb-8 animate-bounce">
              <Zap className="w-4 h-4 fill-current" />
              <span>Servicio a Domicilio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">
              ¿VISITAMOS TU <span className="text-brand-accent">LOCAL?</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-medium italic max-w-2xl">
              Realizamos <span className="text-brand-orange font-bold">asesoría técnica presencial</span> y toma de medidas en toda la Ciudad de Guatemala para asegurar la perfección de tu proyecto.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-3 text-brand-accent">
                <MapPin className="w-6 h-6" />
                <span className="text-xs font-black uppercase tracking-widest">Cobertura Nacional</span>
              </div>
              <div className="flex items-center gap-3 text-brand-orange">
                <Sparkles className="w-6 h-6" />
                <span className="text-xs font-black uppercase tracking-widest">Asesoría Gratuita</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full flex flex-col items-center">
            <a 
              href="https://wa.me/50255811422" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full py-8 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] rounded-[2.5rem] flex flex-col items-center justify-center gap-4 transition-all duration-500 shadow-2xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 border-b-8 border-black/10 hover:border-[#25D366]/20"
            >
              <MessageCircle className="w-12 h-12 group-hover:scale-110 transition-transform" />
              <span className="font-black uppercase tracking-[0.2em] text-sm">Escribir por WhatsApp</span>
              <div className="flex items-center gap-2 text-[10px] font-bold opacity-80 uppercase">
                Respuesta en minutos <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <p className="mt-6 text-[10px] text-white/40 font-black uppercase tracking-[0.3em]">O llámanos al PBX: 2393-8515</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
