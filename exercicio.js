================================================================================
================================================================================
function Conta(numero, tipo, valor) {
  this.numero = numero;
  this.tipo = tipo;
  this.valor = valor;

  this.depositar = function(valor) {
    this.valor += valor;
  };

  this.retirar = function(valor) {
    this.valor -= valor;
  };
}

function Pessoa(nome, idade, conta) {
  this.nome = nome;
  this.idade = idade;
  this.conta = new Array();
}
================================================================================
================================================================================
function acao(acao) {

  var opc = acao.substr(-2,2);

  switch (opc) {
    case 'ar':
      acao = acao.replace(acao.substr(-2,2), "ando...");
      break;
    case 'er':
      acao = acao.replace(acao.substr(-2,2), "endo...");
      break;
    case 'ir':
      acao = acao.replace(acao.substr(-2,2), "indo...");
      break;
    case 'or':
      acao = acao.replace(acao.substr(-2,2), "ondo...");
      break;
  }

  console.log(acao);
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.acao = acao;
}

function Funcionario(cargo, setor, pessoa) {
  this.cargo = cargo;
  this.setor = setor;
  this.pessoa = pessoa;
}

function Gerente(funcionario, salario) {
  this.funcionario = funcionario;
  this.salario = salario;
}

var gerente = new Gerente(
  new Funcionario(
    "Gerente TI",
    "TI",
    new Pessoa("Xpto", 30)
  ),
  30000.0
)
================================================================================
================================================================================
