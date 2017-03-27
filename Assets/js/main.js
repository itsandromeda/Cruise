/*global window, document, data, console*/

/*SHOW TABS*/
window.addEventListener('load', function () {
    "use strict";
    document.getElementById("default").click();
});
/*DISPLAY TABS*/
function displayTabs(tab) {
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
    helpBtn = document.getElementById("help"),
    allBtn,
    physicalBtn,
    virtualBtn,
    i;

dashBtn.addEventListener('click', function () {
    "use strict";
    displayTabs("dashboard-tab");
    dashBtn.style.backgroundColor = "black";
    cruiseBtn.style.backgroundColor = "#808285";
    agentsBtn.style.backgroundColor = "#808285";
    helpBtn.style.backgroundColor = "#808285";
});

cruiseBtn.addEventListener('click', function () {
    "use strict";
    displayTabs("cruise-tab");
    dashBtn.style.backgroundColor = "#808285";
    cruiseBtn.style.backgroundColor = "black";
    agentsBtn.style.backgroundColor = "#808285";
    helpBtn.style.backgroundColor = "#808285";
});

agentsBtn.addEventListener('click', function () {
    "use strict";
    displayTabs("agents-tab");
    dashBtn.style.backgroundColor = "#808285";
    cruiseBtn.style.backgroundColor = "#808285";
    agentsBtn.style.backgroundColor = "black";
    helpBtn.style.backgroundColor = "#808285";
});

helpBtn.addEventListener('click', function () {
    "use strict";
    displayTabs("help-tab");
    dashBtn.style.backgroundColor = "#808285";
    cruiseBtn.style.backgroundColor = "#808285";
    agentsBtn.style.backgroundColor = "#808285";
    helpBtn.style.backgroundColor = "black";
});

/*DISPLAY AGENTS TAB CONTENT*/
function displayAgentsTab(tab) {
    "use strict";
    var agentContent,
        i;

    agentContent = document.getElementsByClassName("agent-content");

    for (i = 0; i < agentContent.length; i += 1) {
        agentContent[i].style.display = "none";
    }

    document.getElementById(tab).style.display = "block";
}

/*AGENTS TAB EVENTS*/
allBtn = document.getElementById("all");
physicalBtn = document.getElementById("physical");
virtualBtn = document.getElementById("virtual");

allBtn.addEventListener('click', function () {
    "use strict";
    displayAgentsTab("all-content");
});

physicalBtn.addEventListener('click', function () {
    "use strict";
    displayAgentsTab("physical-content");
});

virtualBtn.addEventListener('click', function () {
    "use strict";
    displayAgentsTab("virtual-content");
});

var i,
    resourcesSpan;

//PHYSICAL AGENTS
var physicalAgents = data.agents.filter(function (e) {
    "use strict";
    return e.type === 'physical';
});

var resources = data.agents.map(function (e) {
    "use strict";
    return e.resource;
});


for (i = 0; i < physicalAgents.length; i += 1) {
    document.getElementById("link" + i).innerHTML = data.agents[i].host;
    document.getElementById("details" + i).innerHTML = " | " + data.agents[i].status + " | " + data.agents[i].ip + " | " + data.agents[i].path;
}


var res0 = data.agents[0].resource.filter(function (e) {
    "use strict";
    return e;
});

var res1 = data.agents[1].resource.filter(function (e) {
    "use strict";
    return e;
});

var res2 = data.agents[2].resource.filter(function (e) {
    "use strict";
    return e;
});

var res3 = data.agents[3].resource.filter(function (e) {
    "use strict";
    return e;
});

function print(array, resourcesSpace) {
    "use strict";
    var rsrcs = document.getElementById(resourcesSpace),
        i,
        span,
        span2,
        text,
        icon;

    function removeItem(event) {
        var resContainer = event.target.parentNode;
        rsrcs.removeChild(resContainer);
    }

    for (i = 0; i < array.length; i += 1) {
        span = document.createElement("span");
        span2 = document.createElement("span");
        span.setAttribute("class", "resources");
        text = document.createTextNode(array[i]);
        span2.appendChild(text);
        span.appendChild(span2);
        icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-trash");
        span.appendChild(icon);
        rsrcs.appendChild(span);
        icon.addEventListener("click", removeItem);
    }
}

print(res0, "data-re0");
print(res1, "data-re1");
print(res2, "data-re2");
print(res3, "data-re3");

function pushArray(position, trimmedWord) {
    "use strict";
    var mainSpan = document.createElement("span"),
        subSpan = document.createElement("span"),
        trashBtn = document.createElement("i");

    mainSpan.setAttribute("class", "resources");
    subSpan.innerHTML = trimmedWord;
    trashBtn.setAttribute("class", "fa fa-trash");

    trashBtn.addEventListener('click', function (e) {
        var parentSpan = e.target.parentNode;
        parentSpan.parentNode.removeChild(parentSpan);
    });

    mainSpan.appendChild(subSpan);
    mainSpan.appendChild(trashBtn);
    data.agents[position].resource.push(trimmedWord);
    return mainSpan;
}

var btn1 = document.getElementById("add-00"),
    btn2 = document.getElementById("add-01"),
    btn3 = document.getElementById("add-02"),
    btn4 = document.getElementById("add-03");

btn1.addEventListener('click', function (e) {
    "use strict";
    var addResources = document.getElementById("t-0").value,
        splitResources,
        blockPos,
        blockArrayLength,
        i,
        trimmed;

    if (addResources) {
        splitResources = addResources.split(',');
        blockPos = parseInt(e.target.getAttribute('data-add'), 10);

        for (i = 0; i < splitResources.length; i += 1) {
            trimmed = splitResources[i].trim();
            if (trimmed) {
                document.getElementById('data-re0').appendChild(pushArray(blockPos, trimmed));
            }
        }
        document.getElementById("t-0").value = "";
    }
});

btn2.addEventListener('click', function (e) {
    "use strict";
    var addResources = document.getElementById("t-1").value,
        splitResources,
        blockPos,
        blockArrayLength,
        i,
        trimmed;

    if (addResources) {
        splitResources = addResources.split(',');
        blockPos = parseInt(e.target.getAttribute('data-add'), 10);

        for (i = 0; i < splitResources.length; i += 1) {
            trimmed = splitResources[i].trim();
            if (trimmed) {
                document.getElementById('data-re1').appendChild(pushArray(blockPos, trimmed));
            }
        }
        document.getElementById("t-1").value = "";
    }
});

btn3.addEventListener('click', function (e) {
    "use strict";
    var addResources = document.getElementById("t-2").value,
        splitResources,
        blockPos,
        blockArrayLength,
        i,
        trimmed;

    if (addResources) {
        splitResources = addResources.split(',');
        blockPos = parseInt(e.target.getAttribute('data-add'), 10);

        for (i = 0; i < splitResources.length; i += 1) {
            trimmed = splitResources[i].trim();
            if (trimmed) {
                document.getElementById('data-re2').appendChild(pushArray(blockPos, trimmed));
            }
        }
        document.getElementById("t-2").value = "";
    }
});

btn4.addEventListener('click', function (e) {
    "use strict";
    var addResources = document.getElementById("t-3").value,
        splitResources,
        blockPos,
        blockArrayLength,
        i,
        trimmed;

    if (addResources) {
        splitResources = addResources.split(',');
        blockPos = parseInt(e.target.getAttribute('data-add'), 10);

        for (i = 0; i < splitResources.length; i += 1) {
            trimmed = splitResources[i].trim();
            if (trimmed) {
                document.getElementById('data-re3').appendChild(pushArray(blockPos, trimmed));
            }
        }
        document.getElementById("t-3").value = "";
    }
});

/*OPEN & CLOSE TOOLTIP*/
window.addEventListener("load", function () {
    "use strict";
    var tooltip = document.getElementsByClassName("tooltip"),
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
    buildingContent = document.getElementById("buildingContent");

var idleUsers = data.agents.filter(function (e) {
    "use strict";
    return e.status === 'idle';
});

var activeUsers = data.agents.filter(function (e) {
    "use strict";
    return e.status === 'building';
});

idleContent.innerHTML = idleUsers.length;
buildingContent.innerHTML = activeUsers.length;