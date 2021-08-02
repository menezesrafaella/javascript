const bitcoin = fetch('https://blockchain.info/ticker');
const value = document.querySelector('#value')

bitcoin
.then(r => r.json())
.then(body => {
    setInterval( () => {
        let real = body.BRL.buy;
        value.innerText = real;
    }, 30000)
    
})