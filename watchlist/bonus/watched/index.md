# Bonusaufgabe zu Merkliste: Gesehen

Nach [Teilaufgabe 4](../../task#teilaufgabe-4) können wir Filme auf unsere Liste einfügen und diese auch ansehen. Jetzt fehlt nur noch eine Funktion bereits angesehene Filme auch wieder zu löschen.

## Aufgabe

Passe den Code der `render`-Funktion so an, dass für jeden Eintrag neben dem Text zusätzlich ein `<button>` mit dem Text `Watched!` erstellt wird. Beim Anklicken dieses Buttons soll das entsprechende Element aus der Liste gelöscht werden.
Vergiss nicht, nach dem Löschen auch wieder deine `render` Funktion aufzurufen, sonst wirst du vom Löschen nichts sehen!

Das könnte dann wie im folgenden Bild aussehen.

![Beispiel der Liste mit Löschen-Funktion](./image.jpg)

<details>
    <summary>Du bist dir nicht sicher, wie du in JavaScript einen Eintrag aus einer Liste löschen kannst?</summary>

Hierfür gibt es in JavaScript mehrere Möglichkeiten. Weit verbreitet ist jedoch die Verwendung von [`splice(start, deleteCount)`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice). Ein Beispiel, um das Obst `Apfel` aus der Liste zu entfernen, kann folgenden Code entnommen werden.

```js
let fruit = ['Banane', 'Apfel', 'Melone'];

fruit.splice(1, 1);
```

**Wichtig:** Achte darauf, dass `deleteCount` (der zweite Parameter) immer `1` ist, da sonst mehr als ein Element entfernt wird.

</details>

## Testen

> [!TIP]
> Wenn du die Einträge dauerhaft zu speichern möchtest, findest du in der [eigentlichen Aufgabenstellung](../../task#einträge-dauerhaft-speichern) weitere Hinweise.

### Korrektheit

> [!NOTE]
> Für diese Aufgabe gibt es kein `check50`, da die Implementierungen sehr unterschiedlich ausfallen können.

### Style

Leider unterstützt `style50` keine HTML-Dateien. Daher liegt es an dir, deine HTML-Tags sauber einzurücken und auszurichten.
