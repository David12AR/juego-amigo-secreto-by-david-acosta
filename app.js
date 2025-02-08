// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosArray = [];// Se crea el arreglo vacio.

//Se crea la función agregar amigo para que sea agregado al arreglo.
function agregarAmigo(){
    
    let amigoUsuario = document.getElementById('amigo').value;//Asignar
    if (amigoUsuario == ""){
        alert("Por favor inserta un nombre")
    }else{
        listaAmigosArray.push(amigoUsuario);
    }
    limpiaTextBox();
    recorrerArray();
    return;
    
    
}


function recorrerArray(){
    let listaHtml = document.getElementById('listaAmigos');
    listaHtml.innerHTML="";
    listaAmigosArray.forEach(function(amigoUsuario){
        console.log(amigoUsuario)
        let agregarAmigoLista =document.createElement('li');
        agregarAmigoLista.textContent = amigoUsuario;
        listaHtml.appendChild(agregarAmigoLista);

    });

}



function limpiaTextBox(){
    document.getElementById('amigo').value = "";
}

