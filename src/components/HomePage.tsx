import { Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/4bcb2727006a9444c40cc4316354782dc08d22d8.png';

export function HomePage() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/PJC1XoPYYv8?autoplay=1&mute=1&loop=1&playlist=PJC1XoPYYv8&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Run Horse Run Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Large Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logoImage} 
              alt="Run Horse Run Logo" 
              className="h-24 sm:h-32 lg:h-40 w-auto object-contain brightness-0 invert"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Run Horse Run
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-4">
            Your Vision, Our Motion
          </p>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Bringing creative stories to life through video production, filmmaking, and digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#0EA5E9] hover:bg-[#1E3A8A] text-white text-lg px-8 py-6"
              asChild
            >
              <a href="#services">
                Our Work
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] text-lg px-8 py-6"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Creative Media Production
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              From concept to delivery, we craft compelling visual narratives that resonate with your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Video Production
              </h3>
              <p className="text-[#6B7280]">
                Professional video production services from pre-production to final delivery
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Independent Films
              </h3>
              <p className="text-[#6B7280]">
                Bold storytelling and artistic vision for independent film projects
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Digital Design
              </h3>
              <p className="text-[#6B7280]">
                Modern website design and development that brings your brand to life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-white/80">
              Explore our latest work and creative endeavors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg aspect-video bg-black/40">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/DSBaDrIFgZM"
                title="Run Horse Run Project"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg aspect-video bg-black/40">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MlP5u4BpI2E"
                title="Run Horse Run Project"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#0EA5E9] hover:bg-white hover:text-[#1E3A8A] text-white text-lg px-8"
              asChild
            >
              <a href="#services">View All Work</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#000000] mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-[#6B7280] mb-8">
            Let's collaborate on your next creative project
          </p>
          <Button
            size="lg"
            className="bg-[#1E3A8A] hover:bg-[#0EA5E9] text-white text-lg px-12 py-6"
            asChild
          >
            <a href="#contact">
              Start a Project
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}