import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const StyledCard = styled.div<{
  $hover: boolean;
  $padding: 'sm' | 'md' | 'lg';
}>`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-light);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--primary-gradient);
    transform: scaleX(0);
    transition: transform var(--transition-normal);
  }
  
  ${({ $hover }) =>
    $hover &&
    css`
      cursor: pointer;
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);
        
        &:before {
          transform: scaleX(1);
        }
      }
    `}
  
  ${({ $padding }) => {
    switch ($padding) {
      case 'sm':
        return css`
          padding: var(--spacing-md);
        `;
      case 'lg':
        return css`
          padding: var(--spacing-2xl);
        `;
      default:
        return css`
          padding: var(--spacing-xl);
        `;
    }
  }}
  
  @media (max-width: 768px) {
    ${({ $padding }) => {
      switch ($padding) {
        case 'sm':
          return css`
            padding: var(--spacing-sm);
          `;
        case 'lg':
          return css`
            padding: var(--spacing-xl);
          `;
        default:
          return css`
            padding: var(--spacing-lg);
          `;
      }
    }}
  }
`;

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = 'md',
  ...props
}) => {
  return (
    <StyledCard
      $hover={hover}
      $padding={padding}
      className={className}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;