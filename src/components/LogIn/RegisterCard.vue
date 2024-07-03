<script setup lang="ts">
import {reactive, ref} from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

const router = useRouter();
const registerData = reactive({
  name: '',
  password: '',
  confirmPassword: ''
});

const registerError = ref(false);
const registerSuccess = ref(false);
const registerErrorText = ref('');

function linkLogin() {
  router.push('/login');
}

async function register() {
  if(registerData.password !== registerData.confirmPassword){
    console.log('Passwords do not match');
    registerError.value = true;
    registerErrorText.value = 'Passwords do not match';
    return;
  }
  if(await tryRegister()) {
    setTimeout(async () => {
      await router.push('/login');
    }, 2000);
  }
  else {
    console.log('Registration failed');
  }
}

async function tryRegister() {
  const url = 'https://allerjutsteswebtechprojekt.onrender.com/register';
  try {
    const user = {
      name: registerData.name,
      password: registerData.password
    }
    const response = await axios.post(url, user);
    if(response.status === 200) {
      console.log('Registration successful');
      registerError.value = false;
      registerSuccess.value = true;
      return true;
    }
  } catch (error) {
    console.log('Registration failed');
    registerSuccess.value = false;
    registerError.value = true;
    registerErrorText.value = 'Something went wrong. Please try again.'
    return false;
  }
}

</script>

<template>
  <div class="register-card">
    <div class="card-body">
      <div class="logo-container">
        <img alt="Cardcombat Poker logo" class="logo" src="../../assets/PokerLogo2.png" width="80" height="80" />
      </div>
      <div class="input-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="registerData.name" required>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="registerData.password" required>
      </div>
      <div class="input-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" v-model="registerData.confirmPassword" required>
      </div>
      <div v-if="registerError" style="color: red; margin-bottom: 10px;">
        {{ registerErrorText }}
      </div>
      <div v-if="registerSuccess" style="color: green; margin-bottom: 10px;">
        Registration successful. Redirecting to login page...
      </div>
      <div class="action-buttons">
        <button @click="register()" type="submit">Register</button>
      </div>
      <hr>
      <div class="link-container">
        <a @click="linkLogin()">Already have an account? Log in</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-card {
  background-color: #000000; /* Tiefes Schwarz */
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
</style>
