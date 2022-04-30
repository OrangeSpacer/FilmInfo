export const requsetMainFilm = (url,API_KEY) => {
    async function mainFilm(){
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
    mainFilm
}