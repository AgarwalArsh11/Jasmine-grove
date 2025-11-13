import { useEffect, useRef, useState } from 'react';

/**
 * useIntersectionObserver
 * Returns [ref, isVisible] for simple reveal-on-scroll animations.
 */
export function useIntersectionObserver(options = { root: null, rootMargin: '0px', threshold: 0.12 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // If you want the animation only once, unobserve immediately
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isVisible];
}

/**
 * useScrollAnimation
 * Small hook to return scrollY fraction for parallax transforms.
 */
export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handle = () => {
      setScrollY(window.scrollY || 0);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return scrollY;
}
