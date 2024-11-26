document.getElementById('zinsForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Eingabewerte rausfinden
    const miete = parseFloat(document.getElementById('miete').value);
    const fälligkeitsdatum = new Date(document.getElementById('fälligkeitsdatum').value);
    const zahlungsdatum = new Date(document.getElementById('zahlungsdatum').value);

    // Überprüfen, ob die Eingaben
    if (zahlungsdatum <= fälligkeitsdatum) {
        document.getElementById('ergebnis').innerText = "Das Zahlungsdatum muss nach dem Fälligkeitsdatum liegen.";
        return;
    }

    // Anzahl der Tage
    const tageImVerzug = Math.ceil((zahlungsdatum - fälligkeitsdatum) / (1000 * 60 * 60 * 24));

    // Verzugszinsen berechnen (8,37% für Privatpersonen)
    const verzugszinsSatz = 8.37 / 100; // Basiszinssatz (3,37%) + 5%
    const zinsen = miete * verzugszinsSatz * (tageImVerzug / 365);

    // Ergebnis 
    document.getElementById('ergebnis').innerHTML = `
        <p>Anzahl der Tage im Verzug: <strong>${tageImVerzug}</strong></p>
        <p>Verzugszinsen: <strong>${zinsen.toFixed(2)} €</strong></p>
    `;
});
