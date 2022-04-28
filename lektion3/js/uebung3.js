/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
    console.debug("Aufgabe 1 ==========================");

    //ToDo: füge ab hier Deinen Code ein
    let pizza = {
        art: "Tonno",
        belag: "Käse und Zwiebeln",
        skala: 10,
        gerneIsst: true,
    }
    console.debug(pizza)
}

/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
    console.debug("Aufgabe 2 ==========================");

    let ghibli = {
        name: "Studio Ghibli",
        gruendung: 1985,
        medium: "Anime",
    }

    //ToDo: füge ab hier in den debugs Deinen Code ein
    console.debug(Object.keys(ghibli))
    console.debug(Object.values(ghibli))
    console.debug(Object.entries(ghibli))
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
    console.debug("Aufgabe 3 ==========================");

    //ToDo: füge ab hier Deinen Code ein
    let kuenstler = {
        vorname: "Alfredolini",
        nachname: "Nudel",
        status: "offline",
        geboren: 1970,
        hobby: "pumper",
        taetigkeit: "Fitnessmodel"
    }

    for (let key of Object.keys(kuenstler)) {
        console.debug(key + ": " + kuenstler[key])
    }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
    aufgabe1()
    aufgabe2()
    aufgabe3()
}

main()