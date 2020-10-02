<template>
  <figure @click="clicked()">
    <img :src="ponyImageUrl" :alt="ponyModel.name" />
    <figcaption>{{ ponyModel.name }}</figcaption>
  </figure>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { PonyModel } from '@/models/PonyModel';
export default defineComponent({
  name: 'Pony',

  props: {
    ponyModel: {
      type: Object as PropType<PonyModel>,
      required: true
    }
  },

  emits: {
    ponySelected: (pony: PonyModel) => pony
  },

  setup(props, { emit }) {
    const ponyImageUrl = computed(() => {
      return `/images/pony-${props.ponyModel.color}.gif`.toLowerCase();
    });
    function clicked() {
      emit('ponySelected', props.ponyModel);
    }
    return {
      ponyImageUrl,
      clicked
    };
  }
});
</script>

<style lang="css" scoped>
figure {
  margin: 3px;
  padding: 3px;
  font-size: 12px;
}

img {
  height: 50px;
}
</style>
