<template>
  <Story group="base" title="MInput" :layout="{ type: 'grid', width: 500 }">
    <Variant title="Default">
      <MInput v-model="state.model" />
    </Variant>

    <Variant title="Default Value">
      <MInput v-model="state.model" default-value="Test" />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import MInput from './MInput.vue'
import { reactive } from 'vue'

const state = reactive<{ model?: string }>({
  model: undefined,
})
</script>
