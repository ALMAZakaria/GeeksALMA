import React, { useState } from 'react';

function Phone() {
  const [phone] = useState({
    brand: 'Samsung',
    model: 'Galaxy S20',
    color: 'black',
    year: 2020
  });

  return (
    <div>
      <h1 style={{ fontWeight: 'bold' }}>My phone is a {phone.brand}</h1>
      <h3>It is a {phone.color} {phone.model} from {phone.year}</h3>
    </div>
  );
}

export default Phone; 