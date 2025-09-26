# Bonusaufgabe zu Fehler: Design

Obwohl das Programm dank [Teilaufgabe 2](../task#teilaufgabe-2) nun endlich funktioniert, könnten wir den Code noch verbessern.

## Aufgabe

Verbessere daher den Code aus [Teilaufgabe 2](../task#teilaufgabe-2) in den folgenden zwei Punkten.

1. Der Code nach [Teilaufgabe 2](../task#teilaufgabe-2) verwendet einige [Magic Numbers](https://inf.zone/lectures/1-c/short-1-6-magic-numbers/), für diese sollten wir Präprozessorkonstanten erstellen.
2. Außerdem sollten wir einige Kommentare hinzufügen, um unseren Code verständlicher zu machen, schließlich wollen wir ihn auch in ein paar Wochen noch verstehen können.

> [!TIP]
> Am besten schreibt man Kommentare direkt mit dem Code und nicht erst im Nachhinein.

## Testen

### Korrektheit

Führe in deinem Terminal den folgenden Befehl aus, um die Korrektheit deiner Arbeit zu überprüfen.

> [!NOTE]
> Beachte, dass lediglich die Funktionalität des Programms überprüft wird. Die Qualität des Codes jedoch nicht.
> Um Feedback zur Qualität deines Codes zu erhalten, kannst du `design50` in deinem Codespace verwenden. Klicke hierzu einfach auf `design50` oben rechts in VS-Code.
>
> **Beachte:** Bei `design50` handelt es sich um einen durch vorherige Prompts modifizierten ChatGPT. Deshalb ist die übliche Vorsicht bei KI generierten Inhalten geboten!

```bash
check50 -l inf-lab-dev/check/errors/bonus/design
```

### Style

Führe den folgenden Befehl aus, um den Stil deines Codes mit `style50` zu analysieren.

```bash
style50 password.c
```
