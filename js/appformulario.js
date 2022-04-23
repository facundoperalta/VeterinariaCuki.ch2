// formulario
const enviar = document.querySelector("#enviar")
const nombre = document.querySelector("#datospersonales")

enviar.addEventListener("click", () => {
    const confirmation = confirm("¿Estás seguro de querer enviar este mensaje?");
    (confirmation)? alert(`Gracias por tu mensaje ${nombre.value}`): alert(`No hay problema ${nombre.value}`);
    
})