export async function fetchAISummary() {
    const apiKey = import.meta.env.VITE_API_KEY;
    
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    try {
        // 🔹 Fetch performance data from `data.json`
        if (!apiKey) {
            console.error("API key is missing!");
            return "Error: API key not found.";
        }
        const response = await fetch("data.json");
        if (!response.ok) throw new Error("Failed to load performance data.");
        
        const performanceData = await response.json();

        // 🔹 Construct a structured AI prompt
        const prompt = `Analyze the following CAT test performance data and generate a structured summary with insights on:
        
        **1. Accuracy** - Identify trends and strengths/weaknesses.

        **2. Question Selection Strategy** - Evaluate if the student is selecting the right difficulty levels.

        **3. Key Improvement Areas** - Highlight weak spots and areas needing attention.

        **4. Action Plan** - Suggest specific steps to improve performance, do not generalize.

        Performance Data:
        ${JSON.stringify(performanceData, null, 2)}

        Provide the response in this structured format:
        - **Accuracy**: [Detailed insights]

        - **Question Selection Strategy**: [Evaluation]

        - **Key Improvement Areas**: [Weaknesses & recommendations]

        - **Action Plan**: [Steps to improve, keep it short and unique, Do not quantify]

        detailed and up to the point. Also keep it easy to understand. 
        Also write a motivating quote at the end. Bold important words (meaningful phrase). Align the text properly. 
        Write atleast 3 points in each section Bold important words.
        `;

        // 🔹 API Request Body
        const requestBody = {
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        };

        // 🔹 Send request to Gemini AI
        const aiResponse = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        if (!aiResponse.ok) throw new Error(`AI API request failed with status: ${aiResponse.status}`);

        const aiData = await aiResponse.json();
        let rawSummary = aiData.candidates?.[0]?.content?.parts?.[0]?.text || "No summary generated.";

        // 🔹 Convert Markdown-style bold text and headings to HTML
        rawSummary = rawSummary
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **bold** to <strong>
            .replace(/- <strong>(.*?)<\/strong>:/g, "<h2>$1</h2>") // Convert "- **Heading**:" to <h2>
            .replace(/\n- /g, "<li>") // Convert "- " bullet points to <li>
            .replace(/\n/g, "<br>"); // Convert line breaks to <br>

        // 🔹 Wrap bullet points in <ul>
        if (rawSummary.includes("<li>")) {
            rawSummary = rawSummary.replace(/<li>/, "<ul><li>").concat("</ul>");
        }

        return rawSummary;
    } catch (error) {
        console.error("Error generating AI summary:", error);
        return "Error generating summary. Please try again later.";
    }
}
