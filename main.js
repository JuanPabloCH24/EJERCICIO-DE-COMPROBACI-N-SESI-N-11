function buscarChiste() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var chiste = JSON.parse(this.responseText);
            document.getElementById("chiste").innerHTML = chiste.joke;
        }
    };
    xhttp.open("GET", "https://geek-jokes.sameerkumar.website/api?format=json", true);
    xhttp.send();
}

window.onload = function() {
    buscarChiste();
}  