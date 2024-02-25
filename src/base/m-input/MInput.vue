<template>
  <input v-model="modelValue" class="m-input" />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
})
</script>

<style lang="scss">
@import '../../styles/colors';
@import '../../styles/spacing';

.m-input {
  padding: map-get($spacing, 3) map-get($spacing, 2);
  background-color: $background;
  color: $foreground;
  border-radius: $radius;
}
</style>
