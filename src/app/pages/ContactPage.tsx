import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle, Github, Clock } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_8kz8uw8';
const EMAILJS_TEMPLATE_ID = 'template_vm7cl7o';
const EMAILJS_PUBLIC_KEY = 'J9n1aMxmRnppynOYs';
const SUCCESS_MESSAGE_DURATION = 5000;

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), SUCCESS_MESSAGE_DURATION);
    } catch {
      setSubmitError('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5 dark:bg-cyan/10">
            <span className="text-xs font-mono text-cyan tracking-wide">// contact</span>
          </div>
          <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl">Let's Work Together</h1>
          <p className="text-base md:text-xl text-slate dark:text-gray-200 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Send me a message and I'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-24 px-4 md:px-6 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5 dark:bg-cyan/10">
                <span className="text-xs font-mono text-cyan tracking-wide">// send a message</span>
              </div>
              {submitError && (
                <div className="mb-6 p-4 bg-coral/10 dark:bg-coral/20 border-l-4 border-coral rounded">
                  <div className="flex items-center gap-2 text-coral">
                    <AlertCircle size={20} />
                    <span className="font-medium text-sm md:text-base">{submitError}</span>
                  </div>
                </div>
              )}

              {isSubmitted && (
                <div className="mb-6 p-4 bg-cyan/10 dark:bg-cyan/20 border-l-4 border-cyan rounded">
                  <div className="flex items-center gap-2 text-cyan">
                    <CheckCircle2 size={20} />
                    <span className="font-medium text-sm md:text-base">Message sent successfully!</span>
                  </div>
                  <p className="text-slate dark:text-gray-200 mt-1 text-xs md:text-sm">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-slate dark:text-gray-200">
                    Name <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    className={`w-full h-14 px-4 border-2 rounded-lg transition-all focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 bg-white dark:bg-slate-700 dark:text-white ${
                      errors.name ? 'border-coral' : 'border-gray-200 dark:border-slate-600'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-coral text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-slate dark:text-gray-200">
                    Email <span className="text-coral">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    className={`w-full h-14 px-4 border-2 rounded-lg transition-all focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 bg-white dark:bg-slate-700 dark:text-white ${
                      errors.email ? 'border-coral' : 'border-gray-200 dark:border-slate-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-coral text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-slate dark:text-gray-200">
                    Message <span className="text-coral">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 resize-none bg-white dark:bg-slate-700 dark:text-white ${
                      errors.message ? 'border-coral' : 'border-gray-200 dark:border-slate-600'
                    }`}
                    placeholder="Tell me about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-coral text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan text-white h-12 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : <> Send Message <Send size={18} /> </>}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Other Ways to Connect</h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <h3 className="mb-2">Email</h3>
                      <p className="text-slate dark:text-gray-200 mb-2 text-sm">For general inquiries and project discussions</p>
                      <a href="mailto:iammastewal@gmail.com" className="text-cyan hover:underline text-sm">iammastewal@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="mb-2">LinkedIn</h3>
                      <p className="text-slate dark:text-gray-200 mb-2 text-sm">Connect with me professionally</p>
                      <a href="https://linkedin.com/in/mastewal-alemu-a65b2a2b9" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                        linkedin.com/in/mastewal-alemu
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="mb-2">GitHub</h3>
                      <p className="text-slate dark:text-gray-200 mb-2 text-sm">See my code and open source work</p>
                      <a href="https://github.com/pixelpine-ux" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:underline text-sm">
                        github.com/pixelpine-ux
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border-l-4 border-cyan bg-cyan/5 dark:bg-cyan/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-cyan" />
                    <h3 className="text-navy dark:text-cyan">Response Time</h3>
                  </div>
                  <p className="text-slate dark:text-gray-300 text-sm">
                    I typically respond within 24 hours during weekdays. 
                    For urgent inquiries, please mention it in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}