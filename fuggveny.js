var eredmeny = osszead(3, 4);
console.log(eredmeny);


function osszead(a, b) {
    console.log("összead")
    return a + b;
}

/* Függvénykifejezések */

var osszeadas = function (a, b) {
    return a + b;
}

console.log(osszeadas(5, 6));

/* Névtelen függvények */

function ID(elem) {
    return document.getElementById(elem);
}

window.addEventListener("load", init);

function init() {
    ID("szamol1").addEventListener("click",
        function () {
            osszead(3, 4);
        }
    );

    ID("szamol2").addEventListener("click",
        function (a, b) {
            console.log("összead")
            return a + b;
        }
    );

    ID("szamol3").addEventListener("click",
        (a, b) => {
            console.log("összead");
            return a + b;
        }
    )

    /* Callback függvények - nem azonnal futnak le, hanem csak akkor akikor bekövetkezik valamilyen esemény*/

    /* Aszinkron hívás */
    /* setTimeOUt */
    setTimeout(function () { console.log("csaaaa") }, 2000);
    setInterval(function () {
        var datumIdo = new Date();
        var ora = datumIdo.getHours();
        var perc = datumIdo.getMinutes();
        var masodperc = datumIdo.getSeconds();
        console.log(ora + ":" + perc + ":" + masodperc);
    }, 2000);

    /* setInterval */

}

function udvozles() {
    console.log("csa");
}

/*function ora() {
    var datumIdo = new Date();
    var ora = datumIdo.getHours();
    var perc = datumIdo.getMinutes();
    var masodperc = datumIdo.getSeconds();
    console.log(ora + ":" + perc + ":" + masodperc);
}*/



/*function (a, b) {
    return a + b;
}*/
