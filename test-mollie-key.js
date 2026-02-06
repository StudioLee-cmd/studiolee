const { createMollieClient } = require('@mollie/api-client');

async function testKey() {
    console.log("Starting test...");
    try {
        const mollieClient = createMollieClient({ apiKey: 'live_K7QbNBvwJ5C77yyC96jyRdJJcNQByQ' });
        console.log("Client created. Listing methods...");
        const methods = await mollieClient.methods.list();
        console.log('✅ Key is VALID. Available methods:', methods.map(m => m.id).join(', '));
    } catch (error) {
        console.error('❌ Key is INVALID:', error.message);
    }
}

testKey();
