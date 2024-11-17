---
pdf:
  title: 'Inf-Einf-B Übung: Kiosk'
---

# Kiosk

> Diese Aufgabe ist eine abgewandelte Version des [Snackbar Practice Problems von CS50](https://cs50.harvard.edu/x/2024/practice/snackbar/).
>
> **Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient lediglich zu Übungszwecken!

## Teilaufgabe 1

Stell dir vor, du bist am Strand und möchtest eine Reihe von Gerichten am Kiosk bestellen. Du hast nur eine begrenzte Menge Bargeld bei dir und möchtest vor der Bestellung den Gesamtpreis deiner Gerichte wissen.

Wir sind Informatiker! Somit würden wir ein solches Problem grundsätzlich mithilfe eines Algorithmus lösen. Implementiere diesen in einer C-Datei namens `snackbar.c`. In `snackbar.c` wirst du unter anderem zwei Funktionen und eine `struct` implementieren. 

Deine Aufgabe besteht darin, eine `struct` namens `menu_item` zu erstellen, die den Namen eines Gerichts (`name`) sowie dessen Preis (`price`) speichert. Außerdem soll die Funktion `get_cost` implementiert werden, die mithilfe eines **linearen Suchalgorithmus** den Preis eines ausgewählten Gerichts ermittelt und zurückgibt. Dabei soll die Suche nicht zwischen Groß- und Kleinschreibung unterscheiden. Kann ein angegebenes Gericht nicht gefunden werden, so soll `Das angegeben Gericht konnte nicht gefunden werden.` auf der Console ausgegeben werden. Schließlich soll die `main`-Funktion implementiert werden, sodass sie den Nutzer auffordert, den Namen eines Gerichts einzugeben. Der Preis dieses Gerichts wird dann mit `get_cost` ermittelt und die Eingabe solange wiederholt, bis der Nutzer keine weiteren Gerichte mehr auswählt (Abbruch durch Drücken von _Enter_). Sobald die Eingabe beendet wird, gibt die Funktion den Gesamtpreis aller ausgewählten Gerichte aus. Die Ausgabe soll folgendermaßen formatiert sein: `Die Bestellung kostet 1.23 €\n`.

### Hinweise

- Die Namen und Preise der Gerichte können fest codiert werden.
- Es gibt eine Funktion in [`strings.h`](https://manual.cs50.io/#strings.h), die für die `get_cost`-Funktion hier nützlich sein könnte. _Welche ist das?_

### Details

Deine Aufgabe ist es nun eine `struct` und zwei Funktionen zu implementieren:

1. Die `struct` `menu_item`, welche die Gerichte und Preise repräsentiert.
2. Die Funktion `main`, um die Nutzereingaben zu verarbeiten und den Gesamtpreis zu berechnen.
3. Die Funktion `get_cost`, die den Preis eines Gerichts anhand des Namens ermittelt.

### Denkfrage

Warum ist ein Array von `struct`s hier besser geeignet als mehrere Arrays?

## Teilaufgabe 2

Die angegeben Preise in der vorherigen Teilaufgabe waren ohne Mehrwertsteuer angegeben. In dieser Teilaufgabe sollst du die Berechnung der Mehrwertsteuer in die Funktionalität integrieren. Die Mehrwertsteuer beträgt **19%** und wird mithilfe der Konstante `VAT_RATE` definiert.

### Aufgabe

Erweitere die Funktionalität des existierenden Programms, sodass der letztendlich ausgegebene Preis inklusive **19%** Mehrwertsteuer ist.

### Hinweis

- Definiere die Mehrwertsteuer als Konstante.
- Achte darauf, dass der berechnete Preis korrekt gerundet wird, falls nötig.
- Überlege, an welcher Stelle die Berechnung der Mehrwertsteuer am sinnvollsten ist.

## Teilaufgabe 3

In dieser Teilaufgabe sollst du die `struct` und die Funktionen erweitern, um die Verfügbarkeit von Gerichten zu verwalten und zu überprüfen, ob die angeforderte Menge eines Gerichts bestellt werden kann.

Erweitere die `struct` `menu_item`, indem du ein neues Feld `quantity` hinzufügst, das die verfügbare Anzahl jedes Gerichts speichert. Implementiere eine neue Funktion `find_item_by_name`, die eine **lineare Suche** durchführt, um ein Gericht anhand seines Namens zu finden, und den Index des entsprechenden Gerichts zurückgibt. Kann das angegebene Gericht nicht gefunden werden, so kann `-1` zurückgegeben werden. Refactore anschließend die Funktion `get_cost`, sodass sie den _Index_ des Gerichts von `find_item_by_name` erhält und die Menge überprüft. Berücksichtige, dass `find_item_by_name` den Wert `-1` zurück gibt, wenn das Gericht nicht gefunden wurde.

Falls genügend Gerichte vorrätig sind, wird die gewünschte Anzahl (in unserem Fall hier `-1`) abgezogen und der Preis entsprechend berechnet. Sind nicht genügend Gerichte verfügbar, werden alle verbleibenden Einheiten verkauft, und der Nutzer mit der Nachricht `Nicht genügend Gerichte verfügbar.` darauf hingewiesen, dass die gewünschte Menge nicht vollständig geliefert werden konnte. Achte darauf, dass die Logik sauber implementiert ist und der Nutzer bei fehlenden Gerichten klare Informationen erhält.


## Teilaufgabe 4

Erweitere die `main`-Funktion, sodass der Nutzer neben dem Namen des Gerichts auch die gewünschte Anzahl (`amount`) eingeben kann. Übergib den `amount` anschließend an die `get_cost`-Funktion, die überprüfen soll, ob die gewünschte Menge vorrätig ist.

Die `get_cost`-Funktion muss dabei folgende Schritte durchführen:

1. **Verfügbare Menge prüfen:** Wenn die verfügbare Menge (`quantity`) des gewählten Gerichts ausreicht, wird die gewünschte Anzahl abgezogen, und der Preis wird basierend auf der eingegebenen Menge berechnet.
2. **Nicht ausreichende Menge behandeln:** Falls die gewünschte Menge die Verfügbarkeit übersteigt, sollen alle noch vorrätigen Gerichte verkauft werden, und der Preis für die verbleibende Anzahl wird berechnet. Zusätzlich soll eine Meldung ausgegeben werden, die den Nutzer darauf hinweist, dass die gewünschte Menge nicht vollständig verfügbar war.

Der von get_cost zurückgegebene Preis (einschließlich der korrekt berücksichtigten Menge) wird anschließend in der `main`-Funktion verarbeitet und zum Gesamtpreis addiert. Achte darauf, dass die Logik sauber implementiert ist und fehlerhafte Eingaben, wie negative oder nicht-numerische Werte, entsprechend behandelt werden.
