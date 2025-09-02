<template>
    <div class="controls">
        <form class="controls__form" @submit.prevent="insertWord">
            <div class="controls__formField">
                <label :for="insertFieldId">Wörter einfügen</label>
                <textarea
                    v-model="wordsToInsert"
                    :id="insertFieldId"
                ></textarea>
                <small>Ein Wort pro Zeile</small>
            </div>

            <button :disabled="wordsToInsert.trim().length === 0" type="submit">
                Einfügen
            </button>
        </form>

        <form class="controls__form" @submit.prevent="searchWord">
            <div class="controls__formField">
                <label :for="searchFieldId">Wort suchen</label>
                <input type="text" v-model="wordToSearch" :id="searchFieldId" />

                <small v-if="searchResult !== null && isValidSearchResult">
                    Wort "<strong>{{ wordToSearch }}</strong
                    >"
                    <span
                        :class="
                            searchResult
                                ? 'controls__formFieldSearchHelper--found'
                                : 'controls__formFieldSearchHelper--notFound'
                        "
                    >
                        {{
                            searchResult ? 'gefunden' : 'nicht gefunden'
                        }} </span
                    >.
                </small>
            </div>

            <button :disabled="wordToSearch.trim().length === 0" type="submit">
                Suchen
            </button>
        </form>
    </div>
</template>

<script lang="ts">
export interface TrieNode {
    char: string;
    children: TrieNode[];

    isEnd: boolean;
    isHighlighted: boolean;
}
</script>

<script lang="ts" setup>
import { ref, useId, watch } from 'vue';

const emit = defineEmits<{
    insert: [words: string[]];
    search: [word: string];
}>();

defineProps<{
    searchResult: boolean | null;
}>();

const insertFieldId = useId();
const searchFieldId = useId();

const wordsToInsert = ref('');
const wordToSearch = ref('');

const isValidSearchResult = ref(true);

function insertWord() {
    emit(
        'insert',
        wordsToInsert.value
            .split('\n')
            .map((word) => word.trim())
            .filter((word) => word.length > 0),
    );

    wordsToInsert.value = '';
}

function searchWord() {
    emit('search', wordToSearch.value.trim());

    isValidSearchResult.value = true;
}

watch(wordToSearch, () => (isValidSearchResult.value = false));
</script>

<style scoped>
.controls {
    display: flex;
    gap: var(--base-size-16);

    .controls__form {
        display: flex;

        flex-direction: column;
        gap: var(--base-size-8);

        .controls__formField {
            display: flex;

            flex-direction: column;

            .controls__formFieldSearchHelper--found {
                color: var(--fgColor-success);
            }

            .controls__formFieldSearchHelper--notFound {
                color: var(--fgColor-danger);
            }
        }
    }
}
</style>
