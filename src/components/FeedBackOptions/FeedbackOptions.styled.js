import styled from "styled-components";

export const FeedBackBoard = styled.div`
  padding: ${(p) => p.theme.space[4]}px;
`;

export const Title = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.l};
  font-family: ${(p) => p.theme.fonts.body};
  margin-top: ${(p) => p.theme.space[0]}px;
  margin-bottom: ${(p) => p.theme.space[5]}px;
`;

export const FeedBackList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: ${(p) => p.theme.space[4]}px;
  margin: ${(p) => p.theme.space[0]}px;
  padding: ${(p) => p.theme.space[0]}px;
`;

export const Button = styled.button`
  display: inline-flex;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.white};
  text-transform: uppercase;
  padding-left: ${(p) => p.theme.space[5]}px;
  padding-right: ${(p) => p.theme.space[5]}px;
  padding-top: ${(p) => p.theme.space[3]}px;
  padding-bottom: ${(p) => p.theme.space[3]}px;
  border: ${(p) => p.theme.borders.none};
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.colors.primary};
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  transition: background-color 250ms linear, box-shadow 250ms linear;

  :hover,
  :focus {
    background-color: ${(p) => p.theme.colors.secondary};
    box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
  }
`;
