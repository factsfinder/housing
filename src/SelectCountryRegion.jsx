import React from 'react';
import styled, { css } from 'styled-components';
import { CountryDropdown, RegionDropdown as StateDropdown, } from 'react-country-region-selector';

const SelectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.5s ease;
`;

const DropdownStyled = css`
  width: 500px;
  height: 50px;
  background-color: white;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  margin-bottom: 15px;
`;

const SelectCountry = styled(CountryDropdown)`${DropdownStyled}`;
const SelectState = styled(StateDropdown)`${DropdownStyled}`;


export default ({ onCountryChange, onStateChange, country, state }) => {
  return (
    <SelectsWrapper>
      <SelectCountry onChange={onCountryChange} value={country} />
      {country && <SelectState onChange={onStateChange} value={state} country={country} />}
    </SelectsWrapper>
  );
}