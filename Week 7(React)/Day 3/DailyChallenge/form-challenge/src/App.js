import React, { useState } from 'react';
import './App.css';
import FormComponent from './FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
      ...formData,
      lactoseFree: formData.lactoseFree ? 'on' : undefined,
    });
    window.location.search = params.toString();
  };

  return (
    <div className="App">
      <h1>Form Challenge</h1>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
