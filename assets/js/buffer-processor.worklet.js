class BufferProcessor extends AudioWorkletProcessor {
    constructor() {
        super();

        // Server recording sample rate is 352800 Hz for better latency
        // skip too much => stutter, skip mot enough => lag building up
        this.sub_sampling_ratio = Math.floor(384000 / sampleRate);

        this.buffers = [];
        this.buffers_length_max = 0

        this.port.onmessage = (event) => {
            // Trying to compensate lag build up
            if (this.buffers.length > this.buffers_length_max) {
                this.buffers_length_max = this.buffers.length;
                this.buffers.length = Math.floor(this.buffers.length / 2)
            }

            var incomingData = new Int16Array(event.data);

            while (incomingData.length > 0) {
                let buffer = new Float32Array(128);
                for (let i = 0; i < 128; i++) {
                    buffer[i] = incomingData[i * this.sub_sampling_ratio] / 16384.0;
                }
                this.buffers.unshift(buffer);
                incomingData = incomingData.subarray(128 * this.sub_sampling_ratio);
            }

        }
    }

    process(inputs, outputs) {
        const output = outputs[0]
        const audio_chunck = this.buffers.pop();

        if (audio_chunck != undefined) {
            output.forEach(channel => {
                for (let i = 0; i < channel.length; i++) {
                    channel[i] = audio_chunck[i];
                }
            })
        }

        return true
    }
}

registerProcessor('buffer-processor', BufferProcessor)