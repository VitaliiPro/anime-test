import { useRouter } from 'next/router'
import {
  Button,
  Container,
  InnerContainer,
  PageNumber,
  RightArrowStyled,
  LeftArrowStyled,
} from './pagination.styled'
import { PaginationProps } from '../../interfaces/pagination'

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  hasNextPage,
}) => {
  const router = useRouter()

  const changePage = (isNext: boolean) => {
    const newPage = isNext ? currentPage + 1 : currentPage - 1
    router.push(`/?page=${newPage}`).catch((e) => console.log(e))
  }

  return (
    <Container>
      <InnerContainer>
        <Button onClick={() => changePage(false)} disabled={currentPage === 1}>
          <LeftArrowStyled alt="Left arrow image" />
        </Button>
        <PageNumber>
          <span>{currentPage}</span>
        </PageNumber>
        <Button onClick={() => changePage(true)} disabled={!hasNextPage}>
          <RightArrowStyled alt="Right arrow image" />
        </Button>
      </InnerContainer>
    </Container>
  )
}

export default Pagination
