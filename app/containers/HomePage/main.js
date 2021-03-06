import React from 'react';
import TextLoop from 'react-text-loop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emoji from '../../images/emoji.png';
import {
  MainSection, H1, H1Bold, IconBar, Icon, Anchor, Emoji,
} from './homepage-styles';

export default class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <MainSection>
        {/* <H1>Hello, my name is </H1> */}
        <H1Bold>Dito Anwar Baskoro</H1Bold>
        <Emoji src={emoji} />
        <br />
        <H1>I’m a </H1>
        <TextLoop>
          <H1>Software Engineer</H1>
          <H1>Web Developer</H1>
          <H1>Frontend Developer</H1>
        </TextLoop>
        <br />
        {/* <H1>From Indonesia</H1>
        <br /> */}
        <H1>Currently living and working in</H1>
        <br />
        <H1>Jakarta, Indonesia</H1>
        <br />
        <IconBar>
          <Icon>
            <Anchor href="https://www.linkedin.com/in/ditobaskoro/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Anchor>
          </Icon>
          <Icon>
            <Anchor href="https://github.com/Ditobaskoro" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></Anchor>
          </Icon>
          <Icon>
            <Anchor href="https://www.instagram.com/ditobaskoro/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></Anchor>
          </Icon>
          <Icon>
            <Anchor href="https://www.last.fm/user/DitoBaskoro" target="_blank"><FontAwesomeIcon icon={['fab', 'lastfm']} /></Anchor>
          </Icon>
          <Icon>
            <Anchor href="mailto:ditoanwar@me.com"><FontAwesomeIcon icon={faEnvelope} /></Anchor>
          </Icon>
        </IconBar>
      </MainSection>
    );
  }
}
