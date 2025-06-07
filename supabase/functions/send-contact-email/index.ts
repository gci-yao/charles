import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()

    // Validation des données
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Configuration de l'email
    const emailData = {
      to: ['charlesyao1602@gmail.com'],
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            Nouveau message depuis votre portfolio
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Ce message a été envoyé depuis votre portfolio professionnel.</p>
            <p>Vous pouvez répondre directement à ${email}</p>
          </div>
        </div>
      `
    }

    // Envoi de l'email via Resend (service d'email recommandé) re_cDLEZQip_9SHE7JPpQdGpxgV5xJGGRDsn
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY non configurée')
      return new Response(
        JSON.stringify({ error: 'Configuration email manquante' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <charlesyao1602@gmail.com>', // Remplacez par votre domaine
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.html,
        reply_to: email, // Permet de répondre directement au visiteur
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Erreur Resend:', errorText)
      throw new Error('Erreur lors de l\'envoi de l\'email')
    }

    const result = await resendResponse.json()
    console.log('Email envoyé avec succès:', result)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message envoyé avec succès!' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Erreur:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})