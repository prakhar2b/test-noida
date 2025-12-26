import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Get Expert Guidance
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Have questions about a property or need help finding your dream home? 
              Our real estate experts are here to help you every step of the way.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href="tel:+919880083870"
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Give us a call on</p>
                  <p className="text-xl font-bold text-gray-900">+91 9880083870</p>
                </div>
              </a>

              <a 
                href="https://api.whatsapp.com/send?phone=919958845444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-50 to-white rounded-xl border border-green-100 hover:border-green-300 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-green-200">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Chat on WhatsApp</p>
                  <p className="text-xl font-bold text-gray-900">With Our Experts!</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <p className="text-lg font-bold text-gray-900">Mon - Sun: 9 AM - 9 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit Our Office</p>
                  <p className="text-lg font-bold text-gray-900">Sector 62, Noida, UP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Our Experts</h3>
            <p className="text-gray-600 mb-8">Fill in your details and we'll get back to you shortly</p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <p className="text-xs text-gray-500">
                  By submitting, I authorize InvestoXpert to contact me via Call, SMS, Email or WhatsApp.
                </p>

                <Button 
                  type="submit" 
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;