interface Loan{
    loanNo:number;
    type:string;
    amount:number;
    interest:number;
}
//object for the interface
var housingLoan:Loan={
    loanNo:53876873,
    type:"Housing Loan",
    amount:536695,
    interest:0.1
}
console.log(housingLoan);

interface OptionalLoan{
    loanNo:number;
    type?:string;
    amount:number;
    interest:number;
}
//object for the interface
var housingOptionalLoan:OptionalLoan={
    loanNo:53876873,
    amount:536695,
    interest:0.1
}

console.log(housingOptionalLoan);

interface ComputeLoan{
    loanNo:number;
    type?:string;
    amount:number;
    interest:number;
    computeSimpleInterest:()=>number
}
//object for the interface
var computeHousingLoan:ComputeLoan={
    loanNo:53876873,
    amount:536695,
    interest:0.1,
    computeSimpleInterest: ():number =>{return computeHousingLoan.amount
        *computeHousingLoan.interest}
}

console.log(computeHousingLoan.computeSimpleInterest());

interface TraditionalWay
{
    loanNo:number,
    type:string,
    amount:number,
    interestRate:number
    compute:Function
}

class TraditionalLoan implements TraditionalWay
{
    constructor(public loanNo:number,public type:string, public amount:number,
                public interestRate:number)
    {

    }

    compute()
    {
        return this.amount* this.interestRate;
    }
}

var traditionalLoan= new TraditionalLoan(3456,"Housing",500000,0.2);
console.log(traditionalLoan.compute());
