import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCopy, FaCheck, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import { Button, Badge } from '../ui';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../config/constants';

interface PackageProps {
  title: string;
  price: string;
  schedule: string;
  level: string;
  features: string[];
  isPopular?: boolean;
}

interface PaymentMethodProps {
  type: string;
  number: string;
  name: string;
  icon: React.ReactNode;
}

const RegistrationContainer = styled.section`
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
`;

const StepsSection = styled.div`
  margin-bottom: 4rem;
`;

const StepsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #2d3748;
  font-family: 'Cairo', sans-serif;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
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

const StepCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: #667eea;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (min-width: 1400px) {
    padding: 2.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
  }
  
  .step-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0 auto 1.5rem;
    font-family: 'Cairo', sans-serif;
    
    @media (min-width: 1400px) {
      width: 70px;
      height: 70px;
      font-size: 1.6rem;
    }
    
    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
      font-size: 1.3rem;
    }
  }
  
  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2d3748;
    font-family: 'Cairo', sans-serif;
  }
  
  p {
    color: #718096;
    font-size: 0.9rem;
    line-height: 1.5;
    font-family: 'Cairo', sans-serif;
  }
`;

const PackagesSection = styled.div`
  margin-bottom: 4rem;
`;

const PackagesTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #2d3748;
  font-family: 'Cairo', sans-serif;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const PackageCard = styled(motion.div)<{ isPopular?: boolean }>`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.isPopular ? '#667eea' : 'transparent'};
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    border-color: #667eea;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
  
  ${props => props.isPopular && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
      border-radius: 20px 20px 0 0;
    }
  `}
`;

const PackageHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h4 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2d3748;
    font-family: 'Cairo', sans-serif;
  }
  
  .price {
    font-size: 2rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 0.5rem;
  }
  
  .schedule {
    color: #718096;
    font-size: 0.9rem;
    font-family: 'Cairo', sans-serif;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid #f1f5f9;
    font-family: 'Cairo', sans-serif;
    
    &:last-child {
      border-bottom: none;
    }
    
    svg {
      color: #10b981;
      flex-shrink: 0;
    }
  }
`;

const PaymentSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const PaymentTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #2d3748;
  font-family: 'Cairo', sans-serif;
`;

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const PaymentMethod = styled.div`
  background: #f7fafc;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    background: #edf2f7;
  }
  
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    
    .icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }
    
    .type {
      font-weight: 700;
      color: #2d3748;
      font-family: 'Cairo', sans-serif;
    }
  }
  
  .number {
    font-family: 'Courier New', monospace;
    font-size: 1.1rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 0.5rem;
    direction: ltr;
    text-align: left;
  }
  
  .name {
    font-size: 0.9rem;
    color: #718096;
    margin-bottom: 1rem;
    font-family: 'Cairo', sans-serif;
  }
`;

const CopyButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-family: 'Cairo', sans-serif;
  
  &:hover {
    background: #5a67d8;
  }
  
  &.copied {
    background: #10b981;
  }
`;

const WhatsAppCTA = styled(motion.div)`
  text-align: center;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border-radius: 20px;
  padding: 3rem;
  color: white;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Cairo', sans-serif;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    font-family: 'Cairo', sans-serif;
  }
`;

const RegistrationSection: React.FC = () => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const steps = [
    {
      number: 1,
      title: "تواصل عبر الواتساب",
      description: "اضغط على زر الواتساب وأرسل رسالة للتسجيل"
    },
    {
      number: 2,
      title: "اختر الباقة المناسبة",
      description: "حدد الباقة التي تناسب مستواك الدراسي"
    },
    {
      number: 3,
      title: "ابدأ التعلم فوراً",
      description: "انضم للدروس وابدأ رحلة التفوق"
    }
  ];

  const packages: PackageProps[] = [
    {
      title: "السنة الأولى ثانوي",
      price: "2500 دج/فصل",
      schedule: "الجمعة 4:00 مساءً",
      level: "مبتدئ",
      features: [
        "دروس أساسية في اللغة العربية",
        "تمارين تطبيقية",
        "متابعة أسبوعية",
        "مراجعات دورية"
      ]
    },
    {
      title: "السنة الثانية ثانوي",
      price: "2500 دج/فصل",
      schedule: "الجمعة 6:00 مساءً",
      level: "متوسط",
      features: [
        "دروس متقدمة في الأدب",
        "تحليل النصوص",
        "تمارين متنوعة",
        "اختبارات تقييمية"
      ],
      isPopular: true
    },
    {
      title: "السنة الثالثة ثانوي",
      price: "2500 دج/فصل",
      schedule: "السبت 6:00 مساءً",
      level: "متقدم",
      features: [
        "تحضير شامل للبكالوريا",
        "حل نماذج امتحانات",
        "استراتيجيات الإجابة",
        "مراجعة نهائية مكثفة"
      ]
    }
  ];

  const paymentMethods: PaymentMethodProps[] = [
    {
      type: "بريدي موب",
      number: CONTACT_INFO.PHONE_NUMBER,
      name: "HEMMAS ISLAM - SETIF",
      icon: <FaMoneyBillWave />
    },
    {
      type: "الحساب الجاري",
      number: CONTACT_INFO.CLE_NUMBER,
      name: "HEMMAS ISLAM - SETIF",
      icon: <FaMoneyBillWave />
    }
  ];

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  return (
    <RegistrationContainer id="registration">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            التسجيل <span>والباقات</span>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            انضم إلى آلاف الطلاب المتفوقين واختر الباقة التي تناسب مستواك
          </Subtitle>
        </Header>
        
        <StepsSection>
          <StepsTitle>خطوات التسجيل</StepsTitle>
          <StepsContainer>
            {steps.map((step, index) => (
              <StepCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="step-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </StepCard>
            ))}
          </StepsContainer>
        </StepsSection>
        
        <PackagesSection>
          <PackagesTitle>الباقات التعليمية</PackagesTitle>
          <PackagesGrid>
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                isPopular={pkg.isPopular}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {pkg.isPopular && (
                  <Badge variant="primary" style={{ position: 'absolute', top: '-10px', right: '20px' }}>
                    الأكثر شعبية
                  </Badge>
                )}
                
                <PackageHeader>
                  <h4>{pkg.title}</h4>
                  <div className="price">{pkg.price}</div>
                  <div className="schedule">
                    <FaClock style={{ marginLeft: '0.5rem' }} />
                    {pkg.schedule}
                  </div>
                </PackageHeader>
                
                <FeaturesList>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaCheck />
                      {feature}
                    </li>
                  ))}
                </FeaturesList>
              </PackageCard>
            ))}
          </PackagesGrid>
        </PackagesSection>
        
        <PaymentSection>
          <PaymentTitle>طرق الدفع</PaymentTitle>
          <PaymentMethods>
            {paymentMethods.map((method, index) => (
              <PaymentMethod key={index}>
                <div className="header">
                  <div className="icon">{method.icon}</div>
                  <div className="type">{method.type}</div>
                </div>
                <div className="number">{method.number}</div>
                <div className="name">{method.name}</div>
                <CopyButton
                  className={copiedStates[method.number] ? 'copied' : ''}
                  onClick={() => copyToClipboard(method.number, method.number)}
                >
                  {copiedStates[method.number] ? <FaCheck /> : <FaCopy />}
                  {copiedStates[method.number] ? 'تم النسخ' : 'نسخ الرقم'}
                </CopyButton>
              </PaymentMethod>
            ))}
          </PaymentMethods>
        </PaymentSection>
        
        <WhatsAppCTA
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>ابدأ رحلة التفوق الآن</h3>
          <p>تواصل معنا عبر الواتساب للتسجيل والحصول على مزيد من المعلومات</p>
          <Button
            variant="secondary"
            size="large"
            href={SOCIAL_LINKS.WHATSAPP}
            target="_blank"
          >
            <FaWhatsapp style={{ marginLeft: '0.5rem' }} />
            تواصل عبر الواتساب
          </Button>
        </WhatsAppCTA>
      </Container>
    </RegistrationContainer>
  );
};

export default RegistrationSection;