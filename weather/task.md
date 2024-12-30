# Wetter

::: info
Diese Aufgabe basiert auf _keinem CS50 Practice Problem_.

**Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient, wie das gesamte Material von [inf-lab.dev](https://inf-lab.dev), lediglich zu Übungszwecken!
:::

TODO: write introduction

## Aufgabenmaterial herunterladen

Um das Aufgabenmeterial herunterzuladen, gib folgenden Befehl in _ein neues Terminal_ in deinem Codespace ein:

```bash
wget -O - https://inf-lab.dev/weather/material/scripts/setup.sh | bash
```

## Teilaufgabe 1

Nachdem du das Aufgabenmaterial heruntergeladen hast, beginne damit, dich mit den bereitgestellten Dateien vertraut zu machen. Im Projekt findest du die Dateien `main.py`, `filter.py` und `city_weather.py`. Nimm dir etwas Zeit, um alle Dateien zu öffnen und ihren Aufbau sowie ihre grundlegende Funktionalität zu verstehen.

Ein zentraler Bestandteil dieser Aufgabe ist der Wetterdienst [wttr.in](https://wttr.in). Besuche die Website zunächst im Browser und rufe dort die Wetterinformationen für Bamberg ab, um ein Gefühl dafür zu bekommen, wie die Daten dargestellt werden. Lies dir anschließend die [Dokumentation](https://github.com/chubin/wttr.in) durch, um die verschiedenen Konfigurationsmöglichkeiten und Ausgabeformate zu verstehen.

Für die kommenden Schritte benötigen wir nicht alle Informationen, die der Dienst bereitstellt. Von Interesse sind lediglich die aktuelle _Temperatur_, die _Windgeschwindigkeit_ sowie das _Symbol_, das das Wetter veranschaulicht. Ein Beispiel für eine solche reduzierte Ausgabe könnte wie folgt aussehen:

```bash
Bamberg: 🌫  🌡️+0°C 🌬️→6km/h
```

Um diese reduzierte Darstellung von [wttr.in](https://wttr.in) abzurufen, musst du spezifische Parameter in der URL verwenden. Diese Parameter legen fest, welche Informationen zurückgegeben werden. Passe die URL so an, dass nur die gewünschten Daten – das Wettericon, die Temperatur und die Windgeschwindigkeit – angezeigt werden.

## Teilaufgabe 2

In dieser Teilaufgabe sollst du eine Funktion namens `fetch_weather` implementieren, mit der die Wetterdaten für einen angegebenen Ort abgerufen werden. Der Name der Stadt wird der Funktion als Parameter `city_name` übergeben. Ziel ist es, die relevanten Wetterinformationen als Textzeichenkette im folgenden Format zurückzugeben:

```bash
Bamberg: 🌫  🌡️+0°C 🌬️→6km/h
```

Deine Aufgabe besteht darin, die Funktion `fetch_weather` zu implementieren. Sie soll eine HTTP-Anfrage an die API von [wttr.in](https://wttr.in) senden, um die Wetterdaten im richtigen Format zu erhalten. Um die Anfrage zu stellen, wirst du die Bibliothek [requests](https://pypi.org/project/requests/) verwenden. Die Funktion soll dann die erhaltenen Daten als Text zurückgeben, der das Wetter, die Temperatur und die Windgeschwindigkeit für die angegebene Stadt enthält.

Mache dich zunächst mit der [requests](https://pypi.org/project/requests/)-Bibliothek vertraut.

## Teilaufgabe 3

Als nächstes wollen wir eine Klasse `Weather` erstellen, welche `city_name`, `temperature`, `wind` und `condition` erhält. Außerdem soll es `timestamp` geben, welcher automatisch auf die aktuelle Uhrzeit beim erstellen der Klasse gesetzt wird.

## Teilaufgabe 4

Schreibe nun eine Funktion `extract_data`, welche als Eingabe das Resultat aus [Teilaufgabe 2](#teilaufgabe-2) erhält und so auflöst, das die Temperatur, die Windstärke und das Icon einzeln zurückgegeben werden. Erstelle aus den erhaltenen Parametern nun eine `Weather`-Klasse. Füge die Klasse der Liste `weather_data` hinzu.

## Teilaufgabe 5

Rufe nun das aktuelle Wetter für die folgenden Städte ab:
- Munich
- Bamberg
- Amsterdam
- Nuremberg
- Rom

## Teilaufgabe 6

Implementiere Filter Klassen, um nach der Temperatur und nach der Windstärke zu filtern (Wert größer als oder kleiner als). Nur die Orte, die nach dem filtern übrig bleiben, sollen ausgegeben werden.
