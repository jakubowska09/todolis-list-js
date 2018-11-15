var h2 = document.querySelector('.color');
h2.style.backgroundColor = "blue";
h2.style.color = "red";


// let exo1 = document.querySelector('#exo1');
// let bt1 = document.querySelector("#demoex1");
// function store() {
//     let livible = document.querySelector('.livible');
//     livible.classList.remove('livible')
//     exo1.classList.add("livible");
// }
// bt1.addEventListener("click", store);

let exo1 = document.querySelector('#exo1')
let bt1 = document.querySelector('#demoex1')
function store() {
    let livible = document.querySelector('.livible');
    exo1.classList.add("active");
    livible.classList.remove('active')

}
bt1.addEventListener("click", store)
