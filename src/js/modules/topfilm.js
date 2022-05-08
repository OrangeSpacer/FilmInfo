import { swiperMain } from "./swiperMain.js"


export const topFilm = async (url,API_KEY,key) => {
    async function topFilms(){
        const response = await fetch(url, {
            method : "GET",
            headers: {
                'X-API-KEY': `${API_KEY}`,
                'Content-Type': 'application/json',
            }
        })
        const results = await response.json()
        ShowMoves(results[key])
    }
    
    function ShowMoves(data) {
        const filmsElements = document.querySelector('.preview__wrapper')

        data.forEach(movie => {
            const movieElement = document.createElement('div')
            movieElement.classList.add('swiper-slide')
            movieElement.classList.add('preview__slide')
            movieElement.setAttribute('data-id',`${movie.filmId}`)
            movieElement.innerHTML =
            `
            <div class="preview__img films_info" data-id="${movie.filmId}">
                <img src="${movie.posterUrl}" alt="poster">
            </div>
            <div class="preview__slide-info">
                <h2 class="preview__title">
                    ${movie.nameRu}
                </h2>
            </div>
            `
            filmsElements.appendChild(movieElement)
        })
    }
    
    topFilms()
    swiperMain()
}