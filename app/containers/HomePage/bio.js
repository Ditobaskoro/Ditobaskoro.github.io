import React from 'react';
import {
  Section, SectionTitle, PSmall, P, BioDiv,
} from './homepage-styles';
// import Logo from '../../images/Icon.png';

export default class Bio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Section>
        <BioDiv>
          <div>
            {/* <img
              src={Logo}
              alt="logo"
              style={{
                width: '20vw', height: '20vw', opacity: '0.2', paddingBottom: '1em',
              }}
            /> */}
          </div>
          <SectionTitle>BIOGRAPHY</SectionTitle>
          <PSmall>
            Experienced software engineer/ developer, mostly wrote in javascript.
            Has done various projects both web and hybrid apps. Now focusing on
            Frontend development.
          </PSmall>
          <P>
            Born in Jakarta and raised in Cilegon, small city in Banten province Indonesia.
            I have spent my childhood in the beginning of internet era.
            Starting to get familiar to the computer, and found it interesting.
          </P>
          <P>
            Graduated from high school, continued my study in Politeknik Negeri Jakarta.
            Majoring in IT and began to start web development.
            After finished my diploma,
            then I got a chance to pursue my bachelor degree to Kuala Lumpur Malaysia.
            I was thinking forward to get the experiences from study and living abroad.
          </P>
        </BioDiv>
        <BioDiv>
          <P>
            In between my study, I did my internship in small startup.
            {/* That’s the first time I get into the real job, and I feel more advanced
            as a developer. */}
            From there I learnt so much technology by doing the real projects.
            {/* It was good experience,
            and open my eyes that the real project are
            different from the theory we learnt from school. */}
          </P>
          <P>
            After I finish my degree and land my first job,
            that’s where I introduced by ”javascript”
            and all of its technology.
            And starting to get deeper with this programming
            language that lead me into today.
            Become a software developer, I realized that I need to constantly
            learning and keep up because the technology are moving fast.
          </P>
          <P>
            I’ve lived and working in Kuala Lumpur to work in a startup for 4 years,
            from there I can explore something new in technology.
            Starting from web development, I also do hybrid apps project
            for both iOS and Android.
          </P>
          <P>
            In early 2019 I moved back to Jakarta, worked as a Frontend,
            and from then I start to focus on Frontend web development.
          </P>
        </BioDiv>
      </Section>
    );
  }
}
