<template>
    <section class="flex flex-col items-center px-1 mt-16 max-w-full font-bold w-[414px] max-md:mt-10">
      <h2 class="self-stretch text-4xl tracking-tighter leading-10 text-center text-gray-800">
        Join our team to be a part of our story
      </h2>
      <p class="mt-4 text-base leading-7 text-center text-zinc-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <button class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5">
        Join Now
      </button>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'JoinTeam',
  });
  </script>