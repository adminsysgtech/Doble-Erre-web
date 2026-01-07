
import React, { useState, useEffect } from 'react';
import { PORTFOLIO } from '../constants';
import { ExternalLink, Sparkles } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todo');
  const [visibleCount, setVisibleCount] = useState(3);
  const categories = ['Todo', 'Diseño', 'Impresión', 'Editorial', 'Merch'];

  const categoryColors: Record<string, string> = {
    'Todo': 'bg-brand-accent',
    'Diseño': 'bg-brand-magenta',
    'Impresión': 'bg-brand-orange',
    'Editorial': 'bg-brand-red',
    'Merch': 'bg-brand-steelblue'
  };

  const filteredItems = filter === 'Todo' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter || (filter === 'Diseño' && item.category === 'Editorial'));

  useEffect(() => {
    setVisibleCount(3);
  }, [filter]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleInterestClick = () => {
    // Si viene de portafolio general, mandamos detalle vacío para que el usuario elija
    window.dispatchEvent(new CustomEvent('selectService', { detail: '' }));
  };

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  return (
    <section id="portfolio" className="py-32 bg-brand-cream/15 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 text-brand-steelblue font-black text-xs uppercase tracking-[0.3em] mb-6">
              <Sparkles className="w-5 h-5 text-brand-orange" />
              <span>Calidad Comprobada en Guatemala</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none text-brand-deepblue uppercase italic">
              PROYECTOS <span className="gradient-text-palette">TOP GT</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3 p-2 bg-brand-celeste/30 rounded-[2rem]">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                  ? `${categoryColors[cat]} text-white shadow-xl scale-105 active:scale-95` 
                  : 'text-brand-steelblue/70 hover:text-brand-deepblue hover:bg-white/50 active:scale-95'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {visibleItems.map((item, idx) => (
            <div key={item.id} className="group relative overflow-hidden rounded-[4rem] bg-brand-deepblue shadow-celeste transition-all duration-700">
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <img 
                  src={item.image} 
                  alt={`${item.title} - Ejemplo de ${item.category} de alta calidad en Guatemala Zona 10`} 
                  title={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 -z-10 bg-brand-celeste/20 animate-pulse"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-deepblue via-brand-deepblue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className={`inline-block px-5 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-5 ${categoryColors[item.category] || 'bg-brand-orange'}`}>
                    {item.category}
                  </span>
                  <h3 className="text-white text-3xl font-black mb-4 uppercase italic leading-none">{item.title}</h3>
                  <p className="text-white/70 text-xs font-bold mb-8 italic tracking-wide">Ubicación: Ciudad de Guatemala, Zona 10</p>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href="#solicitud-presupuesto"
                      onClick={handleInterestClick}
                      className="flex items-center gap-3 px-6 py-3 bg-white text-brand-deepblue rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand-accent transition-colors active:scale-95"
                    >
                      Me interesa <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <button 
              onClick={handleLoadMore} 
              className="group relative bg-white border-2 border-brand-accent text-brand-deepblue px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-deepblue hover:text-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl"
            >
              <span className="relative z-10">Explorar más trabajos</span>
              <div className="absolute inset-0 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full -z-10"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
