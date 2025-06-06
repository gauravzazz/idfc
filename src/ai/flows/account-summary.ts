'use server';

/**
 * @fileOverview Summarizes the benefits of different account types (Classic vs Platinum).
 *
 * - getAccountSummary - A function that generates a summary of account benefits.
 * - AccountSummaryInput - The input type for the getAccountSummary function.
 * - AccountSummaryOutput - The return type for the getAccountSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AccountSummaryInputSchema = z.object({
  accountType: z
    .string()
    .describe('The type of account to summarize (e.g., Classic, Platinum).'),
});
export type AccountSummaryInput = z.infer<typeof AccountSummaryInputSchema>;

const AccountSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the benefits of the specified account type.'),
});
export type AccountSummaryOutput = z.infer<typeof AccountSummaryOutputSchema>;

export async function getAccountSummary(input: AccountSummaryInput): Promise<AccountSummaryOutput> {
  return accountSummaryFlow(input);
}

const accountSummaryPrompt = ai.definePrompt({
  name: 'accountSummaryPrompt',
  input: {schema: AccountSummaryInputSchema},
  output: {schema: AccountSummaryOutputSchema},
  prompt: `You are an expert financial advisor specializing in summarizing account benefits.

  Provide a concise summary of the benefits for the {{{accountType}}} account type.
  The summary should be no more than 2 sentences.
  `,
});

const accountSummaryFlow = ai.defineFlow(
  {
    name: 'accountSummaryFlow',
    inputSchema: AccountSummaryInputSchema,
    outputSchema: AccountSummaryOutputSchema,
  },
  async input => {
    const {output} = await accountSummaryPrompt(input);
    return output!;
  }
);
