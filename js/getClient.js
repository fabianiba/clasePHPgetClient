$(function(){
	$('#actualizar').on('click',function(){
	$.ajax({
			url:"updateCustomers.php",
			data:$('#insert').serialize(),
			method:"POST"
		})
		$("#cartel").text('Sus datos fueron');
		return false;
	})
})

$(document).ready(function(){
	$('#actualizar').prop('disabled', true);
	$('#nameList').hide();
	$('#nombre').on('keyup',function(key){
		if($(this).val().length >=3){
			$.ajax({
				url:"getClient.php",
				data:{nombre:$('#nombre').val()},
				method: "GET",
			}).done(function(c){
				var result = JSON.parse(c);
				$('#nameList').empty();
				if (!$('#nameList').is(":visible")){
					$('#nameList').show();
				}
				var list =$('#nameList').append('<ul> </ul>').find('ul');
				for(var i = 0; i<result.length; i++){
					//console.log("Nombre "+result[i].nombre);
					list.append('<li id='+result[i].dniCliente+ '>'+ result[i].nombre +' '+ result[i].apellido +'</li>');
				}
				addNameToList(list,result);
			})


		} else if ($(this).val().length === 0){
          $('#nameList').hide();
	     }
	});

})


function addNameToList(list,result){
	
	$(list).children().each(function(){
		$(this).on("click",function(){
			$('#nombre').val($(this).text());
			$('#nameList').hide();
			$('#actualizar').prop('disabled', false);
			
			for (var i = 0; i < result.length; i++) {
				if ($(this).attr('id') == result[i]['dniCliente']) {
					$('#nameCliente').val(result[i].nombre);
					$('#apellidoCliente').val(result[i].apellido);
					$('#emailCliente').val(result[i].email);
					$('#dniCliente').val(result[i].dniCliente);
					$('#telCliente').val(result[i].telefono);
					$('#fechaCliente').val(result[i].fechaNac);

				}
			}

		});
	});
}


function updateCustomer() {

	$.ajax({
		url:"updateCustomers.php",
		data:$('#insert').serialize(),
		method:"POST"
	})
	alert('Sus datos fueron');
	return false;
	
}
