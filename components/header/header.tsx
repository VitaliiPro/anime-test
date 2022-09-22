import { useState } from 'react'
import Link from 'next/link'
import SearchModal from '../search/search-modal'
import {
  Container,
  SearchContainer,
  SearchInput,
  Title,
  Wrapper,
} from './header.styled'
import CurrentDate from '../date/current-date'

const Header: React.FC = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false)

  return (
    <Container>
      <Wrapper>
        <Link href={'/'}>
          <Title>Anime</Title>
        </Link>
        <SearchContainer onClick={() => setSearchIsOpen(!searchIsOpen)}>
          <SearchInput type="text" placeholder="Search..."></SearchInput>
        </SearchContainer>
        <SearchModal isOpen={searchIsOpen} setIsOpen={setSearchIsOpen} />
        <CurrentDate />
      </Wrapper>
    </Container>
  )
}

export default Header
