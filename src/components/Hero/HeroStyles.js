import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
    place-items: center;
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    place-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const Span = styled.span`
  margin-top: 20px;
`;
