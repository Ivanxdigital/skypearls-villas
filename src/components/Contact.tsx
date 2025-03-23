import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  // Function to check if a field should display as focused or filled
  const isActiveField = (id: string): boolean => {
    if (id === 'name') return focusedField === 'name' || formData.name !== '';
    if (id === 'email') return focusedField === 'email' || formData.email !== '';
    if (id === 'phone') return focusedField === 'phone' || formData.phone !== '';
    if (id === 'message') return focusedField === 'message' || formData.message !== '';
    return false;
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-charcoal/95 to-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 font-poppins">
          Get in <span className="text-sand">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Form Side */}
          <div className="relative bg-charcoal/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-sand/5 rounded-2xl pointer-events-none"></div>
            
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle className="text-teal w-16 h-16 mb-6 animate-appear" />
                <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
                <p className="text-gray-300 max-w-md">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-2">
                {/* Name Field */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 bg-transparent border-b ${
                      isActiveField('name') ? 'border-teal' : 'border-gray-700'
                    } focus:outline-none focus:border-sand transition-colors duration-300 text-white`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <label 
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      isActiveField('name') 
                        ? '-top-2 text-xs text-sand' 
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Full Name
                  </label>
                </div>
                
                {/* Email Field */}
                <div className="relative mb-6">
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 bg-transparent border-b ${
                      isActiveField('email') ? 'border-teal' : 'border-gray-700'
                    } focus:outline-none focus:border-sand transition-colors duration-300 text-white`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      isActiveField('email') 
                        ? '-top-2 text-xs text-sand' 
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Email Address
                  </label>
                </div>
                
                {/* Phone Field */}
                <div className="relative mb-6">
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-3 bg-transparent border-b ${
                      isActiveField('phone') ? 'border-teal' : 'border-gray-700'
                    } focus:outline-none focus:border-sand transition-colors duration-300 text-white`}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <label 
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      isActiveField('phone') 
                        ? '-top-2 text-xs text-sand' 
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Phone Number
                  </label>
                </div>
                
                {/* Message Field */}
                <div className="relative mb-6">
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 bg-charcoal/30 border-b ${
                      isActiveField('message') ? 'border-teal' : 'border-gray-700'
                    } focus:outline-none focus:border-sand transition-colors duration-300 rounded-md text-white`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  ></textarea>
                  <label 
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      isActiveField('message') 
                        ? '-top-2 text-xs text-sand' 
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Your Message
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-4 px-6 rounded-md font-medium transition-all duration-300 mt-4
                    ${formStatus === 'submitting' 
                      ? 'bg-gray-700 cursor-wait' 
                      : 'bg-gradient-to-r from-teal to-teal/80 hover:from-sand hover:to-sand/80 text-white shadow-lg hover:shadow-teal/20'
                    } flex items-center justify-center`}
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Info Side */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-charcoal/90 to-charcoal border border-gray-800/50 shadow-lg transform transition hover:scale-[1.01] duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-sand">Contact Information</h3>
              <div className="space-y-5">
                <a href="tel:+639123456789" className="flex items-center group cursor-pointer">
                  <div className="bg-teal/10 p-3 rounded-full mr-4 group-hover:bg-teal/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-base group-hover:text-sand transition-colors duration-300">+63 912 345 6789</span>
                </a>
                <a href="mailto:info@skypearlsvillas.com" className="flex items-center group cursor-pointer">
                  <div className="bg-teal/10 p-3 rounded-full mr-4 group-hover:bg-teal/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-base group-hover:text-sand transition-colors duration-300">info@skypearlsvillas.com</span>
                </a>
                <a href="#" className="flex items-center group cursor-pointer">
                  <div className="bg-teal/10 p-3 rounded-full mr-4 group-hover:bg-teal/20 transition-colors duration-300">
                    <MessageSquare className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-base group-hover:text-sand transition-colors duration-300">WhatsApp / Telegram</span>
                </a>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-tr from-teal/20 to-teal/5 border border-teal/30 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to receive updates about property releases and investment opportunities.
              </p>
              <form className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-charcoal/50 border border-teal/30 rounded-md focus:outline-none focus:border-sand transition-colors duration-300"
                  />
                </div>
                <button type="submit" className="bg-sand hover:bg-sand/90 text-charcoal py-3 px-6 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS (index.css)
// @keyframes appear {
//   from { opacity: 0; transform: scale(0.9); }
//   to { opacity: 1; transform: scale(1); }
// }
// .animate-appear {
//   animation: appear 0.3s ease-out forwards;
// }