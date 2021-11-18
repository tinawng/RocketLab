<template>
  <div class="card__container" @click="triggerNotifPanel()">
    <div class="card__title">
      <h1>RocketLab</h1>
      <img class="h-7 w-7" src="/img/rocket.png" alt="logo" />
    </div>
    <div class="card__content">
      <transition name="slide">
        <div v-if="notif_panel" class="card__notif">
          <h1>Next preset in..</h1>
          <h1 class="text-5xl">{{countdown}}</h1>
        </div>
      </transition>

      <div class="card__log">
        <!-- Max 13 rows -->
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
  </div>
</template>

<script>
export default {
  data: () => ({ notif_panel: false, countdown: 5 }),

  methods: {
    triggerNotifPanel() {
      this.notif_panel = true;
      var countdown_interval = setInterval(() => {
        this.countdown--;
        if (this.countdown < 0) {
          clearInterval(countdown_interval);
          this.countdown = 5;
          this.notif_panel = false;
        }
      }, 1000);
    },
  },

  // created() {
  //   setInterval(() => {
  //     this.notif = !this.notif;
  //   }, 2000);
  // },
};
</script>

<style lang="postcss" scoped>
.card__container {
  @apply w-72;
  @apply bg-white;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
.card__title {
  @apply bg-dark bg-opacity-90 text-white;
  @apply flex items-center gap-3;
}
.card__content {
  @apply relative;
  @apply overflow-hidden;
}

.card__notif {
  @apply absolute top-0 left-0 z-10;
  @apply h-full w-full;
  @apply bg-light-blue text-dark;
  @apply flex flex-col justify-center items-center gap-5;
  font-family: "Helvetica Now Display";
  @apply font-bold;
}

.card__log {
  @apply relative;
  @apply flex flex-col gap-1;
}
.card__log:after {
  content: "";
  @apply absolute bottom-0;
  @apply h-full w-full;
  background: linear-gradient(0deg, #fff 0%, #fff0 30%);
}

.card__container > * {
  @apply py-4 px-6;
}

.slide-enter-active,
.slide-leave-active {
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.6s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>