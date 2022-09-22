import styled from 'styled-components'
import BREAKPOINTS from '../../constants/breakpoints'

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid var(--border-color);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 15rem;
  margin: 0 auto;
  max-width: 1400px;

  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    padding: 0 10rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding: 0 5rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    padding: 0 0.8rem;
  }
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.875rem;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const SearchInput = styled.input`
  border-radius: 1.8rem;
  border: none;
  background-color: var(--primary);
  color: black;
  height: 2.18rem;
  width: 22.5rem;
  padding: 1rem;
  margin: 0 1rem;

  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    width: 20rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
`
