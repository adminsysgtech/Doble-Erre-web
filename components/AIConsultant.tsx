import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Key, AlertCircle } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';
// Explicitly import from types.ts at the parent directory
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '¡Bienvenido! Soy tu consultor en Doble Erre. ¿Tienes dudas sobre materiales o acabados? Estoy listo para asesorarte.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setConnectionError(false);

    try {
      const response = await getDesignAdvice(userMessage);
      
      if (response === "ERROR_CONEXION_API") {
        setConnectionError(true);
        setMessages(prev => [...prev, { role: 'assistant', content: "Parece que hay un problema de conexión. ¿Podrías intentar de nuevo o verificar la configuración?" }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento, ocurrió un error inesperado." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-32 bg-brand-deepblue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-magenta/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] -ml-48 -mb-48"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 text-brand-accent mb-6 bg-white/10 px-4 py-2 rounded-full border border-brand-accent/30 shadow-xl">
              <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">DobleAI Expert</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic uppercase">DOMINA LA <br/><span className="text-brand-orange">TÉCNICA.</span></h2>
            
            {connectionError && (
              <div className="mb-8 p-6 bg-red-500/20 border border-red-500/50 rounded-[2rem] flex flex-col gap-4">
                <div className="flex items-center gap-3 text-red-200 font-bold">
                  <AlertCircle className="w-6 h-6" />
                  <span>Error de Conexión</span>
                </div>
                <p className="text-xs text-red-100/70 italic">Hubo un problema al conectar con el servicio de IA.</p>
              </div>
            )}

            <p className="text-white/70 mb-10 leading-relaxed font-medium">
              Resolvemos tus dudas sobre gramajes, vinilos y lonas en segundos. Entrenado por <span className="text-brand-accent">Doble Erre</span>.
            </p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-[3rem] shadow-2xl flex flex-col h-[600px] overflow-hidden border-2 border-brand-accent/20">
              <div className="p-6 bg-brand-celeste/20 border-b border-brand-accent/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-deepblue flex items-center justify-center shadow-lg border border-brand-magenta/30">
                    <Bot className="w-7 h-7 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-black text-brand-deepblue tracking-tight">Consultor Doble Erre</h3>
                    <div className="flex gap-1.5 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-magenta"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-brand-cream/5">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md ${msg.role === 'user' ? 'bg-brand-magenta text-white' : 'bg-brand-deepblue text-brand-accent'}`}>
                        {msg.role === 'user' ? <User className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                      </div>
                      <div className={`p-5 rounded-3xl text-sm leading-relaxed font-medium shadow-sm border ${msg.role === 'user' ? 'bg-brand-orange text-white rounded-tr-none border-brand-orange' : 'bg-white text-brand-deepblue rounded-tl-none border-brand-accent/30'}`}>
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-brand-deepblue text-brand-accent flex items-center justify-center animate-pulse">
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </div>
                      <div className="bg-white p-5 rounded-3xl text-[10px] font-black text-brand-steelblue animate-pulse border border-brand-accent/20 uppercase tracking-[0.2em]">
                        Calculando...
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-brand-accent/20 flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu duda..."
                  className="flex-1 bg-brand-celeste/10 border border-brand-accent/30 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-magenta transition-all text-brand-deepblue shadow-inner"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-brand-deepblue p-4 rounded-2xl hover:bg-brand-magenta text-brand-accent hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95 outline-none"
                >
                  <Send className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
