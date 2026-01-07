import { GoogleGenAI } from "@google/genai";

/**
 * Provee asesoría de diseño e impresión utilizando la API de Gemini para Doble Erre.
 */
export const getDesignAdvice = async (userPrompt: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "No se detectó una llave de API válida. Por favor, asegúrate de haberla configurado correctamente.";
  }

  try {
    // Re-initialize for each call to ensure the latest API key is used as per guidelines.
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: `Eres el 'Consultor Técnico Senior de Doble Erre' en Ciudad de Guatemala (Zona 10). 
        Tu misión es asesorar a clientes sobre materiales, acabados y viabilidad de proyectos de diseño e impresión.
        
        Puntos clave:
        1. RÓTULOS: Cajas de luz, letras 3D (acrílico/PVC) y neón LED.
        2. PROMOCIONALES: Pachones, tazas y artículos con grabado láser o serigrafía.
        3. EVENTOS: Invitaciones de boda premium y papelería fina.
        4. SEGURIDAD: Señalética industrial normada.

        Dirección: 20 calle 5-35 Plaza Los Arcos Zona 10 Local 19, Guatemala.
        WhatsApp: 5581-1422 | PBX: 2393-8515.
        
        Sé amable, experto y siempre sugiere que soliciten una cotización formal en el formulario del sitio.`,
        temperature: 0.7,
      },
    });

    // Directly access .text property from the response object.
    return response.text || "Hubo un problema al procesar la respuesta. Por favor, intenta de nuevo.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("fetch") || error.message?.includes("NetworkError")) {
      return "ERROR_CONEXION_API";
    }
    return "Lo sentimos, el servicio de asesoría está experimentando dificultades técnicas. Puedes contactarnos directamente al PBX: 2393-8515.";
  }
};
