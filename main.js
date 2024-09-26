
        // Captura os elementos do formulário e da tabela
        const form = document.getElementById('form-contato');
        const tabelaContatos = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];

        // Adiciona um ouvinte de evento para o formulário
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do formulário

            // Captura os valores dos campos
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;

            // Cria uma nova linha na tabela
            const novaLinha = tabelaContatos.insertRow();

            // Insere células para nome e telefone
            const celulaNome = novaLinha.insertCell(0);
            const celulaTelefone = novaLinha.insertCell(1);

            // Preenche as células com os dados fornecidos
            celulaNome.textContent = nome;
            celulaTelefone.textContent = telefone;

            // Limpa os campos do formulário após o envio
            form.reset();
        });
