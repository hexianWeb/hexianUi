<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <Button ref="buttonRef">Test Button</Button>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading Icon</Button>
    <Button size="large" icon="user">User Icon</Button><br /><br />
    <Collapse v-model="openedValue">
      <CollapseItem name="hexian" title="hexian"> hexian</CollapseItem>
      <CollapseItem name="hexian2">
        <template #title>
          <h2><Icon icon="arrow-up" />template Title</h2>
        </template>
        default content default content default content default content default
        content default content default content default content default content
        default content default content
      </CollapseItem>
    </Collapse>
    <!-- dark -->
    <Alert content="TEST Content" type="primary" />
    <Alert content="TEST Content" type="success" />
    <Alert content="TEST Content" type="warning" />
    <Alert content="TEST Content" type="info" />
    <Alert content="TEST Content" type="danger" />
    <!-- light -->
    <Alert content="TEST Content" type="primary" effect="light" />
    <Alert content="TEST Content" type="success" effect="light" />
    <Alert content="TEST Content" type="warning" effect="light" />
    <Alert content="TEST Content" type="info" effect="light" />
    <Alert content="TEST Content" type="danger" effect="light" />
    <!-- closeable -->
    <Alert content="可关闭 icon" closable />
    <Alert content="这是 content 设定的内容" effect="light" />
    <Alert>
      <span>这是 solt 设定的内容</span>
    </Alert>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";
import Icon from "./components/Icon/Icon.vue";
import Alert from "./components/Alert/Alert.vue";
import type { ButtonInstance } from "./components/Button/types";
import type { NameType } from "./components/Collapse/type";
const buttonRef = ref<ButtonInstance | null>(null);
onMounted(() => {
  console.log(buttonRef.value && buttonRef.value.ref);
});

const openedValue = ref<NameType[]>(["hexian2"]);
</script>
