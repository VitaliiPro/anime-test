import Link from 'next/link'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import {
  Container,
  TopContainer,
  ArrowStyled,
  LinkToHome,
  InfoContainer,
  AnimeImage,
  Info,
  InfoTitle,
  MarkIcon,
  InfoTitleContainer,
  InfoContext,
  TitleContext,
  TypeContainer,
  Line,
  TypeDescription,
  Rating,
  RatingResults,
  RatingNumber,
  RatingTitle,
  Description,
  DescriptionText,
} from '../../styles/anime.styled'
import { DataProps } from '../../interfaces/anime'

const AnimeDetail: NextPage<DataProps> = ({ data }) => {
  return (
    <Container>
      <TopContainer>
        <ArrowStyled />
        <Link href={'/'}>
          <LinkToHome>Go back to Main</LinkToHome>
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
            <TypeContainer>
              <TitleContext>Type</TitleContext>
              <Line />
              <TypeDescription>{data.type}</TypeDescription>
            </TypeContainer>
            <TypeContainer>
              <TitleContext>Source</TitleContext>
              <Line />
              <TypeDescription>{data.source}</TypeDescription>
            </TypeContainer>
            <TypeContainer>
              <TitleContext>Episodes</TitleContext>
              <Line />
              <TypeDescription>{data.episodes}</TypeDescription>
            </TypeContainer>
            <TypeContainer>
              <TitleContext>Status</TitleContext>
              <Line />
              <TypeDescription>{data.status}</TypeDescription>
            </TypeContainer>
          </InfoContext>
          <Rating>
            <RatingResults>
              <RatingNumber>{data.score}</RatingNumber>
              <RatingTitle>Score</RatingTitle>
            </RatingResults>
            <RatingResults>
              <RatingNumber>{data.rank}</RatingNumber>
              <RatingTitle>Rank</RatingTitle>
            </RatingResults>
            <RatingResults>
              <RatingNumber>{data.popularity}</RatingNumber>
              <RatingTitle>Popularity</RatingTitle>
            </RatingResults>
          </Rating>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentId = context.query.id
  const res = await fetch(`https://api.jikan.moe/v4/anime/${currentId}`)
  const { data } = await res.json()

  return {
    props: { data },
  }
}

export default AnimeDetail
