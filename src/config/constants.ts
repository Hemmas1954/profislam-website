// Configuration constants for the application

// Social Media Links
export const SOCIAL_LINKS = {
  YOUTUBE: 'https://youtube.com/channel/UC6EE3mhwqUsubsrx6pt3snQ',
  TELEGRAM: 'https://t.me/profislam_bac',
  WHATSAPP: 'https://wa.me/+213669703902',
  INSTAGRAM: 'https://www.instagram.com/prof_islam_/',
} as const;

// Contact Information
export const CONTACT_INFO = {
  PHONE_NUMBER: '0799999002827628485',
  CLE_NUMBER: '0028276284 CLE 85',
  WHATSAPP_CONTACT: '+213669703902',
} as const;

// Color Palette
export const COLORS = {
  // Primary Colors
  PRIMARY_BLUE: '#2563eb',
  PRIMARY_PURPLE: '#7c3aed',
  
  // Secondary Colors
  SECONDARY_GOLD: '#f59e0b',
  SECONDARY_ORANGE: '#ea580c',
  
  // Accent Colors
  ACCENT_GREEN: '#10b981',
  ACCENT_TEAL: '#14b8a6',
  ACCENT_GOLD: '#ffd700',
  
  // Text Colors
  TEXT_PRIMARY: '#1f2937',
  TEXT_SECONDARY: '#6b7280',
  TEXT_LIGHT: '#9ca3af',
  TEXT_WHITE: '#ffffff',
  TEXT_DARK: '#2d3748',
  TEXT_GRAY: '#718096',
  TEXT_SLATE: '#4a5568',
  
  // Background Colors
  BG_PRIMARY: '#ffffff',
  BG_SECONDARY: '#f9fafb',
  BG_DARK: '#111827',
  BG_LIGHT: '#f7fafc',
  BG_GRAY: '#edf2f7',
  
  // Border Colors
  BORDER_LIGHT: '#e5e7eb',
  BORDER_MEDIUM: '#d1d5db',
  BORDER_DARK: '#374151',
  BORDER_SLATE: '#e2e8f0',
  
  // Gradient Colors
  GRADIENT_BLUE: '#667eea',
  GRADIENT_PURPLE: '#764ba2',
  GRADIENT_PINK: '#f093fb',
  GRADIENT_RED: '#f5576c',
  GRADIENT_CYAN: '#4facfe',
  GRADIENT_YELLOW: '#ffed4e',
  
  // Status Colors
  SUCCESS: '#10b981',
  ERROR: '#ef4444',
  WARNING: '#f59e0b',
  INFO: '#3182ce',
} as const;

// Gradients
export const GRADIENTS = {
  PRIMARY: `linear-gradient(135deg, ${COLORS.PRIMARY_BLUE} 0%, ${COLORS.PRIMARY_PURPLE} 100%)`,
  SECONDARY: `linear-gradient(135deg, ${COLORS.SECONDARY_GOLD} 0%, ${COLORS.SECONDARY_ORANGE} 100%)`,
  ACCENT: `linear-gradient(135deg, ${COLORS.ACCENT_GREEN} 0%, ${COLORS.ACCENT_TEAL} 100%)`,
  HERO: `linear-gradient(45deg, ${COLORS.GRADIENT_BLUE} 0%, ${COLORS.GRADIENT_PURPLE} 25%, ${COLORS.GRADIENT_PINK} 50%, ${COLORS.GRADIENT_RED} 75%, ${COLORS.GRADIENT_CYAN} 100%)`,
  GOLD: `linear-gradient(135deg, ${COLORS.ACCENT_GOLD}, ${COLORS.GRADIENT_YELLOW})`,
  BACKGROUND: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`,
  CARD: `linear-gradient(145deg, ${COLORS.GRADIENT_BLUE}, ${COLORS.GRADIENT_PURPLE})`,
  RAINBOW: `linear-gradient(90deg, ${COLORS.GRADIENT_BLUE}, ${COLORS.GRADIENT_PURPLE}, ${COLORS.GRADIENT_PINK})`,
  WHATSAPP: `linear-gradient(135deg, #25d366, #128c7e)`,
} as const;

// Animation Durations
export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 1000,
  COUNT_UP: 2000,
} as const;

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE: '1200px',
} as const;

// Z-Index Layers
export const Z_INDEX = {
  BACKGROUND: -1,
  NORMAL: 1,
  DROPDOWN: 10,
  STICKY: 100,
  MODAL: 1000,
  TOOLTIP: 1100,
} as const;

// Font Families
export const FONTS = {
  PRIMARY: "'Cairo', sans-serif",
  SECONDARY: "'Amiri', serif",
  SYSTEM: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
} as const;

// External URLs
export const EXTERNAL_URLS = {
  GOOGLE_FONTS: 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;500;600;700&display=swap',
  VITE_DOCS: 'https://vite.dev/config/',
} as const;

// Application Settings
export const APP_CONFIG = {
  SCROLL_THRESHOLD: 50,
  INTERSECTION_THRESHOLD: 0.1,
  PARTICLE_COUNT: 50,
  MAX_PARTICLES: 100,
} as const;