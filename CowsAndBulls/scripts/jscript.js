Hide();
function Hide() {
$(".hidden").css('display', 'none');
}

function Show() {
	$(".selected").css('display', 'block');
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