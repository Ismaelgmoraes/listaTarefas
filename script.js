function adicionarTarefa()
  {
            // Adiciona a tarefa à lista de tarefas
          let inputTarefa = document.getElementById("inputTarefa");
          let tarefa = inputTarefa.value;
        document.getElementById("mensagem").textContent = "Adicionando tarefa: " + tarefa;
          // Aqui você pode adicionar a lógica para armazenar a tarefa em um banco de dados ou localStorage, se necessário
          // Exemplo: localStorage.setItem("tarefa", tarefa);
          
          // Adiciona a tarefa à lista na página
        let listaTarefas = document.getElementById("listaTarefas");
          let novaTarefa = document.createElement("li");
          novaTarefa.textContent = tarefa;
          listaTarefas.appendChild(novaTarefa);
          inputTarefa.value = ""; // Limpa o campo de entrada após adicionar a tarefa
  }
