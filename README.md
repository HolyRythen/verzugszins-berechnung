Hier ist die `README.md`-Datei für dein GitHub-Projekt:

```markdown
# Verzugszins-Rechner

Ein einfacher Webanwendung, die Verzugszinsen für verspätete Mietzahlungen berechnet. Die Anwendung richtet sich an Privatpersonen und basiert auf dem aktuellen Basiszinssatz in Deutschland.

## Funktionen
- Berechnung der Anzahl der Tage im Verzug basierend auf dem Fälligkeits- und Zahlungsdatum.
- Berechnung der Verzugszinsen gemäß § 288 Abs. 1 BGB für Privatpersonen (Basiszinssatz + 5 Prozentpunkte).
- Benutzerfreundliche Oberfläche mit HTML, CSS und JavaScript.

## Installation
1. Klone das Repository:
   ```bash
   git clone https://github.com/dein-benutzername/verzugszins-rechner.git
   ```
2. Öffne die Datei `index.html` in deinem bevorzugten Browser.

## Nutzung
1. Gib den Mietbetrag, das Fälligkeitsdatum und das Zahlungsdatum in die Felder ein.
2. Klicke auf "Berechnen".
3. Die Anzahl der Verzugstage und die berechneten Verzugszinsen werden direkt angezeigt.

## Beispiel
Wenn die Miete 1.000 € beträgt, das Fälligkeitsdatum der 1. November 2024 ist und die Zahlung erst am 11. November 2024 erfolgt, beträgt der Verzug:
- **10 Tage**
- **2,29 €** Verzugszinsen (bei 8,37 % p.a.).

## Aktueller Basiszinssatz
Der aktuelle Basiszinssatz in Deutschland wird von der Deutschen Bundesbank veröffentlicht und halbjährlich angepasst. Zum 1. Juli 2024 beträgt der Basiszinssatz **3,37 %**.  
Weitere Informationen zum Basiszinssatz findest du auf der offiziellen Seite der Deutschen Bundesbank:  
[https://www.bundesbank.de/de/aufgaben/geldpolitik/basiszinssatz](https://www.bundesbank.de/de/aufgaben/geldpolitik/basiszinssatz).

## Anpassung des Zinssatzes
Um den Verzugszins bei Änderungen des Basiszinssatzes anzupassen, editiere die Variable `verzugszinsSatz` im `script.js`:
```javascript
const verzugszinsSatz = (Basiszinssatz + 5) / 100; // Beispiel: 8,37% (3,37% + 5%)
```

## Technologie-Stack
- **HTML**: Struktur der Webseite
- **CSS**: Gestaltung der Benutzeroberfläche
- **JavaScript**: Berechnungslogik

## Mitwirken
Beiträge sind willkommen!  
Erstelle einen Fork, nimm Änderungen vor und erstelle einen Pull Request.
