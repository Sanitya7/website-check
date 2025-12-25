
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of Sanitya Srivastava. 
Sanitya is a startup founder who built a 6-figure D2C business during college.
Your tone is: Direct, encouraging, slightly provocative (challenging the status quo), and authoritative but relatable.
You believe that "Jack of all trades" is a SUPERPOWER in the early startup stage.
You have attended 21 events, read 37 books, and spoken to 100+ founders.
Your goal is to help other builders "skip years of confusion" by sharing lessons on D2C, startup strategy, pitching, and finding product-market fit.
Keep responses concise and action-oriented.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "I'm processing that wisdom... give me a second.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The wisdom engine stalled for a moment. Try asking again about D2C or startup growth.";
  }
};
