/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  Users, 
  ShieldCheck, 
  Award, 
  ChevronDown, 
  Search, 
  AlertTriangle, 
  Home,
  Wrench
} from 'lucide-react';

// --- Components ---

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">Boyd's Septic Service</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
          <a href="#book" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Book Now</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:7065551234" 
            className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
          >
            <Phone size={18} />
            <span className="hidden sm:inline text-sm">Emergency Call</span>
          </a>
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative py-20 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            24/7 Emergency Service
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Boyd's Septic. <br />
            <span className="text-blue-600">Here when you need us.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            No Facebook login required. No waiting until morning. Just fast, reliable septic service across North Georgia. When you have a problem at 2 AM, we're just one click away.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="tel:7065551234" 
              className="flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-100"
            >
              <Phone size={20} />
              (706) 555-1234
            </a>
            <a 
              href="#book" 
              className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-100"
            >
              Schedule Service
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-orange-500" />
              24/7 Available
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-orange-500" />
              Serving North Georgia
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1000" 
              alt="Boyd's Septic Service Truck" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Licensed & Insured</p>
                <p className="text-xs text-gray-500">Professional Georgia Technicians</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { icon: Star, label: "Star Rating", value: "5.0", sub: "Based on 200+ Reviews" },
    { icon: Users, label: "Happy Customers", value: "500+", sub: "Across North Georgia" },
    { icon: Clock, label: "Emergency Response", value: "<30 Min", sub: "Average Arrival Time" },
    { icon: Award, label: "In Business", value: "15+ Years", sub: "Family Owned & Operated" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-4">
                <stat.icon className="text-orange-500 w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-[10px] text-gray-500">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const services = [
    {
      icon: Wrench,
      title: "Septic Tank Pumping",
      price: "$250 - $400",
      desc: "Regular maintenance pumping to keep your system running smoothly. Recommended every 3-5 years.",
      features: ["Complete tank evacuation", "System inspection", "Filter cleaning"]
    },
    {
      icon: Search,
      title: "System Inspections",
      price: "$150 - $200",
      desc: "Thorough inspection of your entire septic system to identify potential issues before they become emergencies.",
      features: ["Visual inspection", "Flow testing", "Detailed report"]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Repairs",
      price: "$350+",
      desc: "24/7 emergency service for backups, overflows, and system failures. We respond fast when you need us most.",
      features: ["24/7 availability", "Fast response", "Expert diagnosis"]
    },
    {
      icon: Home,
      title: "New System Installation",
      price: "$3,000+",
      desc: "Complete septic system design and installation for new construction or system replacement.",
      features: ["Custom design", "Permit handling", "Professional installation"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Clear Pricing. No Surprises.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe in transparent pricing. Here's what you can expect when you work with Boyd's Septic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <service.icon className="text-orange-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-2xl font-extrabold text-orange-600 mb-4">{service.price}</p>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "How often should I pump my septic tank?", a: "Most septic tanks should be pumped every 3 to 5 years, depending on the size of your household and usage." },
    { q: "What are the warning signs of septic problems?", a: "Common signs include slow drains, gurgling sounds in pipes, sewage odors, and unusually lush green grass over the drain field." },
    { q: "Do you offer 24/7 emergency service?", a: "Yes! We provide 24/7 emergency septic services across North Georgia for backups and overflows." },
    { q: "How much does septic tank pumping cost?", a: "Our standard pumping service typically ranges from $250 to $400, depending on the tank size and accessibility." },
    { q: "What areas do you serve?", a: "We serve all of North Georgia, including Hall, Gwinnett, Forsyth, and surrounding counties." },
    { q: "How long does a septic system last?", a: "With proper maintenance, a well-designed septic system can last 20 to 30 years or even longer." },
    { q: "Do I need a permit for septic work?", a: "Most repairs and all new installations require a permit from the local health department. We handle the permit process for you." }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">Common Questions</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                <ChevronDown className={`text-gray-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => (
  <section id="book" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">Schedule Service</p>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Book Your Appointment</h2>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-8 bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000" 
              alt="Septic Pumping Operations" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Phone className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Call Us</p>
                <p className="text-sm font-bold text-gray-900">(706) 555-1234</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Clock className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Response Time</p>
                <p className="text-sm font-bold text-gray-900">Under 30 Minutes</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Our Service Area</h3>
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1605733161236-466723696803?auto=format&fit=crop&q=80&w=1000" 
                alt="Service Area Truck" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-blue-100 flex items-center gap-2">
                  <MapPin size={14} className="text-blue-600" />
                  <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tight">Serving All North Georgia</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500 leading-relaxed">
              We provide 24/7 emergency and scheduled septic services to Hall, Gwinnett, Forsyth, and all surrounding North Georgia counties.
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-2xl shadow-blue-50">
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Full Name *</label>
              <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Service Type *</label>
              <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none bg-white">
                <option>Septic Tank Pumping</option>
                <option>System Inspection</option>
                <option>Emergency Repair</option>
                <option>New Installation</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Preferred Date *</label>
              <input type="date" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Additional Details (Optional)</label>
              <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Tell us about your issue..."></textarea>
            </div>
            <button className="w-full bg-orange-600 text-white py-5 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-100">
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="text-blue-400 w-8 h-8" />
            <span className="text-xl font-bold">Boyd's Septic Service</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Providing expert septic services to North Georgia for over 15 years. Family owned, community focused, and always here when you need us.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact Us</h4>
          <div className="space-y-4">
            <a href="tel:7065551234" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <Phone size={18} className="text-blue-400" />
              (706) 555-1234
            </a>
            <div className="flex items-center gap-3 text-slate-400">
              <MapPin size={18} className="text-blue-400" />
              Serving all of North Georgia
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Business Hours</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-400">
              <Clock size={18} className="text-blue-400" />
              Emergency Service: 24/7
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Calendar size={18} className="text-blue-400" />
              Office: Mon - Fri, 8AM - 5PM
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs text-center sm:text-left">
          © 2026 Boyd's Septic Service. All rights reserved.
        </p>
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">System Online</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Pricing />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
