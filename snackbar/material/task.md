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

Wir sind Informatiker! Somit würden wir ein solches Problem grundsätzlich mithilfe eines Algorithmus lösen.
Implementiere diesen in einer C-Datei namens `snackbar.c`. In `snackbar.c` wirst du unter anderem zwei Funktionen und eine `struct` implementieren. 

Deine Aufgabe besteht darin, eine `struct` namens `menu_item` zu erstellen, die den Namen eines Gerichts (`name`) sowie dessen Preis (`price`) speichert.
Außerdem soll die Funktion `get_cost` implementiert werden, die mithilfe eines **linearen Suchalgorithmus** den Preis eines ausgewählten Gerichts ermittelt und zurückgibt.
Dabei soll die Suche nicht zwischen Groß- und Kleinschreibung unterscheiden. 
Schließlich soll die `main`-Funktion implementiert werden, sodass sie den Nutzer auffordert, den Namen eines Gerichts einzugeben. 
Der Preis dieses Gerichts wird dann mit `get_cost` ermittelt und die Eingabe solange wiederholt, bis der Nutzer keine weiteren Gerichte mehr auswählt (Abbruch durch Drücken von _Enter_). 
Sobald die Eingabe beendet wird, gibt die Funktion den Gesamtpreis aller ausgewählten Gerichte aus.

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

Die angegeben Preise in der vorherigen Teilaufgabe waren ohne Mehrwertsteuer angegeben. 
In dieser Teilaufgabe sollst du die Berechnung der Mehrwertsteuer in die Funktionalität integrieren. 
Die Mehrwertsteuer beträgt **19%** und wird mithilfe der Konstante `VAT_RATE` definiert.

## Aufgabe

Erweitere die Funktionalität des existierenden Programms, sodass der letztendlich ausgegebene Preis inklusive **19%** Mehrwertsteuer ist.

## Hinweis

- Definiere die Mehrwertsteuer als Konstante.
- Achte darauf, dass der berechnete Preis korrekt gerundet wird, falls nötig.
- Überlege, an welcher Stelle die Berechnung der Mehrwertsteuer am sinnvollsten ist.

## Teilaufgabe: Anzahl der Gerichte mit angebbar
