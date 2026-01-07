
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const paletteColors = [
    { bg: 'bg-brand-magenta/10', icon: 'text-brand-magenta', dot: 'bg-brand-magenta', hover: 'group-hover:bg-brand-magenta', shadow: 'group-hover:shadow-brand-magenta/30' },
    { bg: 'bg-brand-orange/10', icon: 'text-brand-orange', dot: 'bg-brand-orange', hover: 'group-hover:bg-brand-orange', shadow: 'group-hover:shadow-brand-orange/30' },
    { bg: 'bg-brand-red/10', icon: 'text-brand-red', dot: 'bg-brand-red', hover: 'group-hover:bg-brand-red', shadow: 'group-hover:shadow-brand-red/30' },
    { bg: 'bg-brand-steelblue/10', icon: 'text-brand-steelblue', dot: 'bg-brand-steelblue', hover: 'group-hover:bg-brand-steelblue', shadow: 'group-hover:shadow-brand-steelblue/30' },
    { bg: 'bg-brand-accent/20', icon: 'text-brand-deepblue', dot: 'bg-brand-accent', hover: 'group-hover:bg-brand-accent', shadow: 'group-hover:shadow-brand-accent/30' },
    { bg: 'bg-brand-magenta/10', icon: 'text-brand-magenta', dot: 'bg-brand-magenta', hover: 'group-hover:bg-brand-magenta', shadow: 'group-hover:shadow-brand-magenta/30' },
    { bg: 'bg-brand-orange/10', icon: 'text-brand-orange', dot: 'bg-brand-orange', hover: 'group-hover:bg-brand-orange', shadow: 'group-hover:shadow-brand-orange/30' },
    { bg: 'bg-brand-red/10', icon: 'text-brand-red', dot: 'bg-brand-red', hover: 'group-hover:bg-brand-red', shadow: 'group-hover:shadow-brand-red/30' },
  ];

  const handleQuoteClick = (serviceTitle: string) => {
    // 1. Sincronizar el estado del formulario de inmediato
    window.dispatchEvent(new CustomEvent('selectService', { detail: serviceTitle }));
    
    // 2. Navegación manual robusta
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

  return (
    <section id="services" className="py-24 bg-brand-celeste/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-brand-accent/30 shadow-sm text-brand-deepblue text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-magenta animate-pulse"></span>
            Expertos en Ciudad de Guatemala
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none text-brand-deepblue italic uppercase">
            SOLUCIONES DE <br/><span className="gradient-text-palette">ALTO IMPACTO</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed italic">
            Desde <span className="text-brand-orange font-bold">Rótulos en Zona 10</span> hasta <span className="text-brand-magenta font-bold">Venta de Promocionales</span> y papelería fina para eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="group p-10 rounded-[4rem] bg-white border border-brand-accent/20 hover:shadow-multi transition-all duration-700 relative overflow-hidden flex flex-col justify-between">
              <div className={`absolute top-0 right-0 w-48 h-48 ${paletteColors[index % paletteColors.length].bg} rounded-bl-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700 opacity-50`}></div>
              
              <div>
                <div className={`w-20 h-20 ${paletteColors[index % paletteColors.length].bg} ${paletteColors[index % paletteColors.length].icon} rounded-[2rem] flex items-center justify-center mb-10 transition-all duration-500 shadow-sm border border-brand-accent/10 group-hover:bg-brand-deepblue group-hover:text-white group-hover:-translate-y-3 group-hover:rotate-6 ${paletteColors[index % paletteColors.length].shadow}`}>
                  <div className="group-hover:animate-icon-float transition-transform duration-500">
                    {ICON_MAP[service.icon]}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${paletteColors[index % paletteColors.length].dot} group-hover:scale-150 transition-transform`}></span>
                  <h3 className="text-2xl font-black text-brand-deepblue uppercase italic tracking-tighter">{service.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium italic">
                  {service.description}
                </p>
              </div>
              
              <button 
                onClick={() => handleQuoteClick(service.title)}
                className={`inline-flex items-center gap-3 text-xs font-black transition-all uppercase tracking-widest ${paletteColors[index % paletteColors.length].icon} group-hover:translate-x-3 outline-none active:scale-95`}
              >
                Cotizar ahora <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
