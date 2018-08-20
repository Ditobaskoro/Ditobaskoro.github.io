/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
  margin: auto;
  padding: 10%;
`;
const Box = styled.div`
  margin: 0 10%;
  width: 80%;
  text-align: center;
`;
const H1 = styled.h1`
  color: #222;
  font-size: 36px;
  font-family: 'Lato';
  font-weight: 300;
  display: inline;
`;
const H1Bold = H1.extend`
  font-weight: 600;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Div>
        <Box>
          <H1>I'm </H1>
          <H1Bold>Dito Anwar Baskoro</H1Bold>
          <H1>, a Software Engineer </H1><br/>
          <H1>From Jakarta Indonesia </H1><br/>
          <H1>Currently living and working in </H1><br/>
          <H1>Kuala Lumpur Malaysia</H1>
        </Box>
      </Div>
    );
  }
}
