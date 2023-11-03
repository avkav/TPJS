
//Formulario de Suscripción//
//Validaciones

const formulario = document.getElementById('form'); 
const inputs = document.querySelectorAll('#form input');
const expresiones = {	
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.	
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cantidad: /^[1-5]+$/, // Cantidad entre 1 y 5 suscripciones por compra ""  
}

const campos = {
    nombre: false,	
    apellido: false,	
    email: false,
    cantidad: false,
    categoria:false,
	
    	
    
}

const validarFormulario = (e) => {	//fx arrow, para acceder a los names de cada input
    switch (e.target.name) {	//en el caso de que el nombre del input sea usaurio, ejecute x codigo
    	case "nombre":			
        validarCampo(expresiones.nombre, e.target, 'nombre');	//comprueba que lo que ingresó el usuario coincida con la expresión regular de la parte superior	
        break;		
        case "apellido":			
        validarCampo(expresiones.apellido, e.target, 'apellido');		
        break;		
        case "email":			
        validarCampo(expresiones.email, e.target, 'email');			
        break;	
        case "cantidad":			
        validarCampo(expresiones.cantidad, e.target, 'cantidad');			
        break;	
        }
    }


 //expresion: expresion que queremos utilizar para validar el campo. input: es el elemento e.target. Luego el campo puede ser usuario, nombre, etc...       
const validarCampo = (expresion, input, campo) => {	//esto podría haber ido en cada case, pero para optimizar se abstrae en la fx a parte para no repetir el codigo por campo
    if(expresion.test(input.value)){	//validamos nombre, apellido, email y cantidad
        document.getElementById(`group-${campo}`).classList.remove('form-group-wrong');	//template string para tomar el valor que le pasemos a la variable para reutilizar en cada campo.	
        document.getElementById(`group-${campo}`).classList.add('form-group-right');		
        document.querySelector(`#group-${campo} i`).classList.add('fa-circle-check');		
        document.querySelector(`#group-${campo} i`).classList.remove('fa-circle-xmark');		
        document.querySelector(`#group-${campo} .input-error-form`).classList.remove('input-error-form-activo');		
        campos[campo] = true;	//a los efectos de que todos los campos esten cargados
    } else {		
        document.getElementById(`group-${campo}`).classList.add('form-group-wrong');//Cuando el campo es incorrecto queremos que nos agregue la clase wrong		
        document.getElementById(`group-${campo}`).classList.remove('form-group-right');// y elimine la clase right		
        document.querySelector(`#group-${campo} i`).classList.add('fa-circle-xmark');//y a su vez cambie el icono agregando x 		
        document.querySelector(`#group-${campo} i`).classList.remove('fa-circle-check');//y quitando el correct check		
        document.querySelector(`#group-${campo} .input-error-form`).classList.add('input-error-form-activo');//al agregar esta clase habilitamos el display del párrafo con el mensaje de error con display block		
        campos[campo] = false;
    	}
    }

        
inputs.forEach((input) => {	//fx arrow que se ejecutará por cada input
    input.addEventListener('keyup', validarFormulario);	//por cada input agrega un event listener. Cuando el usuario presiona una tecla, cuando se suelta la tecla, se ejecuta la fx validarFormulario
    input.addEventListener('blur', validarFormulario);//cuando le den un click fuera del input tmb se ejecutará esa fx
});


//Click Resumen y Calcular total 


function calcularTotal(){

const cant = document.getElementById('cantidad');
const cat = document.getElementById('categoria');

    if(cat.value=="standard") {resumenTotal = 0*cant.value;}
    if(cat.value=="team") {resumenTotal = 10*cant.value;}
    if(cat.value=="enterprise") {resumenTotal = 16*cant.value;}
    
     document.getElementById('totalPagar').innerText = resumenTotal;
     document.getElementById('success-message-form2').classList.add('success-message-form-activo2');	
 
}
const BTNCLICK = document.getElementById('btnResumen');
BTNCLICK.addEventListener('click',calcularTotal); 



//revisar


form.addEventListener('submit', (e) => {//fx flecha para click en submit
    e.preventDefault();//este método es a los efectos de que no suceda nada, dado que no estamos trabajando con DB aún.
    
const terminos = document.getElementById('terminos');	
if(campos.nombre && campos.apellido && campos.email && terminos.checked ){		
    formulario.reset();		//validación de términos
    
    document.getElementById('success-message-form').classList.add('success-message-form-activo');		
    setTimeout(() => {			
        document.getElementById('success-message-form').classList.remove('success-message-form-activo');		
    }, 5000);	//El mensaje de envío exitoso se va luego de 5 segundos	
    
    document.querySelectorAll('.form-group-right').forEach((icono) => {
        icono.classList.remove('form-group-right');		
    });	//tambien desaparecen de pantalla todos los iconos verdes right
} else {	
        document.getElementById('form-message').classList.add('form-message-activo');
        }
    });



       
       
       
       
       
       
     






