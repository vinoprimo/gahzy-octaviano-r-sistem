<template>
    <ul class="self-start mt-6 ml-60 text-2xl font-bold leading-none text-gray-900 opacity-[0.78] max-md:ml-2.5">
      <li v-for="(point, index) in points" :key="index">{{ point }}</li>
    </ul>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BulletPoints',
    props: {
      points: {
        type: Array as PropType<string[]>,
        required: true,
      },
    },
  });
  </script>