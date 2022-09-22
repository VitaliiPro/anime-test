import {
  Rating,
  RatingTitle,
  RatingNumber,
  Score,
  Rank,
  Popularity,
} from './rating-results.styled'

interface RatingResultsProps {
  score?: string
  rank?: string
  popularity?: string
}

const RatingResults: React.FC<RatingResultsProps> = ({
  score,
  rank,
  popularity,
}) => {
  return (
    <Rating>
      <Score>
        <RatingNumber>{score}</RatingNumber>
        <RatingTitle>Score</RatingTitle>
      </Score>
      <Rank>
        <RatingNumber>{rank}</RatingNumber>
        <RatingTitle>Rank</RatingTitle>
      </Rank>
      <Popularity>
        <RatingNumber>{popularity}</RatingNumber>
        <RatingTitle>Popularity</RatingTitle>
      </Popularity>
    </Rating>
  )
}

export default RatingResults
