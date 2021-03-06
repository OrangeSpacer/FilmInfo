import { modal } from "./modal.js"
import { raitingColor } from "./raiting.js"


export const filtersFilm = () => {
    let filmType = document.querySelector('.films__form_select')
    let filmMinRating = document.querySelector('.films__rating_min')
    let filmMaxRating = document.querySelector('.films__rating_max')
    let filmMinYear = document.querySelector('.films__year_min')
    let filmMaxYear = document.querySelector('.films__year_max')

    let submitBtn = document.querySelector('.btn__submit')
    let nextBtn = document.querySelectorAll('.btn__next')
    let backBtn = document.querySelectorAll('.btn__back')

    let count = 1
    

    function chnagePage(){
        nextBtn.forEach(item => {
            item.addEventListener('click', () => {
                count+=1
                chnageFilms(`https://kinopoiskapiunofficial.tech/api/v2.2/films?type=${filmType.value}&ratingFrom=${filmMinRating.value}&ratingTo=${filmMaxRating.value}&yearFrom=${filmMinYear.value}&yearTo=${filmMaxYear.value}&page=${count}`)
            })
        })
        backBtn.forEach(item => {
            item.addEventListener('click', () => {
                if (count>1){
                    count-=1
                    chnageFilms(`https://kinopoiskapiunofficial.tech/api/v2.2/films?type=${filmType.value}&ratingFrom=${filmMinRating.value}&ratingTo=${filmMaxRating.value}&yearFrom=${filmMinYear.value}&yearTo=${filmMaxYear.value}&page=${count}`)
                }
            })
        })

    }

    function viewBtn(type){
        nextBtn.forEach(itemNext => {
            itemNext.style.display = type
        })
        backBtn.forEach(itemBack => {
            itemBack.style.display = type
        })
    }

    const loadObject = {
        load : `<div class="load">Загрузка...</div>"`
    }
    
    async function chnageFilms(url){
        viewBtn('none')
        document.querySelector('.films__items').innerHTML = loadObject.load 
        const response = await fetch(url,{
            method : "GET",
            headers: {
                'X-API-KEY': `8c983825-227a-4a33-a9b9-3279f39a0204`,
                'Content-Type': 'application/json',
            }
        })
        const results = await response.json()
        showFiltersMovies(results)
        modal()
    }


    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        chnageFilms(`https://kinopoiskapiunofficial.tech/api/v2.2/films?type=${filmType.value}&ratingFrom=${filmMinRating.value}&ratingTo=${filmMaxRating.value}&yearFrom=${filmMinYear.value}&yearTo=${filmMaxYear.value}&page=1`)
        count = 1
    })

    function showFiltersMovies(item){
        let elementsBlock = document.querySelector('.films__items')
        viewBtn('block')
        elementsBlock.innerHTML = '';
        item.items.forEach(item => {
            let elementsMovies = document.createElement('div')
            elementsMovies.classList.add('films__item', 'films_info')
            elementsMovies.setAttribute('data-id',`${item.kinopoiskId}`)
            elementsMovies.innerHTML =
            `
            <img src="${item.posterUrlPreview}" alt="img">
            <div class="films__title">
                ${item.nameRu}
            </div>
            <div class="films__rating">
                ${item.ratingKinopoisk}
            </div>
            `
            elementsBlock.appendChild(elementsMovies)
        })
        raitingColor()
    }

    chnageFilms('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&ratingFrom=&ratingTo=&yearFrom=&yearTo=&page=1')
    chnagePage()
}