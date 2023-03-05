import axios from "axios";
const API_KEY = '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';

export async function sendMessage(message) {
    console.log(message);
    const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
            prompt: message,
            max_tokens: 2048,
            n: 1,
            stop: '\n',
            temperature: 0.7,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            },
        }
    );

    return response.data.choices[0].text;
}