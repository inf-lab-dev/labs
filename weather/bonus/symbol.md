# Bonusaufgabe zu Wetter: Symbol

Nach [Wind](./wind) können nun bereits nach der Temperatur und der Windgeschwindigkeit filtern. Im folgenden möchten wir einen weiteren Filter implementieren um Städte nach ihrem _Wetter-Symbol_ zu filtern.

> [!NOTE]
> Diese Aufgabe geht davon aus, dass die Bonusaufgabe [Wind](./wind) bereits bearbeitet wurde. Du kannst die [Wind](./wind) Aufgabe natürlich auch weglassen. Passe dann unter [Filter Anwenden](#filter-anwenden) einfach den Code von [Teilaufgabe 6](../task#teilaufgabe-6) an.

## Aufgabe

Nun implementieren wir die Klasse `ConditionFilter`, mit der Städte nach bestimmten Wetter-Symbolen gefiltert werden können.

-   **Initialisierung:** Beim Erstellen der `ConditionFilter`-Klasse wird ein Parameter `condition` übergeben, der das gesuchte Wetter-Symbol angibt (z. B. "🌫").
-   **Methode `evaluate`:** Diese Methode prüft, ob das Wetter-Symbol des übergebenen `CityWeather`-Objekts mit dem gewünschten Symbol übereinstimmt.
    -   Stimmen die Symbole überein, gibt die Methode `True` zurück.
    -   Andernfalls gibt sie `False` zurück.

### Filter anwenden

> [!NOTE]
> In dieser Aufgabe musst du deine Implementierung aus [Wind](./wind) anpassen.

In dieser Teilaufgabe integrierst du den neuen Filter und wendest diesen auf die Liste `cities_weather` an. Ziel ist es, die Liste so zu filtern, dass nur die Städte übrig bleiben, die den angegebenen Kriterien entsprechen. Diese Städte werden anschließend auf der Konsole ausgegeben. Die gesamte Logik wird in die `main`-Funktion eingebettet.

Zunächst legst du den Filter an, indem du eine Instanzen der Klasse `ConditionFilter` mit einem beliebigen Kriterium erstellst. Zum Beispiel könnte das Kriterium so aussehen: Ein _bestimmtes Wetter-Symbol, beispielsweise "☀️"_ für sonniges Wetter.

Anschließend iterierst du über die Liste `cities_weather`, die die Wetterdaten der Städte enthält. Für jede Stadt überprüfst du, ob alle definierten Filterkriterien erfüllt sind. Wenn eine Stadt alle Filter erfüllt, wird sie der gefilterten Liste hinzugefügt.

Abschließend gibst du die Namen der Städte, die die Kriterien erfüllen, auf der Konsole aus.

## Testen

Teste zuerst manuell, ob sich das Programm wie erwartet verhält.

### Korrektheit

> [!WARNING]
> Für diese Aufgabe sind aktuell noch keine _check50_-Tests verfügbar.
> Wir bemühen uns diese baldmöglichst zur Verfügung zu stellen.

### Style

Führe den folgenden Befehl aus, um den Stil deines Codes mit `style50` zu analysieren:

```bash
style50 main.py && style50 filter.py
```
