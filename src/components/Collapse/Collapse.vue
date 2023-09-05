<template>
  <div class="hx-collapse">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, watch } from "vue";
import { collapseContextKey } from "./symbolStore";
import type { NameType, CollapseProps, CollapseEmits } from "./type";
defineOptions({
  name: "HxCollapse",
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

const activeNames = ref<NameType[]>(props.modelValue);

watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue;
  }
);
if (props.according && activeNames.value.length > 1) {
  console.error("手风琴 mode 只允许激活一个展示面板");
}
const handleItemClick = (item: NameType) => {
  if (props.according) {
    activeNames.value = [activeNames.value[0] === item ? "" : item];
  } else {
    const index = activeNames.value.indexOf(item);
    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(item);
    }
  }
  emits("update:modelValue", activeNames.value);
  emits("change", activeNames.value);
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>
