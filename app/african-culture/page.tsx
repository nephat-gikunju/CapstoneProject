import SectionHeader from '@/components/SectionHeader';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import DriveEmbed from '@/components/DriveEmbed';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Video, Presentation, Globe } from 'lucide-react';

export default function AfricanCulturePage() {
  const videoEmbedUrl = 'https://drive.google.com/file/d/11wICLC3vVm7h2njGmVmgm4QC-Y4hIVsV/view?usp=sharing';
  const presentationEmbedUrl = 'https://docs.google.com/presentation/d/1TVQeaLA6FDYe0jBETCfNwexJn8sT2Tke/edit?usp=sharing&ouid=113103323744425993737&rtpof=true&sd=true';
  const presentationDownloadUrl = 'https://docs.google.com/presentation/d/1TVQeaLA6FDYe0jBETCfNwexJn8sT2Tke/export?format=pptx';

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="African Culture"
          description="An exploration of African cultural heritage, traditions, and their relevance in contemporary society."
        />

       
  <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Presentation className="w-6 h-6 text-slate-700" />
                <h2 className="text-2xl font-bold text-slate-900">Cultural Presentation Video</h2>
              </div>
              <ExternalLinkButton href={videoEmbedUrl} className="gap-2">
                View Video
              </ExternalLinkButton>
            </div>
            
          </CardContent>
        </Card>
   

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Presentation className="w-6 h-6 text-slate-700" />
                <h2 className="text-2xl font-bold text-slate-900">Cultural Presentation</h2>
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
