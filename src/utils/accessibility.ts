// Accessibility utilities and helpers

/**
 * Focus management utilities
 */
export class FocusManager {
  private focusableElements: string = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable]',
    'audio[controls]',
    'video[controls]',
    'iframe',
    'embed',
    'object',
    'summary'
  ].join(',');

  /**
   * Get all focusable elements within a container
   * @param container - Container element
   * @returns Array of focusable elements
   */
  getFocusableElements(container: Element): HTMLElement[] {
    return Array.from(
      container.querySelectorAll(this.focusableElements)
    ) as HTMLElement[];
  }

  /**
   * Trap focus within a container (useful for modals)
   * @param container - Container element
   * @returns Cleanup function
   */
  trapFocus(container: Element): () => void {
    const focusableElements = this.getFocusableElements(container);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: Event) => {
      const keyboardEvent = e as KeyboardEvent;
      if (keyboardEvent.key !== 'Tab') return;

      if (keyboardEvent.shiftKey) {
        if (document.activeElement === firstElement) {
          keyboardEvent.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          keyboardEvent.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }

  /**
   * Save and restore focus
   * @returns Object with restore function
   */
  saveFocus(): { restore: () => void } {
    const activeElement = document.activeElement as HTMLElement;
    
    return {
      restore: () => {
        if (activeElement && typeof activeElement.focus === 'function') {
          activeElement.focus();
        }
      }
    };
  }
}

/**
 * Screen reader utilities
 */
export class ScreenReaderUtils {
  private announceElement: HTMLElement | null = null;

  constructor() {
    this.createAnnounceElement();
  }

  /**
   * Create invisible element for screen reader announcements
   */
  private createAnnounceElement(): void {
    this.announceElement = document.createElement('div');
    this.announceElement.setAttribute('aria-live', 'polite');
    this.announceElement.setAttribute('aria-atomic', 'true');
    this.announceElement.style.position = 'absolute';
    this.announceElement.style.left = '-10000px';
    this.announceElement.style.width = '1px';
    this.announceElement.style.height = '1px';
    this.announceElement.style.overflow = 'hidden';
    document.body.appendChild(this.announceElement);
  }

  /**
   * Announce message to screen readers
   * @param message - Message to announce
   * @param priority - Announcement priority ('polite' or 'assertive')
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.announceElement) {
      this.createAnnounceElement();
    }

    if (this.announceElement) {
      this.announceElement.setAttribute('aria-live', priority);
      this.announceElement.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        if (this.announceElement) {
          this.announceElement.textContent = '';
        }
      }, 1000);
    }
  }
}

/**
 * Keyboard navigation utilities
 */
export const KeyboardUtils = {
  /**
   * Handle arrow key navigation for lists
   * @param event - Keyboard event
   * @param items - Array of navigable items
   * @param currentIndex - Current focused item index
   * @param onNavigate - Callback when navigation occurs
   */
  handleArrowNavigation(
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    onNavigate: (newIndex: number) => void
  ): void {
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = items.length - 1;
        break;
      default:
        return;
    }

    onNavigate(newIndex);
    items[newIndex]?.focus();
  },

  /**
   * Handle escape key to close modals/dropdowns
   * @param event - Keyboard event
   * @param onEscape - Callback when escape is pressed
   */
  handleEscape(event: KeyboardEvent, onEscape: () => void): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      onEscape();
    }
  },

  /**
   * Handle enter/space key for button-like elements
   * @param event - Keyboard event
   * @param onActivate - Callback when activated
   */
  handleActivation(event: KeyboardEvent, onActivate: () => void): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  }
};

/**
 * Color contrast utilities
 */
export const ColorUtils = {
  /**
   * Calculate relative luminance of a color
   * @param color - Hex color string
   * @returns Relative luminance value
   */
  getLuminance(color: string): number {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    const [rs, gs, bs] = [r, g, b].map(c => {
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  },

  /**
   * Calculate contrast ratio between two colors
   * @param color1 - First color (hex)
   * @param color2 - Second color (hex)
   * @returns Contrast ratio
   */
  getContrastRatio(color1: string, color2: string): number {
    const lum1 = this.getLuminance(color1);
    const lum2 = this.getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  },

  /**
   * Check if color combination meets WCAG contrast requirements
   * @param foreground - Foreground color (hex)
   * @param background - Background color (hex)
   * @param level - WCAG level ('AA' or 'AAA')
   * @param size - Text size ('normal' or 'large')
   * @returns True if contrast is sufficient
   */
  meetsContrastRequirement(
    foreground: string,
    background: string,
    level: 'AA' | 'AAA' = 'AA',
    size: 'normal' | 'large' = 'normal'
  ): boolean {
    const ratio = this.getContrastRatio(foreground, background);
    
    if (level === 'AAA') {
      return size === 'large' ? ratio >= 4.5 : ratio >= 7;
    } else {
      return size === 'large' ? ratio >= 3 : ratio >= 4.5;
    }
  }
};

/**
 * ARIA utilities
 */
export const AriaUtils = {
  /**
   * Generate unique ID for ARIA relationships
   * @param prefix - ID prefix
   * @returns Unique ID
   */
  generateId(prefix: string = 'aria'): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  /**
   * Set up ARIA relationship between elements
   * @param trigger - Trigger element
   * @param target - Target element
   * @param relationship - ARIA relationship type
   */
  setRelationship(
    trigger: HTMLElement,
    target: HTMLElement,
    relationship: 'describedby' | 'labelledby' | 'controls' | 'owns'
  ): void {
    if (!target.id) {
      target.id = this.generateId();
    }
    
    const attribute = `aria-${relationship}`;
    const existingValue = trigger.getAttribute(attribute);
    
    if (existingValue) {
      trigger.setAttribute(attribute, `${existingValue} ${target.id}`);
    } else {
      trigger.setAttribute(attribute, target.id);
    }
  },

  /**
   * Update ARIA live region
   * @param element - Live region element
   * @param message - Message to announce
   * @param priority - Live region priority
   */
  updateLiveRegion(
    element: HTMLElement,
    message: string,
    priority: 'polite' | 'assertive' = 'polite'
  ): void {
    element.setAttribute('aria-live', priority);
    element.textContent = message;
  }
};

// Global instances
export const focusManager = new FocusManager();
export const screenReader = new ScreenReaderUtils();