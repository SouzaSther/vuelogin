<template>
  <div class="login-container red">
    <div class="login-box">
      <div class="mb-4">
        <div class="logo-text border-bottom border-3">Faça o seu Login</div>
      </div>
      <form class="text-start" @submit.prevent="handleLogin">
        <label for="email">Seu e-mail*</label>
        <div class="input-group">
          <input id="email" type="text" class="form-control" v-model="email" />
        </div>

        <label for="password">Sua senha*</label>
        <div class="input-group">
          <input
            id="password"
            type="password"
            class="form-control"
            v-model="senha"
          />
        </div>

        <div class="text-start">
          <label>
            <input type="checkbox" v-model="lembrarMe" />
            Lembrar-me
          </label>
        </div>

        <button
          type="submit"
          class="btn rounded-pill bg-primary text-white my-3 w-50"
        >
          ENTRAR
        </button>

        <!-- Mensagem de erro -->
        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>

        <p>Esqueceu sua senha? <a href="#" target="_blank">Clique aqui!</a></p>
      </form>
    </div>
     
  </div>
 
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      lembrarMe: false,
      email: "",
      senha: "",
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.email && this.senha) {
        this.errorMessage = "";
        this.$router.push("/home");
      } else {
        this.errorMessage = "Por favor, preencha todos os campos obrigatórios.";
      }
    },
  },
};
</script>
<style scoped>
.border-bottom {
  border-bottom: 2px solid #ff276f !important;
}
.red {
  background-color: #ff276f;
}

.login-container {
  height: 94.1vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: #fff;
  padding: 60px 45px;
  border-radius: 30px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 340px;
  text-align: center;
}

.logo-text {
  font-size: 25px;
  text-align: start;
}

.form-control {
  border-radius: 0;
  padding-right: 40px;
}

.form-control:focus {
  box-shadow: none;
  border-color: #000;
}

.input-group {
  position: relative;
  margin-bottom: 24px;
}

.input-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  cursor: pointer;
}
</style>
