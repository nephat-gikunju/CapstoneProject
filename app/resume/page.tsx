import SectionHeader from '@/components/SectionHeader';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import DriveEmbed from '@/components/DriveEmbed';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';

export default function ResumePage() {
  const resumes = [
    {
      language: 'English',
      description: 'Professional resume in English',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1E_Ac3rawZPbOsvEjcGCkgHdRCmE88Bd6',
      embedUrl: 'https://drive.google.com/file/d/1E_Ac3rawZPbOsvEjcGCkgHdRCmE88Bd6/preview',
    },
    {
      language: 'Kiswahili',
      description: 'Professional resume in Kiswahili',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1z5rx_VEFpOGNsAX94EjfVbG2cnNEdYLC',
      embedUrl: 'https://drive.google.com/file/d/1z5rx_VEFpOGNsAX94EjfVbG2cnNEdYLC/preview',
    },
    {
      language: 'Kikuyu',
      description: 'Professional resume in Kikuyu',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1ajvuJ4SSnsr3EvXGE1tVy_L1vovM8HDJ',
      embedUrl: 'https://drive.google.com/file/d/1ajvuJ4SSnsr3EvXGE1tVy_L1vovM8HDJ/preview',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Professional Resume"
          description="View and download my professional resumes in multiple languages, demonstrating multilingual competency and cultural awareness."
        />

        <div className="space-y-8">
          {resumes.map((resume, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader className="bg-slate-50 border-b">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg">
                      <FileText className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{resume.language}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {resume.description}
                      </CardDescription>
                    </div>
                  </div>
                  <ExternalLinkButton href={resume.embedUrl}>
                    
                    View Resume
                  </ExternalLinkButton>
                  <ExternalLinkButton href={resume.downloadUrl}>
                    <Download size={16} />
                    Download Resume
                  </ExternalLinkButton>
                </div>
              </CardHeader>
              {/* <CardContent className="p-6">
                <div className="bg-slate-100 rounded-lg p-4 text-center">
                  <p className="text-slate-600 mb-4">
                    Resume preview will appear here once Google Drive link is provided
                  </p>
                  <p className="text-sm text-slate-500">
                    Replace the embedUrl with your Google Drive embed link
                  </p>
                </div>
              </CardContent> */}
            </Card>
          ))}
        </div>

        {/* <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Instructions</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-4">
              To display your resumes:
            </p>
            <ol className="text-slate-600 space-y-2 list-decimal list-inside">
              <li>Upload your resume to Google Drive</li>
              <li>Right-click the file and select "Share" → "Get link"</li>
              <li>https://drive.google.com/file/d/1E_Ac3rawZPbOsvEjcGCkgHdRCmE88Bd6/preview</li>
              <li>For embed preview, use the format: https://drive.google.com/file/d/FILE_ID/preview</li>
              <li>For download link, use: https://drive.google.com/uc?export=download&id=1E_Ac3rawZPbOsvEjcGCkgHdRCmE88Bd6</li>
            </ol>
          </div>
        </div> */}
      </div>
    </div>
  );
}
