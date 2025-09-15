# Bonusaufgabe zu Kontakt: Betrachten

Nach [Teilaufgabe 4](../../task#teilaufgabe-4) können Benutzer uns schon ihre Kontaktanfragen zusenden und diese werden auch gespeichert. Jedoch sollten wir Benutzern auch die Möglichkeit geben, ihre bereits gesendeten Anfragen anzusehen.

## Aufgabe

Erstelle deshalb eine neue _Route_ `/view`, welche nur `GET` Anfragen akteptiert. Diese soll dann die als _Query-Parameter_ übergebene `id` auslesen, und überprüfen, ob es eine `ContactRequest` mit dieser `id` gibt. Ist dies der Fall, soll das Template `view.html` ausgegeben werden, welches wir gleich erstellen werden.
Sollte keine `ContactRequest` für die übergebene `id` existieren, kann wieder das Template `error.html` verwendet werden.

Erstelle deshalb auch noch ein weiteres Template `view.html` im passenden Verzeichnis, welches eine `ContactRequest` übergeben bekommt.
Dieses Template soll dann alle Eingaben des Benutzers auflisten.

Im folgenden ist ein Bild gegeben, wie diese Auflistung aussehen könnte.

![Beispiel der Auflistung der Formulareingaben](./image.jpg)

Damit dem Benutzer die `id` nach der Erstellung auch bekannt ist, müssen wir noch unsere `/submit` _Route_ anpassen.
Sorge hierbei dafür, dass statt dem Text `Success!` eine Weiterleitung auf die passende `/view?id=<id>` Seite erfolgt.
Hierbei muss `<id>` natürlich durch die `id` des `ContactRequest`s ersetzt werden.

Achte auch hier darauf, dass deine Funktion korrekte [HTTP-Antwortstatuscodes](https://developer.mozilla.org/de/docs/Web/HTTP/Status) verwendet.

<details>
    <summary>Was ist ein Query-Parameter?</summary>

_Query_ oder auch _Get-Parameter_ sind Eingaben, welche über die URL übermittelt werden. Diese folgen nach einem `?` in der URL.

Beispielsweise hat die URL `https://www.google.com/search?q=Hallo` den _Query-Parameter_ `q` mit dem Wert `Hallo`.

Diese Parameter können in Flask in etwa wie im folgenden Beispiel ausgelesen werden.

```python
from flask import request

q = request.args.get("q")
```

**Wichtig:** Vergiss nicht zu prüfen ob das Feld nicht `None` ist!

</details>
<details>
    <summary>Du weißt nicht genau wie du in Flask auf eine andere Seite weiterleiten kannst?</summary>

Um den Benutzer auf eine andere Seite weiterzuleiten, kann die `redirect(url)` Funktion benutzt werden.
Im folgenden informellen Beispiel wird der Benutzer auf die `/todos` Seite weitergeleitet.

```python
from flask import redirect

redirect("/todos")
```

**Wichtig:** Vergiss nicht den Rückgabewert von `redirect` auch zu `return`en, sonst wird die Weiterleitung nicht ausgeführt!

::: tip
Natürlich kannst du `redirect` auch _f-Strings_ übergeben!
:::

</details>

## Testen

### Korrektheit

> [!INFO]
> Für diese Aufgabe gibt es keine `check50` Überprüfungen, da hier die Ergebnisse sehr individuell ausfallen.

### Style

Leider unterstützt `style50` keine HTML-Dateien. Daher liegt es an dir, deine HTML-Tags sauber einzurücken und auszurichten.
Deine `app.py` Datei kannst du jedoch mit folgendem Befehl überprüfen.

```bash
style50 app.py
```
