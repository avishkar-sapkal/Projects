let userscore = 0;
let computerscore = 0;

// This when i used onclick function on button directly

// let choices = document.querySelector('.choice');                         

// function playgame(userchoice) {
//     let choice = ['rock', 'paper', 'scissors'];
//     let computerchoice = choice[Math.floor(Math.random() * 3)]

//     // console.log(userchoice,computerchoice);

//     if (userchoice === computerchoice) {
//         console.log('tie');
//         document.getElementById('winner').innerHTML = 'Match TIE ';
//     }
//     else if (userchoice == 'rock' && computerchoice == 'paper' ||
//         userchoice == 'paper' && computerchoice == 'scissors' ||
//         userchoice == 'scissors' && computerchoice == 'rock') {
//         console.log('computer win');
//         computerscore++;
//         document.getElementById('comp-score').innerHTML = computerscore;
//         document.getElementById('winner').innerHTML = 'COMPUTER Win';
//     }
//     else {
//         userscore++;
//         document.getElementById('user-score').innerHTML = userscore;
//         document.getElementById('winner').innerHTML = 'YOU Win';
//         console.log('you win');
//     }
// }


// This using targeting the id name using the target and addEVentListener

const choice = document.querySelectorAll('.choices')

choice.forEach(choices=>{
    choices.addEventListener("click",(e)=>{
        userchoice = e.target.id
        console.log(e.target.id)
        playgame(userchoice);
    })
})

function playgame(userchoice) {
    let choice = ['rock', 'paper', 'scissors'];
    let computerchoice = choice[Math.floor(Math.random() * 3)]

    console.log(userchoice,computerchoice);

    if (userchoice === computerchoice) {
        console.log('tie');
        document.getElementById('winner').innerHTML = 'Match TIE ';
    }
    else if (userchoice == 'rock' && computerchoice == 'paper' ||
        userchoice == 'paper' && computerchoice == 'scissors' ||
        userchoice == 'scissors' && computerchoice == 'rock') {
        console.log('computer win');
        computerscore++;
        document.getElementById('comp-score').innerHTML = computerscore;
       
        document.getElementById('winner').innerHTML = 'COMPUTER Win';
    }
    else {
        userscore++;
        document.getElementById('user-score').innerHTML = userscore;
        document.getElementById('winner').innerHTML = 'YOU Win';
        console.log('you win');
    }
}