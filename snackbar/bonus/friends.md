# Freunde

Nach [Teilaufgabe 3](../task#teilaufgabe-3) erlaubt unser Programm die Bestellung einzelner Gerichte.

Jedoch bestellen Kunden erfahrungsgemäß nicht nur ein Gericht für sich selbst, sondern auch mehrere Portionen desselben Gerichts für Freunde oder Familie.

## Aufgabe

Erweitere die `main`-Funktion, sodass der Nutzer neben dem Namen des Gerichts auch die gewünschte Anzahl (`amount`) eingeben kann. Übergib den `amount` anschließend an die `purchase`-Funktion, die überprüfen soll, ob die gewünschte Menge vorrätig ist.

Die `purchase`-Funktion muss dabei folgende Schritte durchführen:

1. **Verfügbare Menge prüfen:** Wenn die verfügbare Menge (`quantity`) des gewählten Gerichts ausreicht, wird die gewünschte Anzahl abgezogen, und der Preis wird basierend auf der eingegebenen Menge berechnet.
2. **Nicht ausreichende Menge behandeln:** Falls die gewünschte Menge die Verfügbarkeit übersteigt, sollen alle noch vorrätigen Gerichte verkauft werden, und der Preis für die verbleibende Anzahl wird berechnet. Zusätzlich soll die Meldung für den Nutzer angepasst werden, sodass `Not enough dishes available. X dishes were sold.` ausgegeben wird. Hierbei soll `X` durch die tatsächlich verkauften Gerichte ersetzt werden.

Der von `purchase` zurückgegebene Preis (einschließlich der korrekt berücksichtigten Menge) wird anschließend in der `main`-Funktion verarbeitet und zum Gesamtpreis addiert. Achte darauf, dass die Logik sauber implementiert ist und fehlerhafte Eingaben, wie negative oder nicht-numerische Werte, entsprechend behandelt werden.

> [!TIP]
> Es kann hilfreich sein, das Abfragen der `amount` in eine seperate Funktion `get_amount` auszulagern. Wieso?

## Testen

### Korrektheit

Führe in deinem Terminal den folgenden Befehl aus, um die Korrektheit deiner Arbeit zu überprüfen.

```bash
check50 -l inf-lab-dev/check/snackbar/bonus/friends
```

### Style

Führe den folgenden Befehl aus, um den Stil deines Codes mit `style50` zu analysieren.

```bash
style50 snackbar.c
```
