<script setup>
import MenuSuperior from '@/components/MenuSuperior.vue';
import Produtos from '@/components/Produtos.vue';
import { useMonitor } from '@/composables/monitor';

const { menu } = useMonitor()
</script>   

<template>
    <MenuSuperior />
    <Produtos />
    <component :is="menu" />
</template>
