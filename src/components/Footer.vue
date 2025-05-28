<template>
  <div id="app">
    <footer class="footer d-flex">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
      <p  class="m-0"> 💕 2025 Minha Empresa. Todos os direitos reservados.</p>
</div>
<div class="col-md-6 d-flex justify-content-center">
      <h2 class="h6 mb-0 me-3 tamanho">Follow us</h2>
      <div class="d-flex justify-content-center gap-3 fs-5 social-icons">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter-x"></i>
        <i class="bi bi-github"></i>
        <i class="bi bi-telegram"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-dribbble"></i>
      </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
.tamanho{
  padding: 2px;
}
#app {
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
  text-align: center;
  padding: 15px 0;
  font-size: 0.9rem;
  background-color: #ff276f;
  color: white;
}

.social-icons i {
  font-size: 1.1rem; /* menor tamanho */
  cursor: pointer;
  transition: color 0.3s ease;
}

.social-icons i:hover {
  color: #000; /* destaque ao passar o mouse */
}
</style>