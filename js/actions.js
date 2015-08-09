var fn = 
{
	init: function (){
		 $('#datos').on('click', fn.conectarAjax);
	},
	
	conectarAjax: function(){
        alert();
        
		$.ajax({
			type: 'POST',
            url:'http://192.168.1.129/Default.aspx/OnSubmit',
			//url: 'http://carlos.igitsoft.com/apps/test.php',
			data: '{mail: "Nom"}',
            contentType: 'application/json: charset=utf-8',
            dataType:'json',
            success: function(){alert('success');},
			error: function(){alert('ajax connection failed');}
		}).done(function(msg){alert ('correct');});
	},
	
	
}

$(fn.init);