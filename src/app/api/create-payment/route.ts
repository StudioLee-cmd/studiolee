import { NextResponse } from 'next/server';
import { createMollieClient } from '@mollie/api-client';

export async function POST(request: Request) {
    try {
        // TODO: This is a temporary hardcode for debugging.
        const apiKey = 'live_K7QbNBvwJ5C77yyC96jyRdJJcNQByQ';

        // Cast to string to avoid TS error: This comparison appears to be unintentional...
        if (!apiKey || (apiKey as string) === 'test_key_placeholder') {
            console.error('MOLLIE_API_KEY is not set');
            return NextResponse.json({ error: 'Payment configuration error' }, { status: 500 });
        }

        const mollieClient = createMollieClient({ apiKey });

        const { amount, description, type } = await request.json();

        const protocol = request.headers.get('x-forwarded-proto') || 'http';
        const host = request.headers.get('host');
        const baseUrl = `${protocol}://${host}`;

        // Only add webhookUrl in production (Mollie can't reach localhost)
        const isProduction = host && !host.includes('localhost');

        const paymentData: any = {
            amount: {
                currency: 'EUR',
                value: amount,
            },
            description: description,
            redirectUrl: `${baseUrl}/payment-success?type=${type}`,
        };

        if (isProduction) {
            paymentData.webhookUrl = `${baseUrl}/api/webhooks/mollie`;
        }

        const payment = await mollieClient.payments.create(paymentData);
        const checkoutUrl = payment.getCheckoutUrl();

        if (!checkoutUrl) {
            return NextResponse.json({ error: 'No checkout URL returned' }, { status: 500 });
        }

        return NextResponse.json({ checkoutUrl });
    } catch (error: any) {
        console.error('Mollie Error:', error?.message || error);
        return NextResponse.json({ error: error?.message || 'Payment creation failed' }, { status: 500 });
    }
}
