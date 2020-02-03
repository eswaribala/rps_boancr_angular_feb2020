import {LoanModule} from "./customer";


//create Customer object
var customer=new LoanModule.Customer(3487567,'Ganesh','Tyagi','2/12/1987');
console.log(customer.customerId);
//create privileged Customer Object
var privilegedCustomer=new LoanModule.PrivilegedCustomer(3487567,'Ganesh',
    'Tyagi','2/12/1987',0.8);
privilegedCustomer.offer=0.5;
//print object
console.log(privilegedCustomer);
