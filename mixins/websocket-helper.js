export default {
  data: () => ({
    socket_ip: "192.168.1.101",
    socket_port: "8123",

    socket: null,

    audio_context: null,
    audio_worklet: null,
    audio_master_node: null,
  }),

  methods: {
    async startAudio() {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audio_context = new AudioContext();

      this.audio_master_node = this.audio_context.createGain();
      this.audio_master_node.connect(this.audio_context.destination);

      await this.audio_context.audioWorklet.addModule(
        require("~/assets/js/buffer-processor.worklet.js")
      );

      this.audio_worklet = new AudioWorkletNode(this.audio_context, "buffer-processor");
      this.audio_worklet.connect(this.audio_master_node);
    },

    connectWebSocket() {
      const socket = new WebSocket(`ws://${this.socket_ip}:${this.socket_port}`);

      socket.addEventListener("open", (event) => {
        socket.send(JSON.stringify({ type: 'ask-stream' }));
      });

      socket.addEventListener("message", (event) => {
        if (event.data.size) {
          // 🔊 Message is an audio 'Blob'
          let blob = event.data;

          const reader = new FileReader();
          reader.addEventListener('loadend', () => {
            this.audio_worklet.port.postMessage(reader.result);
          });
          reader.readAsArrayBuffer(blob);
        }
        else {
          // 🎹 Message is a MIDI event
          event = JSON.parse(event.data);
          let midi_event = [];
          midi_event[0] = this.$store.getters["midi/getFunctionMidiName"](event.midi[0]);
          if (midi_event[0] == "cc") midi_event[1] = this.$store.getters["midi/getFunctionMidiName"](event.midi[1]);
          else midi_event[1] = event.midi[1];
          midi_event[2] = event.midi[2];
          this.$nuxt.$emit("rx-midi-event", midi_event);
          this.$nuxt.$emit("log-midi-event", { user_name: event.user_name, midi: midi_event });
        }
      });

      this.$nuxt.$on("tx-midi-event", (midi_event) => {
        midi_event[0] = this.$store.getters["midi/getFunctionMidiValue"](midi_event[0]);
        if (midi_event[0] == 144) midi_event[2] = Math.max(1, midi_event[2]);
        if (midi_event[0] == 176) midi_event[1] = this.$store.getters["midi/getFunctionMidiValue"](midi_event[1]);

        socket.send(JSON.stringify({ type: 'midi-event', data: midi_event }));
      });
    }
  }
}