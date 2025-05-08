import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix: string;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2000, suffix }) => {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCounting = () => {
    let i = 0;
    const increment = Math.ceil(target / (duration / 16));

    intervalRef.current = setInterval(() => {
      i += increment;
      if (i >= target) {
        i = target;
        clearInterval(intervalRef.current!);
      }
      setCount(i);
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    const el = counterRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [target, duration]);

  return (
    <div className='stat color-change' ref={counterRef}>
      {count}{suffix}
    </div>
  );
};

export default Counter;
