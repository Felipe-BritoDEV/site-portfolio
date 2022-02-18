
function opennav(){

    var x = document.getElementById("navi");

    if (x.className === "navigation"){
        x.className += " menujs";
        document.getElementById("three").innerHTML = "&Cross;";
    }else{
        x.className = "navigation";
        document.getElementById("three").innerHTML = "&#9776;";
    }

}