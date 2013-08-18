 /*function allowDrop(ev) {
 	ev.preventDefault();
 }

 function drag(ev) {
 	ev.dataTransfer.setData("dragged-id", ev.target.id);
 }

 function drop(ev) {
 	ev.preventDefault();
 	var data = ev.dataTransfer.getData("dragged-id");
 	ev.target.appendChild(document.getElementById(data));
 }
*/

/*
 $(function() {
 	
 	$("td, th").droppable({
 		 accept: '#draggable',
 		drop: function(event, ui) {
 			$(this)
 				.html();
 		}
 	});
 });
*/


 $(function() {
    $("img").draggable({
        revert : function(event, ui) {
            // on older version of jQuery use "draggable"
            // $(this).data("draggable")
            $(this).data("uiDraggable").originalPosition = {
            	position :  $(this).position(),
                top : $(this).position().top - top,
                left : 0
            };
            // return boolean
            return !event;
            // that evaluate like this:
            // return event !== false ? false : true;
        }
    });
    $("td").droppable();
});