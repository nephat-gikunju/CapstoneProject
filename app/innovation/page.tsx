import SectionHeader from '@/components/SectionHeader';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import DriveEmbed from '@/components/DriveEmbed';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Video, Presentation, Lightbulb } from 'lucide-react';

export default function InnovationPage() {
  const videoEmbedUrl = 'https://youtu.be/OwUOvTW1aEY?si=aVzBt8jG4qJ1GLkR';
  const presentationEmbedUrl = 'https://docs.google.com/presentation/d/1Y771K9sEyPRei65cYeHVg1yo2Tz-kaIL/edit?usp=sharing&ouid=113103323744425993737&rtpof=true&sd=true';
  const presentationDownloadUrl = 'https://docs.google.com/presentation/d/1Y771K9sEyPRei65cYeHVg1yo2Tz-kaIL/export?format=pptx';

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <Card className="shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-900">Project Overview</h2>
            </div>
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                This Presentation illustrates an invention on the Technological world and the Impact to other industries.
              </p>
            </div>

    
          </CardContent>
        </Card>

         <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Presentation className="w-6 h-6 text-slate-700" />
                <h2 className="text-2xl font-bold text-slate-900">Innovation Video Presentation</h2>
              </div>
              <ExternalLinkButton href={videoEmbedUrl} className="gap-2">
                View video
              </ExternalLinkButton>
            </div>
            
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Presentation className="w-6 h-6 text-slate-700" />
                <h2 className="text-2xl font-bold text-slate-900">Supporting Presentation</h2>
              </div>
              <ExternalLinkButton href={presentationEmbedUrl} className="gap-2">
                View Slides
              </ExternalLinkButton>
               <ExternalLinkButton href={presentationDownloadUrl} className="gap-2">
                <Download size={16} />
                Download Slides
              </ExternalLinkButton>
            
            </div>
           
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
