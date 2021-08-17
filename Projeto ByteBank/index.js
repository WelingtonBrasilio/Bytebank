import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Welington";
cliente1.cpf = 12345678900;

const cliente2 = new Cliente();
cliente2.nome = "João";
cliente2.cpf = 12398745605;

const contaCorrenteWelington = new ContaCorrente();
contaCorrenteWelington.cliente = cliente1;
contaCorrenteWelington.agencia = 1001;
contaCorrenteWelington.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

contaCorrenteWelington.transferir(200, conta2);
console.log(conta2);
console.log(contaCorrenteWelington);






