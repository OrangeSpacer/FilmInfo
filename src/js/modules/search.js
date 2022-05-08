import { modal } from "./modal.js"
import { raitingColor } from "./raiting.js"

export const search = () => {
    let searchInput = document.querySelector('.header__input')
    
    const serachForm = document.querySelector('.header__form')

    async function search(url){
        const response = await fetch(url, {
            method : "GET",
            headers: {
                'X-API-KEY': `8c983825-227a-4a33-a9b9-3279f39a0204`,
                'Content-Type': 'application/json',
            }
        })
        const results = await response.json()
        showSearchMovies(results)
        modal()
    }

    function showSearchMovies(data){
        
        let bodyElements = document.querySelector('.main')
        bodyElements.innerHTML=''
        let container = document.createElement('div')
        container.classList.add('container')
        let elementsBlock = document.createElement('div')
        elementsBlock.classList.add('films__items')
        container.append(elementsBlock)
        bodyElements.append(container)

        data.films.forEach(item => {
            const movieItem = document.createElement('div')
            movieItem.classList.add('films__item','films_info')
            movieItem.setAttribute('data-id',`${item.filmId}`)
            movieItem.innerHTML =
            `
            <img src="${item.posterUrlPreview}" alt="img">
            <div class="films__title">
                ${item.nameRu}
            </div>
            <div class="films__rating">
                ${item.rating}
            </div>
            `
            elementsBlock.appendChild(movieItem)
            raitingColor()
        })
    }

    serachForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const apiSearchUrl = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchInput.value}`
        if(searchInput.value){
            search(apiSearchUrl)

            searchInput.value=''
        }
    })

}