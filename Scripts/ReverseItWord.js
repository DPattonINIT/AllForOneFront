let submitBTN5 = document.getElementById("submitBTN5");
let reverseWord = document.getElementById("reverseWord");
let resultText6 = document.getElementById("resultText6");

submitBTN5.addEventListener("click", async function () {
  let input = reverseWord.value.trim();

  if (input === "") {
    resultText6.innerText = "Please enter a word.";
    return;
  }
  const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/ReverseItWord/${input}`;
  const reversedWord = await getReversedWord(url);
  resultText6.innerText = reversedWord;
});

const getReversedWord = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};
