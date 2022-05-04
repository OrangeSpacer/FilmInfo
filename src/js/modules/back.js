export const backMainPage = () => {
    let mainTitle = document.querySelector('.header__title')

    mainTitle.addEventListener('click', () => {
        window.location.reload()
    })
}

