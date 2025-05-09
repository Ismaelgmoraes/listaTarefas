function adicionarTarefa()
  {
            // Adiciona a tarefa à lista de tarefas
          let entrada = document.getElementById("inputTarefa");
          let tarefa = entrada.value;
          document.getElementById("mensagem").textContent = tarefa;
  }       let lista = document.getElementById("listaTarefas");
          let item = document.createElement("li");
          entrada.value = ""; // Limpa o campo de entrada após adicionar a tarefa
          