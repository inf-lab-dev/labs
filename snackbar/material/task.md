---
pdf:
  title: 'Inf-Einf-B Übung: Kiosk'
---

# Kiosk

> Diese Aufgabe ist eine abgewandelte Version des [Snackbar Practice Problems von CS50](https://cs50.harvard.edu/x/2024/practice/snackbar/).
>
> **Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient lediglich zu Übungszwecken!

## Teilaufgabe 1

Stell dir vor, du bist am Strand und möchtest eine Reihe von Gerichten am Kiosk bestellen. Du hast nur eine
begrenzte Menge Bargeld bei dir und möchtest vor der Bestellung den Gesamtpreis deiner Gerichte wissen.

Wir sind Informatiker! Somit würden wir ein solches Problem grundsätzlich mithilfe eines Algorithmus lösen. Implementiere diesen in einer C-Datei namens `snackbar.c`. In `snackbar.c` wirst du unter anderem zwei Funktionen implementieren. Die erste ist `add_items`, die mindestens die ersten vier Artikel der Beach Burger Shack-Speisekarte hinzufügen soll. Dann vervollständigst du `get_cost`, die einen **linearen Suchalgorithmus** implementiert, um die Preise der ausgewählten Artikel zu ermitteln und zurückzugeben.

### Hinweise

- Du kannst die Menüartikel und Preise in der Funktion `add_items` fest codieren.
- Es gibt eine Funktion in [`strings.h`](https://manual.cs50.io/#strings.h), die hier nützlich sein könnte. _Welche ist das?_

### Details

Die `main`-Funktion ist bereits fertiggestellt. Nachdem sie `add_items` aufgerufen hat, um das Menüarray zu initialisieren, werden die Gerichte und ihre Preise ausgegeben. Anschließend wird der Nutzer aufgefordert, Artikel auszuwählen, bis er `Enter` drückt.

Deine Aufgabe ist es nun eine `struct` und zwei Funktionen zu vervollständigen:

1. Lege eine `struct` namens `menu_item` an. Die `struct` soll einen `string item` und ein `float price` enthalten.
2. `add_items`: Fügt mindestens die ersten vier Gerichte des Menüs hinzu.
3. `get_cost`: Gibt die Kosten für einen Artikel zurück- Debei muss ein **linearer Suchalgorithmus** verwendet werden. Dabei muss nicht zwischen Groß- und Kleinschreibung unterschieden werden.

### Denkfrage

Warum ist ein Array von `struct`s hier besser geeignet als mehrere Arrays?

## Teilaufgabe: prozentualer Rabatt

## Teilaufgabe: Mehrwertsteuer berechnen

## Teilaufgabe: Anzahl der Gerichte mit angebbar

## Teilaufgabe: Binäre Suche mit ids
