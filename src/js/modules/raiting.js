export const raitingColor = () => {
    let raitingNumber = document.querySelectorAll('.films__rating')
    
    raitingNumber.forEach(item => {
        if (item.textContent >= 7){
            item.classList.add('top')
        }
        if (item.textContent <7 && item.textContent >= 5){
            item.classList.add('medium')
        }
        if (item.textContent < 5){
            item.classList.add('bad')
        }
    })
}