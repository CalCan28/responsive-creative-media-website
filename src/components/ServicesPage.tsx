import { Video, Film, Globe, Users, Edit3, Play, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function ServicesPage() {
  const services = [
    {
      icon: Video,
      title: 'Video Production',
      description: 'End-to-end video production services for commercials, corporate videos, and branded content.',
      features: [
        'Pre-production planning & scripting',
        'Professional cinematography',
        'Multi-camera setups',
        'Lighting & sound design',
        'Location scouting',
      ],
      color: 'from-[#1E3A8A] to-[#0EA5E9]',
    },
    {
      icon: Edit3,
      title: 'Video Editing',
      description: 'Expert post-production services that transform raw footage into polished, compelling content.',
      features: [
        'Color grading & correction',
        'Sound mixing & design',
        'Motion graphics',
        'VFX integration',
        'Multiple format delivery',
      ],
      color: 'from-[#0EA5E9] to-[#1E3A8A]',
    },
    {
      icon: Film,
      title: 'Independent Filmmaking',
      description: 'Bringing independent film visions to life with passion, creativity, and technical excellence.',
      features: [
        'Narrative development',
        'Festival preparation',
        'Creative collaboration',
        'Distribution strategy',
        'Budget optimization',
      ],
      color: 'from-[#1E3A8A] to-[#000000]',
    },
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites that showcase your brand and engage your audience.',
      features: [
        'Custom design systems',
        'Responsive layouts',
        'E-commerce integration',
        'SEO optimization',
        'Content management',
      ],
      color: 'from-[#0EA5E9] to-[#1E3A8A]',
    },
    {
      icon: Users,
      title: 'Conference Production',
      description: 'Professional event production services ensuring your conference runs flawlessly.',
      features: [
        'Live streaming',
        'Multi-camera coverage',
        'Presentation recording',
        'Real-time editing',
        'Post-event highlights',
      ],
      color: 'from-[#000000] to-[#1E3A8A]',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive creative media solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <Icon size={48} className="flex-shrink-0" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {service.description}
                    </p>
                  </div>
                  <div className="p-8">
                    <h4 className="text-lg font-semibold text-[#000000] mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle
                            size={20}
                            className="text-[#0EA5E9] mr-3 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-[#6B7280]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              See Our Work in Action
            </h2>
            <p className="text-xl text-[#6B7280]">
              Sample projects showcasing our diverse capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative aspect-video bg-gradient-to-br from-[#1E3A8A] to-[#000000] rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="text-center text-white">
                    <Play size={60} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-lg font-semibold">Sample Project {item}</p>
                    <p className="text-sm text-white/80">(Video embed placeholder)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Our Process
            </h2>
            <p className="text-xl text-[#6B7280]">
              From concept to completion, we guide you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Discovery
              </h3>
              <p className="text-[#6B7280]">
                We dive deep into your goals, audience, and vision to craft the perfect strategy
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Planning
              </h3>
              <p className="text-[#6B7280]">
                Detailed pre-production, storyboarding, and resource allocation
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Production
              </h3>
              <p className="text-[#6B7280]">
                Expert execution with state-of-the-art equipment and techniques
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Delivery
              </h3>
              <p className="text-[#6B7280]">
                Polished final product with revisions and multi-format optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can bring your creative vision to life
          </p>
          <Button
            size="lg"
            className="bg-[#0EA5E9] hover:bg-white hover:text-[#1E3A8A] text-white text-lg px-12 py-6"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
