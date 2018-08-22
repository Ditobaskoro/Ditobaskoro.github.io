import React from 'react';
import {
  Section, SectionTitle, PSmall, Button, ButtonText,
} from './homepage-styles';

/* eslint-disable react/prefer-stateless-function */
export default class Expertise extends React.PureComponent {
  render() {
    return (
      <Section>
        <SectionTitle>EXPERTISE</SectionTitle>
        <PSmall>
          Four years of experience in software development.
          Working on web app and hybrid app projects.
        </PSmall>
        <Button>
          <ButtonText>My Résumé</ButtonText>
        </Button>
      </Section>
    );
  }
}
