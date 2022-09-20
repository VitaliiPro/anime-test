import { ChangeEvent, useState, useEffect } from 'react'
import Link from 'next/link'
import useDebounce from '../../hook/debounce-hook'
import {
  ModalContainer,
  SearchModalInput,
  ResultModal,
  AnimeResult,
  AnimeImage,
  AnimeTextContainer,
  NameAnime,
  Description,
  Dot,
  DaggerImageStyled,
  NoResult,
} from './search-modal.styled'
import { SearchProps, DataProps } from '../../interfaces/search-modal'

const SearchModal: React.FC<SearchProps> = ({ isOpen, setIsOpen }) => {
  const [anime, setAnime] = useState<DataProps>()
  const [filteredAnime, setFilteredAnime] = useState('')

  const debouncedValue = useDebounce<string>(filteredAnime, 500)

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value.toLowerCase()
    setFilteredAnime(searchWord)
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?limit=5&letter=${filteredAnime}`)
      .then((res) => res.json())
      .then((json) => setAnime(json))
  }, [debouncedValue])

  if (isOpen) {
    return (
      <ModalContainer>
        <SearchModalInput
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
        />
        <ResultModal>
          <DaggerImageStyled onClick={() => setIsOpen(!isOpen)} />
          {filteredAnime && filteredAnime.length != 0 && (
            <>
              {anime?.data.map((item) => {
                return (
                  <Link href={`anime/${item.mal_id}`} key={item.mal_id}>
                    <AnimeResult>
                      <AnimeImage
                        src={item.images.jpg.image_url}
                        alt="Anime image"
                      />
                      <AnimeTextContainer>
                        <NameAnime>{item.title}</NameAnime>
                        <Description>
                          <span>{item.type}</span>
                          <Dot />
                          <span>{item.episodes}</span>
                          <Dot />
                          <span>{item.status}</span>
                        </Description>
                      </AnimeTextContainer>
                    </AnimeResult>
                  </Link>
                )
              })}
            </>
          )}
          {filteredAnime.length !== 0 && anime?.data.length === 0 && (
            <NoResult>Oops there is nothing for you reqeust</NoResult>
          )}
        </ResultModal>
      </ModalContainer>
    )
  } else {
    return null
  }
}

export default SearchModal
