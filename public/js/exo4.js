let exo4 = document.querySelector('#exo4');
let bt4 = document.querySelector('#demoex4');
function planquer() {
    let livible = document.querySelector('.active');
    exo4.classList.add("active");
    livible.classList.remove('active')

}
bt4.addEventListener("click", planquer);


let cmt = 0;

function bouge() {

    document.querySelector(".un").classList.toggle("d-none");
    document.querySelector(".deux").classList.toggle("d-none");
    cmt = cmt + 1;
    document.querySelector(".texte").innerText = cmt;


}

document.querySelector(".une").addEventListener("click", bouge);

