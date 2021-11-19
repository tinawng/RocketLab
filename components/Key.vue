<template>
  <div
    class="key__container"
    :class="{'key_dark': dark, 'key_active': active}"
    v-touch:start="() => {mouse_down = true}"
    v-touch:end="() => {mouse_down = false}"
    @mouseleave="() => {mouse_down = false}"
  ></div>
</template>

<script>
export default {
  props: {
    midi_note: Number,
    dark: Boolean,
  },

  data: () => ({ mouse_down: false, active: false, note_velocity: 127 }),

  watch: {
    mouse_down: function (mouse_down) {
      this.$nuxt.$emit("tx-midi-event", [
        mouse_down ? "note-on" : "note-off",
        this.midi_note,
        mouse_down ? this.note_velocity : 0,
      ]);
    },
  },

  created() {
    this.$nuxt.$on("rx-midi-event", (event) => {
      if (event[0].startsWith("note") && event[1] === this.midi_note) {
        this.active = event[2] > 0;
      }
    });
  },
};
</script>

<style lang="postcss" scoped>
.key__container {
  @apply h-12 w-12;
  @apply border-2 border-dark;
  @apply rounded-full;

  @apply transition-colors;
  user-select: none;
}
.key_active {
  @apply border-orange;
}
.key_dark {
  @apply mt-0;
  @apply bg-dark;
}
.key_dark.key_active {
  @apply bg-orange border-orange;
}
</style>