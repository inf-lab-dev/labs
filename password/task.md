# Passwort

> [!INFO]
> Diese Aufgabe ist eine abgewandelte Version des [Password Practice Problems von CS50](https://cs50.harvard.edu/x/2025/practice/password/).
>
> **Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient lediglich zu Übungszwecken!

Wie wir inzwischen alle wissen, ist es wichtig, Passwörter zu verwenden, die nicht leicht zu erraten sind! Viele Webanwendungen verlangen inzwischen Passwörter, die nicht nur alphabetische Zeichen, sondern auch Zahlen und Symbole enthalten.

## Aufgabenmaterial herunterladen

Um das Aufgabenmeterial herunterzuladen, gib folgenden Befehl in _ein neues Terminal_ in deinem Codespace ein:

```bash-vue
wget -O - {{ $url('../material/lab-password.zip.sh') }} | bash
```

## Teilaufgabe 1

In dieser Aufgabe soll der Benutzer mit der Nachricht `Enter your password:` zur Eingabe eines Passwortes aufgefordert werden.
Dieses soll dann mit Hilfe der Funktion `valid` validiert werden. Wenn das Passwort mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl und ein Symbol (d.h. ein druckbares Zeichen, das kein Buchstabe oder eine Zahl ist, wie z.B. `!`, `$` und `#`) enthält, sollte die Funktion `true` zurückgeben. Andernfalls sollte sie `false` zurückgeben.

Der Benutzer sollte natürlich über den Rückgabewert der Funktion `valid` informiert werden.
Wenn das Passwort den Kriterien entspricht, sollte die Konsole `Your password is valid!` ausgeben. Entspricht das Passwort nicht den Kriterien, sollte `Your password needs at least one uppercase letter, lowercase letter, number and symbol.` ausgegeben werden.

## Teilaufgabe 2

Ändere das Programm aus [Teilaufgabe 1](#teilaufgabe-1) so ab, dass die Eingabe des Benutzers auch als Kommandozeilenargument erfolgen kann.
Wird kein Argument übergeben, soll der Benutzer wie in [Teilaufgabe 1](#teilaufgabe-1) zur Eingabe eines Passwortes aufgefordert werden.

Somit sollte folgender Aufruf des Programms auch funktionieren und das Passwort überprüfen.

```bash
./password 5uper_s3cret
```

## Teilaufgabe 3

Auch wenn das Passwort `!1Ab` alle bisherigen Richtlinien erfüllt, ist es nicht besonders sicher. Deshalb sollst du in dieser Aufgabe das Programm aus [Teilaufgabe 2](#teilaufgabe-2) so anpassen, dass ein Passwort mindestens `10` Zeichen lang sein muss. Passe auch die Fehlermeldung für den Benutzer entsprechend an.

## Teilaufgabe 4

Obwohl das Programm nun Passwörter wie `!1Abc` ablehnt, akzeptiert es immer noch Passwörter wie `!!11AAbbcc`, die nicht viel sicherer sind als das erste.
Passe nun die Funktion `valid` so an, dass auch keine Passwörter mehr akzeptiert werden, in denen die gleichen Zeichen aufeinander folgen.
Passe auch die Fehlermeldung entsprechend an.

## Testen

### Korrektheit

> [!INFO]
> Du kannst auch `check50` zum Testen verwenden, siehe [Befehlszeile](#befehlszeile) weiter unten.

Dein Programm sollte sich, je nach Teilaufgabe, wie in den folgenden Beispielen verhalten.

| Eingabe           | Aufgabe 1 | Aufgabe 2 | Aufgabe 3 | Aufgabe 4 |
| ----------------- | :-------: | :-------: | :-------: | :-------: |
| hello             |    ❌     |    ❌     |    ❌     |    ❌     |
| H3!lo             |    ✅     |    ✅     |    ❌     |    ❌     |
| Pas123456!        |    ✅     |    ✅     |    ✅     |    ✅     |
| P@ssw0rd          |    ✅     |    ✅     |    ❌     |    ❌     |
| 1234abcd          |    ❌     |    ❌     |    ❌     |    ❌     |
| !@#ABC123def      |    ✅     |    ✅     |    ✅     |    ✅     |
| 1111aAaa!!!!      |    ✅     |    ✅     |    ✅     |    ❌     |
| QwErTy123!@       |    ✅     |    ✅     |    ✅     |    ✅     |
| !!AAaa11bb        |    ✅     |    ✅     |    ✅     |    ❌     |
| AbC!123xyz@       |    ✅     |    ✅     |    ✅     |    ✅     |
| admin             |    ❌     |    ❌     |    ❌     |    ❌     |
| letMein123!       |    ✅     |    ✅     |    ✅     |    ✅     |
| pas5word!23A      |    ✅     |    ✅     |    ✅     |    ✅     |
| abcDE!ghi1234     |    ✅     |    ✅     |    ✅     |    ✅     |
| P@\$W0rD12345     |    ✅     |    ✅     |    ✅     |    ✅     |
| ABCabc123         |    ❌     |    ❌     |    ❌     |    ❌     |
| Abc@1233Abc\_     |    ✅     |    ✅     |    ✅     |    ❌     |
| 12abc!XYZ         |    ✅     |    ✅     |    ❌     |    ❌     |
| mySecret2021!     |    ✅     |    ✅     |    ✅     |    ✅     |
| qwerty!@123ABC    |    ✅     |    ✅     |    ✅     |    ✅     |
| dragon!@123ABC    |    ✅     |    ✅     |    ✅     |    ✅     |
| Hello123!!        |    ✅     |    ✅     |    ✅     |    ❌     |
| Zyx!9876lmNOP     |    ✅     |    ✅     |    ✅     |    ✅     |
| Test@123          |    ✅     |    ✅     |    ❌     |    ❌     |
| R@nd0mPasw0rd     |    ✅     |    ✅     |    ✅     |    ✅     |
| \$up3r\$trongP@s5 |    ✅     |    ✅     |    ✅     |    ✅     |
| abc123def!        |    ❌     |    ❌     |    ❌     |    ❌     |

✅ = Passwort akzeptiert; ❌ = Passwort nicht akzeptiert

#### Befehlszeile

Verwende dazu je nach Teilaufgabe die folgenden Befehle, um dein Programm mit `check50` zu überprüfen.

-   **Teilaufgabe 1:** `check50 -l inf-lab-dev/check/password/a1`
-   **Teilaufgabe 2:** `check50 -l inf-lab-dev/check/password/a2`
-   **Teilaufgabe 3:** `check50 -l inf-lab-dev/check/password/a3`
-   **Teilaufgabe 4:** `check50 -l inf-lab-dev/check/password/a4`

#### Webbrowser

Um das Testen interaktiver zu gestalten, kannst du das mitgelieferte Skript `server.py` verwenden.
Verwende dazu `python3 server.py` nachdem du dein Programm mit `make password` kompiliert hast. Es sollte sich nun automatisch eine Webseite öffnen, auf der du verschiedene Passwörter zum Testen in das Eingabefeld eingeben kannst. Um das Programm wieder zu verlassen, drücke <kbd>Strg</kbd> + <kbd>C</kbd> in dem Terminal, in dem du das Skript gestartet hast.

> [!TIP]
> Wirf gerne einen Blick in das Python Skript nachdem wir in der Vorlesung Python erreicht haben!

### Style

Führe den folgenden Befehl aus, um den Stil Ihres Codes mit `style50` zu analysieren.

```bash
style50 password.c
```
