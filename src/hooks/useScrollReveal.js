import { useEffect } from 'react';

export const useScrollReveal = (options = {}) => {
  useEffect(() => {
    const defaultOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, defaultOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options]);
};
