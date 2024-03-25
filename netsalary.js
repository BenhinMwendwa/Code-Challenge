//Prompt the user to enter gross salary
const prompt = require("prompt-sync")({ sigint: true });

const grossSalary = prompt(" Enter grosssalary  " )


const benefit=0 //initialized benefit

//function to calculate netsalary 
//nest deduction functions in the main function

function netSalary(grossSalary){

function calcPayee(grossSalary){//function to calculate payee
    

    if(grossSalary> 0 && grossSalary <= 24000){
      return grossSalary *0.10
  }else if (grossSalary >= 24001 && grossSalary <= 32333){
      return grossSalary * 0.25;
    
  }else if (grossSalary >= 32334 && grossSalary<= 500000){
      return grossSalary * 0.30;
  
  }else if (grossSalary >= 500001 & grossSalary <= 800000){
      return grossSalary * 0.325;
      
  }else if(grossSalary > 800000){
      return grossSalary * 0.35;
  
  }


}
//function to calculate NHIF

    function CalcNHIF(grossSalary, benefits = 0){
        
     
         if (grossSalary > 0  && grossSalary <= 5999){
           return 150;
           
         }else if (grossSalary >= 6000 && grossSalary <= 7999){
           return 300
     
         }else if(grossSalary >= 8000 && grossSalary <= 11999){
           return 400
     
         }else if(grossSalary >= 12000 && grossSalary <= 14999){
           return 500
         }
         else if(grossSalary >= 15000 && grossSalary <= 19999){
          return 600
     
         }
         else if(grossSalary>= 20000 && grossSalary <= 24999){
           return 750
     
         }
         else if(grossSalary >= 25000 && grossSalary <= 29999){
           return 850
     
         }
         else if(grossSalary >= 30000 && grossSalary <= 34999){
           return 900
     
         }
         else if(grossSalary >= 35000 && grossSalary <= 39999){
           return 950
     
         }else if(grossSalary >= 40000 && grossSalary<= 44999){
           return 1000
     
         }
         else if(grossSalary >= 50000 && grossSalary <= 59999){
           return 1200
     
         }
         else if(grossSalary >= 60000 && grossSalary <= 69999){
           return 1300
     
         }
         else if(grossSalary >= 70000 && grossSalary <= 79999){
           return 1400
     
         }
         else if(grossSalary >= 80000 && grossSalary <= 89999){
           return 1500
     
         }
         else if(grossSalary >= 90000 &&  grossSalary <= 99999){
           return 1600
     
         }
         else (grossSalary>= 100000)
           return 1700
         
        }


   function CalcNSSF(grossSalary){ //function to calculate NSSF
   return  grossSalary*0.07
   }
///initialize the variables 
 const NSSFDeductions=CalcNSSF(grossSalary)
 const  NHIFDeductions=CalcNHIF(grossSalary)
 const Payee=calcPayee(grossSalary)

    const result = grossSalary - NHIFDeductions-NSSFDeductions-Payee //calculation of netsalary
return result;
    }

console.log(netSalary(grossSalary)) //call the function
    


