let button = document.querySelectorAll('.over button')

button.forEach(button => {                                   // this is for taking the id's of the buttons 
    button.addEventListener('click', function (e) {           // directly cannot use addEventListener bcoz it is nodelist so write it into ForEach
        let buttonid = button.id;
        displayballs(buttonid);                               // to access the buttonid outside the addEventListener
        // console.log(buttonid);
        console.log("My current id is "+e.target.id);         // using this also we can get the id 
    });
});


let Totalscore = 0;
let balls = [];
let ballcount = 0;
let wicketcount = 0;
let overcount = 0;

const displayball = document.querySelector('.displayballs h4')
const displayscore = document.querySelector('.displayscore h5')
const overs = document.querySelector(".displayballs p")
const currentscore = document.querySelector(".displayballs h6")

function displayballs(buttonid) {

    if (buttonid == 'wideball' || buttonid == 'noball') {
        Totalscore++;
        displayscore.innerText = `Totalscore:- ${Totalscore}`

    } else if (buttonid === 'wicket') {
        ++wicketcount;
        ballcount++;
        displayball.innerText += " W";
        console.log("wicket is cliked ");
        console.log("ballcount " + ballcount);
    } else if (buttonid === 'dotball') {
        ballcount++;
        displayball.innerText += ' . ';
        console.log("ballcount " + ballcount);
    }
    else {
        ballcount++;
        console.log("ballcount " + ballcount);
        Totalscore = Totalscore + + buttonid;                                                // convert buttonid string into integer  we can also use(parseInt(buttonid) , Number(buttonid))
        displayscore.innerText = `Totalscore:- ${Totalscore}`
    }
    let overscore =0;
    if (ballcount === 7) {
        ++overcount;
        console.log("overcount " + overcount);
        overscore = Totalscore
        newover();
    }
    if (wicketcount === 10) {

        alert("ALL-OUT Your Inning is over");
        newover();
    }
    balls.push(buttonid)                                            // push :- add elements at the end of the array used here t display balls 
    console.log("Balls " + balls);
    displayball.innerText = `Balls: ${balls.join(' ')}`;            //join:- Creates a string by concatenating all elements of an array
    overs.innerText = `Overs: ${overcount}`;
    currentscore.innerText = `Overscore ${overscore}`;
}

function newover() {
    balls = [];
    ballcount = 0;
}
