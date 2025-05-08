async function askQuestion() {
  const input = document.getElementById("question").value;
  const answerDiv = document.getElementById("answer");

  if (!input.trim()) {
    answerDiv.textContent = "Please enter a question.";
    return;
  }

  answerDiv.textContent = "Thinking...";

  const encodedInput = encodeURIComponent(input);

  // ✅ Use the deployed backend, not localhost
  const url = `https://smart-study-api.onrender.com/api/query?input=${encodedInput}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const answer = await response.text();
      answerDiv.textContent = answer;
    } else {
      answerDiv.textContent = "Sorry, I couldn't figure that out.";
    }
  } catch (error) {
    console.error(error);
    answerDiv.textContent = "Something went wrong. Try again.";
  }
}
