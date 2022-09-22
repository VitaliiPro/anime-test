import styled from 'styled-components'
import BREAKPOINTS from '../../constants/breakpoints'

export const DateText = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(--date-color);

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`

export const DateTextShort = styled(DateText)`
  display: none;

  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    display: block;
  }
`
