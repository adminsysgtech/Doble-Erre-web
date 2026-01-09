
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

export const PORTFOLIO: PortfolioItem[] = [
  { 
    id: 'p1', 
    title: 'Zigzig Kids Hair Salon - Rótulo 3D Fachada', 
    category: 'Rotulación', 
    image: 'zigzig.jpg' 
  },
  { 
    id: 'p2', 
    title: 'FFG - Montaje Estructural en Altura', 
    category: 'Rotulación', 
    image: 'ffg-1.jpg' 
  },
  { 
    id: 'p3', 
    title: 'FFG - Logotipo Corporativo 3D Finalizado', 
    category: 'Rotulación', 
    image: 'ffg-2.jpg' 
  },
  { 
    id: 'p4', 
    title: 'ELA Studio - Señalética Mural Artística', 
    category: 'Rotulación', 
    image: 'ela.jpg' 
  },
  { 
    id: 'p5', 
    title: 'Vamos Guate - Rotulación Vehicular Gran Formato', 
    category: 'Rotulación', 
    image: 'bus.jpg' 
  },
  { 
    id: 'p6', 
    title: 'Babalú - Neón LED e Identidad Visual', 
    category: 'Rotulación', 
    image: 'babalu.jpg' 
  }
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
