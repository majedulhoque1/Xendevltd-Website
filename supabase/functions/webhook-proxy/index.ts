import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WebhookPayload {
  name?: string;
  phone?: string;
  message?: string;
  source: "contact_form" | "chatbot";
  timestamp?: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get("N8N_WEBHOOK_URL");
    
    if (!webhookUrl) {
      console.error("N8N_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ error: "Webhook not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const payload: WebhookPayload = await req.json();

    // Basic validation
    if (!payload.source || !["contact_form", "chatbot"].includes(payload.source)) {
      return new Response(
        JSON.stringify({ error: "Invalid source" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Server-side input validation (mirrors client-side Zod schemas)
    const MAX_NAME = 100;
    const MAX_PHONE = 20;
    const MAX_MESSAGE = 1000;

    if (payload.name !== undefined && (typeof payload.name !== "string" || payload.name.length > MAX_NAME)) {
      return new Response(
        JSON.stringify({ error: "Invalid or too long name" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (payload.phone !== undefined && (typeof payload.phone !== "string" || payload.phone.length > MAX_PHONE)) {
      return new Response(
        JSON.stringify({ error: "Invalid or too long phone" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (payload.message !== undefined && (typeof payload.message !== "string" || payload.message.length > MAX_MESSAGE)) {
      return new Response(
        JSON.stringify({ error: "Invalid or too long message" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Forward to n8n webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Webhook failed:", response.status);
      return new Response(
        JSON.stringify({ error: "Webhook failed" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Try to parse response, fallback to success message
    let responseData;
    try {
      responseData = await response.json();
    } catch {
      responseData = { success: true };
    }

    return new Response(
      JSON.stringify(responseData),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Webhook proxy error:", error);
    return new Response(
      JSON.stringify({ error: "Internal error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
