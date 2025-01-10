# Laden

::: info
Diese Aufgabe basiert auf _keinem CS50 Practice Problem_.

**Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient, wie das gesamte Material von [inf-lab.dev](https://inf-lab.dev), lediglich zu Übungszwecken!
:::

TODO: EINLEITUNG
Online Shops sind kaum mehr wegzudenken, einfach geklickt und morgen ist es da. Viele Online Shops haben auch eine Website welche, neben vielen anderen Programmiersprachen, auch auf HTML, CSS und JavaScript basiert.

TODO: WARUM?

Deshalb möchten wir nun auch die Website eines einfachen Online Shops erstellen, welcher aus einer Produktliste und einem Einkaufswagen besteht.

## Aufgabenmaterial herunterladen

Um das Aufgabenmeterial herunterzuladen, gib folgenden Befehl in _ein neues Terminal_ in deinem Codespace ein:

```bash
wget -O - https://inf-lab.dev/shop/material/lab-shop.zip.sh | bash
```

## Teilaufgabe 1

Eine Website für einen Online Shop zu bauen ist keine leichte Aufgabe. Daher haben wir dir für diese Aufgabe [einige HTML-Elemente erstellt](./custom-elements). Diese kannst du zusätzlich zu den dir bereits bekannten Elementen verwenden.

Verschaffe dir zuerst einen Überblick über die verfügbaren Elemente und überlege, welche der Elemente du für den Einkaufswagen und welche du für die Produktliste benutzen könntest.

## Teilaufgabe 2

In dieser Teilaufgabe möchten wir die Produktliste implementieren. Die verfügbaren Produkte des Ladens kannst du der Datei `stock.py` entnehmen. Kopiere die Preise oder Icon aus dieser Datei jedoch nicht manuell, sondern verwende die [erstellten HTML-Elemente](./custom-elements).

Liste die Produkte in einer Tabelle auf, welche alle nötigen Informationen für Kunden enthält. Diese Tabelle sollte auch die Möglichkeit bieten, ein Produkt zum Einkaufswagen hinzuzufügen. Stelle sicher, dass der Preis _rechtsbündig_ ausgerichtet ist, da somit unterschiede zwischen den Preisen von Kunden leichter wargenommen werden können.
Das folgende Bild zeigt, wie diese Tabelle aussehen _könnte_.

![TODO: IMAGE](TODO: IMAGE)

## Teilaufgabe 3

Da wir nun unsere Produktliste erstellt haben und mit dieser auch Gegenstände in unseren Einkaufswagen legen können, sollten wir diesen auch anzeigen.
Erstelle hierfür eine Liste, welche die einzelnen Gegenstände des Einkaufswagens, zusammen mit ihrer Anzahl auflistet. Achte darauf, dass Produkte deren Anzahl null ist, auch nicht in der Liste angezeigt werden.

Füge schließlich noch eine Anzeige der Gesamtsumme zum Einkaufswagen hinzu.

Das folgende Bild zeigt, wie diese Liste mit Gesamtsumme aussehen _könnte_.

![TODO: IMAGE](TODO: IMAGE)

## Teilaufgabe 4

Super, nun ist fast der gesamte Laden fertig, lediglich die Gesamtsumme wird noch nicht berechnet.
Erstelle daher eine JavaScript Funktion `calculateTotal` auf der Seite, welche den Einkaufswagen als Argument erhält und den Gesamtpreis zurück gibt.
Diese Funktion wird dann automatisch vom vorgegebenen Code aufgerufen.

Die Funktion `calculateTotal` erhält ein _Array_ als Argument. Dieses besteht aus Objekten "dicts" der folgenden Struktur, fast so wie sie in `stock.py` gegeben sind.

```js
{
    stock: {
        name: "Burger",  // Name des Gegenstands
        icon: "🍔",     // Icon des Gegenstands
        price: 4.99,    // Preis des Gegenstands
    },
    quantity: 44,      // Anzahl des Gegenstands
}
```

<details>

<summary>Du weißt nicht wie du anfangen sollst?</summary>

Folgender Code wäre ziemlich sicher ein guter Anfang.

```js
function calculateTotal(cart) {
    let total = 0;

    // Iterate over the entire cart
    //    Add price of stock * quantity to total

    return total;
}
```

</details>
<details>

<summary>Wie kann ich über ein Array in JavaScript iterieren?</summary>

Folgender Code iteriert über das Array `names` und gibt jeden dieser Namen auf der Konsole aus.

```js
let names = ['Paul', 'Marius'];

for (let name in names) {
    console.log(name);
}
```

</details>
<details>

<summary>Wie kann ich auf Eigenschaften eines Objektes zugreifen?</summary>

Folgender Code gibt das Alter von `paul` auf der Konsole aus. Grundsätzlich kann aber, wie in Python auch, mit `paul['age']` auf das Alter zugegriffen werden.

```js
let paul = {
    name: 'Paul',
    age: 20,
};

console.log(paul.age);

// alternative way, just like in Python
console.log(paul['age']);
```

</details>

## Testen

Teste zuerst manuell, ob sich die Seite wie erwartet verhält und auch die gegebenen Anforderungen erfüllt.

::: info
Für diese Aufgabe gibt es keine `check50` Überprüfungen, da hier die Ergebnisse sehr individuell ausfallen.
:::

### Style

Führe den folgenden Befehl aus, um den Stil deines Codes mit `style50` zu analysieren:

```bash
style50 index.html
```
