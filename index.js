const readlineSync = require('readline-sync');

var highScore = 0;
var name = "";

for(i=0; i<3; i++)
{
    var studentName = readlineSync.question("Student Name: ");
    var unitTest = readlineSync.question("Unit Test Marks: ");
    var preFinal = readlineSync.question("Prefinal Marks: ");
    var finalMarks = readlineSync.question("Final Marks: ");

    var score = Number(unitTest) + Number(preFinal) + Number(finalMarks);
    console.log("Total Score: " +score);
    console.log("------------------------------");

}

if( score > highScore )
{
    highScore = score;
    name = studentName;

}

console.log("Student Name is: "+name);
console.log("Student HighScore is: "+highScore);
console.log("Average Marks :"+(score/3));