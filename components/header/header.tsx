import { useState } from "react";
import Link from "next/link";
import SearchModal from "../search/search-modal";
import {
  Container,
  SearchContainer,
  SearchInput,
  Title,
  Wrapper,
} from "./header.styled";
import CurrentDate from "../date/current-date";

const Header: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Link href={"/"}>
          <Title>Anime</Title>
        </Link>
        <SearchContainer onClick={() => setIsSearch(!isSearch)}>
          <SearchInput type="text" placeholder="Search..."></SearchInput>
        </SearchContainer>
        <SearchModal isOpen={isSearch} setIsOpen={setIsSearch} />
        <CurrentDate />
      </Wrapper>
    </Container>
  );
};

export default Header;
