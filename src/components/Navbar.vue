<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'home' }">PonyRacer</router-link>
    <button @click="toggleNavbar()" type="button" class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbar" class="navbar-collapse" :class="{ collapse: navbarCollapsed }">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'races' }" class="nav-link">Races</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const navbarCollapsed = ref(true);
    function toggleNavbar() {
      navbarCollapsed.value = !navbarCollapsed.value;
    }
    return { navbarCollapsed, toggleNavbar };
  }
});
</script>

<style lang="scss" scoped></style>
