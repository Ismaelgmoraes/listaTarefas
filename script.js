function adicionarTarefa() {
  // Obtém o campo de entrada onde o usuário digita a tarefa
  // O método getElementById() retorna o elemento HTML com o id "inputTarefa"
  // O elemento <input> é um campo de texto onde o usuário pode digitar a descrição da tarefa
  let inputTarefa = document.getElementById("inputTarefa");

  // Armazena o valor digitado pelo usuário (a descrição da tarefa)
  // O método trim() remove espaços em branco do início e do fim da string
  // Isso é útil para evitar que tarefas vazias sejam adicionadas
  let tarefa = inputTarefa.value.trim();

  // Obtém o elemento onde a mensagem de erro ou sucesso será exibida
  // (o elemento <p> com o id "mensagem" no HTML)
  // O elemento <p> é usado para exibir mensagens ao usuário
  // A mensagem pode ser um erro (se a tarefa estiver vazia) ou uma confirmação (se a tarefa for adicionada com sucesso)
  let mensagem = document.getElementById("mensagem");

  // Verifica se o campo de entrada está vazio
  // Se o campo de entrada estiver vazio, exibe uma mensagem de erro
  if (tarefa === "") {
    // Se o campo de entrada estiver vazio, exibe uma mensagem de erro
    mensagem.textContent = "Erro: Tarefa não pode ser vazia!";
    mensagem.style.color = "#A34743"; // Define a cor da mensagem de erro como vermelho

  } else {

      // Obtém a lista de tarefas (o elemento <ul> no HTML)
      // O elemento <ul> é usado para agrupar os itens de lista (<li>) que representam as tarefas
      // O método getElementById() retorna o elemento HTML com o id "listaTarefas"
      let listaTarefas = document.getElementById("listaTarefas");

      // Cria um novo item de lista (<li>) para a nova tarefa
      // O elemento <li> é usado para representar um item de lista dentro da lista de tarefas
      // O método createElement() cria um novo elemento HTML do tipo <li>
      let novaTarefa = document.createElement("li");

      // Define o texto da nova tarefa como o conteúdo digitado
      // O método textContent define o texto que será exibido dentro do elemento <li>
      // Isso significa que o texto da nova tarefa será a descrição digitada pelo usuário
      novaTarefa.textContent = tarefa;

        // Adiciona a nova tarefa à lista de tarefas
        // O método appendChild() adiciona o novo elemento <li> (novaTarefa) como filho do elemento <ul> (listaTarefas)
        // Isso significa que a nova tarefa será exibida na lista de tarefas na página
        // Isso adiciona a nova tarefa à lista de tarefas
      listaTarefas.appendChild(novaTarefa);

        // Exibe uma mensagem de sucesso informando que a tarefa foi adicionada
        // O método textContent define o texto que será exibido dentro do elemento <p> (mensagem)
        // Isso significa que a mensagem de sucesso será exibida na página
      mensagem.textContent = "Tarefa adicionada com sucesso!";
      mensagem.style.color = "#28A745"; // Define a cor da mensagem de sucesso como verde
  }

  // Limpa o campo de entrada para o usuário digitar uma nova tarefa
  inputTarefa.value = "";
}
