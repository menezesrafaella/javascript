async function randomJoke() {
  const random = document.querySelector(".joke");
  const button = document.querySelector(".next");
  try {
    const api = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await api.json();
    random.innerText = joke.value;
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener("click", randomJoke);
