<template>
    <nav class="flex gap-4 mt-16 max-w-full font-bold text-center rounded-none w-[174px] max-md:mt-10">
      <a href="#" class="grow my-auto text-2xl leading-none text-zinc-500">&lt; Prev</a>
      <a href="#" class="text-3xl tracking-tighter leading-none text-gray-800">Next &gt;</a>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Pagination',
  });
  </script>