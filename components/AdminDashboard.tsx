
import React, { useState, useEffect } from 'react';
import { BudgetRequest, LeadStatus } from '../types';
import { 
  Trophy, 
  Clock, 
  CheckCircle, 
  XCircle, 
  LogOut, 
  BarChart3, 
  LayoutDashboard, 
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Download
} from 'lucide-react';

const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [leads, setLeads] = useState<BudgetRequest[]>([]);
  const [view, setView] = useState<'pipeline' | 'reports'>('pipeline');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('doble_erre_leads') || '[]');
    setLeads(data);
  }, []);

  const updateStatus = (id: string, newStatus: LeadStatus) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('doble_erre_leads', JSON.stringify(updated));
  };

  const getLeadsByStatus = (status: LeadStatus) => leads.filter(l => l.status === status);

  // Métricas para reportes
  const total = leads.length;
  const approved = getLeadsByStatus('aprobada').length;
  const rejected = getLeadsByStatus('no_aceptada').length;
  const conversionRate = total > 0 ? ((approved / (approved + rejected || 1)) * 100).toFixed(1) : 0;

  const servicesReport = leads.reduce((acc: any, curr) => {
    acc[curr.serviceType] = (acc[curr.serviceType] || 0) + 1;
    return acc;
  }, {});

  const columns: { id: LeadStatus, title: string, icon: any, color: string }[] = [
    { id: 'recibida', title: 'Recibidas', icon: Clock, color: 'border-brand-accent' },
    { id: 'proceso', title: 'En Proceso', icon: BarChart3, color: 'border-brand-orange' },
    { id: 'aprobada', title: 'Aprobadas', icon: CheckCircle, color: 'border-brand-magenta' },
    { id: 'no_aceptada', title: 'No Aceptadas', icon: XCircle, color: 'border-brand-red' }
  ];

  return (
    <div className="min-h-screen bg-brand-cream/30 flex flex-col font-sans text-brand-deepblue">
      {/* Sidebar / Top Nav */}
      <header className="bg-brand-deepblue text-white py-4 px-8 flex justify-between items-center shadow-xl z-50">
        <div className="flex items-center gap-6">
          <span className="text-xl font-black italic tracking-tighter">Doble Erre <span className="text-brand-accent">ADMIN</span></span>
          <nav className="flex gap-4 ml-10">
            <button onClick={() => setView('pipeline')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${view === 'pipeline' ? 'bg-white/10 text-brand-accent' : 'opacity-50 hover:opacity-100'}`}>
              <LayoutDashboard className="w-4 h-4 inline-block mr-2" /> Pipeline
            </button>
            <button onClick={() => setView('reports')} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${view === 'reports' ? 'bg-white/10 text-brand-accent' : 'opacity-50 hover:opacity-100'}`}>
              <TrendingUp className="w-4 h-4 inline-block mr-2" /> Reportes
            </button>
          </nav>
        </div>
        <button onClick={onLogout} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-brand-orange transition-colors">
          Salir <LogOut className="w-4 h-4" />
        </button>
      </header>

      <main className="flex-1 p-8 overflow-x-auto">
        {view === 'pipeline' ? (
          <div className="flex gap-6 h-[calc(100vh-160px)] min-w-[1200px]">
            {columns.map(col => (
              <div key={col.id} className="flex-1 flex flex-col min-w-[300px]">
                <div className={`mb-6 flex items-center justify-between p-4 bg-white border-b-4 ${col.color} rounded-2xl shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <col.icon className="w-5 h-5 opacity-60" />
                    <h3 className="font-black uppercase tracking-tighter text-sm">{col.title}</h3>
                  </div>
                  <span className="bg-brand-celeste text-brand-deepblue px-3 py-1 rounded-full text-[10px] font-black">{getLeadsByStatus(col.id).length}</span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                  {getLeadsByStatus(col.id).map(lead => (
                    <div key={lead.id} className="bg-white p-6 rounded-3xl shadow-sm border border-brand-accent/10 hover:shadow-md transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[9px] font-black uppercase text-brand-steelblue/60 tracking-widest bg-brand-celeste/20 px-2 py-1 rounded-md">{lead.serviceType}</span>
                        <span className="text-[9px] text-gray-400 font-bold">{new Date(lead.date).toLocaleDateString()}</span>
                      </div>
                      <h4 className="font-black text-brand-deepblue mb-1 uppercase italic leading-none">{lead.name}</h4>
                      <p className="text-xs text-gray-500 mb-4 line-clamp-2 italic">"{lead.description}"</p>
                      
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-accent/5">
                        {col.id !== 'recibida' && (
                          <button onClick={() => updateStatus(lead.id, 'recibida')} className="p-2 hover:bg-brand-celeste rounded-lg transition-colors text-brand-steelblue" title="Mover a Recibida"><Clock className="w-4 h-4" /></button>
                        )}
                        {col.id !== 'proceso' && (
                          <button onClick={() => updateStatus(lead.id, 'proceso')} className="p-2 hover:bg-brand-orange/10 rounded-lg transition-colors text-brand-orange" title="Mover a Proceso"><BarChart3 className="w-4 h-4" /></button>
                        )}
                        {col.id !== 'aprobada' && (
                          <button onClick={() => updateStatus(lead.id, 'aprobada')} className="p-2 hover:bg-brand-magenta/10 rounded-lg transition-colors text-brand-magenta" title="Aprobar"><CheckCircle className="w-4 h-4" /></button>
                        )}
                        {col.id !== 'no_aceptada' && (
                          <button onClick={() => updateStatus(lead.id, 'no_aceptada')} className="p-2 hover:bg-brand-red/10 rounded-lg transition-colors text-brand-red" title="Rechazar"><XCircle className="w-4 h-4" /></button>
                        )}
                      </div>
                    </div>
                  ))}
                  {getLeadsByStatus(col.id).length === 0 && (
                    <div className="border-2 border-dashed border-brand-accent/20 rounded-3xl p-10 text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-steelblue/40 italic">Sin solicitudes</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto space-y-10">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-4 border-brand-accent">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-steelblue mb-2">Total Solicitudes</p>
                <p className="text-4xl font-black italic">{total}</p>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-4 border-brand-magenta">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-steelblue mb-2">Aprobados</p>
                <p className="text-4xl font-black italic text-brand-magenta">{approved}</p>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-4 border-brand-red">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-steelblue mb-2">No Aceptados</p>
                <p className="text-4xl font-black italic text-brand-red">{rejected}</p>
              </div>
              <div className="bg-brand-deepblue p-8 rounded-[2.5rem] shadow-sm text-white border-b-4 border-brand-orange">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Conversión</p>
                <p className="text-4xl font-black italic text-brand-accent">{conversionRate}%</p>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white p-10 rounded-[3rem] shadow-sm">
                <h3 className="text-xl font-black mb-10 uppercase italic tracking-tighter">Servicios más solicitados</h3>
                <div className="space-y-6">
                  {Object.entries(servicesReport).sort((a: any, b: any) => b[1] - a[1]).map(([service, count]: any) => (
                    <div key={service} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span>{service}</span>
                        <span>{count}</span>
                      </div>
                      <div className="h-3 bg-brand-celeste/30 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-orange transition-all duration-1000" style={{ width: `${(count / total) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                  {Object.keys(servicesReport).length === 0 && <p className="text-center italic opacity-30">No hay datos disponibles</p>}
                </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-sm flex flex-col justify-center items-center text-center">
                <div className="w-40 h-40 rounded-full border-[15px] border-brand-magenta flex items-center justify-center mb-8 relative">
                   <div className="absolute inset-[-15px] rounded-full border-[15px] border-brand-red border-t-transparent border-r-transparent rotate-[30deg]"></div>
                   <Trophy className="w-12 h-12 text-brand-orange" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter">Resumen de Cierre</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed italic max-w-xs">
                  Has cerrado exitosamente <span className="text-brand-magenta font-black">{approved}</span> proyectos este periodo.
                </p>
                <button className="mt-8 px-10 py-4 bg-brand-deepblue text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand-magenta transition-all flex items-center gap-3">
                  <Download className="w-4 h-4" /> Exportar Reporte
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
