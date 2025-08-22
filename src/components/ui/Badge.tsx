import React from 'react';
import styled, { css } from 'styled-components';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
  style?: React.CSSProperties;
}

const StyledBadge = styled.span<{
  $variant: 'primary' | 'secondary' | 'success' | 'warning';
  $size: 'sm' | 'md';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cairo', sans-serif;
  font-weight: 500;
  border-radius: var(--radius-lg);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.8s;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          padding: var(--spacing-xs) var(--spacing-sm);
          font-size: 0.75rem;
          min-height: 24px;
        `;
      default:
        return css`
          padding: var(--spacing-sm) var(--spacing-md);
          font-size: 0.875rem;
          min-height: 32px;
        `;
    }
  }}
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: var(--primary-gradient);
          color: var(--text-white);
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
        `;
      case 'secondary':
        return css`
          background: var(--secondary-gradient);
          color: var(--text-white);
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        `;
      case 'success':
        return css`
          background: var(--accent-gradient);
          color: var(--text-white);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        `;
      case 'warning':
        return css`
          background: linear-gradient(135deg, #f59e0b 0%, #dc2626 100%);
          color: var(--text-white);
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        `;
      default:
        return css`
          background: var(--primary-gradient);
          color: var(--text-white);
        `;
    }
  }}
`;

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  return (
    <StyledBadge
      $variant={variant}
      $size={size}
      className={className}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge;