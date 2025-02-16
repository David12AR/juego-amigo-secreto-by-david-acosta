    // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let listaAmigosArray = [];// Se crea el arreglo vacio.
    let listaHtml = 0; //Se declara variable de lista para los nombres de amigos.

    //Se crea la función agregar amigo para que sea agregado al arreglo.
    function agregarAmigo(){
        
        let amigoUsuario = document.getElementById('amigo').value;//Asignar el valor de la variable amigoUsuario a el input del html desde su ID.
        
        //Condicional para verificar si la caja de texto esta vacia.
        if (amigoUsuario == ""){
            alert("Por favor inserta un nombre")
        }else{
            listaAmigosArray.push(amigoUsuario);
        }
       
        limpiaTextBox(); //Llamado de función para limpiar caja después de ingresar un nombre.
        recorrerArray();//Llamado de función para recorrer el arreglo y mostrar los nombres en un listado.
        return;// Retorna el valor requerido
    }

    //Función para recorrer el arreglo e ir agregando a la lista de HTML los nombres.
    function recorrerArray(){
        listaHtml = document.getElementById('listaAmigos');// Asignar los valores a la lista de HTML <ul>, llamada por ID.
        limpiaLista();// Borrar los elementos de lista anteriores para que no se repitan.
        
        //Bucle for each para recorrer el arreglo y mostrar su valor.
        listaAmigosArray.forEach(function(amigoUsuario){
            console.log(amigoUsuario)
            let agregarAmigoLista =document.createElement('li');// Crear elemento de la lista en HTML y asignarla a la variable agregarAmigoLista.
            agregarAmigoLista.textContent = amigoUsuario;// Asignar el valor de la variable al <li> del HTML.
            listaHtml.appendChild(agregarAmigoLista);//Agregar los elementos de <li> a la lista <ul>.
        });
        return;// Retorna el valor requerido
    }

//Función para sortear al azar los amigos ingresados.
    function sortearAmigo(){
        limpiaLista();// Llamar función para limpiar la lista y evitar repeticiones.
        //Condicional para validar si hay elementos en la lista de lo contrario no se sortea.
        if (listaAmigosArray == ""){
        alert("No es posible sortear porque no hay amigos en la lista, por favor ingresar nombres");
        }else{
        let valorMaximoArray = listaAmigosArray.length-1; // Se declara variable para tomar el tamaño de la lista.
        let numeroAleatorio = Math.floor(Math.random()*valorMaximoArray)+1; // Se declara variable asignandole la función matematica para obtener un numero al azar y aproximarlo al entero mas cercano.
        let nombreGanador = listaAmigosArray[numeroAleatorio];//Se declara variable para indicar que en la lista se tendra en cuenta el numero aleatorio obtenido en el paso anterior que sera el indice del array.
        console.log(numeroAleatorio);
        console.log(nombreGanador);
        let resultadoHTML = document.getElementById('resultado');//Se trae el elemento resultado que es de tipo lista <ul> el cual es asignado a la variable declarada.
        resultadoHTML.innerHTML = `El amigo secreto ganador es ${nombreGanador}`;//Asignar mensaje con nombre ganador a la variable y esta lo asignara a su respectivo <ul> en HTML.
        }
        return;// Retorna el valor requerido
        }

    //Función para limpiar caja de texto donde ingresa nombres.
    function limpiaTextBox(){
        document.getElementById('amigo').value = "";
        return;// Retorna el valor requerido
    }
    //Función para limpiar la lista de nombres.
    function limpiaLista(){
        listaHtml.innerHTML="";
        return;// Retorna el valor requerido
    }
//Función para permitir solo letras y una cantidad mámima de caracteres.
    function caracteresTamañoPermitidos(){
        let soloLetras = document.getElementById("amigo");// Asignar el texto del input a la variable, llamada por ID.
        let maxDeCaracteres = 30;// Declara variable de máxmimo de caracteres con su respectivo valor.
        
        soloLetras.addEventListener("input",(e)=>{ //A la variable del input se le asigna este evento para ver en tiempo real lo que se está digitando.
            let valorInicial = e.target.value; // Se asigna el valor del input a la variable declarada como valorInicial.
            let valorPermitido = valorInicial.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');// Se declara variable para asignar el lenguaje natural que son los caracteres pueden estar en la caja de texto o input.

            //Condicional para mostrar en la función mensaje insertar si el valor ingresado es diferente al permitido.
            if (valorInicial != valorPermitido){
                mensajeInsertar("p", "🆎¡Lo siento, solo se permite digitar letras");
    
            } else{
                mensajeInsertar("p", "");
        
            }
            e.target.value = valorPermitido; //Al input se le restringe que se pueda ingresar valorres diferentes de los permitidos.
            
            //Condicioonal para validar si el tamaño maximo del valor permitido es superior al máximo de caracteres permitidos, mostrando un mensaje en la funcion mensajeInsertar.
            if (valorPermitido.length > maxDeCaracteres){
                mensajeInsertar("span", "😔¡Lo siento, no se puede escribir mas de 30 caracteres!");
    
            } else{
                mensajeInsertar("span", "");
            }
                
                e.target.value = valorPermitido.substring(0,maxDeCaracteres);// Al input se le restring digitar mas caracteres de los permitidos.
        })
        return;// Retorna el valor requerido
    }
       

    caracteresTamañoPermitidos();//Llamar función para permitir solo letras y maximo de caracteres.


//Función para insertar un mensaje en cualquier elemento HTML.
    function mensajeInsertar(elemento, texto){
        let mensajeAlerta = document.querySelector(elemento)//Trae el elemento de HTML como parametro y lo asigna a la variable declarada. 
        mensajeAlerta.innerHTML = texto; //Ingresa el texto que se tiene como parametro al elemento de HTML a traves de la variable creada en el paso anterior.
        return;// Retorna el valor requerido
        }
    
    
        
        
    
    

