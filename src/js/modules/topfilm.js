import { swiperMain } from "./swiperMain.js"

export const topFilm = (url,API_KEY) => {
    let filmidArray = []
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
        results.films.forEach(item => {
            filmidArray.push(item.filmId)
        })
        
        for(let i = 0;i<6;i++){
            filmInfo(filmidArray[i])
        }
    }
    


    async function filmInfo(item){
        const responseInfo = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${item}`,{
            method : "GET",
            headers: {
                'X-API-KEY': '8c983825-227a-4a33-a9b9-3279f39a0204',
                'Content-Type': 'application/json',
            }
        })
        const resultfInfo = await responseInfo.json()
        ShowMoves(resultfInfo)
        swiperMain()
    }

    async function ShowMoves(data) {
        const filmsElements = document.querySelector('.preview__wrapper')

        console.log(data)

        const movieElement = document.createElement('div')
        movieElement.classList.add('swiper-slide')
        movieElement.innerHTML =
        `
        <div class="preview__img">
            <img src="${data.coverUrl}" alt="">
        </div>
        <h2 class="preview__title">
            ${data.nameRu}
        </h2>
        <div class="preview__descr">
            ${data.shortDescription}
        </div>
        `
        filmsElements.append(movieElement)
    }
    
    topFilms()
    // getSwiper()
}