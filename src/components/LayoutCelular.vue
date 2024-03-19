<script setup>
import CartPlus from 'vue-material-design-icons/CartPlus.vue'
import Account from 'vue-material-design-icons/Account.vue'
import Menu from 'vue-material-design-icons/Home.vue'
</script>
<template>
  <div class="botoes-mobile">
    <RouterLink to="/" class="rota">
      <button class="botao">
        <Menu />
      </button>
    </RouterLink>
    <RouterLink to="/cart" class="rota">
      <button class="botao">
        <CartPlus />
      </button>
    </RouterLink>
    <button class="botao">
      <Account />
    </button>
    <RouterLink to="/aboutus" class="rota">
      <button class="botao">
        <img src="../../logo.png" alt="Logo" />
      </button>
    </RouterLink>
  </div>
</template>
<style scoped>
.botoes-mobile {
  display: flex;
  position: fixed;
  bottom: 0;
}
.botao {
  display: grid;
  place-items: center;
  width: 100%;
  height: 2.5rem;
  background-color: rgb(78, 97, 96);
  border: none;
}
.botao:hover {
  transition: 0.5s;
  background-color: rgb(138, 160, 159);
}
.rota {
  width: 100%;
}
img {
  width: 50%;
  height: 50%;
  object-fit: contain;
}
</style>
