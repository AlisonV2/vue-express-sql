<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { 
    Navbar 
  },
};
</script>

<style>
:root {
  --bg: #f2f2f2;
  --yellow: #fff5b7;
  --blue: #005f99;
  --green: #00ead3;
  --pink: #ff449f;
  --light-grey: #bbb;
  --grey: #555;
}

body {
  background: var(--bg);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: var(--grey);
}
</style>
