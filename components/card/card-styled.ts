import styled from "styled-components";
import { css } from "styled-components";
import BREAKPOINTS from "../../constants/breakpoints";

export const PostsContainer = styled.div<{ $backgroundImage?: string }>`
  ${({ $backgroundImage }) => css`
    background: linear-gradient(
          180deg,
          #d9d9d9 0%,
          rgba(0, 0, 0, 0) 0.01%,
          rgba(0, 0, 0, 0.69) 100%
        )
        no-repeat,
      url(${$backgroundImage}) no-repeat center center;
    background-size: cover;
    position: relative;
    overflow: hidden;
  `}
  width: 12.5rem;
  height: 18.75rem;
  margin: 1.5rem;
  border-radius: 0.635rem;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  transform: all 300ms ease-in-out;
  transition-duration: 0.2s;

  &:hover {
    box-shadow: 0px 10px 40px #666666;
  }

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    height: 31.625rem;
    margin: 1rem 0;
  }
`;

export const NameAnime = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  padding: 0.75rem;

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
  }
`;
