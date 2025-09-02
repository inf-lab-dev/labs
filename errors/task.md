# Aufgabenstellung zu Fehler

> [!INFO]
> Diese Aufgabe basiert auf der Idee des [Trie Practice Problems von CS50](https://cs50.harvard.edu/x/2025/practice/trie/).
>
> **Disclaimer:** Diese Aufgabe wurde nicht vom Lehrstuhl herausgegeben und kann Fehler enthalten. Sie dient lediglich zu Übungszwecken!

Wir alle nutzen die Website [inf.zone](https://inf.zone), um die Inhalte der Veranstaltung abzurufen. Die Website hat sogar eine Suchfunktion, so dass wir die gewünschten Inhalte schnell finden können. Diese Suche umfasst jedoch die gesamte Website. So wird z.B. auch auf den [Style Guide for C](https://inf.zone/extras/style-c/) verwiesen, wenn wir nach _Pointer_ suchen. Wir möchten aber auch nur einzelne Seiten durchsuchen können.

Zu diesem Zweck wurden uns freundlicherweise bereits einige `txt`-Dateien zur Verfügung gestellt, die die auf verschiedenen Seiten enthaltenen Wörter beinhalten. Zum Beispiel kann in der Datei `words-lectures-4-memory-notes4.txt` pro Zeile ein Wort aus [Vorlesungsnotizen Woche 4](https://inf.zone/lectures/4-memory/notes4/) gefunden werden. Es kann davon ausgegangen werden, dass jedes Wort maximal _255 Zeichen lang_ ist und nur aus _kleinen ASCII Buchstaben_ besteht. Umlaute wie _ä_, _ü_ oder _ö_ sind bereits durch _ae_, _ue_ und _oe_ ersetzt worden. Ebenfalls müssen eingegebene Wörter, welche diesen Voraussetzungen nicht entsprechen auch _nicht gesondert behandelt werden_. Gibt ein Benutzer also z.B. `Hallü` in das Programm ein, kann es abstürzen, weiterlaufen oder eine Fehlermeldung ausgeben. Was hierbei passieren soll kannst du entscheiden.

Um diese einfachere Suche zu ermöglichen, hat ein ungenannter Tutor bereits versucht, ein solches Programm in C zu entwickeln. Dieses ist in der Datei `search-zone.c` zu finden.
**Es enthält jedoch VIELE Fehler und ist daher absolut kein vorbildliches oder funktionierendes Beispiel!**

> [!CAUTION]
> Der Code dieses Programms ist auch nicht sonderlich sicher und daher anfällig für diverse Angriffe.
> Für die Zwecke von Inf-Einf reicht das hier aber völlig aus.

## Aufgabenmaterial herunterladen

Um das Aufgabenmeterial herunterzuladen, gib folgenden Befehl in _ein neues Terminal_ in deinem Codespace ein:

```bash-vue
wget -O - {{ $url('material/lab-errors.zip.sh') }} | bash
```

## Teilaufgabe 1

Verschaffe dir einen Überblick über das Programm des Tutors, beachte hierbei allerdings dass es einige syntaktische[^1] aber auch logische[^2] Fehler enthält.
Beantworte hierzu insbesondere die folgenden Fragen:

1. Welche Datenstruktur wird verwendet um die Wörter zu speichern und zu suchen? _Warum genau diese?_
2. Was ist die Aufgabe der einzelnen Funktionen des Programms? _Schreibe Kommentare zu diesen!_
3. Wofür wird die Funktion `free_node` benötigt?

[^1]: **Syntaktische Fehler** sind solche, die durch den Compiler erkannt werden können (z.B. ein fehlendes `;`). Wir können sie daran erkennen, dass sich das Programm nicht kompilieren lässt und `make solution-zone` einige Fehlermeldungen ausgibt.

[^2]: **Logische Fehler** sind Fehler des Programmablaufes (z.B. dass in einer Funktion `int add(int a, int b)`, statt zu addieren subtrahiert wird.). Wir können sie daran erkennen, dass sich unser Programm komisch/unerwartet verhält, wenn wir es ausführen.

## Teilaufgabe 2

Nachdem wir uns in [Teilaufgabe 1](#teilaufgabe-1) einen groben Überblick über das Programm verschafft haben, ist es nun an der Zeit die Fehler zu beheben.
Vergiss nicht, dass Programm enthält sowohl syntaktische als auch logische Fehler enthält.

## Testen

Teste zuerst manuell, ob sich das Programm mit den bereitgestellten Dateien wie erwartet verhält.

### Korrektheit

Verwende dazu je nach Teilaufgabe die folgenden Befehle, um dein Programm mit `check50` zu überprüfen.

-   **Teilaufgabe 1:** _kein `check50` verfügbar_
-   **Teilaufgabe 2:** `check50 -l inf-lab-dev/check/errors/a2`

### Style

> [!INFO]
> Da in dieser Aufgabe ein _schlechter Code_ verbessert wird, schlägt `style50` bis zum Abschluss der Bonusaufgabe [Bonusaufgabe Design](bonus/design) sehr viele Verbesserungen vor.

Führe den folgenden Befehl aus, um den Stil deines Codes mit `style50` zu analysieren:

```bash
style50 search-zone.c
```
