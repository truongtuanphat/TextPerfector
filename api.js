const openaiApiKey = 'openaiApiKey';
const model = 'text-davinci-edit-001';
const prompt = 'Bec4me d0ctor b3e hard';

async function getAnswer() {
  console.log('Prompt: ' + prompt);
  try {
    const response = await fetch('https://api.openai.com/v1/edits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + openaiApiKey
      },
      body: JSON.stringify({
        model: model,
        temperature: 0,
        input: prompt,
        instruction: "Fix the spelling mistakes, remove redundant characters and correct grammar"
      })
    });
    const answer = await response.json();
    const firstAnswer = answer.choices[0].text;
    console.log(firstAnswer);
    return firstAnswer;
  } catch (error) {
    console.error(error);
  }
}
