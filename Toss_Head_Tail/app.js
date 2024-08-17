
function toss() {
    let coin = ['head', 'tail']
    let toss = coin[Math.floor(Math.random() * 2)]
    if(toss == 'head'){
        document.getElementById('result').innerText = "HEAD'S";
    }else{
        document.getElementById('result').innerText = "TAIL'S";
    }
}