<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand fw-bold">Ped Hospitalar</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link to="/" class="nav-link">Início</router-link></li>
            <li class="nav-item"><router-link to="/produtos" class="nav-link">Produtos</router-link></li>
            <li class="nav-item"><router-link to="/contato" class="nav-link">Contato</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Espaço para navbar fixa -->
    <div style="margin-top: 70px;"></div>

    <!-- Roteamento -->
    <router-view />

    <!-- Footer -->
    <footer class="bg-primary text-white text-center p-3 mt-5">
      © 2025 Ped Hospitalar - Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background-color: #f8f9fa;
  margin: 0;
}
</style>
