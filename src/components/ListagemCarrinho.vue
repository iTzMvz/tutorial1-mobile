<script setup>
import { useCarrinhoStore } from '@/stores/carrinho'
import { formatPrice } from '@/stores/price'

const { carrinho } = useCarrinhoStore()

</script>

<template>
  <div class="carrinho">
    <div class="item" v-for="(item, index) in carrinho" :key="index">
      <div class="nome">{{ item.title }}</div>
      <div class="preco">{{ formatPrice(item.price) }}</div>
      <img :src="item.image" alt="" class="imagem" />
      <button @click="removeItem(index)">X</button>
    </div>
    <div class="info-carrinho">
      <hr />
      <div>Total: {{ formatPrice(carrinho.reduce((acc, item) => acc + item.price, 0)) }}</div>
    </div>
  </div>
</template>

<style scoped>
hr {
  margin: 1rem 0;
  border: 1px solid black;
}
.carrinho {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
  max-height: 80vh;
}
.item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 2px solid black;
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
.ver-carrinho {
  padding: 5px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  margin: 5px;
}
::-webkit-scrollbar {
  display: none;
}
</style>
