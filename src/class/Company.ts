import { Dioaccount } from "./Dioaccount";

export class Company extends Dioaccount {
    constructor(name: string, accountNumber: number) {
      super(name, accountNumber);
    }
  
    getLoan = (balance: number): void => {
      if(this.validateStatus()) {
        console.log("Emprestimo aprovado");
      }
      this.balance += balance;
    };

    deposit = (): number => {
        return 0;
    }
  }