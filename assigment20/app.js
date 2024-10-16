// question 1
function greet(){
    Swal.fire({
        title: " Hello Sweetii!",
        text: "hehehehehe",
        imageHeight: 200,
      });
}
function mobile(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "phone chahiye",
        showConfirmButton: false,
        timer: 1500
      });

}
function deleteRow(button) {
    // Get the row of the button that was clicked
    const row = button.closest('tr');
    // Remove the row from the table
    row.parentNode.removeChild(row);}

    let count = 0;

        const counterDisplay = document.getElementById('counter');
        const increaseButton = document.getElementById('increase');
        const decreaseButton = document.getElementById('decrease');

        increaseButton.addEventListener('click', () => {
            count++;
            counterDisplay.textContent = count;
        });

        decreaseButton.addEventListener('click', () => {
            count--;
            counterDisplay.textContent = count;
        });
   ////////////////////////////////////////////////////////////
   //1
   function power(a, b) {
    var  result = 1;

    var  i = 0;
 
    do {
       console.log(result *= a) ;
        i++;
    } while (i < b);
    
    return result;
}
//2
function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true ; 
    } else {
        return false; 
    }
}


var  year = prompt("Enter a year: ");
if (LeapYear(year)) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}
//3
function calculateAreaOfTriangle(a, b, c) {
    
    let S = (a + b + c) / 2;

   
    let area = (S * (S - a) * (S - b) * (S - c));

    return area;
}
var a =+prompt("enter first number") ;
var b = +prompt("enter second number");
var c = +prompt("enter third number");
var area = calculateAreaOfTriangle(a, b, c);
alert("The area of the triangle is: " + area);
//4
// Function to calculate average of marks
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}

// Function to calculate percentage of marks
function calculatePercentage(totalMarks, maxMarks) {
    return (totalMarks / maxMarks) * 100;
}


function mainFunction(marks1, marks2, marks3, maxMarksPerSubject) {
    // Calculate total marks
    var totalMarks = marks1 + marks2 + marks3;
    
    //  calculate average
    var average = calculateAverage(marks1, marks2, marks3);
    
    //  calculate percentage
    var percentage = calculatePercentage(totalMarks, maxMarksPerSubject * 3);

    //  results
    console.log("Average Marks: " + average);
    console.log("Percentage: " + percentage + "%");
}


var marks1 = +prompt("entermarks1");
var marks2 = +prompt("entermarks2");
var marks3 = +prompt("entermarks3");
var maxMarksPerSubject = 100;

mainFunction(marks1, marks2, marks3, maxMarksPerSubject);
//5
//6
function remove(sentence) {
 
    var vowels = "aeiouAEIOU";
    
    //  without vowels
    var result = "";
    
    // Loop through the sentence and add only non-vowel characters to the result
    for (var  i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    
    return result;
}


let sentence = "lorem ipsun hdijhbbhv n uhcjhud dnbdjhgyucg dhgdyusguyfsd djhgdyutweud fgdyuTGWYGFYGIFYG FNGSFDYUTWGAYFGJKAGFUYKW";
let result = remove(sentence);
console.log("Sentence without vowels: " + result);
//7
//8