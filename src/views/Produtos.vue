<template>
  <div class="container mt-5">
    <h2>Nossos Produtos</h2>
    <div class="row">
      <div class="col-md-4" v-for="p in produtos" :key="p.id">
        <div class="card mb-4">
          <img :src="img/luvas.jpg" class="card-img-top" alt="Imagem do Produto">
          <div class="card-body">
            <h5 class="card-title">{{ p.nome }}</h5>
            <p class="card-text">{{ p.descricao }}</p>
            <p><strong>R$ {{ p.preco }}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Produtos',
  data() {
    return {
      produtos: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/products')
      .then(res => this.produtos = res.data)
      .catch(err => console.error(err));
  }
};
</script>
