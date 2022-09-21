import styled from 'styled-components'
import DaggerImage from '../../public/Dagger.svg'
import BREAKPOINTS from '../../constants/breakpoints'
import { keyframes } from 'styled-components'

const animation = keyframes`
  0% { padding-top: 0% }
  20% { padding-top: 3% }
  40% { padding-top: 6% }
  60% { padding-top: 9% }
  80% { padding-top: 12% }
  100% { padding-top: 15%}
 `

export const ModalContainer = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  color: red;
  padding-top: 10%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  animation: ${animation} 0.6s ease-out forwards;

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    padding: 15% 5% 0 5%;
  }
`

export const SearchModalInput = styled.input`
  background-color: var(--bg-color);
  border-radius: 2rem;
  border: none;
  color: black;
  height: 4rem;
  width: 38.625rem;
  padding: 1rem 2rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
`

export const ResultModal = styled.div`
  margin-top: 1.25rem;
  width: 38.625rem;
  height: auto;
  background-color: var(--bg-color);
  border-radius: 32px;
  position: relative;

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
`

export const AnimeResult = styled.div`
  height: auto;
  display: flex;
  margin: 1.75rem 1.75rem;
  cursor: pointer;
  transform: all 300ms ease-in-out;
  transition-duration: 0.1s;

  &:hover {
    box-shadow: 0px 5px 20px var(--secondary);
    margin: 1.8rem 1.8rem;
    border-radius: 0.3125rem;
    background-color: var(--primary);
  }
`

export const AnimeImage = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.3125rem;
  margin-right: 1rem;
`

export const AnimeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NameAnime = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.3125rem;
  margin-top: 0.2rem;
  color: var(--font-color);

  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 10rem;
  }
`

export const Description = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  color: var(--search-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`

export const Dot = styled.span`
  height: 0.125rem;
  width: 0.125rem;
  background-color: var(--search-color);
  border-radius: 50%;
  display: inline-block;
  margin: 0 0.375rem;
`

export const DaggerImageStyled = styled(DaggerImage)`
  position: absolute;
  right: -0.7rem;
  top: -6rem;
  cursor: pointer;
  transform: all 300ms ease-in-out;
  transition-duration: 0.1s;

  &:hover {
    box-shadow: 0px 5px 20px var(--bg-color);
    border-radius: 0.3125rem;
  }
`

export const NoResult = styled.p`
  color: var(--font-color);
  width: 100%;
  height: auto;
  margin: 10% 0;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`
