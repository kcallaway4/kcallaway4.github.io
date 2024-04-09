const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

const ansBtn = document.querySelector("#js-tweet");
ansBtn.addEventListener('click', getAnswer);

const answerText = document.querySelector("#js-answer-text");
let answer = ''; 
async function getQuote(){
    // console.log("Test");
    try{
        const response = await fetch(endpoint); //define new var and wait to get the response of endpoint 
        //if response is not ok then throw error
        if (!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json['question']);
        displayQuote(json['question']);
        console.log(json['answer']);
        answer = json['answer'];
        answerText.textContent = '';
    } catch (err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;

}
function getAnswer(){
   answerText.textContent = answer;

}
getQuote(); //runs a quote when page loads 

