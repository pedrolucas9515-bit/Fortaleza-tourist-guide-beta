'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Smartphone, Apple, Download, FileType } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function DownloadPage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();
  const { toast } = useToast();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const APP_LOGO = "https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg";

  // Note: These URLs should point to the actual hosted APK/IPA files
  const APK_URL = '/downloads/fortaleza-guide.apk';
  const IPA_URL = '/downloads/fortaleza-guide.ipa';

  const handleAndroidDownload = () => {
    toast({
      title: "Downloading APK",
      description: "Starting direct download of the Android installation file.",
    });
    // In a real scenario, this initiates a direct file download
    const link = document.createElement('a');
    link.href = APK_URL;
    link.setAttribute('download', 'fortaleza-guide.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleIOSDownload = () => {
    // Fallback logic for iOS IPA
    const ipaAvailable = false; // Set to true when the file is hosted

    if (!ipaAvailable) {
      toast({
        variant: "destructive",
        title: "IPA Not Available",
        description: "The direct iOS installation file is currently being prepared.",
      });
      return;
    }

    toast({
      title: "Downloading IPA",
      description: "Starting direct download of the iOS installation file.",
    });
    const link = document.createElement('a');
    link.href = IPA_URL;
    link.setAttribute('download', 'fortaleza-guide.ipa');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0f1315] flex flex-col">
      <header className="px-6 pt-12 pb-6 hud-gradient flex justify-between items-start">
        <button onClick={() => router.back()} className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
      </header>

      <div className="flex-1 px-6 flex flex-col items-center justify-center space-y-8 pb-32">
        <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 bg-black/40">
          <Image src={APP_LOGO} alt="Fortaleza Tourist Guide Logo" fill className="object-cover" />
        </div>

        <div className="text-center space-y-2">
          <h1 className="font-headline text-4xl text-white tracking-tight">{t.downloadApp}</h1>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-bold">{t.downloadDesc}</p>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Button 
            onClick={handleAndroidDownload}
            className="w-full h-24 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl flex items-center justify-start px-6 gap-4 group transition-all"
          >
            <div className="bg-green-500/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-green-500 fill-current" viewBox="0 0 24 24">
                <path d="M17.523 15.3414C17.523 14.8814 17.896 14.5084 18.356 14.5084C18.816 14.5084 19.189 14.8814 19.189 15.3414C19.189 15.8014 18.816 16.1744 18.356 16.1744C17.896 16.1744 17.523 15.8014 17.523 15.3414ZM5.644 15.3414C5.644 14.8814 6.017 14.5084 6.477 14.5084C6.937 14.5084 7.31 14.8814 7.31 15.3414C7.31 15.8014 6.937 16.1744 6.477 16.1744C6.017 16.1744 5.644 15.8014 5.644 15.3414ZM17.92 10.1414L19.86 6.78138C20.01 6.52138 19.92 6.19138 19.66 6.04138C19.4 5.89138 19.07 5.98138 18.92 6.24138L16.96 9.63138C15.53 8.98138 13.84 8.61138 12 8.61138C10.16 8.61138 8.47 8.98138 7.04 9.63138L5.08 6.24138C4.93 5.98138 4.6 5.89138 4.34 6.04138C4.08 6.19138 3.99 6.52138 4.14 6.78138L6.08 10.1414C3.01 11.8514 1 14.9814 1 18.6114H23C23 14.9814 20.99 11.8514 17.92 10.1414Z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Download Direct</p>
              <p className="text-2xl font-headline text-white">Android APK</p>
            </div>
            <Download className="ml-auto w-6 h-6 text-primary animate-pulse" />
          </Button>

          <Button 
            onClick={handleIOSDownload}
            className="w-full h-24 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl flex items-center justify-start px-6 gap-4 group transition-all"
          >
            <div className="bg-white/10 p-4 rounded-2xl group-hover:scale-110 transition-transform">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Download Direct</p>
              <p className="text-2xl font-headline text-white">iOS IPA</p>
            </div>
            <div className="ml-auto flex flex-col items-end">
               <FileType className="w-6 h-6 text-white/20 mb-1" />
               <span className="text-[8px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-widest">
                {t.comingSoon}
              </span>
            </div>
          </Button>
        </div>

        <Card className="max-w-xs glass border-white/5 p-5 text-center">
          <p className="text-[11px] text-white/50 leading-relaxed italic">
            "Direct installation files allow you to bypass app stores and install Fortaleza Tourist Guide instantly on your mobile device."
          </p>
        </Card>
      </div>
    </div>
  );
}
