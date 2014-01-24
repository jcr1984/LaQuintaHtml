////////////USUARIOS
function catUsuarios(){
    $.ajax({
        data:  '',
        url:   'catalogos/usuarios/usuarios.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
        }
    });
}

function loadAgregarUsuario(){
    $.ajax({
        data:  '',
        url:   'catalogos/usuarios/modalAltaUsuario.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: 570,
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

function SelectElement(element,valueToSelect){    
    var element = document.getElementById(element);
    element.value = valueToSelect;
}

function openDetalle(id){
    var usuario=$("#lblUsuario"+id).html();
    var nombre=$("#lblNombre"+id).html();
    var perfil=$("#lblPerfil"+id).html();
    $.ajax({
        data:  '',
        url:   'catalogos/usuarios/modalUpdUsuario.html',
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
                width: 570,
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Modificar Usuario',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
}
//////////////PERFILES
function catPerfiles(){
    $.ajax({
        data:  '',
        url:   'catalogos/perfiles/perfiles.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
        }
    });
}

function openDetallePerfiles(){
    $.ajax({
        data:  '',
        url:   'catalogos/perfiles/modalUpdPerfil.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "40%",
                height: 500,
                position: [50,50],
                draggable: true,
                title:'Modificar Perfil',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
}

function loadAgregarPerfil(){
    $.ajax({
        data:  '',
        url:   'catalogos/perfiles/modalAltaPerfil.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "40%",
                height: 500,
                position: [50,50],
                draggable: true,
                title:'Modificar Perfil',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
}

///////////CLIENTES
function catClientes(){
    $.ajax({
        data:  '',
        url:   'catalogos/clientes/clientes.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
        }
    });
}

function loadAgregarCliente(){
}

function openDetalleCliente(id){
    var cliente=$("#lblCliente"+id).html();
    var razonSocial=$("#lblRazonSocial"+id).html();
    var rfcCliente=$("#lblRfcCliente"+id).html();
    var direccionCliente=$("#lblDireccionCliente"+id).html();
    $.ajax({
        data:  '',
        url:   'catalogos/clientes/modalUpdCliente.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#txtModCliente").val(cliente);
            $("#txtModRazonSocial").val(razonSocial);
            $("#txtModRFC").val(rfcCliente);
            $("#txtModDireccion").val(direccionCliente);
            
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "40%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Modificar Cliente',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
    
}

////////EMPLEADOS
function catEmpleados(){
    $.ajax({
        data:  '',
        url:   'catalogos/empleados/empleados.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
        }
    });
}

function loadAgregarEmpleado(){
    $.ajax({
        data:  '',
        url:   'catalogos/empleados/modalAltaEmpleado.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "40%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Modificar Cliente',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
    
}
function openDetalleEmpleado(){
    $.ajax({
        data:  '',
        url:   'catalogos/empleados/modalDetalleEmpleado.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "40%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Modificar Cliente',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
}

//////////PRODUCTOS
function catProductos(){
    //TODO
}
