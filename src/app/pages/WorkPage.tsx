import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import intelligencePipelineImage from '@/assets/intellegence_pipeline.jpg';
import academicHelperRagImage from '@/assets/helper_rag.jpeg';

type ProjectCategory = 'All' | 'Design' | 'Development';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'Design' | 'Development';
  tags: string[];
  caseStudyLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of an online shopping platform with focus on conversion optimization and user experience.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY5Nzk3ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Design',
    tags: ['UI Design', 'Prototyping', 'User Testing'],
    caseStudyLink: '/work/ecommerce-redesign',
  },
  {
    id: 2,
    title: 'Intelligence Pipeline',
    description: 'A deterministic intelligence pipeline that converts unstructured market data into structured strategic artifacts for brand and marketing decision-making.',
    image: intelligencePipelineImage,
    category: 'Development',
    tags: ['Python', 'LLMs', 'ETL', 'Vector Search', 'FastAPI'],
    caseStudyLink: '/work/intelligence-pipeline',
    githubLink: 'https://github.com/pixelpine-ux/intelligence_pipeline',
  },
  {
    id: 3,
    title: 'Academic Assignment Helper & Plagiarism Detector (RAG-Powered)',
    description: 'A production-grade academic support system that automates assignment analysis through a Retrieval-Augmented Generation architecture with secure APIs, vector search, and workflow automation.',
    image: academicHelperRagImage,
    category: 'Development',
    tags: ['FastAPI', 'PostgreSQL', 'pgvector', 'n8n', 'Docker'],
    caseStudyLink: '/work/academic-assignment-helper-rag',
    githubLink: 'https://github.com/pixelpine-ux/academic-assignment-helper-rag',
  },
  {
    id: 4,
    title: 'BRAND OS - Brand Operating System',
    description: 'A comprehensive brand management platform designed for brand managers, marketing managers, and small marketing teams to centralize, manage, and operationalize brand assets, guidelines, and marketing operations.',
    image: 'https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHN5c3RlbSUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk4MDcxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Design',
    tags: ['Brand Management', 'UX Strategy', 'Design Systems'],
  },
];

const categoryConfig = {
  Design: { label: 'Design', color: 'bg-cyan/10 dark:bg-cyan/20 text-cyan border border-cyan/30' },
  Development: { label: 'Development', color: 'bg-coral/10 dark:bg-coral/20 text-coral border border-coral/30' },
};

function ProjectCard({ project }: { project: Project }) {
  const getOptimizedUrl = (url: string, width: number) => {
    if (!url.includes('unsplash.com')) return url;
    return url.replace(/&w=\d+/, '') + `&w=${width}&fm=webp&q=80`;
  };

  const badge = categoryConfig[project.category];

  return (
    <>
      <Link
        to={project.caseStudyLink ?? '#'}
        className={project.caseStudyLink ? 'block' : 'pointer-events-none block'}
        aria-label={project.caseStudyLink ? `View ${project.title} case study` : undefined}
      >
        <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-slate-800 relative">
          <img
            src={getOptimizedUrl(project.image, 800)}
            srcSet={`
              ${getOptimizedUrl(project.image, 640)} 640w,
              ${getOptimizedUrl(project.image, 768)} 768w,
              ${getOptimizedUrl(project.image, 1024)} 1024w,
              ${getOptimizedUrl(project.image, 1280)} 1280w
            `}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${badge.color}`}>
            {badge.label}
          </span>
        </div>
        <div className="p-5 md:p-6">
          <h3 className="mb-2 text-lg md:text-xl">{project.title}</h3>
          <p className="text-slate dark:text-gray-200 mb-4 text-sm md:text-base">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs md:text-sm px-2 md:px-3 py-1 bg-off-white dark:bg-slate-600 text-navy dark:text-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="px-5 md:px-6 pb-5 md:pb-6 flex flex-wrap items-center gap-3">
        {project.caseStudyLink && (
          <Link
            to={project.caseStudyLink}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:text-navy dark:hover:text-cyan/80 transition-colors"
          >
            View Case Study <ArrowRight size={14} />
          </Link>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:text-navy dark:text-gray-200 dark:hover:text-white transition-colors"
            aria-label={`View ${project.title} GitHub repository`}
          >
            GitHub <Github size={14} />
          </a>
        )}
      </div>
    </>
  );
}

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl">My Work</h1>
          <p className="text-base md:text-xl text-slate dark:text-gray-200 max-w-2xl mx-auto">
            A collection of my design and development projects showcasing my skills in 
            creating user-centered digital experiences.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-12 md:py-24 px-4 md:px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {(['All', 'Design', 'Development'] as ProjectCategory[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 md:px-6 py-2 rounded-lg transition-all text-sm md:text-base ${
                  activeFilter === filter
                    ? 'bg-cyan text-white'
                    : 'bg-white dark:bg-slate-700 text-navy dark:text-gray-200 border-2 border-gray-200 dark:border-slate-600 hover:border-cyan'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => {
              const baseCardClasses = "bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group";

              return (
                <div key={project.id} className={baseCardClasses}>
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <p className="text-slate dark:text-gray-200 text-lg md:text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
