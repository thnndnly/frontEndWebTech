<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/services/api';

const router = useRouter();
const loginData = reactive({
  email: '',
  password: ''
});

const login = async () => {
  try {
    const response = await api.login(loginData.email, loginData.password);
    console.log('Login response data:', response.data);
    console.log('Login successful:', response.data);

    // Speichere die UUID und E-Mail im Local Storage
    localStorage.setItem('UUID', response.data);
    localStorage.setItem('email', loginData.email);
    console.log('UUID from local storage after login:', localStorage.getItem('UUID'));
    router.push('/main');
    alert('Login successful!');
  } catch (error) {
    console.error('Login failed:', error);
    alert('Login failed. Please check your credentials and try again.');
  }
};
</script>

<template>
  <div class="login-card">
    <div class="card-body">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Logo" style="height: 70px;">
      </div>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="loginData.email" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="loginData.password" required>
        </div>
        <div class="action-buttons">
          <button type="submit">Log in</button>
        </div>
      </form>
      <hr>
      <div class="link-container">
        <a href="#/newpassword">Can't remember password</a>
      </div>
      <div class="link-container">
        <a href="#/signup">Sign up</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
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
</style>
