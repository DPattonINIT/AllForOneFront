let submitBTN5 = document.getElementById("submitBTN5");
let userQuestion = document.getElementById("userQuestion");
let resultText6 = document.getElementById("resultText6");

submitBTN5.addEventListener("click", async function () {
  let question = userQuestion.value.trim();

  if (question === "") {
    resultText6.innerText = "Please enter a question.";
    return;
  }
  const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/Magic8Ball/question?question=${question}`;
  const response = await getMagic8BallResponse(url);
  resultText6.innerText = response;
});

const getMagic8BallResponse = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};
