var input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("output").innerHTML = "result should be here";
  }
});