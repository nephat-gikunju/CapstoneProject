import SectionHeader from '@/components/SectionHeader';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import DriveEmbed from '@/components/DriveEmbed';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Users, AlertCircle, Lightbulb } from 'lucide-react';

export default function SocietalChallengePage() {
  const videoEmbedUrl = 'https://youtu.be/n6zFKqEe9Iw?si=fhO8ZpO1IZfQk0WT';

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Modern Societal Challenge"
          description="Analysis of a contemporary societal issue with proposed solutions and actionable recommendations."
        />

        

        

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6 text-slate-700" />
              <h2 className="text-2xl font-bold text-slate-900">Presentation Video</h2>
            </div>
             <ExternalLinkButton href={videoEmbedUrl} className="gap-2">
                
                View Video
              </ExternalLinkButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
