$(document).ready(function() {

    $("#author").click(function() {
        $("#author_panel").slideToggle("slow");
    });
    $("#years").click(function() {
        $("#years_panel").slideToggle("slow");
    });
    $("#title").click(function() {
        $("#title_panel").slideToggle("slow");
    });
    $("#type_doc").click(function() {
        $("#typeDoc_panel").slideToggle("slow");
    });

});

function remove_attr(txt, vari) {
    document.getElementById(vari).removeAttribute("href");
    document.getElementById(vari).removeAttribute("onclick");
    document.getElementById(vari+"-glyphicon").style.display = "inline";

    //add childe
    var node = document.createElement("LI");
    node.setAttribute("id", vari+"_li");
    var textnode = document.createTextNode(txt);
    node.appendChild(textnode);
    document.getElementById("navigator").appendChild(node);
}

function refhesh_attr(txt, vari) {
    document.getElementById(vari).setAttribute("href", "javascript:void(0)");
    document.getElementById(vari).setAttribute("onclick", "remove_attr('" + txt + "','" + vari + "');");
    document.getElementById(vari+"-glyphicon").style.display = "none";

    //remove childe
    var item = document.getElementById(vari+"_li");
    item.parentNode.removeChild(item);
}
