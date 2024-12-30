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

Ein zentraler Bestandteil dieser Aufgabe ist der Wetterdienst [wttr.in](https://wttr.in). Besuche die [Website](https://wttr.in) zunächst im Browser und rufe dort die Wetterinformationen für Bamberg ab, um ein Gefühl dafür zu bekommen, wie die Daten dargestellt werden. Lies dir anschließend die [Dokumentation](https://github.com/chubin/wttr.in) durch, um die verschiedenen Konfigurationsmöglichkeiten und Ausgabeformate zu verstehen.

Für die kommenden Schritte benötigen wir nicht alle Informationen, die der Dienst bereitstellt. Von Interesse sind lediglich die aktuelle _Temperatur_, die _Windgeschwindigkeit_ sowie das _Wetter-Symbol_, das das Wetter veranschaulicht. Ein Beispiel für eine solche reduzierte Ausgabe könnte wie folgt aussehen:

```bash
Bamberg: 🌫  🌡️+0°C 🌬️→6km/h
```

Um diese reduzierte Darstellung von [wttr.in](https://wttr.in) abzurufen, musst du spezifische Parameter in der URL verwenden. Diese Parameter legen fest, welche Informationen zurückgegeben werden. Passe die URL so an, dass nur die gewünschten Daten – das _Wetter-Symbol_, die _Temperatur_ und die _Windgeschwindigkeit_ – angezeigt werden.

## Teilaufgabe 2

In dieser Teilaufgabe automatisieren wir den Aufruf der zuvor im Browser verwendeten URL innerhalb eines Python-Skripts.

Hierfür sollst du eine Funktion namens `fetch_weather` implementieren, die die Wetterdaten für einen angegebenen Ort abruft. Der Name der Stadt wird der Funktion als Parameter `city_name` übergeben. Ziel ist es, die relevanten Wetterinformationen in folgendem Textformat zurückzugeben:

```bash
Bamberg: 🌫  🌡️+0°C 🌬️→6km/h
```

Die Funktion `fetch_weather` soll eine HTTP-Anfrage an die API von [wttr.in](https://wttr.in) senden und die Wetterdaten im gewünschten Format abrufen. Zur Durchführung der Anfrage wirst du die [requests](https://pypi.org/project/requests/)-Bibliothek verwenden. Die Funktion soll die Wetterdaten als Zeichenkette zurückgeben, die Informationen zu folgenden Aspekten enthält: das _Wetter-Symbol_, die aktuelle _Temperatur_, die _Windgeschwindigkeit_ und den _Namen_ der Stadt.

Achte darauf, dass der Name der Stadt nicht fest im Code hinterlegt ist, sondern dynamisch durch den Parameter `city_name` übergeben wird. So kann die Funktion flexibel für verschiedene Städte eingesetzt werden.

Falls du die [requests](https://pypi.org/project/requests/)-Bibliothek noch nicht kennst, nimm dir zunächst etwas Zeit, um dich mit ihrer Funktionsweise vertraut zu machen.

## Teilaufgabe 3

Um die Verwaltung der Wetterdaten zu erleichtern, erstellen wir eine Klasse, die diese strukturiert speichert und handhabbar macht.

In dieser Teilaufgabe sollst du eine Klasse `CityWeather` erstellen, die für eine bestimmte Stadt die Wetterdaten speichert. Die Klasse soll folgende Attribute erhalten:

- `city_name`: Der Name der Stadt, für die das Wetter abgerufen wird
- `condition`: Das Symbol, welches anzeigt, wie das Wetter momentan ist - in unserem Beispiel "🌫".
- `temperature`: Die aktuelle Temperatur in der Stadt als Ganzzahl.
- `wind`: Die Windgeschwindigkeit ebenfalls als Ganzzahl.

Ziel ist es, die Wetterdaten übersichtlich und einheitlich zu speichern, sodass sie in späteren Schritten leichter verarbeitet werden können.

Implementiere die Klasse `CityWeather` in der Datei `city_weather.py`.

## Teilaufgabe 4

In dieser Teilaufgabe sollst du eine Funktion namens `extract_data` implementieren, die das Ergebnis der Funktion `fetch_weather` (aus [Teilaufgabe 2](#teilaufgabe-2)) entgegennimmt und die relevanten Informationen extrahiert: _Stadtname_, _Wetter-Symbol_, _Temperatur_ und _Windgeschwindigkeit_.

Die Funktion `extract_data` erwartet einen String als Eingabe. Dieser entspricht der Wetterbeschreibung im Format:

```bash
Bamberg: 🌫  🌡️+0°C 🌬️→6km/h
```

Aus diesem String sollen die relevanten Daten – _Stadtname_, _Symbol_, _Temperatur_ und _Windgeschwindigkeit_ – extrahiert und verwendet werden, um ein Objekt der `CityWeather`-Klasse zu erstellen. Die Klasse `CityWeather` wurde bereits in [Teilaufgabe 3](#teilaufgabe-3) definiert. Beim Erstellen eines `CityWeather`-Objekts werden die extrahierten Werte als Parameter übergeben.

Die Funktion `extract_data` gibt ein `CityWeather`-Objekt zurück, das die aufbereiteten Wetterinformationen enthält. Zusätzlich kannst du dieses Objekt einer Liste `weather_data` hinzufügen, die alle Wetterdaten speichert.

Implementiere die Funktion `extract_data`, um den String aus [Teilaufgabe 2](#teilaufgabe-2) zu analysieren, den _Stadtnamen_, die _Temperatur_, die _Windgeschwindigkeit_ und das _Wetter-Symbol_ zu extrahieren und daraus ein strukturiertes `CityWeather`-Objekt zu erstellen.

## Teilaufgabe 5

In dieser Teilaufgabe nutzen wir die gesamte Funktionalität der vorherigen Schritte, um eine vollständige Verarbeitungskette zu implementieren.

Im bestehenden Codegerüst gibt es bereits eine Liste von Städtenamen namens `CITIES_LIST`. Deine Aufgabe ist es, eine Schleife zu erstellen, die über diese Liste iteriert und für jede Stadt die Wetterdaten abruft. Hierzu verwendest du die Funktion `fetch_weather`, die das Wetter für eine Stadt als String zurückgibt.

Anschließend werden die Wetterdaten mit der Funktion `extract_data` verarbeitet. Diese Funktion extrahiert die relevanten Informationen – wie Temperatur, Windgeschwindigkeit und Wetter-Symbol – und gibt ein `CityWeather`-Objekt zurück. Dieses Objekt speicherst du in der Liste `cities_weather`, die am Ende der Schleife für jede Stadt ein vollständiges `CityWeather`-Objekt mit den entsprechenden Wetterinformationen enthält.

Die gesamte Logik soll innerhalb des Blocks `if __name__ == "__main__":` implementiert werden, um sicherzustellen, dass der Code nur ausgeführt wird, wenn das Skript direkt gestartet wird.

Zusammengefasst:

1. Iteriere über die Liste `CITIES_LIST`.
2. Rufe mit `fetch_weather` die Wetterdaten für jede Stadt ab.
3. Verarbeite die Daten mit `extract_data` und erstelle ein `CityWeather`-Objekt.
4. Füge das `CityWeather`-Objekt der Liste `cities_weather` hinzu.

Am Ende enthält die Liste `cities_weather` alle Wetterinformationen für die Städte in `CITIES_LIST`.

## Teilaufgabe 6

In dieser Aufgabe geht es darum, die Liste `cities_weather` anhand spezifischer Filterkriterien zu durchsuchen und nur die Städte auszuwählen, die diesen Kriterien entsprechen. Die Filterlogik wird in der Datei `filter.py` implementiert. Hierfür nutzt du die bereits vorhandene Klasse `Filter`, die unverändert bleibt. Deine Aufgabe besteht darin, Subklassen der `Filter`-Klasse zu erstellen, die jeweils eine spezifische Filterlogik implementieren.

### TempRangeFilter - Filtern nach Temperaturbereich

Die erste Subklasse, die du erstellen sollst, ist die `TempRangeFilter`. Diese Klasse erbt von `Filter` und ermöglicht es, Städte anhand eines definierten Temperaturbereichs zu filtern.

- Initialisierung: Beim Erstellen der `TempRangeFilter`-Klasse werden zwei Parameter, `min_temp` und `max_temp`, übergeben. Diese geben den Temperaturbereich an, innerhalb dessen die Städte überprüft werden sollen.
- Methode `evaluate`: Diese Methode nimmt ein `CityWeather`-Objekt entgegen und prüft, ob die Temperatur der Stadt innerhalb des angegebenen Bereichs liegt.
    - Liegt die Temperatur innerhalb des Bereichs, gibt die Methode `True` zurück.
    - Andernfalls gibt sie `False` zurück.

### WindRangeFilter – Filtern nach Windgeschwindigkeit

Die zweite Subklasse, die du implementieren sollst, ist die `WindRangeFilter`. Diese Klasse erlaubt es, Städte anhand ihrer Windgeschwindigkeit zu filtern.

- Initialisierung: Beim Erstellen der `WindRangeFilter`-Klasse werden zwei Parameter, `min_wind` und `max_wind`, übergeben. Diese definieren den Bereich der Windgeschwindigkeit, innerhalb dessen eine Stadt überprüft werden soll.
- Methode `evaluate`: Die Methode nimmt ein `CityWeather`-Objekt entgegen und prüft, ob die Windgeschwindigkeit der Stadt innerhalb des angegebenen Bereichs liegt.
    - Liegt die Windgeschwindigkeit im Bereich, gibt die Methode `True` zurück.
    - Andernfalls gibt sie `False` zurück.

### ConditionFilter – Filtern nach Wetter-Symbol

Die dritte Subklasse ist die `ConditionFilter`, mit der Städte nach bestimmten Wetter-Symbolen gefiltert werden können.

- Initialisierung: Beim Erstellen der `ConditionFilter`-Klasse wird ein Parameter `condition` übergeben, der das gesuchte Wetter-Symbol angibt (z. B. "🌫").
- Methode `evaluate`: Diese Methode prüft, ob das Wetter-Symbol des übergebenen `CityWeather`-Objekts mit dem gewünschten Symbol übereinstimmt.
    - Stimmen die Symbole überein, gibt die Methode `True` zurück.
    - Andernfalls gibt sie `False` zurück.

## Teilaufgabe 7

In dieser Teilaufgabe kombinierst du die Filterlogik und wendest die implementierten Filter auf die Liste `cities_weather` an. Ziel ist es, die Liste so zu filtern, dass nur die Städte übrig bleiben, die den angegebenen Kriterien entsprechen. Diese Städte werden anschließend auf der Konsole ausgegeben. Die gesamte Logik wird in den Block `if __name__ == "__main__":` eingebettet.

Zunächst legst du die Filter an, indem du Instanzen der Klassen `TempRangeFilter`, `WindRangeFilter` und `ConditionFilter` mit beliebigen Kriterien erstellst. Zum Beispiel könnten die Kriterien so aussehen: Ein _Temperaturbereich von 5°C bis 25°C_, eine _Windgeschwindigkeit zwischen 0 km/h und 15 km/h_ sowie ein _bestimmtes Wetter-Symbol, beispielsweise "☀️"_ für sonniges Wetter.

Anschließend iterierst du über die Liste `cities_weather`, die die Wetterdaten der Städte enthält. Für jede Stadt überprüfst du, ob alle definierten Filterkriterien erfüllt sind. Wenn eine Stadt alle Filter erfüllt, wird sie der gefilterten Liste hinzugefügt.

Abschließend gibst du die Namen der Städte, die die Kriterien erfüllen, auf der Konsole aus.
