import { NextResponse } from 'next/server';
import { createMollieClient } from '@mollie/api-client';

const mollieClient = createMollieClient({
    apiKey: process.env.MOLLIE_API_KEY || 'test_key_placeholder', // User must set this
});

export async function POST(request: Request) {
    try {
        const { amount, description, type } = await request.json();

        // Determine success redirect
        // Ensure we use the proper host. In Dev it's localhost:3000, in Prod it's studiolee.nl
        // We can infer from request headers or use an ENV
        const protocol = request.headers.get('x-forwarded-proto') || 'http';
        const host = request.headers.get('host');
        const baseUrl = `${protocol}://${host}`;

        const payment = await mollieClient.payments.create({
            amount: {
                currency: 'EUR',
                value: amount, // e.g. "179.00"
            },
            description: description,
            redirectUrl: `${baseUrl}/payment-success?type=${type}`,
            webhookUrl: `${baseUrl}/api/webhooks/mollie`, // Optional, for status updates
        });

        return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() });
    } catch (error: any) {
        console.error('Mollie Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
