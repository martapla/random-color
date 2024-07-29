import { HexColorPicker } from 'react-colorful';

const HexColorPickerComponent = ({ color, onChange }) => {
  return (
    <div>
      <HexColorPicker color={color} onChange={onChange} />
    </div>
  );
};

export default HexColorPickerComponent;