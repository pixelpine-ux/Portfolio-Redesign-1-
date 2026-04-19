import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { HomePage } from '@/app/pages/HomePage';
import { AboutPage } from '@/app/pages/AboutPage';
import { WorkPage } from '@/app/pages/WorkPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { NotFoundPage } from '@/app/pages/NotFoundPage';
import { EcommerceCaseStudy } from '@/app/pages/EcommerceCaseStudy';
import { IntelligencePipelineCaseStudy } from '@/app/pages/IntelligencePipelineCaseStudy';
import { AcademicAssignmentHelperCaseStudy } from '@/app/pages/AcademicAssignmentHelperCaseStudy';
import { ResumePage } from '@/app/pages/ResumePage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col transition-colors">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/ecommerce-redesign" element={<EcommerceCaseStudy />} />
              <Route path="/work/intelligence-pipeline" element={<IntelligencePipelineCaseStudy />} />
              <Route path="/work/academic-assignment-helper-rag" element={<AcademicAssignmentHelperCaseStudy />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
