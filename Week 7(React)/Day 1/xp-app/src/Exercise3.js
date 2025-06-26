import React from 'react';
import './Exercise.css';
import logo from './logo.svg';

class Exercise extends React.Component {
  render() {
    const style_header = {
      color: "black",
      backgroundColor: "white",
      padding: "10px",
      fontFamily: "Arial",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "2.5em"
    };
    const centerStyle = { textAlign: "center", margin: "30px 0" };
    return (
      <div>
        <h1 style={style_header}>This is a Header</h1>
        <div style={centerStyle}>
          <p className="para">This is a Paragraph</p>
          <a href="https://reactjs.org" style={{ color: "purple" }}>This is a Link</a>
        </div>
        <div style={centerStyle}>
          <h2 style={{ fontWeight: "bold" }}>This is a Form:</h2>
          <div>Enter your name:</div>
          <input type="text" style={{ margin: "10px 0" }} />
          <button>Submit</button>
        </div>
        <div style={centerStyle}>
          <h2 style={{ fontWeight: "bold", color:"black" }}>Here is an Image:</h2>
          <img src={logo} alt="React Logo" style={{ background:"grey" ,width: "60%", maxWidth: 600 }} />
        </div>
        <div style={centerStyle}>
          <h2 style={{ fontWeight: "bold" }}>This is a List:</h2>
          <ul style={{ display: "inline-block", textAlign: "left" }}>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Exercise; 