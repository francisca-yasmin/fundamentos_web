const campo = document.getElementById("campo-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");

// addEventListener -> manipulador de evento
botaoAdicionar.addEventListener("click", function () {
  // 1 - Coletar o texto do input
  const texto = campo.value.trim();

  if (texto === "") return;

  // 2 - Criar a <li>
  const li = document.createElement("li");

  // 3 - Criar os dois botões
  const botaoConcluir = document.createElement("button");
  botaoConcluir.textContent = "✔ Concluir";
  botaoConcluir.addEventListener("click", function () {
    li.classList.toggle("concluida");
  });

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "✖ Remover";
  botaoRemover.addEventListener("click", function () {
    lista.removeChild(li);
  });

  // 4 - Adicionar os três elementos à <li>: texto + botão concluir + botão remover
  li.textContent = texto;
  li.appendChild(botaoConcluir);
  li.appendChild(botaoRemover);

  // 5 - Append da <li> na <ul>
  lista.appendChild(li);

  // Limpar o campo
  campo.value = "";
  campo.focus();
});

// Permitir adicionar com a tecla Enter
campo.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    botaoAdicionar.click();
  }
});