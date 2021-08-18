const address = document.getElementById('address');
const city = document.getElementById('city');
const district = document.getElementById('district');
const uf = document.getElementById('state');
const nroCep = document.getElementById('cep');
const form = document.getElementById('register');
let nro;
let cep;

nroCep.addEventListener('change' , handleEvent);

function handleEvent(event){
    event.preventDefault();

    const target = event.target;

    if(!target.checkValidity()){
        target.classList.add('validation-error');
        target.nextElementSibling.innerText = target.validationMessage;
    } else {
        target.classList.remove('validation-error');
        target.nextElementSibling.innerText = ' ';
    }

    nro = event.target.value
    searchCep(nro);
}

async function searchCep(nro){
    try{ 
        cep = fetch(`https://viacep.com.br/ws/${nro}/json/`);
        if (nro.length == 8) { 
        const body = await (await cep).json();
        address.value = body.logradouro;
        city.value = body.localidade;
        district.value = body.bairro
        uf.value = body.uf
    }
        } catch (err) {
            console.log(err);
    }
}





