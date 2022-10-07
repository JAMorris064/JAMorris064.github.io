

const submitButton = document.querySelector('button')
const inputBox = document.querySelector('input')


submitButton.addEventListener('click', (e) => {
     e.preventDefault()
    console.log(inputBox.value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputBox.value}`)
        .then((res) => res.json())
        .then((data) => {
          
        }

            
          
          