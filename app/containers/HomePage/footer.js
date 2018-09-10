import React from 'react';
import {
  SectionBottom, BottomLine, BottomText,
} from './homepage-styles';

/* eslint-disable react/prefer-stateless-function */
export default class Footer extends React.PureComponent {
  render() {
    return (
      <SectionBottom>
        <BottomLine />
        <BottomText>© 2018 Dito Anwar Baskoro.</BottomText>
      </SectionBottom>
    );
  }
}
