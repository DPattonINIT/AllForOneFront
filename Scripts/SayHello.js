let submitBTN = document.getElementById("submitBTN");
let helloInput = document.getElementById("helloInput");
let userNameText = document.getElementById("userName");

submitBTN.addEventListener("click", async function () {
  let name = helloInput.value.trim();

  if (name) {
    let greeting = `Hello, ${name}, nice to meet you!`;
    userNameText.innerText = greeting;

    try {
      const response = await fetch(
        `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/SayHello/SayHello/${name}`
      );
      const data = await response.text();
    } catch (error) {
      console.error("Error fetching data:", error);
      userNameText.innerText = "Oops! Something went wrong.";
    }
  } else {
    userNameText.innerText = "Please enter your name!";
  }
});
