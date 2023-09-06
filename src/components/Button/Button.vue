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
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" :spin="true" v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon" />
    <span><slot></slot></span>
  </button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { ButtonInstance, ButtonProps } from "./types";
import Icon from "../Icon/Icon.vue";
defineOptions({
  name: "hxButton",
  inheritAttrs: false,
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

const _ref = ref<ButtonInstance>();

defineExpose({
  ref: _ref,
});
</script>
