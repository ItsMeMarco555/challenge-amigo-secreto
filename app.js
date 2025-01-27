// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];

function agregarAmigo() {
    let nombreAmigoInput = document.getElementById('amigo'); 
    let nombreAmigo = nombreAmigoInput.value.trim(); 

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre de amigo.");
    } else if (amigos.includes(nombreAmigo)) { 
        alert("El nombre ya está en la lista. No se permiten duplicados.");
    } else {
        amigos.push(nombreAmigo); 
        alert("El nombre de su amigo fue ingresado con éxito.");
        nombreAmigoInput.value = ""; 
        actualizarLista(); 
    }
}


function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length > 0) {
      let random =  Math.floor(Math.random() * amigos.length);
      let resultadoAmigo = document.getElementById('resultado');
      resultadoAmigo.textContent = `El amigo ganador es: ${amigos[random]}`;
    } else {
        alert("No hay amigos en la lista");
    }
}