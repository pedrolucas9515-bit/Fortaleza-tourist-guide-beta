
'use client';

import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { ArrowLeft, Smartphone, Share, PlusSquare, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function DownloadPage() {
  const { language, isLoaded } = useVelaStore();
  const router = useRouter();

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const APP_LOGO = "https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg";

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
          <h1 className="font-headline text-4xl text-white tracking-tight">Instalar App</h1>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.1em] font-bold">Experiência Mobile Completa</p>
        </div>

        <div className="w-full max-w-sm space-y-6">
          <Card className="glass border-white/10 p-6 rounded-2xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-xl">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Como Instalar</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Para ter este guia sempre com você, não é necessário baixar um APK. Siga os passos abaixo:
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-primary">1</div>
                <p className="text-xs text-white/80">No navegador do seu celular, clique no ícone de <strong>Compartilhar</strong> <Share className="w-3 h-3 inline" /> (iOS) ou nos <strong>três pontos</strong> (Android).</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-primary">2</div>
                <p className="text-xs text-white/80">Selecione a opção <strong>"Adicionar à Tela de Início"</strong> <PlusSquare className="w-3 h-3 inline" />.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-primary">3</div>
                <p className="text-xs text-white/80">Pronto! O ícone do guia aparecerá na sua tela inicial como um aplicativo nativo.</p>
              </div>
            </div>
          </Card>

          <Card className="glass border-primary/20 p-4 text-center">
            <div className="flex justify-center mb-2">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <p className="text-[10px] text-white/60 leading-relaxed italic">
              Este é um protótipo de alta fidelidade desenvolvido para a web. A instalação via PWA garante que você tenha a experiência de tela cheia sem as barras do navegador.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
