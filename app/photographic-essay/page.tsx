import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import { Video, Users, AlertCircle, Lightbulb } from 'lucide-react';

import Image from 'next/image';

export default function PhotographicEssayPage() {
const embedurl ='https://docs.google.com/presentation/d/1ZUkbbTTEHZSA8e1KKvuc_tPOt_EXkAhy/edit?usp=sharing&ouid=113103323744425993737&rtpof=true&sd=true'

  return (
   <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Photographic essay"
          description="This photographic essay examines the human and societal costs of poor governance across African communities, using symbolic and contextual images to illustrate the problems while highlighting community resilience and calls for change. The narrative progresses from manifestations of instability and neglect to daily hardships and, finally, to expressions of hope through civic action. By focusing on these visuals, the essay aims to underscore the urgency for transparent, accountable leadership to foster equitable progress in Africa."
        />

        

        

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6 text-slate-700" />
              <h2 className="text-2xl font-bold text-slate-900">Photographic Essay</h2>
            </div>
             <ExternalLinkButton href={embedurl} className="gap-2">
                
                View Essay
              </ExternalLinkButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
