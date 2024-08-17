let timer = document.querySelector('.timer');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stoponeven = document.getElementById('stoponeven');
let stoponodd = document.getElementById('stoponodd');


let msec = 0;
let ssec = 0;
let mins = 0;
let redSignalCount = 30
let yelloSignalCount = 5;
let greenSignalCount = 120;

let currentcolor = 'red';
let currentcount = 0

let timerId = null;

start.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stop.addEventListener('click', function () {
    clearInterval(timerId);
});

reset.addEventListener('click', function () {
    clearInterval(timerId);
    msec = 0;
    ssec = 0;
    mins = 0;
    currentcolor = 'red';
    currentcount = 0;
    timer.innerHTML = `00 : 00 : 00`;
});

stoponeven.addEventListener('click', function () {
    if (ssec % 2 == 0) {
        clearInterval(timerId);
    } else {
        alert('you stop on odd number');
    }
});
stoponodd.addEventListener('click', function () {
    if (ssec % 2 != 0) {
        clearInterval(timerId);
    } else {
        alert('you stop on even number');
    }
});


function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        ssec++;
        currentcount++;
    }
        if (ssec == 60) {
            ssec = 0;
            mins++;
        }
        // let signalColor = 'red';
        // // let greenSignalColor = 'green';
        // console.log('Color:', ssec);
        //     if (ssec < redSignalCount) {
        //         timer.setAttribute('style', 'background-color:' + signalColor);
        //     } else {
        //         signalColor = 'yellow'
        //         timer.setAttribute('style', 'background-color:' + signalColor);
        //     }
        // }
        switch (currentcolor) {
            case 'red':
                //timer.setAttribute('style', 'background-color:red')
                timer.style.backgroundColor = 'red';
                if (currentcount >= redSignalCount) {
                    currentcolor='yellow'
                    currentcount = 0;
                }
                break;
            case 'yellow':
                timer.setAttribute('style', 'background-color:yellow')
                if (currentcount >= yelloSignalCount) {
                    currentcolor = 'green'
                    currentcount = 0;
                }
                break;
            case 'green':
                timer.setAttribute('style', 'background-color: green');
                if (currentcount >= greenSignalCount) {
                    currentcolor='red'
                    currentcount=0;
                }
                break;

        }
        let msecStr = msec < 10 ? `0${msec}` : `${msec}`;
        let ssecStr = ssec < 10 ? `0${ssec}` : `${ssec}`;
        let minsStr = mins < 10 ? `0${mins}` : `${mins}`;
        timer.innerHTML = `${minsStr} : ${ssecStr} : ${msecStr}`;
        // if(ssec%2==0){
        //   timer.setAttribute('style','background-color: red;')    
        // }else{
        //     timer.setAttribute('style','background-color: green;')    
        // }

        // let msecStr;
        // if(msec<10){
        //     msecStr=`0${msec}`;
        // }else{
        //     msecStr=`${msec}`;
        // }
}