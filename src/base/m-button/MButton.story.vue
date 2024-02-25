<template>
  <Story group="base" title="MButton" :layout="{ type: 'grid', width: 500 }">
    <template #controls>
      <HstSelect
        v-model="state.variant"
        title="Variant"
        :options="variantOptions"
      />
    </template>

    <Variant title="Default">
      <MButton v-bind="state" @click="logEvent('Click', $event)">
        Button
      </MButton>
    </Variant>

    <Variant title="Primary">
      <MButton
        v-bind="state"
        variant="primary"
        @click="logEvent('Click', $event)"
      >
        Button
      </MButton>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { logEvent } from 'histoire/client'

import type { MButtonProps, MButtonVariant } from './MButton.types.ts'

import MButton from './MButton.vue'

const state = reactive<MButtonProps>({
  variant: 'secondary',
  as: 'button',
})

const variantOptions: Record<MButtonVariant, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
}
</script>
