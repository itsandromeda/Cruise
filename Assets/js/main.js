/*global document, removeItem*/
var resources = ["Ubuntu", "Firefox3", "Core-Duo"],
    span,
    text,
    remove,
    icon;

function print(array) {
    "use strict";
    var resources = document.getElementById("serie"),
        i;
    resources.innerHTML = "";
    for (i = 0; i < array.length; i += 1) {
        span = document.createElement("span");
        span.setAttribute("class", "resources");
        span.setAttribute("data-re", i);
        text = document.createTextNode(array[i]);
        span.appendChild(text);
        remove = document.createElement("button");
        icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-trash");
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