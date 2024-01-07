// functions/index.js

const functions = require('firebase-functions');

exports.register = functions.https.onRequest((request, response) => {
    // Enable CORS (you may need to adjust this based on your needs)
    response.set('Access-Control-Allow-Origin', '*');

    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const data = JSON.parse(request.body);

        // Process the data or perform database operations
        // For now, just return a success response
        return response.status(200).json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
});
