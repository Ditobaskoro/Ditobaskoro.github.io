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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  Div, MainTitle, H1, H1Bold, IconBar, Icon, Underline, Anchor, Bio, BioTitle, Paragraph,
} from './homepage-styles';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Div>
        <MainTitle>
          <H1>I’m </H1>
          <H1Bold>Dito Anwar Baskoro</H1Bold>
          <H1>, a Software Engineer </H1>
          <br />
          <H1>From Jakarta Indonesia </H1>
          <br />
          <H1>Currently living and working in </H1>
          <br />
          <H1>Kuala Lumpur Malaysia</H1>
          <br />
          <IconBar>
            <Icon>
              <Anchor href="https://www.instagram.com/ditobaskoro/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></Anchor>
            </Icon>
            <Icon>
              <Anchor href="https://www.last.fm/user/DitoBaskoro" target="_blank"><FontAwesomeIcon icon={['fab', 'lastfm']} /></Anchor>
            </Icon>
            <Icon>
              <Anchor href="https://www.linkedin.com/in/ditobaskoro/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Anchor>
            </Icon>
            <Icon>
              <Anchor href="https://github.com/Ditobaskoro" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></Anchor>
            </Icon>
            <Icon>
              <Anchor href="mailto:ditoanwar@me.com"><FontAwesomeIcon icon={faEnvelope} /></Anchor>
            </Icon>
          </IconBar>
          <Underline />
        </MainTitle>
        <Bio>
          <BioTitle>BIOGRAPHY</BioTitle>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type
          </Paragraph>
        </Bio>
      </Div>
    );
  }
}
