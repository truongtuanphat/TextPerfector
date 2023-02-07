const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (input.value == ""){
      input.placeholder = "ENTER TEXT!!!!!!!!!!!!!";
      return;
    }
    displayAnswer(input.value);
  }
});

async function displayAnswer(prompt) {
  const answer = await getAnswer(prompt);
  output.innerHTML = answer;
}
