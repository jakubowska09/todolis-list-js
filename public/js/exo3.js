let exo3 = document.querySelector('#exo3');
let bt3 = document.querySelector('#demoex3');
function donate() {
    let livible = document.querySelector('.active');
    exo3.classList.add("active");
    livible.classList.remove('active')

}
bt3.addEventListener("click", donate);



