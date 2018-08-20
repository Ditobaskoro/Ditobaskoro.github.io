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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Div = styled.div`
  margin: 0 auto;
  display: table;
`;
const Box = styled.div`
  margin: 20% 0;
  width: 100%;
  text-align: center;
`;
const H1 = styled.h1`
  color: #222;
  font-size: 2.5vw;
  font-family: LatoThin;
  display: inline;
`;
const H1Bold = H1.extend`
  font-family: Lato;
`;
const IconBar = styled.div`
  margin-top: 1vw;
  margin-bottom: 5vw;
`;
const Icon = styled.li`
  display: inline;
  color: #999;
  list-style-type: none;
  margin-right: 1vw;
  font-size: 1.5vw;
  &:hover {
    color: #4C5870;
  }
`;
const Underline = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  border-style: solid;
  border-width: 1px;
  border-color: #eee;
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
          <H1>Kuala Lumpur Malaysia</H1><br/>
          <IconBar>
            <Icon>
              <FontAwesomeIcon icon={['fab', 'instagram']}/>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={['fab', 'linkedin']}/>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={['fab', 'github']}/>
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faEnvelope}/>
            </Icon>
          </IconBar>
          <Underline/>
        </Box>  
      </Div>
    );
  }
}
