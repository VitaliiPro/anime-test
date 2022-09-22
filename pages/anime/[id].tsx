import Link from 'next/link'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import {
  Container,
  TopContainer,
  StyledArrow,
  LinkToPreviousPage,
  InfoContainer,
  AnimeImage,
  Info,
  InfoTitle,
  MarkIcon,
  InfoTitleContainer,
  InfoContext,
  Description,
  DescriptionText,
} from '../../styles/anime.styled'
import { DataProps } from '../../interfaces/anime'
import getData from '../../utils/getData'
import InfoRow from '../../components/info-row/info-row'
import RatingResults from '../../components/rating-results/rating-results'

const AnimeDetail: NextPage<DataProps> = ({ data }) => {
  return (
    <Container>
      <TopContainer>
        <StyledArrow />
        <Link href={'/'}>
          <LinkToPreviousPage>Go back to Main</LinkToPreviousPage>
        </Link>
      </TopContainer>
      <InfoContainer>
        <AnimeImage src={data.images.jpg.large_image_url} alt="Anime image" />
        <Info>
          <InfoTitleContainer>
            <InfoTitle>{data.title}</InfoTitle>
            <MarkIcon alt="Mark icon" />
          </InfoTitleContainer>
          <InfoContext>
            {data.type && <InfoRow label="Type" value={data.type} />}
            {data.source && <InfoRow label="Source" value={data.source} />}
            {data.episodes && (
              <InfoRow label="Episodes" value={data.episodes} />
            )}
            {data.status && <InfoRow label="Status" value={data.status} />}
          </InfoContext>
          <RatingResults
            score={data.score}
            rank={data.rank}
            popularity={data.popularity}
          />
        </Info>
      </InfoContainer>
      {data.background && (
        <Description>
          <h3>Description </h3>
          <DescriptionText>{data.background}</DescriptionText>
        </Description>
      )}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await getData(`anime/${query.id}`)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

export default AnimeDetail
