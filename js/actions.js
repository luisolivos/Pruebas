var fn = 
{
	init: function (){
		 $('#datos').on('click', fn.conectarAjax);
	},
	
	conectarAjax: function(){
		$.ajax({
			method: 'POST',
            url:'http://192.168.1.129/Default.aspx/OnSubmit',
			//url: 'http://carlos.igitsoft.com/apps/test.php',
			data: {mail: 'Nom'},
			error: function(){alert('ajax connection failed');}
		}).done(function(msg){alert (msg);});
	},
	
	
}

$(fn.init);