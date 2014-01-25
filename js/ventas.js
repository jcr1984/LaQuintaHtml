function ventasRemision(){
    $.ajax({
      url: './ventas/ventaRemision.html',
      type:'POST',
      async: true,
      data:null,
        beforeSend: function(xhr) {
             //document.getElementById('workArea').innerHTML = 'Espere un momento.';
        },
      success: function(datos_recibidos) {
         document.getElementById('workArea').innerHTML = datos_recibidos;
         cargarClientes();
      }
   });
}

function cargarClientes(){
   $.ajax({
      url: './ventas/cliente.html',
      type:'POST',
      async: true,
      data:null,
        beforeSend: function(xhr) {
             document.getElementById('contCliente').innerHTML = 'Espere un momento.';
        },
      success: function(datos_recibidos) {
         document.getElementById('contCliente').innerHTML = datos_recibidos;
      }
   });
}

function cargarListaRemisionPendientes(idCliente){
    $.ajax({
      url: './ventas/listaRemisionesPendientes.html',
      type:'POST',
      async: true,
      data:'cliente='+idCliente,
        beforeSend: function(xhr) {
             document.getElementById('contlistaRemision').innerHTML = 'Espere un momento.';
        },
      success: function(datos_recibidos) {
         document.getElementById('contlistaRemision').innerHTML = datos_recibidos;
         /*var tbl = $("#tblRemisiones");
         var obj = $.paramquery.tableToArray(tbl);
         var newObj = { width: 900, height: 700, title: "Remisiones Cliente x", resizable: true };
         newObj.dataModel = { data: obj.data, rPP: 20, paging: "local" };
         newObj.colModel = obj.colModel;
         $("#grid_table").pqGrid(newObj);
         tbl.css("display", "none");*/
      }
   });
}

function loadAprobarRemision(idRemision,total){
    $.ajax({
        data:  '',
        url:   'ventas/modalAprobacionRemision.html',
        type:  'post',
        async: true,
        data:null,
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
            title:'Aprobar remision',
            resizable: false
        });
        $('#dialogModal').dialog('open');
        $('#idRemisionModal').val(idRemision);
        $('#txtTotalRem').val(total);
        }
    });
}

function ventasGenerarFactura(){
    $.ajax({
      url: './ventas/ventaFacturacion.html',
      type:'POST',
      async: true,
      data:null,
        beforeSend: function(xhr) {
             //document.getElementById('workArea').innerHTML = 'Espere un momento.';
        },
      success: function(datos_recibidos) {
         document.getElementById('workArea').innerHTML = datos_recibidos;
         cargarRemisionesAprobadas();
      }
   });
}

function cargarRemisionesAprobadas(){
    $.ajax({
      url: './ventas/listaRemisionesAprobadas.html',
      type:'POST',
      async: true,
      data:null,
        beforeSend: function(xhr) {
             document.getElementById('contlistaRemision').innerHTML = 'Espere un momento.';
        },
      success: function(datos_recibidos) {
         document.getElementById('contlistaRemision').innerHTML = datos_recibidos;
         
      }
   });
}

function loadFacturarRemisiones() {
    var checados = new Array();
    var i = 0;
    var t="";
    var idRemision="";
    var total="";
    var totalFinal=0;
    checados = meterCajasComprobadasArray('chkRegs');
    if (checados.length == 0) {
        alert("Es requerido que seleccione al menos una remision a facturar");
    } else {
        $.ajax({
            data: '',
            url: 'ventas/modalFacturarRemisiones.html',
            type: 'post',
            async: true,
            data:null,
                    success: function(response) {
                        $("#dialogModal").html(response);
                        $("#dialogModal").dialog({
                            autoOpen: false,
                            modal: true,
                            hide: 'drop',
                            show: 'fold',
                            width: "70%",
                            height: 'auto',
                            position: [50, 50],
                            draggable: true,
                            title: 'Facturar Remisiones',
                            resizable: false
                        });
                        $('#dialogModal').dialog('open');
                        t="<table border=1 class='tblReporte' width='100%'>";
                        t+="<tr><td colspan=2><strong>Remision</strong></td><td><strong>Cantidad</strong></td></tr>"
                        
                        for(i=0;i<checados.length;i++){
                            idRemision=document.getElementById("hdd"+checados[i]).value; 
                            total=document.getElementById("hddTot"+checados[i]).value; 
                            totalFinal+=parseFloat(total);
                            t+="<tr><td colspan=2>"+idRemision+"</td><td>$"+total+"</td></tr>";
                        }
                        t+="<tr><td><strong>Importe con letra<strong></td><td rowspan=2><strong>Total</strong></td><td rowspan=2>$"+totalFinal+"</td></tr>"
                        t+="<tr><td><textarea></textarea></td></tr>"
                        t+="</table";
                        $('#remisionesSeleccionadas').html(t);
                    }
        });

    }
}

function meterCajasComprobadasArray(familiaCajas) {
var array = new Array();
var arrayFiltro = document.getElementsByName(familiaCajas);
var seleccionados = 0;
for(var i=0;i<arrayFiltro.length;i++) {
if(arrayFiltro[i].checked) {
array[seleccionados] = arrayFiltro[i].value;
seleccionados++;
}
}
return array;
}

function loadDetalleRemision(idRemision,total){
    $.ajax({
        data:  '',
        url:   'ventas/modalDetalleRemision.html',
        type:  'post',
        async: true,
        data:null,
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
            title:'Aprobar remision',
            resizable: false
        });
        $('#dialogModal').dialog('open');
         $('#idRemisionDetalle').val(idRemision);
         $('#txtTotalRem').val(total);
        }
    });
}


