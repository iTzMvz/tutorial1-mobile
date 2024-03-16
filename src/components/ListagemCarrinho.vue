<script setup>
import { useCarrinhoStore } from '@/stores/carrinho'

const { carrinho } = useCarrinhoStore()

console.log(carrinho)
</script>

<template>
  <div class="carrinho">
    <div class="item" v-for="item in carrinho">
      <div class="nome">{{ item.title }}</div>
      <div class="preco">{{ item.price }}</div>
      <img :src="item.image" alt="" class="imagem" />
    </div>
  </div>
</template>

<style scoped>
.carrinho {
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 10px;
}
.nome {
  padding: 10px;
}
.preco {
  padding: 10px;
}
.imagem {
  width: 60px;
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
