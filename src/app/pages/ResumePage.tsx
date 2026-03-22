import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

const contact = {
  name: 'Mastewal',
  title: 'Product Designer & Frontend Developer',
  email: 'mastewal@email.com',
  phone: '+251 986722189',
  location: 'Addis Ababa, Ethiopia',
  website: 'yourportfolio.com',
  github: 'github.com/mastewal',
  linkedin: 'linkedin.com/in/mastewal',
};

const summary =
  'Computer Science student with hands-on experience in UI/UX design and frontend development. I bridge the gap between design and engineering to deliver user-centered digital products. Proficient in Figma, React, and TypeScript with a strong eye for detail and a passion for clean, accessible interfaces.';

const experience = [
  {
    title: 'UI/UX Design Intern',
    company: 'Tech Startup',
    period: '2024 – 2025',
    bullets: [
      'Designed end-to-end user flows for mobile and web applications using Figma.',
      'Conducted user research and usability testing, reducing task completion time by 20%.',
      'Built and maintained a shared design system adopted across 3 product teams.',
      'Collaborated with engineers to ensure pixel-perfect implementation of designs.',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2023 – Present',
    bullets: [
      'Delivered responsive portfolio and landing page projects for 5+ clients.',
      'Built projects with React, TypeScript, and Tailwind CSS.',
      'Managed full project lifecycle from requirements gathering to deployment.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Your University',
    period: '2022 – Present',
    notes: 'Focus: Human-Computer Interaction & Software Engineering | GPA: X.X/4.0',
  },
];

const skills = {
  Design: ['UI/UX Design', 'Prototyping', 'Wireframing', 'User Research', 'Usability Testing', 'Design Systems'],
  Development: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML & CSS', 'RESTful APIs'],
  Tools: ['Figma', 'Adobe XD', 'Photoshop', 'Git & GitHub', 'VS Code', 'Notion'],
};

const projects = [
  {
    name: 'E-Commerce Redesign',
    tech: 'Figma · User Research · Prototyping',
    description: 'Full redesign of an online shopping platform focused on conversion optimization and accessibility.',
  },
  {
    name: 'Task Management App',
    tech: 'React · TypeScript · Tailwind CSS',
    description: 'Full-stack task manager with real-time updates, drag-and-drop, and dark mode support.',
  },
  {
    name: 'Portfolio Website',
    tech: 'React · Vite · Tailwind CSS',
    description: 'Responsive personal portfolio showcasing design and development work with dark mode.',
  },
];

export function ResumePage() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4 md:px-6 dark:bg-slate-900">
      <div className="max-w-[900px] mx-auto">

        {/* Download Button */}
        <div className="flex justify-end mb-6">
          <a
            href="/resume.pdf"
            download="Mastewal_Resume.pdf"
            className="flex items-center gap-2 bg-cyan text-white px-5 h-10 rounded-lg hover:bg-opacity-90 transition-all text-sm"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>

        {/* Resume Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-12 space-y-10">

          {/* Header */}
          <div className="border-b border-gray-200 dark:border-slate-600 pb-8">
            <h1 className="text-3xl md:text-4xl mb-1">{contact.name}</h1>
            <p className="text-cyan text-lg md:text-xl mb-4">{contact.title}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate dark:text-gray-300">
              <span className="flex items-center gap-1.5"><Mail size={14} />{contact.email}</span>
              <span className="flex items-center gap-1.5"><Phone size={14} />{contact.phone}</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} />{contact.location}</span>
              <span className="flex items-center gap-1.5"><Globe size={14} />{contact.website}</span>
              <span className="flex items-center gap-1.5"><Github size={14} />{contact.github}</span>
              <span className="flex items-center gap-1.5"><Linkedin size={14} />{contact.linkedin}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-lg font-semibold text-navy dark:text-cyan uppercase tracking-widest mb-3">Summary</h2>
            <p className="text-slate dark:text-gray-200 text-sm md:text-base leading-relaxed">{summary}</p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-lg font-semibold text-navy dark:text-cyan uppercase tracking-widest mb-5">Experience</h2>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.title}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                    <div>
                      <span className="font-semibold text-base">{job.title}</span>
                      <span className="text-slate dark:text-gray-400 text-sm"> · {job.company}</span>
                    </div>
                    <span className="text-xs text-slate dark:text-gray-400 whitespace-nowrap">{job.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1.5 list-none">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate dark:text-gray-200">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-cyan rounded-full flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-lg font-semibold text-navy dark:text-cyan uppercase tracking-widest mb-5">Projects</h2>
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.name}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <span className="font-semibold text-base">{p.name}</span>
                    <span className="text-xs text-cyan bg-cyan/10 dark:bg-cyan/20 px-2 py-0.5 rounded-full">{p.tech}</span>
                  </div>
                  <p className="text-sm text-slate dark:text-gray-200">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-semibold text-navy dark:text-cyan uppercase tracking-widest mb-5">Education</h2>
            {education.map((e) => (
              <div key={e.degree} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <p className="font-semibold text-base">{e.degree}</p>
                  <p className="text-sm text-slate dark:text-gray-400">{e.school}</p>
                  <p className="text-xs text-slate dark:text-gray-400 mt-1">{e.notes}</p>
                </div>
                <span className="text-xs text-slate dark:text-gray-400 whitespace-nowrap">{e.period}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-lg font-semibold text-navy dark:text-cyan uppercase tracking-widest mb-5">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-sm font-semibold text-cyan mb-2">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 bg-off-white dark:bg-slate-700 text-navy dark:text-gray-200 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
