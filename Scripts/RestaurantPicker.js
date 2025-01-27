let submitBTN5 = document.getElementById("submitBTN5");
let userQuestion = document.getElementById("userQuestion");
let resultText6 = document.getElementById("resultText6");

submitBTN5.addEventListener("click", async function () {
  let category = userQuestion.value.trim().toLowerCase();

  if (category === "") {
    resultText6.innerText = "Please enter a category.";
    return;
  }

  const validCategories = ["fastfood", "japanese", "chinese", "italian", "mexican"];

  if (!validCategories.includes(category)) {
    resultText6.innerText = "Invalid category. Please choose from: fastfood, japanese, chinese, italian, mexican.";
    return;
  }

  const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/RestaurantPicker/${category}`;
  
    const restaurant = await getRestaurant(url);
    resultText6.innerText = `We recommend: ${restaurant}`;
});


const getRestaurant = async (url) => {
  const response = await fetch(url);
  console.log(response.status);  

  const data = await response.text();  
  return data;
};
