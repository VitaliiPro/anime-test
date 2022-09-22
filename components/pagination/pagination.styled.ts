import styled from 'styled-components'
import RightArrow from '../../public/Right_arrow.svg'
import LeftArrow from '../../public/Left_arrow.svg'

export const Container = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;
`

export const Button = styled.button`
  height: 3rem;
  width: 3rem;
  border: 1px solid var(--primary);
  border-radius: 0.3125rem;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 20px var(--secondary);
    width: 3.1rem;
    height: 3.1rem;
  }
`

export const PageNumber = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.25rem;
`

export const RightArrowStyled = styled(RightArrow)`
  color: var(--secondary);
`

export const LeftArrowStyled = styled(LeftArrow)`
  color: var(--secondary);
`
