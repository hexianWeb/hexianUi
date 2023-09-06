<template>
  <Transition name="fade">
    <div
      v-if="show"
      ref="_ref"
      class="hx-alert"
      :class="{
        [`hx-alert--${type}`]: type,
        'is-light': effect === 'light',
      }"
    >
      <Icon :icon="infoIcon" v-if="!icon" />
      <Icon :icon="icon" v-else />
      <div class="hx-alert__content">
        <slot>
          <span class="hx-alert__title" :class="{ 'is-center': center }">{{
            content
          }}</span>
        </slot>
      </div>
      <span class="hx-alert__closable" @click="handleCloseAlert">
        <Icon icon="xmark" v-if="closable" pointer />
      </span>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import type { AlertProps, AlertEvent, AlertInstance } from "./types";
import Icon from "../Icon/Icon.vue";

defineOptions({
  name: "hxAlert",
});

const props = withDefaults(defineProps<AlertProps>(), {
  closable: false,
  type: "primary",
  effect: "dark",
});

const iconMap = {
  primary: "circle-info",
  success: "circle-check",
  warning: "warning",
  danger: "circle-xmark",
  info: "circle-info",
};

const infoIcon = computed(() => iconMap[props.type]);

const _ref = ref<AlertInstance>();

const show = ref(true);

const handleCloseAlert: AlertEvent = () => {
  show.value = false;
  return;
};

defineExpose({
  ref: _ref,
});
</script>
