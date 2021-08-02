const bitcoin = fetch('https://blockchain.info/ticker');
const value = document.querySelector('#value')

function fetchBitcoin(){
    bitcoin
    .then(r => r.json())
    .then(body => {
        let real = body.BRL.buy.replace('.', ',');
        value.innerText = 'R$ ' + real;        
    })
}

setInterval(fetchBitcoin, 500);

fetchBitcoin();