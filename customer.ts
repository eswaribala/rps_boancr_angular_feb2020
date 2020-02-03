export module LoanModule {
    export class Customer {
        private _customerId: number;
        private _firstName: string;
        private _lastName: string;
        private _dob: string;

        //constructor
        constructor(id: number, fname: string, lname: string, dob: string) {
            this._customerId = id;
            this._firstName = fname;
            this._lastName = lname;
            this._dob = dob;
        }

        get customerId(): number {
            return this._customerId;
        }

        set customerId(value: number) {
            this._customerId = value;
        }

        get firstName(): string {
            return this._firstName;
        }

        set firstName(value: string) {
            this._firstName = value;
        }

        get lastName(): string {
            return this._lastName;
        }

        set lastName(value: string) {
            this._lastName = value;
        }

        get dob(): string {
            return this._dob;
        }

        set dob(value: string) {
            this._dob = value;
        }


    }

    export class PrivilegedCustomer extends Customer {

        private _offer: number;

        constructor(id: number, fname: string, lname: string, dob: string, offer: number) {
            super(id, fname, lname, dob);
            this._offer = offer;

        }

        get offer(): number {
            return this._offer;
        }

        set offer(value: number) {
            this._offer = value;
        }
    }

}
