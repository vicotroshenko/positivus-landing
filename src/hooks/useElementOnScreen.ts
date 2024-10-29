import { useEffect, useRef, useState } from 'react';

export const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const container = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  });

  return [containerRef, isVisible];
};
