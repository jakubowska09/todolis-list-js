let exo6 = document.querySelector('#exo6');
let bt6 = document.querySelector('#demoex6');

function masquer() {
    let livible = document.querySelector('.active');
    exo6.classList.add("active");
    livible.classList.remove('active')

}
bt6.addEventListener("click", masquer);






let rep = document.querySelector(".rep")
rep.addEventListener("click", function () {
    let aperso = document.querySelector(".a").value;
    let bperso = document.querySelector(".b").value;
    let resultat = document.querySelector(".resultat")
    resultat.innerText = Number(aperso) + Number(bperso);

})







