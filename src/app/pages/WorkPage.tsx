import { useState } from 'react';
import { Link } from 'react-router-dom';

type ProjectCategory = 'All' | 'Design' | 'Development';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'Design' | 'Development';
  tags: string[];
  link?: string; // Optional link to case study
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of an online shopping platform with focus on conversion optimization and user experience.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY5Nzk3ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Design',
    tags: ['UI Design', 'Prototyping', 'User Testing'],
    link: '/work/ecommerce-redesign',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Modern analytics dashboard built with React featuring real-time data visualization and insights.',
    image: 'https://images.unsplash.com/photo-1585123607190-72ec2979a269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkZXNpZ258ZW58MXx8fHwxNzY5ODUzNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Development',
    tags: ['React', 'TypeScript', 'Recharts'],
  },
  {
    id: 3,
    title: 'BRAND OS - Brand Operating System',
    description: 'A comprehensive brand management platform designed for brand managers, marketing managers, and small marketing teams to centralize, manage, and operationalize brand assets, guidelines, and marketing operations.',
    image: 'https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHN5c3RlbSUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk4MDcxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Design',
    tags: ['Brand Management', 'UX Strategy', 'Design Systems'],
  },
];

function ProjectCard({ project }: { project: Project }) {
  // Helper to generate responsive Unsplash URLs with WebP format
  const getOptimizedUrl = (url: string, width: number) => {
    if (!url.includes('unsplash.com')) return url;
    return url.replace(/&w=\d+/, '') + `&w=${width}&fm=webp&q=80`;
  };

  return (
    <>
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-slate-800">
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
      </div>
      <div className="p-5 md:p-6">
        <h3 className="mb-2 text-lg md:text-xl">{project.title}</h3>
        <p className="text-slate dark:text-gray-200 mb-4 text-sm md:text-base">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm px-2 md:px-3 py-1 bg-off-white dark:bg-slate-600 text-navy dark:text-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <span className="mt-4 inline-block text-sm text-cyan hover:underline">
            View Case Study →
          </span>
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
              
              return project.link ? (
                <Link 
                  key={project.id} 
                  to={project.link} 
                  className={`${baseCardClasses} cursor-pointer block`}
                  aria-label={`View ${project.title} case study`}
                >
                  <ProjectCard project={project} />
                </Link>
              ) : (
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