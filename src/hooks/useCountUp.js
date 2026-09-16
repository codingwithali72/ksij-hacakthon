import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end, duration = 2000, triggerRef) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!triggerRef.current || animatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          
          const endValue = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, ''), 10) : end;
          const startTime = Date.now();
          
          const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
          
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easedProgress = easeOutCubic(progress);
            
            setCount(Math.floor(easedProgress * endValue));
            
            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            }
          };
          
          frameRef.current = requestAnimationFrame(animate);
          
          // Disconnect observer once animated
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );
    
    observer.observe(triggerRef.current);
    
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, triggerRef]);

  return count;
};
