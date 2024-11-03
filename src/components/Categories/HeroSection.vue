<template>
    <section class="flex flex-col self-center mt-20 w-full text-base text-center text-gray-800 max-md:mt-10 max-md:max-w-full">
      <div class="flex flex-col justify-center items-center p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
        <div class="flex flex-col items-center max-w-full w-[472px]">
          <h1 class="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">
            Business
          </h1>
          <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <p class="mt-8 font-medium leading-none uppercase tracking-[3px]">
            Blog &gt; Business
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HeroSection',
  });
  </script>