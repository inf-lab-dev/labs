# Wetter

::: info
Diese Aufgabe basiert auf _keinem CS50 Practice Problem_.

**Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient, wie das gesamte Material von [inf-lab.dev](https://inf-lab.dev), lediglich zu Übungszwecken!
:::

Das Wetter kann entscheidend sein – sei es für die Wahl des nächsten Urlaubsziels oder die Planung von Aktivitäten. Aber wie findet man gezielt Orte, die den eigenen Wettervorstellungen entsprechen? Um dies zu erleichtern, entwickeln wir ein Python-Programm, das genau diese Aufgabe übernimmt.

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

In dieser Teilaufgabe sollst du eine Klasse `CityWeather` erstellen, die für eine bestimmte Stadt die Wetterdaten speichert. Die Klasse soll folgende Attribute erhalten:

- `city_name`: Der Name der Stadt, für die das Wetter abgerufen wird
- `condition`: Das Symbol, welches anzeigt, wie das Wetter momentan ist - in unserem Beispiel "🌫".
- `temperature`: Die aktuelle Temperatur in der Stadt.
- `wind`: Die Windgeschwindigkeit.

`temperature` und `wind` sollen den Datentyp `int` haben.

Die Klasse `CityWeather` soll in der Datei `city_weather.py` implementiert werden.

## Teilaufgabe 4

In dieser Teilaufgabe solltest du eine Funktion namens `extract_data` implementieren, die das Ergebnis der Funktion `fetch_weather` (aus [Teilaufgabe 2](#teilaufgabe-2)) entgegennimmt und die relevanten Daten, wie Ort, Temperatur, Windstärke und Symbol extrahiert.

Die Funktion `extract_data` erwartet einen String als Eingabe, der das Ergebnis der `fetch_weather`-Funktion ist, also eine Wetterbeschreibung im Format:

```bash
Bamberg: 🌫  🌡️+0°C 🌬️→6km/h
```

Die extrahierten Informationen, wie stadtname, das Symbol, die Temperatur und die Windgeschwindigkeit, werden dann genutzt, um ein Objekt der `CityWeather`-Klasse zu erstellen. Diese Klasse wurde in der [vorherigen Teilaufgabe](#teilaufgabe-3) definiert. Beim Erstellen des `CityWeather`-Objekts wird der Stadtname, das Wettericon, die Temperatur und die Windgeschwindigkeit übergeben. Die Funktion `extract_data` gibt also nun ein Objekt des Typs `CityWeather` zurück.

Schreibe nun eine Funktion `extract_data`, welche als Eingabe das Resultat aus [Teilaufgabe 2](#teilaufgabe-2) erhält und so auflöst, das die Temperatur, die Windstärke und das Icon einzeln zurückgegeben werden. Erstelle aus den erhaltenen Parametern nun eine `Weather`-Klasse. Füge die Klasse der Liste `weather_data` hinzu.

## Teilaufgabe 5

In dieser Teilaufgabe werden wir nun die gesamte Funktionalität der vorherigen Teilaufgaben nutzen.

Im bestehenden Codegerüst ist bereits eine Liste mit Städtenamen namens `CITIES_LIST` vorhanden. Du sollst nun eine Schleife erstellen, die über diese Liste iteriert und für jede Stadt das Wetter abruft. Dazu wird die Funktion `fetch_weather` verwendet, die das Wetter für eine Stadt abruft und im Format eines Strings zurückgibt.

Sobald du das Wetter für eine Stadt abgerufen hast, musst du die Daten mit der Funktion `extract_data` extrahieren. Diese Funktion liefert dir die relevanten Wetterinformationen wie die Temperatur, die Windgeschwindigkeit und das Symbol. Die extrahierten Daten nutzt du, um ein neues `CityWeather`-Objekt zu erstellen, das du dann der Liste `cities_weather` hinzufügst.

Am Ende dieser Aufgabe enthält die Liste `cities_weather` für jede Stadt ein `CityWeather`-Objekt mit den entsprechenden Wetterinformationen.

## Teilaufgabe 6

In dieser Aufgabe geht es darum, die Liste `cities_weather` zu filtern und zu prüfen, welche Städte den angegebenen Filterkriterien entsprechen. Die Filterlogik soll in der Datei `filter.py` implementiert werden. Du kannst dabei auf der bereits vorhandene Klasse `Filter` aufbauen, die du nicht verändern musst. Stattdessen wirst du Subklassen der `Filter`-Klasse erstellen, die die spezifische Filterlogik implementieren.

### TempRangeFilter

Die erste Subklasse, die du implementieren sollst, ist die `TempRangeFilter`-Klasse. Diese Klasse wird von der `Filter`-Klasse erben und ermöglicht es, Städte anhand ihrer Temperatur zu filtern. Beim Erstellen der `TempRangeFilter`-Klasse werden zwei Parameter, `min_temp` und `max_temp`, übergeben. Diese definieren den Temperaturbereich, innerhalb dessen die Städte überprüft werden sollen.

Die `evaluate`-Methode der `TempRangeFilter`-Klasse soll ein Objekt des Typs `CityWeather` entgegennimmt, das die Wetterdaten einer Stadt enthält. Die Methode wird dann prüfen, ob die Temperatur der Stadt innerhalb des angegebenen Bereichs (`min_temp` bis `max_temp`) liegt.

Wenn die Temperatur des `CityWeather`-Objekts innerhalb des Bereichs liegt, gibt die Methode `True` zurück, andernfalls `False`.

### WindRangeFilter

Die zweite Subklasse, die du implementieren sollst, ist die `WindRangeFilter`-Klasse. Diese Klasse wird von der `Filter`-Klasse erben und ermöglicht es, Städte anhand ihrer Windstärke zu filtern. Beim Erstellen der `WindRangeFilter`-Klasse werden zwei Parameter, `min_wind` und `max_wind`, übergeben. Diese definieren den Windstärkebereich, innerhalb dessen die Städte überprüft werden sollen.

Die `evaluate`-Methode der `WindRangeFilter`-Klasse soll ein Objekt des Typs `CityWeather` entgegennimmt, das die Wetterdaten einer Stadt enthält. Die Methode wird dann prüfen, ob die Windstärke der Stadt innerhalb des angegebenen Bereichs (`min_wind` bis `max_wind`) liegt.

Wenn die Windstärke des `CityWeather`-Objekts innerhalb des Bereichs liegt, gibt die Methode `True` zurück, andernfalls `False`.

### ConditionFilter

Die dritte Subklasse, die du implementieren sollst, ist die `ConditionFilter`-Klasse. Diese erbt von der `Filter`-Klasse und ermöglicht es, Städte anhand ihres Wetter-Symbols zu filtern. Beim Erstellen der `ConditionFilter`-Klasse wird ein Parameter übergeben: `condition`. Dieser definiert das Wetter-Symbol, das die Stadt erfüllen soll.

Die `evaluate`-Methode der `ConditionFilter`-Klasse erhält ein Objekt des Typs `CityWeather`, das die Wetterdaten einer Stadt enthält. Die Methode prüft dann, ob das Wetter-Symbol der Stadt dem übergebenen `condition`-Wert entspricht.

Stimmt das Wetter-Symbol des `CityWeather`-Objekts mit dem übergebenen Wert überein, gibt die Methode `True` zurück, andernfalls `False`.