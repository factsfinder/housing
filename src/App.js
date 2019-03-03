import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SelectCountryRegion from './SelectCountryRegion.jsx';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export default () => {
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const selected = country && state;

  const getZillowResults = () => {
    const ZWS_ID = 'X1-ZWz182nhjn9897_64j9s';
    fetch('https://www.zillow.com/webservice/GetRegionChildren.htm', {
      params: {
        'regionId': 'US',
        'zws-id': ZWS_ID,
         state
      }
    }).then(res => {
      console.log(res);
    })
  }

  useEffect(() => {
    if (country && state) {
      getZillowResults();
    }
  });

  return (
    <AppWrapper>
      <h1>Housing Finder</h1>
      {!selected && <h2>Please select your country and state</h2>}
      <SelectCountryRegion
        country={country}
        state={state}
        onCountryChange={(val) => setCountry(val)}
        onStateChange={(val) => setState(val)}
      />
      {!selected
        ? <h2>Your results will appear here once you select country and state..!</h2>
        : <h2>Displaying results from {country} and {state}</h2>
      }

    </AppWrapper>
  );
};
