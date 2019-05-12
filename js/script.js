/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Name: Philip Laxamana
Date: 05/11/2019
******************************************/

// Array of quote objects are defined and created stored in the 'quotes' array
var quotes = [
  {
    quote: "Give me liberty, or give me death!",
    source: "Patrick Henry",
    year: 1775,
    citation: null,
    tags: 'history'
  },
  {
    quote: "The Way Get Started Is To Quit Talking And Begin Doing",
    source: "Walt Disney",
    year: null,
    citation: null,
    tags: 'success'
  },
  {
    quote: "Whether You Think You Can Or Think You Can’t, You’re Right",
    source: "Henry Ford",
    year: null,
    citation: null,
    tags: 'success'
  },
  {
    quote: "To be, or not to be, that is the question.",
    source: "Shakesphere: Hamlet Act 3, Scene 1",
    year: null,
    citation: null,
    tags: 'plays'
  },
  {
    quote: "In the world of business, the people who are most successful are those who are doing what they love.",
    source: "Warren Buffet",
    citation: "Rule one investing",
    year: null,
    tags: 'business'
  }
];

// returns a random number from 0 - 4
function getRandomNumber(){
  return Math.floor(Math.random() * 5);
}

// retrieves a random number and assigns it to the index of the quotes array to get random quote
function getRandomQuote() {
  var randomNumber = getRandomNumber();
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

// prints the random quote to screen
function printQuote(){
  var randomQuote = getRandomQuote();
  var htmlStr = '';

    // if the quote has a citaiton, it will print the quote with the citation
    if ( randomQuote.citation != null ) {
      htmlStr = '<p class="quote">' + randomQuote.quote + '</p>';
      htmlStr += '<p class="source">' + randomQuote.source;
      htmlStr += '<span class="citation">' + randomQuote.citation + '</span>';
      htmlStr += '<span class="tags">' + randomQuote.tags + '</span></p>';

    // if the quote has a citaiton, it will print the quote with the citation
    } else if ( randomQuote.year != null ){
      htmlStr = '<p class="quote">' + randomQuote.quote + '</p>';
      htmlStr += '<p class="source">' + randomQuote.source;
      htmlStr += '<span class="year">' + randomQuote.year + '</span>';
      htmlStr += '<span class="tags">' + randomQuote.tags + '</span></p>';

    // prints the quote normally
    } else {
      htmlStr = '<p class="quote">' + randomQuote.quote + '</p>';
      htmlStr += '<p class="source">' + randomQuote.source;
      htmlStr += '<span class="tags">' + randomQuote.tags + '</span></p>';
    }

  // Looks for the id: quote-box and htmlStr is assigned, printing the quote to the page
  document.getElementById('quote-box').innerHTML = htmlStr;
}

// generate a random color
function generateRandomColor(){
  return Math.floor(Math.random() * 256);
}

// implemented onClick event for button, generate random background color for each quote change
function changeQuote(){
  var r = generateRandomColor();
  var g = generateRandomColor();
  var b = generateRandomColor();
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  printQuote();
}

// prints a quote to the page onload
window.onload = printQuote;

// prints a new quote to the page every 5 seconds
window.setInterval(changeQuote, 5000);

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);