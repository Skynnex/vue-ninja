<template>
  <div class="text-center" style="margin-top: 100px">
    <div>
      <h1>Ponyracer <small>Always a pleasure to bet on ponies</small></h1>
    </div>

    <div>
      <router-link class="button button-primary" :to="{ name: 'races' }">Races</router-link>
    </div>
    <div>
      <router-link class="button button-primary" :to="{ name: 'register' }">Register</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style scoped></style>
