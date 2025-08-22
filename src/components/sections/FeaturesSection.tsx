import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlayCircle, FaBookOpen, FaUserGraduate, FaStar } from 'react-icons/fa';
import { Button } from '../ui';
import { SOCIAL_LINKS } from '../../config/constants';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: {
    primary: string;
    secondary: string;
  };
  rating: number;
}

const FeaturesContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  direction: rtl;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
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
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  font-family: 'Amiri', serif;
  
  @media (min-width: 1536px) {
    font-size: 3.5rem;
  }
  
  span {
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Cairo', sans-serif;
  
  @media (min-width: 1536px) {
    font-size: 1.3rem;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
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

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 2rem;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  font-family: 'Cairo', sans-serif;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Cairo', sans-serif;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 12px;
  
  @media (min-width: 1400px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .value {
    font-size: 1.2rem;
    font-weight: 700;
    color: #667eea;
    display: block;
  }
  
  .label {
    font-size: 0.9rem;
    color: #718096;
    margin-top: 0.25rem;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  .stars {
    display: flex;
    gap: 0.25rem;
    color: #ffd700;
  }
  
  .rating {
    font-weight: 600;
    color: #2d3748;
    margin-right: 0.5rem;
  }
`;

const CTASection = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  color: white;
  
  h3 {
    font-size: clamp(1.5rem, 3vw, 1.8rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Cairo', sans-serif;
  }
  
  p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    margin-bottom: 2rem;
    opacity: 0.9;
    font-family: 'Cairo', sans-serif;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (min-width: 1400px) {
    padding: 4rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const FeatureCardComponent: React.FC<FeatureCardProps> = ({ icon, title, description, stats, rating }) => {
  return (
    <FeatureCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <IconContainer>{icon}</IconContainer>
      
      <CardTitle>{title}</CardTitle>
      
      <CardDescription>{description}</CardDescription>
      
      <RatingContainer>
        <span className="rating">{rating}</span>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} style={{ opacity: i < Math.floor(rating) ? 1 : 0.3 }} />
          ))}
        </div>
      </RatingContainer>
      
      <StatsContainer>
        <StatItem>
          <span className="value">{stats.primary}</span>
          <div className="label">المحتوى</div>
        </StatItem>
        <StatItem>
          <span className="value">{stats.secondary}</span>
          <div className="label">التقييم</div>
        </StatItem>
      </StatsContainer>
    </FeatureCard>
  );
};

const FeaturesSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <FaPlayCircle />,
      title: "دروس فيديو احترافية",
      description: "محتوى تعليمي عالي الجودة مع شرح مفصل ومبسط لجميع دروس اللغة العربية للباكالوريا",
      stats: {
        primary: "10+ فيديو",
        secondary: "4.9/5"
      },
      rating: 4.9
    },
    {
      icon: <FaBookOpen />,
      title: "مكتبة رقمية شاملة",
      description: "مجموعة واسعة من الكتب والملخصات المتخصصة في اللغة العربية والأدب",
      stats: {
        primary: "10+ كتاب",
        secondary: "متاح 24/7"
      },
      rating: 4.8
    },
    {
      icon: <FaUserGraduate />,
      title: "تدريس خصوصي متقدم",
      description: "جلسات فردية عبر الزووم مع متابعة شخصية لضمان تحقيق أفضل النتائج",
      stats: {
        primary: "تدريس 1:1",
        secondary: "100% نجاح"
      },
      rating: 5.0
    }
  ];

  return (
    <FeaturesContainer id="features">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            المميزات <span>الحصرية</span>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            تجربة تعليمية استثنائية ومتميزة مع أحدث الطرق والأساليب التعليمية
          </Subtitle>
        </Header>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCardComponent key={index} {...feature} />
          ))}
        </FeaturesGrid>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CTASection>
            <h3>ابدأ رحلة التعلم معنا</h3>
            <p>انضم إلى آلاف الطلاب الذين حققوا النجاح والتفوق</p>
            <Button 
              size="large" 
              variant="secondary"
              href={SOCIAL_LINKS.YOUTUBE}
              target="_blank"
            >
              ابدأ التعلم 
            </Button>
          </CTASection>
        </motion.div>
      </Container>
    </FeaturesContainer>
  );
};

export default FeaturesSection;