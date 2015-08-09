var fn = 
{
	init: function (){
		 $('#datos').on('click', fn.conectarAjax);
	},
	
	conectarAjax: function(){
		$.ajax({
			method: 'POST',
			url: 'http://carlos.igitsoft.com/apps/test.php',
			data: {nom: 'Nom', mail: 'mail', tel: '22'},
			error: function(){alert('ajax connection failed');}
		}).done(function(msg){alert (msg);});
	},
	
	
}

$(fn.init);