import styled from 'styled-components'
import Image from '../../public/up_arrow.svg'
import BREAKPOINTS from '../../constants/breakpoints'

export const Container = styled.div`
  height: 7.8125rem;
  width: 100%;
  border-top: 1px solid var(--border-color);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;

  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 10rem;
  }
`

export const Name = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.125rem;
  color: var(--font-color);
`

export const Description = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--font-color-primary);
  margin: 0;

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    max-width: 10rem;
  }
`

export const Arrow = styled(Image)`
  width: 2rem;
  height: auto;
  cursor: pointer;
`
