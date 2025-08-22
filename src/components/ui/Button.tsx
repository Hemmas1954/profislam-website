import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'large';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
}

const StyledButton = styled.button<{
  $variant: 'primary' | 'secondary' | 'outline';
  $size: 'sm' | 'md' | 'lg' | 'large';
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  border: none;
  border-radius: var(--radius-lg);
  font-family: 'Cairo', sans-serif;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-normal);
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          padding: var(--spacing-xs) var(--spacing-md);
          font-size: 0.875rem;
          min-height: 36px;
        `;
      case 'lg':
      case 'large':
        return css`
          padding: var(--spacing-md) var(--spacing-xl);
          font-size: 1.125rem;
          min-height: 52px;
        `;
      default:
        return css`
          padding: var(--spacing-sm) var(--spacing-lg);
          font-size: 1rem;
          min-height: 44px;
        `;
    }
  }}
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: var(--primary-gradient);
          color: var(--text-white);
          box-shadow: var(--shadow-md);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case 'secondary':
        return css`
          background: var(--secondary-gradient);
          color: var(--text-white);
          box-shadow: var(--shadow-md);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          color: var(--primary-blue);
          border: 2px solid var(--primary-blue);
          
          &:hover {
            background: var(--primary-blue);
            color: var(--text-white);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      default:
        return css`
          background: var(--primary-gradient);
          color: var(--text-white);
        `;
    }
  }}
  
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      
      &:hover {
        transform: none !important;
        box-shadow: var(--shadow-md) !important;
      }
      
      &:before {
        display: none;
      }
    `}
`;

const StyledLink = styled.a<{
  $variant: 'primary' | 'secondary' | 'outline';
  $size: 'sm' | 'md' | 'lg' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  border: none;
  border-radius: var(--radius-lg);
  font-family: 'Cairo', sans-serif;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-normal);
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          padding: var(--spacing-xs) var(--spacing-md);
          font-size: 0.875rem;
          min-height: 36px;
        `;
      case 'lg':
      case 'large':
        return css`
          padding: var(--spacing-md) var(--spacing-xl);
          font-size: 1.125rem;
          min-height: 52px;
        `;
      default:
        return css`
          padding: var(--spacing-sm) var(--spacing-lg);
          font-size: 1rem;
          min-height: 44px;
        `;
    }
  }}
  
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: var(--primary-gradient);
          color: var(--text-white);
          box-shadow: var(--shadow-md);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case 'secondary':
        return css`
          background: var(--secondary-gradient);
          color: var(--text-white);
          box-shadow: var(--shadow-md);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          color: var(--primary-blue);
          border: 2px solid var(--primary-blue);
          
          &:hover {
            background: var(--primary-blue);
            color: var(--text-white);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      default:
        return css`
          background: var(--primary-gradient);
          color: var(--text-white);
        `;
    }
  }}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  disabled = false,
  className,
  icon,
  isExternal = false,
  ...props
}) => {
  const buttonContent = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <StyledLink
        href={href}
        $variant={variant}
        $size={size}
        className={className}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {buttonContent}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $disabled={disabled}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {buttonContent}
    </StyledButton>
  );
};

export default Button;