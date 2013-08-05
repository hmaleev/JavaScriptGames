	
	/* use local storage for change of style */
	if (localStorage.length) {;
		var key = "path";
		document.getElementById("style").href = localStorage.getItem(key);
	}
