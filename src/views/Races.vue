<template>
  <div>
    <Race v-for="race in races" :key="race.id" :raceModel="race" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RaceModel } from '@/models/RaceModel';
import Race from '@/components/Race.vue';
import { useRaceService } from '@/composables/RaceService';

export default defineComponent({
  name: 'Races',

  components: {
    Race
  },

  async setup() {
    const races = ref<Array<RaceModel> | null>(null);
    const race = useRaceService();
    races.value = await race.list();
    return {
      races
    };
  }
});
</script>

<style lang="scss" scoped></style>
