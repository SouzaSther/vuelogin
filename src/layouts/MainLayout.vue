<template>
  <!-- wrapper -->
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <main class="container flex-grow-1 py-4">
      <router-view />
    </main>
    <Footer class="mt-auto" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style></style>
