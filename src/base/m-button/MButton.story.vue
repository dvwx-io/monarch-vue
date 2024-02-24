<template>
  <Story title="Base/MButton">
    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstSelect
        v-model="state.variant"
        title="Variant"
        :options="variantOptions"
      />
    </template>

    <Variant title="Default">
      <MButton v-bind="state" @click="logEvent('Button Click', $event)">
        Button
      </MButton>
    </Variant>

    <Variant title="Primary">
      <MButton
        v-bind="state"
        variant="primary"
        @click="logEvent('Button Click', $event)"
      >
        Button
      </MButton>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import MButton from './MButton.vue'
import { type MButtonProps, type MButtonVariant } from './MButton.types.ts'
import { logEvent } from 'histoire/client'
import { reactive } from 'vue'

const state = reactive<MButtonProps>({
  disabled: false,
  variant: 'secondary',
  as: 'button',
})

const variantOptions: Record<MButtonVariant, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
}
</script>
