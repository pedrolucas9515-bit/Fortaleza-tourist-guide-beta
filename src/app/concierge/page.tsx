
'use client';

import { useState, useMemo } from 'react';
import { useVelaStore } from '@/lib/store';
import { TRANSLATIONS } from '@/lib/i18n';
import { aiPersonalConcierge, AiPersonalConciergeOutput } from '@/ai/flows/ai-personal-concierge';
import BottomNav from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Send, Bot, MapPin, Utensils, Settings, MessageSquare, Zap, ChefHat } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const APP_LOGO = "https://i.ibb.co/gLRCXsZC/draguinho.jpg";

export default function ConciergePage() {
  const { language, isLoaded } = useVelaStore();
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiPersonalConciergeOutput | null>(null);

  if (!isLoaded) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  
  const t = useMemo(() => TRANSLATIONS[language], [language]);

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
    <div className="min-h-screen bg-background pb-32">
      {/* HUD Header */}
      <header className="px-6 pt-12 pb-6 hud-gradient sticky top-0 z-20 flex justify-between items-start backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg bg-card/40">
            <Image src={APP_LOGO} alt="Vela Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="font-headline text-3xl mb-0.5 text-foreground font-bold flex items-center gap-3">
              {t.concierge} <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </h1>
            <p className="text-primary text-[9px] tracking-[0.3em] uppercase font-black opacity-60">Personal Guide</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/settings" className="glass p-3 rounded-2xl hover:bg-primary/20 transition-all active:scale-90">
            <Settings className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="/feedback" className="glass p-3 rounded-2xl hover:bg-primary/20 transition-all active:scale-90">
            <MessageSquare className="w-5 h-5 text-foreground" />
          </Link>
        </div>
      </header>

      <div className="px-6 space-y-10 mt-6">
        {/* Chat Intro */}
        <div className="space-y-6">
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
               <Bot className="w-7 h-7" />
             </div>
             <Card className="flex-1 bg-white/5 border-white/10 p-5 rounded-[1.5rem] rounded-tl-none shadow-xl border-l-4 border-l-primary">
               <p className="text-sm text-white/90 font-medium leading-relaxed">{t.aiPrompt}</p>
             </Card>
           </div>

           <div className="relative mt-8">
             <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 blur opacity-30 rounded-2xl" />
             <Input 
                placeholder={t.aiPlaceholder}
                className="relative pr-16 h-16 bg-card/60 border-white/10 rounded-2xl focus:ring-primary focus:border-primary text-white text-base placeholder:text-white/20"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && getRecommendations()}
                disabled={loading}
             />
             <Button 
               onClick={getRecommendations}
               disabled={loading || !mood.trim()}
               className="absolute right-2.5 top-2.5 h-11 w-11 p-0 rounded-xl bg-primary hover:bg-primary/90 transition-all active:scale-90 shadow-lg shadow-primary/20"
             >
               {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-5 h-5" />}
             </Button>
        </div>

        {/* Results Area */}
        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-12">
             <div className="flex items-center gap-3 mb-2">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Tailored Suggestions</h3>
             </div>
             
             {result.recommendations.map((rec, i) => (
               <Card key={i} className="bg-white/5 border-white/10 p-6 rounded-[2rem] group transition-all hover:border-primary/40 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    {rec.type === 'dish' ? <ChefHat className="w-24 h-24" /> : <MapPin className="w-24 h-24" />}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <Badge className="bg-primary/20 text-primary border-0 uppercase text-[9px] tracking-widest font-black px-3 py-1">
                      {rec.category}
                    </Badge>
                    <div className="bg-white/5 p-2 rounded-xl">
                      {rec.type === 'dish' ? <Utensils className="w-4 h-4 text-primary" /> : <MapPin className="w-4 h-4 text-primary" />}
                    </div>
                  </div>
                  
                  <h4 className="font-headline text-2xl mb-3 text-white font-bold tracking-tight relative z-10">{rec.name}</h4>
                  <p className="text-sm text-white/50 mb-6 leading-relaxed font-medium relative z-10">{rec.description}</p>
                  
                  <div className="bg-primary/5 p-5 rounded-[1.5rem] border border-primary/10 relative z-10 group-hover:bg-primary/10 transition-colors">
                    <p className="text-xs italic text-primary font-bold leading-relaxed tracking-tight">" {rec.reason} "</p>
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
