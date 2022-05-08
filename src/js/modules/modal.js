import { actorsFilm } from "./actorsMain.js"
import { cashFilms } from "./cash.js"
import { videoInfo } from "./video.js"


export const modal = () => {
    const modal = document.querySelector('.modal')
    let filmsItem = document.querySelectorAll('.films_info')

    let modalItem = document.querySelector('.modal')

    async function modalInfo(id){
        const response = await fetch (`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            method : "GET",
            headers: {
                'X-API-KEY': `8c983825-227a-4a33-a9b9-3279f39a0204`,
                'Content-Type': 'application/json',
            }
        })
        const results = await response.json()
        console.log(results)
        showModal(results)
        console.log(results.nameRu)

    }

    filmsItem.forEach(item => {
        item.addEventListener('click', () => {
            modalItem.innerHTML = ``
            modalItem.classList.remove('modal__hidden')
            console.log(item)
            modalInfo(item.dataset.id)
            actorsFilm(item.dataset.id)
            videoInfo(item.dataset.id)
            cashFilms(item.dataset.id)
            document.body.style.overflow='hidden'
        })
    })

    function closeModal(){
        modal.addEventListener('click', (e) => {
            let target = e.target
            if (target.classList.contains('modal') || target.classList.contains('btn__close')){
                modalItem.classList.add('modal__hidden')
                document.body.style.overflow=''
            }
        })
    }


    function showModal(data){

        let modalContent = document.createElement('div')
        modalContent.classList.add('modal__content')

        modalContent.innerHTML= ``

        modalContent.innerHTML =
        `
            <div class="modal__title">
                Название: ${data.nameRu}
            </div>
            <div class="modal__descr">
                ${data.description}
            </div>
            <div class="modal__cash">
                Сборы в мире: $856785679567
            </div>
            <div class="modal__actors">
                Kevin Tarantino(test),Kevin Tarantino(test),Kevin Tarantino(test),Kevin Tarantino(test),Kevin Tarantino(test),Kevin Tarantino(test)
            </div>
            <div class="modal__video">
                <a href="" class="modal__link" >Посмотреть трейлер</a>
            </div>
            <button class="btn btn__close"></button>
        `

        modalItem.append(modalContent)
        
        
    }

    closeModal()
}