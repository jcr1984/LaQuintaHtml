//$(function(){
//    $("#dialogModal").dialog({
//        autoOpen:false
//        modal:true;
//    });
//    
//});
$(document).ready(function(){
    
    
});

function salidaProducto(){
    $.ajax({
        data:  '',
        url:   'salidas/salidasFind.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
            $("#workArea").change(function() {
                detalleSalida();
            });
        }
    });
}
function detalleSalida(){
    $.ajax({
        data:  '',
        url:   'salidas/salidas.html',
        type:  'post',
        success:  function (response) {
            $("#divDdetalleSalida").html(response);
            //var nombre = $(".sltCliente").value;
            //alert(nombre);
            //$(".tituloCliente").html(nombre);
        }
    });
}

function loadModalDetalleProd(){
    $.ajax({
        data:  '',
        url:   'salidas/productoDetalle.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "70%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Agregar Usuario',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
}
function salidaAsignacion (){
    $.ajax({
        data:  '',
        url:   'salidas/distribucion.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
            
                     contar = 0;
                     $(function() {
                       $( "#draggable li" ).draggable();
                       $( "#droppable" ).droppable({
                    accept: "#draggable li",
                         drop: function( event, ui ) {
                      contar=contar+1;
                      $(ui.draggable).css({color: "#0F00FF"});
                    agregar = $(ui.draggable).text();
                      $("#aviso").html("Se han agregado clientes al distribuidor");
                      $("#nombre_elemento").html("Último cliente agregado ... " + agregar);
                         },
                      out: function( event, ui ) {
                      $(ui.draggable).css({color: "#000000"});
                      contar=contar-1;
                      if (contar == 0)
                      {
                    $("#aviso").html("El distribuidor no tiene clientes a surtir");
                    }
                      }
                       });

                     });
        }
    });
}