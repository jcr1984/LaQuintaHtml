
/**
    Pantalla principal
**/

function altaPedidos(){
    $.ajax({
        data:  '',
        url:   'pedidos/tablaPedidos.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
        }
    });
}

/**altaPedidos viejo
 *function altaPedidos(){
    $.ajax({
        data:  '',
        url:   'pedidos/altaPedidos.html',
        type:  'post',
        success:  function (response) {
            console.log("here");
            $("#workArea").html(response);
            console.log("here1");
            listasClientes();
            console.log("here2");
        }
    });
}

*/





/** #############################################################
    Pantallas modales
**/


//funcion agregar nuevo pedido
function loadAgregarPedido(){
    $.ajax({
        data:  '',
        url:   'pedidos/modalAltaPedido.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "80%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Agregar Pedido',
                resizable: false
            });
            $('#dialogModal').dialog('open');
            listasClientes();
            
        }
    });
}
//ver detalle de pedido
function openDetallePedidos(id){
    var usuario=$("#lblNoNota"+id).html();
    var nombre=$("#lblNombre"+id).html();
    var perfil=$("#lblDomEntrega"+id).html();
    $.ajax({
        data:  '',
        url:   'pedidos/modalUpdPedidos.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#txtModUsuario").val(usuario);
            SelectElement("sltModNombre",id);
            SelectElement("sltModPerfil",id);
            
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "70%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Editar Pedido',
                resizable: false
            });
            $('#dialogModal').dialog('open');
            
        }
    });
}

function listasClientes(){
    $.ajax({
        data:   '',
        url:    'pedidos/listaClientes.html',
        type:   'post',
        success: function (response){
            $("#listaClientes").html(response);
            $("#sltCliente").change(
                                function (response){
                                    
                                    domEntrega();
                                    productosAutorizados();
                                }
                              );
            
        },        
    });
}

function domEntrega(){
    $.ajax({
        data:   '',
        url:   'pedidos/domEntrega.html',
        type:  'post',
        success:  function (response) {
            $("#contDomEntrega").html(response);
            
            
        }
        
    });
}
function productosAutorizados(){
    $.ajax({
        data:   '',
        url:   'pedidos/productosAutorizados.html',
        type:  'post',
        success:  function (response) {
            $("#contProductoAutorizado").html(response);
        } 
    });
}