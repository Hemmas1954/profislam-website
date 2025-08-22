import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight, FaTrophy } from 'react-icons/fa';
import { Stats } from '../ui';

interface TestimonialProps {
  name: string;
  track: string;
  grade: string;
  rating: number;
  testimonial: string;
  avatar?: string;
}

const TestimonialsContainer = styled.section`
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>') repeat;
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
  
  span {
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  font-family: 'Cairo', sans-serif;
`;

const StatsSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const TestimonialsGrid = styled.div`
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

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ffd700, #ffed4e, #ff6b6b);
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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
  
  @media (min-width: 1400px) {
    width: 70px;
    height: 70px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const StudentDetails = styled.div`
  .name {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 0.25rem;
    font-family: 'Cairo', sans-serif;
    
    @media (min-width: 1400px) {
      font-size: 1.2rem;
    }
  }
  
  .track {
    font-size: clamp(0.8rem, 1.2vw, 0.9rem);
    color: #718096;
    font-family: 'Cairo', sans-serif;
    
    @media (min-width: 1400px) {
      font-size: 1rem;
    }
  }
`;

const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f7fafc;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  
  .grade {
    font-weight: 700;
    color: #667eea;
    font-size: 1.1rem;
  }
  
  .label {
    font-size: 0.8rem;
    color: #718096;
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

const TestimonialText = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  font-family: 'Cairo', sans-serif;
  
  &::before {
    content: '"';
    font-size: clamp(2.5rem, 4vw, 3rem);
    color: #667eea;
    position: absolute;
    top: -10px;
    right: -10px;
    font-family: serif;
  }
  
  @media (min-width: 1536px) {
    font-size: 1.3rem;
  }
  
  @media (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #e2e8f0;
  font-size: 1.5rem;
`;

const TestimonialComponent: React.FC<TestimonialProps> = ({
  name,
  track,
  grade,
  rating,
  testimonial
}) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <TestimonialCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <QuoteIcon>
        <FaQuoteRight />
      </QuoteIcon>
      
      <CardHeader>
        <StudentInfo>
          <Avatar>{getInitials(name)}</Avatar>
          <StudentDetails>
            <div className="name">{name}</div>
            <div className="track">{track}</div>
          </StudentDetails>
        </StudentInfo>
        
        <GradeContainer>
          <FaTrophy style={{ color: '#ffd700' }} />
          <div>
            <div className="grade">{grade}</div>
            <div className="label">النتيجة</div>
          </div>
        </GradeContainer>
      </CardHeader>
      
      <RatingContainer>
        <span className="rating">{rating}</span>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} style={{ opacity: i < Math.floor(rating) ? 1 : 0.3 }} />
          ))}
        </div>
      </RatingContainer>
      
      <TestimonialText>{testimonial}</TestimonialText>
    </TestimonialCard>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "محمدعزيزي",
      track: "شعبة آداب وفلسفة",
      grade: "18.5/20",
      rating: 5,
      testimonial: "الأستاذ إسلام هماس أستاذ متميز جداً، شرحه واضح ومفهوم، ساعدني كثيراً في فهم دروس الأدب والنصوص. بفضله حصلت على علامة ممتازة في البكالوريا."
    },
    {
      name: "فاطمة الزهراء",
      track: "شعبة آداب وفلسفة",
      grade: "17.8/20",
      rating: 5,
      testimonial: "دروس الأستاذ إسلام منظمة ومرتبة بشكل ممتاز، يستخدم طرق تدريس حديثة تجعل المادة سهلة الفهم. أنصح جميع الطلاب بالانضمام لدروسه."
    },
    {
      name: "يوسف بن علي",
      track: "شعبة لغات أجنبية",
      grade: "16.9/20",
      rating: 5,
      testimonial: "كان لدي صعوبة في مادة اللغة العربية، لكن بعد انضمامي لدروس الأستاذ إسلام، أصبحت أفهم المادة بسهولة وحصلت على نتائج رائعة."
    },
    {
      name: "مريم خالد",
      track: "شعبة آداب وفلسفة",
      grade: "18.2/20",
      rating: 5,
      testimonial: "الأستاذ إسلام يتميز بالصبر والتفاني في التدريس، يجيب على جميع الأسئلة ويوضح النقاط الصعبة. شكراً له على كل المجهودات."
    },
    {
      name: "عبد الرحمن سعيد",
      track: "شعبة آداب وفلسفة",
      grade: "17.5/20",
      rating: 5,
      testimonial: "دروس الزووم الخصوصية مع الأستاذ إسلام كانت مفيدة جداً، التركيز الفردي ساعدني في تحسين مستواي بشكل كبير."
    },
    {
      name: "سارة أحمد",
      track: "شعبة لغات أجنبية",
      grade: "16.7/20",
      rating: 5,
      testimonial: "أسلوب الأستاذ إسلام في التدريس رائع، يجعل الدرس ممتعاً ومفيداً في نفس الوقت. حقاً أستاذ يستحق كل التقدير والاحترام."
    }
  ];

  return (
    <TestimonialsContainer id="testimonials">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            آراء <span>الطلاب السابقين</span>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            قصص النجاح الحقيقية من طلابنا المتفوقين في امتحان البكالوريا
          </Subtitle>
          
          <StatsSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Stats value={100} suffix="+" label="طالب ناجح" color="white" />
            <Stats value={98} suffix="%" label="معدل النجاح" color="white" />
            <Stats value={17.5} suffix="/20" label="متوسط العلامات" color="white" />
          </StatsSection>
        </Header>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialComponent key={index} {...testimonial} />
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;