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
    citation: null
  },
  {
    quote: "The Way Get Started Is To Quit Talking And Begin Doing",
    source: "Walt Disney",
    year: null,
    citation: null
  },
  {
    quote: "Whether You Think You Can Or Think You Can’t, You’re Right",
    source: "Henry Ford",
    year: null,
    citation: null
  },
  {
    quote: "To be, or not to be, that is the question.",
    source: "Shakesphere: Hamlet Act 3, Scene 1",
    year: null,
    citation: null
  },
  {
    quote: "In the world of business, the people who are most successful are those who are doing what they love.”",
    source: "Warren Buffet",
    citation: "Rule one investing",
    year: null
  }
];

// returns a random number from 0 - 5
function getRandomNumber(){
  return Math.floor(Math.random() * 6);
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
      htmlStr += '<span class="citation">' + randomQuote.citation + '</span></p>';
    
    // if the quote has a citaiton, it will print the quote with the citation
    } else if ( randomQuote.year != null ){
      htmlStr = '<p class="quote">' + randomQuote.quote + '</p>';
      htmlStr += '<p class="source">' + randomQuote.source;
      htmlStr += '<span class="year">' + randomQuote.year + '</span></p>';

    // prints the quote normally
    } else {
      htmlStr = '<p class="quote">' + randomQuote.quote + '</p>';
      htmlStr += '<p class="source">' + randomQuote.source + '</p>';
    }

  return htmlStr;
}

// implemented onClick event for button
function changeQuote(){
  document.getElementById('quote-box').innerHTML = printQuote();
}

document.getElementById('quote-box').innerHTML = printQuote();

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);