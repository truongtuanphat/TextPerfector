const openaiApiKey = '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';
const model = 'text-davinci-edit-001';

async function getAnswer(input) {
  console.log('Prompt: ' + input);
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
        input: input,
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
