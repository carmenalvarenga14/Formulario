//obtener informacion de la forma
const nombre =document.getElementById("name");
const correo =document.getElementById("correo");
const trabajo= document.getElementById("trabajo");
const contac= document.getElementById("phone");
const informacion = document.getElementById("info");
//llamar la formula

const form =document.getElementById ("forma");

//constante de contenedor del contenido inyectado con js

const contenedor = document.getElementById("contenedor")


//crear evenlistener para la form


form.addEventListener( "submit" , (event) =>{
    event.preventDefault();

    //crear un objeto que tenga los valorres de la forma

    const formulario ={
        name: nombre.value,
        email: correo.value,
        work: trabajo.value,
        telefono: contac.value,
        info:informacion.value,

    }

    const {name, email, work, telefono, info} = formulario;

    const cuadrohtmlconInfo = crearCuadroDeforma(name, email, work, telefono, info);

    console.log(formulario);

     contenedor.insertAdjacentHTML('beforeend', cuadrohtmlconInfo);
});
  



// llamar el boton submit 
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    console.log(e.target)
});

/crear una funcion que nos retorne contenido html dianmicamente/



function crearCuadroDeforma( Name, email, Work, telefono, info) {
    
    const cuadrohtml = `
    <section class="foot">

    <div class="foot__cont3">
    <img src="./assets/img/mariposa.webp" class="foot_cont3_image" alt="image">
    <h4 class="foot_cont3image_name">${Name}</h4>
    <p class="foot_cont3image_name">${email}</h4>
    <p class="foot_cont3image_name">${Work}</h4>
    <p class="foot_cont3image_name">${telefono}</h4>
    <p class="foot_cont3image_name">${info}</h4>
 </div>
      

   </section>


   `;

    return cuadrohtml;
}
    
// Llamar al button submit


const  boton = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  console.log(e.target)
});

// Validar nombre
/*function validarNombre(nombre) {
  if (nombre != " ") {
    return true;
  }
}*/