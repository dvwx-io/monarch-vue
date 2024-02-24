import { defineConfig, defaultColors } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  responsivePresets: [
    {
      label: 'Mobile (Small)',
      width: 320,
      height: 560,
    },
    {
      label: 'Mobile (Medium)',
      width: 360,
      height: 640,
    },
    {
      label: 'Mobile (Large)',
      width: 414,
      height: 896,
    },
    {
      label: 'Tablet',
      width: 768,
      height: 1024,
    },
    {
      label: 'Laptop (Small)',
      width: 1024,
      height: null,
    },
    {
      label: 'Laptop (Large)',
      width: 1366,
      height: null,
    },
    {
      label: 'Desktop',
      width: 1920,
      height: null,
    },
    {
      label: '4K',
      width: 3840,
      height: null,
    },
  ],
  tree: {
    groups: [
      {
        id: 'top',
        title: '', // No toggle
      },
      {
        id: 'base',
        title: 'Base Components',
      },
    ],
  },
  theme: {
    title: 'Monarch',
    colors: {
      gray: defaultColors.zinc,
      primary: defaultColors.cyan,
    },
  },
  plugins: [HstVue()],
})
