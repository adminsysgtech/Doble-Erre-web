import React from 'react';
import { Palette, Printer, ShoppingBag, Layout, Image, Layers, Send, Zap, ShieldAlert, Maximize, Tag, Heart, Gift } from 'lucide-react';
// Explicitly import from types.ts
import { Service, PortfolioItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'graphic-design',
    title: 'Diseño Gráfico',
    description: 'Identidad corporativa, logotipos, manual de marca y material publicitario creativo.',
    icon: 'Palette',
    category: 'design'
  },
  {
    id: 'industrial-signage',
    title: 'Rótulos & Fachadas',
    description: 'Rótulos luminosos, cajas de luz y letras 3D para destacar tu negocio en Guatemala.',
    icon: 'Maximize',
    category: 'print'
  },
  {
    id: 'emergency-signage',
    title: 'Señalética de Emergencia',
    description: 'Señalización normada, fotoluminiscente y de seguridad industrial para empresas.',
    icon: 'ShieldAlert',
    category: 'merch'
  },
  {
    id: 'promocionales',
    title: 'Venta de Promocionales',
    description: 'Catálogo de artículos publicitarios: pachones, lapiceros, sombrillas y tazas personalizadas con tu marca.',
    icon: 'Gift',
    category: 'merch'
  },
  {
    id: 'wedding-invitations',
    title: 'Invitaciones de Boda',
    description: 'Invitaciones premium con acabados de lujo, papeles finos y diseño exclusivo para tu gran día.',
    icon: 'Heart',
    category: 'print'
  },
  {
    id: 'labels-packaging',
    title: 'Etiquetas & Empaque',
    description: 'Etiquetas personalizadas troqueladas y empaques que hacen brillar tu producto en el mercado.',
    icon: 'Tag',
    category: 'print'
  },
  {
    id: 'large-format',
    title: 'Gran Formato',
    description: 'Vinilos, lonas y vallas publicitarias con impresión de alta fidelidad.',
    icon: 'Layers',
    category: 'print'
  },
  {
    id: 'digital-print',
    title: 'Impresión Digital',
    description: 'Tarjetas, volantes y papelería premium con acabados especiales.',
    icon: 'Printer',
    category: 'print'
  }
];

// URLs optimizadas: w=1200, h=1500 (Relación 4:5), q=90 (Alta calidad)
export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'Rótulo 3D Plaza Arcos', category: 'Impresión', image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=90&w=1200&h=1500' },
  { id: '2', title: 'Señalética Corporativa', category: 'Impresión', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc5c2?auto=format&fit=crop&q=90&w=1200&h=1500' },
  { id: '3', title: 'Invitaciones Boda Premium', category: 'Editorial', image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=90&w=1200&h=1500' },
  { id: '4', title: 'Kit Promocional Corporativo', category: 'Merch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=90&w=1200&h=1500' },
  { id: '5', title: 'Etiquetas Vino Artesanal', category: 'Impresión', image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=90&w=1200&h=1500' },
  { id: '6', title: 'Pachones Grabados Láser', category: 'Merch', image: 'https://images.unsplash.com/photo-1602143399344-7f193bc84560?auto=format&fit=crop&q=90&w=1200&h=1500' }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-6 h-6" />,
  Printer: <Printer className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Image: <Image className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Send: <Send className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Maximize: <Maximize className="w-6 h-6" />,
  Tag: <Tag className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Gift: <Gift className="w-6 h-6" />
};
