// Chapter 35 to 38 pdf
                    FUNCTION

//q1.
function fun(){
    var date= new Date();
    document.write(date);
}
fun();

//q2.
function Name(firstName,SecondName){
    fullName= firstName+" "+SecondName;
    console.log(Hello , $ ,{fullName} ,'Wellcome!');
}
Name("Sidra","Moosa");

//q3.
function add(num1,num2){
    var variable= num1+ num2;
    return variable;
}
var result= add(parseFloat(prompt("Enter num1")),parseFloat(prompt("Enter num2")));
console.log(result);

//q4.
function calcu(num1,num2,operator){
    if(operator=== "+"){
        return num1+num2;
    }
    if(operator=== "-"){
        return num1-num2;
    }
    if(operator=== "*"){
        return num1*num2;
    }
    if(operator=== "/"){
        return num1/num2;
    }
    if(operator=== "%"){
        return num1%num2;
    }
    else{ return "Invalid operator";}
}

var result =   calcu(parseFloat(prompt("Enter num1")),parseFloat(prompt("Enter num2")),prompt("Enter operator"));
console.log(result)

//q5.
function square(number){
    var variable=number*number;
    return variable; 
}
var num= parseFloat (prompt("Enter a number of square"))
 var result =square(num);
 console.log(`The square of ${num} is: ${result} `);

//q7.
function number(start,end){
 var result=[];   
for(var i=start;i<=end;i++)
result.push(i);
return result
}

var startNum=parseFloat(prompt("Enter start number"));
var endNum=parseFloat(prompt("Enter end number"));

var countingNum= number(startNum,endNum);
console.log(`Counting from ${startNum} to ${endNum}: ${countingNum.join(",")} `);





