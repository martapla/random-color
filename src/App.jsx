
import { useState, useEffect } from "react";
import "./App.css";
import HexColorPickerComponent from './HexColorPickerComponent';

export default function App() {
 
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    getRandomColor();
  },[]); 

  // convert the hex color to rgb
 
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r} ${g} ${b}`;
  };

  const rgbColor = hexToRgb(color);
  

  // get a random color from thecolorapi.com in json format using this URL
  const getRandomColor = async () => {
    try {
      const response = await fetch(`https://www.thecolorapi.com/random?format=json`);
      const data = await response.json();
      setColor(data.hex.value);
    } catch (error) {
      console.error("Error fetching color:", error);
    }
  };

  const handleColorChange = (color) => {
    setColor(color);
  };


  return (
    <main>
      
      <button onClick={getRandomColor}>Random Color</button>

      <HexColorPickerComponent color={color} onChange={handleColorChange} />
     
      <div>The color in HEX is {color}</div>
      <div>The color in RGB is {rgbColor}</div>
     
    </main>
   );
 }


