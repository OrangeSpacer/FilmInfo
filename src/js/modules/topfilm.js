export const topFilm = (url,API_KEY) => {
    async function topFilms(){
        const response = await fetch(url, {
            method : "GET",
            headers: {
                'X-API-KEY': `${API_KEY}`,
                'Content-Type': 'application/json',
            }
        })
        const results = await response.json()
        console.log(results)
    }
    topFilms()
}