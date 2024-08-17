const btn = document.querySelector('#darkmode')

function darkmode(){
    btn.addEventListener('click',()=>{
        btn.style.backgroundColor = 'black';
    })
}