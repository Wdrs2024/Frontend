<template>
  <div>
    <!-- Hero -->
    <header class="hero d-flex align-items-center text-center text-white py-5" style="background-color: #007bff;">
      <div class="container">
        <h1 class="display-4">Produtos Hospitalares de Qualidade</h1>
        <p class="lead">Equipamentos e suprimentos para clínicas, hospitais e residências.</p>
        <router-link to="/produtos" class="btn btn-light btn-lg mt-3">Ver Produtos</router-link>
      </div>
    </header>

    <!-- Produtos estático de exemplo (pode vir do backend) -->
    <section id="produtos" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Principais Produtos</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="produto in produtosExemplo" :key="produto.nome">
            <div class="card h-100 shadow-sm text-center">
              <img :src="produto.imagem" class="card-img-top" :alt="produto.nome" />
              <div class="card-body">
                <h5 class="card-title">{{ produto.nome }}</h5>
                <p class="card-text">{{ produto.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre -->
    <section id="sobre" class="bg-light py-5">
      <div class="container text-center">
        <h2>Sobre a Ped Hospitalar</h2>
        <p class="mt-3">
          Atuamos há mais de 4 anos fornecendo equipamentos hospitalares com qualidade,
          segurança e atendimento personalizado.
        </p>
      </div>
    </section>

    <!-- Horário e Localização -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Horário e Localização</h2>
        <div class="row">
          <div class="col-md-6">
            <table class="table table-bordered">
              <tr><td>Seg - Sex</td><td>09h - 18h</td></tr>
              <tr><td>Sábado</td><td>08h - 12h</td></tr>
              <tr><td>Domingo</td><td>Fechado</td></tr>
            </table>
          </div>
          <div class="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.6232086537178!2d-40.77875723048091!3d-20.898519945916064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9191bd31c01c3%3A0xecfab9de040e613e!2sPed%20Hospitalar!5e1!3m2!1spt-BR!2sbr!4v1757973316788!5m2!1spt-BR!2sbr"
              width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Contato -->
    <section id="contato" class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Fale Conosco</h2>
        <div class="row">
          <div class="col-md-6 mx-auto">
            <ContatoForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContatoForm from "../components/ContatoForm.vue";

export default {
  name: "Home",
  components: {
    ContatoForm
  },
  data() {
    return {
      produtosExemplo: [
        { nome: "Luvas Descartáveis", descricao: "Proteção e conforto para procedimentos médicos.", imagem: require("../assets/img/luvas.jpg") },
        { nome: "Máscaras Cirúrgicas", descricao: "Alta filtragem e segurança para profissionais e pacientes.", imagem: require("../assets/img/mascaras.jpg") },
        { nome: "Equipamentos Hospitalares", descricao: "Monitores, oxímetros, macas e muito mais.", imagem: require("../assets/img/aparelhos.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
.hero {
  /* exemplo estilo hero, pode ajustar */
  background-color: #007bff;
  color: white;
}
</style>
