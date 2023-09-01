import axios from "axios";
import { API } from "../API";

const apiKey = API;
const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";

let lastRequestTime = 0;
const minRequestInterval = 2000; // Minimum time between requests in milliseconds (adjust as needed)

export async function askGPT3(question) {
    try {
        const currentTime = Date.now();
        const timeSinceLastRequest = currentTime - lastRequestTime;

        if (timeSinceLastRequest < minRequestInterval) {
            // Wait for the minimum interval before making the next request
            await new Promise((resolve) => setTimeout(resolve, minRequestInterval - timeSinceLastRequest));
        }

        const response = await axios.post(
            apiUrl,
            {
                prompt: `Answer the following question: ${question}`,
                max_tokens: 50,
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            const answer = response.data.choices[0].text;
            lastRequestTime = Date.now(); // Update the last request time
            return answer;
        } else {
            console.error("Error:", response.status, response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}
