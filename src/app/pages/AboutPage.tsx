import { GraduationCap, Briefcase, Target } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const designSkills = [
  'User Interface Design',
  'User Experience Design',
  'Prototyping & Wireframing',
  'Design Systems',
  'User Research',
  'Usability Testing',
  'Information Architecture',
  'Interaction Design',
];

const technicalSkills = [
  'Web Development',
  'JavaScript/TypeScript',
  'React & Next.js',
  'Tailwind CSS',
  'Git & GitHub',
  'Responsive Design',
  'Web Accessibility',
  'RESTful APIs',
];

const tools = [
  'Figma',
  'Adobe XD',
  'Photoshop',
  'Illustrator',
  'VS Code',
  'Notion',
  'Slack',
  'Jira',
];

const getAvailabilityYear = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  return currentMonth >= 6 ? currentYear + 1 : currentYear;
};

const timeline = [
  {
    icon: GraduationCap,
    title: 'Computer Science Student',
    organization: 'University',
    period: '2022 - Present',
    description: 'Pursuing a degree in Computer Science with a focus on Human-Computer Interaction and Software Engineering.',
  },
  {
    icon: Briefcase,
    title: 'UI/UX Design Intern',
    organization: 'Tech Startup',
    period: '2024 - 2025',
    description: 'Designed user interfaces for mobile and web applications, conducted user research, and created design systems.',
  },
  {
    icon: Target,
    title: 'Seeking Product Design Role',
    organization: 'Full-time Opportunity',
    period: String(getAvailabilityYear()),
    description: 'Looking for a product design position where I can combine my technical background with design thinking.',
  },
];

export function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Personal Story */}
      <section className="py-12 md:py-24 px-4 md:px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-1">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBlcnNvbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5NzUzOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mastewal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl">About Me</h1>
              <div className="space-y-4 text-sm md:text-base">
                <p className="dark:text-gray-200">
                  I'm a Computer Science student with a passion for design and a knack for development. 
                  My journey into product design began when I realized that great technology isn't just 
                  about code—it's about creating experiences that truly resonate with users.
                </p>
                <p className="dark:text-gray-200">
                  With a strong foundation in both design principles and technical implementation, I bring 
                  a unique perspective to every project. I understand the constraints developers face and 
                  can design solutions that are not only beautiful but also feasible and scalable.
                </p>
                <p className="dark:text-gray-200">
                  When I'm not designing or coding, you'll find me exploring new design systems, reading 
                  about product strategy, or contributing to open-source projects. I believe in continuous 
                  learning and staying up-to-date with the latest trends in design and technology.
                </p>
              </div>
              <div className="mt-6 md:mt-8 p-5 md:p-6 bg-cyan/10 dark:bg-cyan/20 rounded-lg border-l-4 border-cyan">
                <p className="font-medium text-navy dark:text-cyan text-sm md:text-base">Currently Available</p>
                <p className="text-slate dark:text-gray-200 mt-2 text-sm md:text-base">
                  I'm actively seeking full-time software development X product design opportunities starting in {getAvailabilityYear()}. 
                  Open to remote positions and relocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Breakdown */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center mb-8 md:mb-12 text-2xl md:text-4xl">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="mb-4 md:mb-6 text-cyan text-xl md:text-2xl">Design Skills</h3>
              <ul className="space-y-3">
                {designSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="w-2 h-2 bg-cyan rounded-full flex-shrink-0"></span>
                    <span className="text-slate dark:text-gray-200">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="mb-4 md:mb-6 text-coral text-xl md:text-2xl">Technical Skills</h3>
              <ul className="space-y-3">
                {technicalSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="w-2 h-2 bg-coral rounded-full flex-shrink-0"></span>
                    <span className="text-slate dark:text-gray-200">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="mb-4 md:mb-6 text-navy dark:text-cyan text-xl md:text-2xl">Tools & Software</h3>
              <ul className="space-y-3">
                {tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="w-2 h-2 bg-navy dark:bg-cyan rounded-full flex-shrink-0"></span>
                    <span className="text-slate dark:text-gray-200">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 md:py-24 px-4 md:px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center mb-8 md:mb-12 text-2xl md:text-4xl">My Journey</h2>
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan flex items-center justify-center">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow pb-6 md:pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-4">
                    <h3 className="text-lg md:text-xl">{item.title}</h3>
                    <span className="text-xs md:text-sm text-slate dark:text-gray-400 whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="text-cyan mb-2 text-sm md:text-base">{item.organization}</p>
                  <p className="text-slate dark:text-gray-200 text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}