<script setup>
</script>
<template>
<div>
    <h1 class="titulo">Sobre Nós</h1>
    <div class="container">
      <p class="conteudo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
        accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
        eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
        corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
      </p>
      <img src="../../logo.png" alt="Logo">
      <p class="conteudo">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
          accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
        eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
        corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
      </p>
      <p class="conteudo">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi quis saepe id itaque
          accusantium quia possimus corporis aut aliquid iusto ducimus dolorem, rerum nulla veniam,
          eius distinctio, nobis sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Provident porro obcaecati consectetur vero ipsam, sit iste esse sunt dolor corporis
          corrupti, veritatis quidem! Tenetur corrupti quidem, ratione quas saepe quod.
        </p>
        
    </div>
   
  </div>
</template>
<style scoped>
img{
  width: 40%;
  display: flex;
  margin: auto;

}
.titulo {
  text-align: center;
  margin: 1rem auto;
  color: black;
  font-weight: bold;
  background-color: lightcoral;
  border-radius: 25px;
  width: 25%;
}
.container {
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
  margin: 1rem;
}
.conteudo {
  display: flex;
  width: 50%;
  margin: 1rem 1rem;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 0.4rem;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>