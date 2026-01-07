
import React, { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
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
      setIsMenuOpen(false);
    }
  };

  const openAdminLogin = () => {
    window.dispatchEvent(new Event('openAdminLogin'));
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Servicios', id: 'services' },
    { name: 'Portafolio', id: 'portfolio' },
    { name: 'Consultor', id: 'ai-consultant' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-brand-deepblue/80 backdrop-blur-xl border-white/10 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      {/* Línea de progreso sutil */}
      <div 
        className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-accent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-30'}`}
        style={{ width: '100%', backgroundSize: '200% 100%' }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-1 group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <span className="text-4xl font-handwriting text-white">
              Doble Erre
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="group relative text-[11px] font-black text-white/80 hover:text-white transition-colors uppercase tracking-[0.3em] outline-none"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <div className="flex items-center gap-4">
              <button 
                onClick={openAdminLogin}
                className="p-2 text-white/40 hover:text-brand-orange transition-colors"
                title="Acceso Administración"
              >
                <Lock className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('solicitud-presupuesto')}
                className={`px-8 py-3 text-[10px] font-black rounded-full transition-all duration-500 uppercase tracking-[0.2em] outline-none border ${
                  isScrolled 
                    ? 'bg-brand-accent text-brand-deepblue border-transparent hover:bg-white hover:scale-105 shadow-xl' 
                    : 'bg-white/10 text-white border-white/30 backdrop-blur-md hover:bg-white hover:text-brand-deepblue shadow-2xl'
                }`}
              >
                Cotizar Proyecto
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu Trigger */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-xl transition-all ${
              isScrolled ? 'text-white bg-white/10' : 'text-white bg-black/20'
            }`}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-0 z-[90] bg-brand-deepblue/95 backdrop-blur-2xl transition-all duration-700 md:hidden flex flex-col justify-center items-center text-center ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <nav className="flex flex-col gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.id)}
              className="text-4xl font-black text-white hover:text-brand-accent uppercase italic tracking-tighter transition-all outline-none"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('solicitud-presupuesto')}
            className="mt-6 px-12 py-6 bg-brand-orange text-white font-black uppercase tracking-widest rounded-full text-xl shadow-2xl hover:scale-105 active:scale-95 outline-none"
          >
            Cotizar Ahora
          </button>
          <button 
            onClick={openAdminLogin}
            className="mt-4 flex items-center gap-2 text-white/40 font-black uppercase tracking-widest text-[10px]"
          >
            <Lock className="w-3 h-3" /> Acceso Admin
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
