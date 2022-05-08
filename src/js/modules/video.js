export const videoInfo = (id) => {

    async function video(){
        const response = await fetch (`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`,{
            method : "GET",
            headers: {
                'X-API-KEY': `8c983825-227a-4a33-a9b9-3279f39a0204`,
                'Content-Type': 'application/json',
            }
        })
        const results = await response.json()
        showVideo(results.items)
    }

    function showVideo(data){
        let videoBlock = document.querySelector('.modal__video')
        videoBlock.innerHTML = ''
        if (data.length > 0){
            videoBlock.innerHTML=
            `
                <a href="${data[0].url}" class="modal__link">Посмотреть трейлер</a>
            `
        }
    }
    setTimeout(() => video(),200) 
}