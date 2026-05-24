'use server';
/**
 * @fileOverview An AI Personal Concierge that provides personalized recommendations for Ceará dishes or attractions.
 *
 * - aiPersonalConcierge - A function that handles the personalized recommendation process.
 * - AiPersonalConciergeInput - The input type for the aiPersonalConcierge function.
 * - AiPersonalConciergeOutput - The return type for the aiPersonalConcierge function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiPersonalConciergeInputSchema = z.object({
  mood: z.string().describe("The user's current mood, influencing recommendations (e.g., 'adventurous', 'relaxed', 'hungry', 'cultural')."),
  pastPreferences: z.array(z.string()).optional().describe("A list of user's past preferences or visited places/dishes to tailor recommendations.")
});
export type AiPersonalConciergeInput = z.infer<typeof AiPersonalConciergeInputSchema>;

const RecommendationSchema = z.object({
  type: z.enum(['dish', 'attraction']).describe("The type of recommendation: 'dish' or 'attraction'."),
  name: z.string().describe("The name of the recommended dish or attraction."),
  description: z.string().describe("A brief description of the dish or attraction."),
  reason: z.string().describe("An explanation of why this recommendation is suitable based on the user's mood and preferences."),
  category: z.enum(['Beaches', 'Restaurants', 'Culture', 'Parks', 'Historical Places', 'Nightlife', 'Other']).describe("The category of the recommendation.")
});

const AiPersonalConciergeOutputSchema = z.object({
  recommendations: z.array(RecommendationSchema).describe("A list of personalized recommendations for the user.")
});
export type AiPersonalConciergeOutput = z.infer<typeof AiPersonalConciergeOutputSchema>;

export async function aiPersonalConcierge(input: AiPersonalConciergeInput): Promise<AiPersonalConciergeOutput> {
  return aiPersonalConciergeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPersonalConciergePrompt',
  input: { schema: AiPersonalConciergeInputSchema },
  output: { schema: AiPersonalConciergeOutputSchema },
  prompt: `You are an AI Personal Concierge for foreign tourists visiting Fortaleza, Ceará, Brazil. Your goal is to provide personalized recommendations for local Ceará dishes or tourist attractions.

Consider the user's current mood and past preferences to offer relevant suggestions.

User's current mood: {{{mood}}}
{{#if pastPreferences}}
User's past preferences or visited places/dishes:
{{#each pastPreferences}}- {{{this}}}
{{/each}}
{{/if}}

Please provide 3-5 recommendations. Each recommendation must clearly state whether it's a 'dish' or an 'attraction', its name, a short description, the reason it's suitable, and its category.

Available categories for attractions/dishes: Beaches, Restaurants, Culture, Parks, Historical Places, Nightlife, Other.`
});

const aiPersonalConciergeFlow = ai.defineFlow(
  {
    name: 'aiPersonalConciergeFlow',
    inputSchema: AiPersonalConciergeInputSchema,
    outputSchema: AiPersonalConciergeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to get recommendations from AI concierge.');
    }
    return output;
  }
);
