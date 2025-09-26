# Bonusaufgabe zu Wetter: Wind

Nach [Teilaufgabe 6](../task#teilaufgabe-6) können wir bereits nach der Temperatur filtern. Im folgenden möchten wir einen weiteren Filter implementieren um Städte nach ihrer _Windgeschwindigkeit_ zu filtern.

## Aufgabe

Nun implementieren wir die Klasse `WindRangeFilter`. Diese Klasse soll es uns ermöglichen, Städte anhand ihrer Windgeschwindigkeit zu filtern.

-   **Initialisierung:** Beim Erstellen der `WindRangeFilter`-Klasse werden zwei Parameter, `min_wind` und `max_wind`, übergeben. Diese definieren den Bereich der Windgeschwindigkeit, innerhalb dessen eine Stadt überprüft werden soll.
-   **Methode `evaluate`:** Die Methode nimmt ein `CityWeather`-Objekt entgegen und prüft, ob die Windgeschwindigkeit der Stadt innerhalb des angegebenen Bereichs liegt.
    -   Liegt die Windgeschwindigkeit im Bereich, gibt die Methode `True` zurück.
    -   Andernfalls gibt sie `False` zurück.

### Filter anwenden

> [!NOTE]
> In dieser Aufgabe musst du deine Implementierung aus [Teilaufgabe 6](../task.md/#teilaufgabe-6) anpassen.

In dieser Teilaufgabe integrierst du den neuen Filter und wendest diesen auf die Liste `cities_weather` an. Ziel ist es, die Liste so zu filtern, dass nur die Städte übrig bleiben, die den angegebenen Kriterien entsprechen. Diese Städte werden anschließend auf der Konsole ausgegeben. Die gesamte Logik wird in die `main`-Funktion eingebettet.

Zunächst legst du den Filter an, indem du eine Instanzen der Klasse `WindRangeFilter` mit einem beliebigen Kriterium erstellst. Zum Beispiel könnte das Kriterium so aussehen: Eine _Windgeschwindigkeit zwischen 0 km/h und 15 km/h_.

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
