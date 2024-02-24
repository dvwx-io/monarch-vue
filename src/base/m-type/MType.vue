<template>
  <Component :is="as">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import { MTypeProps } from './MType.types.ts'

withDefaults(defineProps<MTypeProps>(), {
  variant: 'paragraph',
  as: 'p',
})
</script>

<style lang="scss" scoped></style>
