# Vorgegebene HTML-Elemente

::: danger
Natürlich sind diese HTML-Elemente **NUR** im [Laden Lab](../) verfügbar, und dass auch nur, wenn die HTML-Datei über das mitgelieferte Python-Skript geöffnet wird.
:::

Um die Arbeit im [Laden Lab](../) zu vereinfachen, haben wir einige eigene HTML-Elemente erstelt[^1]. Im folgenden findest du eine kurze Erklärung aller dieser Elemente.

[^1]: _Nur für interessierte:_ Wir haben hierzu [Lit](https://lit.dev/) verwendet, welches die Erstellung eigener Elemente auf Basis der [Custom Element API](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) vereinfacht.

::: warning
Alle Elemente welche das `item` Attribut untersützen erwarten dass dieses einen korrekten Wert enthält.
Somit sind nur Namen erlaubt, welche auch in der `stock.py` Datei erstellt wurden.
:::

## `shop-cart-add`

Das `shop-cart-add` Element stellt eine Schaltfläche dar, welche sobald sie angeklicht wird. Einen Gegenstand in den Einkaufswagen legt.
Welcher Gegenstand das sein soll, kann mittels des `item` Attributs festgelegt werden. So erstellt beispielsweise folgender Code eine Schaltfläche, welche pro Klick einen _Burger_ in den Einkaufswagen legt. Ebenfalls wird der übergebene Inhalt innerhalb des Elements angezeigt.

```html
<shop-cart-add item="Burger">Dieser Text wird angezeigt.</shop-cart-add>
```

## `shop-cart-remove`

Das `shop-cart-remove` Element stellt eine Schaltfläche dar, welche sobald sie angeklicht wird. Einen Gegenstand aus dem Einkaufswagen entfernt.
Welcher Gegenstand das sein soll, kann mit dem `item` Attribut festgelegt werden. So erstellt beispielsweise folgender Code eine Schaltfläche, welche pro Klick einen _Burger_ aus dem Einkaufswagen nimmt. Ebenfalls wird der übergebene Inhalt innerhalb des Elements angezeigt.

```html
<shop-cart-remove item="Burger">Dieser Text wird angezeigt.</shop-cart-remove>
```

## `shop-cart-has`

Der Inhalt des `shop-cart-has` Elements ist nur sichtbar, wenn es im Einkaufswagen auch mindestens einen Gegenstand mit dem Namen `item` gibt.
Dieser Code zeigt somit _Hallo!_ nur an, wenn auch _Burger_ im Einkaufswagen liegen.

```html
<shop-cart-has item="Burger">Hallo!</shop-cart-add>
```

Natürlich können auch, wie im folgenden Beispiel, andere HTML Elemente dargestellt werden.

```html
<shop-cart-has item="Burger">
    <strong>Fettdruck</strong>
    <p>Oder ein Absatz!</p>
</shop-cart-has>
```

<details>

<summary>Weitere Funktionen (nicht Aufgabenrelevant)</summary>

Um ein oder mehrere Elemente anzeigen zu lassen, wenn der Gegenstand _nicht im Einkaufswagen_ ist, kannst du einfach das Attribut `slot="else"` auf dem betreffenden Element setzen.

```html
<shop-cart-has item="Burger">
    <p>Es gibt Burger.</p>
    <p slot="else">Es gibt keine Burger.</p>
</shop-cart-has>
```

</details>

## `shop-cart-quantity`

Das `shop-cart-quantity` Element, zeigt die Anzahl von `item`s im Einkaufswagen an. Sollte kein solches `item` im Einkaufswagen sein, wird eine 0 angezeigt.
Der Inhalt dieses Elements wird _nach der Zahl_ angezeigt, so würde folgendes Beispiel bei _5 Burgern im Einkaufswagen_ als ausgabe `5 Stück` erzeugen.

```html
<shop-cart-quantity item="Burger">Stück</shop-cart-quantity>
```

Natürlich können wieder auch, wie im folgenden Beispiel, andere HTML Elemente dargestellt werden.

```html
<shop-cart-quantity item="Burger">
    <strong>Fettdruck</strong>
    <p>Oder ein Absatz!</p>
</shop-cart-quantity>
```

## `shop-cart-total`

Das `shop-cart-total` Element, zeigt nach Bearbeitung von [Teilaufgabe 4](./task#teilaufgabe-4), die Gesamtkosten des Einkaufswagens an. Davor wird statt des Gesamtpreises immer ein `?` dargestellt. Der Inhalt des Elements wird hierbei _vor_ der Zahl ausgegeben.
Somit erzeugt folgendes Beispiel, vor der Bearbeitung von [Teilaufgabe 4](./task#teilaufgabe-4), `$ ?`.

```html
<shop-cart-total>$</shop-cart-total>
```

Natürlich können wieder auch, wie im folgenden Beispiel, andere HTML Elemente dargestellt werden.

```html
<shop-cart-total>
    <strong>Fettdruck</strong>
    <p>Oder ein Absatz!</p>
</shop-cart-total>
```

## `shop-stock-price`

Das `shop-stock-price` Element, gibt den Einzelpreis, so wie er in `stock.py` steht, eines `item`s aus. Der Preis wird hierbei auf zwei Nachkommastellen genau ausgegeben und der Inhalt des Elements wird _vor_ dem Preis ausgegeben.

Deshalb erzeugt folgendes Beispiel, wenn _Burger_ _4.99_ kosten, `$ 4.99` als Ausgabe.

```html
<shop-stock-price item="Burger">$</shop-stock-price>
```

Natürlich können wieder auch, wie im folgenden Beispiel, andere HTML Elemente dargestellt werden.

```html
<shop-stock-price item="Burger">
    <strong>Fettdruck</strong>
    <p>Oder ein Absatz!</p>
</shop-stock-price>
```

## `shop-stock-icon`

Das `shop-stock-icon` Element, gibt das Icon, so wie es in `stock.py` steht, eines `item`s aus. Der Inhalt des Elements wird _nach_ dem Icon ausgegeben.

Deshalb erzeugt folgendes Beispiel, wenn _Burger_ _🍔_ als Symbol haben, `🍔 Lecker!` als Ausgabe.

```html
<shop-stock-icon item="Burger">Lecker!</shop-stock-icon>
```

Natürlich können wieder auch, wie im folgenden Beispiel, andere HTML Elemente dargestellt werden.

```html
<shop-stock-icon item="Burger">
    <strong>Fettdruck</strong>
    <p>Oder ein Absatz!</p>
</shop-stock-icon>
```

---

Sollte es bei dieser Dokumentation Unklarheiten geben, wende dich gerne an die Tutoren Marius oder Paul!
