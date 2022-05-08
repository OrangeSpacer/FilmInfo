export const cashFilms = (id) => {
    async function cashInfo(){
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`,{
            method : "GET",
            headers: {
                'X-API-KEY': `8c983825-227a-4a33-a9b9-3279f39a0204`,
                'Content-Type': 'application/json',
            }
        })
        const results = await response.json()
    }
    cashInfo()

    function cashContent(data){
        let cashItem = document.querySelector('.modal__cash')
        cashItem.innerHTML = ``
        if(data.items.length > 0){
            cashItem.innerHTML =
            `
            <div class="modal__cash">
                Сборы в мире: $${data.items[data.items.length-1].amount}
            </div>
            `
        }
    }
}