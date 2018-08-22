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
            Born in Jakarta and raised in Cilegon, small city in very west of Java.
            A typical child who interested in game and computer things.
            Got my first computer at age of 14, I just feel myself into it.
          </P>
          <P>
            Graduated from high school, continue my study in Depok West Java.
            Majoring in IT I began to love web development,
            though I’m not among the best one but I really proud of my works.
            Finish my diploma, I continue to pursue my bachelor degree to Kuala Lumpur Malaysia.
            I know it’s only small college,
            but I also thinking about the experience I can get from study and living abroad.
          </P>
        </BioDiv>
        <BioDiv>
          <P>
            In between my study, I did my internship in small startup.
            That’s where I feel more advanced as a developer, to be hired by local startup.
            So much work to do, getting paid peanuts.
            That was one hell of an experience, makes me ready to get by real job.
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
      </Section>
    );
  }
}
