<template>
  <div id="app">
    <footer class="footer">
      <p>© 2025 Minha Empresa. Todos os direitos reservados.</p>
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

#app {
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
  text-align: center;
  padding: 10px 0;
  font-size: 0.9rem;
  color: white;
  background-color: #ff276f;
}
</style>
