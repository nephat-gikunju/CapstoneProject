import SectionHeader from '@/components/SectionHeader';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import DriveEmbed from '@/components/DriveEmbed';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Presentation } from 'lucide-react';

export default function AutobiographyPresentationPage() {
  const presentationEmbedUrl = '#';
  const downloadUrl = '#';

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Autobiography Presentation"
          description="A visual presentation showcasing key moments, milestones, and experiences from my personal journey."
        />

        <div className="mb-8 flex justify-center">
          <ExternalLinkButton href={downloadUrl} className="gap-2">
            <Download size={18} />
            Download Presentation
          </ExternalLinkButton>
        </div>

        <Card className="shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Presentation Overview</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This presentation provides a visual narrative of my life story, highlighting significant
                events, achievements, and transformative experiences. Through carefully selected images,
                timelines, and narratives, it offers a comprehensive view of my personal and academic
                development.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The presentation is structured to guide viewers through different phases of my life,
                demonstrating growth, resilience, and the continuous pursuit of excellence.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Presentation className="w-6 h-6 text-slate-700" />
              <h2 className="text-2xl font-bold text-slate-900">View Presentation</h2>
            </div>
            <div className="bg-slate-100 rounded-lg p-8 text-center">
              <p className="text-slate-600 mb-4">
                Presentation will appear here once Google Drive link is provided
              </p>
              <p className="text-sm text-slate-500 mb-4">
                To embed your presentation:
              </p>
              <ol className="text-sm text-slate-500 text-left max-w-2xl mx-auto space-y-2 list-decimal list-inside">
                <li>Upload your presentation to Google Drive (PowerPoint, Google Slides, or PDF)</li>
                <li>Right-click and select "Share" → "Get link" → Set to "Anyone with the link"</li>
                <li>For Google Slides: File → Share → Publish to web → Get embed code</li>
                <li>For PowerPoint/PDF: Use format: https://drive.google.com/file/d/FILE_ID/preview</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
