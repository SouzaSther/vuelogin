<template>
  <nav class="navbar navbar-expand-lg navbar-pink bg-pink shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-white" href="#">💕 </a>

      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: menuAberto }">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Início</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/sobre">Sobre</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/crud">Crud</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/cep">Consultar Cep</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
  data() {
    return {
      menuAberto: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuAberto = !this.menuAberto;
    }
  }
};
</script>

<style scoped>
.navbar-pink {
  background-color: #ff276f;
}

.navbar-toggler {
  border: none;
  background-color: #fff3f8;
  border-radius: 5px;
}
</style>