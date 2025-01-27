let submitBTN5 = document.getElementById("submitBTN5");
let noun1 = document.getElementById("noun1");
let adjective1 = document.getElementById("adjective1");
let noun2 = document.getElementById("noun2");
let adjective2 = document.getElementById("adjective2");
let noun3 = document.getElementById("noun3");
let adjective3 = document.getElementById("adjective3");
let noun4 = document.getElementById("noun4");
let adjective4 = document.getElementById("adjective4");
let noun5 = document.getElementById("noun5");
let adjective5 = document.getElementById("adjective5");

submitBTN5.addEventListener("click", async function () {
  let nouns = [
    noun1.value.trim(),
    noun2.value.trim(),
    noun3.value.trim(),
    noun4.value.trim(),
    noun5.value.trim(),
  ];
  let adjectives = [
    adjective1.value.trim(),
    adjective2.value.trim(),
    adjective3.value.trim(),
    adjective4.value.trim(),
    adjective5.value.trim(),
  ];

  if (nouns.every((n) => n) && adjectives.every((a) => a)) {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/MadLib/${nouns.join(
      "/"
    )}/${adjectives.join("/")}`;

    const story = await fetchStory(url);

    document.getElementById("resultsText5").innerText = story;
  } else {
    document.getElementById("resultsText5").innerText =
      "Please fill all inputs!";
  }
});

const fetchStory = async (url) => {
  try {
    const response = await fetch(url, { method: "POST" });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Oops! Something went wrong.";
  }
};
