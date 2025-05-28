<template>
  <div class="cep-search">
    <h2>Buscar Endereço por CEP</h2>

    <div class="input-group">
      <input
        v-model="cep"
        @input="formatarCep"
        placeholder="Digite o CEP"
        maxlength="9"
      />
      <button @click="buscarEndereco">Buscar</button>
    </div>

    <p v-if="erro" class="erro">{{ erro }}</p>

    <div v-if="endereco" class="resultado">
      <p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
      <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
      <p><strong>Cidade:</strong> {{ endereco.localidade }}</p>
      <p><strong>Estado:</strong> {{ endereco.uf }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const cep = ref("");
const endereco = ref(null);
const erro = ref("");

function formatarCep() {
  cep.value = cep.value.replace(/\D/g, "");
  if (cep.value.length > 5) {
    cep.value = cep.value.slice(0, 5) + "-" + cep.value.slice(5, 8);
  }
}
async function buscarEndereco() {
  erro.value = "";
  endereco.value = null;

  const cepLimpo = cep.value.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    erro.value = "CEP inválido";
    return;
  }
  try {
    const response = await axios.get(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    );
    const data = response.data;

    if (data.erro) {
      erro.value = "CEP não encontrado";
    } else {
      endereco.value = data;
    }
  } catch (e) {
    erro.value = "Erro ao buscar o endereço";
  }
}
</script>

<style scoped>
.cep-search {
  max-width: 500px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #ff276f;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #ff60c2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #ff70e7;
}

.resultado {
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  color: #090b0c;
}

.erro {
  color: rgb(255, 255, 255);
  text-align: center;
}
</style>
