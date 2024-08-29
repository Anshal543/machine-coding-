const url = "https://api.chucknorris.io/jokes/random";
const displayJoke = document.getElementById("display-joke");
const btn = document.getElementById("getJoke");

btn.addEventListener("click", randomJoke);

let latestJoke = 0;
function randomJoke() {
  let currentJoke = ++latestJoke;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error:${error}`);
      }
      return response.json();
    })
    .then((data) => {
        console.log(`latest:${latestJoke}`);
        console.log(`current:${currentJoke}`);
      if (currentJoke == latestJoke) {
        displayJoke.innerHTML = `${data.value}`;
      }
    })
    .catch((error) => {
      console.log(`error:${error}`);
      displayJoke.innerHTML = "something went wrong";
    });
}
