



function agregarLista() {

    //obtenemos el valor del campo de la lista 
    let nuevalistaTexto = document.getElementById("nuevaLista").value; //value guarda los datos escritos en el input
    
    //validamos que el campo no este vacío
    if (nuevalistaTexto === ""){
        alert("Por favor ingrese una tarea")
        return; //para que vuelva y continue la ejecucuión
    }
    
    //crear elemento en la lista
    let nuevaLista = document.createElement("li"); //esta propiedad crea una nueva etiqueta en el DOM
    nuevaLista.textContent = nuevalistaTexto + " "; 
    
    //crear boton eliminar
    let btneliminar = document.createElement("button");
    btneliminar.textContent = "Eliminar";
    btneliminar.classList.add('eliminar');

    btneliminar.onclick = function() {
        nuevaLista.remove();
    }

    //agregar boton de eliminar al elemento de la lista
    nuevaLista.appendChild(btneliminar);

    //agregar el elemento a la lista
    document.getElementById("listaTareas").appendChild(nuevaLista);

    //limpiar el cuadro de texto
    document.getElementById("nuevaLista").value = "";

}


//Permitir agregar lista/texto al presionar enter
document.getElementById('nuevaLista').addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        agregarLista();
    }
})



//Carrusel de Atracciones

let indiceActual = 0;
mostrarSlide(indiceActual);

function cambiarSlide(n) {
    mostrarSlide(indiceActual += n);
}

function mostrarSlide(n) {
    let i;
    let slides = document.getElementsByClassName("carrusel-slide");
    if (n >= slides.length) { indiceActual = 0; }
    if (n < 0) { indiceActual = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[indiceActual].style.display = "block";
}