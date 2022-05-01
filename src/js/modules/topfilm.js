import { swiperMain } from "./swiperMain.js"

import { moneyFilm } from './requestMainFilm.js';

export const topFilm = async (url,API_KEY) => {
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
        results.films.forEach(item => {
            filmidArray.push(item.filmId)
        })

        console.log(results)
        
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
        console.log(resultfInfo)
        console.log(resultfInfo.countries.forEach(item => {
            console.log(item.country)
        }))
    }

    async function ShowMoves(data) {
        

        const filmsElements = document.querySelector('.preview__wrapper')

        console.log(data)

        const movieElement = document.createElement('div')
        movieElement.classList.add('swiper-slide')
        movieElement.classList.add('preview__slide')
        movieElement.innerHTML =
        `
        <div class="preview__img">
            <img src="${data.posterUrl}" alt="poster">
        </div>
        <div class="preview__slide-info">
            <h2 class="preview__title">
                ${data.nameRu}
            </h2>
            <div class="preview__descr">
                ${data.description}
            </div>
            <div class="preview__rating preview__info">
                Рейтинг по версии Kinopoisk: <b>${data.ratingKinopoisk}</b>
            </div>
            <div class="preview__year preview__info">
                Премьера в мире: ${data.year}
            </div>
            <div class="preview__country preview__info">
                Страна: ${data.countries[0].country}
            </div>
            <div class="preview__director preview__info" data-director="${data.kinopoiskId}">
                Режиссер: waiting
            </div>
            <div class="preview__actor preview__info" data-actor="${data.kinopoiskId}">
                Актеры: Элайджа Вуд (Фродо),Вигго Мортенсен(Aragorn),Вигго Мортенсен(Aragorn),Вигго Мортенсен(Aragorn),Вигго Мортенсен(Aragorn),Вигго Мортенсен(Aragorn)
            </div>
            <div class="preview__budget preview__info" data-budget='${data.kinopoiskId}'>
                Бюджет: waiting
            </div>
            <div class="preview__marketing preview__info" data-marketing='${data.kinopoiskId}'>
                Маркетинг: waiting
            </div>
            <div class="preview__rus preview__info" data-rus='${data.kinopoiskId}'>
                Сборы в России: waiting
            </div>
            <div class="preview__rus preview__info" data-usa='${data.kinopoiskId}'>
                Сборы в США : waiting
            </div>
            <div class="preview__world preview__info" data-world='${data.kinopoiskId}'>
                Сборы в мире: waiting
            </div>
        </div>
        `
        filmsElements.append(movieElement)
        swiperMain()
    }
    
    topFilms()
}