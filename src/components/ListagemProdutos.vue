<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useScreen } from '@/composables/screen'


const produtos = ref([]);
const { browserWidth, deviceWidth, isMobile } = useScreen();

onMounted(async () => {
  const response = await axios.get('https://fakestoreapi.com/products')
  produtos.value = response.data
})

const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;
</script>

<template>
  <div>
    <h1>
       Produtos - {{ browserWidth }} - {{ deviceWidth }} - {{
      isMobile}} 
      <span v-if="isMobile">É móvel</span>
    </h1>
    <h1>Produtos</h1>
    <div class="container">
      <div class="card" v-for="produto in produtos" :key="produto.id">
        <h1 class="produto-nome">{{ produto.title.substring(0, 15) }}...</h1>
        <p>{{ produto.description.substring(0, 150) }}...</p>
        <p class="ler-mais">Ler Mais...</p>
        <img class="produto-imagem" :src="produto.image" :alt="produto.title" />
        <p class="produto-preco">{{ formatPrice(produto.price) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 1rem;
}
img{
  width: 50%;
  display: flex;
  margin: auto;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.card {
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
.ler-mais:hover {
  text-decoration: underline;
}
</style>