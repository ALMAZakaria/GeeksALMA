import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaSript', votes: 0 },
    { name: 'Java', votes: 0 }
  ]);

  const handleVote = (index) => {
    setLanguages(languages =>
      languages.map((lang, i) =>
        i === index ? { ...lang, votes: lang.votes + 1 } : lang
      )
    );
  };

  return (
    <div className="App">
      <h1 style={{ fontSize: '3rem', marginTop: '1rem' }}>Vote Your Language!</h1>
      <div style={{ maxWidth: 600, margin: '2rem auto' }}>
        {languages.map((lang, idx) => (
          <div key={lang.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fde9c7', padding: '2rem', margin: '1rem 0', border: '1px solid #222', fontSize: '2rem' }}>
            <span>{lang.votes}</span>
            <span style={{ flex: 1, textAlign: 'center' }}>{lang.name}</span>
            <button onClick={() => handleVote(idx)} style={{ fontSize: '2rem', color: 'green', background: 'none', border: 'none', cursor: 'pointer' }}>Click Here</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
