import type { GetServerSideProps, NextPage } from 'next'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Pagination from '../components/pagination/pagination'
import Card from '../components/card/card'
import { Container, MainContainer } from '../styles/index.styled'
import { HomePageProps } from '../interfaces'
import Head from 'next/head'

const HomePage: NextPage<HomePageProps> = ({ anime }) => {
  return (
    <>
      <Head>
        <title>Coinable-test</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <Container>
        <MainContainer>
          {anime.data.map(({ mal_id, title, images }) => (
            <Card
              id={mal_id}
              title={title}
              backgroundImage={images.jpg.image_url}
              key={mal_id}
            />
          ))}
        </MainContainer>
        <Pagination
          currentPage={anime.pagination.current_page}
          hasNextPage={anime.pagination.has_next_page}
        />
      </Container>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentPage = context.query.page || 1
  const res = await fetch(
    `https://api.jikan.moe/v4/anime?limit=9&page=${currentPage}`,
  )
  const anime = await res.json()

  if (!anime.data.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: { anime },
  }
}

export default HomePage
