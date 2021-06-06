let trafficLightColor="Red"; //Switch Case Course work
switch (trafficLightColor) {
    case "Red":
        console.log("You can't go!");
        break;
    case "Green":
        console.log("You can go ahead!");
        break;
    case "Yellow":
        console.log("You can ready to go!");
    case " ":
        console.log("Traffic Light is not work!");
        break;
    default:
        console.log("Traffic Light work flow!");
}

let score=prompt("Please enter your english score?"); //If Condition Course work
if (score>40 && score<=50) 
    console.log("Your english skill is Basic!");
else if (score >=50 && score <=65) 
    console.log("Your englis level is intermediate!");
else if (score >65 && score<=80) 
    console.log("Your englis level is advance");
else if (score >80) 
    console.log("Your englis level is excellence");
else 
    console.log("Your english is not good!");

function myNumber(number){
    if(number%2!=0) 
        console.log("Your number is odd number!");
    else
        console.log("Your number is even number!");
}
myNumber(10);