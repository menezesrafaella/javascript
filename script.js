const address = document.getElementById('address');
const city = document.getElementById('city');
const district = document.getElementById('district');
const uf = document.getElementById('state');
const nroCep = document.getElementById('cep');
let nro;
let cep;

nroCep.addEventListener('change' , (e) => {
    nro = e.target.value
    console.log(nro.length == 8)
    cep = fetch(`https://viacep.com.br/ws/${nro}/json/`);

    if (nro.length == 8) { 
        cep
        .then(r =>  
            r.json())
        .then(body => {
            address.value = body.logradouro;
            city.value = body.localidade;
            district.value = body.bairro
            uf.value = body.uf
        })
    }
})



