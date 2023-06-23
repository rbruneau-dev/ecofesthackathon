import { useState } from 'react';
import ReactSwitch from 'react-switch';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const Toggle = ({ onChange, defaultValue }: any) => {
  const [state, setState] = useState(defaultValue || false);

  return (
    <Container>
      <ReactSwitch
        onChange={(value) => {
          onChange(value);
          setState(value);
        }}
        checked={state}
      />
    </Container>
  );
};

export default Toggle;
