//Prompt the user to enter gross salary
const prompt = require("prompt-sync")({ sigint: true });

const grossSalary = prompt(" Enter grosssalary  " )


const benefit=0 //initialized benefit

//function to calculate netsalary 
//nest deduction functions in the main function

function netSalary(grossSalary){

function calcPayee(grossSalary){//function to calculate payee
    return ((grossSalary+benefit)*0.03)

}
function CalcNHIF(grossSalary){//function to calculate NHIF

   return grossSalary*0.02 }


   function CalcNSSF(grossSalary){ //function to calculate NSSF
   return  grossSalary*0.02
   }
///initialize the variables 
 const NSSFDeductions=CalcNSSF(grossSalary)
 const  NHIFDeductions=CalcNHIF(grossSalary)
 const Payee=calcPayee(grossSalary)

    const result = grossSalary - NHIFDeductions-NSSFDeductions-Payee //calculation of netsalary
return result;
    }

console.log(netSalary(grossSalary)) //call the function
    


