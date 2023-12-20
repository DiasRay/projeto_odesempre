 // Funções para abrir os modais
    function openLogin() {
      document.getElementById('id01').style.display = 'block';
      document.getElementById('id02').style.display = 'none'; // Garante que o modal de cadastro esteja fechado ao abrir o de login
    }
    
    function openCadastro() {
      document.getElementById('id02').style.display = 'block';
      document.getElementById('id01').style.display = 'none'; // Fecha o modal de login ao abrir o de cadastro
    }
    
    function cupom() {
      alert("Você recebeu um cupom de 5% de desconto!\nVálido somente para o primeiro uso até 20/01/2024");
    }