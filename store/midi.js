export const state = () => ({
    functions: {
        // Global           // https://www.midi.org/specifications-old/item/table-2-expanded-messages-list-status-bytes
        "note-off": 128,
        "note-on": 144,
        "cc": 176,
        "aftertouch": 208,
        "pitch-bend": 224,
        // Presets Banks   // http://www.mamosa.org/jenfi.home/utilitaires/midibankselect.php
        "bank-select-msb": 0,
        "bank-select-lsb": 32,
        "program-change": 192,
        // MiniBrute 2S
        "pressure": 208,
        // MicroFreak       // https://github.com/usercamp/midi/blob/main/Arturia/MicroFreak.csv
        "osc-type": 9,
        "osc-wave": 10,
        "osc-tymbre": 12,
        "osc-shape": 13,
        "filter-cutoff": 23,
        "filter-resonance": 83,
        "cyc-env-rise": 102,
        "cyc-env-fall": 103,
        "cyc-env-hold": 28,
        "cyc-env-amount": 24,
        "lfo-rate-free": 93,
        "lfo-rate-sync": 94,
        "env-attack": 105,
        "env-decay": 106,
        "env-sustain": 29,
        "keyboard-hold": 64,
    },
})

export const mutations = {
}

export const getters = {
    getFunctionMidiValue: (state) => (function_name) => {
        return state.functions[function_name];
    },
    getFunctionMidiName: (state) => (function_value) => {
        return Object.keys(state.functions).find(key => state.functions[key] === function_value);
    }
}