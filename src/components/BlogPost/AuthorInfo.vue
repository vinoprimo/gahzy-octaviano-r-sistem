<template>
    <section class="flex gap-4 items-start self-start ml-64 text-3xl font-bold tracking-tighter leading-none text-amber-300 max-md:ml-2.5">
      <img :src="imageSrc" :alt="`${name}'s profile picture`" class="object-contain shrink-0 mt-1.5 w-12 rounded-full aspect-square" />
      <router-link to="/author" class="basis-auto opacity-[0.87] hover:underline">
        {{ name }}
      </router-link>
    </section>
    <div class="flex gap-2 self-start mt-9 ml-64 text-2xl font-bold leading-none text-gray-800 whitespace-nowrap max-md:ml-2.5">
      <img :src="categoryIconSrc" alt="" class="object-contain shrink-0 my-auto w-6 aspect-square" />
      <span>{{ category }}</span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AuthorInfo',
    props: {
      name: {
        type: String,
        required: true,
      },
      imageSrc: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      categoryIconSrc: {
        type: String,
        required: true,
      },
    },
  });
  </script>
  