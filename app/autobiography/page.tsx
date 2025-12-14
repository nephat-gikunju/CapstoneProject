import SectionHeader from '@/components/SectionHeader';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import DriveEmbed from '@/components/DriveEmbed';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';

export default function AutobiographyPage() {
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1Qj0WBrFMw8rlpgPA9qlhocYa29krlVlj';
  const viewEssay ="https://drive.google.com/file/d/1Qj0WBrFMw8rlpgPA9qlhocYa29krlVlj/view?usp=sharing";
  const viewPresentationUrl = "https://docs.google.com/presentation/d/140OcT2CHb9glemJMrAmUk4eqeyJ30jEM/edit?usp=sharing&ouid=113103323744425993737&rtpof=true&sd=true"
  const downloadPresentationUrl ="https://docs.google.com/presentation/d/140OcT2CHb9glemJMrAmUk4eqeyJ30jEM/export?format=pptx"

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Autobiography"
          description="A comprehensive narrative exploring my personal journey, experiences, and development throughout my academic and personal life."
        />

        <div className="mb-8 flex justify-center">
           <ExternalLinkButton href={viewEssay} className="mr-10">
              View Autobiography
            </ExternalLinkButton>
          <ExternalLinkButton href={downloadUrl} className="gap-2">
            <Download size={18} />
            Download Full Essay
          </ExternalLinkButton>
        </div>

        <Card className="shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This autobiography provides an in-depth exploration of my life journey, from early
                childhood experiences through my academic career and personal development. It examines
                the key moments, relationships, and decisions that have shaped my character and
                aspirations.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The essay delves into my family background, educational experiences, cultural influences,
                and the challenges I have overcome. It reflects on how these experiences have contributed
                to my personal growth and academic achievements.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Through this narrative, I aim to provide insight into my values, motivations, and the
                principles that guide my life and future aspirations.
              </p>
            </div>
          </CardContent>
        </Card>

          <SectionHeader
          title="Autobiography presentation"
          description="A comprehensive summary presentation of my Autobiography."
        />

        <div className="mb-8 flex justify-center">
            <ExternalLinkButton href={viewPresentationUrl} className="mr-10">
              View presentation
            </ExternalLinkButton>

            <ExternalLinkButton href={downloadPresentationUrl} className="gap-2">
              <Download size={18} />
              Download presentation
            </ExternalLinkButton>
        </div>
        
      </div>
    </div>
  );
}
