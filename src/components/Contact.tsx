import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-charcoal/95 to-charcoal">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">
          Get in <span className="text-sand">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-800 rounded-lg focus:outline-none focus:border-teal text-sm sm:text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-800 rounded-lg focus:outline-none focus:border-teal text-sm sm:text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 sm:mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-800 rounded-lg focus:outline-none focus:border-teal text-sm sm:text-base"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-800 rounded-lg focus:outline-none focus:border-teal text-sm sm:text-base"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                <Send className="w-4 h-4 inline-block mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="p-4 sm:p-8 rounded-lg bg-charcoal border border-gray-800">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-teal mr-3 sm:mr-4" />
                  <span className="text-sm sm:text-base">+63 912 345 6789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-teal mr-3 sm:mr-4" />
                  <span className="text-sm sm:text-base">info@skypearlsvillas.com</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-teal mr-3 sm:mr-4" />
                  <span className="text-sm sm:text-base">WhatsApp / Telegram</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-8 rounded-lg bg-teal/10 border border-teal">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Newsletter</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Subscribe to receive updates about property releases and investment opportunities.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-800 rounded-lg focus:outline-none focus:border-teal text-sm sm:text-base"
                />
                <button type="submit" className="btn-primary w-full sm:w-auto">
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