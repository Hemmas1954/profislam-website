import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';
import { Button } from '../ui';
import { SOCIAL_LINKS, APP_CONFIG } from '../../config/constants';
import { optimizedScroll } from '../../utils/performance';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  transition: all var(--transition-normal);
  
  ${({ $isScrolled }) =>
    $isScrolled
      ? css`
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-md);
          border-bottom: 1px solid var(--border-light);
        `
      : css`
          background: transparent;
        `}
  
  @media (max-width: 480px) {
    backdrop-filter: blur(8px);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
  gap: 2rem;
  
  @media (min-width: 1536px) {
    max-width: 1800px;
    gap: 3rem;
    padding: var(--spacing-md) 4rem;
  }
  
  @media (min-width: 1400px) {
    gap: 2.5rem;
    max-width: 1600px;
    padding: var(--spacing-md) 3rem;
  }
  
  @media (max-width: 1200px) {
    max-width: 1000px;
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-md);
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-sm) var(--spacing-md);
    gap: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: 'Amiri', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  cursor: pointer;
  
  .icon {
    font-size: clamp(1.8rem, 3vw, 2rem);
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    
    .main {
      font-size: clamp(1rem, 2.2vw, 1.25rem);
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .sub {
      font-size: clamp(0.65rem, 1.5vw, 0.75rem);
      color: var(--text-secondary);
      font-family: 'Cairo', sans-serif;
      font-weight: 400;
    }
  }
  
  @media (min-width: 1400px) {
    font-size: 1.8rem;
    
    .icon {
      font-size: 2.2rem;
    }
    
    .text .main {
      font-size: 1.4rem;
    }
    
    .text .sub {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 480px) {
    gap: var(--spacing-xs);
    
    .text .main {
      font-size: 1rem;
    }
    
    .text .sub {
      font-size: 0.65rem;
    }
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  font-family: 'Cairo', sans-serif;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  position: relative;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary-gradient);
    transition: all var(--transition-normal);
    transform: translateX(-50%);
  }
  
  &:hover {
    color: var(--primary-blue);
    transform: translateY(-2px);
    
    &:before {
      width: 80%;
    }
  }
  
  @media (min-width: 1400px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.4rem 0;
  }
  
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: var(--primary-blue);
      
      &:before {
        width: 80%;
      }
    `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--bg-secondary);
    color: var(--primary-blue);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 1024px) {
    display: block;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 0.4rem;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(226, 232, 240, 0.3);
  z-index: var(--z-modal);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-xl);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  
  @media (min-width: 1025px) {
    display: none;
  }
  
  @media (max-width: 480px) {
    width: 280px;
    padding: var(--spacing-lg);
  }
  
  @media (max-width: 360px) {
    width: 100vw;
    right: 0;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-light);
  
  @media (max-width: 480px) {
    margin-bottom: var(--spacing-xl);
    padding-bottom: var(--spacing-md);
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-2xl);
  flex: 1;
  
  @media (max-width: 480px) {
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-xl);
  }
`;

const MobileNavLink = styled.a`
  font-family: 'Cairo', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: right;
  display: block;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: right 0.6s;
  }
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-blue) 0%, #764ba2 100%);
    color: white;
    transform: translateX(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    
    &::before {
      right: 100%;
    }
  }
  
  &:active {
    transform: translateX(-3px) scale(0.98);
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;

const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: auto;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-light);
  
  @media (max-width: 480px) {
    padding-top: var(--spacing-md);
  }
`;

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'الرئيسية', href: '#hero' },
  { id: 'features', label: 'المميزات', href: '#features' },
  { id: 'books', label: 'الكتب والملخصات', href: '#books' },
  { id: 'educational-content', label: 'المحتوى التعليمي', href: '#educational-content' },
  { id: 'testimonials', label: 'آراء الطلاب', href: '#testimonials' },
  { id: 'registration', label: 'التسجيل', href: '#registration' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const cleanup = optimizedScroll((scrollY) => {
      setIsScrolled(scrollY > APP_CONFIG.SCROLL_THRESHOLD);
    });
    
    return cleanup;
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Nav>
        <Logo onClick={() => handleNavClick('#hero', 'home')}>
          <FaGraduationCap className="icon" />
          <div className="text">
            <div className="main">الأستاذ إسلام هماس</div>
            <div className="sub">أستاذ اللغة العربية</div>
          </div>
        </Logo>

        <DesktopNav>
          <NavLinks>
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                $isActive={activeSection === item.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.id);
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
        </DesktopNav>

        <MobileMenuButton
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                zIndex: 'var(--z-overlay)',
                backdropFilter: 'blur(4px)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenu
              initial={{ opacity: 0, x: 320 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 320 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
              onClick={(e) => e.stopPropagation()}
            >
            <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ 
                 delay: 0.1,
                 type: 'spring',
                 stiffness: 300,
                 damping: 25
               }}
             >
               <MobileMenuHeader>
                 <Logo onClick={() => handleNavClick('#hero', 'home')}>
                   <FaGraduationCap className="icon" />
                   <div className="text">
                     <div className="main">الأستاذ إسلام هماس</div>
                     <div className="sub">أستاذ اللغة العربية</div>
                   </div>
                 </Logo>
                 
                 <MobileMenuButton
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   <FaTimes />
                 </MobileMenuButton>
               </MobileMenuHeader>
             </motion.div>

            <MobileNavLinks>
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1 + 0.2,
                    type: 'spring',
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MobileNavLink
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.id);
                    }}
                  >
                    {item.label}
                  </MobileNavLink>
                </motion.div>
              ))}
            </MobileNavLinks>

            <MobileActions>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: navigationItems.length * 0.1 + 0.4,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  href={SOCIAL_LINKS.WHATSAPP}
                  isExternal
                >
                  تواصل عبر الواتساب
                </Button>
              </motion.div>
            </MobileActions>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;