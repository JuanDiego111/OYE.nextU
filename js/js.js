
 document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('email').value;
    if(usuario.length == 0 ||usuario.length==null ) {
      alert('Campo email vacio, obligatorio');
      return;
    }

    var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:s@"]+)*)|("+"))@((\[[0-9]{1,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)==true){
    alert("Email invalido");
    return;
}

    var clave = document.getElementById('clave').value;
    if (clave.length < 8 || clave.length==null) {
      alert('La clave no es válida');
      return;
    }

    var confi =document.getElementById('confirmacion').value;
    if (confi==null||confi==0) {
      alert('confirmar clave');
      return;
    }

    var clave = document.getElementById('clave').value;
    var confi =document.getElementById('confirmacion').value;
    if (clave != confi) {
      alert('clave no coincide');
      return;
    }


    var clave = formulario.tipo.value;
    if (clave==null || clave==0) {
      alert('Especifique un genero musical');
      return;
    }

    var clave = document.getElementById('tipo').value;
    console.log(clave);
    if (clave==null || clave==0) {
      alert('Especifique un edad');
      return;
    }

    if (!formulario.terminos.checked) {
      alert('Acepte los terminos y condiciones');
      return;
    }

    this.submit();
  }
 

 
