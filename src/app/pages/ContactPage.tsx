import { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Mock submission - in real app, this would send to a backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-off-white dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl">Let's Work Together</h1>
          <p className="text-base md:text-xl text-slate dark:text-gray-200 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Send me a message and I'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
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
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-14 px-4 border-2 rounded-lg transition-colors focus:outline-none focus:border-cyan bg-white dark:bg-slate-700 dark:text-white ${
                      errors.name ? 'border-coral' : 'border-gray-200 dark:border-slate-600'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-coral text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full h-14 px-4 border-2 rounded-lg transition-colors focus:outline-none focus:border-cyan bg-white dark:bg-slate-700 dark:text-white ${
                      errors.email ? 'border-coral' : 'border-gray-200 dark:border-slate-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-coral text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-colors focus:outline-none focus:border-cyan resize-none bg-white dark:bg-slate-700 dark:text-white ${
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
                  className="w-full bg-cyan text-white h-12 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
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
                      <p className="text-slate dark:text-gray-200 mb-2">
                        For general inquiries and project discussions
                      </p>
                      <a 
                        href="mailto:mastewal@example.com" 
                        className="text-cyan hover:underline"
                      >
                        mastewal@example.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <h3 className="mb-2">LinkedIn</h3>
                      <p className="text-slate dark:text-gray-200 mb-2">
                        Connect with me professionally
                      </p>
                      <a 
                        href="https://linkedin.com/in/mastewal" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan hover:underline"
                      >
                        linkedin.com/in/mastewal
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-navy dark:bg-slate-800 text-white p-6 rounded-lg">
                  <h3 className="text-white mb-2">Response Time</h3>
                  <p className="text-gray-200">
                    I typically respond to messages within 24 hours during weekdays. 
                    For urgent inquiries, please mention it in your message subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}