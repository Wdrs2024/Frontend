<template>
  <section id="contato" class="bg-light py-5">
    <div class="container">
      
      <div class="row">
        <div class="col-md-6">
          <form @submit.prevent="enviarFormulario" class="contato-form">
            <div class="mb-3">
              <input
                v-model="form.nome"
                type="text"
                class="form-control"
                placeholder="Nome"
                required
              />
            </div>
            <div class="mb-3">
              <input
                v-model="form.email"
                type="email"
                class="form-control"
                placeholder="E-mail"
                required
              />
            </div>
            <div class="mb-3">
              <textarea
                v-model="form.mensagem"
                class="form-control"
                rows="4"
                placeholder="Mensagem"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Enviar</button>

            <div v-if="mensagemSucesso" class="alert alert-success mt-3">
              {{ mensagemSucesso }}
            </div>
            <div v-if="mensagemErro" class="alert alert-danger mt-3">
              {{ mensagemErro }}
            </div>
          </form>
        </div>

        <div class="col-md-6 text-center text-md-start mt-4 mt-md-0">
          <h3 class="mb-3">Entre em contato!</h3>
          <ul class="list-unstyled">
            <li class="mb-2">
              <strong>E-mail:</strong>
              <a href="mailto:pedhospitalar@gmail.com" class="text-decoration-none">pedhospitalar@gmail.com</a>
            </li>
            <li class="mb-2">
              <strong>WhatsApp:</strong>
              <a href="https://wa.me/5528999168444?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20os%20produtos%20da%20Ped%20Hospitalar." class="text-decoration-none" target="_blank">
                (28) 99916-8444
              </a>
            </li>
          </ul>
          <p class="text-muted mt-3">Ou utilize o formulário ao lado para enviar sua mensagem.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ContatoForm",
  data() {
    return {
      form: {
        nome: "",
        email: "",
        mensagem: "",
      },
      mensagemSucesso: "",
      mensagemErro: "",
    };
  },
  methods: {
    async enviarFormulario() {
      try {
        const resposta = await axios.post("http://localhost:3000/api/contacts", {
          name: this.form.nome,
          email: this.form.email,
          message: this.form.mensagem,
        });
        this.mensagemSucesso = resposta.data.message || "Mensagem enviada com sucesso!";
        this.mensagemErro = "";
        this.form.nome = "";
        this.form.email = "";
        this.form.mensagem = "";
      } catch (erro) {
        this.mensagemErro = "Erro ao enviar o contato.";
        this.mensagemSucesso = "";
        console.error(erro);
      }
    },
  },
};
</script>

<style scoped>
.contato-form {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

.sucesso {
  color: green;
  margin-top: 10px;
}

.erro {
  color: red;
  margin-top: 10px;
}
</style>
