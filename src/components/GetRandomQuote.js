import QuoteDB from '../QuoteDB.json';



export const getRandomQuote = () => {
    const quoteArray = QuoteDB.quotes;
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const randomQuote = quoteArray[randomIndex];
    return randomQuote;
  };