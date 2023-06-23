import { useState } from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const Select = ({ onChange, defaultValue, options }: any) => {
  const [state, setState] = useState(defaultValue || false);

  const handleChange = (newValue: any) => {
    setState(newValue);
    onChange(newValue);
  };

  const selectOption = options.map((o: any) => {
    return {
      value: o,
      label: o,
    };
  });
  return (
    <Container>
      <ReactSelect
        placeholder="Mode de transport"
        defaultValue={state}
        options={selectOption}
        onChange={handleChange}
        isMulti={false}
        className="choice-select"
      />
    </Container>
  );
};

export default Select;
