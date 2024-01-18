import { People } from "./class/People";
import { Company } from "./class/Company";
import { Dioaccount } from "./class/Dioaccount";



const people: People = new People(1, "John", 123456);
const company: Company = new Company("Company", 123456);
const account: Dioaccount = people;



