
function buttonClick(button) {
  button.classList.add("button-clicked"); // Adiciona a classe quando o botão é clicado

  setTimeout(function() {
    button.classList.remove("button-clicked"); // Remove a classe após um intervalo de tempo
  }, 200); // Tempo em milissegundos
}

// JavaScript para manipulação do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    var nome = document.getElementById("nomeInput").value;
    var email = document.getElementById("emailInput").value;
    var senha = document.getElementById("senhaInput").value;

    // Exemplo de validação simples
    if (nome === "" || email === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você pode enviar os dados do formulário para o servidor
    // usando uma solicitação Ajax ou realizar outras ações necessárias

    alert("Cadastro realizado com sucesso!");
    // Redirecionar ou fazer qualquer outra ação após o cadastro

    // Limpa os campos de entrada
    document.getElementById("nomeInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("senhaInput").value = "";
  });