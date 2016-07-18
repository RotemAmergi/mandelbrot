
 $(function () {
	 
	//get params from form
	var sx = $('#X');
	var sy = $('#Y');
	var iter = $('#iterations');
	var ex = -1;
	var ey = -1;
	var width = 0;
	var height = 0;
	
	//user pressd Get button
    $('#getPic').click(function (e) {
        e.preventDefault();	
		
		//url for get request
		var $fullUrl = '/api/server/' +sx.val()+ '/' +ex+ '/' +sy.val()+ '/' +ey+ '/' +iter.val()+ '/' +width+ '/' +height
		console.log($fullUrl)
		
		//validation - make sure user typed all fields
		if ((!sx.val()) || (!sy.val()) || (!iter.val()))
		{
			alert('please fill in all fields');
			return false;
		}
	
		//validation-ok, get the pic
        else
		{
			//get pic
			$.ajax({
				type: 'GET',
				url: $fullUrl,
				success: function () {
					alert('success getting pic');
				},
				error: function () {
					alert('error getting pic');
				}
			});
		}
	});
	
	//if user pressed zoom-in or out

	//if user cliked on reset button
	$('#reset').click(function (e) {
		
	});
});
