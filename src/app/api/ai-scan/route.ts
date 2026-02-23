import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, websiteUrl, email, challenge, surpriseMe } = body;

        // Validate required fields
        if (!name || !websiteUrl || !email) {
            return NextResponse.json(
                { error: 'Vul alle verplichte velden in.' },
                { status: 400 }
            );
        }

        // Forward to n8n webhook
        const webhookResponse = await fetch(
            'https://n8n.aireclamestudio.nl/webhook/webhook/sales-deck',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    websiteUrl,
                    email,
                    challenge: challenge || '',
                    surpriseMe,
                    timestamp: new Date().toISOString(),
                    source: 'website_ai_scan',
                }),
            }
        );

        if (!webhookResponse.ok) {
            console.error('Webhook error:', webhookResponse.status);
        }

        return NextResponse.json({
            success: true,
            message: 'Scan gestart! Je ontvangt het rapport per e-mail.',
        });
    } catch (error) {
        console.error('AI Scan error:', error);
        return NextResponse.json(
            { error: 'Er is een fout opgetreden.' },
            { status: 500 }
        );
    }
}
