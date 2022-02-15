import React from 'react';
import {getRandomQuote} from './GetRandomQuote'



export const NewQuoteButton = ({ setCurrQuote }) => {
  const onClick = () => {
    const currQuote = getRandomQuote();
    setCurrQuote(currQuote);
  };


  return (
    <button
      onClick={onClick}
      id="new-quote"
    >
      New Quote
    </button>
  );
}
