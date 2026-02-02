import React from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const preSelectedPlan = location.state || {};
  
  const whatsappNumber = '201222551766'; // Your WhatsApp number with country code
  const googleFormUrl = '';
  
  const plan = preSelectedPlan.plan || 'a program';
  const type = preSelectedPlan.type || 'session';
  
  const whatsappMessage = `Hi JUPITER ! 🤖\n\nI'm interested in registering for:\n📚 Plan: ${plan}\n👥 Type: ${type}\n\nCan you help me get started?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-6">🤖</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Start Coding?
          </h1>
          <p className="text-xl text-gray-600">
            Choose how you'd like to register with JUPITER !
          </p>
        </div>

        {/* Registration Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* WhatsApp Option */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition transform hover:-translate-y-2">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">💬</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Chat with Us</h2>
              <p className="text-gray-600 mb-6">
                Get instant responses! Message us on WhatsApp and we'll help you register right away.
              </p>
              <ul className="text-left mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Instant replies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Ask questions directly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Schedule a call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Quick & easy</span>
                </li>
              </ul>

              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition"
              >
                Open WhatsApp 💬
              </a>
              <p className="text-sm text-gray-500 mt-4">
                📱 +20 12 22551766
              </p>
            </div>
          </div>

          {/* Google Form Option */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition transform hover:-translate-y-2">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">📝</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Fill the Form</h2>
              <p className="text-gray-600 mb-6">
                Prefer forms? Fill out our Google Form with your details and we'll contact you soon!
              </p>
              <ul className="text-left mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Simple & structured</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Takes 2 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">We'll call you back</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">Secure & private</span>
                </li>
              </ul>

              {/* Google Form Button */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition"
              >
                Open Form 📝
              </a>
            </div>
          </div>

        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">📞 Other Ways to Reach Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📧</div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <a href="mailto:jupiter.belbies@gmail.com" className="text-primary font-semibold hover:underline">
                jupiter.belbies@gmail.com
              </a>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📱</div>
              <p className="text-sm text-gray-600 mb-1">Phone</p>
              <a href="tel:0 12 22551766" className="text-primary font-semibold hover:underline">
                0 12 22551766
              </a>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📍</div>
              <p className="text-sm text-gray-600 mb-1">Location</p>
              <p className="text-gray-700 font-semibold">Online - Cairo, Egypt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;