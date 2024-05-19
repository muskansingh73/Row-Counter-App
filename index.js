
// let firstBatch = 5
// let secondBatch = 10

// let count = firstBatch + secondBatch ;

// console.log(count)

// let myAge = 21;
// console.log(myAge)

// let myAge = 21
// let humanDogRatio = 7

// let myDogAge = myAge*humanDogRatio

// console.log(myDogAge)


// let count = 5

// count = count + 1


// console.log(count);

// let bonusPoints = 50; 
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints);

// const increment = () => {
//     console.log("button is clicked");
// }

// function countdown(){
//     for(let i=5; i>=1; i--){
//         console.log(i);
//     }
// }



// function count(){
//     let count = 0;

// }

// function number(){
//     console.log(42);
// }

// number();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 35;

// function addAll(){
//     let total = lap1+ lap2 +lap3;
//     console.log(total)
// }

// addAll();

// function increment(){
// }


// let lapComplete = 0;
// function incrementLap(){
//     lapComplete = lapComplete +1
// }

// incrementLap()

// console.log(lapComplete)

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0

function increment(){
    count += 1
    countEl.textContent = count;
}



function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0


    console.log(count)
}

function reset(){
    count=0;
    countEl.textContent=count
}

let timeEl = document.getElementById("time-el");

setInterval(() =>{
    let d = new Date();
    timeEl.textContent = d.toLocaleTimeString();
}, 1000)

let dateEl = document.getElementById("date-el");

setInterval(() =>{
    let t = new Date();
    dateEl.innerHTML = t.toLocaleDateString();
})














// let fname = "Muskan"
// let noti = "You have a notification";
// // console.log(fname + ", "+ noti)
// let messageToUser = fname + ", " + noti

// console.log(messageToUser)

// let fname = "Muskan Singh";
// let greeting = "Hii my name is"
// let myGreeting = greeting +" "+ fname
// console.log(myGreeting)

// console.log(4+5)
// console.log(100 + "100")

//  let welcomeEl = document.getElementById("welcome-btn")

//  let fname = "Muskan Singh"
//  let greeting = "Hii Welcome to our Website"

//  welcomeEl.innerText = greeting + " " + fname;

// //  welcomeEl.innerText = welcomeEl.innerText + "❤️"  ---> This can be written in this format also

// welcomeEl.innerText += "❤️"