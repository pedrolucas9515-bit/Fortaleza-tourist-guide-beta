
'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, MessageSquare, ExternalLink, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function FeedbackPage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfX__e23ss2y2rprwoVUMN_43FbczUIrIo0JgzwZ5HxWf7Hlw/viewform";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-6 pt-12 pb-6 hud-gradient flex justify-between items-start sticky top-0 z-20">
        <button onClick={() => router.back()} className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
      </header>

      <div className="flex-1 px-6 flex flex-col items-center justify-center space-y-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="relative w-24 h-24 rounded-3xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/10 bg-black/40">
          <Image src={APP_LOGO} alt="Fortaleza Tourist Guide Logo" fill className="object-cover" />
        </div>

        <div className="text-center space-y-2">
          <h1 className="font-headline text-4xl text-foreground tracking-tight">{t.feedback}</h1>
          <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] font-bold">Improve our App</p>
        </div>

        <Card className="glass border-border p-8 rounded-[2rem] max-w-sm w-full space-y-6 text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          
          <p className="text-sm text-foreground/80 leading-relaxed font-medium">
            {t.feedbackDesc}
          </p>

          <Button 
            onClick={() => window.open(FORM_URL, '_blank', 'noopener,noreferrer')}
            className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest group"
          >
            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            {t.sendFeedback}
            <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
          </Button>
        </Card>

        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-30">
          Powered by Google Forms
        </p>
      </div>
    </div>
  );
}
