import { styled } from "styled-components";

export const Heading1 = styled.h1`
  color: yellow;
  font-style: italic;
  font-weight: 900;
  font-size: 30px;
  text-decoration: dashed;
  text-transform: capitalize;
  text-shadow: 12px 2px 12px blue;
  border: 2px solid blue;
`;
export const Heading2 = styled(Heading1)`
  color: green;
`;
