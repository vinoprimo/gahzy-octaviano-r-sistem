<template>
    <section class="flex flex-col mt-16 max-w-full text-5xl font-bold tracking-tighter leading-none text-gray-800 rounded-none w-[1282px] max-md:mt-10 max-md:text-4xl">
      <h2 class="self-start max-md:text-4xl">All posts</h2>
      <hr class="shrink-0 mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32] max-md:max-w-full" />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AllPosts',
  });
  </script>