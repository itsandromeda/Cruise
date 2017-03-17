/*global document, window, removeItem, removeItem2, prompt*/
/*MOSTRAR TABS*/
window.addEventListener('load', function () { //Es necesario hacer esto dentro de un addEventListener al window de lo contrario se salta
    "use strict"; //esta línea de código.
    document.getElementById("default").click(); //Aquí hacemos que el tab de agents(que tiene id="default") se muestre por defecto.
});

function openCity(tab) {
    "use strict";
    var tabContent,
        i;

    tabContent = document.getElementsByClassName("tab-content"); // Obtenemos a todos los elementos con la clase 'tab-content' en el HTML y los ocultamos.
    for (i = 0; i < tabContent.length; i += 1) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tab).style.display = "block"; // seleccionamos el id del elemento que pasamos como parámetro y lo mostramos.
}

var dashBtn = document.getElementById("dashboard"),
    cruiseBtn = document.getElementById("cruise"),
    agentsBtn = document.getElementById("default"),
    helpBtn = document.getElementById("help");

dashBtn.addEventListener('click', function () { //desde la línea 26 a la 44 estamos haciendo que nuestros botones reaccionen al click y que
    "use strict"; //corra la función display con el parámetro respectivo, el cual pasa el id del contenido del 
    openCity("dashboard-tab"); //tab.
});

cruiseBtn.addEventListener('click', function () {
    "use strict";
    openCity("cruise-tab");
});

agentsBtn.addEventListener('click', function () {
    "use strict";
    openCity("agents-tab");
});

helpBtn.addEventListener('click', function () {
    "use strict";
    openCity("help-tab");
});
/*FIN MOSTRAR TABS*/

/*RESOURCES*/
var span,
    text,
    remove,
    icon,
    rsrcs,
    element,
    re,
    parent,
    i;

function print(array, parentId, elementClass) {
    "use strict";
    rsrcs = document.getElementById(parentId);

    for (i = 0; i < array.length; i += 1) {
        span = document.createElement("span");
        span.setAttribute("class", elementClass);
        span.setAttribute("data-re", i);
        text = document.createTextNode(array[i]);
        span.appendChild(text);
        remove = document.createElement("button");
        remove.setAttribute("class", "delete-btn");
        icon = document.createElement("i");
        icon.setAttribute("class", "fa fa-trash");
        remove.appendChild(icon);
        span.appendChild(remove);
        rsrcs.appendChild(span);
    }
}

print(["Ubuntu", "Firefox3", "Core-Duo"], "serie1", "idlee");
print(["Ubuntu", "Firefox3", "MySQL", "Core-Duo"], "serie2", "buildinge");
print(["Ubuntu", "Firefox3", "MySQL", "Core-Duo"], "serie3", "buildinge");
print(["Ubuntu"], "serie4", "idlee");
/*FIN RESOURCES*/

/*ABRIR Y CERRAR TOOLTIP*/
window.addEventListener("load", function () {
    "use strict";
    var tooltip = document.getElementsByClassName("tooltip"), //obtenemos a todos los elementos con la clase respectiva
        add = document.getElementsByClassName("tt-add"),
        close = document.getElementsByClassName("tt-close"),
        box, //declaramos el nombre de la variable que representará la caja del 'tooltip'
        i, //variable para el for loop
        openTooltip, //variable para el function expression que se encargará de abrir el 'tooltip'
        closeTooltip; //variable para el function expression que se encargará de cerrar el 'tooltip'

    openTooltip = function () { //function expression para definir el proceso de abrir el 'tooltip'
        box = this.name; //box almacena el valor del nombre del elemento en contexto
        document.getElementById(box).style.display = "inline-block"; //obtenemos el 'id' del div que almacena el 'tooltip' en contexto
        //indicamos que se muestre como "inline-clock"
        //*nuestro id y name llevan el mismo nombre, es por eso que esto funciona.*
    };

    for (i = 0; i < tooltip.length; i += 1) { //Le agregamos un evento 'click' a todos los elementos con clase 'tooltip'
        tooltip[i].addEventListener("click", openTooltip); //la función que corre al hacer click es la de abrir el tooltip(openTooltip)
    }

    closeTooltip = function () { //function expression para definir el proceso de cerrar el 'tooltip'
        box = this.name; //box almacena el valor del nombre del elemento en contexto
        document.getElementById(box).style.display = "none"; //obtenemos el 'id' del div que almacena el 'tooltip' en contexto
        //indicamos que no se muestre
    };

    for (i = 0; i < close.length; i += 1) { //Le agregamos un evento 'click' a todos los elementos con clase 'tt-close'
        close[i].addEventListener("click", closeTooltip); //la función que corre al hacer click es la de cerrar el tooltip(closeTooltip)
    }
});
/*FIN ABRIR Y CERRAR TOOLTIP*/

/*BUILDING & IDLE*/
var idleContent = document.getElementById("idleContent"), //obtenemos acceso al DOM e identificamos el espacio con el id respectivo
    idleUsers = document.getElementsByClassName("idle"), //identificamos a todos los elementos que contengan la clase 'idle'
    buildingContent = document.getElementById("buildingContent"), //Los dos pasos anteriores se repiten en esta y la siguiente línea
    activeUsers = document.getElementsByClassName("building");

idleContent.innerHTML = idleUsers.length; //modificamos el espacio con el id identificado anteriormente
buildingContent.innerHTML = activeUsers.length; //y hacemos un conteo de todos los elementos con el nombre de la clase respectiva
/*FIN BUILDING & IDLE*/