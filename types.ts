
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'design' | 'print' | 'merch';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type LeadStatus = 'recibida' | 'proceso' | 'aprobada' | 'no_aceptada';

export interface BudgetRequest {
  id: string;
  date: string;
  status: LeadStatus;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  quantity: string;
  description: string;
  nit?: string;
}
