import type { GetServerSideProps, NextPage } from 'next'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Main from '../components/main/main'
import Pagination from '../components/pagination/pagination'
import Card from '../components/card/card'
import { Container } from '../styles/index.styled'
import { GetAnime } from '../interfaces'
import Head from 'next/head'

const Home: NextPage<GetAnime> = ({ anime }) => {
  return (
    <>
      <Head>
        <title>Coinable-test</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <Container>
        <Main>
          {anime.data.map((item) => {
            return (
              <Card
                id={item.mal_id}
                title={item.title}
                backgroundImage={item.images.jpg.image_url}
                key={item.mal_id}
              />
            )
          })}
        </Main>
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
  return {
    props: { anime },
  }
}

export default Home
