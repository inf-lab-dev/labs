<template>
    <Controls
        @search="onSearch"
        @insert="onInsert"
        :search-result="searchResult"
    />

    <TreeSvg :trie="trie" :highlighted-nodes="highlightedNodes" />
</template>

<script lang="ts">
export interface TrieNode {
    char: string;
    children: TrieNode[];

    isEnd: boolean;
}
</script>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Controls from './Controls.vue';
import TreeSvg from './TreeSvg.vue';

const trie: TrieNode = reactive({
    char: '',
    isEnd: false,
    children: [],
    isHighlighted: false,
});

const searchResult = ref<boolean | null>(null);
const highlightedNodes = ref<TrieNode[]>([]);

function onInsert(words: string[]) {
    for (const word of words) {
        let node = trie;

        for (const char of word) {
            let child = node.children.find((c) => c.char === char);

            if (!child) {
                child = {
                    char,
                    isEnd: false,
                    children: [],
                };

                node.children.push(child);
            }

            node = child;
        }

        node.isEnd = true;
    }
}

function onSearch(word: string) {
    let currentNodes = [trie];
    let foundLength = 0;
    let lastNode: TrieNode = trie;

    highlightedNodes.value = [trie];

    for (const char of word) {
        const nextNode = currentNodes.find((n) =>
            n.children.some((c) => c.char === char),
        );

        if (!nextNode) {
            break;
        }

        const childNode = nextNode.children.find((c) => c.char === char)!;

        highlightedNodes.value.push(childNode);

        lastNode = childNode;
        foundLength++;

        currentNodes = [childNode];
    }

    searchResult.value = lastNode.isEnd && foundLength === word.length;
}
</script>
