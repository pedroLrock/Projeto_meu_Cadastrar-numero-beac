const form = document.getElementById('form-atividade')
const nomePessoa = []
let linhas= ''


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha()
    atualiarTabela()
});

   function adicionarLinha(){
    const inputNome = document.getElementById('nome-pessoa')
    const inputNumero = document.getElementById('numero-pessoa')

    if(nomePessoa.includes(inputNome.value)){
        alert(`O nome: ${inputNome.value} já foi inserido porfavor adicione outro`);
    } else{
        nomePessoa.push(inputNome.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>'

    linhas += linha;
}
    
    inputNome.value ='';
    inputNumero.value = '';
   }

   function atualiarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; }