	var styles = new Array();
styles[0] = "styles/defaultStyle.css";
styles[1] = "styles/redStyle.css";
styles[2] = "styles/blueStyle.css";

	  Hide();
	function Hide() {
	$(".hidden").css('display', 'none')
	}

	function Show() {
		var selected = $(".selected");
		selected.slideDown('slow', function() {
			
		selected.css('display', 'block');
		});
	}

	function ShowSettings() {

		var settings = $("#settings");
		var menu = $("#menu");
		menu.removeClass('selected');
		menu.addClass('hidden');

		settings.removeClass('hidden');
		settings.addClass('selected')
		Show();
		Hide();

	}

	function ShowHelp() {

		var help = $("#help");
		var menu = $("#menu");
		menu.removeClass('selected');
		menu.addClass('hidden');

		help.removeClass('hidden');
		help.addClass('selected')
		Show();
		Hide();
	}

	function ShowGame() {

		var game = $("#game");
		var menu = $("#menu");
		menu.removeClass('selected');
		menu.addClass('hidden');

		game.removeClass('hidden');
		game.addClass('selected')
		Show();
		Hide();
	}

	function BackBtn(id) {

		var txt = "#"+id;
		var id =$(txt)
		var menu = $("#menu");
		id.removeClass('selected');
		id.addClass('hidden');
		menu.removeClass('hidden');
		menu.addClass('selected');
		Show();
		Hide();

	}
 function saveState(text) {

    var value = text;
    var key = "path";
   // localStorage.setItem(key, value);
   localStorage.setItem(key,value);
    //$.localStorage(key,value);
                
}
function changeStyle(style) {

	var stylesheet = $("#style");
	stylesheet.href = style
   // document.getElementById("style").href = style;
    var text = stylesheet.href;

    //saveState(text);
  $("#style").href = text;  
  $("head").remove("link");
  $("head").append($("<link rel='stylesheet' href="+text+" type='text/css' media='screen' />"));
}



/*
function changeStyle(style) {

    document.getElementById("style").href = style;
    var text = document.getElementById("style").href;
    saveState(text);

}
function saveState(text) {

    var value = text;
    var key = "path";
    localStorage.setItem(key, value);
                
}
*/