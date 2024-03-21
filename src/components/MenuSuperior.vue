<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CartPlus from 'vue-material-design-icons/CartPlus.vue'
import Account from 'vue-material-design-icons/Account.vue'
import Menu from 'vue-material-design-icons/Menu.vue'
import ListagemCarrinho from './ListagemCarrinho.vue'

const menuAberto = ref(false)
const carrinnhoAberto = ref(false)
</script>

<template>
  <header>
    <div class="header--logo">
      <img src="../../logo.png" alt="Logo" />
    </div>
    <nav>
      <ul :class="menuAberto ? 'menu' : ''">
        <li>
          <RouterLink to="/" class="paginas">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'products', params: { type: null }}">
            Eletrônicos
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'products', params: { type: null }}">
            Jóias
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'products', params: { type: null }}">
            Masculino
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'products', params: { type: produto.id } }">
            Feminino
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/aboutus" class="paginas">Sobre Nós</RouterLink>
        </li>
      </ul>
      <ListagemCarrinho :class="carrinnhoAberto ? 'carrinho' : 'carrinho-itens'"/>
    </nav>
    <div class="header--icons">
      <Account />
      <CartPlus @click="carrinnhoAberto = !carrinnhoAberto" />
      <Menu class="menu-hamburger" @click="menuAberto = !menuAberto" />
    </div>
  </header>
</template>
<style scoped>
header {
  background: #fff;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
}
.paginas {
  text-decoration: none;
  color: black;
}
.paginas:hover {
  color: lightcoral;
}
.header--logo {
  display: flex;
  align-items: center;
}
.header--logo img {
  width: 6rem;
  height: 3rem;
  margin-right: 0.5rem;
}
nav ul {
  display: flex;
  gap: 1rem;
}
nav li {
  list-style: none;
}

.header--icons {
  display: flex;
  gap: 1rem;
}
.menu-hamburger {
  display: none;
}
.carrinho-itens {
  display: none;
}
nav .carrinho {
    width: 20vw;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    right: 10px;
    padding: 10px 30px;
  }

@media (max-width: 768px) {
  nav ul {
    display: none;
  }
  .menu-hamburger {
    display: block;
  }

  nav .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    right: 0;
    text-align: right;
    padding: 10px 16px;
  }
  
  nav .menu li {
    display: block;
    margin-top: 12px;
  }
  nav .carrinho li {
    display: block;
    margin-top: 12px;
  }
  nav .carrinho{
    width: 45vw
  }
}
</style>
