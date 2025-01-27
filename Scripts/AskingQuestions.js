let submitBTN3 = document.getElementById('submitBTN3');
let firstQ = document.getElementById('firstQ'); 
let secondQ = document.getElementById('secondQ'); 
let resultText2 = document.getElementById('resultText2'); 


submitBTN3.addEventListener('click', async function () {
    let name = firstQ.value.trim(); 
    let wakeUpTime = secondQ.value.trim(); 

    if (name && wakeUpTime) {
        const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/AskingQuestions/AskingQuestions/${name}/${wakeUpTime}`;

        // Backend used a Post, can't fetch using Get so I have to use method:Post
        const response = await fetch(url, {
            method: 'POST', 
        });

    const data = await response.text();

        resultText2.innerText = data;
    } else {
        resultText2.innerText = "Please enter both your name and wake-up time!";
    }
});
