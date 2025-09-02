# Bonusaufgabe zu Passwort: Häufig

Obwohl das Programm nach [Teilaufgabe 4](../task#teilaufgabe-4) auch Passwörter wie `123456` oder `password` ablehnt, ist es besser, den Benutzer darauf hinzuweisen, dass es sich bei seiner Wahl um eines der [100 häufigsten Passwörter](https://en.wikipedia.org/wiki/List_of_the_most_common_passwords#NordPass) handelt[^1]. Solche Passwörter sollten schließlich auch nicht erlaubt werden.

[^1]: Wir verwenden hier die Liste des Anbieters _NordPass_, da diese innerhalb von Wikipedia am übersichtlichsten ist.

## Aufgabe

Implementiere daher eine Funktion `is_common_password`, die prüft, ob ein übergebenes Passwort in der Liste der _10 häufigsten Passwörter_ vorkommt.
Auch hier sollte der Benutzer über das Ergebnis der Prüfung informiert werden. Überlege dir eine sinnvolle Nachricht und finde eine geeignete Stelle, um diese Prüfung in dein Programm zu integrieren.

> [!TIP]
> Wieso wurde festgelegt, dass es nur um die 10 häufigsten Passwörter geht?

## Testen

### Korrektheit

Führe in deinem Terminal den folgenden Befehl aus, um die Korrektheit deiner Arbeit zu überprüfen.

```bash
check50 -l inf-lab-dev/check/password/bonus/common
```

### Style

Führe den folgenden Befehl aus, um den Stil deines Codes mit `style50` zu analysieren.

```bash
style50 password.c
```
