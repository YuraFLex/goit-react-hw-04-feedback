import styled from "styled-components";

export const NotificationTitle = styled.h3`
  display: inline-flex;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.xl}px;
  margin-top: ${(p) => p.theme.space[0]}px;
`;

export const Icon = styled.span`
  display: inline-flex;
  margin-left: ${(p) => p.theme.space[3]}px;
`;
