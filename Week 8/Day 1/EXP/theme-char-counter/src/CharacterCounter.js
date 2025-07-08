import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div style={{ margin: '20px' }}>
      <input
        ref={inputRef}
        type="text"
        onInput={handleInput}
        placeholder="Type something..."
        style={{ padding: '10px', fontSize: '1rem', width: '250px' }}
      />
      <div style={{ marginTop: '10px', fontSize: '1rem' }}>
        Character count: {count}
      </div>
    </div>
  );
};

export default CharacterCounter; 