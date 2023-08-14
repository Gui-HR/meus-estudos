const buttonOpenPopup = document.querySelector('.popup-open')
const popup = document.querySelector('.popup-container')

const showPopup = () => {
    popup.style.display = 'block'
}

const closePopup = event => {
    const ClassOfClickedElement = event.target.classList[0]
    const classNames = ['popup-container', 'popup-closer', 'button-closer']
    const isACloser = classNames.some((className) => className === ClassOfClickedElement)

    if(isACloser) {
        popup.style.display = 'none'
    }
}

buttonOpenPopup.addEventListener('click', showPopup)
popup.addEventListener('click', closePopup)



