# Trie visualisieren

<script setup>
import Visualizer from './components/Visualizer.vue'
import Legend from './components/Legend.vue'
</script>

Hier kannst du die Datenstruktur [Trie](https://inf.zone/lectures/5-datenstrukturen/notes5/#tries) darstellen und visualisieren.

Ein Trie ist eine spezielle Baumstruktur, die dazu verwendet wird, Wörter oder Zeichenketten effizient zu speichern und zu durchsuchen. Jeder Knoten im Trie repräsentiert ein einzelnes Zeichen, und der Pfad vom Wurzelknoten zu einem Knoten entspricht dem Präfix eines gespeicherten Wortes. Endknoten markieren dabei, dass an dieser Stelle ein vollständiges Wort endet.

## Funktion

Tries eignen sich besonders gut, um Wörter schnell zu finden oder zu prüfen, ob ein bestimmtes Präfix existiert, zum Beispiel für Autovervollständigungen oder Wörterbücher. Durch die Baumstruktur lassen sich auch Wörter zählen, die ein gemeinsames Präfix teilen.

Typische Operationen in einem Trie sind das Einfügen neuer Wörter und das Suchen nach vorhandenen Wörtern. Beim Einfügen wird der Baum entlang der Zeichen des Wortes traversiert und fehlende Knoten werden hinzugefügt, wobei das letzte Zeichen als Endknoten markiert wird. Beim Suchen wird der Baum entlang der Zeichen des Wortes durchlaufen; ist das letzte Zeichen ein Endknoten, existiert das Wort.

In der [Visualisierung](#visualisierung) unten, sind die Bestandteile des Tries wie folgt eingefärbt:

<Legend />

## Visualisierung

Die Visualisierung zeigt dir, wie ein Trie aufgebaut ist, und wie in diesem gesucht wird.

<Visualizer />
