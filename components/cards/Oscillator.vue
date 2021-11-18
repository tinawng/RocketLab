<template>
  <div class="card__container">
    <h1 class="py-4 bg-orange bg-opacity-90 text-white">Oscillator</h1>
    <div class="pt-4 pb-2">
      <div class="flex justify-between items-center">
        <h4>Type</h4>
        <h4>{{osc_type+1}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#E7793D"
        discrete
        :step="15"
        :default_value="7"
        @update:value="emitMidiEvent('osc-type', ($event+1)*8); osc_type = $event"
      />
    </div>
    <div class="py-2">
      <div class="flex justify-between items-center">
        <h4>Wave</h4>
        <h4>{{Math.floor(osc_wave)}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#E7793D"
        :default_value="25"
        @update:value="emitMidiEvent('osc-type', Math.floor($event)/100*127); osc_wave = $event"
      />
    </div>
    <div class="py-2">
      <div class="flex justify-between items-center">
        <h4>Timbre</h4>
        <h4>{{Math.floor(osc_tymbre)}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#E7793D"
        :default_value="50"
        @update:value="emitMidiEvent('osc-tymbre', Math.floor($event)/100*127); osc_tymbre = $event"
      />
    </div>
    <div class="py-2">
      <div class="flex justify-between items-center">
        <h4>Shape</h4>
        <h4>{{Math.floor(osc_shape)}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#E7793D"
        :default_value="75"
        @update:value="emitMidiEvent('osc-shape', Math.floor($event)/100*127); osc_shape = $event"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ osc_type: 7, osc_wave: 25, osc_tymbre: 50, osc_shape: 75 }),

  methods: {
    emitMidiEvent(type, value) {
      this.$nuxt.$emit("midi-event", ["cc", type, value]);
    },
  },
};
</script>

<style lang="postcss" scoped>
.card__container {
  @apply w-72;
  @apply pb-2;
  @apply bg-white;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
.card__container > * {
  @apply px-6;
}
</style>