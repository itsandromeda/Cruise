/*global document, removeItem, removeItem2*/
/*
var idle1 = ["Ubuntu", "Firefox3", "Core-Duo"],
    span,
    text,
    remove,
    icon;

function print(idle1) {
    "use strict";
    var rsrcs = document.getElementById("serie1"),
        i;
    rsrcs.innerHTML = "";
    for (i = 0; i < idle1.length; i += 1) {
        span = document.createElement("span");
        span.setAttribute("class", "resources");
        span.setAttribute("data-re", i);
        text = document.createTextNode(idle1[i]);
        span.appendChild(text);
        remove = document.createElement("button");
        remove.setAttribute("class", "delete-btn");
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
        parent = (element.tagName === "I") ? element.parentElement.parentElement : element.parentElement,
        re = parent.getAttribute("data-re");
    idle1.splice(re, 1);
    print(idle1);
}
print(idle1);
*/
/*global document, removeItem*/

var array = [
    ["Ubuntu", "Firefox3", "Core-Duo"],
    ["Ubuntu", "Firefox3", "MySQL", "Core-Duo"],
    ["Ubuntu", "Firefox3", "MySQL", "Core-Duo"],
    ["Ubuntu"]
],
    span,
    text,
    remove,
    icon;

function print(array) {
    "use strict";
    var rsrcs = document.getElementById("serie1"),
        rsrcs2 = document.getElementById("serie2"),
        i,
        arr,
        j,
        k;
    rsrcs.innerHTML = "";
    for (i = 0; i < array[0].length; i += 1) {
        arr = array[i];
        for (j = i; j < arr[j].length; j += 1) {
            span = document.createElement("span");
            span.setAttribute("class", "resources");
            span.setAttribute("data-re", i);
            text = document.createTextNode(arr[j]);
            span.appendChild(text);
            remove = document.createElement("button");
            remove.setAttribute("class", "delete-btn");
            icon = document.createElement("i");
            icon.setAttribute("class", "fa fa-trash");
            remove.appendChild(icon);
            span.appendChild(remove);
            rsrcs.appendChild(span);
            remove.addEventListener("click", removeItem);
        }
    }
}

function removeItem(event) {
    "use strict";
    var element = event.target,
        parent = (element.tagName === "I") ? element.parentElement.parentElement : element.parentElement,
        re = parent.getAttribute("data-re");
    array.splice(re, 1);
    print(array);
}

print(array);