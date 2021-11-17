<template>
  <div class="card__container">
    <h1 class="bg-orange bg-opacity-90 text-white">Oscillator</h1>
    <div>
      <div class="flex justify-between items-center">
        <h4>Type</h4>
        <h4>50%</h4>
      </div>
      <utils-slider class="mt-2" color="#E7793D" />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h4>Wave</h4>
        <h4>50%</h4>
      </div>
      <utils-slider class="mt-2" color="#E7793D" />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h4>Timbre</h4>
        <h4>50%</h4>
      </div>
      <utils-slider class="mt-2" color="#E7793D" />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h4>Shape</h4>
        <h4>50%</h4>
      </div>
      <utils-slider class="mt-2" color="#E7793D" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card__container {
  @apply w-72;
  @apply pb-2;
  @apply bg-white;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
.card__container > * {
  @apply py-4 px-6;
}
</style>