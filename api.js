const openaiApiKey = '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';
const model = 'text-davinci-edit-001';
const prompt = 'Bec4me an d0ctor b3e hard';

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
      console.log('OpenAI response received.');
      const answer = await response.json();
      console.log(answer.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  }

getAnswer();
