import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: start;
  font-size: 2rem;
  font-weight: bold;
  display: block;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const SelectInput = styled.select`
  width: 100%;
  display: block;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.3rem;
  outline: none;
`;
const UseCriptoModenas = (label, inicialState, options) => {
  const [state, updateState] = useState(inicialState);
  const Select = () => (
    <>
      <Label>{label}</Label>
      <SelectInput onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">--Selecciona una moneda--</option>
        {options.map(({ code, name }) => {
          return (
            <option key={code} value={code}>
              {name}
            </option>
          );
        })}
      </SelectInput>
    </>
  );
  return [state, Select, updateState];
};

export default UseCriptoModenas;
