function pantProduccionAutorizada(){
    $.ajax({
      url: './produccion/pantProduccionAutorizada.html',
      type:'POST',
      async: true,
      data: null,
      beforeSend: function(xhr) {
             //document.getElementById('workArea').innerHTML = 'Espere un momento.';
      },
      success: function(respuesta) {
         $("#workArea").html(respuesta);
      }
   });
}

function detalleProduccionPedido(){
    $.ajax({
      url: './produccion/detalleProduccionPedido.html',
      type:'POST',
      async: true,
      data: null,
      beforeSend: function(xhr) {
             //document.getElementById('workArea').innerHTML = 'Espere un momento.';
      },
      success: function(respuesta) {
            $("#dialogModal").html(respuesta);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "70%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Detalle del pedido',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
   });
}

function pantProduccionGeneral(){
    $.ajax({
      url: './produccion/pantProduccionGeneral.html',
      type:'POST',
      async: true,
      data: null,
      beforeSend: function(xhr) {
             //document.getElementById('workArea').innerHTML = 'Espere un momento.';
      },
      success: function(respuesta) {
         $("#workArea").html(respuesta);
         for(var i=0;i<3;i++) {
             restarAutorizadas_EnBodega("contAutorizadas"+i,"contProducidas"+i,"txtEnBodega"+i);
         }
      }
   });
}

function restarAutorizadas_EnBodega(autorizadas,producidas,enBodega) {
    autorizadas = $("#"+autorizadas).html();
    producidas = $("#"+producidas).html();
    var total = parseFloat(autorizadas) - parseFloat(producidas);
    $("#"+enBodega).val(total);
}

function pantProduccionStockDia(){
    $.ajax({
      url: './produccion/pantProduccionStockDia.html',
      type:'POST',
      async: true,
      data: null,
      beforeSend: function(xhr) {
             //document.getElementById('workArea').innerHTML = 'Espere un momento.';
      },
      success: function(respuesta) {
         $("#workArea").html(respuesta);
      }
   });
}