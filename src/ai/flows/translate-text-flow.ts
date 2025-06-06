
'use server';
/**
 * @fileOverview A text translation AI flow.
 * - translateText - Translates text to a target language.
 * - TranslateTextInput - Input for the translation flow.
 * - TranslateTextOutput - Output for the translation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateTextInputSchema = z.object({
  textToTranslate: z.string().describe('The text to be translated.'),
  targetLanguage: z.string().describe('The full name of the target language (e.g., "Marathi", "Hindi", "Tamil").'),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;

export async function translateText(input: TranslateTextInput): Promise<TranslateTextOutput> {
  return translateTextFlow(input);
}

const translatePrompt = ai.definePrompt({
  name: 'translateTextPrompt',
  input: {schema: TranslateTextInputSchema},
  output: {schema: TranslateTextOutputSchema},
  prompt: `Translate the following text into {{{targetLanguage}}}:

"{{{textToTranslate}}}"

Return ONLY the translated text. Do not include any introductory phrases like "Here is the translation:".`,
});

const translateTextFlow = ai.defineFlow(
  {
    name: 'translateTextFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslateTextOutputSchema,
  },
  async input => {
    const {output} = await translatePrompt(input);
    if (!output) {
      throw new Error('Translation failed to produce output.');
    }
    return output;
  }
);
