<template>
  <div class="keyboard__container">
    <div class="flex">
      <key class="mt-10 -mx-1.5 portrait:ml-0" :midi_note="base_note" />
      <key dark :midi_note="base_note + 1" />
      <key class="mt-10 -mx-1.5" :midi_note="base_note + 2" />
      <key dark :midi_note="base_note + 3" />
      <key class="mt-10 -ml-1.5 mr-1.5 portrait:mr-0" :midi_note="base_note + 4" />
    </div>
    <div class="flex">
      <key class="mt-10 -mr-1.5 ml-1.5 portrait:ml-0" :midi_note="base_note + 5" />
      <key dark :midi_note="base_note + 6" />
      <key class="mt-10 -mx-1.5" :midi_note="base_note + 7" />
      <key dark :midi_note="base_note + 8" />
      <key class="mt-10 -mx-1.5" :midi_note="base_note + 9" />
      <key dark :midi_note="base_note + 10" />
      <key class="mt-10 -mx-1.5 portrait:mr-0" :midi_note="base_note + 11" />
    </div>
  </div>
</template>

<script>
export default {
  props: { base_note: Number },
};
</script>

<style lang="postcss" scoped>
.keyboard__container {
  @apply flex portrait:flex-wrap portrait:justify-center portrait:gap-4;
}
</style>