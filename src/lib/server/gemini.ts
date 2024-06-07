import { GEMINI_API_KEY } from '$env/static/private';
import {
	GoogleGenerativeAI,
	HarmBlockThreshold,
	HarmCategory,
	type GenerationConfig,
	type SafetySetting
} from '@google/generative-ai';

const geminiConfig: GenerationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 64,
	maxOutputTokens: 8192,
	responseMimeType: 'application/json'
};

const safetySettings: SafetySetting[] = [
	{
		category: HarmCategory.HARM_CATEGORY_HARASSMENT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
	},
	{
		category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
	},
	{
		category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
	},
	{
		category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
	}
];

export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// The Gemini 1.5 models are versatile and work with most use cases
export const jsonModel = genAI.getGenerativeModel({
	model: 'gemini-1.5-flash',
	generationConfig: geminiConfig,
	safetySettings: safetySettings
});

export const textModel = genAI.getGenerativeModel({
	model: 'gemini-1.5-flash',
	generationConfig: {
		...geminiConfig,
		responseMimeType: 'text/plain'
	},
	safetySettings: safetySettings
});
