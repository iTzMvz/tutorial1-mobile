<script setup>
import { useCarrinhoStore } from '@/stores/carrinho'
import { formatPrice } from '@/stores/price'

const { carrinho, removeProduct } = useCarrinhoStore()
</script>

<template>
  <div class="carrinho">
    <div class="item" v-for="(item, index) in carrinho" :key="index">
      <div class="nome">{{ item.title }}</div>
      <div class="preco">{{ formatPrice(item.price) }}</div>
      <div class="quantidade">{{ item.amount }}</div>
      <button @click="removeProduct(item.id)">X</button>
      <img :src="item.image" alt="" class="imagem" />
    </div>
    <div class="info-carrinho">
      <hr />
      <div class="preco-total">Total: {{ formatPrice(carrinho.reduce((acc, item) => acc + item.price, 0)) }}</div>
      <RouterLink to="/cart" class="paginas">
        <button class="ver-carrinho">Ver Carrinho</button>
      </RouterLink>
        <button class="ver-carrinho">Limpar Carrinho</button>
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
  object-fit: contain;
  padding: 5px;
}
.ver-carrinho {
  display: flex;
  justify-content: center;
  margin: 4% auto;
  padding: 5px;
  border: 2px solid black;
  border-radius: 10px;
  width: 100%;
  font-size: 1.2rem;
  background-color: white;
  cursor: pointer;
  position: sticky;
  bottom: 0;
}
.preco-total {
  font-size: 1.2rem;
  font-weight: bold;
}
::-webkit-scrollbar {
  display: none;
}
.paginas {
  text-decoration: none;
  color: black;
}
.ver-carrinho:hover {
  color: lightcoral;
}
</style>
