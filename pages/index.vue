<template>
  <div class="page__container">
    <div class="w-full flex justify-evenly flex-wrap">
      <cards-log />
      <cards-oscillator />
      <cards-filter />
      <cards-envelope />
    </div>
    <div class="w-full flex justify-center flex-wrap gap-8">
      <keyboard />
      <keyboard />
      <keyboard />
      <keyboard />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.page__container {
  @apply w-full;
  @apply flex flex-col gap-10;
}
</style>
