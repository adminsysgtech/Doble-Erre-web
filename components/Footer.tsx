
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Heart, MapPin, Phone, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  const openAdmin = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('openAdminLogin'));
  };

  return (
    <footer className="bg-brand-deepblue pt-20 pb-16 relative overflow-hidden text-white border-t-8 border-brand-accent">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-magenta/5 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-4xl font-handwriting text-white">
                Doble Erre
              </span>
            </div>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3 text-white/60 text-xs font-medium italic">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>20 calle 5-35 Plaza Los Arcos Zona 10 Local 19, Guatemala</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-xs font-medium italic">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>PBX: 2393-8515</span>
              </div>
            </div>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, color: 'hover:bg-brand-magenta' },
                { Icon: Twitter, color: 'hover:bg-brand-accent' },
                { Icon: Facebook, color: 'hover:bg-brand-steelblue' },
                { Icon: Linkedin, color: 'hover:bg-brand-orange' }
              ].map(({Icon, color}, i) => (
                <a key={i} href="#" className={`w-12 h-12 flex items-center justify-center bg-white/10 border border-white/10 rounded-2xl text-white ${color} hover:text-white hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-brand-orange mb-10 uppercase tracking-[0.3em] text-xs">Studio GT</h4>
            <ul className="space-y-6 text-sm font-black uppercase tracking-widest text-white/70">
              <li><a href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Rótulos 3D</a></li>
              <li><a href="#portfolio" className="hover:text-brand-orange transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange"></span> Portafolio</a></li>
              <li><a href="#services" className="hover:text-brand-magenta transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-magenta"></span> Señalética</a></li>
              <li><a href="#solicitud-presupuesto" className="hover:text-brand-red transition-colors flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-red"></span> Cotizaciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-accent mb-10 uppercase tracking-[0.3em] text-xs">Especialidades</h4>
            <ul className="space-y-6 text-sm font-black uppercase tracking-widest text-white/70">
              <li><a href="#" className="hover:text-brand-cream transition-colors">Seguridad Industrial</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Fachadas Comerciales</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Letras Acrílicas</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Merchandising</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
          <p>© 2024 Doble Erre Studio. Impresión de élite en Ciudad de Guatemala. Hecho con <Heart className="w-3 h-3 inline text-brand-red mx-1 animate-pulse" /></p>
          <div className="flex gap-10">
            <a href="#" onClick={openAdmin} className="hover:text-brand-orange transition-colors flex items-center gap-2"><Lock className="w-3 h-3" /> Admin</a>
            <a href="#" className="hover:text-brand-magenta transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Políticas</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
