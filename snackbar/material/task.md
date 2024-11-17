---
pdf:
    title: 'Inf-Einf-B Übung: Kiosk'
---

# Kiosk

> ℹ️ Diese Aufgabe ist eine abgewandelte Version des [Snackbar Practice Problems von CS50](https://cs50.harvard.edu/x/2024/practice/snackbar/).
>
> **Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient lediglich zu Übungszwecken!

Stell dir vor, du bist am Strand und möchtest eine Reihe von Gerichten am Kiosk bestellen. Du hast nur eine begrenzte Menge Bargeld bei dir und möchtest vor der Bestellung den Gesamtpreis deiner Gerichte wissen.

Im Kiosk werden folgende Gerichte angeboten:

| Name      | Preis  |
| --------- | ------ |
| 🍔 Burger | 5,99 € |
| 🍕 Pizza  | 7,49 € |
| 🥗 Salad  | 4,99 € |
| 🍟 Fries  | 2,99 € |
| 🥤 Soda   | 1,99 € |

Wir sind Informatiker! Somit würden wir ein solches Problem grundsätzlich mithilfe eines Algorithmus lösen.

## Teilaufgabe 1

Implementiere diesen in einer C-Datei namens `snackbar.c`. In `snackbar.c` wirst du unter anderem zwei Funktionen und eine `struct` implementieren.

Deine Aufgabe besteht darin, eine `struct` namens `menu_item` zu erstellen, die den Namen eines Gerichts (`name`) sowie dessen Preis (`price`) speichert.

Außerdem soll die Funktion `get_cost` implementiert werden, die mithilfe eines **linearen Suchalgorithmus** den Preis eines ausgewählten Gerichts ermittelt und zurückgibt. Dabei soll die Suche nicht zwischen Groß- und Kleinschreibung unterscheiden. Kann ein angegebenes Gericht nicht gefunden werden, so soll `The provided dish wasn't found.` auf der Console ausgegeben werden.

Schließlich soll die `main`-Funktion implementiert werden, sodass sie den Nutzer auffordert, den Namen eines Gerichts einzugeben. Der Preis dieses Gerichts wird dann mit `get_cost` ermittelt und die Eingabe solange wiederholt, bis der Nutzer keine weiteren Gerichte mehr auswählt (Abbruch durch Drücken von <kbd>Enter</kbd>). Sobald die Eingabe beendet wird, gibt die Funktion den Gesamtpreis aller ausgewählten Gerichte aus. Die Ausgabe soll folgendermaßen formatiert sein: `The order costs 1.23 €\n`.

### Hinweise

-   Die Namen und Preise der Gerichte können fest codiert werden.
-   Es gibt eine Funktion in [`strings.h`](https://manual.cs50.io/#strings.h), die für die `get_cost`-Funktion hier nützlich sein könnte. _Welche ist das?_

### Details

Deine Aufgabe ist es nun eine `struct` und zwei Funktionen zu implementieren:

1. Die `struct` `menu_item`, welche die Gerichte und Preise repräsentiert.
2. Die Funktion `main`, um die Nutzereingaben zu verarbeiten und den Gesamtpreis zu berechnen.
3. Die Funktion `get_cost`, die den Preis eines Gerichts anhand des Namens ermittelt.

### Denkfrage

Warum ist ein Array von `struct`s hier besser geeignet als mehrere Arrays?

## Teilaufgabe 2

Die angegeben Preise in der vorherigen Teilaufgabe waren ohne Mehrwertsteuer angegeben. In dieser Teilaufgabe sollst du die Berechnung der Mehrwertsteuer in die Funktionalität integrieren. Die Mehrwertsteuer beträgt **19%** und soll mithilfe der Konstante `VAT_RATE` definiert werden.

### Aufgabe

Erweitere die Funktionalität des existierenden Programms, sodass der letztendlich ausgegebene Preis inklusive **19%** Mehrwertsteuer ist.

### Hinweise

-   Definiere die Mehrwertsteuer als Konstante.
-   Achte darauf, dass der berechnete Preis korrekt gerundet wird, falls nötig.
-   Überlege, an welcher Stelle die Berechnung der Mehrwertsteuer am sinnvollsten ist.

<div style="page-break-after: always"></div>

## Teilaufgabe 3

Das Lager im Kiosk ist sehr begrenzt. Somit können nicht viele Gerichte vorrätig gelagert werden. Es kommt also immer wieder vor, dass Kunden ein Gericht bestellen, dieses aber nicht verkauft werden kann, da es nicht auf Lager ist.
In dieser Teilaufgabe sollst du die `struct` und die Funktionen erweitern, um die Verfügbarkeit von Gerichten zu verwalten und zu überprüfen, ob die angeforderte Menge eines Gerichts bestellt werden kann.

### Aufgabe

1. Ergänze die bestehende `struct` um eine Möglichkeit, die verfügbare Menge der Gerichte zu speichern.
2. Implementiere eine Funktion, die es ermöglicht, ein Gericht anhand seines Namens zu finden und den _Array-Index_ dieses Gerichts in der Liste zurückzugeben. _Wie könnte man den Fall, dass ein Gericht nicht gefunden wird entsprechend behandeln?_
3. Überarbeite die bestehende `get_cost`-Funktion so, dass sie den `index` des Gerichts verwendet und basierend darauf prüft, ob genügend Gerichte vorrätig sind.

Falls genügend Gerichte vorrätig sind, wird die gewünschte Anzahl (in unserem Fall hier `-1`) von den verfügbaren Gerichten abgezogen und der Preis entsprechend berechnet. Achte darauf, dass die Logik sauber implementiert ist und der Nutzer bei fehlenden Gerichten klare Informationen erhält.

## Teilaufgabe 4

Kunden bestellen erfahrungsgemäß nicht nur ein Gericht für sich selbst, sondern auch mehrere Portionen desselben Gerichts für Freunde oder Familie.
Erweitere die `main`-Funktion, sodass der Nutzer neben dem Namen des Gerichts auch die gewünschte Anzahl (`amount`) eingeben kann. Übergib den `amount` anschließend an die `get_cost`-Funktion, die überprüfen soll, ob die gewünschte Menge vorrätig ist.

Die `get_cost`-Funktion muss dabei folgende Schritte durchführen:

1. **Verfügbare Menge prüfen:** Wenn die verfügbare Menge (`quantity`) des gewählten Gerichts ausreicht, wird die gewünschte Anzahl abgezogen, und der Preis wird basierend auf der eingegebenen Menge berechnet.
2. **Nicht ausreichende Menge behandeln:** Falls die gewünschte Menge die Verfügbarkeit übersteigt, sollen alle noch vorrätigen Gerichte verkauft werden, und der Preis für die verbleibende Anzahl wird berechnet. Zusätzlich soll die Meldung `Not enough dishes available. X dishes were sold.` ausgegeben werden, die den Nutzer darauf hinweist, dass die gewünschte Menge nicht vollständig verfügbar war.

Der von `get_cost` zurückgegebene Preis (einschließlich der korrekt berücksichtigten Menge) wird anschließend in der `main`-Funktion verarbeitet und zum Gesamtpreis addiert. Achte darauf, dass die Logik sauber implementiert ist und fehlerhafte Eingaben, wie negative oder nicht-numerische Werte, entsprechend behandelt werden.
