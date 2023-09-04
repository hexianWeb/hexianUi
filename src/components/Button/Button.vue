<template>
  <button
    ref="_ref"
    class="hx-button"
    :class="{
      [`hx-button--${type}`]: type,
      [`hx-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span><slot></slot></span>
  </button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({
  name: "hxButton",
  inheritAttrs: false,
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

const _ref = ref<HTMLButtonElement>();

defineExpose({
  ref: _ref,
});
</script>

<style></style>
