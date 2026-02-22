import {
  CheckCircle,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  Calendar,
  ImageIcon,
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import type { ClientProject, ProjectPhase } from '../data/clientProjects';

interface ClientPreviewPageProps {
  project: ClientProject;
}

const phases: { key: ProjectPhase; label: string }[] = [
  { key: 'discovery', label: 'Discovery' },
  { key: 'design', label: 'Design' },
  { key: 'development', label: 'Development' },
  { key: 'review', label: 'Review' },
  { key: 'launch', label: 'Launch' },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function ClientPreviewPage({ project }: ClientPreviewPageProps) {
  const currentPhaseIndex = phases.findIndex(
    (p) => p.key === project.currentPhase
  );

  return (
    <div>
      {/* Branded Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-lg font-semibold text-[#1E3A8A]">
              Run Horse Run
            </span>
            <a
              href="#home"
              className="text-sm text-[#6B7280] hover:text-[#0EA5E9] transition-colors flex items-center"
            >
              Visit Our Website
              <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-[#0EA5E9] text-white mb-6 text-sm px-4 py-1 border-transparent">
            Client Project Preview
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {project.projectName}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {project.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 text-sm">
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" />
              Started: {formatDate(project.startDate)}
            </span>
            <span className="hidden sm:block text-white/40">|</span>
            <span className="flex items-center">
              <Clock size={16} className="mr-2" />
              Est. Launch: {formatDate(project.estimatedLaunch)}
            </span>
          </div>
        </div>
      </section>

      {/* Progress Stepper */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#000000] text-center mb-12">
            Project Progress
          </h2>

          {/* Desktop stepper - horizontal */}
          <div className="hidden md:flex items-center justify-between">
            {phases.map((phase, index) => (
              <div
                key={phase.key}
                className="flex items-center flex-1 last:flex-none"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      index < currentPhaseIndex
                        ? 'bg-[#0EA5E9] text-white'
                        : index === currentPhaseIndex
                          ? 'bg-[#1E3A8A] text-white ring-4 ring-[#1E3A8A]/20'
                          : 'bg-gray-200 text-[#6B7280]'
                    }`}
                  >
                    {index < currentPhaseIndex ? (
                      <CheckCircle size={24} />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`mt-3 text-sm font-medium ${
                      index <= currentPhaseIndex
                        ? 'text-[#000000]'
                        : 'text-[#6B7280]'
                    }`}
                  >
                    {phase.label}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded ${
                      index < currentPhaseIndex ? 'bg-[#0EA5E9]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile stepper - vertical */}
          <div className="flex md:hidden flex-col gap-4">
            {phases.map((phase, index) => (
              <div key={phase.key} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index < currentPhaseIndex
                        ? 'bg-[#0EA5E9] text-white'
                        : index === currentPhaseIndex
                          ? 'bg-[#1E3A8A] text-white ring-4 ring-[#1E3A8A]/20'
                          : 'bg-gray-200 text-[#6B7280]'
                    }`}
                  >
                    {index < currentPhaseIndex ? (
                      <CheckCircle size={20} />
                    ) : (
                      <span className="text-xs font-bold">{index + 1}</span>
                    )}
                  </div>
                  {index < phases.length - 1 && (
                    <div
                      className={`w-0.5 h-6 mt-1 ${
                        index < currentPhaseIndex
                          ? 'bg-[#0EA5E9]'
                          : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`text-sm font-medium ${
                    index <= currentPhaseIndex
                      ? 'text-[#000000]'
                      : 'text-[#6B7280]'
                  }`}
                >
                  {phase.label}
                  {index === currentPhaseIndex && (
                    <span className="ml-2 text-[#0EA5E9] text-xs">
                      (Current)
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Previews Gallery */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">
              Design Previews
            </h2>
            <p className="text-lg text-[#6B7280]">
              Current mockups and screenshots of your website in progress
            </p>
          </div>
          {project.previews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.previews.map((preview, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={preview.src}
                      alt={preview.alt}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-[#6B7280] text-sm">{preview.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <ImageIcon size={48} className="mx-auto text-[#6B7280]/50 mb-4" />
              <p className="text-[#6B7280] text-lg font-medium mb-2">
                Previews Coming Soon
              </p>
              <p className="text-[#6B7280]/70 max-w-md mx-auto">
                Design mockups and screenshots will appear here as the project
                progresses. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#000000] text-center mb-12">
            Project Timeline
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {project.milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start pl-14">
                  {/* Circle on the line */}
                  <div
                    className={`absolute left-2.5 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      milestone.completed
                        ? 'bg-[#0EA5E9] border-[#0EA5E9]'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    {milestone.completed && (
                      <CheckCircle
                        size={12}
                        className="text-white"
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3
                        className={`font-semibold ${
                          milestone.completed
                            ? 'text-[#000000]'
                            : 'text-[#6B7280]'
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <Badge
                        variant={milestone.completed ? 'default' : 'outline'}
                        className={
                          milestone.completed
                            ? 'bg-[#0EA5E9] text-white border-transparent'
                            : 'text-[#6B7280]'
                        }
                      >
                        {formatDate(milestone.date)}
                      </Badge>
                    </div>
                    <p className="text-[#6B7280] text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#000000] text-center mb-12">
            Recent Updates
          </h2>
          <div className="space-y-6">
            {project.updates.map((update, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-lg font-semibold">
                      {update.title}
                    </CardTitle>
                    <span className="text-sm text-[#6B7280] shrink-0">
                      {formatDate(update.date)}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B7280]">{update.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions or Feedback?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            We'd love to hear your thoughts on the progress so far.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href={`mailto:${project.contactEmail}`}
              className="flex items-center text-white/90 hover:text-[#0EA5E9] transition-colors"
            >
              <Mail size={20} className="mr-2" />
              {project.contactEmail}
            </a>
            <a
              href={`tel:${project.contactPhone}`}
              className="flex items-center text-white/90 hover:text-[#0EA5E9] transition-colors"
            >
              <Phone size={20} className="mr-2" />
              {project.contactPhone}
            </a>
          </div>
          <Button
            size="lg"
            className="bg-[#0EA5E9] hover:bg-white hover:text-[#1E3A8A] text-white text-lg px-8 cursor-pointer"
            asChild
          >
            <a href="#contact">Send Us a Message</a>
          </Button>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="bg-[#000000] text-[#6B7280] py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Run Horse Run. All rights reserved.</p>
        <p className="mt-1 text-[#6B7280]/70">
          This is a private project preview link.
        </p>
      </footer>
    </div>
  );
}
