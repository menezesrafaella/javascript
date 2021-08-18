async function fetchBitcoin(){
    const value = document.querySelector('#value')
    try {
        const bitcoin = fetch('https://blockchain.info/ticker');
        const response = await (await bitcoin).json();
        let real = response.BRL.buy;
        value.innerText = 'R$ ' + real;
    } catch (err) {
        console.log(err)
    }
}

setInterval(fetchBitcoin, 500);

fetchBitcoin();