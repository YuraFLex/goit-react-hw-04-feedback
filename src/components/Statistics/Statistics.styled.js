import styled from "styled-components";

const setBg = ({ theme, variant }) => {
  switch (variant) {
    case "good":
      return theme.colors.good;
    case "neutral":
      return theme.colors.neutral;
    case "bad":
      return theme.colors.bad;
    case "total":
      return theme.colors.total;
    case "positive":
      return theme.colors.positive;
    default:
      return theme.colors.white;
  }
};
const setBorderColor = ({ theme, border }) => {
  switch (border) {
    case "good":
      return theme.colors.borderGood;
    case "neutral":
      return theme.colors.borderNeutral;
    case "bad":
      return theme.colors.borderBad;
    case "total":
      return theme.colors.borderTotal;
    case "positive":
      return theme.colors.borderPositive;
    default:
      return theme.colors.text;
  }
};

export const StatBoard = styled.div`
  width: 450px;
  display: flex;
  padding: ${(p) => p.theme.space[5]}px;
  border-radius: ${(p) => p.theme.radii.normal};
  flex-direction: column;
`;

export const StatTitle = styled.h2`
  display: inline-flex;
  font-family: ${(p) => p.theme.fonts.body};
  justify-content: center;
  margin-top: ${(p) => p.theme.space[0]}px;
  margin-bottom: ${(p) => p.theme.space[4]}px;
`;

export const StatArea = styled.span`
  display: inline-flex;
  justify-content: space-between;
  padding-top: ${(p) => p.theme.space[4]}px;
  padding-bottom: ${(p) => p.theme.space[4]}px;
  padding-left: ${(p) => p.theme.space[5]}px;
  padding-right: ${(p) => p.theme.space[5]}px;
  margin-top: ${(p) => p.theme.space[0]}px;
  margin-bottom: ${(p) => p.theme.space[3]}px;
  background-color: ${setBg};
  border: ${(p) => p.theme.borders.normal};
  border-radius: ${(p) => p.theme.radii.normal};
  border-color: ${setBorderColor};
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);

  :last-child {
    margin-bottom: ${(p) => p.theme.space[0]}px;
  }
`;

export const StatValue = styled.span`
  display: inline-flex;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: ${(p) => p.theme.fonts.monospace};
  color: ${(p) => p.theme.colors.text};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  /* text-shadow: 1px 1px 3px #333333; */
`;
