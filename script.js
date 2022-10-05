
fetch("https://pokeapi.co/api/v2/pokemon/meowth")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data => {
  console.log(data);
  displayPokemon(data)
})
.catch((error) => console.error("FETCH ERROR:", error));

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