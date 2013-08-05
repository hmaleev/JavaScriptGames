function AddToHistory() {

    var playerNumber = document.getElementById("hiddenNumber").innerHTML;
    var count = document.getElementById("task1").innerHTML;
    document.getElementById("history").innerHTML += playerNumber + "</br>";
    document.getElementById("history").innerHTML += count + "</br>";
}
function showHistory() {

    document.getElementById("history").style.display = "inline"
}

function hideHistory() {

    document.getElementById("history").style.display = "none"
}

function clearHistory() {

    document.getElementById("history").innerHTML = "";
}