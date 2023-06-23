import { useState } from 'react';
import ReactSlider from 'react-input-slider';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 15px 10px;

  label {
    padding: 5px 10px;
    background-color: #d1e3ff;
    border-radius: 10px;
  }
`;

const Slider = ({ max, defaultValue, unit, onChange }: any) => {
  const [state, setState] = useState(defaultValue);

  const handleChange = (x: any) => {
    onChange(x);
  };

  return (
    <Container>
      <label>
        <strong>{state.toLocaleString()}</strong> <em>{unit}</em>
      </label>
      <ReactSlider
        data-value={state}
        xmax={max}
        xmin={0}
        axis="x"
        x={state}
        onChange={({ x }: any) => {
          setState(x);
        }}
        onDragEnd={(e) => {
          const s = e.target as any;
          handleChange(s.parentElement.parentElement.dataset.value);
        }}
      />
    </Container>
  );
};

export default Slider;
