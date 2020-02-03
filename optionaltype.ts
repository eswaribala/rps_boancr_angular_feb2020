var firstName:string;
var lastName:string;
enum genderType{
   MALE,FEMALE,TRANSGENDER
}
var gender:genderType;
var address:any=[1,"Rajaji Nagar",true,8768668]
firstName="Parameswari";
lastName="Bala";
gender=genderType.FEMALE;
console.log("FirstName=",firstName);
console.log("LasttName=",lastName);
console.log("Gender=",genderType[gender]);
//array
var phoneNos:number[]=[4567843,546798596795,36983697395867];
//lambda function
phoneNos.forEach(phonenumber=>{
    console.log(phonenumber);
})

address.forEach(addr=>{
    console.log(addr);
})
