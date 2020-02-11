//kotisivulta siirrytään sijaintisivulle buttonia painamalla
var sijaintisivu = document.getElementById("sijaintibtn");
sijaintisivu.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divsijainti").classList.add("active");
}

//kotisivulta siirrytään laskusivulle buttonia painamalla
var laskusivu = document.getElementById("laskubtn");
laskusivu.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divlasku").classList.add("active");
}

//suoritetaan laskutoimitus//
var x = 2;
var y = 2;
var laskebtn = document.getElementById("laskinbtn");
laskebtn.onclick = function(){
    console.log(x+y);
    //tulos.innerHTML = "tässä vaihdettu otsikko"; // vaatii otsikkoon id="tulos"
    //laskebtn.innerHTML = "tässä vaihdettu nimi buttonille";
}

var kotisivu = document.getElementById("kotiinbtn");
kotisivu.onclick = function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divkoti").classList.add("active");
}