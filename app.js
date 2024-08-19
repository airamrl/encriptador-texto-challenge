// validacion

const formulario = document.getElementById("formulario");
const textAreas = document.querySelectorAll("#formulario textarea");

const expresiones = {
	textareaStart: /^[a-zA-Z\s]{1,1000}$/, 
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "textareaStart":
			if (expresiones.textareaStart.test(e.target.value))  {
        document.getElementById("principal_start_input").classList.add("principal_start_texto");
        document.getElementById("principal_start_input").classList.remove("textarea-incorrecto"); 
        document.getElementById("aviso-normal").style.display = "flex";
        document.getElementById("aviso-error").style.display = "none";
        
        document.getElementById("btn-enc").disabled = false;
        document.getElementById("btn-enc").classList.add("principal_start_btn_encriptar");
        document.getElementById("btn-enc").classList.remove("false");
        document.getElementById("btn-des").disabled = false;
        document.getElementById("btn-des").classList.add("principal_start_btn_desencriptar");
        document.getElementById("btn-des").classList.remove("false");

      } else {
        document.getElementById("principal_start_input").classList.remove("principal_start_texto");
        document.getElementById("principal_start_input").classList.add("textarea-incorrecto");
        document.getElementById("aviso-normal").style.display = "none";
        document.getElementById("aviso-error").style.display = "flex";
        document.getElementById("btn-enc").disabled = true;
        document.getElementById("btn-enc").classList.remove("principal_start_btn_encriptar");
        document.getElementById("btn-enc").classList.add("false");
        document.getElementById("btn-des").disabled = true;
        document.getElementById("btn-des").classList.remove("principal_start_btn_desencriptar");
        document.getElementById("btn-des").classList.add("false");

      }
		break;
	}
}

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
})


textAreas.forEach((textarea) =>  {
  textarea.addEventListener("keyup", validarFormulario);
  textarea.addEventListener("copy", validarFormulario);
  textarea.addEventListener("paste", validarFormulario);
  
})

// Funcionalidad: encriptado, desencriptado, copiar 

let btnEnc = document.getElementById("btn-enc");
let btnDesnc = document.getElementById("btn-des");
let btnCopiar = document.getElementById("btn-copy");
var newTextUser;
var newTextEnd;
let copiar;

function encriptar() {

    if ((document.getElementById("principal_start_input")).value != "") {
        let textUser =  (document.getElementById("principal_start_input")).value;
    let  textUserMinus = textUser.toLowerCase();
    let  textUserSc = textUserMinus.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(textUserSc);
    
    
    let dropE = textUserSc.replaceAll("e", "enter");
    let dropI = dropE.replaceAll("i", "imes");
    let dropAletter = dropI.replaceAll("a", "ai");
    let dropOletterr = dropAletter.replaceAll("o", "ober");
    let dropU = dropOletterr.replaceAll("u", "ufat");
    newTextUser = dropU;

    document.getElementById("textEncriptar").innerHTML = newTextUser;

    document.getElementById("principal_start_input").value = "" ;

    document.getElementById("imagen").style.display = "none";
    document.getElementById("end_titular").style.display = "none";
    document.getElementById("end_texto").style.display = "none";



    document.getElementById("textEncriptar").style.display = "inline";

    document.getElementById("end_titular_copiar").classList.add("principal_end_titular_copiar");
    document.getElementById("end_titular_copiar").classList.remove
    } else {
        alert("Ingresa el texto porfavor ¡Gracias!");
        
        
    }
}

function desencriptar () {

    document.getElementById("textEncriptar").value = "" ;
   
    let textDesencriptar;
    
    textDesencriptar = (document.getElementById("principal_start_input")).value;
    
    console.log(textDesencriptar);

    let redoU =  textDesencriptar.replaceAll("ufat", "u");
    let redoOl =  redoU.replaceAll("ober", "o");
    let redoA =  redoOl.replaceAll("ai", "a");
    let redoI =  redoA.replaceAll("imes", "i");
    let redEl =  redoI.replaceAll("enter", "e");

    let rewriteTextUser = redEl;
    console.log(rewriteTextUser);
    document.getElementById("principal_start_input").value = "" ;
 
    document.getElementById("textEncriptar").innerHTML  = rewriteTextUser;

    document.getElementById("imagen").style.display = "none";
    document.getElementById("end_titular").style.display = "none";
    document.getElementById("end_texto").style.display = "none";

    document.getElementById("textEncriptar").style.display = "initial";
    document.getElementById("end_titular_copiar").classList.add("principal_end_titular_copiar");
    document.getElementById("end_titular_copiar").classList.remove("principal_end_titular_copiar_aparecer"); 
}

function aparecerBotonCopiar() {

  
    document.getElementById("btn-copy").style.display = "initial";
    document.getElementById("id_principal_end").style.justifyContent = "space-between";
    document.getElementById("textEncriptar").style.maxWidth = "22rem";
    

}

async function copiarContenido() {

  let texto = document.getElementById("textEncriptar").innerHTML;

  try {
    await navigator.clipboard.writeText(texto);
    
  } catch (err) {
    console.error("Error al copiar: ", err);
    
  }

  document.getElementById("principal_start_input").value = texto;
  // desaparece el boton copiar
  document.getElementById("btn-copy").style.display = "none";

  document.getElementById("textEncriptar").style.display = "none";
  document.getElementById("end_titular_copiar").classList.remove("principal_end_titular_copiar");
  document.getElementById("end_titular_copiar").classList.add("principal_end_titular_copiar_aparecer"); 
  document.getElementById("id_principal_end").style.justifyContent = "center";
}


btnEnc.addEventListener("click", encriptar);
btnEnc.addEventListener("click", aparecerBotonCopiar);
btnDesnc.addEventListener("click", desencriptar);
btnDesnc.addEventListener("click", aparecerBotonCopiar);
btnCopiar.addEventListener("click", copiarContenido); 










