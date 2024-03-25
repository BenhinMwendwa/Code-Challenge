//Prompt the user to enter marks
const prompt = require("prompt-sync")({ sigint: true });

const grade = prompt(" Enter marks  " )
//function to store the marks A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

function grading(marks){
if (grade>79 && grade <=100){ //if  marks is above 79 then you will be graded A
    return "A"
}else if  (grade >= 60 && grade<= 79 ){//if marks is greater or equal to 60 and is less or equal to 79 then you will be graded a B
    return "B"

}else if  (grade>49 && grade<= 59 ){//if marks is greater or equal to 49 and is less or equal to 59 then you will be graded a C
    return "C"
}
else if  (grade>=40 && grade<= 49 ){//if marks is greater or equal to 40 and is less or equal to 48.9then you will be graded a D
    return "D"
}
else if  ( grade< 40 ){//if marks  is less than 40 then you will be graded a E
    return "E"

}
else 
    return "invalid"
}
console.log(grading())
