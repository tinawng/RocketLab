<template>
  <div class="page__container">
    <div class="w-full flex justify-between flex-wrap portrait:justify-center portrait:gap-8">
      <cards-log @click.native="connect" />
      <cards-oscillator />
      <cards-filter />
      <cards-envelope />
    </div>
    <div class="w-full flex gap-7 portrait:justify-center portrait:flex-wrap">
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
        <keyboard :base_note="53" />
        <keyboard :base_note="65" />
        <keyboard :base_note="29" />
        <keyboard :base_note="41" />
      </div>
    </div>
  </div>
</template>

<script>
import websocket_helper from "~/mixins/websocket-helper.js";
export default {
  mixins: [websocket_helper],

  mounted() {},

  methods: {
    connect() {
      // 🔊 Audio
      this.startAudio();
      // 🔌 WebSocket
      this.connectWebSocket();
    },
  },
};
</script>

<style lang="postcss">
.page__container {
  @apply w-full;
  @apply portrait:pt-8;
  @apply flex flex-col gap-16;
}
</style>
