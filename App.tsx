
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { ArrowRight, Lock, User, Key, Loader2, X } from 'lucide-react';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Verificar sesión existente
  useEffect(() => {
    const session = localStorage.getItem('doble_erre_admin_session');
    if (session === 'active') setIsAdmin(true);
    
    const handleOpenLogin = () => setShowLogin(true);
    window.addEventListener('openAdminLogin', handleOpenLogin);
    return () => window.removeEventListener('openAdminLogin', handleOpenLogin);
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(false);
    
    const formData = new FormData(e.currentTarget);
    const user = formData.get('username');
    const pass = formData.get('password');

    // Simular retraso de red
    await new Promise(r => setTimeout(r, 1000));

    if (user === 'admin' && pass === 'dobleerre2024') {
      setIsAdmin(true);
      setShowLogin(false);
      localStorage.setItem('doble_erre_admin_session', 'active');
    } else {
      setLoginError(true);
    }
    setIsLoggingIn(false);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('doble_erre_admin_session');
  };

  const handleFabClick = () => {
    window.dispatchEvent(new CustomEvent('selectService', { detail: '' }));
    const element = document.getElementById('solicitud-presupuesto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isAdmin) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section className="bg-brand-deepblue py-24 relative overflow-hidden border-y border-brand-accent/10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-magenta/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="space-y-3 group cursor-default">
                <p className="text-6xl font-black tracking-tighter italic group-hover:text-brand-accent transition-colors">15k<span className="text-brand-orange animate-pulse">+</span></p>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em]">Entregas</p>
              </div>
              <div className="space-y-3 group cursor-default">
                <p className="text-6xl font-black tracking-tighter italic group-hover:text-brand-accent transition-colors">10</p>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em]">Años</p>
              </div>
              <div className="space-y-3 group cursor-default">
                <p className="text-6xl font-black tracking-tighter italic group-hover:text-brand-accent transition-colors">98<span className="text-brand-magenta animate-pulse">%</span></p>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em]">Fidelidad</p>
              </div>
              <div className="space-y-3 group cursor-default">
                <p className="text-6xl font-black tracking-tighter italic group-hover:text-brand-accent transition-colors">24<span className="text-brand-red animate-pulse">h</span></p>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em]">Respuesta</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none"></div>
        </section>

        <Services />
        <Portfolio />

        <section className="py-40 bg-brand-celeste/30 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 bg-brand-orange/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-magenta/10 rounded-full blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mb-24 text-center mx-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-deepblue text-white text-[10px] font-black uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Testimonios
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-none mb-8 text-brand-deepblue uppercase italic">Confianza en <br/><span className="gradient-text-palette">Doble Erre</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { 
                  name: "Gabriela Rivera", 
                  role: "Directora ELA", 
                  text: "Nos encanta el trabajo de Doble erre, porque no solo se enfocan en lo que solicitamos sino entienden las necesidades como cliente, analizan si lo solicitado quedara acorde a la expectativa, nos hacen sugerencias y el resultado final siempre cumple con los estandares y la calidad solicitada.", 
                  color: "text-brand-accent", 
                  border: "border-brand-accent" 
                },
                { 
                  name: "Carlos Ruiz", 
                  role: "Director de Arte", 
                  text: "La fidelidad del color en Doble Erre es inmejorable. Su asesoría técnica nos ahorra tiempo valioso.", 
                  color: "text-brand-orange", 
                  border: "border-brand-orange" 
                },
                { 
                  name: "Elena Gómez", 
                  role: "Editora Senior", 
                  text: "El consultor AI me ayudó a decidir acabados en segundos. Una herramienta vital para proyectos rápidos.", 
                  color: "text-brand-magenta", 
                  border: "border-brand-magenta" 
                }
              ].map((t, idx) => (
                <div key={idx} className={`p-12 rounded-[4rem] bg-white border-b-4 ${t.border} shadow-multi hover:scale-105 transition-all duration-700 relative overflow-hidden group`}>
                  <div className="flex gap-1.5 mb-8 text-brand-accent">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                  </div>
                  <p className="text-brand-deepblue text-lg italic font-medium leading-relaxed mb-10">"{t.text}"</p>
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl bg-brand-accent ${t.color} flex items-center justify-center font-black text-xl shadow-lg group-hover:bg-brand-deepblue group-hover:text-white transition-colors`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-brand-deepblue uppercase tracking-tighter">{t.name}</p>
                      <p className="text-[10px] font-black text-brand-steelblue uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
        <ContactCTA />
        <AIConsultant />
      </main>
      <Footer />
      
      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={handleFabClick}
          className="group flex items-center gap-4 bg-brand-accent text-brand-deepblue pl-10 pr-8 py-6 rounded-full shadow-2xl hover:bg-brand-deepblue hover:text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-brand-accent/40 border-2 border-brand-orange outline-none"
        >
          <span className="font-black uppercase tracking-[0.3em] text-xs">Cotizar</span>
          <div className="bg-brand-deepblue/10 p-2.5 rounded-full group-hover:rotate-45 transition-transform flex items-center justify-center">
            <ArrowRight className="w-6 h-6" />
          </div>
        </button>
      </div>

      {/* MODAL DE LOGIN */}
      {showLogin && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-brand-deepblue/90 backdrop-blur-xl">
          <div className="bg-white w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl border-4 border-brand-orange/20 relative animate-in fade-in zoom-in duration-300">
            <button onClick={() => setShowLogin(false)} className="absolute top-6 right-6 p-2 text-brand-deepblue hover:bg-brand-celeste rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-brand-orange rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black mb-2 uppercase italic tracking-tighter">Acceso Admin</h2>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Doble Erre Studio GT</p>
              
              <form onSubmit={handleLogin} className="space-y-6 text-left">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-steelblue ml-1">Usuario</label>
                  <div className="relative">
                    <input name="username" required type="text" className="w-full bg-brand-celeste/10 border border-brand-accent/20 rounded-2xl px-6 py-4 pl-12 focus:ring-2 focus:ring-brand-orange outline-none transition-all font-bold" placeholder="admin" />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steelblue/40" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-steelblue ml-1">Contraseña</label>
                  <div className="relative">
                    <input name="password" required type="password" className="w-full bg-brand-celeste/10 border border-brand-accent/20 rounded-2xl px-6 py-4 pl-12 focus:ring-2 focus:ring-brand-orange outline-none transition-all font-bold" placeholder="••••••••" />
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steelblue/40" />
                  </div>
                </div>
                
                {loginError && (
                  <p className="text-center text-brand-red text-[10px] font-black uppercase tracking-widest animate-shake">Credenciales incorrectas</p>
                )}

                <button 
                  type="submit" 
                  disabled={isLoggingIn}
                  className="w-full py-6 bg-brand-deepblue text-white rounded-full font-black uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
                >
                  {isLoggingIn ? <Loader2 className="w-6 h-6 animate-spin" /> : "Entrar al Panel"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
