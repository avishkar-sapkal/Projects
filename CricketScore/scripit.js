const buttons = document.querySelectorAll('.over');

let id;
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        id = e.target.id;
        over(id);
    });
});

let totalscore = 0;
let currentover = 0;
let currentscore = 0;
let balls = [];       // To store the balls in an over
let ballcount = 0;
let overcount = 0;
let wicketcount = 0;
let overScores = [];  // To store the score after every over

const ballid = document.getElementById('ball');
const tscore = document.getElementById('runs');
const overscore = document.getElementById('overscore'); 

function over(id) {
    if (wicketcount === 10) {
        alert("All out");
        newover();
        
    }

    if (ballcount === 6) {
        currentover++;
        overcount += currentover;
        totalscore += currentscore;
        console.log("currentover " + currentover);
        console.log("currentscore " + currentscore);
        overScores.push(`Over ${ currentover }:  Runs ${ currentscore}`);
        updateOverScore();
        newover();
    }

    if (id == 'W') {
        ballcount++;
        wicketcount++;
        //ballid.innerText += 'W';
        // console.log("Wicket is clicked  "+ballid.innerText);
    } else if (id == '0') {
        ballcount++;
    } else if (id == 'noball' || id == 'WIDE') {
        currentscore++;
    } else {
        ballcount++;              
        currentscore += +id;  //  unary plus to convert id(string) convert into integer we can also use(parseInt(buttonid) , Number(buttonid)) 
    }

    balls.push(id);                                        // push :- add elements at the end of the array used here t display balls 
    ballid.innerText = `Balls: ${balls.join(' ')}`;        //join:- Creates a string by concatenating all elements of an array
    tscore.innerText = `Total-Score: ${totalscore + currentscore}`;
}

function newover() {
    balls = [];
    ballcount = 0;
    currentscore = 0; 
}

function updateOverScore() {
    overscore.innerHTML = overScores.join('<br>');         // Every time over completed <br> will move to new line
    
}
