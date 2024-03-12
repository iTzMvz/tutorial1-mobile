import {
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    shallowRef,
} from 'vue';

export function useMonitor() {
    const menu = shallowRef(
        defineAsyncComponent(() => import('../components/LayoutCelular.vue')),
    );
    const updateBreakpoint = () => {
        const width = window.innerWidth;
        if (width <= 768) {
            menu.value = defineAsyncComponent(() =>
                import('../components/LayoutCelular.vue'),
            );
        }
        else {
            menu.value = defineAsyncComponent(() =>
                import('../components/Rodape.vue'),
            );
        }
    };

    onMounted(() => {
        updateBreakpoint();
        window.addEventListener('resize', updateBreakpoint);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateBreakpoint);
    });

    return { menu };  
}