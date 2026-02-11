import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '278432b4-b913-4046-8595-a6fc73eddb9b',
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'Run Horse Run Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFileName('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Let's start a conversation about your next creative project
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#000000] mb-6">
                Send Us a Message
              </h2>
              <p className="text-[#6B7280] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 bg-input-background"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 bg-input-background"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 bg-input-background"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 bg-input-background resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div>
                  <Label htmlFor="file">Attach Project Brief (Optional)</Label>
                  <div className="mt-2">
                    <label
                      htmlFor="file"
                      className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0EA5E9] transition-colors bg-input-background"
                    >
                      <Upload size={20} className="mr-2 text-[#6B7280]" />
                      <span className="text-[#6B7280]">
                        {fileName || 'Choose a file to upload'}
                      </span>
                    </label>
                    <input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                  </div>
                  {fileName && (
                    <p className="text-sm text-[#0EA5E9] mt-2">Selected: {fileName}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'sending'}
                  className="w-full bg-[#1E3A8A] hover:bg-[#0EA5E9] text-white"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && <Send size={18} className="ml-2" />}
                </Button>

                {status === 'success' && (
                  <p className="text-green-600 text-center font-medium">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information & Map */}
            <div>
              <h2 className="text-3xl font-bold text-[#000000] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-[#000000] mb-1">Email</h3>
                    <a
                      href="mailto:calvin@run-horse-run.com"
                      className="text-[#0EA5E9] hover:underline"
                    >
                      calvin@run-horse-run.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-[#000000] mb-1">Phone</h3>
                    <a href="tel:+12197186705" className="text-[#6B7280] hover:text-[#0EA5E9]">
                      +1 (219) 718-6705
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-[#000000] mb-1">Location</h3>
                    <p className="text-[#6B7280]">
                      8204 Pierce Pl
                      <br />
                      Merrillville, IN 46410
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1E3A8A]/10 to-[#0EA5E9]/10">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto mb-3 text-[#1E3A8A]" />
                      <p className="text-[#6B7280] font-semibold">Google Maps Embed</p>
                      <p className="text-sm text-[#6B7280]">(Embed map here)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#000000] mb-4">Business Hours</h3>
                <div className="space-y-2 text-[#6B7280]">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#000000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Follow us on social media to see our latest work and behind-the-scenes content
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Facebook', url: 'https://facebook.com' },
              { name: 'Instagram', url: 'https://instagram.com' },
              { name: 'Twitter', url: 'https://twitter.com' },
              { name: 'LinkedIn', url: 'https://linkedin.com' },
              { name: 'YouTube', url: 'https://youtube.com' },
              { name: 'Vimeo', url: 'https://vimeo.com' },
            ].map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A]"
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}