<template>
  <div class="page__container">
    <div class="w-full flex justify-between flex-wrap">
      <cards-log />
      <cards-oscillator />
      <cards-filter />
      <cards-envelope />
    </div>
    <div class="w-full flex gap-7">
      <div class="text-center">
        <h4>Pitch</h4>
        <utils-slider-vertical color="#00004C" />
      </div>
      <div class="text-center">
        <h4>Glide</h4>
        <utils-slider-vertical color="#00004C" />
      </div>
      <div class="text-center">
        <h4>Glide</h4>
        <utils-slider-vertical color="#00004C" />
      </div>
      <div class="flex justify-end flex-wrap gap-8">
        <keyboard />
        <keyboard />
        <keyboard />
        <keyboard />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="postcss">
.page__container {
  @apply w-full;
  @apply flex flex-col gap-16;
}
</style>
