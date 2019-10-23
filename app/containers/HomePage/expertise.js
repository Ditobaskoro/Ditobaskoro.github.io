import React from 'react';
import window from 'global';
import {
  Section, SectionTitle, PSmall, Button, ButtonText, SectionBig, SectionSmall, ExpertItem,
  ContactText, ContactTextUL,
} from './homepage-styles';

/* eslint-disable react/prefer-stateless-function */
export default class Expertise extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <SectionSmall>
            <SectionTitle>EXPERTISE</SectionTitle>
            <PSmall>
              More than four years of experience in software development.
              Worked on web app and hybrid app projects.
            </PSmall>
            <Button>
              <ButtonText onClick={() => window.open('http://bit.ly/resume-ditobaskoro', 'blank')}>My Résumé</ButtonText>
            </Button>
          </SectionSmall>
          <SectionBig>
            <ExpertItem>- Web Development</ExpertItem>
            <ExpertItem>- HTML</ExpertItem>
            <ExpertItem>- CSS</ExpertItem>
            <ExpertItem>- Javascript</ExpertItem>
            <ExpertItem>- PHP</ExpertItem>
            <ExpertItem>- Hybrid Apps Development</ExpertItem>
            <ExpertItem>- Mobile Apps Deployment</ExpertItem>
          </SectionBig>
          <SectionSmall>
            <ExpertItem>- React</ExpertItem>
            <ExpertItem>- React Native</ExpertItem>
            <ExpertItem>- Redux</ExpertItem>
            <ExpertItem>- MongoDB</ExpertItem>
            <ExpertItem>- NodeJS</ExpertItem>
            <ExpertItem>- Firebase</ExpertItem>
            <ExpertItem>- Meteor</ExpertItem>
          </SectionSmall>
        </Section>
        <div>
          <ContactText>Contact me, </ContactText>
          <ContactTextUL href="mailto:ditoanwar@me.com">ditoanwar@me.com</ContactTextUL>
        </div>
      </div>
    );
  }
}
