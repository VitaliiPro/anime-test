import styled from "styled-components";
import BREAKPOINTS from "../constants/breakpoints";

export const Container = styled.div`
  padding: 0 15rem;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;

  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    padding: 0 10rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding: 0 5rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    padding: 0 0.8rem;
  }
`;
