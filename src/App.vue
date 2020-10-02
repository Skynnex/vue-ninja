<template>
  <Navbar />
  <div class="container" style="margin-top: 70px">
    <RouterView v-slot="{ Component }">
      <Alert v-if="error" variant="danger" :dismissible="true" @click="error = false">An error occurred while loading.</Alert>
      <Suspense v-else timeout="0">
        <component :is="Component" />
        <template #fallback>Loading...</template>
      </Suspense>
    </RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
export default defineComponent({
  name: 'App',

  components: {
    Navbar
  },
  setup() {
    const error = ref(false);
    onErrorCaptured(() => {
      error.value = true;
      return true;
    });
    return { error };
  }
});
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~font-awesome/css/font-awesome.min.css';
</style>
