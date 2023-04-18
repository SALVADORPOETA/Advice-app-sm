import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    axios.get(url)
      .then(res => {
        let dataQuotes = res.data.quotes;
        console.log(dataQuotes);
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch(error => console.log(error));
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div className='app'>
      <div className="card">
        <h1 className="heading"><p>{quote}</p></h1>
        <h2 className="heading">-{author}</h2>
        <div>
          <button onClick={handleClick} className="button">
            <span>GIVE ME INSPIRATION</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
