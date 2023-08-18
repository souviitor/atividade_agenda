const form = document.getElementById('myForm');
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('telefone');
    const telefone = Array.from(String(inputTel.value), Number);

    if (telefone.length != 9) {
        alert(`Número deve conter nove digitos`);
        inputNome.value = '';
        inputTel.value = '';
    } else {
        if (nomes.includes(inputNome.value)) {
            alert(`A pessoa ${inputNome.value} já está cadastrada`);
        }else {
            nomes.push(inputNome.value);
            telefones.push(parseInt(inputTel.value));

            let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputTel.value}</td>`;
            linha += '</tr>';

            linhas += linha;

            inputNome.value = '';
            inputTel.value = '';
        }
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}