import styled from 'styled-components';

export const Div = styled.div`
  margin-left: 10vw;
  display: table;
`;
export const MainTitle = styled.div`
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
  margin-right: 1vw;
  font-size: calc(1vw + 1vh + .5vmin);
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
export const Bio = styled.div`
  margin-top: 8vh;
  text-align: left;
`;
export const Paragraph = styled.p`
  font-family: Lato;
  text-align: left;
  width: 25vw;
`;
export const BioTitle = styled.h1`
  font-family: LatoHeavy;
  font-size: calc(0.8vw + 1vh + .5vmin);
  font-weight: 900;
  letter-spacing: 0.2vw;
`;
