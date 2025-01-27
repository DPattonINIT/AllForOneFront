let submitBTN5 = document.getElementById("submitBTN5");
let userNum1 = document.getElementById("userNum1");
let userNum2 = document.getElementById("userNum2");
let resultText4 = document.getElementById("resultText4");

submitBTN5.addEventListener("click", async function () {
  let num1 = userNum1.value.trim();
  let num2 = userNum2.value.trim();

  if (num1 && num2 && !isNaN(num1) && !isNaN(num2)) {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/GreaterThanOrLessThan/GetNumber/${num1}/${num2}`;

    const result = await getComparison(url);
    resultText4.innerText = result;
  } else {
    resultText4.innerText = "Please enter valid numbers!";
  }
});

const getComparison = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Oops! Something went wrong.";
  }
};
