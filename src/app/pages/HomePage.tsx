import { Link } from 'react-router-dom';
import { Code2, Palette, Wrench, ArrowRight, Download } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { GeometricPattern } from '@/app/components/GeometricPattern';

const skills = [
  {
    icon: Palette,
    title: 'Design',
    items: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    icon: Code2,
    title: 'Development',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Figma', 'Git', 'VS Code', 'Adobe Creative Suite'],
  },
];

const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of an online shopping platform with focus on conversion optimization.',
    image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc2OTg1MzUwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['UI Design', 'Prototyping', 'User Testing'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Modern task management application built with React and TypeScript.',
    image: 'https://images.unsplash.com/photo-1588084580191-db8604397b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ24lMjBtaW5pbWFsfGVufDF8fHx8MTc2OTg1MzUwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Full Stack'],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Clean and minimal portfolio showcasing design and development work.',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3Njk4Mjc3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Web Design', 'Development', 'Responsive'],
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-6 relative overflow-hidden">
        <GeometricPattern />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl">Hi, I'm Mastewal</h1>
            <h2 className="text-cyan mb-4 md:mb-6 text-xl md:text-3xl">Product Designer & Developer</h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl dark:text-gray-200">
              I'm a Computer Science student passionate about creating beautiful, functional digital experiences. 
              I bridge the gap between design and development to build products that people love.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                to="/work"
                className="bg-cyan text-white px-6 md:px-8 h-12 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 text-center"
              >
                View Work <ArrowRight size={20} />
              </Link>
              <a 
                href="/resume.pdf" 
                download="Mastewal_Resume.pdf"
                className="border-2 border-navy dark:border-cyan text-navy dark:text-cyan px-6 md:px-8 h-12 rounded-lg hover:bg-navy dark:hover:bg-cyan hover:text-white transition-all flex items-center justify-center gap-2 text-center"
              >
                Download Resume <Download size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center mb-8 md:mb-12 text-2xl md:text-4xl">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <skill.icon className="w-10 h-10 md:w-12 md:h-12 text-cyan mb-3 md:mb-4" />
                <h3 className="mb-3 md:mb-4 text-xl md:text-2xl">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-slate dark:text-gray-200 flex items-center gap-2 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 bg-cyan rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
            <h2 className="text-2xl md:text-4xl">Featured Work</h2>
            <Link
              to="/work"
              className="text-cyan hover:text-navy dark:hover:text-cyan/80 transition-colors flex items-center gap-2 text-sm md:text-base"
            >
              View All <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="mb-2 text-lg md:text-xl">{project.title}</h3>
                  <p className="text-slate dark:text-gray-200 mb-4 line-clamp-2 text-sm md:text-base">{project.description}</p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}