'use client';

import { useState } from 'react';
import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { aiPersonalConcierge, AiPersonalConciergeOutput } from '@/ai/flows/ai-personal-concierge';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Send, Bot, MapPin, Utensils, Settings, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

export default function ConciergePage() {
  const { language, isLoaded } = useVelaStore();
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiPersonalConciergeOutput | null>(null);

  if (!isLoaded) return null;
  const t = TRANSLATIONS[language];
  const APP_LOGO = "https://i.pinimg.com/736x/46/26/75/462675165eeac26a77e0d23157de6f09.jpg";

  const getRecommendations = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    try {
      const output = await aiPersonalConcierge({ mood });
      setResult(output);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HUD Header */}
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/30 shadow-lg bg-black/40">
            <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-headline text-3xl mb-0.5 text-foreground flex items-center gap-3">
              {t.concierge} <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </h1>
            <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-bold">Personal Guide</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/feedback" className="glass p-3 rounded-full hover:bg-primary/10 transition-colors">
            <MessageSquare className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="/settings" className="glass p-3 rounded-full hover:bg-primary/10 transition-colors">
            <Settings className="w-5 h-5 text-foreground" />
          </Link>
        </div>
      </header>

      <div className="px-6 space-y-8 pb-32">
        {/* Chat-like Input */}
        <div className="space-y-4">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
               <Bot className="w-6 h-6" />
             </div>
             <Card className="flex-1 bg-card/40 border-border p-4 rounded-2xl rounded-tl-none shadow-xl">
               <p className="text-sm text-foreground/90 font-medium">{t.aiPrompt}</p>
             </Card>
           </div>

           <div className="relative mt-8">
             <Input 
                placeholder={t.aiPlaceholder}
                className="pr-16 h-14 bg-card/40 border-border rounded-2xl focus:ring-primary text-foreground"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && getRecommendations()}
                disabled={loading}
             />
             <Button 
               onClick={getRecommendations}
               disabled={loading || !mood.trim()}
               className="absolute right-2 top-2 h-10 w-10 p-0 rounded-xl bg-primary hover:bg-primary/90 transition-transform active:scale-90"
             >
               {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
             </Button>
           </div>
        </div>

        {/* Results Area */}
        {result && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Tailored Suggestions</h3>
             {result.recommendations.map((rec, i) => (
               <Card key={i} className="bg-card/40 border-border p-5 rounded-2xl group transition-all hover:border-primary/30">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-primary/10 text-primary border-0 uppercase text-[8px] tracking-widest font-bold">
                      {rec.category}
                    </Badge>
                    {rec.type === 'dish' ? <Utensils className="w-4 h-4 text-primary" /> : <MapPin className="w-4 h-4 text-primary" />}
                  </div>
                  <h4 className="font-headline text-2xl mb-2 text-foreground">{rec.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-medium">{rec.description}</p>
                  <div className="bg-primary/5 p-3 rounded-xl border border-primary/10">
                    <p className="text-xs italic text-primary/80 font-medium">" {rec.reason} "</p>
                  </div>
               </Card>
             ))}
          </div>
        )}
      </div>

      <BottomNav lang={language} />
    </div>
  );
}