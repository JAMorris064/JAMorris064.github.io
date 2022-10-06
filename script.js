// get: "https://deckofcardsapi.com/api/deck/new/draw/?count=2"


fetch("https://pokeapi.co/api/v2/pokemon/")
.then(res => {
  return res.json();
})
.then(res => {
  console.log("success", res);
})
.catch(err => {
  console.log("error", err);
})
addEventListener('click', button)


Add an event listener to your form so that when submitted, you trigger an AJAX call to the PokéAPI to find the Pokemon with the value from the text input field in the form. So if you type 52in the input, search for the pokemon with the ID of 52.
Inside your .then()promise callback, handle the response and set the text of your <h1>to be the name of the Pokemon the user searched for.
Hint: What does .preventDefault()do? Bonus: include an imgtag to your html and have a picture of the pokemon you search for appear on your page!
// async function getText(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   myDisplay(y);


// fetch("https://pokeapi.co/api/v2/pokemon/meowth")
// .then((response) => {
//   if (response.ok) {
//     return response.json();
//   } else {
//     throw new Error("Error");
//   }
// })
// .then(data => {
//   console.log(data);
//   displayPokemon(data)
//   const meowth = 
// })
// .catch((error) => console.error("Error", error));

// const url = "http://pokeapi.salestock.net/api/v2/pokemon/7"
// const url = "https://pokeapi.co/api/v2/pokemon/meowth";
// // use first url as a backup only

// fetch(url)
//   .then(res => {
//     console.log("success!", res);
//   })
//   .catch(err => {
//     console.log("something went wrong...", err);
//   });