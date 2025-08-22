// Performance optimization utilities

/**
 * Debounce function to limit the rate of function execution
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function to limit function execution frequency
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Lazy loading utility for images
 * @param imageElement - Image element to lazy load
 * @param src - Image source URL
 * @param placeholder - Placeholder image URL
 */
export const lazyLoadImage = (
  imageElement: HTMLImageElement,
  src: string,
  placeholder?: string
): void => {
  if (placeholder) {
    imageElement.src = placeholder;
  }
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = src;
          img.onload = () => {
            img.classList.add('loaded');
          };
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  observer.observe(imageElement);
};

/**
 * Preload critical resources
 * @param urls - Array of URLs to preload
 * @param type - Resource type ('image', 'script', 'style')
 */
export const preloadResources = (
  urls: string[],
  type: 'image' | 'script' | 'style' = 'image'
): void => {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    
    switch (type) {
      case 'image':
        link.as = 'image';
        break;
      case 'script':
        link.as = 'script';
        break;
      case 'style':
        link.as = 'style';
        break;
    }
    
    document.head.appendChild(link);
  });
};

/**
 * Memory-efficient event listener manager
 */
export class EventManager {
  private listeners: Map<string, Set<EventListener>> = new Map();
  
  /**
   * Add event listener with automatic cleanup
   * @param element - Target element
   * @param event - Event type
   * @param listener - Event listener function
   * @param options - Event listener options
   */
  addEventListener(
    element: EventTarget,
    event: string,
    listener: EventListener,
    options?: AddEventListenerOptions
  ): () => void {
    element.addEventListener(event, listener, options);
    
    const key = `${event}_${element.constructor.name}`;
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set());
    }
    this.listeners.get(key)!.add(listener);
    
    // Return cleanup function
    return () => {
      element.removeEventListener(event, listener, options);
      this.listeners.get(key)?.delete(listener);
    };
  }
  
  /**
   * Remove all event listeners
   */
  cleanup(): void {
    this.listeners.clear();
  }
}

/**
 * Optimize scroll performance
 * @param callback - Scroll callback function
 * @param delay - Throttle delay in milliseconds
 * @returns Cleanup function
 */
export const optimizedScroll = (
  callback: (scrollY: number) => void,
  delay: number = 16
): (() => void) => {
  const throttledCallback = throttle(callback, delay);
  
  const handleScroll = () => {
    throttledCallback(window.scrollY);
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * Optimize resize performance
 * @param callback - Resize callback function
 * @param delay - Debounce delay in milliseconds
 * @returns Cleanup function
 */
export const optimizedResize = (
  callback: (width: number, height: number) => void,
  delay: number = 250
): (() => void) => {
  const debouncedCallback = debounce(callback, delay);
  
  const handleResize = () => {
    debouncedCallback(window.innerWidth, window.innerHeight);
  };
  
  window.addEventListener('resize', handleResize, { passive: true });
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
};

/**
 * Check if user prefers reduced motion
 * @returns True if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get device performance tier
 * @returns Performance tier ('high', 'medium', 'low')
 */
export const getPerformanceTier = (): 'high' | 'medium' | 'low' => {
  // Check for hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 1;
  
  // Check for device memory (if available)
  const memory = (navigator as any).deviceMemory || 1;
  
  // Check for connection speed
  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType || '4g';
  
  if (cores >= 8 && memory >= 8 && effectiveType === '4g') {
    return 'high';
  } else if (cores >= 4 && memory >= 4) {
    return 'medium';
  } else {
    return 'low';
  }
};

/**
 * Simple cache implementation for expensive operations
 */
export class SimpleCache<T> {
  private cache: Map<string, { value: T; timestamp: number }> = new Map();
  private ttl: number;
  
  constructor(ttlMs: number = 300000) { // 5 minutes default
    this.ttl = ttlMs;
  }
  
  /**
   * Get value from cache
   * @param key - Cache key
   * @returns Cached value or undefined
   */
  get(key: string): T | undefined {
    const item = this.cache.get(key);
    
    if (!item) {
      return undefined;
    }
    
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return undefined;
    }
    
    return item.value;
  }
  
  /**
   * Set value in cache
   * @param key - Cache key
   * @param value - Value to cache
   */
  set(key: string, value: T): void {
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }
  
  /**
   * Clear cache
   */
  clear(): void {
    this.cache.clear();
  }
}