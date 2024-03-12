<script setup>
import MenuSuperior from '@/components/MenuSuperior.vue'
import Produto from '@/components/Produto.vue';
import { useMonitor } from '@/composables/monitor';

const { menu } = useMonitor()
</script>

<template>
    <MenuSuperior />
    <Produto />
    <component :is="menu" />
</template>

<style scoped>

</style>