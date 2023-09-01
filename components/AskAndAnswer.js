import axios from "axios";
import { API } from "../API";

const apiKey = API;
const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";

export async function askGPT3(question) {
    try {
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
