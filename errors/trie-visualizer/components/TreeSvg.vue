<template>
    <svg ref="svg" class="svgRenderer" :height="svgHeight">
        <g>
            <line
                v-for="line in lines"
                :key="line.id"
                :x1="line.x1"
                :y1="line.y1"
                :x2="line.x2"
                :y2="line.y2"
                :stroke="colors.nodeLine"
                stroke-width="2"
            />
        </g>

        <g>
            <template v-for="node in nodes" :key="node.id">
                <circle
                    v-if="highlightedNodes.includes(node.trie)"
                    r="25"
                    :cx="node.x"
                    :cy="node.y"
                    :fill="colors.nodeHighlightRing"
                />

                <circle
                    r="20"
                    :cx="node.x"
                    :cy="node.y"
                    :fill="
                        node.trie.isEnd
                            ? colors.nodeEndBackground
                            : colors.nodeBackground
                    "
                    :stroke="colors.pageBackground"
                    stroke-width="5"
                />

                <text
                    :x="node.x"
                    :y="node.y + 5"
                    text-anchor="middle"
                    :fill="colors.nodeForeground"
                >
                    {{ node.trie.char }}
                </text>
            </template>
        </g>
    </svg>
</template>

<script lang="ts">
interface Node {
    id: number;

    trie: TrieNode;

    x: number;
    y: number;
}

interface Line {
    id: number;

    x1: number;
    x2: number;
    y1: number;
    y2: number;
}
</script>

<script lang="ts" setup>
import { useElementSize } from '@vueuse/core';
import { ref, useTemplateRef, watch } from 'vue';
import { type TrieNode } from './Visualizer.vue';
import { useTrieColors } from './util';

const NODE_HEIGHT = 80;

const props = defineProps<{
    trie: TrieNode;
    highlightedNodes: TrieNode[];
}>();

const colors = useTrieColors();

const svg = useTemplateRef('svg');
const svgSize = useElementSize(svg);

const lines = ref<Line[]>([]);
const nodes = ref<Node[]>([]);
const svgHeight = ref<number>(NODE_HEIGHT);

function renderSvg() {
    const x = svgSize.width.value / 2;
    const y = 40;

    const newNodes: Node[] = [];
    const newLines: Line[] = [];

    let nodeId = 0;
    let maxY = 0;

    const dfsConvert = (
        currentTrieNode: TrieNode,
        cx: number,
        cy: number,
        availableWidth: number,
    ) => {
        const id = ++nodeId;

        const childNodes = currentTrieNode.children;
        const spacing = availableWidth / childNodes.length;

        const node: Node = {
            id,
            trie: currentTrieNode,
            x: cx,
            y: cy,
        };

        newNodes.push(node);

        if (maxY < cy) {
            maxY = cy;
        }

        childNodes.forEach((child, index) => {
            const childX =
                cx - (spacing * (childNodes.length - 1)) / 2 + index * spacing;
            const childY = cy + NODE_HEIGHT;

            dfsConvert(child, childX, childY, spacing);

            newLines.push({
                id: nodeId++,

                x1: cx,
                y1: cy,
                x2: childX,
                y2: childY,
            });
        });
    };

    dfsConvert(props.trie, x, y, svgSize.width.value);

    nodes.value = newNodes;
    lines.value = newLines;

    svgHeight.value = maxY + NODE_HEIGHT;
    console.log('UPD');
}

// We cannot use "computed", due to the DEEP changes inside the props.trie object...
watch(props.trie, () => renderSvg(), { deep: true, immediate: true });
watch(svgSize.width, () => renderSvg());
</script>

<style lang="css" scoped>
.svgRenderer {
    width: 100%;
}
</style>
