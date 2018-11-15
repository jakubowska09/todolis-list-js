// let exo2 = document.querySelector('#exo2')

// let btn = document.querySelector('.blockgris2')



// function say() {
//     t.innerText = "iiii"
// }
// btn.addEventListener("click", say)
// section.classList.remove("active")

let exo2 = document.querySelector('#exo2');
let bt2 = document.querySelector("#demoex2");
function cache() {
    let activee = document.querySelector('.active');
    activee.classList.remove('active')
    exo2.classList.add("active");
}
bt2.addEventListener("click", cache);



