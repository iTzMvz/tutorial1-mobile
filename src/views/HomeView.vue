<script setup>
  import MenuSuperior from '@/components/MenuSuperior.vue'
  import ListagemProdutos from '@/components/ListagemProdutos.vue'
  import { useMonitor } from '@/composables/monitor';

  const { menu } = useMonitor()
</script>

<template>
  <MenuSuperior />
  <ListagemProdutos />
  <component :is="menu" />
</template>
