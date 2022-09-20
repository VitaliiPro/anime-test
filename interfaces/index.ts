export interface GetAnime {
  anime: {
    data: AnimeProps[]
    pagination: {
      current_page: number
      has_next_page: boolean
    }
  }
}

export interface AnimeProps {
  mal_id?: string
  url?: string
  title?: string
  images: {
    jpg: {
      image_url: 'string'
    }
  }
}
