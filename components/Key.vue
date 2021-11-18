<template>
  <div
    class="key__container"
    :class="{'key_dark': dark}"
    v-touch:start="keyDown"
    v-touch:end="keyUp"
  ></div>
</template>

<script>
export default {
  props: {
    midi_note: Number,
    dark: Boolean,
  },

  data: () => ({ mouse_down: false, note_velocity: 127 }),

  methods: {
    keyDown() {
      console.log('down');
      this.$nuxt.$emit("midi-event", ["note-on", this.midi_note, this.note_velocity]);
    },
    keyUp() {
      console.log('up');
      if (this.mouse_down) this.$nuxt.$emit("midi-event", ["note-off", this.midi_note, 0]);
    },
  },
};
</script>

<style lang="postcss" scoped>
.key__container {
  @apply h-12 w-12;
  @apply border-2 border-dark;
  @apply rounded-full;

  @apply transition-colors;
}
.key__container:active {
  @apply border-orange;
}
.key_dark {
  @apply mt-0;
  @apply bg-dark;
}
.key_dark:active {
  @apply bg-orange border-orange;
}
</style>