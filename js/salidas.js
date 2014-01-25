function salidaProducto(){
    $.ajax({
        data:  '',
        url:   'salidas/salidasFind.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
            detalleSalida();
            $(".sltCliente").change(function() {
                var nombreCliente =  $(".sltCliente").val();
                $(".titleSalida").html(nombreCliente);
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
                title:'Detalle del Producto',
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
                        if (contar === 0){
                            $("#aviso").html("El distribuidor no tiene clientes a surtir");
                        }
                    }
                });
            });
            $(".sltDistribuidor").change(function() {
                var nombreDistribuidor =  $(".sltDistribuidor").val();
                $("#titleDistribuidor").html(nombreDistribuidor);
            });
        }
    });
}
function detalleClientesSal(){
    $.ajax({
        data:  '',
        url:   'catalogos/clientes/modalUpdCliente.html',
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
                title:'Detalle del Cliente',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
}