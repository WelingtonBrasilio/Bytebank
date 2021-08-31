import { Cliente } from "./Cliente.js";

//CC que armazena e permite a retirada de dinheiro
export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;

    _cliente;
    _saldo = 0;

//altera a regra de como um atributo pode ou não ser modificado
    set cliente(novoValor){ 
        if(novoValor instanceof Cliente){
            this._cliente = novoValor; 
        }
    }

//retorna seu valor para exibição
    get cliente(){ 
      return this._cliente;
    }

    get saldo(){
      return this._saldo;
    }
    
    constructor(agencia, cliente){//inicia os atributos
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}