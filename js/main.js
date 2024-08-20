function saludar(){
    alert("Bienvenid@ a nuestra Tienda de Insumos Informáticos");
    }
    saludar();

function pedirDatos(){
    let nombreIngresado = prompt("Ingresar Nombre");
    let apellidoIngresado = prompt("Ingresar Apellido");
    let anoNacimiento = parseInt(prompt("Ingresar Año de Nacimiento"));
    saludarCliente();

function saludarCliente(){
    alert ("Hola " + nombreIngresado + " " + apellidoIngresado);
    }
    if (anoNacimiento >= 2006 || anoNacimiento <= 1900){
        alert ("No se permiten datos errones o menores de edad");
        window.close();
    }else {
        
        mostrarProductos() 
    }
}

function mostrarNisuta(){
    lista = prompt("Teclado Nisuta NS-KB8812B: $2.500 \nMouse Nisuta NS-MO8813: $1.200 \nAuriculares Nisuta NS-AUD6898: $3.500 \n\nPresione 1 para volver al menú anterior \nPresione 2 para salir")
    if (lista === "1") {
        mostrarProductos();
    } else (lista === "2"); {
        window.location.href = "https://www.google.com.ar";    

    } 
}

function mostrarGenius(){
    lista = prompt("Mouse Genius DX-120: $1.800 \nTeclado Genius KB-100: $2.800 \nParlantes Genius SP-HF160: $4.200 \n\nPresione 1 para volver al menú anterior \nPresione 2 para salir")
    if (lista === "1") {
        mostrarProductos();
    } else (lista === "2"); {
        window.location.href = "https://www.google.com.ar";    

    } 
    }

function mostrarLogitech(){
    let lista = prompt("Mouse Logitech M185: $7.000 \nTeclado Logitech K120: $4.500 \nAuriculares Logitech H340: $12.000 \n\nPresione 1 para volver al menú anterior \nPresione 2 para salir");

    if (lista === "1") {
        mostrarProductos();
    } else (lista === "2"); {
        window.location.href = "https://www.google.com.ar";    

    } 
    }

function mostrarProductos(){
    
    lista = prompt("Elija que lista quiere ver: \n 1-Nisuta \n 2-Genius \n 3-Logitech")

    while (lista !== "4"){
        if (lista === "1"){
            mostrarNisuta()
        }
        else if (lista === "2"){
            mostrarGenius()
        }
        else if (lista === "3"){
            mostrarLogitech()
        }
        else{
            mostrarProductos()
        }
        }
    }

pedirDatos();