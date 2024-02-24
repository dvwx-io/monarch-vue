<template>
  <Story group="base" title="MType" :layout="{ type: 'grid', width: 500 }">
    <Variant title="Default">
      <MType>Default</MType>
    </Variant>

    <Variant title="Title">
      <MType variant="title">Title</MType>
    </Variant>

    <Variant title="Subtitle">
      <MType variant="subtitle">Subtitle</MType>
    </Variant>

    <Variant title="Paragraph">
      <MType variant="paragraph">Paragraph</MType>
    </Variant>

    <Variant title="Button">
      <MType variant="button">Button</MType>
    </Variant>

    <Variant title="Nest anchor in paragraph">
      <MType>
        Follow the link here
        <MType as="a" href="https://google.com" target="_blank">Testing</MType>
      </MType>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import MType from './MType.vue'
</script>
