import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function ColorChange(event:any) {
    setColor(event.target.value);
  }

  return (
    <div className="colorContainer">
      <h1 className='colorH'>Color Picker</h1>
      <div className="colorDisplay" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={ColorChange} />
    </div>
  );
}

export default ColorPicker;