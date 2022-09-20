import Link from 'next/link'
import { NameAnime, PostsContainer } from './card-styled'
import { CardProps } from '../../interfaces/card'

const Card: React.FC<CardProps> = ({ id, title, backgroundImage }) => {
  return (
    <Link href={`anime/${id}`}>
      <PostsContainer $backgroundImage={backgroundImage}>
        <NameAnime>{title}</NameAnime>
      </PostsContainer>
    </Link>
  )
}

export default Card
