---
pdf:
    title: 'Inf-Einf-B Übung: Temperatur'
---

# Temperatur

> ℹ️ Diese Aufgabe basiertauf dem [Temps Practice Problem von CS50](https://cs50.harvard.edu/x/2024/practice/temps/).
>
> **Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient, wie das gesamte Material von [inf-lab.dev](https://inf-lab.dev), lediglich zu Übungszwecken!

Wir scheinen jedes Jahr Rekorde für das wärmste jemals aufgezeichnete Wetter zu brechen. Klimawissenschaftler verfolgen die so genannten _neuen Normalwerte_ über mehrere Jahre hinweg, damit wir die Bedingungen in der nahen Zukunft besser vorhersagen und uns darauf vorbereiten können.
Die offiziellen Normalwerte werden für einen einheitlichen Zeitraum von 30 Jahren berechnet und bestehen aus jährlichen/saisonalen, monatlichen, täglichen und stündlichen Durchschnittswerten und Statistiken zu Temperatur, Niederschlag und anderen klimatologischen Variablen von fast 15.000 US-Wetterstationen.

Der Juli ist für die meisten großen US-Städte der heißeste Monat des Jahres. Tagestemperaturen über 80 Grad Fahrenheit treten fast überall regelmäßig auf.

## Teilaufgabe 1

| Stadt         | Temperatur im Juli |
| ------------- | -----------------: |
| Austin        |                 97 |
| Boston        |                 82 |
| Chicago       |                 85 |
| Denver        |                 90 |
| Las Vegas     |                105 |
| Los Angeles   |                 82 |
| Miami         |                 97 |
| New York      |                 85 |
| Phoenix       |                107 |
| San Francisco |                 66 |

In der ersten Teilaufgabe wollen wir die in der Tabelle gegebenen Daten entsprechend aufbereiten, sodass wir sie in [Teilaufgabe 2](#teilaufgabe-2) weiter verwenden können.
Erstelle dazu eine `struct` namens `avg_temp`, die den Namen einer Stadt und die zugehörige Temperatur im Juli speichert.
Um die Daten aus der Tabelle nun im Programm verarbeiten zu können, soll eine Funktion `create_cities` aufgerufen werden, welche `avg_temp` `struct`s entsprechend der gegebenen Tabelle anlegt und in einem Array speichert.
`create_cities` soll in der `main` Funktion aufgerufen werden.

## Teilaufgabe 2

-   Funktion `sort_cities` erstellen die Städte nach temperatur sortiert, sodass höchste Temperatur zuerst kommt

## Testen

Um das Programm auch mit Bildern aus dem Internet testen zu können, kann das mitgelieferte Skript `image.py` verwendet werden.
Verwende dazu `python3 image.py`. Du wirst nun dazu aufgefordert den Link zu einem Bild einzugeben. Nach dem drücken von <kbd>Enter</kbd> wird das Bild heruntergeladen und als _BMP_ Datei gespeichert.
Um das Skript zu verlassen, drücke einfach <kbd>Enter</kbd> ohne einen Link einzugeben.

Alternativ kannst du auch einfach die mitgelieferte `uni.bmp` Datei verwenden.

> ℹ️ Wirf gerne einen Blick in das Python Skript nachdem wir in der Vorlesung Python erreicht haben!

### Korrektheit

Verwende dazu je nach Teilaufgabe die folgenden Befehle, um dein Programm mit `check50` zu überprüfen.

-   **Teilaufgabe 1:** `check50 -l inf-lab-dev/check/temperature/a1`
-   **Teilaufgabe 2:** `check50 -l inf-lab-dev/check/temperature/a2`

<div style="page-break-after: always"></div>

### Style

Führe den folgenden Befehl aus, um den Stil deines Codes mit `style50` zu analysieren:

```bash
style50 temperature.c
```
