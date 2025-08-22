import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaStar, FaShieldAlt, FaClock, FaBook } from 'react-icons/fa';
import { Button } from '../ui';
import { SOCIAL_LINKS } from '../../config/constants';

interface BookProps {
  title: string;
  description: string;
  image: string;
  isAvailable: boolean;
  downloadLink?: string;
  comingSoon?: boolean;
}

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
  50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.6), 0 0 60px rgba(102, 126, 234, 0.4); }
`;

const BooksContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  direction: rtl;
  position: relative;
  overflow: hidden;
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
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Cairo', sans-serif;
  
  @media (min-width: 1536px) {
    font-size: 1.4rem;
    max-width: 800px;
  }
  
  @media (min-width: 1400px) {
    font-size: 1.3rem;
    max-width: 700px;
  }
`;

const MainBookSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const BookImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  
  @media (max-width: 968px) {
    order: -1;
  }
`;

const BookImage = styled.div`
  width: 300px;
  height: 400px;
  background: linear-gradient(145deg, #667eea, #764ba2);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  animation: ${glow} 3s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/src/assets/images/book.jpg') center/cover;
    border-radius: 20px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    border-radius: 20px;
  }
  
  @media (min-width: 1400px) {
    width: 350px;
    height: 450px;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 330px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 280px;
  }
`;

const FloatingElement = styled(motion.div)<{ top: string; left: string; delay: number }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  font-size: 1.2rem;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const BookContent = styled.div`
  color: #2d3748;
`;

const BookTitle = styled(motion.h3)`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Amiri', serif;
  color: #2d3748;
  
  @media (min-width: 1400px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const BookDescription = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #718096;
  font-family: 'Cairo', sans-serif;
  
  @media (min-width: 1400px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const BookFeatures = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  .icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
  }
  
  .content {
    .title {
      font-weight: 600;
      color: #2d3748;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
    }
    
    .subtitle {
      font-size: 0.8rem;
      color: #718096;
    }
  }
`;

const DownloadButton = styled(Button)`
  margin-bottom: 1rem;
  
  svg {
    margin-left: 0.5rem;
  }
`;

const ComingSoonBooks = styled.div`
  margin-top: 4rem;
`;

const ComingSoonTitle = styled.h3`
  font-size: clamp(1.5rem, 2.5vw, 1.8rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #2d3748;
  font-family: 'Cairo', sans-serif;
  
  @media (min-width: 1400px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const ComingSoonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ComingSoonCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 2px dashed #e2e8f0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
  
  @media (min-width: 1400px) {
    padding: 2.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ffd700, #ffed4e);
  }
  
  .book-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 2rem;
  }
  
  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2d3748;
    font-family: 'Cairo', sans-serif;
  }
  
  p {
    color: #718096;
    font-size: 0.9rem;
  }
`;

const BooksSection: React.FC = () => {
  const mainBook: BookProps = {
    title: "المنقذ في اللغة والأدب العربي",
    description: "دليل شامل ومتكامل يحتوي على جميع دروس اللغة العربية والأدب للباكالوريا مع شرح مفصل ومنهجية صحيحة للحصول على أفضل النتائج",
    image: "/src/assets/images/book.jpg",
    isAvailable: true,
    downloadLink: SOCIAL_LINKS.TELEGRAM
  };

  const comingSoonBooks: BookProps[] = [
    {
      title: "دليل البلاغة",
      description: "قريباً",
      image: "",
      isAvailable: false,
      comingSoon: true
    },
    {
      title: "مختارات أدبية",
      description: "قريباً",
      image: "",
      isAvailable: false,
      comingSoon: true
    }
  ];

  return (
    <BooksContainer id="books">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            المكتبة <span>الرقمية</span>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            الكتب والملخصات التعليمية المتخصصة في اللغة العربية والأدب
          </Subtitle>
        </Header>
        
        <MainBookSection>
          <BookImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ position: 'relative' }}>
              <BookImage />
              
              <FloatingElement
                top="10%"
                left="5%"
                delay={0}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <FaBook />
              </FloatingElement>
              
              <FloatingElement
                top="70%"
                left="10%"
                delay={1}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <FaStar />
              </FloatingElement>
              
              <FloatingElement
                top="20%"
                left="85%"
                delay={2}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <FaDownload />
              </FloatingElement>
            </div>
          </BookImageContainer>
          
          <BookContent>
            <BookTitle
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {mainBook.title}
            </BookTitle>
            
            <BookDescription
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {mainBook.description}
            </BookDescription>
            
            <BookFeatures
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FeatureItem>
                <div className="icon">
                  <FaStar />
                </div>
                <div className="content">
                  <div className="title">محتوى متخصص</div>
                  <div className="subtitle">تقييم 4.9/5</div>
                </div>
              </FeatureItem>
              
              <FeatureItem>
                <div className="icon">
                  <FaClock />
                </div>
                <div className="content">
                  <div className="title">تحميل فوري</div>
                  <div className="subtitle">+100 طالب</div>
                </div>
              </FeatureItem>
              
              <FeatureItem>
                <div className="icon">
                  <FaShieldAlt />
                </div>
                <div className="content">
                  <div className="title">ضمان النجاح</div>
                  <div className="subtitle">نسبة نجاح 95%</div>
                </div>
              </FeatureItem>
            </BookFeatures>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <DownloadButton
                variant="primary"
                size="large"
                href={mainBook.downloadLink}
                target="_blank"
              >
                <FaDownload />
                تحميل الكتاب مجاناً
              </DownloadButton>
              
              <p style={{ fontSize: '0.9rem', color: '#718096', fontFamily: 'Cairo, sans-serif' }}>
                متوفر على قناة التليغرام الخاصة بالأستاذ
              </p>
            </motion.div>
          </BookContent>
        </MainBookSection>
        
        <ComingSoonBooks>
          <ComingSoonTitle>كتب قادمة</ComingSoonTitle>
          
          <ComingSoonGrid>
            {comingSoonBooks.map((book, index) => (
              <ComingSoonCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="book-icon">
                  <FaBook />
                </div>
                <h4>{book.title}</h4>
                <p>{book.description}</p>
              </ComingSoonCard>
            ))}
          </ComingSoonGrid>
        </ComingSoonBooks>
      </Container>
    </BooksContainer>
  );
};

export default BooksSection;