// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()






var mainTable = $("#pixel_canvas");

var userColor= "black"; // הגדרתצבע  דיפולט  לשחור

var colorChange =  function(cell) {     // function_td
			
			$(this).css("background-color", userColor);
		
			}; // יצירת פונקציה לשינוי  צבע


var makeGrid = function makeGrid(H , W){ //יצירת פונקציה ליצירת  גריד
		mainTable.children( 'tr' ).remove();
		mainTable.children( 'td' ).remove();
	
	for (i = 0; i < H; i++) { 
  mainTable.append("<tr></tr>");
  
	for (j = 0; j < W; j++) { 
	mainTable.append("<td height=10px style=background-color:white; class=uColor id=row"+ i + "col" + j + "></td>");

    	$('#row' + i + "col" + j).on("click" , colorChange);
    $('#row' + i + "col" + j).css('width', 10 + "px");
  $('#row' + i + "col" + j).css('padding-bottom', "0 px");
			}; 
			 };



} 

 $("#colorPicker").on("change", function(){   	// בחר צבע
		
	 userColor = $(this).val(); 

}); 
	
$("#sizePicker").submit(function(e){ 			// בעת שליחה - בנה גריד
	 e.preventDefault();
	 
            var inputH = $("#input_height").val(); 
			var inputW = $("#input_width").val();

	makeGrid(inputH, inputW);
	


});



 
