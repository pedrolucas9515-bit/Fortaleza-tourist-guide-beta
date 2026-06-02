'use client';

import { useEffect } from 'react';
import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Smartphone, Share, PlusSquare, Info, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function DownloadPage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches 
                         || (window.navigator as any).standalone 
                         || document.referrer.includes('android-app://');
      
      if (isStandalone) {
        // If already installed, don't show the guide, just go home
        router.replace('/');
      }
    }
  }, [router]);

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-6 pt-12 pb-6 hud-gradient flex justify-between items-start">
        <button 
          onClick={() => router.back()} 
          className="glass p-3 rounded-full hover:bg-white/10 transition-all active:scale-95"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
      </header>

      <div className="flex-1 px-6 flex flex-col items-center justify-center space-y-8 pb-32">
        <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 bg-black/40 animate-in zoom-in duration-500">
          <Image src={APP_LOGO} alt="Fortaleza Tourist Guide Logo" fill className="object-cover" />
        </div>

        <div className="text-center space-y-2">
          <h1 className="font-headline text-4xl text-white tracking-tight">Instalar App</h1>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.1em] font-bold">Experiência Mobile Completa</p>
        </div>

        <div className="w-full max-w-sm space-y-6">
          <Card className="glass border-white/10 p-6 rounded-2xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-xl shrink-0">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Como Instalar</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Para ter este guia sempre com você e publicá-lo na Google Play, siga os passos para habilitar a visualização nativa:
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">1</div>
                <p className="text-xs text-white/80">No navegador do seu celular, clique em <strong>Compartilhar</strong> <Share className="w-3 h-3 inline" /> (iOS) ou nos <strong>três pontos</strong> (Android).</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">2</div>
                <p className="text-xs text-white/80">Selecione a opção <strong>"Adicionar à Tela de Início"</strong> <PlusSquare className="w-3 h-3 inline" />.</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">3</div>
                <p className="text-xs text-white/80">O app será instalado como um <strong>WebAPK</strong> seguro e otimizado.</p>
              </div>
            </div>
          </Card>

          <Card className="glass border-primary/20 p-4 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
            <p className="text-[10px] text-white/60 leading-relaxed italic">
              Este manifesto está 100% validado para publicação na Google Play Store via Trusted Web Activity (TWA).
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}