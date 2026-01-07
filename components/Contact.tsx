
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Upload, CheckCircle2, Loader2, Sparkles, MessageCircle, ChevronDown, Hash } from 'lucide-react';
import { SERVICES } from '../constants';
import { BudgetRequest } from '../types';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState('');
  
  // Refs para capturar datos sin re-renders excesivos
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nitRef = useRef<HTMLInputElement>(null);
  const qtyRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleSelectService = (e: any) => {
      const serviceTitle = e.detail;
      if (serviceTitle) {
        setSelectedService(serviceTitle);
      }
    };
    window.addEventListener('selectService', handleSelectService);
    return () => window.removeEventListener('selectService', handleSelectService);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Crear objeto de solicitud
    const newRequest: BudgetRequest = {
      id: `REQ-${Date.now()}`,
      date: new Date().toISOString(),
      status: 'recibida',
      name: nameRef.current?.value || '',
      email: emailRef.current?.value || '',
      phone: phoneRef.current?.value || '',
      serviceType: selectedService || 'Otro',
      quantity: qtyRef.current?.value || '',
      // Fix: Use descRef instead of undefined descriptionRef
      description: descRef.current?.value || '',
      nit: nitRef.current?.value || ''
    };

    try {
      // Guardar en localStorage para el Admin
      const existingLeads = JSON.parse(localStorage.getItem('doble_erre_leads') || '[]');
      localStorage.setItem('doble_erre_leads', JSON.stringify([newRequest, ...existingLeads]));
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error guardando lead", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="solicitud-presupuesto" className="py-32 bg-brand-celeste/20 scroll-mt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-b-8 border-brand-orange rounded-[4rem] p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-magenta opacity-30"></div>
            <div className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand-accent/30">
              <CheckCircle2 className="w-12 h-12 text-brand-deepblue" />
            </div>
            <h2 className="text-5xl font-black text-brand-deepblue mb-6 tracking-tighter uppercase italic">¡Recibido!</h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium italic">
              "Tu visión está en manos expertas en Doble Erre. Te enviaremos el presupuesto en menos de 24 horas."
            </p>
            <div className="bg-brand-celeste p-8 rounded-[2rem] inline-block mb-10 border border-brand-accent/30">
              <p className="text-[10px] text-brand-steelblue font-black uppercase tracking-[0.3em] mb-2">Folio de Cotización</p>
              <p className="text-3xl font-black text-brand-deepblue tracking-widest">#GUA-{Math.floor(1000 + Math.random() * 9000)}</p>
            </div>
            <br />
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-brand-steelblue font-black uppercase tracking-widest text-xs hover:text-brand-accent transition-colors"
            >
              Nueva cotización
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="solicitud-presupuesto" className="py-32 bg-brand-celeste/5 relative scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-deepblue text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
            Presupuestos Inmediatos
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 text-brand-deepblue uppercase tracking-tighter italic">
            SOLICITUD DE <span className="text-brand-accent">PRESUPUESTO</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium italic">
            Cuéntanos tu proyecto y recibe una cotización detallada. Ubicados en <span className="text-brand-deepblue font-black underline decoration-brand-orange">Zona 10, Guatemala</span>.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-celeste rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-brand-deepblue p-16 text-white relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-accent/5 pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 text-brand-accent text-[10px] font-black uppercase tracking widest mb-12">
                <Sparkles className="w-4 h-4" />
                <span>Soporte Doble Erre GT</span>
              </div>
              <h3 className="text-4xl font-black mb-12 leading-tight uppercase italic text-brand-accent">Visítanos en <br/>Zona 10</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent transition-colors">
                    <MapPin className="w-6 h-6 text-brand-accent group-hover:text-brand-deepblue" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 font-black uppercase tracking-widest mb-1">Ubicación Física</p>
                    <p className="font-bold text-sm leading-relaxed">20 calle 5-35 Plaza Los Arcos <br/>Zona 10 Local 19, Guatemala</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange transition-colors">
                    <Phone className="w-6 h-6 text-brand-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 font-black uppercase tracking-widest mb-1">Línea Directa (PBX)</p>
                    <p className="font-bold text-lg">2393-8515</p>
                  </div>
                </div>
                <a href="https://wa.me/50255811422" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 font-black uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="font-bold text-lg">5581-1422</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-16 pt-10 border-t border-white/10">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Horario de Atención</p>
              <p className="text-xs font-bold mt-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="text-xs font-bold">Sábado: 9:00 AM - 1:00 PM</p>
            </div>
          </div>

          <div className="lg:w-2/3 p-12 lg:p-20 bg-brand-celeste/10 relative">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-cream/40 rounded-tl-full pointer-events-none"></div>
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-deepblue uppercase tracking-widest ml-1">Tu Nombre / Empresa</label>
                  <input ref={nameRef} required type="text" className="w-full bg-white border border-brand-accent/20 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all text-brand-deepblue font-medium placeholder:text-gray-300 shadow-sm" placeholder="Ej. Juan Pérez / Studio GT" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-deepblue uppercase tracking-widest ml-1">Correo Electrónico</label>
                  <input ref={emailRef} required type="email" className="w-full bg-white border border-brand-accent/20 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all text-brand-deepblue font-medium placeholder:text-gray-300 shadow-sm" placeholder="ejemplo@correo.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-deepblue uppercase tracking-widest ml-1">Número de Teléfono</label>
                  <input ref={phoneRef} required type="tel" className="w-full bg-white border border-brand-accent/20 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all text-brand-deepblue font-medium placeholder:text-gray-300 shadow-sm" placeholder="Ej. 5555-4444" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-deepblue uppercase tracking-widest ml-1">NIT (Opcional)</label>
                  <div className="relative">
                    <input ref={nitRef} type="text" className="w-full bg-white border border-brand-accent/20 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all text-brand-deepblue font-medium placeholder:text-gray-300 shadow-sm pl-12" placeholder="Ej. 123456-7" />
                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steelblue/40" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-deepblue uppercase tracking-widest ml-1">Tipo de Servicio</label>
                  <div className="relative">
                    <select 
                      required 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white border border-brand-accent/20 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all text-brand-deepblue font-medium appearance-none shadow-sm"
                    >
                      <option value="" disabled>Selecciona un servicio</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="otro">Otro Requerimiento</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-steelblue pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-deepblue uppercase tracking-widest ml-1">Cantidad / Volumen</label>
                  <input ref={qtyRef} required type="text" className="w-full bg-white border border-brand-accent/20 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-accent transition-all text-brand-deepblue font-medium placeholder:text-gray-300 shadow-sm" placeholder="Ej. 500 unidades / 2 rótulos" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-brand-deepblue uppercase tracking-widest ml-1">Detalles del Proyecto</label>
                <textarea ref={descRef} required rows={4} className="w-full bg-white border border-brand-accent/20 rounded-[2rem] px-6 py-6 focus:ring-2 focus:ring-brand-accent transition-all text-brand-deepblue font-medium placeholder:text-gray-300 shadow-sm" placeholder="Describe medidas, materiales o acabados que necesites..."></textarea>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-brand-deepblue uppercase tracking-widest ml-1">Adjuntar Arte o Referencia (Opcional)</label>
                <div 
                  onClick={() => fileInputRef.current?.click()} 
                  className="border-4 border-dotted border-brand-accent/20 rounded-[2.5rem] p-10 text-center bg-white hover:border-brand-accent hover:bg-brand-celeste/20 transition-all cursor-pointer group relative"
                >
                  <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => setSelectedFileName(e.target.files?.[0].name || null)} />
                  <Upload className="w-10 h-10 text-brand-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-black text-brand-deepblue uppercase tracking-widest leading-relaxed">
                    {selectedFileName ? `Archivo: ${selectedFileName}` : 'Arrastra tus archivos o haz clic para subir (PDF, AI, JPG)'}
                  </p>
                </div>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full sm:w-auto px-16 py-6 bg-brand-accent text-brand-deepblue rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-deepblue hover:text-white transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 border-b-4 border-brand-steelblue/30 active:translate-y-1 active:border-b-0"
              >
                {isSubmitting ? (
                  <>Procesando Solicitud <Loader2 className="w-6 h-6 animate-spin" /></>
                ) : (
                  <>Solicitar Presupuesto <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
