
// Call the dataTables jQuery plugin
$(document).ready(function() {
	
});


async function iniciarSesion(){
	
	let datos ={};
	datos.email= "jsuan@jhsu.cj";//document.getElementById('txtEmail').value ;
	datos.password="654321";// document.getElementById('txtPassword').value ;
	
	
	
	  const request = await fetch('/login', {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body:JSON.stringify(datos)
	  });
	  const respuesta = await request.text();
	  
	  if (respuesta != 'FAIL'){
		  localStorage.setItem('token', respuesta);
		  localStorage.setItem('email', datos.email);
		  window.location.href = 'usuarios.html'
	  } else {
		   alert("Credenciales incorrectas")
	  }

}