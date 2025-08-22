import { Layout } from './components/layout';
import {
  HeroSection,
  FeaturesSection,
  EducationalContentSection,
  BooksSection,
  TestimonialsSection,
  RegistrationSection
} from './components/sections';
import './styles/globals.scss';

function App() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <EducationalContentSection />
      <BooksSection />
      <TestimonialsSection />
      <RegistrationSection />
    </Layout>
  );
}

export default App;
