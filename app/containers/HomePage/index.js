/* eslint-disable no-unused-vars */
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
import {
  Div, Underline,
} from './homepage-styles';

import Main from './main';
import Bio from './bio';
import Expertise from './expertise';
import Works from './works';
import Footer from './footer';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Div>
        <Main />
        {/* <Underline />
        <Bio />
        <Underline />
        <Works />
        <Underline />
        <Expertise />
        <Footer /> */}
      </Div>
    );
  }
}
