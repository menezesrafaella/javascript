const random = document.querySelector('.joke');
const button = document.querySelector('.next');


function randomJoke(){
    const api = fetch('https://api.chucknorris.io/jokes/random');
    api
    .then( r => 
        r.json())
        .then
        (body => {
            let joke = body.value
            random.innerText = joke;
        })
}
    
button.addEventListener('click', randomJoke)