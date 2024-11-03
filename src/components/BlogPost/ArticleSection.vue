<template>
    <article class="mt-16 max-w-[843px] max-md:mt-10 max-md:max-w-full">
      <h3 class="text-4xl font-bold tracking-tighter leading-10 text-gray-800">
        {{ title }}
      </h3>
      <template v-if="typeof content === 'string'">
        <p class="mt-4 text-base leading-7 text-zinc-500">
          {{ content }}
        </p>
      </template>
      <template v-else>
        <p v-for="(paragraph, index) in content" :key="index" class="mt-4 text-base leading-7 text-zinc-500">
          {{ paragraph }}
        </p>
      </template>
    </article>
  </template>
  
  <script lang="ts">
  // @ts-ignore
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'ArticleSection',
    props: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: [String, Array] as PropType<string | string[]>,
        required: true,
      },
    },
  });
  </script>