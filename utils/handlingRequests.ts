const handlingRequests = (letterAnime: string, setAnime: any) => {
  fetch(`https://api.jikan.moe/v4/anime?limit=5&letter=${letterAnime}`)
    .then((res) => res.json())
    .then((json) => setAnime(json))
}

export default handlingRequests
