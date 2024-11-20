// let randomNumber = Math.random();
// console.log(randomNumber);  // for rodom numbers

const arrayOfQuotes = [
  {
    author: `Oscar Wilde`,
    quote: "Be yourself; everyone else is already taken.",
  },

  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  { author: "Marcus Tullius Cicero", 
    quote: "A room without books is like a body without a soul." },
  {
    author: "Dr. Seuss",
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mae West",
    quote:
      "You only live once, but if you do it right, once is enough.",
  },

  {
    author: "Mahatma Gandhi",
    quote:
      "Be the change that you wish to see in the world.",
  },
];


const previousNumber = null;
function generateQuote(){

    // const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);


let  random;
// do {
    
random = previousNumber
random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
if (random === previousNumber) {
    random+=1;
}
document.getElementById('quoteContent').textContent = `"${arrayOfQuotes[random].quote}"`;
document.querySelector('#authorContent').textContent = `--${arrayOfQuotes[random].author}`;

  
// }
// while (random === previousNumber)

// random = previousNumber
// return random;







    
    
}