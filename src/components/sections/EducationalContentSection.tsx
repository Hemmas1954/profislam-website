import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaGraduationCap } from 'react-icons/fa';
import { Button, Badge } from '../ui';

interface ContentCardProps {
  title: string;
  description: string;
  badge?: {
    text: string;
    variant: 'primary' | 'success' | 'warning';
    icon?: React.ReactNode;
  };
  stats: {
    primary: string;
    secondary: string;
  };
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
  icon: React.ReactNode;
  isLive?: boolean;
}

const ContentContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  direction: rtl;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
    opacity: 0.3;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
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
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  color: white;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Amiri', serif;
  
  @media (min-width: 1536px) {
    font-size: 3.5rem;
  }
  
  span {
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Cairo', sans-serif;
  
  @media (min-width: 1536px) {
    font-size: 1.4rem;
    max-width: 800px;
  }
  
  @media (min-width: 1400px) {
    font-size: 1.2rem;
    max-width: 700px;
  }
  
  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  }
  
  @media (min-width: 1400px) {
    padding: 3rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  flex-shrink: 0;
  
  @media (min-width: 1400px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border-radius: 14px;
    font-size: 1.6rem;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LiveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #ff4757;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const CardTitle = styled.h3`
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  font-family: 'Cairo', sans-serif;
  line-height: 1.3;
  
  @media (min-width: 1400px) {
    font-size: 1.6rem;
  }
`;

const CardDescription = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #718096;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Cairo', sans-serif;
  
  @media (min-width: 1400px) {
    font-size: 1.1rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
`;

const StatItem = styled.div`
  text-align: center;
  
  .value {
    font-size: 1.3rem;
    font-weight: 700;
    color: #667eea;
    display: block;
    margin-bottom: 0.25rem;
  }
  
  .label {
    font-size: 0.9rem;
    color: #718096;
    font-weight: 500;
  }
`;

const CardButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;

const ContentCardComponent: React.FC<ContentCardProps> = ({
  title,
  description,
  badge,
  stats,
  buttonText,
  buttonVariant,
  icon,
  isLive
}) => {
  return (
    <ContentCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <CardHeader>
        <IconContainer>{icon}</IconContainer>
        <BadgeContainer>
          {isLive && <LiveIndicator>🔴 مباشر</LiveIndicator>}
          {badge && (
            <Badge variant={badge.variant}>
              {badge.icon && badge.icon}
              {badge.text}
            </Badge>
          )}
        </BadgeContainer>
      </CardHeader>
      
      <CardTitle>{title}</CardTitle>
      
      <CardDescription>{description}</CardDescription>
      
      <StatsContainer>
        <StatItem>
          <span className="value">{stats.primary}</span>
          <div className="label">المحتوى</div>
        </StatItem>
        <StatItem>
          <span className="value">{stats.secondary}</span>
          <div className="label">النتائج</div>
        </StatItem>
      </StatsContainer>
      
      <CardButton variant={buttonVariant} size="large">
        {buttonText}
      </CardButton>
    </ContentCard>
  );
};

const EducationalContentSection: React.FC = () => {
  const contentCards: ContentCardProps[] = [
    {
      title: "دروس اللغة العربية للبكالوريا",
      description: "مجموعة شاملة من الدروس المتخصصة في اللغة العربية والأدب للسنة الثالثة ثانوي مع شرح مفصل ومبسط",
      badge: {
        text: "الأكثر شعبية",
        variant: "primary"
      },
      stats: {
        primary: "115+ درس",
        secondary: "95% نجاح"
      },
      buttonText: "استكشف الدروس",
      buttonVariant: "primary",
      icon: <FaBook />
    },
    {
      title: "جلسات البث المباشر التفاعلية",
      description: "جلسات تفاعلية مباشرة عبر الإنترنت مع إمكانية طرح الأسئلة والمناقشة المباشرة مع الأستاذ",
      isLive: true,
      stats: {
        primary: "3x أسبوعياً",
        secondary: "تفاعل مباشر"
      },
      buttonText: "انضم للجلسة",
      buttonVariant: "secondary",
      icon: <FaVideo />
    },
    {
      title: "دروس Zoom الخصوصية",
      description: "جلسات فردية مخصصة عبر الزووم مع متابعة شخصية ومنهج مخصص حسب احتياجات كل طالب",
      badge: {
        text: "⭐ مميز",
        variant: "warning"
      },
      stats: {
        primary: "تدريس 1:1",
        secondary: "100% نجاح"
      },
      buttonText: "احجز جلستك",
      buttonVariant: "outline",
      icon: <FaGraduationCap />
    }
  ];

  return (
    <ContentContainer id="educational-content">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            تعليم <span>اللغة العربية</span> لطلاب البكالوريا
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            برامج تعليمية متنوعة ومتخصصة لضمان تحقيق أفضل النتائج في امتحان البكالوريا
          </Subtitle>
        </Header>
        
        <ContentGrid>
          {contentCards.map((card, index) => (
            <ContentCardComponent key={index} {...card} />
          ))}
        </ContentGrid>
      </Container>
    </ContentContainer>
  );
};

export default EducationalContentSection;