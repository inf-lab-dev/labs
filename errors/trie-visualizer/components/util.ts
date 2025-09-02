import { useCssVar } from '@vueuse/core';
import { computed } from 'vue';

export function useTrieColors() {
    const pageBackgroundColor = useCssVar('--bgColor-default', document.body);
    const nodeLineColor = useCssVar('--fgColor-muted', document.body);
    const nodeBackgroundColor = useCssVar('--fgColor-accent', document.body);
    const nodeEndBackgroundColor = useCssVar('--fgColor-done', document.body);
    const nodeHighlightRingColor = useCssVar(
        '--fgColor-attention',
        document.body,
    );

    return computed(() => ({
        pageBackground: pageBackgroundColor.value,
        nodeLine: nodeLineColor.value,
        nodeBackground: nodeBackgroundColor.value,
        nodeEndBackground: nodeEndBackgroundColor.value,
        nodeHighlightRing: nodeHighlightRingColor.value,

        nodeForeground: 'white',
    }));
}
