const lis = document.querySelectorAll('li')
const selectCard = document.querySelectorAll('.card')
const btnSubmit = document.querySelector('button')

function rating(element) {
    const paragraphSpan = document.querySelector('.rating span')
    paragraphSpan.innerHTML = element
}

for(let i = 0; i < lis.length; i++) {
    const selectLi = lis[i]
    selectLi.addEventListener('click', () => {
        selectLi.classList.toggle('newLi')
        const selectNote = selectLi.textContent
        rating(selectNote)
    })
}

btnSubmit.addEventListener('click', () => {
    selectCard[0].classList.add('hidden')
    selectCard[1].classList.remove('hidden')
})



