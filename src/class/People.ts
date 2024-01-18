import { Dioaccount } from "./Dioaccount";

export class People extends Dioaccount {
    constructor(public doc_id: number, name: string, accountNumber: number) {
      super(name, accountNumber);
      this.doc_id = doc_id;
    }
  }