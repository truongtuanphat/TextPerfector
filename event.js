var input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    displayAnswer();
  }
});

async function displayAnswer() {
  const answer = await getAnswer();
  document.getElementById("output").innerHTML = answer;
}
