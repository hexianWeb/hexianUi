<template>
  <div
    class="hx-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="hx-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-header-${name}`"
      @click="handleItemClick"
    >
      <slot name="title">
        <h3>{{ title }}</h3>
      </slot>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="hx-collapse-item__wrapper" v-show="isActive">
        <div
          class="hx-collapse-item__content"
          :id="`item-content-${name}`"
          v-show="isActive"
        >
          <slot> </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { CollapseItemProps } from "./type";
import { collapseContextKey } from "./symbolStore";
defineOptions({
  name: "HxCollapseItem",
});

const props = defineProps<CollapseItemProps>();

const collapseContext = inject(collapseContextKey);

const isActive = computed(() =>
  collapseContext?.activeNames.value.includes(props.name)
);
const handleItemClick = () => {
  if (props.disabled) {
    return;
  } else {
    collapseContext?.handleItemClick(props.name);
  }
};

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = "0px";
    el.style.overflow = "hidden";
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.overflow = "";
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = "hidden";
  },
  leave(el) {
    el.style.height = "0px";
  },
  afterLeave(el) {
    el.style.overflow = "";
  },
};
</script>
