import React from 'react';
import window from 'global';
import {
  Section, SectionTitle, PSmall, Button, ButtonText, SectionBig, SectionSmall, ExpertItem, Divider,
  ContactText, ContactTextUL,
} from './homepage-styles';

/* eslint-disable react/prefer-stateless-function */
export default class Expertise extends React.Component {
  render() {
    return (
      <Section>
        <SectionSmall>
          <SectionTitle>EXPERTISE</SectionTitle>
          <PSmall>
            More than four years of experience in software development.
            Working on web app and hybrid app projects.
          </PSmall>
          <Button>
            <ButtonText onClick={() => window.open('http://bit.ly/resume-dito', 'blank')}>My Résumé</ButtonText>
          </Button>
        </SectionSmall>
        <SectionBig>
          <ExpertItem>- Web development</ExpertItem>
          <ExpertItem>- HTML</ExpertItem>
          <ExpertItem>- CSS</ExpertItem>
          <ExpertItem>- Javascript</ExpertItem>
          <ExpertItem>- PHP</ExpertItem>
          <ExpertItem>- Hybrid Apps Development</ExpertItem>
          <ExpertItem>- Mobile Apps Development</ExpertItem>
        </SectionBig>
        <SectionSmall>
          <ExpertItem>- React</ExpertItem>
          <ExpertItem>- React Native</ExpertItem>
          <ExpertItem>- Meteor</ExpertItem>
          <ExpertItem>- NodeJS</ExpertItem>
          <ExpertItem>- Firebase</ExpertItem>
          <ExpertItem>- Redux</ExpertItem>
          <ExpertItem>- MongoDB</ExpertItem>
        </SectionSmall>
        <Divider />
        <ContactText>Contact me, </ContactText>
        <ContactTextUL href="mailto:ditoanwar@me.com">ditoanwar@me.com</ContactTextUL>
      </Section>
    );
  }
}
