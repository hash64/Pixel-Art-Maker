// When size is submitted by the user, call makeGrid()
$('document').ready(function(){
	// Select color input
	let color=$("#colorPicker").val();
	$('#sizePicker').submit(function makeGrid(grid) {
		grid.preventDefault();
		let height= $('#inputHeight').val();
		let width= $('#inputWidth').val();
		//for submitting new value data must be clear
		$('#pixelCanvas').empty();
		// Select size input
		for (let i = 1; i <= height; i++)
		 {
			$('#pixelCanvas').append('<tr></tr>');
			for(let j=1; j <=width;j++)
			{
				$('tr:last').append('<td></td>');
				$('td').attr("class",'cells');
			}
		}
		//changing color
		$("#colorPicker").change("color",function(){
		    color =$("#colorPicker").val();
		});

		
		$('.cells').click(function(e){
			$(e.target).css('background-color',color);
		});

		//double click event
		$("#pixelCanvas").on("dblclick","td",function(){
	    	$(this).css("background-color","");    
		});

		//reseting the data
		$("#reset").click(function(){
	 		$("#pixelCanvas").empty();
	 		$("#colorPicker").val("");
 		});

		//Mouse function for removing click function
		var mouseDown;
		$("body").mousedown(function(){
		  mouseDown = true;
		}).mouseup(function(){
		   mouseDown = false;
		});
		$("#pixelCanvas").on("mousemove", "td", function(){
			if(mouseDown){
	  			$(this).css("background-color",color);
	  		}
		});

	});
});

