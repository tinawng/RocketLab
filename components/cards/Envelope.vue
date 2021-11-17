<template>
  <div class="card__container">
    <h1 class="bg-blue bg-opacity-80 text-white">Evenlope</h1>
    <div>
      <div class="flex justify-between items-center">
        <h4>Attack</h4>
        <h4>50%</h4>
      </div>
      <utils-slider class="mt-2" color="#447DD9" />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h4>Decay</h4>
        <h4>50%</h4>
      </div>
      <utils-slider class="mt-2" color="#447DD9" />
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h4>Sustain</h4>
        <h4>50%</h4>
      </div>
      <utils-slider class="mt-2" color="#447DD9" />
    </div>
  </div>
</template>

<script>
export default {};
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