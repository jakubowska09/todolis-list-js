let exo4 = document.querySelector('#exo4');
let bt4 = document.querySelector('#demoex4');
function planquer() {
    let livible = document.querySelector('.active');
    exo4.classList.add("active");
    livible.classList.remove('active')

}
bt4.addEventListener("click", planquer);