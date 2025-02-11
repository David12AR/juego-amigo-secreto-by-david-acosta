    // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let listaAmigosArray = [];// Se crea el arreglo vacio.
    let listaHtml = 0;

    //Se crea la función agregar amigo para que sea agregado al arreglo.
    function agregarAmigo(){
        
        let amigoUsuario = document.getElementById('amigo').value;//Asignar el valor de la variable amigoUsuario a el input del html desde su ID.
        
        //Condicional para verificar si la caja de texto esta vacia.
        if (amigoUsuario == ""){
            alert("Por favor inserta un nombre")
        }else{
            listaAmigosArray.push(amigoUsuario);
        }
        //Llamado de función para limpiar caja después de ingresar un nombre.
        limpiaTextBox();
        //Llamado de función para recorrer el arreglo y mostrar los nombres en un listado.
        recorrerArray();
        return;
        
        
    }

    //Función para recorrer el arreglo e ir agregando a la lista de HTML los nombres.
    function recorrerArray(){
        listaHtml = document.getElementById('listaAmigos');
    // Asignar los valores a la lista de HTML <ul>, llamada por ID.
        limpiaLista();// Borrar los elementos de lista anteriores para que no se repitan.
        //Bucle for each para recorrer el arreglo y mostrar su valor.
        listaAmigosArray.forEach(function(amigoUsuario){
            console.log(amigoUsuario)
            let agregarAmigoLista =document.createElement('li');// Crear elemento de la lista en HTML y asignarla a la variable agregarAmigoLista.
            agregarAmigoLista.textContent = amigoUsuario;// Asignar el valor de la variable al <li> del HTML.
            listaHtml.appendChild(agregarAmigoLista);//Agregar los elementos de <li> a la lista <ul>.

        });

    }


    function sortearAmigo(){
        limpiaLista();
        if (listaAmigosArray == ""){
        alert("No es posible sortear porque no hay amigos en la lista, por favor ingresar nombres");
        }else{
        let valorMaximoArray = listaAmigosArray.length-1; 
        let numeroAleatorio = Math.floor(Math.random()*valorMaximoArray)+1;
        let nombreGanador = listaAmigosArray[numeroAleatorio];
        console.log(numeroAleatorio);
        console.log(nombreGanador);
        let resultadoHTML = document.getElementById('resultado');
        resultadoHTML.innerHTML = `El amigo secreto ganador es ${nombreGanador}`;
        }
        }

    //Función para limpiar caja de texto donde ingresa nombres.
    function limpiaTextBox(){
        document.getElementById('amigo').value = "";
    }

    function limpiaLista(){
        listaHtml.innerHTML="";
    }

    function permitirSoloLetras(){
        let soloLetras = document.getElementById("amigo");
        soloLetras.addEventListener("input",(e)=>{
            e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        })

    }

    permitirSoloLetras();





