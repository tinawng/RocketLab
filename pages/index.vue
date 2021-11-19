<template>
  <div class="page__container">
    <div class="w-full flex justify-between flex-wrap portrait:justify-center portrait:gap-8">
      <cards-log />
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
export default {
  mounted() {
    const socket = new WebSocket("ws://192.168.34.203:8123");

    socket.addEventListener("open", (event) => {
      this.$nuxt.$on("tx-midi-event", (midi_event) => {
        midi_event[0] = this.$store.getters["midi/getFunctionMidiValue"](midi_event[0]);
        if (midi_event[0] == 144) midi_event[2] = Math.max(1, midi_event[2]);
        if (midi_event[0] == 176) midi_event[1] = this.$store.getters["midi/getFunctionMidiValue"](midi_event[1]);

        socket.send(JSON.stringify(midi_event));
      });
    });

    socket.addEventListener("message", (event) => {
      event = JSON.parse(event.data);

      let midi_event = [];
      midi_event[0] = this.$store.getters["midi/getFunctionMidiName"](event.midi[0]);
      if (midi_event[0] == "cc") midi_event[1] = this.$store.getters["midi/getFunctionMidiName"](event.midi[1]);
      else midi_event[1] = event.midi[1];
      midi_event[2] = event.midi[2];
      this.$nuxt.$emit("rx-midi-event", midi_event);
      this.$nuxt.$emit("log-midi-event", { user_name: event.user_name, midi: midi_event });
    });
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
