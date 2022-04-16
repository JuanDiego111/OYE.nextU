
function cargarPlaylist(){
   
    $.ajax({
        url:"/MUSIC%20PROYECT/js/canciones.json"
    }).done(function(canciones){

        var newData = canciones.canciones.sort(function (a, b) {
            return b.reproducciones - a.reproducciones;
            });
        
        for (i=1;i<11;i++){
            $("#top"+(4*i)).html("Top "+i+" - "+ newData[(i-1)].nombre);
            $("#top"+(4*i)).slideDown("slow");
            $("#pic"+(4*i)).html('<img'+' src='+'"'+newData[(i-1)].pic+'"' +'>');
            $("#pic"+(4*i)).slideDown("slow");
            $("#ruta"+(4*i)).html('<audio src='+'"'+newData[(i-1)].ruta+'"'+' controls >'+'</audio>');
            $("#des"+(4*i)).html(newData[(i-1)].des);
            $("#des"+(4*i)).slideDown("slow");
        }
        });
}


$(document).ready(function(){
        for (i=1;i<11;i++){
            $("#top"+(4*i)).hide();
            $("#pic"+(4*i)).hide();
            $("#des"+(4*i)).hide();
        }
        
        $(".cargar").append(function(){
       cargarPlaylist(); 

    });
});
