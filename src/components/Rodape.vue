<script setup>
import { useScreen } from '@/composables/screen'
import CartPlus from 'vue-material-design-icons/CartPlus.vue';
import Account from 'vue-material-design-icons/Account.vue';
import Menu from 'vue-material-design-icons/Home.vue';

const { isMobile } = useScreen();
</script>

<template>
  <div v-if="!isMobile">
    <div class="rodape-titulo">Informações do site</div>
    <div class="rodape">
      <div class="conteudo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
        accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
        eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
        corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
      </div>
      <div class="conteudo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
        accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
        eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
        corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
      </div>
      <div class="conteudo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
        accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
        eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
        corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
      </div>
      <div class="conteudo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
        accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
        eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
        corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
      </div>
      <div class="conteudo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
        accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
        eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
        corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
      </div>
      <div class="conteudo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
        accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
        eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
        corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
      </div>
    </div>
  </div>
  <div v-if="isMobile" class="botoes-mobile">
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
.rodape {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #2e2f30;
  color: aliceblue;
  text-align: center;
}
.rodape-titulo{
  background-color: #18191a ;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  color: aliceblue;
  padding: 0.3rem;
}
.conteudo{
  display: flex;
  margin: auto;
  padding: 1rem;
  width: 40vw;
  text-align: justify;
}
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
