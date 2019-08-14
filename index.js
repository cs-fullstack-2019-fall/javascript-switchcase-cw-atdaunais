//Problem 1
let userNum = prompt("Enter a number between 1 and 5. This will print in the console.");

switch(userNum){
    case "1":
        console.log("1");
        break;
    case "2":
        console.log("2");
        break;
    case "3":
        console.log("3");
        break;
    case "4":
        console.log("4");
        break;
    case "5":
        console.log("5");
        break;
}

//Problem 2
let userBinary = prompt("Enter any 3 digit binary number and this will print it in the console.");

switch(userBinary){
    case "1":
        console.log("1");
        break;
    case "10":
        console.log("2");
        break;
    case "11":
        console.log("3");
        break;
    case "100":
        console.log("4");
        break;
    case "101":
        console.log("5");
        break;
}

//Problem 3
let attendanceArray = [];
let signInPerson = "";

function addPerson(){
    let personName = prompt("What is your full name?");
    attendanceArray.push(personName + ": " + signInPerson); //shows name and what type of person signed in
    console.log(attendanceArray);
}

while(signInPerson !== "q") {
    signInPerson = prompt("Are you a teacher, student, or parent? Press 'q' to quit this program.");
    switch (signInPerson) {
        case "q":
            break;
        case "teacher":
            addPerson();
            break;
        case "student":
            addPerson();
            break;
        case "parent":
            addPerson();
            break;
    }
}