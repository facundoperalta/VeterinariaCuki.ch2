
// suscripción
const suscription = document.querySelector(".btn-light");

suscription.addEventListener("click", () => {
    alert("¡Las suscripciones se habilitarán pronto!");
    const consulta = confirm("¿Querés dejar una consulta online?");
    (consulta)? window.location = "./contacto.html": alert("Siga navegando en nuestra página");
});



// nosotrxs theme
const light = document.querySelector("#buttonlight");
const dark = document.querySelector("#buttondark");
const main = document.querySelector("main");
const colorletra = document.querySelector(".text-muted");

light.addEventListener("click", () => {
   main.className = "container-fluid d-flex align-items-center justify-content-center bg-light mt-5";
    colorletra.setAttribute("class", "lead text-muted");
})

dark.addEventListener("click", () => {
   main.className = "container-fluid d-flex align-items-center justify-content-center bg-dark mt-5";
   colorletra.setAttribute("class", "lead text-white");
})
