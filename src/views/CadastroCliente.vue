<template>
  <div class="container mt-5">
    <h2>Cadastro de Cliente</h2>
    <form @submit.prevent="enviar">
      <div class="mb-3">
        <input v-model="cliente.nome" class="form-control" placeholder="Nome" required>
      </div>
      <div class="mb-3">
        <input v-model="cliente.email" type="email" class="form-control" placeholder="Email" required>
      </div>
      <div class="mb-3">
        <input v-model="cliente.telefone" class="form-control" placeholder="Telefone" required>
      </div>
      <button class="btn btn-success">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CadastroCliente',
  data() {
    return {
      cliente: {
        nome: '',
        email: '',
        telefone: ''
      }
    };
  },
  methods: {
    async enviar() {
      try {
        await axios.post('http://localhost:3000/api/clients', this.cliente);
        alert('Cliente cadastrado!');
        this.cliente = { nome: '', email: '', telefone: '' };
      } catch (err) {
        alert('Erro ao cadastrar cliente.');
        console.error(err);
      }
    }
  }
};
</script>
