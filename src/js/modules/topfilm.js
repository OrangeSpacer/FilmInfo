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
        console.log(results)
    }
    
    // async function filmInfo(item){
    //     const responseInfo = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${item}`,{
    //         method : "GET",
    //         headers: {
    //             'X-API-KEY': '8c983825-227a-4a33-a9b9-3279f39a0204',
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     const resultfInfo = await responseInfo.json()
    //     ShowMoves(resultfInfo)
    //     console.log(resultfInfo)
    //     console.log(resultfInfo.countries.forEach(item => {
    //         console.log(item.country)
    //     }))
    // }

    function ShowMoves(data) {
        const filmsElements = document.querySelector('.preview__wrapper')

        console.log(data)

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