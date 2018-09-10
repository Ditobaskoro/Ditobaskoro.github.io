import React from 'react';
import {
  Section, SectionTitle, PSmall, Button, ButtonText, SectionBig, SectionSmall, ExpertItem, Divider,
  ContactText, ContactTextUL,
} from './homepage-styles';

/* eslint-disable react/prefer-stateless-function */
export default class Expertise extends React.PureComponent {
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
            <ButtonText>My Résumé</ButtonText>
          </Button>
        </SectionSmall>
        <SectionBig>
          <ExpertItem>- Web development</ExpertItem>
          <ExpertItem>- Hybrid Apps Development</ExpertItem>
          <ExpertItem>- Mobile Apps Development</ExpertItem>
          <ExpertItem>- HTML</ExpertItem>
          <ExpertItem>- CSS</ExpertItem>
          <ExpertItem>- Javascript</ExpertItem>
          <ExpertItem>- PHP</ExpertItem>
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
