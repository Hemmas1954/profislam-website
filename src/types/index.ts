// Type definitions for the profislam Educational Website

export interface Student {
  id: string;
  name: string;
  grade: string;
  result: string;
  testimonial: string;
  rating: number;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  grade: string;
  price: number;
  schedule: string;
  duration: string;
  studentsCount: number;
  successRate: number;
  features: string[];
  isPopular?: boolean;
  isAdvanced?: boolean;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  downloadLink: string;
  rating: number;
  downloadCount: number;
  isComingSoon?: boolean;
  category: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  stats: {
    value: string;
    label: string;
  }[];
  link?: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  grade: string;
  result: string;
  testimonial: string;
  rating: number;
  avatar?: string;
  date: string;
}

export interface ContactInfo {
  whatsapp: string;
  telegram: string;
  youtube: string;
  instagram?: string;
  email?: string;
}

export interface PaymentMethod {
  id: string;
  type: 'baridi_mob' | 'bank_account';
  label: string;
  number: string;
  beneficiary?: string;
  location?: string;
}

export interface Stats {
  successfulStudents: number;
  successRate: number;
  satisfiedStudents: number;
  averageGrade: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year?: string;
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

export interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  duration?: number;
  delay?: number;
  threshold?: number;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  grade: string;
  message: string;
}

export interface RegistrationFormData {
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  grade: string;
  courseId: string;
  preferredSchedule: string;
  notes?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Theme Types
export interface ThemeConfig {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

// Language Types
export type Language = 'ar' | 'en';

export interface LanguageConfig {
  current: Language;
  available: Language[];
  rtl: boolean;
}

// SEO Types
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  image?: string;
  url?: string;
}

// Error Types
export interface ErrorInfo {
  message: string;
  code?: string | number;
  details?: any;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Event Types
export interface CustomEvent<T = any> {
  type: string;
  payload?: T;
  timestamp: number;
}

// Media Types
export interface MediaQuery {
  mobile: string;
  tablet: string;
  desktop: string;
  largeDesktop: string;
}

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  placeholder?: string;
}

// Performance Types
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

// Analytics Types
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export interface UserInteraction {
  type: 'click' | 'scroll' | 'hover' | 'focus';
  element: string;
  timestamp: number;
  metadata?: Record<string, any>;
}