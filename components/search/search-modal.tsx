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
import handlingRequests from '../../utils/handlingRequests'

const SearchModal: React.FC<SearchProps> = ({ isOpen, setIsOpen }) => {
  const [anime, setAnime] = useState<DataProps>()
  const [letterAnimeName, setLetterAnimeName] = useState('')

  const debouncedValue = useDebounce<string>(letterAnimeName, 500)

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.currentTarget.value.toLowerCase()
    setLetterAnimeName(searchWord)
  }

  useEffect(() => {
    handlingRequests(letterAnimeName, setAnime)
  }, [debouncedValue])

  return isOpen ? (
    <ModalContainer>
      <SearchModalInput
        type="text"
        placeholder="Search..."
        onChange={handleFilter}
      />
      <ResultModal>
        <DaggerImageStyled onClick={() => setIsOpen(!isOpen)} />
        {letterAnimeName?.length &&
          anime?.data.map(
            ({ mal_id, images, title, type, episodes, status }) => {
              return (
                <Link href={`anime/${mal_id}`} key={mal_id}>
                  <AnimeResult>
                    <AnimeImage src={images?.jpg.image_url} alt="Anime image" />
                    <AnimeTextContainer>
                      <NameAnime>{title}</NameAnime>
                      <Description>
                        <span>{type}</span>
                        <Dot />
                        <span>{episodes}</span>
                        <Dot />
                        <span>{status}</span>
                      </Description>
                    </AnimeTextContainer>
                  </AnimeResult>
                </Link>
              )
            },
          )}
        {letterAnimeName.length !== 0 && anime?.data.length === 0 && (
          <NoResult>Oops there is nothing for you reqeust</NoResult>
        )}
      </ResultModal>
    </ModalContainer>
  ) : null
}

export default SearchModal
