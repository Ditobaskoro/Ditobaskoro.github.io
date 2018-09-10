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
  width: 40vw;
  display: inline-block;
`;
export const SectionSmall = styled.div`
  width: 25vw;
  display: inline-block;
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
`;
export const BottomText = styled.p`
  font-family: LatoLight;
  text-align: left;
  font-size: calc(0.5vw + 0.5vh + .5vmin);
  margin-bottom: 5vh;
`;
export const ExpertItem = styled.h1`
  color: #222;
  font-size: calc(1vw + .5vh + .5vmin);
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
