<script setup lang="ts">
import {reactive, type Ref, ref, type UnwrapRef} from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

const router = useRouter();
const loginData = reactive({
  username: '',
  password: '',
});

const loginError = ref(false);
const loginSuccess = ref(false);

function linkSignup() {
  router.push('/register');
}

async function login() {
  if(await tryLogin()) {
    setTimeout(async () => {
      await router.push('/Tabelle');
    }, 2000);
  }
  else {
    console.log('Login failed');
  }
}

async function tryLogin() {
  const url = 'https://allerjutsteswebtechprojekt.onrender.com/login';
  try {
    const response = await axios.post(url, loginData);
    if(response.status === 200) {
      localStorage.setItem('username', response.data);
      console.log('Login successful');
      loginError.value = false;
      loginSuccess.value = true;
      return true;
    }
  } catch (error) {
    localStorage.setItem('username', '')
    console.log('Login failed');
    loginSuccess.value = false;
    loginError.value = true;
    return false;
  }
}

</script>

<template>
  <div class="login-card">
    <div class="card-body">
      <div class="logo-container">
        <img alt="Vue logo" class="logo" src="../../assets/PokerLogo2.png" width="80" height="80" />
      </div>
      <div class="input-group">
        <label for="email">Username</label>
        <input type="email" id="email" v-model="loginData.username" required>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="loginData.password" required>
      </div>
      <div v-if="loginError" class="error-message">
        Login fehlgeschlagen. Bitte versuchen Sie es erneut.
      </div>
      <div v-if="loginSuccess" class="success-message">
        Login erfolgreich. Weiter so!
      </div>
      <div class="action-buttons">
        <button type="submit" @click="login()">Log in</button>
      </div>
      <hr>
      <div class="link-container">
        <a @click="linkSignup()">Don't have an account yet? Sign up</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  background-color: #000000; /* Schwarzer Hintergrund */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  max-width: 400px;
  width: 100%;
  color: white;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
  width: 100%;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #333; /* Eingabefelder Hintergrundfarbe anpassen */
  color: white;
}

input::placeholder {
  color: #aaa; /* Platzhalterfarbe anpassen */
}

.action-buttons button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.action-buttons button:hover {
  background-color: #0056b3;
}

.link-container {
  text-align: center;
  margin-top: 10px;
}

.link-container a {
  color: #007bff;
  text-decoration: none;
}

.link-container a:hover {
  text-decoration: underline;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

.success-message {
  color: green;
  margin-bottom: 10px;
}

</style>
