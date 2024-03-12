<script setup>
import CartPlus from 'vue-material-design-icons/CartPlus.vue';
import Account from 'vue-material-design-icons/Account.vue';
import Menu from 'vue-material-design-icons/Home.vue';

</script>
<template>
<div class="botoes-mobile">
    <button class="botao">
        <Menu />
    </button>
    <button class="botao">
        <CartPlus />
    </button>
    <button class="botao">
        <Account />
    </button>
    <button class="botao">
        <img src="../../logo.png" alt="Logo" />
    </button>
</div>
</template>
<style scoped>
.botoes-mobile{
    display: flex;
    text-align: center;
    position: sticky;
    bottom: 0;
}
.botao{
  display: grid;
  place-items: center;
  width: 25%;
  height: 2.5rem;
  background-color: rgb(78, 97, 96);
  border: none;
}
.botao:hover{
  transition: 0.5s;
  background-color: rgb(138, 160, 159);
}
img{
    width: 50%;
    height: 50%;
    object-fit: contain;
    }
</style>