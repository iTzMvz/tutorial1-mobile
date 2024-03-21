<script setup>
import MenuSuperior from '@/components/MenuSuperior.vue';
import Carrinho from '@/components/Carrinho.vue';
import { useMonitor } from '@/composables/monitor';

const { menu } = useMonitor()
</script>
<template>
    <MenuSuperior />
    <Carrinho />
    <component :is="menu" />
</template>