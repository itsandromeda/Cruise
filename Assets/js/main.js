/*global document, window, removeItem, removeItem2, prompt*/

/*TABS*/
window.addEventListener('load', function () {
    "use strict";
    document.getElementById("default").click();
});

function display(tab) {
    "use strict";
    var tabContent,
        agentContent,
        i;

    tabContent = document.getElementsByClassName("tab-content");

    for (i = 0; i < tabContent.length; i += 1) {
        tabContent[i].style.display = "none";
    }

    agentContent = document.getElementsByClassName("agent-content");
    for (i = 0; i < agentContent.length; i += 1) {
        agentContent[i].style.display = "none";
    }
    document.getElementById("physical").click();
    document.getElementById(tab).style.display = "block";
}

var dashBtn = document.getElementById("dashboard"),
    cruiseBtn = document.getElementById("cruise"),
    agentsBtn = document.getElementById("default"),
    helpBtn = document.getElementById("help");

dashBtn.addEventListener('click', function () {
    "use strict";
    display("dashboard-tab");
});

cruiseBtn.addEventListener('click', function () {
    "use strict";
    display("cruise-tab");
});

agentsBtn.addEventListener('click', function () {
    "use strict";
    display("agents-tab");
});

helpBtn.addEventListener('click', function () {
    "use strict";
    display("help-tab");
});

function displayAgent(tab) {
    "use strict";
    var agentContent,
        i;

    agentContent = document.getElementsByClassName("agent-content");

    for (i = 0; i < agentContent.length; i += 1) {
        agentContent[i].style.display = "none";
    }

    document.getElementById(tab).style.display = "block";
}

var allBtn = document.getElementById("all"),
    physicalBtn = document.getElementById("physical"),
    virtualBtn = document.getElementById("virtual");

allBtn.addEventListener('click', function () {
    "use strict";
    displayAgent("all-content");
});

physicalBtn.addEventListener('click', function () {
    "use strict";
    displayAgent("physical-content");
});

virtualBtn.addEventListener('click', function () {
    "use strict";
    displayAgent("virtual-content");
});

/*RESOURCES*/
var idle1 = ["Ubuntu", "Firefox3", "Core-Duo"],
    building1 = ["Ubuntu", "Firefox3", "MySQL", "Core-Duo"],
    building2 = ["Ubuntu", "Firefox3", "MySQL", "Core-Duo"],
    idle2 = ["Ubuntu"],
    span,
    text,
    remove,
    icon;

function print(array, resourcesSpace) {
    "use strict";
    var rsrcs = document.getElementById(resourcesSpace),
        i;
    rsrcs.innerHTML = "";

    function removeItem(event) {
        var element = event.target.parentElement.getAttribute("data-re");
        array.splice(element, 1);
        print(array, resourcesSpace);
    }

    for (i = 0; i < array.length; i += 1) {
        span = document.createElement("span");
        span.setAttribute("class", "resources");
        span.setAttribute("data-re", i);
        text = document.createTextNode(array[i]);
        span.appendChild(text);
        icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-trash");
        span.appendChild(icon);
        rsrcs.appendChild(span);
        icon.addEventListener("click", removeItem);
    }
}

print(idle1, "serie1");
print(building1, "serie2");
print(building2, "serie3");
print(idle2, "serie4");

/*TOOLTIP*/
window.addEventListener("load", function () {
    "use strict";
    var tooltip = document.getElementsByClassName("tooltip"),
        add = document.getElementsByClassName("tt-add"),
        close = document.getElementsByClassName("tt-close"),
        box,
        i,
        openTooltip,
        closeTooltip;

    openTooltip = function () {
        box = this.name;
        document.getElementById(box).style.display = "inline-block";
    };

    for (i = 0; i < tooltip.length; i += 1) {
        tooltip[i].addEventListener("click", openTooltip);
    }

    closeTooltip = function () {
        box = this.name;
        document.getElementById(box).style.display = "none";
    };

    for (i = 0; i < close.length; i += 1) {
        close[i].addEventListener("click", closeTooltip);
    }
});

/*BUILDING & IDLE*/
var idleContent = document.getElementById("idleContent"),
    idleUsers = document.getElementsByClassName("idle"),
    buildingContent = document.getElementById("buildingContent"),
    activeUsers = document.getElementsByClassName("building");

idleContent.innerHTML = idleUsers.length;
buildingContent.innerHTML = activeUsers.length;