
/**
 * Lektion 4: Bedingungen
 */

/**
 * 1) 1) Erstelle eine if-Anweisung, die abfragt, ob ein bestimmter Artikel bereits gekauft wurde */
function artikel_Gekauft() {
    console.debug("Aufgabe 1 ==========================");
    //ToDo: füge ab hier deinen Code ein
    let artikelName = "Streukäse"
    let artikelGekauft = true
    console.debug("Artikel kaufen:")
    if(artikelGekauft == true) {
        console.debug("[Artikel] \"" +artikelName+ "\" wurde gekauft")
    }
}


/**
 * 2) Erstelle eine if-Abfrage, die in der Kosole ausgibt, dass ein Artikel hinzugefügt wurde,
 * falls der `artikelName` NICHT leer ist.
 */
function artikel_Hinzufuegen() {
    console.debug("Aufgabe 2 ==========================");
    //ToDo: füge ab hier deinen Code ein
    let gruppenName = "Getreide"
    let artikelName = "Quinoa"
    console.debug("Artikel Hinzufügt:")
    if (artikelName !== "") {
        console.debug("[gruppenName] \""+artikelName+ "\" hinzugefügt")
    }
}

/**
 * 3) Erstelle eine if-else-Anweisung, die überprüft ob die Gruppe `neueGruppe` bereits im leeren Array `gleicheGruppe`
 * existiert und dementsprechend passende Sätze auf der Konsole ausgibt
 */
function gruppe_Hinzufuegen() {
    console.debug("Aufgabe 3 ==========================");
    // ToDo: füge ab hier deinen Code ein
    let gleicheGruppe = []
    let neueGruppe = "Getränke"
    console.debug("Gruppe hinzufügen:")
    if (gleicheGruppe == "") {
        console.debug("[Add]Gruppe \""+neueGruppe+ "\" hinzugefügt")
    }
}

/**
 * 4) Überprüfe mit Hilfe einer switch-case-Anweisung, ob ein bestimmter Artikel in dem Array `einkaufsliste` vorkommt
 */
function einkaufsliste_Vorhanden() {
    console.debug("Aufgabe 4 ==========================");
    // ToDo: füge ab hier deinen Code ein
    let milchProdukte = ["Milch", "Sahne", "Joghurt"]
    let artikel = "Eisenbergsalat"
    console.debug("Milchprodukte finden:")
    switch (artikel) {
        case 1:
            "Milch"
            console.debug("Artikel \""+artikel+ "\" ist ein Milchprodukt")
        case 2:
            "Sahne"
            console.debug("Artikel \""+artikel+ "\" ist ein Milchprodukt")
        case 3:
            "Joghurt"
            console.debug("Artikel \""+artikel+ "\" ist ein Milchprodukt")
            break;
        default:
            console.debug("Artikel \""+artikel+ "\" ist KEIN Milchprodukt")
    }
}

/**
 * ZUSATZ: Durch folgenden Code sollst du als Zahl erhalten, an welcher Stelle im Array ein bestimmter Artikel steht
 */
function zusatz_indexOf() {
    console.debug("Zusatzaufgabe ==========================");
    // ToDo: füge ab hier deinen Code ein
    const einkaufsliste = ["Tofu", "Milch", "Butter", "Honig"]
    console.debug("Enthält die Einkaufsliste Tomaten?")
    if (einkaufsliste.indexOf("Tomate") == -1) {
        console.debug("Auf der Einkaufsliste stehen Keine \"Tomaten\"")
    }
    else {
        console.debug("Auf der Einkaufsliste stehen Tomaten")
    }
}
function main() {
    artikel_Gekauft()
    artikel_Hinzufuegen()
    gruppe_Hinzufuegen()
    einkaufsliste_Vorhanden()
    zusatz_indexOf()
}

main()
export {
    artikel_Gekauft, artikel_Hinzufuegen, gruppe_Hinzufuegen, einkaufsliste_Vorhanden, zusatz_indexOf
}