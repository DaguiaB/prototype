function buttonClick(button) {
    button.classList.add("button-clicked"); // Adiciona a classe quando o botão é clicado
  
    setTimeout(function() {
      button.classList.remove("button-clicked"); // Remove a classe após um intervalo de tempo
    }, 200); // Tempo em milissegundos
  }
  