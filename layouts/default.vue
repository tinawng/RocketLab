<template>
  <div class="layout__container">
    <Nuxt />
  </div>
</template>

<style lang="postcss">
#__layout {
  @apply bg-white;
}
.layout__container {
  @apply min-h-screen max-w-7xl portrait:max-w-none;
  @apply mx-auto;
  @apply flex justify-center items-center;
}
</style>
