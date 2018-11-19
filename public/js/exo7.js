let exo7 = document.querySelector('#exo7');
let bt7 = document.querySelector('#demoex7');

function celer() {
    let livible = document.querySelector('.active');
    exo7.classList.add("active");
    livible.classList.remove('active')

}
bt7.addEventListener("click", celer);


// todolist

