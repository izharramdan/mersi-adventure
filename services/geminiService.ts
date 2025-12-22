
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getCustomItinerary = async (prompt: string) => {
  if (!API_KEY) {
    throw new Error("API Key is not configured");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are a professional travel consultant for Mersi Adventure in Pangalengan, Bandung. Your task is to provide high-energy, exciting, and detailed itineraries focusing on outdoor activities like Rafting, Off-road Land Rover, and Camping. Format your response in professional Markdown.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I couldn't generate an itinerary right now. Please contact our human support for assistance!";
  }
};
