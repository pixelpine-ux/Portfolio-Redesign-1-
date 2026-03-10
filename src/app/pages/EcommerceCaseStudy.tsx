import { ArrowLeft, Clock, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import Slider from 'react-slick';
import interactionFlow1 from '@/assets/8774c180989834c4be44ced1e427dc5533339d38.png';
import interactionFlow2 from '@/assets/38c8d6ba68a807ebc4af8511e9d6aa2b7ddf63f1.png';
import interactionFlow3 from '@/assets/a669e2e4031ea043cbe036ba86cb1816e6e3b97c.png';
import interactionFlow4 from '@/assets/575c6b48a45d19b0da035f70836604559993e358.png';
import interactionFlow5 from '@/assets/33fae32c001b97bdf6e0c9df3b1866eccd359aa5.png';
import interactionFlow6 from '@/assets/1477b2cb5fcc9f5609a31800e5d9cc81ae4de3eb.png';
import interactionFlow7 from '@/assets/2b043c00f3b6c413954148ad99c9686c89c5fa92.png';

export function EcommerceCaseStudy() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    dotsClass: "slick-dots custom-dots",
  };

  const interactionFlows = [
    { src: interactionFlow1, alt: "Interaction flows - Scroll and Tap & Hold" },
    { src: interactionFlow2, alt: "Interaction flows - Swipe and Scroll" },
    { src: interactionFlow3, alt: "Interaction flows - Tap and Swipe gestures" },
    { src: interactionFlow4, alt: "Interaction Flow Guide overview" },
    { src: interactionFlow5, alt: "Key Micro-Interactions" },
    { src: interactionFlow6, alt: "Key Micro-Interactions detailed" },
    { src: interactionFlow7, alt: "Accessibility Considerations" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-6 md:pt-8">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-cyan hover:text-navy dark:hover:text-cyan/80 transition-colors text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6 md:mb-8">
            <h1 className="mb-3 md:mb-4 text-3xl md:text-5xl">E-Commerce Redesign</h1>
            <p className="text-base md:text-xl text-slate dark:text-gray-300 max-w-3xl">
              Redesigning Mode's online shopping experience to reduce cart abandonment 
              and improve mobile conversions through user-centered design.
            </p>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-cyan" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Role</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">UI/UX Designer</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-coral" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Timeline</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">4 weeks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-navy/10 dark:bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-navy dark:text-cyan" />
              </div>
              <div>
                <h4 className="mb-1 text-sm md:text-base">Team</h4>
                <p className="text-slate dark:text-gray-300 text-sm md:text-base">1 Product Manager, 2 Developers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="mb-4 md:mb-6 text-2xl md:text-4xl">The Problem</h2>
              <p className="text-base md:text-lg text-slate dark:text-gray-300 mb-4 md:mb-6">
                Mode's e-commerce platform was experiencing a <strong className="text-navy dark:text-cyan">68% cart abandonment rate</strong>, 
                significantly above the industry average of 40-50%. This was leading to substantial revenue loss 
                and indicating serious UX issues in the checkout process.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-coral pl-4">
                  <h4 className="mb-1 text-sm md:text-base">Slow Load Times</h4>
                  <p className="text-slate dark:text-gray-300 text-sm md:text-base">Product pages taking 4-6 seconds to load on mobile</p>
                </div>
                <div className="border-l-4 border-cyan pl-4">
                  <h4 className="mb-1 text-sm md:text-base">Confusing Navigation</h4>
                  <p className="text-slate dark:text-gray-300 text-sm md:text-base">Users couldn't find cart or checkout easily</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728323456862-9f506d40862b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYmFuZG9uZWQlMjBzaG9wcGluZyUyMGNhcnQlMjBwaG9uZXxlbnwxfHx8fDE3Njk5MzQ3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cart abandonment problem"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-4xl">Understanding Our Users</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="mb-4 text-xl md:text-2xl">Demographics</h3>
              <ul className="space-y-2 text-slate dark:text-gray-300 text-sm md:text-base">
                <li>• Ages 20-35</li>
                <li>• Urban professionals</li>
                <li>• Mobile-first shoppers</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="mb-4 text-xl md:text-2xl">Behavior</h3>
              <ul className="space-y-2 text-slate dark:text-gray-300 text-sm md:text-base">
                <li>• Browse during commute</li>
                <li>• Quick decision makers</li>
                <li>• Expect fast checkout</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="mb-4 text-xl md:text-2xl">Values</h3>
              <ul className="space-y-2 text-slate dark:text-gray-300 text-sm md:text-base">
                <li>• Sustainability-conscious</li>
                <li>• Quality over quantity</li>
                <li>• Transparency matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Process */}
      <section className="py-16 md:py-24 px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12 text-center">Research & Discovery</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636390877494-3ba0c41c7e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXclMjBub3Rlc3xlbnwxfHx8fDE3Njk4NTkxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="User research"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="mb-6">Multi-Method Approach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2">1. User Interviews</h4>
                  <p className="text-slate dark:text-gray-300">Conducted 12 interviews with existing customers to understand pain points</p>
                </div>
                <div>
                  <h4 className="mb-2">2. Heatmap Analysis</h4>
                  <p className="text-slate dark:text-gray-300">Analyzed user behavior to identify drop-off points in checkout flow</p>
                </div>
                <div>
                  <h4 className="mb-2">3. User Personas</h4>
                  <p className="text-slate dark:text-gray-300">Created 3 detailed personas representing our core user segments</p>
                </div>
                <div>
                  <h4 className="mb-2">4. Competitive Analysis</h4>
                  <p className="text-slate dark:text-gray-300">Reviewed best practices from leading e-commerce platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 md:py-24 px-6 bg-coral/5 dark:bg-coral/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">The Challenge</h2>
            <p className="text-lg text-slate dark:text-gray-300 mb-6">
              <strong className="text-navy dark:text-cyan">Balancing business vs. UX goals:</strong> The product manager wanted 
              to encourage account creation for customer retention and email marketing, but user research showed 
              that mandatory sign-up was a major friction point.
            </p>
            <p className="text-lg text-slate dark:text-gray-300">
              I advocated for guest checkout while designing a post-purchase account creation flow that felt 
              valuable rather than forced, ultimately aligning both business and user needs.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process & Wireframes */}
      <section className="py-16 md:py-24 px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12 text-center">Design Process</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6">From Insights to Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan text-white flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1">Ideation</h4>
                    <p className="text-slate dark:text-gray-300">Sketched multiple checkout flow variations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan text-white flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1">Wireframing</h4>
                    <p className="text-slate dark:text-gray-300">Created low-fidelity wireframes in Figma</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan text-white flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1">Prototyping</h4>
                    <p className="text-slate dark:text-gray-300">Built interactive prototypes for testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan text-white flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="mb-1">Testing & Iteration</h4>
                    <p className="text-slate dark:text-gray-300">Tested with users and refined based on feedback</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2hlc3xlbnwxfHx8fDE3Njk5MzQ3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Design wireframes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-16 md:py-24 px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12 text-center">Key Design Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3">Guest Checkout</h3>
              <p className="text-slate dark:text-gray-300">
                Removed mandatory account creation, reducing friction by 40%. Added optional 
                post-purchase account creation with clear value proposition.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3">Progress Indicator</h3>
              <p className="text-slate dark:text-gray-300">
                Added clear "Step X of 3" indicator, helping users understand how far they 
                are in the checkout process and reducing abandonment anxiety.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-navy/10 dark:bg-cyan/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy dark:text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3">Mobile-First Design</h3>
              <p className="text-slate dark:text-gray-300">
                Optimized entire flow for mobile devices with larger touch targets, 
                streamlined forms, and faster load times through image optimization.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mb-3">Design System</h3>
              <p className="text-slate dark:text-gray-300">
                Created a cohesive design system ensuring consistency across all touchpoints, 
                improving brand recognition and reducing design debt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interaction Design */}
      <section className="py-16 md:py-24 px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-6 text-center">Interaction Flow Guide</h2>
          <p className="text-center text-lg text-slate dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Mobile gesture patterns and micro-interactions designed to create an intuitive, 
            native-feeling shopping experience for urban professionals browsing on-the-go.
          </p>
          
          <div className="space-y-8">
            <Slider {...carouselSettings}>
              {interactionFlows.map((flow, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <img src={flow.src} alt={flow.alt} className="w-full" />
                </div>
              ))}
            </Slider>
          </div>

          {/* Interaction Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border-l-4 border-cyan">
              <h4 className="mb-2">Gesture-Based</h4>
              <p className="text-slate dark:text-gray-300 text-sm">
                Swipe for product galleries, pinch to zoom, tap & hold for quick actions
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border-l-4 border-coral">
              <h4 className="mb-2">Micro-Interactions</h4>
              <p className="text-slate dark:text-gray-300 text-sm">
                Button feedback, form validation, success animations, loading states
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border-l-4 border-navy dark:border-cyan">
              <h4 className="mb-2">Accessibility</h4>
              <p className="text-slate dark:text-gray-300 text-sm">
                44px touch targets, haptic feedback, screen reader support, motion reduction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-cyan/5 to-coral/5 dark:from-cyan/10 dark:to-coral/10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12 text-center">Expected Results</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjaGVja291dCUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3Njk5MzQ3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Success metrics"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-slate dark:text-gray-300 mb-8">
                Based on prototype testing with 24 users and industry benchmarks, 
                we projected significant improvements in key metrics:
              </p>
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-bold text-cyan">25%</span>
                    <span className="text-xl text-slate">reduction</span>
                  </div>
                  <p className="text-slate dark:text-gray-300">
                    Expected decrease in cart abandonment rate from 68% to ~51%, 
                    bringing it closer to industry standards
                  </p>
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-bold text-coral">40%</span>
                    <span className="text-xl text-slate dark:text-gray-300">increase</span>
                  </div>
                  <p className="text-slate dark:text-gray-300">
                    Projected increase in mobile conversions due to optimized mobile-first 
                    design and faster load times
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 md:py-24 px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12 text-center">Lessons Learned</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-off-white dark:bg-slate-800 p-8 rounded-lg">
              <h3 className="mb-4">Data-Driven Advocacy</h3>
              <p className="text-slate dark:text-gray-300">
                Using prototype test results and industry benchmarks helped me successfully 
                advocate for guest checkout despite initial stakeholder resistance.
              </p>
            </div>
            <div className="bg-off-white dark:bg-slate-800 p-8 rounded-lg">
              <h3 className="mb-4">Mobile-First Matters</h3>
              <p className="text-slate dark:text-gray-300">
                For urban professionals who shop during commutes, designing for mobile first 
                wasn't just best practice—it was essential for business success.
              </p>
            </div>
            <div className="bg-off-white dark:bg-slate-800 p-8 rounded-lg">
              <h3 className="mb-4">Micro-Interactions Impact</h3>
              <p className="text-slate dark:text-gray-300">
                Small details like loading animations and haptic feedback significantly 
                improved perceived performance and user confidence.
              </p>
            </div>
            <div className="bg-off-white dark:bg-slate-800 p-8 rounded-lg">
              <h3 className="mb-4">Design Systems Save Time</h3>
              <p className="text-slate dark:text-gray-300">
                Building a design system upfront made collaboration with developers smoother 
                and ensured consistency across all pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6 bg-navy dark:bg-black text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="mb-6 text-white">Next Steps</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Following successful prototype testing, the design was handed off to developers 
            for implementation with plans to A/B test key features and iterate based on real user data.
          </p>
          <Link 
            to="/work" 
            className="inline-block px-8 py-3 bg-cyan text-white rounded-lg hover:bg-cyan/90 transition-colors"
          >
            View More Projects
          </Link>
        </div>
      </section>
    </main>
  );
}