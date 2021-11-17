<template>
  <div class="key__container" :class="{'key_dark': dark}"></div>
</template>

<script>
export default {
  props: {
    dark: Boolean,
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