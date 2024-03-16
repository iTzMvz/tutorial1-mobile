<script setup>
import { useCarrinhoStore } from '@/stores/carrinho'
import { formatPrice } from '@/stores/price'

const { carrinho } = useCarrinhoStore()
</script>
<template>
  <h1>Carrinho</h1>
  <div class="container">
    <div class="produtos">
      <div class="item" v-for="(item, index) in carrinho" :key="index">
        <div class="nome">{{ item.title }}</div>
        <img :src="item.image" alt="" class="imagem" />
        <div class="preco">{{ formatPrice(item.price) }}</div>
      </div>
    </div>
    <div class="info-carrinho">
      <div>Total: {{ formatPrice(carrinho.reduce((acc, item) => acc + item.price, 0)) }}</div>
      <button class="final">Finalizar Compras</button>
    </div>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  margin-top: 1rem;
}

.produtos {
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: 2%;
}
.item {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 2px solid black;
  border-radius: 10px;
  flex-wrap: wrap;
  padding: 10px;
}
.nome {
  padding: 5px;
}
.preco {
  padding: 5px;
}
.imagem {
  width: 20%;
  padding: 10px;
  margin: 10px;
  object-fit: contain;
}
.info-carrinho {
  font-size: 2rem;
  margin: 5% 2%;
}
.final{
    margin: 2% 0; 
    font-size: 1.3rem;
    padding: 10px;
    border-radius: 10px;
    background-color: lightgreen;
    border: 2px solid black;
}
@media screen and (max-width: 768px) {
  .imagem {
    width: 30%;
    height: 30%;
    object-fit: contain;
    padding: 0;
  }
}
</style>
