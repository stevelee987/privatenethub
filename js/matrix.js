$("input#route").on('click',function(){
	alert("TEST2");
	$.ajax({url: "../matrix.php?in=1&out=1", success: function(result){
        alert("Output Changed");
    }});
})