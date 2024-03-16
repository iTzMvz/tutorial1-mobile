<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { formatPrice } from '@/stores/price'
import { useCarrinhoStore } from '@/stores/carrinho';

const produtos = ref([])
const { carrinho, addProduct } = useCarrinhoStore(); 

onMounted(async () => {
  const response = await axios.get('https://fakestoreapi.com/products')
  produtos.value = response.data
})
function addCarrinho (produto){
  addProduct(produto)
  console.log(carrinho)
}

</script>

<template>
  <div>
    <h1>Produtos</h1>
    <div class="container">
      <div class="card" v-for="produto in produtos" :key="produto.id">
        <h1 class="produto-nome">{{ produto.title.substring(0, 15) }}...</h1>
        <p>{{ produto.description.substring(0, 150) }}...</p>
        <RouterLink :to="{ name: 'product', params: { id: produto.id } }" class="rota-compra"
          >Ler mais...</RouterLink
        >
        <img class="produto-imagem" :src="produto.image" :alt="produto.title" />
        <span>
          <p class="produto-preco">{{ formatPrice(produto.price) }}</p>
          <button class="compra" @click="addCarrinho(produto)">Comprar</button>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 1rem;
}
img {
  width: 50%;
  display: flex;
  margin: auto;
}
span {
  display: flex;
  justify-content: space-between;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.card {
  background: #fff;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.produto-nome {
  color: black;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.produto-preco {
  background-color: lightgreen;
  width: fit-content;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
.ler-mais {
  cursor: pointer;
  margin-top: 0.5rem;
  color: #007bff;
}
.compra {
  background-color: lightcoral;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
.compra:hover {
  background-color: red;
  transition: 0.3s;
}
.rota-compra {
  text-decoration: none;
}
.rota-compra:hover {
  text-decoration: underline;
}
</style>
