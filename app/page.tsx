import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Presentation, Lightbulb, Globe, Camera, Users } from 'lucide-react';

export default function Home() {
  const sections = [
    {
      title: 'Resume',
      description: 'Professional resumes in multiple languages',
      href: '/resume',
      icon: FileText,
    },
    {
      title: 'Autobiography',
      description: 'Personal narrative and life story',
      href: '/autobiography',
      icon: FileText,
    },
    {
      title: 'Autobiography Presentation',
      description: 'Visual presentation of personal journey',
      href: '/autobiography-presentation',
      icon: Presentation,
    },
    {
      title: 'Innovation / Invention',
      description: 'Creative solution and innovation project',
      href: '/innovation',
      icon: Lightbulb,
    },
    {
      title: 'African Culture',
      description: 'Exploration of African cultural heritage',
      href: '/african-culture',
      icon: Globe,
    },
    {
      title: 'Modern Societal Challenge',
      description: 'Analysis and proposed solutions',
      href: '/societal-challenge',
      icon: Users,
    },
    {
      title: 'Photographic Essay',
      description: 'Visual storytelling through photography',
      href: '/photographic-essay',
      icon: Camera,
    },
    {
      title: 'Professional Online Presence',
      description: 'Digital platforms and professional profiles',
      href: '/online-presence',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Academic Capstone Project
          </h1>
          <div className="space-y-2 mb-6">
            <p className="text-2xl text-slate-700">
              Nephat Gikunju
            </p>
            <p className="text-lg text-slate-600">
              Information Technology | Dedan Kimathi university
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              Welcome to my academic capstone portfolio. This comprehensive project represents
              the culmination of my academic journey, showcasing research, innovation, cultural
              exploration, and professional development across multiple disciplines.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Capstone Requirements
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.href} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href={section.href}>View Section</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Project</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            This capstone project serves as a comprehensive demonstration of academic excellence,
            cultural awareness, innovative thinking, and professional competence. Each section has
            been carefully developed to meet university requirements and showcase diverse skills
            and knowledge acquired throughout my academic career.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Navigate through the sections above to explore my work, or use the navigation menu
            to access specific components of the capstone project.
          </p>
        </div>
      </div>
    </div>
  );
}
