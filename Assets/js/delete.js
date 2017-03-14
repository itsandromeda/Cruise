/*global document, removeItem*/
var resources = ["Ubuntu", "Firefox3", "Core-Duo"],
    span,
    text,
    remove,
    icon;

function print(array) {
    "use strict";
    var resources = document.getElementById("serie"),//div
        i;
    resources.innerHTML = "";
    for (i = 0; i < array.length; i += 1) {
        span = document.createElement("span");
        span.setAttribute("class", "resources");
        span.setAttribute("data-re", i);
        text = document.createTextNode(array[i]);
        span.appendChild(text);
        remove = document.createElement("button"); //document.getElementById("")
        icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-trash");//traer el icono!!!
        remove.appendChild(icon);
        span.appendChild(remove);
        resources.appendChild(span);
        remove.addEventListener("click", removeItem);
    }
}

function item(event) {
    "use strict";
    var re = event.target.parentElement.getAttribute("data-re");
    resources[re] = event.target.innerText;
}

function removeItem(event) {
    "use strict";
    event.preventDefault();
    var re = event.target.parentElement.getAttribute("data-re");
    resources.splice(re, 1);
    print(resources);
}

print(resources);










/*
window.addEventListener('load',function(){
	var element = document.querySelectorAll("data-bu");
	var recursos = document.querySelectorAll("data-re");

	element.onclick = function(event){
		
		recursos.remove();
		this.remove();	//remueve el ícono tbm
};

})*/


