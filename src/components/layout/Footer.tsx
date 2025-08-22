import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaTelegram, FaWhatsapp, FaInstagram, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { Button } from '../ui';
import { GRADIENTS, SOCIAL_LINKS } from '../../config/constants';

const FooterContainer = styled.footer`
  background: ${GRADIENTS.PRIMARY};
  color: var(--text-white);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  margin-top: var(--spacing-3xl);
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  
  @media (min-width: 1536px) {
    max-width: 1800px;
    padding: 0 4rem;
  }
  
  @media (min-width: 1400px) {
    max-width: 1600px;
    padding: 0 3rem;
  }
  
  @media (max-width: 1200px) {
    max-width: 1000px;
  }
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-md);
  }
  
  @media (max-width: 480px) {
    padding: 0 0.8rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  
  @media (min-width: 1400px) {
    gap: var(--spacing-lg);
  }
`;

const FooterTitle = styled.h3`
  font-family: 'Amiri', serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 1400px) {
    font-size: 1.6rem;
  }
`;

const FooterText = styled.p`
  font-family: 'Cairo', sans-serif;
  line-height: 1.6;
  color: #d1d5db;
  margin-bottom: var(--spacing-md);
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  
  @media (min-width: 1400px) {
    font-size: 1.1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  flex-wrap: wrap;
  
  @media (min-width: 1400px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(40px, 5vw, 48px);
  height: clamp(40px, 5vw, 48px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  color: var(--text-white);
  text-decoration: none;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-4px) scale(1.1);
    background: var(--primary-gradient);
    box-shadow: var(--shadow-lg);
  }
  
  .icon {
    font-size: clamp(1.1rem, 1.5vw, 1.25rem);
  }
  
  @media (min-width: 1400px) {
    width: 52px;
    height: 52px;
    
    .icon {
      font-size: 1.4rem;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: 'Cairo', sans-serif;
  color: #d1d5db;
  
  .icon {
    color: var(--secondary-gold);
    font-size: 1.1rem;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const QuickLink = styled.a`
  font-family: 'Cairo', sans-serif;
  color: #d1d5db;
  text-decoration: none;
  padding: var(--spacing-xs) 0;
  transition: all var(--transition-normal);
  position: relative;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  
  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 2px;
    background: var(--secondary-gradient);
    transition: width var(--transition-normal);
    transform: translateY(-50%);
  }
  
  &:hover {
    color: var(--text-white);
    padding-right: var(--spacing-md);
    
    &:before {
      width: var(--spacing-sm);
    }
  }
  
  @media (min-width: 1400px) {
    font-size: 1.1rem;
    padding: 0.3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 0.2rem 0;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const NewsletterInput = styled.input`
  padding: var(--spacing-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-white);
  font-family: 'Cairo', sans-serif;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-family: 'Cairo', sans-serif;
  color: #9ca3af;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: clamp(0.8rem, 1.1vw, 0.9rem);
  
  .heart {
    color: #ef4444;
    animation: heartbeat 2s ease-in-out infinite;
  }
  
  @keyframes heartbeat {
    0%, 50%, 100% {
      transform: scale(1);
    }
    25%, 75% {
      transform: scale(1.1);
    }
  }
  
  @media (min-width: 1400px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    line-height: 1.5;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  .icon {
    font-size: 2rem;
    background: var(--secondary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .text {
    font-family: 'Amiri', serif;
    font-size: 1.25rem;
    font-weight: 700;
    background: var(--secondary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('شكراً لاشتراكك! سنتواصل معك قريباً.');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterTitle>الأستاذ إسلام هماس</FooterTitle>
            <FooterText>
              خريج المدرسة العليا للأستاذة في مادة اللغة العربية، متخصص في تدريس طلاب البكالوريا 
              مع خبرة واسعة في تحقيق أفضل النتائج الأكاديمية.
            </FooterText>
            
            <SocialLinks>
              <SocialLink 
                href={SOCIAL_LINKS.YOUTUBE} 
                target="_blank" 
                rel="noopener noreferrer"
                title="قناة اليوتيوب"
              >
                <FaYoutube className="icon" />
              </SocialLink>
              
              <SocialLink 
                href={SOCIAL_LINKS.TELEGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                title="قناة التليغرام"
              >
                <FaTelegram className="icon" />
              </SocialLink>
              
              <SocialLink 
                href={SOCIAL_LINKS.WHATSAPP} 
                target="_blank" 
                rel="noopener noreferrer"
                title="الواتساب"
              >
                <FaWhatsapp className="icon" />
              </SocialLink>
              
              <SocialLink 
                href={SOCIAL_LINKS.INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                title="الانستقرام"
              >
                <FaInstagram className="icon" />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>روابط سريعة</FooterTitle>
            <QuickLinks>
              <QuickLink href="#home">الرئيسية</QuickLink>
              <QuickLink href="#lessons">الدروس</QuickLink>
              <QuickLink href="#books">الكتب والملخصات</QuickLink>
              <QuickLink href="#private-lessons">الدروس الخصوصية</QuickLink>
              <QuickLink href="#testimonials">آراء الطلاب</QuickLink>
              <QuickLink href="#contact">التواصل</QuickLink>
            </QuickLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>معلومات التواصل</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <FaWhatsapp className="icon" />
                <span dir="ltr">06.69.70.39.02</span>
              </ContactItem>
              
              <ContactItem>
                <FaTelegram className="icon" />
                <span>@profislam_bac</span>
              </ContactItem>
              
              <ContactItem>
                <FaYoutube className="icon" />
                <span>الأستاذ إسلام هماس</span>
              </ContactItem>
            </ContactInfo>
            
            <FooterText style={{ marginTop: 'var(--spacing-md)' }}>
              <strong>أوقات الدروس:</strong><br />
              الجمعة: 4:00 - 6:00 مساءً<br />
              السبت: 6:00 - 8:00 مساءً
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>اشترك في النشرة</FooterTitle>
            <FooterText>
              احصل على آخر الأخبار والدروس والملخصات مباشرة في بريدك الإلكتروني.
            </FooterText>
            
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
              <Button 
                variant="secondary" 
                size="md"
                type="submit"
              >
                اشتراك
              </Button>
            </NewsletterForm>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <FooterLogo>
            <FaGraduationCap className="icon" />
            <span className="text">الأستاذ إسلام هماس</span>
          </FooterLogo>
          
          <Copyright>
            <span>© 2024 جميع الحقوق محفوظة - صُنع بـ</span>
            <FaHeart className="heart" />
            <span>للتعليم المتميز</span>
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;