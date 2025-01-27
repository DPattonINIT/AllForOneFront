let submitBTN5 = document.getElementById("submitBTN5");
let reverseNum = document.getElementById("reverseNum");
let resultText6 = document.getElementById("resultText6");

submitBTN5.addEventListener("click", async function () {
  let num = reverseNum.value.trim();

  if (num && !isNaN(num)) {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/ReverseItNumber/ReverseNumber/${num}`;

    const result = await getReversedNumber(url);
    resultText6.innerText = `${result}`;
  } else {
    resultText6.innerText = "Please enter a valid number!";
  }
});

const getReversedNumber = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};
