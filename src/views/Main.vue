<script setup lang="ts">

import router from "@/router";
</script>

<template>
  <header>
    <div class="logo">
      <h1>CardCombatPoker</h1>
    </div>
    <p>Track your Poker game history with ease.</p>
  </header>
  <main>
    <section class="intro">
      <h2>Welcome to CardCombatPoker</h2>
      <p>Your ultimate tool for tracking and analyzing your poker games.</p>
    </section>
    <section class="features">
      <h2>Features</h2>
      <ul>
        <li>Log your game history</li>
        <li>Analyze your performance</li>
        <li>Track your earnings</li>
        <li>Improve your strategy</li>
      </ul>
    </section>
    <section class="cta">
      <h2>Get Started</h2>
      <p>Join CardCombatPoker today and take control of your poker journey.</p>
      <button @click="router.push('/register')">Sign Up Now</button>
    </section>
  </main>
</template>

<style scoped>
/* Reset some default styles */
body, h1, h2, p, ul, li, header, main, section {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* General body styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #181818;
  color: rgba(235, 235, 235, 0.64);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header styles */
header {
  background: black;
  color: darkred;
  padding: 50px 15px 70px 50px;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
  border-radius: 10px;
}

header .logo h1 {
  margin: 0;
  font-size: 2.5em;
}

header p {
  margin: 5px 0 0;
}

/* Main content styles */
main {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.intro, .features, .cta {
  flex: 1;
  min-width: 300px;
  padding: 10px 20px;
  background: #2a2a2a;
  border-radius: 10px;
  margin-bottom: 10px;
}

.intro h2, .features h2, .cta h2 {
  margin-bottom: 10px;
  font-size: 1.5em;
  color: darkred;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding-left: 20px;
  margin-bottom: 10px;
  position: relative;
}

.features li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: mediumseagreen;
}

.cta button {
  background: #007bff;
  color: white;
  border: 2px solid #007bff;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.cta button:hover {
  background: #0056b3;
}

/* Input styles */
input[type=text] {
  border: 2px solid #007bff;
  border-radius: 2px;
  background-color: #181818;
  outline: none;
  color: rgba(235, 235, 235, 0.64);
  padding: 5px;
}
</style>