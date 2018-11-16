// button = contenu
let exo5 = document.querySelector('#exo5');
let bt5 = document.querySelector('#demoex5');
function tapir() {
    let livible = document.querySelector('.active');
    exo5.classList.add("active");
    livible.classList.remove('active')

}
bt5.addEventListener("click", tapir);



// Animation
// let bn = document.querySelector(".img");


// function ajouter() {
//     var button = document.createElement("vert");
//     var y = document.createTextNode("img");
//     button.appendChild(y);
//     document.body.appendChild(button);
// }
// bn.addEventListener("click", ajouter);

let btnajouter = document.querySelector(".vert")
btnajouter.addEventListener("click", ajouter)

function ajouter() {
    let img = document.createElement("img")
    img.setAttribute("src", "../../domimg/wireframe.png");
    document.querySelector(".paty").appendChild(img);
}




