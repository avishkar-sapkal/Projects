const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// used addeventlistener
buttons.forEach(function (butt) {
    butt.addEventListener('click', function (e) {
        //console.log(e.target.id);                                         // here e.target.id give by only name of the id
        if (e.target.id === "pink") {
            body.style.backgroundColor = e.target.id;             
        }
        if (e.target.id === "black") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "orange") {
            body.style.backgroundColor = e.target.id;
        }
    })
})
