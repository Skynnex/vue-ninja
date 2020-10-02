<template>
  <div :class="alertClasses">
    <slot></slot>
    <button v-if="dismissible" @click="dismiss()" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&#215;</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'Alert',
  props: {
    dismissible: {
      type: Boolean,
      required: true
    },
    variant: {
      type: String,
      required: true
    }
  },
  emits: {
    dismissed: () => true
  },
  setup(props, { emit }) {
    function dismiss() {
      emit('dismissed');
    }
    const alertClasses = computed(() => {
      return `alert alert-${props.variant}`;
    });
    return {
      dismiss,
      alertClasses
    };
  }
});
</script>

<style scoped></style>
