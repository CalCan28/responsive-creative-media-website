import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Heart, Zap } from 'lucide-react';
import calvinPhoto from 'figma:asset/a078cac02063f2eba8c61f940abf9490559f1c03.png';
import lytonyaPhoto from 'figma:asset/59fda8377f749e0c775e5b35aa7cd6a455c25545.png';
import kyreePhoto from 'figma:asset/5bb8848c1aa78335683ee04a6f3d4e32bd6f00e5.png';
import edwinPhoto from 'figma:asset/cc4050e19d5656ba69f91c00dc5dba406b5d9dd5.png';
import shanellPhoto from '../assets/shanell.jpg';
import rileyPhoto from '../assets/riley.jpeg';

export function AboutPage() {
  const team = [
    {
      name: 'Calvin',
      role: 'Director & Cinematographer',
      image: calvinPhoto,
      bio: 'With over 15 years of experience in visual storytelling, Calvin brings a cinematic eye to every project.',
    },
    {
      name: 'Kyree',
      role: 'Senior Programmer',
      image: kyreePhoto,
      bio: 'Kyree handles software and app development, building robust digital solutions that power our creative vision.',
    },
    {
      name: 'Lytonya',
      role: 'Creative Director',
      image: lytonyaPhoto,
      bio: 'Lytonya leads our web design team, creating stunning digital experiences that complement our visual work.',
    },
    {
      name: 'Edwin',
      role: 'Marketing/Social Media',
      image: edwinPhoto,
      bio: 'Edwin handles marketing and social media for the company, amplifying our brand and connecting with audiences.',
    },
    {
      name: 'Shanell',
      role: 'Photographer & Event Coordinator',
      image: shanellPhoto,
      bio: 'Shanell captures compelling moments through her lens and orchestrates seamless events that bring our creative projects to life.',
      imagePosition: 'object-[center_25%]',
    },
    {
      name: 'Riley',
      role: 'Graphic & Storyboard Artist',
      image: rileyPhoto,
      bio: 'Riley brings concepts to life through vivid illustrations and detailed storyboards, shaping the visual direction of every project from the ground up.',
      imagePosition: 'object-[center_20%]',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're a passionate team of creatives dedicated to bringing stories to life through the power of visual media
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              At Run Horse Run, we believe that every brand has a unique story worth telling. 
              Our mission is to transform your vision into captivating visual experiences that resonate, 
              inspire, and drive meaningful connections with your audience. We combine technical excellence 
              with creative innovation to deliver content that doesn't just meet expectations—it exceeds them.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Purpose-Driven
              </h3>
              <p className="text-[#6B7280]">
                Every project starts with understanding your goals and crafting a strategy that delivers results
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Passion First
              </h3>
              <p className="text-[#6B7280]">
                We pour our hearts into every frame, edit, and design decision we make
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Innovation
              </h3>
              <p className="text-[#6B7280]">
                We stay ahead of trends and technology to deliver cutting-edge creative solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#6B7280]">
              The creative minds behind Run Horse Run
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${'imagePosition' in member ? member.imagePosition : ''}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#000000] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0EA5E9] mb-3">{member.role}</p>
                  <p className="text-[#6B7280]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Philosophy */}
      <section className="py-20 bg-[#000000] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Our Creative Philosophy
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Great creative work doesn't happen by accident. It's the result of careful planning, 
              bold experimentation, and an unwavering commitment to excellence.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-[#0EA5E9] pl-6">
              <h3 className="text-2xl font-semibold mb-3">
                Story First
              </h3>
              <p className="text-white/80 leading-relaxed">
                Every project begins with the story. Whether it's a 30-second commercial or a feature film, 
                we ensure the narrative drives every creative decision from start to finish.
              </p>
            </div>

            <div className="border-l-4 border-[#0EA5E9] pl-6">
              <h3 className="text-2xl font-semibold mb-3">
                Collaboration & Trust
              </h3>
              <p className="text-white/80 leading-relaxed">
                We view our clients as partners. Your insights and feedback are invaluable throughout 
                the creative process, ensuring the final product truly reflects your vision.
              </p>
            </div>

            <div className="border-l-4 border-[#0EA5E9] pl-6">
              <h3 className="text-2xl font-semibold mb-3">
                Attention to Detail
              </h3>
              <p className="text-white/80 leading-relaxed">
                From color grading to sound design, from typography to timing—we obsess over every 
                detail to ensure your project stands out and makes an impact.
              </p>
            </div>

            <div className="border-l-4 border-[#0EA5E9] pl-6">
              <h3 className="text-2xl font-semibold mb-3">
                Continuous Evolution
              </h3>
              <p className="text-white/80 leading-relaxed">
                The media landscape is always changing, and so are we. We constantly refine our skills, 
                explore new techniques, and embrace emerging technologies to stay at the forefront of our craft.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}