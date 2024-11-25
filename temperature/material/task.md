---
pdf:
    title: 'Inf-Einf-B Übung: Temperatur'
---

# Temperatur

> ℹ️ Diese Aufgabe basiertauf dem [Temps Practice Problem von CS50](https://cs50.harvard.edu/x/2024/practice/temps/).
>
> **Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient, wie das gesamte Material von [inf-lab.dev](https://inf-lab.dev), lediglich zu Übungszwecken!

Jedes Jahr brechen wir neue Rekorde für das wärmste jemals aufgezeichnete Wetter. 
Klimawissenschaftler analysieren sogenannte _neue Normalwerte_ über mehrere Jahre hinweg, um zukünftige Bedingungen besser vorhersehen und geeignete Maßnahmen ergreifen zu können.
Die offiziellen Normalwerte basieren auf einem einheitlichen Zeitraum von 30 Jahren. 
Sie umfassen jährliche, saisonale, monatliche, tägliche und stündliche Durchschnittswerte sowie Statistiken zu Temperatur, Niederschlag und anderen klimatologischen Variablen, die von fast 15.000 Wetterstationen in den USA erhoben werden.
Der Juli ist in den meisten großen US-Städten der heißeste Monat des Jahres. Tageshöchsttemperaturen von über 80 Grad Fahrenheit sind nahezu überall üblich.

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

In der ersten Teilaufgabe wollen wir die in der Tabelle gegebenen Daten entsprechend aufbereiten, sodass wir sie in [Teilaufgabe 2](#teilaufgabe-2) weiterverwenden können.
Erstelle hierfür in einer Datei namens `temperature.c` eine `struct` mit dem Namen `avg_temp`, die den Namen einer Stadt und die entsprechende Temperatur im Juli speichert.
Um die Tabellendaten nun im Programm verarbeiten zu können, soll eine Funktion `create_cities` erstellt werden, welche `avg_temp` `struct`s entsprechend der gegebenen Tabelle anlegt und in einem Array speichert.
Die Funktion `create_cities` soll in der `main`-Funktion aufgerufen werden.

## Teilaufgabe 2

Nun wollen wir das in [Teilaufgabe 1](#teilaufgabe-1) angelegte Array so sortieren, dass die `avg_temp` `struct` mit der höchsten Temperatur an erster Stelle steht.
Implementiere hierfür einen Sortieralgorithmus in einer Funktion namens `sort_cities`.

**Frage:** Wie lautet der Name der Stadt mit der höchsten Durchschnittstemperatur im Juli? 
Gib den Namen auf der Konsole im folgenden Format aus: `Die höchste Temperatur im Juli herrscht in Austin` (Die Stadt _Austin_ wird hier nur als Beispiel genutzt. Das ist logischerweise nicht die wärmste Stadt, wie in der Tabelle ersichtlich).

## Testen

Teste zuerst manuell, ob die Städte in der korrekten Reihenfolge sortiert sind.

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