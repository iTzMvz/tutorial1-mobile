<script setup>
  import MenuSuperior from '@/components/MenuSuperior.vue'
  import SobreNos from '@/components/SobreNos.vue'
  import { useMonitor } from '@/composables/monitor';

  const { menu } = useMonitor()
</script>

<template>
  <MenuSuperior />
  <SobreNos />
  <component :is="menu" />
</template>
