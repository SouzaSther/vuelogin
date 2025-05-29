<template>
  <div class="container mt-4">

    <button class="btn text-white pink mb-4" @click="adicionarPost">+</button>

    <div v-if="editando" class="mb-4 p-4 border rounded bg-light">
      <h5>{{ postEditando.id ? 'Editar Post' : 'Novo Post' }}</h5>
      <div class="mb-3">
        <label class="form-label">Título</label>
        <input v-model="postEditando.title" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Corpo</label>
        <textarea v-model="postEditando.body" class="form-control" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">ID do Usuário</label>
        <input v-model.number="postEditando.userId" type="number" class="form-control" />
      </div>
      <button class="btn pink text-white me-2" @click="salvarEdicao">Salvar</button>
      <button class="btn pink text-white " @click="cancelarEdicao">Cancelar</button>
    </div>

    <div class="row g-3">
  <div class="col-md-3" v-for="post in posts.slice(0, 3)" :key="post.id">
    <div class="card shadow-sm rounded-4 border-0 p-2">
      <div class="d-flex justify-content-between align-items-start">
        <small class="text-muted">ID do Usuário: {{ post.userId }}</small>
        <div>
          <i class="bi bi-pencil me-2 cursor-pointer" @click="editarPost(post)"></i>
          <i class="bi bi-trash cursor-pointer" @click="deletarPost(post.id)"></i>
        </div>
      </div>
      <h6 class="fw-bold mt-2 mb-1" style="font-size: 1rem;">{{ post.title }}</h6>
      <hr class="my-1" />
      <p style="font-size: 0.875rem; margin-bottom: 0;">{{ post.body }}</p>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Crud",
  data() {
    return {
      posts: [],
      editando: false,
      postEditando: {}
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.error("Erro ao buscar dados", error);
      });
  },
  methods: {
    deletarPost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },
    editarPost(post) {
      this.postEditando = { ...post }; 
      this.editando = true;
    },
    adicionarPost() {
      this.postEditando = { title: '', body: '', userId: null };
      this.editando = true;
    },
    salvarEdicao() {
      if (!this.postEditando.title || !this.postEditando.body || !this.postEditando.userId) {
        alert("Preencha todos os campos!");
        return;
      }
      if (this.postEditando.id) {
        
        const index = this.posts.findIndex(p => p.id === this.postEditando.id);
        if (index !== -1) {
          this.posts.splice(index, 1, { ...this.postEditando });
        }
      } else {
       
        const novoId = this.posts.length ? Math.max(...this.posts.map(p => p.id)) + 1 : 1;
        this.posts.unshift({ ...this.postEditando, id: novoId });
      }
      this.editando = false;
      this.postEditando = {};
    },
    cancelarEdicao() {
      this.editando = false;
      this.postEditando = {};
    }
  }
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.pink{
    background: #ff276f;
}
</style>
