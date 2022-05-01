export const actorsFilm = (url,API_KEY) => {
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
        
        for(let i = 0;i<6;i++){
            filmActors(filmidArray[i])
        }
        
        // async function filmMoney(item){
        //     const responseMoney = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${item}/box_office`, {
        //         method : "GET",
        //         headers: {
        //             'X-API-KEY': '8c983825-227a-4a33-a9b9-3279f39a0204',
        //             'Content-Type': 'application/json',
        //         }
        //     })
        //     let newBudget = document.querySelector(`[data-budget="${item}"]`)
        //     let newMarketing = document.querySelector(`[data-marketing="${item}"]`)
        //     let newRus = document.querySelector(`[data-rus="${item}"]`)
        //     let newUSA = document.querySelector(`[data-usa="${item}"]`)
        //     let newWorld = document.querySelector(`[data-world="${item}"]`)
        //     const resultsMoney = await responseMoney.json()
        //     newBudget.innerHTML = `Бюджет: $${resultsMoney.items[0].amount}` 
        //     newMarketing.innerHTML = `Маркетинг: $${resultsMoney.items[1].amount}`
        //     newRus.innerHTML = `Сборы в России: $${resultsMoney.items[2].amount}`
        //     newUSA.innerHTML = `Сборы в США: $${resultsMoney.items[3].amount}`
        //     newWorld.innerHTML = `Сборы в Мире: $${resultsMoney.items[4].amount}`
        // }

        async function filmActors(item){
            const respnseActor = await fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${item}`,{
                method : "GET",
                headers: {
                    'X-API-KEY': '8c983825-227a-4a33-a9b9-3279f39a0204',
                    'Content-Type': 'application/json',
                }
            })
            let director = document.querySelector(`[data-director="${item}"]`)
            let actors = document.querySelector(`[data-actor="${item}"]`)
            const resultsActor = await respnseActor.json();
            console.log(resultsActor)
            director.innerHTML = `Режиссер: ${resultsActor[0].nameRu}`
            actors.innerHTML = `Актеры: ${resultsActor[1].nameRu}(${resultsActor[1].description}),${resultsActor[2].nameRu}(${resultsActor[2].description}),${resultsActor[3].nameRu}(${resultsActor[3].description}),${resultsActor[4].nameRu}(${resultsActor[4].description}),${resultsActor[5].nameRu}(${resultsActor[5].description})`
        }
            
    }
    topFilms()
}