import React, { useState, useEffect, useRef } from 'react';
import { APP_CONFIG, ANIMATION } from '../../config/constants';
import styled from 'styled-components';

interface StatsProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  color?: string;
}

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-xs);
`;

const StatsValue = styled.div<{ $color?: string }>`
  font-size: 2.5rem;
  font-weight: 700;
  ${props => props.$color === 'white' ? `
    color: white;
  ` : `
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatsLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  font-family: 'Cairo', sans-serif;
`;

const useCountUp = (end: number, duration: number = ANIMATION.COUNT_UP) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: APP_CONFIG.INTERSECTION_THRESHOLD }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return { count, ref };
};

const Stats: React.FC<StatsProps> = ({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
  color,
}) => {
  const { count, ref } = useCountUp(value, duration);

  return (
    <StatsContainer ref={ref} className={className}>
      <StatsValue $color={color}>
        {prefix}{count}{suffix}
      </StatsValue>
      <StatsLabel>{label}</StatsLabel>
    </StatsContainer>
  );
};

export default Stats;