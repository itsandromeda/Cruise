/*global document, removeItem*/
var array = ["Ubuntu", "Firefox3", "Core-Duo"],
    span,
    text,
    remove,
    icon;

function print(array) {
    "use strict";
    var rsrcs = document.getElementById("serie"),
        i;
    rsrcs.innerHTML = "";
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
        rsrcs.appendChild(span);
        remove.addEventListener("click", removeItem);
    }
}

function removeItem(event) {
    "use strict";
    var element = event.target,
        parent = (element.tagName.toLowerCase === "i") ? element.parentElement.parentElement : element.parentElement,
        re = parent.getAttribute("data-re");
    array.splice(parseInt((re), 10), 1);
    print(array);
}

print(array);