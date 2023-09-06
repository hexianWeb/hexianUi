<template>
  <i
    class="hx-icon"
    :class="{ [`hx-icon--${type}`]: type, 'is-poninter': pointer }"
    :style="`color: ${customStyles};`"
  >
    <FontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { omit } from "lodash-es";
import type { IconProps } from "./type";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineOptions({
  name: "HxIcon",
  inheritAttrs: false,
});
const props = defineProps<IconProps>();
const filteredProps = computed(() => omit(props, ["type", "color"]));

const customStyles = computed(() => {
  return props.color ? props.color : "inherit";
});
</script>
