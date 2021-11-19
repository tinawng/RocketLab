<template>
  <div
    ref="slider"
    class="slider__container"
    :style="css_var"
    v-touch:start="() => {is_mouse_down = true}"
    v-touch:end="() => {is_mouse_down = false}"
    v-touch:moving="seekValue"
    @mouseleave="is_mouse_down = false"
    @click="setValue"
  >
    <div class="slider__bar" />
    <div class="slider__thumb" :class="{'slider_dicrete': discrete}" />
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change",
  },

  props: { discrete: Boolean, step: Number, default_value: Number, shown_value: Number, color: String },
  data: () => ({ is_mouse_down: false, thumb_position: 0, value: 0 }),
  computed: {
    css_var: function () {
      return `--thumb-position: ${this.thumb_position}%; --slider-color: ${this.color}`;
    },
  },
  watch: {
    shown_value: function (value) {
      this.thumb_position = value;
    },
  },

  mounted() {
    var current_step = this.default_value;
    if (this.discrete) this.thumb_position = current_step * (100 / (this.step - 1));
    else this.thumb_position = current_step;
    this.value = current_step;
  },

  methods: {
    seekValue(event) {
      if (!this.is_mouse_down) return;
      this.setValue(event);
    },
    setValue(event) {
      var container_width = this.$refs["slider"].clientWidth;

      if (this.discrete) {
        if (event.touches)
          var ratio = Math.max(
            0,
            Math.min(((event.touches[0].clientX - this.$refs["slider"].offsetLeft) / container_width) * 100, 100)
          );
        else var ratio = Math.max(0, Math.min((event.offsetX / container_width) * 100, 100));
        var current_step = Math.round(ratio / (100 / (this.step - 1)));
        this.thumb_position = current_step * (100 / (this.step - 1));
        this.$emit("update:value", current_step);
        this.value = current_step;
      } else {
        if (event.touches)
          this.value = Math.max(
            0,
            Math.min(((event.touches[0].clientX - this.$refs["slider"].offsetLeft) / container_width) * 100, 100)
          );
        else this.value = Math.max(0, Math.min((event.offsetX / container_width) * 100, 100));
        this.$emit("update:value", this.value);
        this.thumb_position = this.value;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.slider__container {
  @apply relative;
  @apply h-6 w-full;
  @apply mx-1.5;
  @apply flex items-center;
  @apply cursor-pointer;
  user-select: none;
}
.slider__bar {
  @apply h-0.5 w-full;
  @apply rounded-full;
  background-color: var(--slider-color);
}
.slider__thumb {
  @apply absolute;
  left: calc(var(--thumb-position) - 0.625rem);
  @apply h-5 w-5;
  @apply bg-white border-2 rounded-full;
  border-color: var(--slider-color);
  @apply transition-colors;
  @apply pointer-events-none;
}
.slider__container:active .slider__thumb {
  background-color: var(--slider-color);
}
</style>