<template>
  <div class="card__container">
    <h1 class="bg-blue bg-opacity-80 text-white">Envelope</h1>
    <div>
      <div class="flex justify-between items-center">
        <h4>Attack</h4>
        <h4>{{Math.floor(controls['env-attack'])}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#447DD9"
        :shown_value="controls['env-attack']/127*100"
        @update:value="emitMidiEvent('env-attack', Math.floor($event)/100*127)"
      />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h4>Decay</h4>
        <h4>{{Math.floor(controls['env-decay'])}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#447DD9"
        :shown_value="controls['env-decay']/127*100"
        @update:value="emitMidiEvent('env-decay', Math.floor($event)/100*127)"
      />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h4>Sustain</h4>
        <h4>{{Math.floor(controls['env-sustain'])}}</h4>
      </div>
      <utils-slider
        class="mt-2"
        color="#447DD9"
        :shown_value="controls['env-sustain']/127*100"
        @update:value="emitMidiEvent('env-sustain', Math.floor($event)/100*127)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ controls: { "env-attack": 0, "env-decay": 0, "env-sustain": 0 } }),

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