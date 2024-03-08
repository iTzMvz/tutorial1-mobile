<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { formatPrice } from '@/stores/price';

const route = useRoute()
const produto = ref([])
onMounted(async () => {
  const response = await axios.get('https://fakestoreapi.com/products/' + route.params.id)
  produto.value = response.data
})
</script>
<template>
  <div class="produto">
    <h2 class="nome-produto">{{ produto.title }}</h2>
    <img :src="produto.image" :alt="produto.title" class="imagem-produto"/>
    <div class="infos-produto">
      <p class="descricao-produto">{{ produto.description }}</p>
      <p class="preco-produto">{{formatPrice(produto.price)}}</p>
      <button class="comprar">Adicionar ao carinho</button>
    </div>
  </div>
</template>
<style scoped>
.produto{
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border-radius: 25px;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);
}
.nome-produto {
  padding: 1rem 0 1rem 1rem;
  margin: 1.4rem 3rem;
  color: black;
  font-weight: bold;
  background-color: rgb(121, 121, 121);
  border-radius: 25px;
}
.imagem-produto {
  width: 20%;
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2rem;
  margin-left: 3rem;
  background-color: none;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);
}
.infos-produto {
  display: flex;
  flex-direction: column;
}
.descricao-produto {
  margin: 1rem 3rem;
  padding: 1rem 0;
}
.preco-produto {
  margin-left: 3rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  
}
.comprar {
  margin: 1rem 3rem;
  padding: 1rem;
  border-radius: 25px;
  background-color: lightgreen;
  font-weight: bold;
  font-size: 1rem;
  color: black;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);
  border: 3px solid black;
  max-width: 200px;
}
.comprar:hover {
  background-color: rgb(67, 160, 67);
  transition: 0.2s;
  
}
</style>
