
  function cargarDatos(){
    $.ajax({
        url:"./js/canciones.json"
    }).done(function(canciones){
        
        var newData = canciones.canciones.sort(function (a, b) {
            return b.reproducciones - a.reproducciones;
            });
        
        for (i=1;i<4;i++){
            $("#top"+(4*i)).html("Top "+i+" - "+ newData[(i-1)].nombre);
            $("#top"+(4*i)).slideDown("slow");
            $("#ruta"+(4*i)).html('<audio src='+'"'+newData[(i-1)].ruta+'"'+' controls >'+'</audio>');
            $("#des"+(4*i)).html(newData[(i-1)].des);
            $("#des"+(4*i)).slideDown("slow");
        }
    });
}


$(document).ready(function(){
    
    for (i=1;i<11;i++){
        $("#top"+(4*i)).hide();
    }
           $("h3.cargar").append(function(){
       cargarDatos(); 

    });
});

