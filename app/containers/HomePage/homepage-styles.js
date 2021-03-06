import styled from 'styled-components';

export const Div = styled.div`
  margin-left: 10vw;
  display: table;
`;
export const MainSection = styled.div`
  margin-top: 55vh;
  text-align: left;
`;
export const H1 = styled.h1`
  display: inline;
  color: #222;
  font-size: calc(1.5vw + 1vh + .5vmin);
  font-family: LatoThin;
`;
export const H1Bold = H1.extend`
  font-family: Lato;
`;
export const IconBar = styled.div`
  margin-top: 1vw;
`;
export const Icon = styled.li`
  display: inline;
  list-style-type: none;
  margin-right: 1.2vw;
  font-size: calc(1.5vw + 1vh + 1.5vmin);
`;
export const Underline = styled.div`
  width: 10vw;
  margin-top:20vh;
  border-style: solid;
  border-width: 1px;
  border-color: #999;
`;
export const Anchor = styled.a`
  color: #999;
  &:hover {
    color: #4C5870;
  }
`;
export const Section = styled.div`
  margin-top: 20vh;
  margin-bottom: 10vh;
  text-align: left;
  display: inline-flex;
`;
export const SectionBlock = styled.div`
  margin-top: 20vh;
  margin-bottom: 10vh;
  text-align: left;
  display: block;
`;
export const BioDiv = styled.div`
  width: 30vw;
  margin-right: 10vw;
  display: inline-block;
`;
export const SectionTitle = styled.h1`
  font-family: LatoHeavy;
  font-size: calc(0.8vw + 1vh + .5vmin);
  font-weight: 900;
  letter-spacing: 0.2vw;
`;
export const PSmall = styled.p`
  font-family: Lato;
  text-align: left;
  width: 18vw;
  font-size: calc(0.4vw + 0.4vh + .5vmin);
  margin-bottom: 5vh;
`;
export const P = styled.p`
  font-family: LatoLight;
  text-align: left;
  width: 35vw;
  font-size: calc(0.7vw + 0.7vh + .5vmin);
`;
export const Button = styled.button`
  width: 17vw;
  height: 5vw;
  border: 1px solid #222;
`;
export const ButtonText = styled.p`
  font-family: Lato;
  text-align: center;
  width: 100%;
  font-size: calc(0.4vw + 0.4vh + .4vmin);
`;
export const SectionBig = styled.div`
  width: 35vw;
`;
export const SectionSmall = styled.div`
  width: 25vw;
`;
export const SectionBottom = styled.div`
  margin-top: 20vh;
  text-align: left;
`;
export const BottomLine = styled.p`
  margin-bottom: calc(1vw + 1vh + 1vmin);
  border-style: solid;
  border-width: 0.6px;
  border-color: #aaa;
  margin-right: 5vw;
`;
export const BottomText = styled.p`
  font-family: LatoLight;
  text-align: left;
  font-size: calc(0.5vw + 0.5vh + .5vmin);
  margin-bottom: 5vh;
`;
export const ExpertItem = styled.h1`
  color: #222;
  font-size: calc(.9vw + .5vh + .5vmin);
  font-family: LatoThin;
`;
export const ContactText = styled.h1`
  display: inline;
  color: #222;
  font-size: calc(1.5vw + 1vh + .5vmin);
  font-family: LatoThin;
`;
export const ContactTextUL = styled.a`
  display: inline;
  text-decoration: none;
  color: #222;
  font-size: calc(1.5vw + 1vh + .5vmin);
  font-family: Lato;
  padding-bottom: 5px;
  border-bottom: .8px solid #222;
`;
export const Divider = Underline.extend`
  margin-bottom: 5vh;
`;
export const WorkList = styled.div`
  width:75vw;
  display: block;
  margin-top: 2em;
`;
export const WorkItemLeft = styled.div`
  display: block;
  text-align: left;
  margin-top: 3em;
`;
export const WorkItemRight = styled.div`
  display: block;
  text-align: right;
  margin-top: 3em;
`;
export const WorkItemTitle = styled.h1`
  font-family: Lato;
  font-size: calc(0.8vw + 1vh + .5vmin);
  font-weight: 600;
  letter-spacing: 0.2vw;
`;
export const WorkItemDescRight = styled.div`
  font-family: LatoLight;
  font-size: calc(0.7vw + 0.7vh + .5vmin);
  padding-left: 30%;
  text-align: justify;
  text-justify: inter-word;
`;
export const WorkItemDescLeft = styled.div`
  font-family: LatoLight;
  font-size: calc(0.7vw + 0.7vh + .5vmin);
  padding-right: 30%;
  text-align: justify;
  text-justify: inter-word;
`;
export const WorkItemLink = styled.a`
  text-decoration: none;
  color: #222;
  font-size: calc(0.7vw + 0.7vh + .5vmin);
  font-family: Lato;
  padding-bottom: 5px;
  border-bottom: .8px solid #222;
`;
export const WorkItemStack = styled.p`
  font-family: LatoLight;
  width: 35vw;
  color: #555;
  font-size: calc(0.7vw + 0.7vh + .5vmin);
  width:100%;
  margin-top: 1em;
  margin-bottom: 0;
`;
export const Emoji = styled.img`
  width: calc(2.5vw + 1vh + .5vmin);
  height: calc(3vw + 1vh + .5vmin);
  margin-left: 0.75vw;
`;
