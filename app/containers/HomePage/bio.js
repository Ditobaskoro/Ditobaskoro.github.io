import React from 'react';
import {
  Section, SectionTitle, PSmall, P, BioDiv,
} from './homepage-styles';

export default class Bio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Section>
        <BioDiv>
          <SectionTitle>BIOGRAPHY</SectionTitle>
          <PSmall>
            Experienced software engineer/ developer, mostly wrote in javascript.
            Has done various projects both website and hybrid apps for iOS and Android.
          </PSmall>
          <P>
            Born in Jakarta and raised in Cilegon, small city in west of Java.
            I have spent my childhood in the beginning of internet era.
            Starting to get familiar to the computer, and found it interesting.
          </P>
          <P>
            Graduated from high school, continue my study in Politeknik Negeri Jakarta.
            Majoring in IT and began to love web development,
            though I was not among the best but I really proud of my works.
            Finish my diploma,
            then I got a chance to pursue my bachelor degree to Kuala Lumpur Malaysia.
            I was thinking forward to get the experiences from study and living abroad.
          </P>
        </BioDiv>
        <BioDiv>
          <P>
            In between my study, I did my internship in small startup.
            That’s the first time I get into the real job, and I feel more advanced as a developer.
            I’ve learn so much technology by doing the real project.
            It was good experience,
            and open my eyes that the real project are
            different from the theory we learn from school.
          </P>
          <P>
            After I land my first job, that’s where I introduced by ”javascript”
            and all of its technology.
            And starting to get deeper with this programming
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
      </Section>
    );
  }
}
