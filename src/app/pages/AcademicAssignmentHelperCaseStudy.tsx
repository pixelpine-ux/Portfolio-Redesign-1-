import {
  ArrowLeft,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Database,
  GraduationCap,
  Layers3,
  Rocket,
  Search,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function AcademicAssignmentHelperCaseStudy() {
  const features = [
    {
      title: 'Context-aware assistance',
      description:
        'Students can ask questions about coursework, assignments, or reading material and receive answers grounded in the documents they actually uploaded.',
      icon: Search,
    },
    {
      title: 'Plagiarism awareness',
      description:
        'The system highlights suspicious overlap and encourages students to review originality before submitting work.',
      icon: ShieldCheck,
    },
    {
      title: 'Structured guidance',
      description:
        'Instead of giving generic responses, the experience walks learners through the assignment in a way that feels actionable and educational.',
      icon: GraduationCap,
    },
    {
      title: 'Modular architecture',
      description:
        'The backend was designed to support retrieval, generation, storage, and evaluation through a clean service-oriented setup.',
      icon: Layers3,
    },
  ];

  const workflowSteps = [
    {
      title: 'Ingest course materials',
      description:
        'Documents are parsed and stored in a vector-enabled database so the assistant can retrieve relevant context instead of relying on memory alone.',
    },
    {
      title: 'Retrieve the best passages',
      description:
        'Semantic search identifies the most contextually relevant text chunks before generating a response.',
    },
    {
      title: 'Generate a grounded answer',
      description:
        'The assistant synthesizes the retrieved content into a response that is clearer, more relevant, and easier to trust.',
    },
    {
      title: 'Review and refine',
      description:
        'The experience encourages users to verify sources and evaluate originality, making the tool useful for learning as well as productivity.',
    },
  ];

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
          <div className="max-w-4xl">
            <h1 className="mb-3 md:mb-4 text-3xl md:text-5xl">
              Academic Assignment Helper & Plagiarism Detector (RAG-Powered)
            </h1>
            <p className="text-base md:text-xl text-slate dark:text-gray-300 max-w-3xl">
              I designed a retrieval-augmented assistant that helps students work through academic tasks with more structure, better context, and a stronger sense of academic integrity.
            </p>
          </div>

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
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">Prototype and product concept</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/pixelpine-ux/academic-assignment-helper-rag"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cyan text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
            >
              View GitHub Repository
            </a>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-600 px-6 py-3 rounded-lg text-slate dark:text-gray-200 hover:bg-white dark:hover:bg-slate-700 transition-all"
            >
              Explore Other Work
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-start">
          <div>
            <h2 className="mb-4 text-2xl md:text-3xl">The challenge</h2>
            <p className="text-base md:text-lg text-slate dark:text-gray-300 mb-4">
              Students are often left to navigate assignments, research material, and academic expectations with fragmented tools. That creates a common problem: they either over-rely on generic AI responses or spend too much time manually searching through course documents.
            </p>
            <p className="text-base md:text-lg text-slate dark:text-gray-300">
              I wanted to create a product that would make academic support feel more trustworthy by grounding answers in real uploaded content while also making originality and citation habits more visible.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-coral" />
              </div>
              <h3 className="text-xl">Product intent</h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-slate dark:text-gray-300">
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 shrink-0" />Reduce time spent searching across scattered documents.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 shrink-0" />Make AI assistance more evidence-based and less hallucination-prone.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 shrink-0" />Encourage better academic habits through transparency and review.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-8 text-2xl md:text-3xl">What makes this experience different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="mb-2 text-xl">{feature.title}</h3>
                  <p className="text-slate dark:text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="mb-4 text-2xl md:text-3xl">How the system works</h2>
              <p className="text-base md:text-lg text-slate dark:text-gray-300">
                The project uses a retrieval-augmented workflow rather than a simple prompt-response loop. That means the assistant searches relevant source material first and then generates an answer that is tied to evidence.
              </p>
            </div>
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/10 text-sm font-semibold text-navy dark:bg-cyan/10 dark:text-cyan">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg">{step.title}</h3>
                    <p className="text-sm md:text-base text-slate dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-cyan/5 to-coral/5 dark:from-cyan/10 dark:to-coral/10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_0.9fr] gap-8 md:gap-12 items-center">
          <div>
            <h2 className="mb-4 text-2xl md:text-3xl">Why this architecture was chosen</h2>
            <p className="text-base md:text-lg text-slate dark:text-gray-300 mb-4">
              I chose FastAPI for a lightweight backend, PostgreSQL with pgvector for semantic retrieval, and Docker for portability. These choices made the stack practical for experimentation while still feeling production-ready.
            </p>
            <p className="text-base md:text-lg text-slate dark:text-gray-300">
              The result is a system that is easier to iterate on, easier to scale, and more aligned with real academic workflows than a one-off prototype.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="text-xl">Design principles</h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-slate dark:text-gray-300">
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 shrink-0" />Ground responses in source material rather than relying on unverified knowledge.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 shrink-0" />Keep the experience understandable for students who are not technical experts.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 shrink-0" />Support transparency through citations, review, and originality checks.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-8 text-2xl md:text-3xl">Impact and learning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 md:p-8 shadow-sm">
              <h3 className="mb-3 text-xl">What it enables</h3>
              <p className="text-slate dark:text-gray-300">
                The project creates a more guided and less intimidating experience for students who need help understanding course material and assignment expectations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 md:p-8 shadow-sm">
              <h3 className="mb-3 text-xl">What I learned</h3>
              <p className="text-slate dark:text-gray-300">
                Designing for education requires empathy, clarity, and boundaries. The strongest experiences are the ones that help students think critically rather than simply provide answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-6 bg-navy dark:bg-black text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="mb-4 text-2xl md:text-3xl text-white">A more thoughtful approach to academic support</h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            This concept explores how AI can be used responsibly in education: not as a shortcut, but as a tool that supports understanding, evidence review, and better academic habits.
          </p>
          <a
            href="https://github.com/pixelpine-ux/academic-assignment-helper-rag"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-cyan text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
          >
            Open the repository
          </a>
        </div>
      </section>
    </main>
  );
}
