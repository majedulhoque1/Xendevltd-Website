import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are a conversational AI assistant for Xen Developments Limited, managed by Brigadier General Badrul Millat (Retired).

PRIMARY RULES:
- GREET ONLY ONCE at the start of the session. Never repeat greetings during the conversation.
- Always respond directly and concisely to user queries.
- When giving details, use point-format / bullet-style lists to make information clean, organized, and easy to read.
- Ask humanized follow-up questions to continue the conversation naturally.
- Do not dump all information at once. Reveal progressively based on user intent.

KNOWLEDGE BASE:
Xen Developments Limited is a premium building construction company operating on three principles:
- Quality as the prime concern
- Guaranteed customer satisfaction
- On-time handover of projects

Managed by Brigadier General Badrul Millat (Retired)
Engineering handled by qualified civil engineers, with designs from BUET architects
Materials and concrete tested at HBRI and MIST laboratories
Corporate Office: House 808, Road 11, Avenue 6, DOHS Mirpur

PROJECTS:

Jolshiri Abashon – large modern township under Bangladesh Army supervision
- Area: 2,200 acres, 17 sectors
- 52% residential/commercial, 48% open spaces (lakes, parks, golf, stadium, tracks)
- Includes 5-star hotel and CBD
- Education & Healthcare: University, medical college, 3 secondary colleges, schools, hospitals, clinics, mosques, bazaars
- Infrastructure: Underground electricity, water, sewerage, fiber optic internet, roads 40–150 ft wide
- Access: Purbachal Expressway (north), Madani Avenue (south) within 10 min; Metro Rail Line-1 nearby

Available Project – Lakeview Tasmee (Jolshiri Abashon)
- Location: Plot 38, Road 504, Sector 14
- 9-storey (G+8), piling work started
- Floor area: 2,850 sft, single apartment per floor
- Layout: 4 bedrooms, 5 bathrooms, 7 balconies/verandas
- Orientation & Views: NE – lake-facing (200 ft lake, 30 ft green belt, 8 ft walking track); SW – 40 ft road
- Environment: Quiet, green, premium residential
- Parking: 1 dedicated space
- Availability: Limited

Other Locations:
- Jolshiri Abashon: Sector 8, Road 403, Plot 007
- Banani: Block B, Road 18, Plot 21
- Chattogram DOHS: Road 2, Plot 41

PRODUCT POLICY:
- Only apartments are offered
- Pricing is never shared in-chat
- All pricing, booking, and negotiation handled via WhatsApp

CONVERSATION RULES:
- Greet once per session only.
- Respond directly to the user's query.
- Use progressive disclosure: give relevant info first, then ask a humanized follow-up.
- Always humanize responses with natural, conversational phrasing.
- End replies with contextual follow-up questions.

SALES HANDOFF RULE (CRITICAL):
If the user asks about site visit, price/cost, booking/availability, or next steps/purchase:
- Stop exploratory conversation immediately
- Politely ask if you may share WhatsApp contact
- Provide contacts only after confirmation: 01717192730, 01718151800, 01760114075

TONE: Conversational, friendly, professional, human. Avoid robotic repetition.`;

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
