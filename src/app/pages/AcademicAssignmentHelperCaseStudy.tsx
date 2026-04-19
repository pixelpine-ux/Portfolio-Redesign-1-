import { ArrowLeft, BookOpen, Database, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AcademicAssignmentHelperCaseStudy() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-6 md:pt-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-cyan hover:text-navy dark:hover:text-cyan/80 transition-colors text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      <section className="py-12 md:py-16 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="mb-3 md:mb-4 text-3xl md:text-5xl">Academic Assignment Helper & Plagiarism Detector (RAG-Powered)</h1>
          <p className="text-base md:text-xl text-slate dark:text-gray-300 max-w-3xl">
            The full case study is being organized. The project card and route are in place, and we can build out the final narrative next.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-cyan" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Domain</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">Academic support and analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 md:w-6 md:h-6 text-coral" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Stack</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">FastAPI, PostgreSQL, pgvector, Docker</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-navy/10 dark:bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <Workflow className="w-5 h-5 md:w-6 md:h-6 text-navy dark:text-cyan" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Status</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">Case study content coming next</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://github.com/pixelpine-ux/academic-assignment-helper-rag"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cyan text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              View GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
