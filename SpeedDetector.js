//Prompt the user to enter the speed of the car
const prompt = require("prompt-sync")({ sigint: true });
const speed = prompt(" Enter Car speed  " )
let points = 0;
//function to store speed information
function CarSpeed(speed) {
    if (speed< 70) //if the speed is less than 70 then OK is printed
    { 
        return "OK"
    } else 
        points= ((speed - 70)/5)//points is calculated after the maximum speed has been passed..
        //this calculated by taking the initial speed of the car minus the speed limit then divide the out put by 5 to get total points


           if (points<=12){//if the point is less 12 then its returned but if its more than 12 License is suspended
return points;
           }

else {
        return "license Suspended"
    }
}

console.log(CarSpeed(speed))//call the function