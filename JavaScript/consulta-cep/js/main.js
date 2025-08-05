
document.getElementById('cep').addEventListener('blur', async function() {
    const cep = document.getElementById('cep').value;
    const erroDiv = document.getElementById('cepError');
    document.getElementById('street').value = '';
    document.getElementById('neighborhood').value = '';
    document.getElementById('state').value = '';
    document.getElementById('city').value = '';

    if (cep.length < 8) {
        erroDiv.classList.remove("hidden");
        return;
    } else {
        erroDiv.classList.add("hidden");
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const cepData = await response.json();
    if (cepData.erro) {
        erroDiv.classList.remove("hidden");
        return;
    }
    document.getElementById('street').value = cepData.logradouro;
    document.getElementById('neighborhood').value = cepData.bairro;
    document.getElementById('state').value = cepData.uf;
    document.getElementById('city').value = cepData.localidade;
});