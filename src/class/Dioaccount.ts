export abstract class Dioaccount {
  constructor(
    private name: string,
    private accountNumber: number,
    public balance: number = 0,
    private status: boolean = true
  ) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  setName = (name: string): void => {
    this.name = name;
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (balance: number): void => {
    if(this.validateStatus()){
      console.log("conta valida para deposito");
    }
    this.balance += balance;
  };

  withdraw = (balance: number): void => {
    if(this.validateStatus()){
      console.log("conta valida para saque");
    }
    if (balance > this.balance) {
      throw new Error("saldo insuficiente");
    }
    this.balance -= balance;
  };
  getBalance = (): void => {
    console.log(this.balance);
  };

   validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("conta invalida");
  };
}