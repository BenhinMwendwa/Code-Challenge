# (GRADE GENERATOR)

#### By BENHIN MUSYOKA MWENDWA

## Description
This is a program that generates  the grade you get and then prints the grade after you have input the marks

The first code is to prompt the user to enter the marks by using the following code ///const prompt = require("prompt-sync")({ sigint: true });

const grade = prompt(" Enter marks  " )//
create a function with name grading .
use if case argument that will tell the user which grade he has get after he has entered the marks
if the user gets between 79 and 100 then grade A is printed ///if (grade>79 && grade <=100)
if the user gets between 79 to 60 then grade B is printed ///else if  (grade >= 60 && grade<= 79 )
if the user gets between 49 to 59 then grade C is printed ///else if  (grade>= 49 && grade<= 59 )
if the user gets between 40 to 48.9 then grade D is printed ///else if  (grade>=40 && grade<= 48.9 )
if the user gets less than 40 then grade E is printed///( grade< 40 )
If the user then does not meet this requirements in invalid is printed

call the function using console log to run the program

## (NB) Project set up for all the Three challenges
Make sure you have created repository then after you have checked your work and its perfectly running follow the following steps
Git add .
Git commit -m"//comment"
Git push 


## (SpeedDetector)
This is a program that accepts speed input then checks if the speed limit (70)has been reached if the speed has been exceeded then a point is given.A point is given for every 5 kms above the speed limit which is 70. If the driver accumulates points to 12 then his licence is suspended otherwise if the driver does not reach the maximum speed then ok is returned

The first code is to prompt the user to enter the care speed using the following code ///const prompt = require("prompt-sync")({ sigint: true });

const speed = prompt(" Enter car speed  " )


Create a function called car speed with variable speed in brackets
inside the function use if statement to check if the car speed is less than 70 or if the maximum speed has been exceeded.
if the speed limit has not been exceeded Ok is returned but if it has been exceeded it calculates the how much speed has been exceeded.for every 5km above speedLImit  a point is given
if the points accumulate to 12 then the drivers license is suspended

function CarSpeed(speed) {
    if (speed< 70) //
    { 
        return "OK"
    } else 
        points= ((speed - 70)/5)
    


           if (points<=12){//
           }
}
function is then called using a callback method


## netsalary
This program calculates the netsalary of a worker
The program gets the gross salary which then deducts all the expenses which include paye nssf and nhif then returns the final output after the deduction has been made.What is returned is the net salary
The first code is to prompt the user to enter the gross salary.
const prompt = require("prompt-sync")({ sigint: true });

const gross salary = prompt(" Enter gross salary " )
benefit is then initialized to 0
A function called netsalary is then created with gross salary included in the brackets
Several function are then nested in the net salary function calculating the deductions
 Every function has a return 
 function netSalary(grossSalary){

function calcPayee(grossSalary){//function to calculate payee


}
function CalcNHIF(grossSalary){//function to calculate NHIF

}

   function CalcNSSF(grossSalary){ //function to calculate NSSF

   }

   NSSFDeduction , NHIFDeduction and payee  is then initialized
 }
   A method called result is then created which calculates the netsalary
      const result = grossSalary - NHIFDeductions-NSSFDeductions-Payee 
   Console log is then used to call the function
