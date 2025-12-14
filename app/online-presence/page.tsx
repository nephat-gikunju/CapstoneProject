import SectionHeader from '@/components/SectionHeader';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Github, MessageSquare, Youtube, Phone, Facebook, X } from 'lucide-react';

export default function OnlinePresencePage() {
  const platforms = [
    {
      name: 'LinkedIn',
      description: 'Professional networking and career profile',
      url: 'https://linkedin.com/in/nephat-gikunju',
      icon: Linkedin,
      color: 'bg-blue-50 text-blue-700',
    },
    {
      name: 'GitHub',
      description: 'Code repositories and technical projects',
      url: 'https://github.com/nephat-gikunju',
      icon: Github,
      color: 'bg-slate-50 text-slate-700',
    },
    {
      name: 'X (Twitter)',
      description: 'Thoughts, updates, and professional discussions',
      url: 'https://x.com/GikunjuNephat',
      icon: X,
      color: 'bg-black text-white', // Modern X branding colors
    },
   
    {
      name: 'YouTube / Vlog',
      description: 'Video content and presentations',
      url: 'https://www.youtube.com/@seven-sprinter',
      icon: Youtube,
      color: 'bg-red-50 text-red-700',
    },
    {
      name: 'WhatsApp',
      description: 'Direct messaging and networking',
      url: 'https://wa.me/254757936138', // Fixed typo: removed extra 'h'
      icon: Phone, // Better fit than Briefcase for WhatsApp
      color: 'bg-green-50 text-green-700',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Professional Online Presence"
          description="Connect with my professional platforms and explore my digital presence across various channels."
        />

        <Card className="shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Digital Portfolio Overview</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In todays interconnected world, maintaining a strong professional online presence is
                essential. Below are the platforms where I actively share my work, insights, and connect
                with professionals in my field.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Each platform serves a unique purpose in showcasing different aspects of my professional
                development, from technical skills and projects to thought leadership and creative content.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${platform.color}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{platform.name}</CardTitle>
                        <CardDescription className="text-base">
                          {platform.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ExternalLinkButton href={platform.url} variant="outline" className="w-full">
                    Visit Profile
                  </ExternalLinkButton>
                </CardContent>
              </Card>
            );
          })}
        </div>

        

        
      </div>
    </div>
  );
}