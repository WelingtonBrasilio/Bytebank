import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Welington", 12345678900);
const cliente2 = new Cliente("João", 12398745605);


const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);


conta1.depositar(500);

console.log(conta1);
console.log(cliente2);
console.log("\nNúmero de contas criadas: " + ContaCorrente.numeroDeContas);








