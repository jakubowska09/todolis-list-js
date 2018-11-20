let cadre = document.getElementById("entre");
let divTach = document.getElementById("ecrire");


function publier() {
    let taches = document.createElement("div");


    var nom = document.getElementById("list").value
    taches.innerHTML = nom + '<span ><i class="fas fa-check"></i></span> <span><i class="fas fa-pencil-alt"></i></span> <span><i class="fas fa-trash-alt"></i></span>';
    divTach.appendChild(taches).classList.add("tacheee", "contour");


}
cadre.addEventListener("click", publier);



let btall = document.getElementById("all")
let bttodo = document.getElementById("todo")
let btdone = document.getElementById("done")










