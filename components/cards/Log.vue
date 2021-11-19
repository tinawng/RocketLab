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

      <!-- <div class="card__logs"> -->
      <transition-group name="list" tag="div" class="card__logs">
        <h5 v-for="log in logs" :key="log.id">
          <span class="text-blue">{{log.user}}</span> changed <span class="text-orange">{{log.type}}</span> to {{log.value}}
        </h5>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    notif_panel: false,
    countdown: 5,
    logs: [],
  }),

  created() {
    this.$nuxt.$on("log-midi-event", (event) => {
      this.logs.unshift({ user: event.user_name, type: event.midi[1], value: Math.floor(event.midi[2]), id: this.UUID() });
    });
  },

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

    UUID() {
      var dt = new Date().getTime();
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
      return uuid;
    },
  },
};
</script>

<style lang="postcss" scoped>
.card__container {
  @apply w-72;
  @apply bg-white;
  @apply flex flex-col;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
.card__title {
  @apply bg-dark bg-opacity-90 text-white;
  @apply flex items-center gap-3;
}
.card__content {
  @apply relative;
  @apply h-full;
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

.card__logs {
  @apply relative;
  @apply h-64;
  @apply flex flex-col gap-1;
  @apply overflow-hidden;
}
.card__logs:after {
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

.list-enter-active,
.list-leave-active {
  transition: all 0.2s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>