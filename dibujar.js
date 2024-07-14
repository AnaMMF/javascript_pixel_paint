/**Alumno:Ana María Moya Fernández
Entorno utilizado: Visual Studio Code*/

//Me aseguro de que se ha cargado todo el formulario
window.onload = function () {
    //Declaro las variables necesarias
    let tablero = document.getElementById('zonadibujo');
    let colorSeleccionado = 'color1';//establezco color1 para que concuerde con el seleccionado actualmente en el formulario
    let pintar = false;
    let contador = 1;


    // Creo el tablero con un bucle for anidado en otro
    for (let i = 0; i < 30; i++) {//El primer bucle genera las 30 filas

        for (let j = 0; j < 30; j++) {//El segundo bucle genera las 30 columnas, o 30 celdas de cada fila

            let celda = document.createElement('div');//se crea la celda, escojo un div para crearla
            celda.setAttribute('id', 'celda' + contador); /*identifico cada celda, al principio intente udar el id 
            para controlar donde se hacia clic pero no funciono, aun asi me parece buena practica dejarle un 
            identificador a cada celda*/
            celda.setAttribute('class', 'celda'); // asigno la clase celda a cada una
            //modifico las propiedades para dar el estilo que se pide a las celdas
            celda.style.width = '10px';
            celda.style.height = '10px';
            celda.style.border = '1px solid black';
            celda.style.marginRight = '7px';
            celda.style.float = 'left';

            //se añade como un nodo nuevo al dentro del dib zonadibujo al final.
            tablero.appendChild(celda);
            contador++;
        }

        let salto = document.createElement('br');/*se hacen las filas con el salto de linea, sin el aparecen 
        todas las celdas seguidas*/
        tablero.appendChild(salto);

    }

    
    //Guardo en una variable los elementos con clase celda
    let celdas = document.getElementsByClassName('celda');
    /*Cuando el raton se mueve, si esta pintar en true cambia la clase del elemento sobre el paso el ratón a la 
    que hay en la variable colorSeleccionado*/
    for (let i = 0; i < celdas.length; i++) {

        celdas[i].onmousemove = function () {
            if (pintar) {
                this.className = colorSeleccionado;/*asigno los valores css asociados a la clase del elemnto a la 
                variable que luego pintara las celdas*/
            }
        };
    }


    //Guardo en una variable los td de la tabla a traves de su id paleta
    let colores = document.getElementById('paleta').getElementsByTagName('td');
    //con un bucle recorro el array almacenado y le asigno el evento onclick a cada elemento
    for (let i = 0; i < colores.length; i++) {
        colores[i].onclick = function () {
            //cuando se cliquea sobre uno de los td se recoge el que tiene asignado en ese momento la clase seleccionado
            let colorPrevio = document.getElementsByClassName('seleccionado')[0];
            if (colorPrevio) {
                /*elimino la clase seleccionado del elemento que la tenia hasta el momento en que se ha hecho clic 
                sobre uno nuevo*/
                colorPrevio.classList.remove('seleccionado');
            }
            this.classList.add('seleccionado');//se añade la clase seleccionado al elemento sobre el que hacemos clic
            colorSeleccionado = this.className.split(' ')[0];/*reflejo en el codigo para su posterior uso el cambio 
            en colorSeleccionado*/
        };
    }

    /*Si se presiona la tecla izquierda del raton cambia el estado de pintar y se cambia el texto del td con id 
    pincel para informar al usuario*/
    document.onmousedown = function (event) {
        if (pintar == true) {
            pintar = false;
            let textoDesactivado = document.createTextNode('PINCEL DESACTIVADO');
            pincel.replaceChild(textoDesactivado, pincel.firstChild);
        }
        else {
            pintar = true;
            let textoActivado = document.createTextNode('PINCEL ACTIVADO');
            pincel.replaceChild(textoActivado, pincel.firstChild);
        }

    };
}
