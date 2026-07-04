'use client';

import React, { useState } from 'react';
import { 
  Phone, Shield, Award, CheckCircle, Star, FileText, 
  ChevronRight, Menu, X, Hammer, ShieldAlert, Home, 
  Building2, HardHat, MapPin, HelpCircle
} from 'lucide-react';
import Image from 'next/image';
import operationsImage1 from '../public/landing-page-images/site_operations_image1.png'
import operationsImage2 from '../public/landing-page-images/site_operations_image2.png'
import operationsImage3 from '../public/landing-page-images/site_operations_image3.png'

export default function BrightMinimalRoofingLandingPage() {
  // Form State Selection Management
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('');
  const [issueType, setIssueType] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Active Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* 1. MINIMAL STICKY HEADER & ACCELERATED DISPATCH BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Structural Brand Identity */}
            <div className="flex-shrink-0 flex items-center space-x-2.5">
              <span className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
                NEWHAUS<span className="text-blue-600 font-light tracking-wide">ROOFING</span>
              </span>
            </div>

            {/* Clean Semantic Navigation Links */}
            <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase text-slate-500">
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#matrix" className="hover:text-blue-600 transition-colors">Why Us</a>
              <a href="#faqs" className="hover:text-blue-600 transition-colors">FAQs</a>
            </nav>

            {/* Light Red Urgent Contact Triggers */}
            <div className="hidden lg:flex items-center space-x-5">
              <div className="text-right">
                <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">CA Region</p>
                <a href="tel:7473355704" className="text-slate-900 font-bold hover:text-blue-600 flex items-center justify-end space-x-1 text-sm tracking-tight transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-600" /> <span>(747) 335-5704</span>
                </a>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <div className="text-right">
                <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">TX Region</p>
                <a href="tel:2815550199" className="text-slate-900 font-bold hover:text-blue-600 flex items-center justify-end space-x-1 text-sm tracking-tight transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-600" /> <span>(281) 555-0199</span>
                </a>
              </div>
              <a 
                href="#inspection-portal" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-widest px-5 py-3 rounded-lg shadow-sm shadow-red-600/10 transition-colors"
              >
                Free Inspection
              </a>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-500 hover:text-slate-900 p-2 transition-colors"
                aria-label="Toggle Mobile Interface"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a href="tel:7473355704" className="flex flex-col items-center justify-center p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Call CA Hub</span>
                <span className="text-xs font-bold text-slate-900 mt-1 hover:text-blue-600 transition-colors">(747) 335-5704</span>
              </a>
              <a href="tel:2815550199" className="flex flex-col items-center justify-center p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Call TX Hub</span>
                <span className="text-xs font-bold text-slate-900 mt-1 hover:text-blue-600 transition-colors">(281) 555-0199</span>
              </a>
            </div>
            <a 
              href="#inspection-portal"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-blue-600 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest"
            >
              Request Free Inspection
            </a>
          </div>
        )}
      </header>

      {/* 2. BRIGHT, HIGH-INTENSITY HERO AND QUALIFICATION MATRIX */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Value Proposition Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-white border border-slate-200/60 px-4 py-2 rounded-full shadow-xs">
                <div className="flex text-blue-600 space-x-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-red-600" />)}
                </div>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">
                  4.5/5 Verified Score Across 190+ Corporate & Home Inspections
                </span>
              </div>

              {/* Semantic Machine + Human Variant Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                Trusted Roof Replacements & <span className="text-blue-600">Emergency Repair</span> Across CA & TX
              </h1>

              <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                From storm-damage mitigation to full commercial installations. Experience zero processing friction, clear local financing options, and 24/7 urgent service deployment from certified teams near you.
              </p>

              {/* Urgent Call Routing */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="tel:7473355704" 
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md shadow-red-600/10 transition-transform transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>EMERGENCY DISPATCH IN CA</span>
                </a>
                <a 
                  href="tel:2815550199" 
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-transform transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>EMERGENCY DISPATCH IN TX</span>
                </a>
              </div>

              {/* Authority Triggers */}
              <div className="pt-8 border-t border-slate-200">
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
                  <div className="flex items-center space-x-1.5"><Award className="w-4 h-4 text-blue-600" /> <span>GAF Certified</span></div>
                  <div className="flex items-center space-x-1.5"><Shield className="w-4 h-4 text-blue-600" /> <span>Owens Corning Elite</span></div>
                  <div className="flex items-center space-x-1.5"><CheckCircle className="w-4 h-4 text-blue-600" /> <span>BBB Accredited A+</span></div>
                </div>
              </div>

            </div>

            {/* MINIMAL INTERACTIVE WIZARD CARD */}
            <div id="inspection-portal" className="lg:col-span-5 w-full max-w-md mx-auto">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xl relative">
                
                <div className="mb-6">
                  <div className="flex justify-between items-center text-[10px] font-mono mb-2">
                    <span className="text-blue-600 font-bold uppercase tracking-widest">Secure Dispatch Portal</span>
                    <span className="text-slate-400">Step {step} of 3</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Schedule Damage Inspection</h3>
                  
                  {/* Progress Line */}
                  <div className="w-full bg-slate-100 h-1 mt-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleNextStep} className="space-y-4">
                  {step === 1 && (
                    <div className="space-y-2.5 animate-fadeIn">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Select Facility Type:</label>
                      {['Residential Home', 'Commercial Asset', 'Multi-Family Complex'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => { setPropertyType(option); setStep(2); }}
                          className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${
                            propertyType === option 
                              ? 'bg-red-50/50 border-red-500 text-blue-600' 
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <span>{option}</span>
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-2.5 animate-fadeIn">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Identify Primary Vulnerability:</label>
                      {['Active Structural Leak / Storm Damage', 'Complete Roof Replacement Estimate', 'General Maintenance Check'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => { setIssueType(option); setStep(3); }}
                          className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${
                            issueType === option 
                              ? 'bg-red-50/50 border-red-500 text-blue-600' 
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <span>{option}</span>
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                      <button type="button" onClick={() => setStep(1)} className="text-xs text-slate-400 hover:text-slate-900 underline mt-1 block transition-colors">Previous Step</button>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <label htmlFor="zip" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Input Regional Zip Code:</label>
                        <input
                          type="text"
                          id="zip"
                          required
                          pattern="[0-9]{5}"
                          placeholder="e.g. 90210"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 text-sm font-medium"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest shadow-sm transition-colors flex items-center justify-center space-x-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Match Local Field Fleet</span>
                      </button>
                      <button type="button" onClick={() => setStep(2)} className="text-xs text-slate-400 hover:text-slate-900 underline block text-center w-full transition-colors">Modify Parameters</button>
                    </div>
                  )}
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MINIMAL TECHNICAL GRID (SERVICES) */}
      <section id="services" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Operations Ecosystem</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Advanced Roofing Layout Configurations</h2>
            <p className="text-slate-500 text-sm sm:text-base">Precision engineered deployment models across residential, commercial, and multi-family infrastructure blocks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 hover:bg-white hover:cursor-pointer hover:border-slate-200 transition-all duration-200 group">
              <div className="bg-white text-blue-600 p-3 rounded-xl w-fit border border-slate-100 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Residential Replacement</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Complete structural teardowns utilizing certified high-end dimensional shingle products with lifetime architectural backing.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 hover:bg-white hover:cursor-pointer hover:border-slate-200 transition-all duration-200 group">
              <div className="bg-white text-blue-600 p-3 rounded-xl w-fit border border-slate-100 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Commercial Asset Systems</h3>
              <p className="text-xs text-slate-500 leading-relaxed">High-performance low-slope configurations built around commercial heat-reflective single-ply TPO armor coatings.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 hover:bg-white hover:cursor-pointer hover:border-slate-200 transition-all duration-200 group">
              <div className="bg-white text-blue-600 p-3 rounded-xl w-fit border border-slate-100 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Storm Damage Mitigation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Immediate validation reporting following severe wind, impact, or hail events to ensure proper insurance carrier integration.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 hover:bg-white hover:cursor-pointer hover:border-slate-200 transition-all duration-200 group">
              <div className="bg-white text-blue-600 p-3 rounded-xl w-fit border border-slate-100 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Maintenance & Diagnostic</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Targeted localized repairs, flashing remediation, seal adjustments, and ongoing property asset defense protocols.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BRIGHT, HIGH-CONTRAST PROJECT SHOWCASE WITH CLEAN IMAGES */}
      <section id="projects" className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-2">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Verified Deployments</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Recent Architectural Site Operations</h2>
            </div>
            <div className="flex space-x-2 text-[10px] font-mono font-bold">
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-md text-blue-600">California Division</span>
              <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-md text-blue-600">Texas Division</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project Card 1 */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow group">
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                {/* Clean Modern Image Placeholder Tag */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src={operationsImage1} alt="Modern single-family home in California with newly installed clean red-toned architectural tile roof" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" /> <span>Los Angeles, CA</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">GAF Shingle Structural Renovation</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Complete underlayment and deck replacement following intense regional storm patterns, updating visual aesthetics.</p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow group">
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                {/* Clean Modern Image Placeholder Tag */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src={operationsImage2} alt="Aerial drone perspective of a massive commercial warehouse facility showcasing clean reflective light-colored TPO roofing sheet system" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" /> <span>Houston, TX</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Commercial Facility Flat TPO Installation</h4>
                <p className="text-xs text-slate-500 leading-relaxed">High-reflectivity cooling membrane integration across a logistics center framework to dramatically curb utility expenditures.</p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow group">
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                {/* Clean Modern Image Placeholder Tag */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src={operationsImage3} alt="Modern light gray townhouses cluster being inspected by local roofing technician wearing red company uniform protective hardhat" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" /> <span>Dallas, TX</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Multi-Family Leak Isolations & Flashing Fixes</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Systemic flashing corrections across critical valleys and structural masonry transitions to stop internal moisture accumulation.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. MINIMALIST SPECIFICATION COMPOSITE (WHY US) */}
      <section id="matrix" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-2">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Verification Engine</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Comparing Operational Metrics</h2>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-mono uppercase tracking-wider">
                  <th className="p-4 sm:p-6">Structural Metric</th>
                  <th className="p-4 sm:p-6">Standard Operators</th>
                  <th className="p-4 sm:p-6 text-blue-600 bg-red-50/20">Newhaus Standard</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-slate-600 divide-y divide-slate-100">
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-slate-900">Material Procurement Tier</td>
                  <td className="p-4 sm:p-6 text-slate-400">Basic Generic Sourcing</td>
                  <td className="p-4 sm:p-6 bg-red-50/20 text-slate-900 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" /> <span className="font-semibold">GAF Master Elite / Owens Corning Platinum</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-slate-900">Warranty Framework</td>
                  <td className="p-4 sm:p-6 text-slate-400">Limited 5-10 Year Constraints</td>
                  <td className="p-4 sm:p-6 bg-red-50/20 text-slate-900">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" /> <span className="font-semibold">Lifetime Comprehensive Structural Guarantees</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-slate-900">Emergency Response Response</td>
                  <td className="p-4 sm:p-6 text-slate-400">Next-Day Call Queues</td>
                  <td className="p-4 sm:p-6 bg-red-50/20 text-slate-900">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" /> <span className="font-semibold">24/7 Monitored Live Regional Radio Dispatch</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. MINIMALIST ACCORDION SECTION (FAQS) */}
      <section id="faqs" className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-2">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Technical Explanations</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Frequently Answered Queries</h2>
          </div>

          <div className="space-y-3.5">
            {[
              {
                q: "How does Newhaus coordinate multi-state projects across CA and TX?",
                a: "We maintain distinct regional headquarters in both California and Texas. Each local hub functions with its own active field equipment pools, regional adjusters, and deployment fleets to maintain response agility."
              },
              {
                q: "What explicit benefits do GAF Master Elite credentials provide?",
                a: "Fewer than 2% of specialized roofing companies qualify for this manufacturing credential. It ensures strict factory certification protocols and permits our teams to issue total multi-decade golden pledge lifetime system assurances."
              },
              {
                q: "How fast will emergency crews arrive to manage active leak situations?",
                a: "Emergency calls transfer immediately to the field manager closest to your area. During heavy storms, our immediate priority is structural stabilization and shrink-wrap tarp protection to limit property damage."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-6 py-4.5 font-bold text-sm sm:text-base text-slate-900 flex justify-between items-center hover:bg-slate-50 hover:cursor-pointer transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-blue-600 transform transition-transform duration-200 ${activeFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 border-t border-slate-100 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CLEAN SYSTEM FOOTER */}
      <footer className="bg-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">© 2026 Newhaus Roofing Group. All System Operational Rights Preserved.</p>
          <div className="flex justify-center space-x-6 text-xs font-semibold text-slate-400">
            <a href="#inspection-portal" className="hover:text-blue-600 transition-colors">Privacy Specifications</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Coverage Boundaries</a>
            <a href="tel:7473355704" className="hover:text-blue-600 transition-colors">Corporate Dispatch</a>
          </div>
        </div>
      </footer>

    </div>
  );
}