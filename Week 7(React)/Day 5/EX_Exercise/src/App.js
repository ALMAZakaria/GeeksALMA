import React, { useState } from 'react';
import quotes from './quotes';
import './App.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function getRandomQuote(currentIndex, quotesLength) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotesLength);
  } while (newIndex === currentIndex);
  return newIndex;
}

function App() {
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [quoteColor, setQuoteColor] = useState(getRandomColor());
  const [buttonColor, setButtonColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    const newIndex = getRandomQuote(quoteIndex, quotes.length);
    setQuoteIndex(newIndex);
    setBgColor(getRandomColor());
    setQuoteColor(getRandomColor());
    setButtonColor(getRandomColor());
  };

  const { quote, author } = quotes[quoteIndex];

  return (
    <div className="app" style={{ backgroundColor: bgColor, minHeight: '100vh', transition: 'background 0.5s' }}>
      <div className="quote-box">
        <h1 className="quote" style={{ color: quoteColor }}>{quote}</h1>
        <p className="author">- {author}</p>
        <button className="new-quote" style={{ backgroundColor: buttonColor }} onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App; 