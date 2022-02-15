import { useState, useEffect } from 'react';
import { NewQuoteButton } from './NewQuoteButton';
import { getRandomQuote } from './GetRandomQuote';
import TwitterLogo from '../assets/TwitterLogo.png';

// 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',

export const QuoteBox = () => {
  const [{ quote , author }, setCurrQuote] = useState({quote:'', author:''});//same as 'this.state='  
  useEffect(() =>{
    setCurrQuote(getRandomQuote());
  },[])
  
  return (
    <div id="quote-box">
      <h2 id="text">{ quote }</h2>
      <h4 id="author">- { author }</h4>
      <div id="button-row">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet"><img id="twitter-logo" src={TwitterLogo} alt="twitter logo"></img></a>
        <NewQuoteButton setCurrQuote={setCurrQuote}/>
      </div>
    </div>
  );
}
