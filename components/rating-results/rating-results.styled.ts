import styled, { css } from 'styled-components'

export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
`

const ratingContainer = css`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.875rem;
`

export const Score = styled.div`
  ${ratingContainer}
`
export const Rank = styled.div`
  ${ratingContainer}
`
export const Popularity = styled.div`
  ${ratingContainer}
`

export const RatingTitle = styled.span`
  color: var(--primary);
`

export const RatingNumber = styled.span`
  color: var(--font-color);
`
