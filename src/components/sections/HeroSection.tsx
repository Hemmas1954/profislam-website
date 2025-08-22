import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaGraduationCap, FaBook, FaPen, FaStar, FaCertificate, FaTrophy } from 'react-icons/fa';
import { Button, Badge, Stats } from '../ui';
import { COLORS, GRADIENTS, SOCIAL_LINKS, APP_CONFIG } from '../../config/constants';
import { prefersReducedMotion } from '../../utils/performance';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
`;

const particles = keyframes`
  0% { transform: translateY(0px) translateX(0px); opacity: 1; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(74, 144, 226, 0.3); }
  50% { box-shadow: 0 0 40px rgba(74, 144, 226, 0.6), 0 0 60px rgba(74, 144, 226, 0.4); }
`;

// Styled Components
const HeroContainer = styled.section`
  min-height: 100vh;
  background: ${GRADIENTS.HERO};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  direction: rtl;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Particle = styled.div<{ delay: number; size: number; left: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  left: ${props => props.left}%;
  animation: ${particles} ${8 + Math.random() * 4}s linear infinite;
  animation-delay: ${props => props.delay}s;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.3;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;
  min-height: 80vh;
  
  @media (min-width: 1536px) {
    max-width: 1400px;
    gap: 4rem;
    padding: 0 2rem;
  }
  
  @media (min-width: 1280px) and (max-width: 1535px) {
    max-width: 1300px;
    gap: 3.5rem;
    padding: 0 2rem;
  }
  
  @media (max-width: 1200px) {
    max-width: 1000px;
    gap: 2.5rem;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    min-height: 70vh;
  }
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 1.5rem;
    min-height: 60vh;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.75rem;
    gap: 1rem;
  }
`;

const TextContent = styled.div`
  color: white;
`;

const StyledBadge = styled(Badge)`
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  svg {
    font-size: 1rem;
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${COLORS.BG_PRIMARY}, #f0f8ff, #e6f3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  font-family: 'Amiri', serif;
  
  @media (min-width: 1400px) {
    font-size: 4rem;
  }
  
  @media (min-width: 1536px) {
    font-size: 4.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.3;
  }
`;

const SubTitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  font-family: 'Cairo', sans-serif;
`;

const Description = styled(motion.p)`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  font-family: 'Cairo', sans-serif;
  
  @media (min-width: 1400px) {
    font-size: 1.2rem;
    max-width: 600px;
  }
  
  @media (min-width: 1536px) {
    font-size: 1.4rem;
    max-width: 700px;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 2rem;
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 300px;
  }
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  
  @media (min-width: 1400px) {
    gap: 3rem;
  }
  
  @media (max-width: 968px) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (min-width: 1400px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 968px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    
    > * {
      width: 100%;
      max-width: 280px;
    }
  }
`;

const VisualSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 1400px) {
    padding: 2rem;
  }
  
  @media (max-width: 968px) {
    order: -1;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${glow} 3s ease-in-out infinite;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    box-shadow: 0 0 20px rgba(74, 144, 226, 0.3);
  }
  
  @media (min-width: 1400px) {
    width: 380px;
    height: 380px;
  }
  
  @media (max-width: 1200px) {
    width: 280px;
    height: 280px;
  }
  
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const FloatingIcon = styled(motion.div)<{ top: string; left: string; delay: number }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const AchievementCard = styled(motion.div)<{ top: string; right: string }>`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  min-width: 140px;
  animation: ${pulse} 2s ease-in-out infinite;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.8rem;
    min-width: 120px;
  }
  
  svg {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: ${COLORS.ACCENT_GOLD};
  }
`;



const HeroSection: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; size: number; left: number }>>([]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setParticles([]);
      return;
    }
    
    const particleArray = Array.from({ length: APP_CONFIG.PARTICLE_COUNT }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      size: 4 + Math.random() * 8,
      left: Math.random() * 100
    }));
    setParticles(particleArray);
  }, []);



  return (
    <HeroContainer id="hero">
      <ParticlesContainer>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            delay={particle.delay}
            size={particle.size}
            left={particle.left}
          />
        ))}
      </ParticlesContainer>
      
      <ContentWrapper>
        <TextContent>
          <StyledBadge variant="primary">
            <FaCertificate />
            أستاذ معتمد
          </StyledBadge>
          
          <MainTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            الأستاذ إسلام هماس
          </MainTitle>
          
          <SubTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            خريج المدرسة العليا للأستاذة في مادة اللغة العربية
          </SubTitle>
          
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            رحلة تعليمية متميزة في اللغة العربية للثانوية العامة والباكالوريا مع كفاءة وخبرة كبيرة
          </Description>
          
          <StatsContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Stats value={90} suffix="+" label="طالب متفوق" />
            <Stats value={98} suffix="%" label="نسبة النجاح" />
            <Stats value={85} suffix="+" label="طالب راضي" />
          </StatsContainer>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="large" variant="primary">
              ابدأ رحلة التعلم
            </Button>
            <Button 
              size="large" 
              variant="secondary"
              href={SOCIAL_LINKS.YOUTUBE}
              target="_blank"
            >
              <FaPlay style={{ marginLeft: '0.5rem' }} />
              قناة اليوتيوب
            </Button>
            <Button size="large" variant="outline">
              دروس خصوصية
            </Button>
          </ButtonGroup>
        </TextContent>
        
        <VisualSection>
          <ProfileImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ProfileImage src="/src/assets/images/1.png" alt="الأستاذ إسلام هماس" />
          </ProfileImageContainer>
          
          <FloatingIcon
            top="10%"
            left="10%"
            delay={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <FaBook />
          </FloatingIcon>
          
          <FloatingIcon
            top="20%"
            left="80%"
            delay={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <FaPen />
          </FloatingIcon>
          
          <FloatingIcon
            top="70%"
            left="15%"
            delay={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <FaGraduationCap />
          </FloatingIcon>
          
          <FloatingIcon
            top="80%"
            left="75%"
            delay={0.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <FaStar />
          </FloatingIcon>
          
          <AchievementCard
            top="15%"
            right="-10%"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <FaTrophy />
            <div>أفضل أستاذ</div>
            <div>لعام 2024</div>
          </AchievementCard>
          
          <AchievementCard
            top="60%"
            right="-15%"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <FaCertificate />
            <div>شهادة التميز</div>
            <div>في التدريس</div>
          </AchievementCard>
        </VisualSection>
      </ContentWrapper>
      

    </HeroContainer>
  );
};

export default HeroSection;