//Molde
class Cliente{
    nome;
    cpf;
}

//CC quer armazena e permite a retirada de dinheiro
class ContaCorrente{
    agencia;
    _saldo = 0;
    
    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
}


const cliente1 = new Cliente();
cliente1.nome = "Welington";
cliente1.cpf = 12345678900;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22345878909;

const contaCorrenteWelington = new ContaCorrente();
contaCorrenteWelington.agencia = 1001;

contaCorrenteWelington.depositar(100);

const valorSacado = contaCorrenteWelington.sacar(50);
console.log(valorSacado);



console.log(contaCorrenteWelington);


