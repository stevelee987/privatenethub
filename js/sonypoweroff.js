var power = "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAAvAw== </IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>";


function SonyPowerOff(){

	$.support.cors = true;
	$.ajax({
		url: 'http://192.168.1.95/sony/IRCC',
		type:'POST',
		crosDomain: true,
		data: power,
		dataType:'text',
		success: function(result){
			alert(result);
		},
		error: function(jqXHR, tranStatus, errorThrown) {
	        alert(
	            'Status: ' + jqXHR.status + ' ' + jqXHR.statusText + '. ' +
	            'Response: ' + jqXHR.responseText
	        );
	    }
	});

}