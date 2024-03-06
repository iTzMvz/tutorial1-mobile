<script setup>
import { useScreen } from '@/composables/screen'

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
    <div class="botao">Home</div>
    <div class="botao">Carrinho</div>
    <div class="botao">User</div>
    <div class="botao">Sobre Nós</div>
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
</style>
