import { ArrowLeft, Brain, Database, GitBranch, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import intelligencePipelineImage from '@/assets/intellegence_pipeline.jpg';

const pipelineStages = [
  {
    title: 'Ingest',
    description: 'Collected fragmented market signals from research notes, scraped sources, competitor references, and campaign inputs.',
  },
  {
    title: 'Structure',
    description: 'Applied deterministic parsing and ETL rules to normalize raw text into reusable entities, taxonomies, and evidence-backed records.',
  },
  {
    title: 'Synthesize',
    description: 'Used LLM-assisted enrichment and vector search retrieval to generate strategic artifacts without losing traceability to source data.',
  },
];

const outputs = [
  'Audience insight briefs',
  'Competitor signal summaries',
  'Messaging territories and positioning inputs',
  'Brand and marketing decision artifacts',
];

export function IntelligencePipelineCaseStudy() {
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
          <div className="mb-6 md:mb-8">
            <h1 className="mb-3 md:mb-4 text-3xl md:text-5xl">Intelligence Pipeline</h1>
            <p className="text-base md:text-xl text-slate dark:text-gray-300 max-w-3xl">
              A deterministic intelligence pipeline that converts unstructured market data into structured strategic artifacts for brand and marketing decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 md:w-6 md:h-6 text-cyan" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Focus</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">Strategic intelligence systems</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 md:w-6 md:h-6 text-coral" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Stack</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">Python, ETL, Vector Search, FastAPI</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-navy/10 dark:bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-navy dark:text-cyan" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Outcome</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">Decision-ready strategic artifacts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="mb-4 md:mb-6 text-2xl md:text-4xl">What It Solves</h2>
            <p className="text-base md:text-lg text-slate dark:text-gray-300 mb-4 md:mb-6">
              Brand and marketing teams often work from scattered notes, competitor screenshots, transcripts, and raw research dumps. That creates slow synthesis cycles, inconsistent interpretation, and weak traceability.
            </p>
            <p className="text-base md:text-lg text-slate dark:text-gray-300">
              This pipeline turns that mess into a repeatable system: collect signals, structure them deterministically, enrich with retrieval-backed intelligence, and output artifacts that teams can use in planning and decision-making.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src={intelligencePipelineImage}
              alt="Intelligence pipeline dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-4xl">Pipeline Design</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pipelineStages.map((stage) => (
              <div key={stage.title} className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-lg shadow-sm">
                <div className="inline-flex items-center gap-2 mb-4 text-cyan">
                  <GitBranch className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-[0.2em]">{stage.title}</span>
                </div>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-2xl md:text-4xl">Strategic Outputs</h2>
            <p className="text-base md:text-lg text-slate dark:text-gray-300 mb-6">
              Rather than stopping at analytics dashboards, the system packages insight into artifacts teams can directly use for positioning, messaging, and planning.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {outputs.map((output) => (
                <div key={output} className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 md:p-5 text-slate dark:text-gray-200">
                  {output}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <a
              href="https://github.com/pixelpine-ux/intelligence_pipeline"
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
