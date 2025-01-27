let submitBTN2 = document.getElementById("submitBTN2");
let firstNumInput = document.getElementById("firstNum");
let secondNumInput = document.getElementById("secondNum");
let resultText = document.getElementById("resultText");

submitBTN2.addEventListener("click", function () {
  let firstNum = firstNumInput.value.trim();
  let secondNum = secondNumInput.value.trim();

  // Nan (not a number), checking if inputs are numbers to run code
  if (firstNum && secondNum && !isNaN(firstNum) && !isNaN(secondNum)) {
    fetch(
      `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/Adding2Numbers/AddNumbers/${firstNum}/${secondNum}`
    )
      .then((response) => {
        if (!response.ok) {
          return Promise.reject("Failed to fetch the response");
        }
        return response.text();
      })
      .then((data) => {
        resultText.innerText = data;
      })
      .catch((error) => {
        console.error("Error:", error);
        resultText.innerText = "Oops! Something went wrong.";
      });
  } else {
    resultText.innerText = "Please enter valid numbers!";
  }
});
