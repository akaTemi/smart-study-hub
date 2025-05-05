const appId = "Y3EAEA-G7X683XKQ3"; // Your WolframAlpha App ID

async function askQuestion() {
  const question = document.getElementById("question").value;
  const answerBox = document.getElementById("answer");

  if (!question.trim()) {
    answerBox.innerHTML = "<p>Please enter a question.</p>";
    return;
  }

  answerBox.innerHTML = "<p>Thinking...</p>";

  try {
    const res = await fetch(
      `https://api.wolframalpha.com/v1/result?i=${encodeURIComponent(question)}&appid=${appId}`
    );

    if (!res.ok) {
      answerBox.innerHTML = "<p>Sorry, I couldn't get an answer. Try a different question.</p>";
      return;
    }

    const answer = await res.text();
    answerBox.innerHTML = `<p><strong>Answer:</strong> ${answer}</p>`;
  } catch (error) {
    console.error("API Error:", error);
    answerBox.innerHTML = "<p>Something went wrong. Try again later.</p>";
  }
}
