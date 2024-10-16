let dObj = new Date();
document.write(dObj);
//
 var dStr = new Date().toString();
console.log(dStr);
//
var datea =new Date()
 var dayarr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(dayarr[datea.getDay()]);
//


 
let date = new Date();
let day = date.getDay();

let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


alert(dayNames[day]);
// 
var dat = new Date();

console.log(dat.getDay());
console.log(dat.getFullYear());
console.log(dat.getHours());
console.log(dat.getMilliseconds());
console.log(dat.getMinutes());
console.log(dat.getMonth());
console.log(dat.getSeconds());
console.log(dat.getTime());
console.log(dat.getTimezoneOffset());
//
var olddata = new Date(2020, 11, 31); 
console.log(olddata);
//
 var dateObject = new Date(1992, 1, 2); 
 console.log(dateObject);
 //


 var dateObject = new Date(1992, 1, 2);
 alert(dateObject.getTime() - new Date(1980, 0, 1).getTime());
 //

let da= new Date('2023-10-12');

 
da.setFullYear(2025);


console.log(da); 
//
function changeMonthToJanuary(date) {
    date.setMonth(0); 
    return date; 
}


let myDate = new Date('2023-10-12'); 
let updatedDate = changeMonthToJanuary(myDate);
console.log(updatedDate);
//

let myDat = new Date('2023-10-12'); 


myDat.setDate(15);

console.log(myDat); 
//
function addHoursToTime(timeString, hoursToAdd) {
   
    let [hours, minutes] = timeString.split(':').map(Number);


    hours += hoursToAdd;

    
    if (hours >= 24) {
        hours = hours % 24; 
    }

}
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

  
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

   
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

const birthDateInput = prompt("Enter your birth date (YYYY-MM-DD):");
const age = calculateAge(birthDateInput);
console.log(`Your age is: ${age} years old.`);

//
// / Chapter 35 - 37 (Functions)

//q1.
function alt(){
    alert("Wellcome!")
}
alt();                                    

//q2.
function askName(name){
userName = prompt("Enter name");
console.log(Username, $,{userName});}
askName()

//q3.
function greet(){
    console.log("Hello! Welcome to the program.");
}

function add(){
    console.log("Thank you for using the program!");
}

function main(){
    greet();
    add();
}
main();

//q4.
function Name(){
    var userName=prompt("Enter your name");
    alert(Wellcome, $,{userName})
}
Name();

//q5.
function concat(a,b,c){
    return a+b+c
}
var result= concat("fasiha","gul",2104);
console.log(result);