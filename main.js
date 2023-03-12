const lis = document.querySelectorAll('li')              //Seleciona todas as lis
const selectCard = document.querySelectorAll('.card')    //Seleciona todos os card
const btnSubmit = document.querySelector('button')       // Seleciona o botão de submit

function rating(element) {
    //Seleciona o span dentro da ta de paragrafo
    const paragraphSpan = document.querySelector('.rating span') 
    paragraphSpan.innerHTML = element   //adiciona  dentro do span a nota selecionada
}

for(let i = 0; i < lis.length; i++) {
    const selectLi = lis[i]                      //lista a li de acordo com a posição
    selectLi.addEventListener('click', () => {   // adiciona o evento de click na li 
        selectLi.classList.toggle('newLi')       //adiciona ou remove a classe newLi
        const selectNote = selectLi.textContent  //imprime o conteúdo da li clicada
        rating(selectNote)                       //chama a função rating
    })
}

btnSubmit.addEventListener('click', () => {   // evento de click no botão de submit
    selectCard[0].classList.add('hidden')     // adiciona a classe hidden na 1°div com a classe card
    selectCard[1].classList.remove('hidden')  // remove a classe hidden na 2°div com a classe card
})



