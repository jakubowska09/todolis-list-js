let cadre = document.getElementById("entre");
let divTach = document.getElementById("ecrire");
let faire = document.getElementById("all");
let aujoudhui = document.getElementById("todo");
let donetermine = document.getElementById("done");
let cot = document.querySelector(".contour")
let terminer = document.querySelector(".termine")
let input = document.querySelector(".text-center");









function publier() {
    let taches = document.createElement("div");


    var nom = document.getElementById("list").value
    taches.innerHTML = '<div>' + nom + '</div>' + '<div><i class="fas fa-check check"></i><i class="fas fa-pencil-alt edit"></i><i class="fas fa-trash-alt termine"></i> <i class="fas fa-lock lock"></i><i class="fal fa-eraser gommme"></i></div> ';


    if (nom != "") {
        console.log("ok")
        divTach.appendChild(taches).classList.add("tacheee", "contour");

    }
    else {
        console.log("le champs est obligatoire");
        document.querySelector("#list").placeholder = "Le champs est obligatoire";
        input.classList.add("error");

        console.log(input);

    }
    //  button valide
    let valide = document.querySelector(".check");

    function confirmer() {
        let parent = event.target.parentElement.parentElement;
        console.log(parent);
        console.log("1");
        if (parent.classList.contains('blue')) {
            parent.classList.remove("blue");
            //parent.classList.add(".contour")
            console.log("2");
        }
        else {
            parent.classList.add("blue");
        }
    }
    console.log(valide);
    valide.addEventListener("click", confirmer);
    // buttom delete
    let q = document.querySelector(".termine")
    function enlever() {
        q.addEventListener("click", () => {
            divTach.removeChild(taches);

        })
    }
    q.addEventListener("click", enlever);
    // button edit
    l
    let edit = document.querySelector(".edit");
    let kaka = document.querySelector(".lock");
    let gom = document.querySelector(".gommme");
    function modifier() {

    }


}
cadre.addEventListener("click", publier);










