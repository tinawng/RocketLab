<template>
  <div class="card__container">
    <h1 class="bg-yellow bg-opacity-90 text-white">Filter</h1>
    <div>
      <div class="flex justify-between items-center">
        <h4>Cutoff</h4>
        <h4>{{Math.floor(controls['filter-cutoff'])}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#F9BC32"
        :shown_value="controls['filter-cutoff']/127*100"
        @update:value="emitMidiEvent('filter-cutoff', Math.floor($event)/100*127)"
      />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h4>Resonance</h4>
        <h4>{{Math.floor(controls['filter-resonance'])}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#F9BC32"
        :shown_value="controls['filter-resonance']/127*100"
        @update:value="emitMidiEvent('filter-resonance', Math.floor($event)/100*127)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ controls: { "filter-cutoff": 0, "filter-resonance": 0 } }),

  created() {
    this.$nuxt.$on("rx-midi-event", (event) => {
      if (event[0].startsWith("cc") && Object.keys(this.controls).includes(event[1]))
        this.controls[event[1]] = event[2];
    });
  },

  methods: {
    emitMidiEvent(type, value) {
      this.$nuxt.$emit("tx-midi-event", ["cc", type, value]);
    },
  },
};
</script>

<style lang="postcss" scoped>
.card__container {
  @apply w-72;
  @apply bg-white;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
.card__container > * {
  @apply py-4 px-6;
}
</style>