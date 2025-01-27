let submitBTN4 = document.getElementById('submitBTN4');
let oENum = document.getElementById('oENum'); 
let resultText3 = document.getElementById('resultText3')

submitBTN4.addEventListener('click', async function () {
    let number = oENum.value.trim(); 

    if (number && !isNaN(number)) {
        const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/OddOrEven/${number}`;

      
        await fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.text();
            })
            .then(data => {
                
                resultText3.innerText = data;
            })
            .catch(error => {
                console.error('Error:', error);
                resultText3.innerText = "Oops! Something went wrong.";
            });

    } else {
        resultText3.innerText = "Please enter a valid number!";
    }
});