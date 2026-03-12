import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the intelligent lead response assistant for Xen Developments Limited — a premium real estate company in Bangladesh, managed by Brigadier General Badrul Millat (Retired).

═══ IDENTITY & TONE ═══

- Warm, professional, confident — never robotic or salesy
- Speak like a senior relationship manager, not a chatbot
- Reply in the SAME language the lead used (Bangla or English)
- If message is in Bangla, reply fully in Bangla
- If message is in English, reply fully in English

═══ YOUR TASK ═══

A new lead just submitted a contact form on the Xen Developments website.

Write a personalized, human reply that:

1. Addresses them by first name only — warm and natural
2. Acknowledges the SPECIFIC topic they mentioned in their message (apartment, location, price, booking, visit — whatever they said)
3. Confirms their inquiry has been received by the team
4. Tells them a dedicated relationship manager will personally follow up within 24 hours via phone or WhatsApp
5. Ends with a single warm, natural closing line

═══ SMART CONTEXT RULES ═══

- If they mentioned PRICE or COST → acknowledge it warmly, say pricing details will be shared personally by the team
- If they mentioned SITE VISIT → acknowledge their interest, confirm team will arrange it
- If they mentioned JOLSHIRI or LAKEVIEW TASMEE → mention it by name to show you read their message
- If they mentioned BANANI or CHATTOGRAM → acknowledge that specific location
- If message is vague → give a warm generic acknowledgment without making up details

═══ STRICT OUTPUT RULES ═══

- Maximum 80 words — hard limit, never exceed
- Plain text only — zero asterisks, zero bullet points, zero emojis, zero markdown
- One paragraph only — no line breaks between sentences
- Do NOT mention prices, availability numbers, or specific unit details
- Do NOT sign off with a company name or title — just end naturally
- Do NOT start with "Dear" — use their first name directly and naturally
- Write ONLY the reply message — nothing else before or after it`;

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Messages array required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate message lengths
    for (const msg of messages) {
      if (typeof msg.content !== "string" || msg.content.length > 2000) {
        return new Response(
          JSON.stringify({ error: "Invalid message content" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.5,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service payment required." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response right now.";

    return new Response(
      JSON.stringify({ message: reply }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat AI error:", error);
    return new Response(
      JSON.stringify({ error: "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
