$(document).ready(function(){
	$('#nombre').on('keyup',function(key){
		if($(this).val().length >= 1){
			$.ajax({
				url:"getClient.php",
				data:{nombre:$('#nombre').val()},
				method: "GET",
			}).done(function(c){

				cadena = JSON.parse(c);
				console.log(cadena);
				$('#id').text(cadena[0].id_cli);
				$('#nom').text(cadena[0].nombre);
				$('#ape').text(cadena[0].apellido);


			})


		}
	});
})