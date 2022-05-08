export const actorsFilm = (id) => {
    async function filmActors(){
        const respnse = await fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`,{
            method : "GET",
            headers: {
                'X-API-KEY': '8c983825-227a-4a33-a9b9-3279f39a0204',
                'Content-Type': 'application/json',
            }
        })
        const results = await respnse.json()
        console.log(results)
        showActor(results)
    }

    async function showActor(data){
        let actorsBlock = document.querySelector('.modal__actors')
        actorsBlock.innerHTML = ``
        actorsBlock.innerHTML = 
        `
        Актеры: ${data[0].nameRu},${data[1].nameRu},${data[2].nameRu},${data[3].nameRu},${data[4].nameRu},${data[5].nameRu}
        `
    }
    filmActors()
}