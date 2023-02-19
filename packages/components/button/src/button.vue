<template>
  <buttom>131</buttom>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { buttonProps } from "./button";

export default defineComponent({
  name: "LsButton",
  props:buttonProps,
  setup() {
    const handlerClick = () => {
      alert("WQ!!!!!!");
    };

    return {
      handlerClick,
    };
  },
});
</script>
