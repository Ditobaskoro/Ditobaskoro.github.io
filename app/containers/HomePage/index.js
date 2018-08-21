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
  Div, MainTitle, H1, H1Bold, IconBar, Icon, Underline, Anchor, Bio, BioTitle, PSmall, P, BioDiv,
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
          <BioDiv>
            <BioTitle>BIOGRAPHY</BioTitle>
            <PSmall>
              Experienced software engineer/ developer, mostly wrote in javascript.
              Has done various projects both website and hybrid apps for iOS and Android.
            </PSmall>
            <P>
              Born in Jakarta and raised in Cilegon, small city in very west of Java.
              A typical child who interested in game and computer things.
              Got my first computer at age of 14, I just feel myself into it.
            </P>
            <P>
              Graduated from high school, then continue my study in Depok West Java.
              Took the IT course, that’s the one I only interested. Anything related to computer.
              Then I began to love web development,
              though I’m not among the best one but I really proud of my works.
              Finish my diploma, I continue to pursue my bachelor degree to Kuala Lumpur Malaysia.
              I know it’s only small college,
              but I also thinking about the experience I can get from study and living abroad.
            </P>
          </BioDiv>
          <BioDiv>
            <P>
              In between my study, I did my internship in small startup.
              That’s where I feel more advanced as a developer to be hired by local startup.
              Back then with all the hardworks i only get peanuts, but that’s not totally the case.
              I got hell of experience in terms of everything to be a real developer.
            </P>
            <P>
              After I land my first job, that’s where I introduced by ”javascript”
              and all of its technology.
              And starting to get love/hate relationship with this programming
              language that lead me into today.
              Become a software developer, I realized that I need to constantly
              learning and keep up because the technology are moving fast.
            </P>
            <P>
              I Currently live in Kuala Lumpur and continue work in a startup.
              Unless like monotonous 9 to 5 job,
              here I can freely to explore something new in technology.
              Starting from web development, I also do hybrid apps project
              for both iOS and Android.
            </P>
          </BioDiv>
        </Bio>
        <Underline />
      </Div>
    );
  }
}
