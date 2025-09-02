<template>
    <ul class="legend">
        <li class="legend__entry" :style="{ '--color': colors.nodeBackground }">
            <p class="legend__entryTitle">Normaler Knoten</p>
            <p class="legend__entryHelper">
                Dies ist ein regulärer Knoten im Trie. Er repräsentiert ein
                einzelnes Zeichen, das Teil eines gespeicherten Wortes sein
                kann.
            </p>
        </li>
        <li
            class="legend__entry"
            :style="{ '--color': colors.nodeEndBackground }"
        >
            <p class="legend__entryTitle">End-Knoten</p>
            <p class="legend__entryHelper">
                Dies ist ein Endknoten. Er markiert das Ende eines gespeicherten
                Wortes im Trie.
            </p>
        </li>
        <li
            class="legend__entry"
            :style="{ '--color': colors.nodeHighlightRing }"
        >
            <p class="legend__entryTitle">Hervorgehobener Knoten</p>
            <p class="legend__entryHelper">
                Dieser Knoten wird während einer Suchoperation hervorgehoben, um
                den aktuellen Traversierungspfad anzuzeigen.
            </p>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { useTrieColors } from './util';

const colors = useTrieColors();
</script>

<style lang="css" scoped>
.legend {
    list-style-type: none;

    .legend__entry {
        .legend__entryTitle {
            display: flex;
            align-items: center;

            margin-bottom: var(--base-size-4);

            color: var(--color);
            font-weight: var(--base-text-weight-semibold);

            &::before {
                display: inline-block;

                margin-right: var(--base-size-8);
                border-radius: var(--base-size-4);

                background-color: var(--color);

                width: var(--base-size-14);
                height: var(--base-size-14);
                content: '';
            }
        }

        .legend__entryHelper {
            margin: 0;

            margin-left: calc(var(--base-size-14) + var(--base-size-8));
        }
    }
}
</style>
