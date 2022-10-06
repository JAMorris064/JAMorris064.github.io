// get: "https://deckofcardsapi.com/api/deck/new/draw/?count=2"

const submitButton = document.querySelector('button')
const inputBox = document.querySelector('input')


submitButton.addEventListener('click', (e) => {
     e.preventDefault()
    console.log(inputBox.value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputBox.value}`)
        .then((res) => res.json())
        .then((data) => {
          
        }

            
          
          // city_name.innerText = "Current City: " + data.name
            // main_temp.innerText = "Temperature Outside: " + Math.round(data.main.temp) + "°F"    
            // feels_like.innerText = "Feels like: " + Math.round(data.main.feels_like) + "°F"
            // description.innerText = "Weather: " + data.weather[0].description
//             })
//                 .catch((err) => console.log(err));
// });

// const button = document.querySelector('button')
// const inputBox = document.querySelector('input')
// const answer = document.querySelector('h5')

// fetch("https://pokeapi.co/api/v2/pokemon/")
// .then(res => {
//   return res.json();
// })
// // .then(res => {
// //   return("Your Pokemon is", res, "!")
// //   console.log("success", res);
// // })
// // .catch(err => {
// //   console.log("error", err);
// // })
// button.addEventListener('click', button){
//   return return("Your Pokemon is", res, "!")
// }
// re


// Add an event listener to your form so that when submitted, you trigger an AJAX call to the PokéAPI to find the Pokemon with the value from the text input field in the form. So if you type 52in the input, search for the pokemon with the ID of 52.
// Inside your .then()promise callback, handle the response and set the text of your <h1>to be the name of the Pokemon the user searched for.
// Hint: What does .preventDefault()do? Bonus: include an imgtag to your html and have a picture of the pokemon you search for appear on your page!
