
// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	
});


async function registrarUsuario(){
	let datos ={};
	
	datos.nombre= document.getElementById('txtNombre').value ;
	datos.apellido= document.getElementById('txtApellido').value ;
	datos.email= document.getElementById('txtEmail').value ;
	datos.telefono= document.getElementById('txtTelefono').value ;
	datos.password= document.getElementById('txtPassword').value ;
	datos.ciudad= document.getElementById('txtCiudad').value ;
	
	let repetirPss = document.getElementById('txtRepetirPassword').value ;
	
	if(repetirPss !== datos.password){
		alert('La contraseña no coincide');
		return;
	}
	
  const request = await fetch('api/registrar', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(datos)
  });
  
  alert('El usuario "'+ datos.nombre +'" fue creado con exito');
  window.location.href = 'usuarios.html';

}