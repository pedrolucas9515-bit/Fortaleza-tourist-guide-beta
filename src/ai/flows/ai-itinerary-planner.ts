'use server';
/**
 * @fileOverview An AI agent that generates a custom itinerary for Fortaleza based on user preferences.
 *
 * - aiItineraryPlanner - A function that handles the itinerary generation process.
 * - AiItineraryPlannerInput - The input type for the aiItineraryPlanner function.
 * - AiItineraryPlannerOutput - The return type for the aiItineraryPlanner function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiItineraryPlannerInputSchema = z.object({
  interests: z
    .array(z.string())
    .describe(
      'A list of user interests, e.g., ["beaches", "culture", "food", "nightlife"].'
    ),
  currentLocationLat: z.number().describe('The current latitude of the user.'),
  currentLocationLng: z.number().describe('The current longitude of the user.'),
  availableHours: z
    .number()
    .min(1)
    .max(12)
    .describe('The number of hours the user has available for the itinerary.'),
  mood: z
    .string()
    .optional()
    .describe('The current mood of the user, e.g., "relaxed", "adventurous", "romantic".'),
});
export type AiItineraryPlannerInput = z.infer<typeof AiItineraryPlannerInputSchema>;

const ItineraryActivitySchema = z.object({
  name: z.string().describe('The name of the attraction or restaurant.'),
  type: z.enum(['Attraction', 'Restaurant']).describe('The type of place.'),
  description: z.string().describe('A brief description of the place.'),
  address: z.string().describe('The address of the place.'),
  estimatedDurationHours: z
    .number()
    .min(0.5)
    .max(5)
    .describe('Estimated duration in hours for this activity.'),
  category: z
    .string()
    .describe('The category of the place, e.g., Beaches, Culture, Historical Places, Restaurants, Parks, Nightlife.'),
  reasoning: z
    .string()
    .describe(
      'A brief explanation of why this place was recommended based on user interests and mood.'
    ),
});

const AiItineraryPlannerOutputSchema = z.object({
  itinerary: z.array(ItineraryActivitySchema).describe('A custom daily itinerary for Fortaleza.'),
  summary: z
    .string()
    .describe('A brief summary of the generated itinerary and its highlights.'),
});
export type AiItineraryPlannerOutput = z.infer<typeof AiItineraryPlannerOutputSchema>;

export async function aiItineraryPlanner(
  input: AiItineraryPlannerInput
): Promise<AiItineraryPlannerOutput> {
  return aiItineraryPlannerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiItineraryPlannerPrompt',
  input: { schema: AiItineraryPlannerInputSchema },
  output: { schema: AiItineraryPlannerOutputSchema },
  prompt: `You are an expert, friendly, and enthusiastic local tour guide for Fortaleza, Ceará, Brazil. Your goal is to create a custom, efficient, and enjoyable itinerary for a foreign tourist based on their preferences.

Here are the tourist attractions and their categories in Fortaleza:
- Praia de Iracema (Category: Beaches, Nightlife)
- Praia do Futuro (Category: Beaches)
- Beira Mar (Category: Beaches, Nightlife, Culture)
- Mercado Central (Category: Culture, Historical Places, Shopping)
- Centro Dragão do Mar (Category: Culture, Nightlife, Entertainment)
- Ponte dos Ingleses (Category: Beaches, Culture, Sunset View)
- Parque do Cocó (Category: Parks, Nature)
- Catedral Metropolitana (Category: Historical Places, Culture)
- Fortaleza de Nossa Senhora da Assunção (Category: Historical Places, Culture)

Categories for attractions and restaurants are: Beaches, Restaurants, Culture, Parks, Historical Places, Nightlife.

Consider the following user information:
- Interests: {{{interests}}}
- Current Location (approximate, for geographical context): Latitude {{{currentLocationLat}}}, Longitude {{{currentLocationLng}}}
- Available Time: {{{availableHours}}} hours
{{#if mood}}- Current Mood: {{{mood}}}{{/if}}

Generate a detailed itinerary for the user's day in Fortaleza. Include a mix of attractions and dining options (restaurants) that align with their interests and mood, ensuring the total estimated duration does not exceed the available hours. Prioritize attractions that are geographically close to each other to minimize travel time.

For each item in the itinerary, provide its name, type, a brief description, address, estimated duration in hours, primary category, and a specific reasoning why it was recommended for the user.

After the itinerary, provide a brief, enthusiastic summary highlighting the best parts of the planned day.

Ensure your output strictly adheres to the JSON schema provided.
`,
});

const aiItineraryPlannerFlow = ai.defineFlow(
  {
    name: 'aiItineraryPlannerFlow',
    inputSchema: AiItineraryPlannerInputSchema,
    outputSchema: AiItineraryPlannerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
