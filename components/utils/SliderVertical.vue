<template>
  <div
    ref="slider"
    class="slider__container"
    :style="css_var"
    @mousedown="is_mouse_down = true"
    @mouseup="is_mouse_down = false"
    @mouseleave="is_mouse_down = false"
    @mousemove="seekValue"
    @click="setValue"
  >
    <div class="slider__bar" />
    <div class="slider__thumb" :class="{'slider_dicrete': discrete}" />
  </div>
</template>

<script>
export default {
  props: { discrete: Boolean, step: Number, default_value: Number, color: String },
  model: {
    prop: "value",
    event: "change",
  },
  data: () => ({ is_mouse_down: false, thumb_position: 0, value: 0 }),
  computed: {
    css_var: function () {
      return `--thumb-position: ${this.thumb_position}%; --slider-color: ${this.color}`;
    },
  },
  mounted() {
    var current_step = this.default_value;
    this.thumb_position = current_step * (100 / (this.step - 1));
    this.$emit("update:value", current_step);
    this.value = current_step;
  },
  methods: {
    seekValue(event) {
      if (!this.is_mouse_down) return;
      this.setValue(event);
    },
    setValue(event) {
      var container_height = this.$refs["slider"].clientHeight;
      if (this.discrete) {
        var ratio = Math.max(0, Math.min((event.offsetY / container_height) * 100, 100));
        var current_step = Math.round(ratio / (100 / (this.step - 1)));
        this.thumb_position = current_step * (100 / (this.step - 1));
        this.$emit("update:value", current_step);
        this.value = current_step;
      } else {
        this.thumb_position = Math.max(0, Math.min((event.offsetY / container_height) * 100, 100));
        this.$emit("update:value", this.thumb_position);
        this.value = this.thumb_position;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.slider__container {
  @apply relative;
  @apply h-56 w-10;
  @apply py-3;
  @apply flex items-center;
  @apply cursor-pointer;
  user-select: none;
}
.slider__bar {
  @apply h-full w-0.5;
  @apply mx-auto;
  @apply rounded-full;
  background-color: var(--slider-color);
}
.slider__thumb {
  @apply absolute;
  top: calc(var(--thumb-position) - 0.625rem);
  left: calc(1.25rem - 0.625rem);
  @apply h-5 w-5;
  @apply bg-white border-2 rounded-full;
  border-color: var(--slider-color);
  @apply transition-colors;
  @apply pointer-events-none;
}
.slider__container:active .slider__thumb {
  background-color: var(--slider-color);
}

.slider_dicrete {
  transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>