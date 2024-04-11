const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const linkTarget = '_top';
const windowOptions = 'menubar=no,status=no,height=750,width=500';
const twitterURL = "https://twitter.com/intent/tweet/";
const endpoint = 'https://official-joke-api.appspot.com/random_joke';

const ansBtn = document.querySelector("#js-punchline");
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
        console.log(json['setup']);
        displayQuote(json['setup']);
        console.log(json['punchline']);
        answer = json['punchline'];
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
function extractSetup(){
    console.log(document.querySelector('#js-quote-text').textContent);
    return document.querySelector('#js-quote-text').textContent;
    
}

function extractPunchline(){
    console.log(document.querySelector('#js-punchline').textContent);
    return document.querySelector('#js-punchline').textContent;
}
function openTwitterWindow() {
    const setup = extractSetup();
    const punchline = extractPunchline();
    const twitterQuery = `text=${encodeURIComponent(`"${setup}" - ${punchline}`)}&url=`;
    return window.open(`${twitterURL}?${twitterQuery}&`, linkTarget, windowOptions);
}

function shareQuote() {
    const twitterButton = document.querySelector('#js-tweet');
    twitterButton.addEventListener('click', () => openTwitterWindow());
}
getQuote(); //runs a quote when page loads 
shareQuote();
