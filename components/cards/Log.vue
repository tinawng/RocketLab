<template>
  <div class="card__container">
    <h1 class="bg-dark bg-opacity-90 text-white">RocketLab 🚀</h1>
    <div class="flex flex-col gap-1">
      <!-- Max 15 rows -->
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
      <h5>Avocado changed <span class="text-orange">Oscillator Type</span> to 25%</h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card__container {
  @apply relative;
  @apply w-72;
  @apply bg-white;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
.card__container:after {
  content: "";
  @apply absolute bottom-0;
  @apply h-full w-full;
  background: linear-gradient(0deg, #FFF 5%, #FFF0 50%);
}

.card__container > * {
  @apply py-4 px-6;
}
</style>